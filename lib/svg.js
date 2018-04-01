/* globals Script */

try {
  module.exports = {
    SVG: SVG,
    SVGContainer: SVGContainer,
    SVGSObject: SVGObject,
    SVGTransform : SVGTransform,
    SVGStyle: SVGStyle,
    SVGGroup: SVGGroup,
    SVGCircle: SVGCircle,
    SVGRect: SVGRect,
    SVGLine: SVGLine,
    SVGPolygon: SVGPolygon,
    SVGPolyLine: SVGPolyLine,
  };
} catch(e) {
  /*
  Script.registerValue("SVG",SVG);
  Script.registerValue("Container",SVGContainer);
  Script.registerValue("SObject",SVGObject);
  Script.registerValue("Transform ",SVGTransform);
  Script.registerValue("Style",SVGStyle);
  Script.registerValue("Circle",SVGCircle);
  Script.registerValue("Rect",SVGRect);
  Script.registerValue("Line",SVGLine);
  Script.registerValue("Polygon",SVGPolygon);
  Script.registerValue("PolyLine",SVGPolyLine);
  */
}


//SVG Transform
SVGTransform.prototype.generic = function(trans, args){
    this.transforms[trans] = args;
    this.updateString();
  };
SVGTransform.prototype.updateString= function(){
    var trans = [];
    Object.keys(this.tansforms).forEach(function(t) {
      trans.push(t + '(' + this.transforms[t].join(' ') + ')');
    });
    if (trans.length > 0) {
      this.string = 'transform="' + trans.join(' ') + '"';
    } else {
      this.string = '';
    }
  };
SVGTransform.prototype.rotate= function(deg,x,y){
    if(typeof x === "undefined"){
      this.transforms.rotate = [deg];
    } else {
      this.transforms.rotate = [deg,x,y];
    }
    this.updateString();
  };
SVGTransform.prototype.scale= function(x, y) {
    this.transforms.scale = [x, y];
    this.updateString();
  };
function SVGTransform() {
  if (!(this instanceof SVGTransform)) {
        return new SVGTransform();
  }
  this.transforms = {};
  this.string = "";
}

//SVG Style
SVGStyle.prototype.setStyle = function(style, args) {
    this.styles[style] = args;
    this.updateString();
  };
SVGStyle.prototype.removeStyle = function(style) {
    delete(this.styles[style]);
    this.updateString();
  };
SVGStyle.prototype.updateString = function() {
    var styls = [];
    Object.keys(this.styles).forEach(function(s) {
      styls.push(s + ':' + this.stlyes[s].join(' ') + ';');
    });
    if (styls.length > 0) {
      this.string = 'style="' + styls.join(' ') + '"';
    } else {
      this.string = '';
    }
  };
function SVGStyle() {
  this.string = "";
  this.styles = {};
}

//SVG Object
SVGObject.prototype.setProperty = function(prop, val) {
  if(!(val instanceof Array)){
    val = [val];
  }
    this.properties[prop] = val;
    this.updatePropertyString();
    return this;
  };
SVGObject.prototype.setProperties = function(props) {
    var that = this;
    Object.keys(props).forEach(function(prop) {
      var p = props[prop];
      if(!(p instanceof Array)){
        p = [p];
      }
      that.properties[prop] = p;
    });
    this.updatePropertyString();
    return this;
  };
SVGObject.prototype.updatePropertyString = function() {
    var props = [];
    var prps = this.properties;
    Object.keys(prps).forEach(function(prop) {
      props.push(prop + '="' + prps[prop].join(" ") + '"');
    });
    this.propertyString = props.join(" ");
  };
SVGObject.prototype.serialize = function() {
  var props = [this.type, this.propertyString, this.style.string, this.transform.string];
  props = props.filter(function(prop){return prop.length > 0});
  console.log(props.length);
    return "<" + props.join(" ") + "/>";
  };
SVGObject.prototype.remove = function() {
    if (this.parent !== null) {
      this.parent.removeChild(this.index);
    }
  };
function SVGObject(type, properties) {
  if(typeof properties === "undefined")properties = {};
  this.type = type;
  this.properties = properties;
  this.style = new SVGStyle();
  this.transform = new SVGTransform();
  this.propertyString = "";
  this.styleString = "";
  this.parent = null;
  this.index = 0;
}

//SVG Container (an svg object that can have children
SVGContainer.prototype = Object.create(SVGObject.prototype);
SVGContainer.prototype.addChild = function(svgObject) {
    svgObject.index = this.children.length;
    svgObject.parent = this;
    this.children.push(svgObject);
    return this;
  };
SVGContainer.prototype.removeChild = function(index) {
    this.children.splice(index, 1);
    this.children.forEach(function(i, index) {
      i.index = index;
    });
    return this;
  };
SVGContainer.prototype.serialize = function() {
  var props = [this.type, this.propertyString, this.style.string, this.transform.string];
  props = props.filter(function(prop){return prop.length > 0});
    var str = "<" + props.join(" ") + ">";
    this.children.forEach(function(child) {
      str += child.serialize();
    });
    return str + "</" + this.type + ">";
  };
function SVGContainer(type) {
  SVGObject.call(this,type);
  this.children = [];
}

