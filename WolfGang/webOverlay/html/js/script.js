/* globals EventBridge */

(function() {
  
  document.addEventListener('DOMContentLoaded', onPageLoad);
  
  function onPageLoad(){
    EventBridge.scriptEventReceived.connect(scriptEvent);
  }
  
  function scriptEvent(msg){
    console.info("ScriptEvent Recieved: " + msg);
    msg = JSON.parse(msg);
    switch(msg.type){
      case "avatar-position":
        document.querySelectorAll("#text").textContent = msg.data.x + ", " + msg.data.y + ", " + msg.data.z;
        break;
    }
  }
  
  function sendWebEvent(type,data){
    data = JSON.stringify({ type: type, data: data });
    console.info("WebEvent Send: " + data);
    EventBridge.emitWebEvent(data);
  }
  
})();