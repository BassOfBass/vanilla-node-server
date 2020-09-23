const events = require("events");

const firstEmitter = new events.EventEmitter();

firstEmitter.emit("My first event");