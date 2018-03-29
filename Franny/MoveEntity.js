/* globals Entities, Script, MyAvatar */
(function() {

  //function to move an entity up by 1 meter
  function moveUp(entityID, distance) {
    //get the entity properties
    var entity = Entities.getEntityProperties(entityID);

    //check that the properties we got back are for the entity with the id we requested
    if (entity.id === entityID) {

      //Get the position from the entity porperties object
      var position = entity.position;

      //Add the provided distance to the y axis of the position
      position.y += distance;

      //Update the entity with out new position value
      Entities.editEntity(entity.id, {
        position: position
      });
    }
  }

  //function to move an entity down by 1 meter
  function moveDown(entityID, distance) {
    //get the entity properties
    var entity = Entities.getEntityProperties(entityID);

    //check that the properties we got back are for the entity with the id we requested
    if (entity.id === entityID) {

      //Get the position from the entity porperties object
      var position = entity.position;

      //Subtract the provided distance from the y axis of the position
      position.y -= distance;

      //Update the entity with out new position value
      Entities.editEntity(entity.id, {
        position: position
      });
    }
  }

  this.name = 'cigs';
  this.preload = function(entityID) {

  };


  //A variable for storing the details of the timerouts that we set
  var timer = null;

  //An event function that HiFi will trigger when an entity is clicked on it provides the ID of the entity and an event object
  this.clickDownOnEntity = function(entityID, event) {
    //Print to the console a message showing the object was clicked
    print("I was clicked!");

    //Call the move up function for the entity clicked
    moveUp(entityID, 1);

    //Check if a timeout is already running, if it is clear it
    if (timer !== null) {
      Script.clearTimeout(timer);
      timer = null;
    }

    //set a timeout to move the entity back down by 1 in 15 seconds
    timer = Script.setTimeout(function() {
      moveDown(entityID, 1);
    }, 15000);
  }
})