//SVG main SVG container
SVG.prototype = Object.create(SVGContainer.prototype);
SVG.prototype.setPosition = function(x,y){
  if(typeof y === "undefined"){
    y = x.y;
    x = x.x;
  }
  this.position = {x:x,y:y};
  this.setProperties(this.position);
}
SVG.prototype.setSize = function(width,height){
  if(typeof y === "undefined"){
    height = width.height;
    width = width.width;
  }
  this.size = {width:width,height:height};
  this.setProperties(this.size);
}
SVG.prototype.setViewBox = function(min_x,min_y,width,height){
  this.viewBox = [min_x,min_y,width,height];
  this.setProperty("viewBox",this.viewBox);
}
function SVG() {
  SVGContainer.call(this,"svg");
  this.xmlns = 'http://www.w3.org/2000/svg';
  this.size = {
    width: 256,
    height: 256,
  };
  this.position = {
    x: 0,
    y: 0,
  };
  this.viewBox = [0,0,256,256];
  this.setProperty("xmlns",this.xmlns);
}

//SVGGroup group container
SVGGroup.prototype = Object.create(SVGContainer.prototype);
function SVGGroup() {
  SVGContainer.call(this,"g");
}

//SVGCircle circle SVGObject
SVGCircle.prototype = Object.create(SVGObject.prototype);
SVGCircle.prototype.setCenter = function(cx, cy) {
    if (typeof cy === "undefined") {
      cy = cx.y;
      cx = cx.x;
    }
    this.center = {cx:cx,cy:cy};
    this.setProperties(this.center);
    return this;
  };
SVGCircle.prototype.setRadius = function(r) {
    this.radius = r;
    this.setProperty("r", this.radius);
    return this;
  };
function SVGCircle(radius, position) {
  SVGObject.call(this,"circle");
  this.center = position;
  this.radius = radius;
  this.setCenter(this.position);
  this.setRadius(this.radius);
}

//SVGRect rect SVGObject
SVGRect.prototype = Object.create(SVGObject.prototype);
SVGRect.prototype.setSize = function(width,height){
  if (typeof height === "undefined") {
      height = width.height;
      width = width.width;
    }
  this.size = {width:width,height:height};
    this.setProperties(this.size);
    return this;
};
SVGRect.prototype.setPosition = function(x, y){
  if (typeof y === "undefined") {
      y = x.y;
      x = x.x;
    }
  this.position = {x:x,y:y};
    this.setProperties(this.position);
    return this;
}
SVGRect.prototype.setRounding = function(rx, ry) {
    if (typeof ry === "undefined") {
      ry = rx.y;
      rx = rx.x;
    }
  this.rounding = {rx:rx,ry:ry};
    this.setProperties(this.rounding);
    return this;
  };
function SVGRect(size, position) {
  SVGObject.call(this,"rect");
  this.size = size;
  this.position = position;
  this.rounding = {rx:0,ry:0};
  this.setSize(size);
  this.setPosition(position);
}

//SCGLine line SVGObject
SVGLine.prototype = Object.create(SVGObject.prototype);
SVGLine.prototype.setStart = function(x, y) {
    if (typeof y === "undefined") {
      y = x.y;
      x = x.x;
    }
  this.start = {x1:x,y1:y};
    this.setProperties(this.start);
    return this;
  };
SVGLine.prototype.setEnd = function(x, y) {
    if (typeof y === "undefined") {
      y = x.y;
      x = x.x;
    }
  this.end = {x2:x,y2:y};
    this.setProperties(this.end);
    return this;
  };
function SVGLine(start, end) {
  SVGObject.call(this,"line");
  this.start = {x1:0,y1:0};
  this.end = {x2:0,y2:0};
  this.setStart(start);
  this.setEnd(end);
}

//SVGPoly base object for poly object with points (polygon, polyline)
SVGPoly.prototype = Object.create(SVGObject.prototype);
SVGPoly.prototype.addPoint = function(x, y) {
    if (typeof y === "undefined") {
      y = x.y;
      x = x.x;
    }
    this.points.push({
      x: x,
      y: y
    });
    this.updatePointsProperty();
    return this;
  };
SVGPoly.prototype.removePoint = function(index) {
    this.points.splice(index, 1);
    this.updatePointsProperty();
    return this;
  };
SVGPoly.prototype.updatePoint = function(index, x, y) {
    if (typeof y === "undefined") {
      y = x.y;
      x = x.x;
    }
    this.points[index] = {
      x: x,
      y: y
    };
    this.updatePointsProperty();
    return this;
  };
SVGPoly.prototype.updatePointsProperty = function() {
    var pnts = [];
    this.points.forEach(function(p) {
      pnts.push(p.x + "," + p.y);
    });
    this.setProperty("points", pnts.join(" "));
    return this;
  };
function SVGPoly(type, points) {
  if (!(points instanceof Array)){
    points = [];
  }
  SVGObject.call(this,"poly" + type);
  this.points = points;
}

SVGPolygon.prototype = Object.create(SVGPoly.prototype);
function SVGPolygon(points) {
  SVGPoly.call(this,"gon", points);
}

SVGPolyLine.prototype = Object.create(SVGPoly.prototype);
function SVGPolyLine(points) {
  SVGPoly.call(this,"line", points);
}
