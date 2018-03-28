//
// New Inspect
//
//  A Rewrite of Clément Brisset's inspect.js
//
//
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
//
//
/* globals Script, Controller, Picks, PickType, Camera, Entities, AvatarList, Vec3, Quat, Reticle, Overlays */
(function() {

  Controller.mousePressEvent.connect(mousePressEvent);
  Controller.mouseReleaseEvent.connect(mouseReleaseEvent);
  Controller.mouseMoveEvent.connect(mouseMoveEvent);

  Controller.keyPressEvent.connect(keyPressEvent);
  //Controller.keyReleaseEvent.connect(keyReleaseEvent);

  Script.update.connect(update);
  Script.scriptEnding.connect(scriptEnding);

  //Constants
  var MODE_PAN = "pan";
  var MODE_ORBIT = "orbit";
  var MODE_RADIAL = "radial";
  var MODE_NONE = "none";

  var PI = Math.PI;
  var HALF_PI = PI / 2.0;
  var RAD_TO_DEG = 180.0 / PI;

  var AZIMUTH_RATE = 90.0;
  var ALTITUDE_RATE = 200.0;
  var RADIUS_RATE = 1.0 / 100.0;
  var PAN_RATE = 250.0;
  var AVATAR_POSITION_SLOP = 0.1;
  var AVATAR_ROTATION_SLOP = 0.09;

  var Y_AXIS = {
    x: 0,
    y: 1,
    z: 0
  };
  var X_AXIS = {
    x: 1,
    y: 0,
    z: 0
  };
  
  showCursor();

  var mode = MODE_NONE;

  var cameraActive = false;
  var controlActive = false;

  var oldCameraState = null;

  var cameraTarget = null;

  var startCameraState, startTime, easedIn;
  var currentCameraState = null;
  var nextCameraState = null;

  var easeInDivider = 0.01;

  var markerID = null;
  
  var cursorHidden = false;
  
  var oldCursorPosition = null;

  var EntityRayPickID = Picks.createPick(PickType.Ray, {
    joint: 'Mouse',
    filter: Picks.PICK_ENTITIES | Picks.PICK_AVATARS | Picks.PICK_INCLUDE_NONCOLLIDABLE | Picks.PICK_OVERLAYS,
    enabled: true,
  });

  function scriptEnding() {
    Picks.removePick(EntityRayPickID);
    
    restoreCameraState();
    
    showCursor();
    clearMarker();

    Controller.keyPressEvent.disconnect(keyPressEvent);

    Controller.mousePressEvent.disconnect(mousePressEvent);
    Controller.mouseReleaseEvent.disconnect(mouseReleaseEvent);
    Controller.mouseMoveEvent.disconnect(mouseMoveEvent);
  }

var intersects = ["INTERSECTED_NONE","INTERSECTED_ENTITY","INTERSECTED_OVERLAY","INTERSECTED_AVATAR","INTERSECTED_HUD"];
function getIntersectType(t){return intersects[t];}
  
  
  function mousePressEvent(event) {
    calculateModeFromEvent(event);
    var pickRay = Picks.getPrevPickResult(EntityRayPickID);
    if(pickRay.type == Picks.INTERSECTED_OVERLAY)return;
    if(mode !== MODE_NONE) {
        if(!cameraActive){
          activate();
        }
    } else {
      return;
    }
    controlActive = true;
    
    easedIn = false;
    startCameraState = {
      position: Camera.getPosition(),
      orientation: Camera.getOrientation()
    };
    startTime = Date.now();
    if (pickRay.intersects) {
      var offset = {
        x: 0,
        y: 0,
        z: 0
      };
      var center = pickRay.intersection;
      switch (pickRay.type) {
        case Picks.INTERSECTED_ENTITY:
          var entity = Entities.getEntityProperties(pickRay.objectID);
          offset = Vec3.subtract(pickRay.intersection, entity.position);
          break;
        case Picks.INTERSECTED_AVATAR:
          var avatar = AvatarList.getAvatar(pickRay.objectID);
          if (avatar.sessionID === pickRay.objectID) {
            offset = {
              x: 0,
              y: 0.5,
              z: 0
            };
            center = avatar.position;
            center.y += offset.y;
          }
          break;
      }
      var direction = Vec3.subtract(startCameraState.position , center);
      var radius = Vec3.length(direction);
      cameraTarget = {
        id: pickRay.objectID,
        offset: offset,
        center: center,
        type: pickRay.type,
        radius: radius,
        direction: direction,
        azimuth: Math.atan2(direction.z, direction.x),
        altitude: Math.asin(direction.y / radius)
      }
      nextCameraState = calculateNextCameraState(oldCursorPosition);
      oldCursorPosition = {x:event.x,y:event.y};
      currentCameraState = nextCameraState;
      hideCursor();
      setMarker(cameraTarget.center,cameraTarget.radius);
    }
  }

  function mouseReleaseEvent(event) {
    calculateModeFromEvent(event);
    if (controlActive) {
      Reticle.setPosition(Vec3.multiply(0.5, {
        x: Window.innerWidth,
        y: Window.innerHeight
      }));
      showCursor();
      clearMarker();
      console.log("Inspect Camera: Control loss");
      controlActive = false;
    }
  }

  function mouseMoveEvent(event) {
    if (!controlActive) return;
    calculateModeFromEvent(event);
    nextCameraState = calculateNextCameraState({x:event.x,y:event.y});
  }

  function keyPressEvent(event) {
    if (/^ESC|LEFT|RIGHT|UP|DOWN|[wasdWASD]$/.test(event.text)) {
      deactivate();
    }
  }
  
  function calculateNextCameraState(newCursorPosition){
    var diff = {
      x: newCursorPosition.x - oldCursorPosition.x,
      y: newCursorPosition.y - oldCursorPosition.y,
    };
    oldCursorPosition = newCursorPosition;
    var state = currentCameraState;
    switch(mode){
      case MODE_PAN:
        state = calculatePanMovement(diff,currentCameraState);
        break;
      case MODE_ORBIT:
        state = calculateOrbitMovement(diff,currentCameraState);
        break;
      case MODE_RADIAL:
        state = calculateRadialMovement(diff,currentCameraState);
        break;
    }
    return state;
  }
  
  function clampCameraTarget(){
    if(cameraTarget.radius < 1){
      cameraTarget.radius = 1;
    }
    if(cameraTarget.altitude > HALF_PI){
      cameraTarget.altitude = HALF_PI;
    }else if(cameraTarget.altitude < -HALF_PI){
      cameraTarget.altitude = -HALF_PI;
    }
  }
  
  function calculateRadialMovement(move,state,target){
    cameraTarget.azimuth += move.x / AZIMUTH_RATE;
    cameraTarget.radius += cameraTarget.radius * move.y * RADIUS_RATE;
    
    clampCameraTarget();
    
    cameraTarget.direction = {
      x: (Math.cos(cameraTarget.altitude) * Math.cos(cameraTarget.azimuth)) * cameraTarget.radius,
      y: Math.sin(cameraTarget.altitude) * cameraTarget.radius,
      z: (Math.cos(cameraTarget.altitude) * Math.sin(cameraTarget.azimuth)) * cameraTarget.radius
    };
    
    return {
      position: Vec3.sum(cameraTarget.center,cameraTarget.direction),
      orientation: orientationOf(cameraTarget.direction)
    };
  }
  
  function calculateOrbitMovement(move,state,target){
    cameraTarget.azimuth += move.x / AZIMUTH_RATE;
    cameraTarget.altitude += move.y / ALTITUDE_RATE;
    
    clampCameraTarget();
    
    cameraTarget.direction = {
      x: (Math.cos(cameraTarget.altitude) * Math.cos(cameraTarget.azimuth)) * cameraTarget.radius,
      y: Math.sin(cameraTarget.altitude) * cameraTarget.radius,
      z: (Math.cos(cameraTarget.altitude) * Math.sin(cameraTarget.azimuth)) * cameraTarget.radius
    };
    
    return {
      position: Vec3.sum(cameraTarget.center,cameraTarget.direction),
      orientation: orientationOf(cameraTarget.direction)
    };
  }
  
  function calculatePanMovement(move,state,target){
    var up = Quat.getUp(currentCameraState.orientation);
    var right = Quat.getRight(currentCameraState.orientation);
    //var distance = Vec3.length(vector);

    var dv = Vec3.sum(
      Vec3.multiply(up, cameraTarget.radius * move.y / PAN_RATE), 
      Vec3.multiply(right, -cameraTarget.radius * move.x / PAN_RATE)
    );

    cameraTarget.center = Vec3.sum(cameraTarget.center, dv);
    
    return {
      position: Vec3.sum(cameraTarget.center,cameraTarget.direction),
      orientation: currentCameraState.orientation
    };
  }
  

  function update() {
    if(!cameraActive)return;
    if(!easeIn() && controlActive){
      setCameraState(nextCameraState);
      currentCameraState = nextCameraState;
      setMarker(cameraTarget.center,cameraTarget.radius);
    }
  }

  function easeIn() {
    if (easedIn) return false;
    var delta = (Date.now() - startTime) * easeInDivider;
    if (delta >= 1) {
      return false;
      easedIn = true;
    } else {
      setCameraState({position: vLerp(startCameraState.position, nextCameraState.position, delta),  orientation: qLerp(startCameraState.orientation, nextCameraState.orientation, delta)});
    }
    return true;
  }

  function hideCursor() {
    Reticle.scale = 0;
  }

  function showCursor() {
    Reticle.scale = 1;
  }

  function setMarker(position, radius) {
    if (markerID == null) {
      markerID = Overlays.addOverlay("sphere", {
        position: position,
        dimensions: Vec3.multiply(radius, {
          x: 0.01,
          y: 0.01,
          z: 0.01
        })
      });
    } else {
      Overlays.editOverlay(markerID, {
        position: position,
        dimensions: Vec3.multiply(radius, {
          x: 0.01,
          y: 0.01,
          z: 0.01
        })
      });
    }
  }
  
  function clearMarker(){
    if(markerID != null){
      Overlays.deleteOverlay(markerID);
      markerID = null;
    }
  }

  function setCameraState(state) {
    if (!cameraActive) return;
    Camera.setPosition(state.position);
    Camera.setOrientation(state.orientation);
  }

  function activate() {
    if (cameraActive) return;
    console.log("Inspect Camera: Activate");
    console.log("Inspect Camera: Control gain");
    cameraActive = true;
    controlActive = true;
    saveCameraState();
    oldCursorPosition = {x:0,y:0};
    Camera.mode = "independent";
    setCameraState(oldCameraState);
    currentCameraState = oldCameraState;
  }

  function deactivate() {
    if (!cameraActive) return;
    console.log("Inspect Camera: Deactivate");
    cameraActive = false;
    controlActive = false;
    restoreCameraState();
  }

  function calculateModeFromEvent(event) {
    calculateMode(event.isControl, event.isAlt, event.isShifted, event);
  }

  function calculateMode(ctrl, alt, shift, e) {
    var newMode = MODE_NONE;
    if (alt) {
      if (ctrl) {
        if (shift) {
          newMode = MODE_PAN;
        } else {
          newMode = MODE_ORBIT;
        }
      } else {
        newMode = MODE_RADIAL;
      }
    }
    mode = newMode;
  }

  function saveCameraState() {
    oldCameraState = {
      mode: Camera.mode,
      position: Camera.getPosition(),
      orientation: Camera.getOrientation()
    }
  }

  function restoreCameraState() {
    Camera.mode = oldCameraState.mode;
    Camera.setPosition(oldCameraState.position);
    Camera.setOrientation(oldCameraState.orientation);
  }

  function vLerp(vecA, vecB, delta) {
    if (delta > 1) return vecB;
    return Vec3.mix(vecA, vecB, delta);
  }

  function qLerp(quatA, quatB, delta) {
    if (delta > 1) return quatB;
    return Quat.mix(quatA, quatB, delta);
  }

  function orientationOf(vector) {
    var direction,
      yaw,
      pitch;

    direction = Vec3.normalize(vector);
    yaw = Quat.angleAxis(Math.atan2(direction.x, direction.z) * RAD_TO_DEG, Y_AXIS);
    pitch = Quat.angleAxis(Math.asin(-direction.y) * RAD_TO_DEG, X_AXIS);
    return Quat.multiply(yaw, pitch);
  }

})();