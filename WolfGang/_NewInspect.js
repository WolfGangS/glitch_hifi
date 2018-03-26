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

/* globals Script, Controller, Picks, PickType, Camera, Entities, AvatarList, Vec3, Quat */

(function() {

  Controller.mousePressEvent.connect(mousePressEvent);
  Controller.mouseReleaseEvent.connect(mouseReleaseEvent);
  Controller.mouseMoveEvent.connect(mouseMoveEvent);
  
  Controller.keyPressEvent.connect(keyPressEvent);
  //Controller.keyReleaseEvent.connect(keyReleaseEvent);

  Script.update.connect(update);
  Script.scriptEnding.connect(scriptEnding);
  
  var MODE_PAN = "pan";
  var MODE_ORBIT = "orbit";
  var MODE_RADIAL = "radial";
  var MODE_NONE = "none";
  
  var mode = MODE_NONE;
  
  var cameraActive = false;
  var controlActive = false;
  
  var oldCameraState = null;
  
  var cameraTarget = null;
  
  var startPosition, startOrientation, startTime, easedIn;
  var currentPosition, currentOrientation;
  
  
  var RayPickID = Picks.createPick(PickType.Ray, {
    joint: 'Mouse',
    filter: Picks.PICK_ENTITIES | Picks.PICK_AVATARS | Picks.PICK_INCLUDE_NONCOLLIDABLE,
    enabled: true,
  });
  
  function scriptEnding(){
    Picks.removePick(RayPickID);
    
    
    Controller.keyPressEvent.disconnect(keyPressEvent);

    Controller.mousePressEvent.disconnect(mousePressEvent);
    Controller.mouseReleaseEvent.disconnect(mouseReleaseEvent);
    Controller.mouseMoveEvent.disconnect(mouseMoveEvent);
  }
  
  
  function mousePressEvent(event){
    calculateModeFromEvent(event);
    if(mode !== MODE_NONE && !cameraActive){
      activate();
    }
    if(!cameraActive)return;
    easedIn = false;
    startPosition = Camera.getPosition();
    startOrientation = Camera.getOrientation();
    startTime = Date.now();
    var pickRay = Picks.getPrevPickResult(RayPickID);
    if(pickRay.intersects){
      var offset = {x:0,y:0,z:0};
      var position = pickRay.intersection;
      switch(pickRay.type){
        case Picks.INTERSECTED_ENTITY:
          var entity = Entities.getEntityProperties(pickRay.objectID);
          offset = Vec3.subtract(pickRay.intersection,entity.position);
          break;
        case Picks.INTERSECTED_AVATAR:
          var avatar = AvatarList.getAvatar(pickRay.objectID);
          if(avatar.sessionID === pickRay.objectID){
            offset = {x:0,y:0.5,z:0};
            position = avatar.position;
            position.y += offset.y;
          }
          break;
      }
      cameraTarget = {
        id: pickRay.objectID,
        offset: offset,
        position: position,
        type: pickRay.type,
        distance: Vec3.distance(startPosition,position)
      }
    }
  }
  
  function mouseReleaseEvent(event){
    calculateModeFromEvent(event);
    if(controlActive){
      controlActive = false;
    }
  }
  
  function mouseMoveEvent(event){
    if(!controlActive) return;
    calculateModeFromEvent(event);
  }
  
  function keyPressEvent(event){
    if (/^ESC|LEFT|RIGHT|UP|DOWN|[wasdWASD]$/.test(event.text)) {
      deactivate();
    } 
  }
  
  function update(){
    easeIn();
  }
  
  function easeIn(){
    if(easedIn)return;
    var delta = 1;
    if(delta >= 1){
      setCamera(currentPosition, currentOrientation);
      easedIn = true;
    } else {
      setCamera( vLerp(startPosition,currentPosition,delta) , qLerp(startOrientation,currentOrientation,delta));
    }
  }
  
  function setCamera(position,orientation){
    if(!cameraActive)return;
    Camera.setPosition(position);
    Camera.setOrientation(orientation);
  }
  
  function activate(){
    if(cameraActive)return;
    console.log("Inspect Camera: Activate");
    cameraActive = true;
    controlActive = true;
    saveCameraState();
    Camera.mode = "independent";
  }
  
  function deactivate(){
    if(!cameraActive)return;
    console.log("Inspect Camera: Deactivate");
    cameraActive = false;
    controlActive = false;
    restoreCameraState();
  }
  
  function calculateModeFromEvent(event){
    calculateMode(event.isControl, event.isAlt, event.isShifted,event);
  }
  function calculateMode(ctrl,alt,shift,e){
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
  
})();