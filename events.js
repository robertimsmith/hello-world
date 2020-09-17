/*
// import events module
var events = require('events');

//create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Bind event and event handler as follows
eventEmitter.on('eventName', eventHandler);

//fire an event
eventEmitter.emit('eventName');
*/

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log('Program Ended');