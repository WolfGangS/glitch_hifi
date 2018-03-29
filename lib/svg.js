function SVGTransform(){
  var that = {};
  that.transforms = {};
  that.string = "";
  that.generic = function(){
    var t = arguments.shift();
    that.transforms[t] = arguments;
    that.updateString();
  }
  
  that.rotate = function(deg,x,y){
    that.transforms["rotate"] = arguments;
    that.updateString();
  }
  
  that.scale = function(x,y){
    that.transforms["scale"] = arguments;
    that.updateString();
  }
  
  that.updateString = function(){
    var trans = [];
    Object.keys(that.tansforms).forEach(function(t){
      trans.push(t + '(' + that.transforms[t].join(' ') + ')');
    });
    if(trans.length > 0){
      that.string = 'transform="' + trans.join(' ') +'"';
    } else {
      that.string = '';
    }
  } 
}

function SVGStyle(){
  var that = {};
  that.string = "";
  that.styles = {};
  that.generic = function(){
    var s = arguments.shift();
    that.styles[s] = arguments;
    that.updateString();
  }
  
  that.updateString = function(){
    var styls = [];
    Object.keys(that.styles).forEach(function(s){
     styls.push(s + ':' + that.stlyes[s].join(' ') + ';');
    });
    if(styls.length > 0){
      that.string = 'style="' + styls.join(' ') +'"';
    } else {
      that.string = '';
    }
  } 
}

function SVGObject(type,props){
  var that = {};
  that.type = type;
  that.properties = {};
  that.style = new SVGStyle();
  that.transform = new SVGTransform();
  that.propertyString = "";
  that.styleString = "";
  that.parent = null;
  that.index = 0;
  that.setProperty = function(prop,val){
    that.properties[prop] = val;
    that.updatePropertyString();
    return that;
  }
  that.setProperties = function(props){
    Object.keys(props).forEach(function(prop){
      that.properties[prop] = props[prop];
    });
    that.updatePropertyString();
    return that;
  }
  that.updatePropertyString = function(){
    var props = [];
    Object.keys(that.properties).forEach(function(prop){
      props.push(prop + '="' + that.properties[prop] + '"');
    });
    that.propertyString = props.join(" ");
  }
  that.serialize = function(){
    return "<" + [that.type,that.propertyString,that.style.string,that.transform.string].join(" ") + "/>";
  }
  that.remove = function(){
    if(that.parent !== null){
      that.parent.removeChild(that.index);
    }
  }
  return that;
}

function SVGContainer(type){
  var that = new SVGObject(type);
  that.children = [];
  that.addChild = function(svgObject){
    svgObject.index = that.children.length;
    svgObject.parent = that;
    that.children.push(svgObject);
    return that;
  }
  that.removeChild = function(index){
    that.children.splice(index,1);
    that.children.forEach(function(i,index){
      i.index = index;
    });
    return that;
  }
  that.serialize = function(){
    var str = "<" + [that.type,that.propertyString,that.style.string,that.transform.string].join(" ")  + ">";
    that.children.forEach(function(child){
      str += child.serialize();
    });
    return str + "</" + that.type + ">";
  }
}

function SVG(){
  var that = new SVGContainer("SVG");
  
}

function SVGCircle(radius,position){
  var that = new SVGObject("circle");
  
  that.setCenter = function(cx,cy){
    if(arguments.length === 1){
      cy = cx.y;
      cx = cx.x;
    }
    that.setProperties({"cx":cx,"cy":cy});
    return that;
  }
  
  that.setRadius = function(r){
    that.setProperty("r",r);
    return that;
  }
  that.setCenter(position.x,position.y);
  
  return that;
}

function SVGRect(size,position){
  var that = new SVGObject("rect");
  
  that.setSize = function(width,height){
    if(arguments.length === 1){
      height = width.height;
      width = width.width;
    }
    that.setProperties({"width":width,"height":height});
    return that;
  }
  
  that.setPosition = function(x,y){
    if(arguments.length === 1){
      y = x.y;
      x = x.x;
    }
    that.setProperties({"x":x,"y":y});
    return that;
  }
  
  that.setRounding = function(rx,ry){
    if(arguments.length === 1){
      ry = rx.y;
      rx = rx.x;
    }
    that.setProperties({"rx":rx,"ry":ry});
    return that;
  }
  that.setSize(size);
  that.setPosition(position);
  return that;
}

function SVGLine(start,end){
  var that = new SVGObject("line");
  
  that.setStart = function(x,y){
    if(arguments.length === 1){
      y = x.y;
      x = x.x;
    }
    that.setProperties({x1:x,y1:y});
    return that;
  }
  
  that.setEnd = function(x,y){
    if(arguments.length === 1){
      y = x.y;
      x = x.x;
    }
    that.setProperties({x2:x,y2:y});
    return that;
  }
  that.setStart(start);
  that.setEnd(end);
  return that;
}

function SVGPoly(type,points){
  if(!(points instanceof Array))points = [];
  var that = new SVGObject("poly" + type);
  that.points = points;
  that.addPoint = function(x,y){
    if(arguments.length < 2){
      y = x.y;
      x = x.x;
    }
    that.points.push({x:x,y:y});
    that.updatePointsProperty();
    return that;
  }
  that.removePoint = function(index){
    that.points.splice(index,1);
    that.updatePointsProperty();
    return that;
  }
  that.updatePoint = function(index,x,y){
    if(arguments.length < 3){
      y = x.y;
      x = x.x;
    }
    that.points[index] = {x:x,y:y};
    that.updatePointsProperty();
    return that;
  }
  that.updatePoitnsProperty = function(){
    var pnts = [];
    that.points.forEach(function(p){
      pnts.push( p.x + "," + p.y );
    });
    that.setProperty("points",pnts.join(" "));
    return that;
  }
  return that;
}
function SVGPolygon(points){
  var that = new SVGPoly("gon",points);
  return that;
}
function SVGPolyLine(points){
  var that = new SVGPoly("line",points);
  return that;
}