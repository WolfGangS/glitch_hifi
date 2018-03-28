/* globals Picks, PickType, Script, Controller */

var EntityRayPickID = Picks.createPick(PickType.Ray, {
    joint: 'Mouse',
    filter: Picks.PICK_ENTITIES | Picks.PICK_AVATARS | Picks.PICK_INCLUDE_NONCOLLIDABLE | Picks.PICK_OVERLAYS,
    enabled: true,
  });
  
  var AvatarRayPickID = Picks.createPick(PickType.Ray, {
    joint: 'Mouse',
    filter: Picks.PICK_AVATARS | Picks.PICK_COARSE,
    enabled: true,
  });

var intersects = ["INTERSECTED_NONE","INTERSECTED_ENTITY","INTERSECTED_OVERLAY","INTERSECTED_AVATAR","INTERSECTED_HUD"];
function getIntersectType(t){return intersects[t];}
  Script.scriptEnding.connect(scriptEnding);

  Controller.mousePressEvent.connect(mousePressEvent);

function mousePressEvent(event){
    var entityPickRay = Picks.getPrevPickResult(EntityRayPickID);
    var avatarPickRay = Picks.getPrevPickResult(AvatarRayPickID);
  
    console.log("Entity: " + getIntersectType(entityPickRay.type));
    //console.log("Avatar: " + getIntersectType(avatarPickRay.type));
}

function scriptEnding() {
  Picks.removePick(EntityRayPickID);
  Picks.removePick(AvatarRayPickID);
  Controller.mousePressEvent.connect(mousePressEvent);
}