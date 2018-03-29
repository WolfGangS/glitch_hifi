

/* globals Script */


(function() {
  
  var overlayProps = {
    title: "",
    source: Script.resolvePath("html/index.html"),
    width: 400,
    height: 800,
    visible: false,
  };
  var overlayHTML = "html/index.html";
  var overlayName = "Bootstrap Overlay";
  
  
  var webOverlay = null;
  
  Script.scriptEnding.connect(scriptEnding);
  
  
  function openWebOverlay(){
    if(webOverlay == null){
      webOverlay = new OverlayWebWindow({
        title: overlayName,
        source: Script.resolvePath(overlayHTML),
        width: 500,
        height: 800,
        visible: false
    });
    }
  }
  
  
  
  function scriptEnding(){
    
  }
  
})();