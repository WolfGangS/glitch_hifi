
/* globals Script */

(function() {
    
  var svg = Script.require("../lib/svg.js?" + Date.now());
  
  var SVG = svg.SVG;
  var SVGGroup = svg.SVGGroup;
  var SVGRect = svg.SVGRect;
  
  var s = new SVG();
  var g = new SVGGroup();
  var rect = new SVGRect({width:10,height:10},{x:20,y:20});
  g.addChild(rect);
  s.addChild(g);
  
  console.log(s.serialize());
  
  Script.scriptEnding.connect(scriptEnding);
  
  function scriptEnding(){
    
  }
  
})();