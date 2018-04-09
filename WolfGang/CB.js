/* globals Script Entities */

(function(){
  
  function ColourCube(){
    this.entityID = null;
  }
  
  
  ColourCube.prototype = {
        hasBecomeActive: false,
        preload: function(id){
          this.entityID = id;
          //Script.update.connect(this.update);
          
        },
        mouseReleaseOnEntity: function(eID, mouseEvent){
          var sum = {red:0,green:0,blue:0};
          var count = 0;
          Entities.getChildrenIDs(this.entityID).forEach(function(id){
            ++count;
            var col = Entities.getEntityProperties(id).color;
            sum = sumCol(sum,col);
          });
          sum = divCol(sum,count);
          Entities.editEntity(this.entityID,{color:sum});
        },
        update: function(event){
            var kids = Entities.getChildrenIDs(this.entityID);
            console.log(JSON.stringify(kids.length));
        }
    }
  
  function colourBetween(a,b,f){
    
  }
  
  
  function multCol(a,b){
    return {
      red:a.red * b.red,
      green:a.green * b.green,
      blue:a.blue * b.blue,
    };
  }
  
  function sumCol(a,b){
    return {
      red:a.red + b.red,
      green:a.green + b.green,
      blue:a.blue + b.blue,
    };
  }
  
  function divCol(a,f){
    return {
      red:a.red / f,
      green:a.green / f,
      blue:a.blue / f,
    };
  }
  
  function sqrtCol(c){
    return {
      red: Math.sqrt(c.red),
      green: Math.sqrt(c.green),
      blue: Math.sqrt(c.blue),
    };
  }
  
  return new ColourCube();
  
  
  
  
});

/*
vector vs(vector a)
{
    a.x = a.x * a.x;
    a.y = a.y * a.y;
    a.z = a.z * a.z;
    return a;
}
vector vsr(vector c)
{
    c.x = llSqrt(c.x);
    c.y = llSqrt(c.y);
    c.z = llSqrt(c.z);
    return c;
}

float tr = 0.0;
integer dir = 1;

default
{
    state_entry()
    {
        llSetTimerEvent(0.01);
    }
    
    timer()
    {
        vector a = llList2Vector(llGetLinkPrimitiveParams(2,[PRIM_COLOR,0]),0);
        a = vs(a);
        vector b = llList2Vector(llGetLinkPrimitiveParams(3,[PRIM_COLOR,0]),0);
        b = vs(b);
        vector c = (a + b) / 2.0;
        c = vsr(c);
        
        tr += llGetTime() * dir;
        if(tr >= 2 || tr <= 0)
        {
            tr = llRound(tr);
            dir *= -1;
            llResetTime();
        }
        a = c * tr;
        llSetColor(a,ALL_SIDES);
        
    }
}
*/