const logEvents = require("./logEvents");

const EventEmmiter = require("events");

class MyEmitter extends EventEmmiter {}

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted");
}, 2000);
