var WGtryFuncs = true;
var WGdebug = false;
var WG_nope = [
  "destroy",
  "account",
  "delete",
  "network",
  "reload",
  "downloadfinished",
  "mbpsOutChanged",
  "script",
  "clearDebugWindow",
  "reset",
  "clear",
  "load",
  "location.goback",
  "location.goForward",
  "location.goToEntry",
  "location.gotoLocalSandbox",
  "console",
  "disable",
  "connect",
  "calibrate",
  "window.alert",
  "window.browse",
  "window.confirm",
  "window.prompt",
  "window.browse",
  "window.show",
];

var WGNORETURN = [];

var WGnope = [];
WG_nope.forEach(function(no){WGnope.push(no.toLowerCase());});

function WGtextOut(str){
  str = str.trim();
  if(str.length > 0){
    //console.info(str);
  }
}

function WGfuncSafe(func){
  if(!WGtryFuncs)return false;
  func = func.toLowerCase();
  var pass = true;
  WGnope.forEach(function(no){
    if(func.indexOf(no) >= 0)pass = false;
  });
  return pass;
}

function WGdumpObjStr(obj,prefix,pkey){
  if(typeof prefix !== "string")prefix = "";
  var str = "{";
  var ks = Object.keys(obj);
  ks.sort();
  var hadKeys = [];
  var hadFuncs = [];
  ks.forEach(function(key,index){
    if(key.indexOf("parent") < 0){
      if(key.substring(0,2) == "WG" || key == pkey){
        return;
      }
      var okey = key;
      key = key.trim();
      while(hadKeys.indexOf(key) >= 0){
        key += "__dupe";
      }
      hadKeys.push(key);
      
      var o = obj[key];
      switch(typeof o){
        case "object":
          if(o != null){
            str += key + ":";
            WGtextOut(str);
            str = "";
            WGdumpObjStr(o,prefix + okey + ".",okey);
          } else {
            str += key + ":null";
          }
          break;
        case "function":
          if(key[key.length - 1] == ")"){
            key = key.substring(0,key.length - 1);
          }
          var key = key.split("(");
          var func = key.shift(key);
          while(hadFuncs.indexOf(func) >= 0){
            func += "__dupe";
          }
          hadFuncs.push(func);
          str += func + ":function(";
          key = key.join("(").split(",");
          key.forEach(function(k,i){
            str += k.replace(/\W/g, '_');
            if(i < (key.length - 1)){
              str += ",";
            }
          });
          str += "){ return ";
          
          if((key.length < 2 && key[0] == "") || key.length < 1){
            if(typeof o.prototype == "object"){
              var n = new o();
              WGtextOut(str);
              str = "";
              WGdumpObjStr(n,prefix + " new " + okey + ".",okey);
            } else {
              if(WGfuncSafe(prefix + func)){
                WGtextOut(prefix + func + " : safe");
                try{
                  var s = obj[okey]();
                    if(typeof s == "undefined" && s == null) {
                      WGNORETURN.push(prefix + okey);
                    }
                  if(typeof s == "object" && s != null){
                    WGtextOut(str);
                    str = "";
                    WGdumpObjStr(s,prefix + okey + ".", okey);
                  } else {
                    str += JSON.stringify(s);
                  }
                } catch (e){
                  str += "null /* caused error */";
                }
              } else {
                str += "null /* deemed unsafe */";
              }
            }
          } else {
            str += "null";
          }
          str += ";}";
          break;
        default:
          str += key + ":" + JSON.stringify(o);
          break;
      }
      if(index < (ks.length - 1)){
        str += ",";
      }
    }
  });
  WGtextOut(str + "}");
}

WGtextOut("var HiFi = ");
WGdumpObjStr(this);

console.info(" === WG NO RETURN === " + JSON.stringify(WGNORETURN));


// \[[0-9]{1,2}/[0-9]{1,2} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}\] \[ApiDumper\.js\] INFO - 
// \n.*{\n.*return null;\n.*},     >     { return null; },