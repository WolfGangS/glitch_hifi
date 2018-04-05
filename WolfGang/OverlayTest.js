/* globals Overlays Script Controller Picks PickType*/
//Hook all the overlay mouse events, to function that just console.log the name of the event and the type of overlay clicked
Overlays.hoverEnterOverlay.connect(hoverEnterOverlay);
function hoverEnterOverlay(OverlayID, PointerEvent) {
  console.log("hoverEnterOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.hoverLeaveOverlay.connect(hoverLeaveOverlay);
function hoverLeaveOverlay(OverlayID, PointerEvent) {
  console.log("hoverLeaveOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.hoverOverOverlay.connect(hoverOverOverlay);
function hoverOverOverlay(OverlayID, PointerEvent) {
  console.log("hoverOverOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mouseDoublePressOffOverlay.connect(mouseDoublePressOffOverlay);
function mouseDoublePressOffOverlay() {
  console.log("mouseDoublePressOffOverlay");
}

Overlays.mouseDoublePressOnOverlay.connect(mouseDoublePressOnOverlay);
function mouseDoublePressOnOverlay(OverlayID, PointerEvent) {
  console.log("mouseDoublePressOnOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mouseMoveOnOverlay.connect(mouseMoveOnOverlay);
function mouseMoveOnOverlay(OverlayID, PointerEvent) {
  console.log("mouseMoveOnOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mousePressOffOverlay.connect(mousePressOffOverlay);
function mousePressOffOverlay() {
  console.log("mousePressOffOverlay");
}

Overlays.mousePressOnOverlay.connect(mousePressOnOverlay);
function mousePressOnOverlay(OverlayID, PointerEvent) {
  console.log("mousePressOnOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mouseReleaseOnOverlay.connect(mouseReleaseOnOverlay);
function mouseReleaseOnOverlay(OverlayID, PointerEvent) {
  console.log("mouseReleaseOnOverlay", Overlays.getOverlayType(OverlayID));
}


//Create 3 2D overlays, rectangle, image, and text
var rect = Overlays.addOverlay("rectangle", {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  visible: true
});
var image = Overlays.addOverlay("image", {
  x: 100,
  y: 300,
  width: 100,
  height: 100,
  visible: true
});
var text = Overlays.addOverlay("text", {
  x: 100,
  y: 500,
  width: 100,
  height: 100,
  visible: true
});

//Hook the standard mousepress event
Controller.mousePressEvent.connect(mousePressEvent);
//Setup our Picks raycaster
var pickID = Picks.createPick(PickType.Ray, {
    joint: 'Mouse',
    filter: Picks.PICK_OVERLAYS,
    enabled: true,
  });

//Helper function to get the text for an intersection type
var intersects = ["INTERSECTED_NONE","INTERSECTED_ENTITY","INTERSECTED_OVERLAY","INTERSECTED_AVATAR","INTERSECTED_HUD"];
function getIntersectType(t){return intersects[t];}

//When the mouse is clicked, perform out 2 raycast methods (new Picks api and old findRayIntersection
function mousePressEvent(event){
  var pickRay = Picks.getPrevPickResult(pickID);
  var oldPickRay = Camera.computePickRay(event.x, event.y);
  var opick = Overlays.findRayIntersection(oldPickRay);
  
  //Log the intersection type of the picks raycast
  console.log("PICKS RAY: " + getIntersectType(pickRay.type));
  //log if our old style findRayIntersect method got an intersection
  console.log("Overlay intersect: " + JSON.stringify(opick.intersects));
}


//Clean up
Script.scriptEnding.connect(scriptEnding);

function scriptEnding() {
  Overlays.deleteOverlay(rect);
  Overlays.deleteOverlay(image);
  Overlays.deleteOverlay(text);
  
  Picks.removePick(pickID);

  Overlays.hoverEnterOverlay.disconnect(hoverEnterOverlay);
  Overlays.hoverLeaveOverlay.disconnect(hoverLeaveOverlay);
  Overlays.hoverOverOverlay.disconnect(hoverOverOverlay);
  Overlays.mouseDoublePressOffOverlay.disconnect(mouseDoublePressOffOverlay);
  Overlays.mouseDoublePressOnOverlay.disconnect(mouseDoublePressOnOverlay);
  Overlays.mouseMoveOnOverlay.disconnect(mouseMoveOnOverlay);
  Overlays.mousePressOffOverlay.disconnect(mousePressOffOverlay);
  Overlays.mousePressOnOverlay.disconnect(mousePressOnOverlay);
  Overlays.mouseReleaseOnOverlay.disconnect(mouseReleaseOnOverlay);
  
  Controller.mousePressEvent.disconnect(mousePressEvent);
}