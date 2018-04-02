
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
  
  
  var s = new SVG({width: 256, height: 256});
  var g = new SVGGroup();
  var rect = new SVGRect({width:10,height:10},{x:20,y:20});
  rect.style.setStyle("fill","red");
  var back = new SVGRect({width:30,height:30},{x:10,y:10});
  back.style.setStyle("fill","black");
  back.style.setStyle("opacity","0.5");
  s.addChild(back);
  g.addChild(rect);
  s.addChild(g);
  
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
  var compassOverlay = Overlays.addOverlay("image",{
    x: (Window.innerWidth * 0.5) - 180,
    y: Window.innerHeight - 40,
    width: 360,
    height: 30,
    subImage: { x: 90, y: 0, width: 360, height: 30},
    imageURL: compass("green",0),
    visible: true,
    color: {
      red: 0,
      green: 255,
      blue: 0
    },
  });
  //console.log(compas("green",0));
  
  //console.log(s.serialize());
  
  Script.scriptEnding.connect(scriptEnding);
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
    ++lastCompass;
    if(lastCompass > 255)lastCompass = 0;
    var set = {subImage: { x: lastCompass, y: 0, width: 360, height: 30},color:{red: lastCompass,green: 255,blue: 0}};
    //console.log(JSON.stringify(set));
    Overlays.editOverlay(compassOverlay,set);
    //console.log(JSON.stringify(Overlays.getProperty(compassOverlay,"imageURL")));
  }
  
  function scriptEnding(){
    //Overlays.deleteOverlay(svgOverlay);
    Overlays.deleteOverlay(compassOverlay);
    Script.clearInterval(tickVar);
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
  
  function compas(col,off){
    var t = 0 + (off > 0 ? (360 - off) : off * -1);
    return 'data:image/svg+xml;xml,' + 
    '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="30">' +
      '<rect x="0" y="0" width="360" height="30" fill="grey" opacity="0.5" />' +
      '<line x1="0" x2="360" y1="29" y2="29" stroke-width="2" stroke="' + col + '"/>' +
      '<line x1="180" x2="180" y1="8" y2="0" stroke-width="2" stroke="' + col + '"/>' +
      '<text font-family="monospace" font-weight="bold" x="182" y="8" fill="' + col + '">' + t + '</text>' +
      '<g transform="translate(' + off + ')">' +
        '<line x1="-180" x2="-180" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="-178" y="20" fill="' + col + '">0</text>' +
        '<line x1="-135" x2="-135" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="-90" x2="-90" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="-88" y="20" fill="' + col + '">90</text>' +
        '<line x1="-45" x2="-45" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="0" x2="0" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="2" y="20" fill="' + col + '">180</text>' +
        '<line x1="45" x2="45" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="90" x2="90" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="92" y="20" fill="' + col + '">270</text>' +
        '<line x1="135" x2="135" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="180" x2="180" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="182" y="20" fill="' + col + '">0</text>' +
        '<line x1="225" x2="225" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="270" x2="270" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="272" y="20" fill="' + col + '">90</text>' +
        '<line x1="315" x2="315" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="360" x2="360" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="362" y="20" fill="' + col + '">180</text>' +
        '<line x1="405" x2="405" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="450" x2="450" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="452" y="20" fill="' + col + '">270</text>' +
        '<line x1="495" x2="495" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
        
        '<line x1="540" x2="540" y1="28" y2="10" stroke-width="2" stroke="' + col + '"/>' +
        '<text font-family="monospace" font-weight="bold" x="542" y="20" fill="' + col + '">0</text>' +
        '<line x1="585" x2="585" y1="28" y2="23" stroke-width="2" stroke="' + col + '"/>' +
      '</g>' +
    '</svg>';
  }
  
  
})();