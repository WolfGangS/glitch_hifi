
/* globals Script Overlays Vec3 Quat Camera*/

(function() {
  //Script.require.debug = true;
  var svgLib = "../lib/svg.js?" + Date.now();
  var SVG = Script.require(svgLib).SVG;
  var SVGGroup = Script.require(svgLib).SVGGroup;
  var SVGRect = Script.require(svgLib).SVGRect;
  
  var PI = Math.PI;
  var HALF_PI = PI / 2.0;
  var RAD_TO_DEG = 180.0 / PI;
  
  
  /*var s = new SVG({width: 256, height: 256});
  var g = new SVGGroup();
  var rect = new SVGRect({width:10,height:10},{x:20,y:20});
  rect.style.setStyle("fill","red");
  var back = new SVGRect({width:30,height:30},{x:10,y:10});
  back.style.setStyle("fill","black");
  back.style.setStyle("opacity","0.5");
  s.addChild(back);
  g.addChild(rect);
  s.addChild(g);*/
  
  /*
  var svgOverlay = Overlays.addOverlay("image", {
        x: 50, y: 50, width: 256, height: 256,
        //subImage: { x: 0, y: 0, width: width, height: height},
        imageURL: s.getUrlData(),
        visible: true,
        alpha: 1.0
    });
    */
  var lastCompass = 0;
  //console.log(compas("green",0));
  
  //console.log(s.serialize());
  
  
  Script.scriptEnding.connect(scriptEnding);
  function scriptEnding(){
    //Overlays.deleteOverlay(svgOverlay);
    Overlays.deleteOverlay(compassOverlay);
    Overlays.deleteOverlay(markerOverlay);
    
    
    Script.clearInterval(tickVar);
  }
  
  
  var compassOverlay = Overlays.addOverlay("image",{
    x: (Window.innerWidth * 0.5) - 180,
    y: Window.innerHeight - 40,
    width: 360,
    height: 30,
    subImage: { x: 0, y: 0, width: 360, height: 30},
    imageURL: compass("green",0),
    visible: true,
    color: {
      red: 0,
      green: 255,
      blue: 0
    },
  });
  var markerOverlay = Overlays.addOverlay("image",{
    x: (Window.innerWidth * 0.5) - 4,
    y: Window.innerHeight - 48,
    width: 8,
    height: 8,
    imageURL: marker(),
    visible: true,
    color: {
      red: 0,
      green: 255,
      blue: 0
    },
  });
  console.log("Compass OverlayID: " + compassOverlay);
  
  var tickVar = Script.setInterval(tick,25);
  
  function tick(){
    var d = Quat.getForward(Camera.getOrientation());
    d.y = 0;
    d = Vec3.normalize(d);
    var f = Vec3.getAngle({x:1,y:0,z:0},d);
    if(Vec3.getAngle({x:0,y:0,z:1},d) < HALF_PI)f *= -1;
    f = Math.round(f * RAD_TO_DEG);
    /*if(f != lastCompass){
      lastCompass = f;
      console.log(f);
      Overlays.editOverlay(compassOverlay,{subImage: { x: f, y: 0, width: 360, height: 30}});
      
    }*/
    if(f < 0) f += 360;
    if(f != lastCompass){
      lastCompass = f;
      //console.log(f);
      Overlays.editOverlay(compassOverlay,{subImage: { x: lastCompass}});
    }
    //console.log(JSON.stringify(Overlays.getProperty(compassOverlay,"imageURL")));
  }
  
  
  function marker() {
    return 'data:image/svg+xml;xml,' + 
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">' +
    '<polygon points="0,0 15,0 8,15" style="fill:white" />' +
    '</svg>';
  }
  function compass() {
    return 'data:image/svg+xml;xml,<svg xmlns="http://www.w3.org/2000/svg" width="720" height="30">' + 
      '<path fill="gray" d="M0 0h720v30H0z" opacity=".5" />' +
      '<path stroke="white" stroke-width="2" d="M0 29h720M0 28V10" />' +
      '<text x="2" y="20" fill="white" font-family="monospace" font-weight="bold">0</text>' +
      '<path stroke="white" stroke-width="2" d="M45 28v-5M90 28V10" />' +
      '<text x="92" y="20" fill="white" font-family="monospace" font-weight="bold">90</text>' +
      '<path stroke="white" stroke-width="2" d="M135 28v-5M180 28V10" />' +
      '<text x="182" y="20" fill="white" font-family="monospace" font-weight="bold">180</text>' +
      '<path stroke="white" stroke-width="2" d="M225 28v-5M270 28V10" />' +
      '<text x="272" y="20" fill="white" font-family="monospace" font-weight="bold">270</text>' +
      '<path stroke="white" stroke-width="2" d="M315 28v-5M360 28V10" />' +
      '<text x="362" y="20" fill="white" font-family="monospace" font-weight="bold">0</text>' +
      '<path stroke="white" stroke-width="2" d="M405 28v-5M450 28V10" />' +
      '<text x="452" y="20" fill="white" font-family="monospace" font-weight="bold">90</text>' +
      '<path stroke="white" stroke-width="2" d="M495 28v-5M540 28V10" />' +
      '<text x="542" y="20" fill="white" font-family="monospace" font-weight="bold">180</text>' +
      '<path stroke="white" stroke-width="2" d="M585 28v-5M630 28V10" />' +
      '<text x="632" y="20" fill="white" font-family="monospace" font-weight="bold">270</text>' +
      '<path stroke="white" stroke-width="2" d="M675 28v-5M720 28V10" />' +
      '<text x="722" y="20" fill="white" font-family="monospace" font-weight="bold">0</text>' +
      '<path stroke="white" stroke-width="2" d="M765 28v-5" />' +
      '</svg>';
    }
  
})();