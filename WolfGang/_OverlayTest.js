/* globals Overlays Script Controller Picks PickType*/
var debugging = true;

function debug(a,b,c){
  if(debugging)console.log(a,b,c);
}

//Hook all the overlay mouse events, to function that just console.log the name of the event and the type of overlay clicked
Overlays.hoverEnterOverlay.connect(hoverEnterOverlay);
function hoverEnterOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("hoverEnterOverlay", Overlays.getOverlayType(OverlayID));
  Overlays.editOverlay(OverlayID,{color:{red:255,green:0,blue:0}});
}

Overlays.hoverLeaveOverlay.connect(hoverLeaveOverlay);
function hoverLeaveOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("hoverLeaveOverlay", Overlays.getOverlayType(OverlayID));
  Overlays.editOverlay(OverlayID,{color:{red:0,green:0,blue:0}});
}

Overlays.hoverOverOverlay.connect(hoverOverOverlay);
function hoverOverOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("hoverOverOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mouseDoublePressOffOverlay.connect(mouseDoublePressOffOverlay);
function mouseDoublePressOffOverlay() {
  debug("mouseDoublePressOffOverlay");
}

Overlays.mouseDoublePressOnOverlay.connect(mouseDoublePressOnOverlay);
function mouseDoublePressOnOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("mouseDoublePressOnOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mouseMoveOnOverlay.connect(mouseMoveOnOverlay);
function mouseMoveOnOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("mouseMoveOnOverlay", Overlays.getOverlayType(OverlayID));
}

Overlays.mousePressOffOverlay.connect(mousePressOffOverlay);
function mousePressOffOverlay() {
  debug("mousePressOffOverlay");
}

Overlays.mousePressOnOverlay.connect(mousePressOnOverlay);
function mousePressOnOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("mousePressOnOverlay", Overlays.getOverlayType(OverlayID),JSON.stringify(PointerEvent));
  Overlays.editOverlay(OverlayID,{color:{red:0,green:255,blue:0}});
}

Overlays.mouseReleaseOnOverlay.connect(mouseReleaseOnOverlay);
function mouseReleaseOnOverlay(OverlayID, PointerEvent) {
  if(overlays.indexOf(OverlayID) < 0)return;
  debug("mouseReleaseOnOverlay", Overlays.getOverlayType(OverlayID));
  Overlays.editOverlay(OverlayID,{color:{red:255,green:0,blue:0}});
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

var overlays = [rect,image,text];

//Clean up
Script.scriptEnding.connect(scriptEnding);

function scriptEnding() {
  Overlays.deleteOverlay(rect);
  Overlays.deleteOverlay(image);
  Overlays.deleteOverlay(text);
  
  Overlays.hoverEnterOverlay.disconnect(hoverEnterOverlay);
  Overlays.hoverLeaveOverlay.disconnect(hoverLeaveOverlay);
  Overlays.hoverOverOverlay.disconnect(hoverOverOverlay);
  Overlays.mouseDoublePressOffOverlay.disconnect(mouseDoublePressOffOverlay);
  Overlays.mouseDoublePressOnOverlay.disconnect(mouseDoublePressOnOverlay);
  Overlays.mouseMoveOnOverlay.disconnect(mouseMoveOnOverlay);
  Overlays.mousePressOffOverlay.disconnect(mousePressOffOverlay);
  Overlays.mousePressOnOverlay.disconnect(mousePressOnOverlay);
  Overlays.mouseReleaseOnOverlay.disconnect(mouseReleaseOnOverlay);
}