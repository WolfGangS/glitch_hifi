// A remote debugging tool made by midnight rift
var VERSION = '0.0.1';
var debug = Script.require('https://debug.midnightrift.com/files/hifi/debug.min.js');
debug.connect('relieved-pruner');
debug.send({color:'blue'}, 'preload', MyAvatar.sessionDisplayName, entityID);
debug.send({color:'red'}, 'I was clicked!', this.name, MyAvatar.sessionDisplayName);