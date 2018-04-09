/* globals Picks, PickType, Script, Controller, Overlays */

var offset = 1;
//Create our overlay with a subImage property
var over = Overlays.addOverlay("image",{
    x: 50,
    y: 50,
    width: 200,
    height: 200,
    subImage: { x: 500 * offset, y: 500 * offset, width: 400, height: 400},
    imageURL: 'https://i.imgur.com/e9u4L2z.png', // HiFi logo image
    visible: true,
  });

//try to update the image 4 times a second
Script.setInterval(tick,250);

function tick(){
  offset = !offset;
  var overs = {}; var set = {subImage:{ x: 500 * offset, y: 500 * offset, width: 400, height: 400}};
        overs[over] = set;
  
  //call one of the overlay edit functions
  Overlays.editOverlay(over,set);
  //Overlays.editOverlays(overs);
  
  //Log what we tried to set to see that it was something different.
  console.log(JSON.stringify(set));
}


//Cleanup
Script.scriptEnding.connect(scriptEnding);
function scriptEnding() {
  Overlays.deleteOverlay(over);
}