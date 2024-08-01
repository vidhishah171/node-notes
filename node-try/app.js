// const logFunc = require("./loggerApp");
const Logger = require("./loggerApp");
const logger = new Logger();
// not preffered to use var, as we don't want it to be overriden. as logger = 1
// use js hint to get readable errors.
// to load a module we use this function, we don't have this in browsers, we have it in node.
// It takes one argument which is name or path of target module we want to load.
// require('./loggerApp') // same folder is indicated by './'
// './subFolder/filename' or '../filename' for parent folder file. (relative path)

// logFunc("This is from loggerApp module.");
// console.log('log:',logger);

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Vidhi");

// Module System
console.log(); // Global object : Global scope.

// We do not have window object in Node.

// setTimeout(2); // We use this to call a function after a delay like one two seconds etc.
// we can use in on the client, inside a browser or inside node.
// clearTimeout(); // To stop first function

// setInterval(1); // To repeatedly call a function after a given delay.
// clearInterval(); // To stop that function being called repeatedly.

// window.console.log or console.log  Java script will prefix window by itself.
// Every function has prefix window. like
// window.setTimeout(1);
var message = "";
console.log(global.message); //undefined

var sayHelloInline = function () {
  console.log("Hello World!");
};

sayHelloInline();

console.log(global.module); //undefined

console.log(module); //prints module object

//PATH MODULE
const path = require("path"); //firstly, node assumes it's built in module.
//  if not, then it checks for the existence of a relative path to a file in this app.
// So if we have './' or '../' then node assumes this is a file in this app.

var pathObj = path.parse(__filename);
console.log("Path Object:", pathObj);

//OS MODULE
const os = require("os");

var hostname = os.hostname();
console.log("hostname", hostname);
console.log("Free Mem:", os.freemem());
// Template string:
console.log(`Hostname using template string: ${hostname}`);
console.log("Total Mem:", os.totalmem());

//FILE SYSTEM
const fs = require("fs");
// every operation defined here comes in two forms synchronous/ blocking and asynchronous/non-blocking.
// fs.access() //asynchronous method -  we should use this.
// fs.accessSync() // synchronous method

console.log(fs.readdirSync("../")); 
// represents the current folder and will return all the files and folders in current folder.

//asynchronous readdir
fs.readdir("./", function (error, file) {
  if (error) console.log(error);
  else console.log('Result:', file);
});

//EVENTS MODULE
const EventEmitter = require("events");
const { emitWarning } = require("process"); //for logging warnings
// here the uppercase represents EventEmitter is a class and not a value or function.
const emitter = new EventEmitter();

//register a listener.
// emitter.addListener() or both methods are exactly same but on is often reused with jquery too.
//first arg of on method is name of event, and second is callback function or an actual listener.
// This callback function receives the event Args, we can call that arg/e/eventArg
// event name should be same as listener name to catch the event. -- imp
emitter.on('messageLogged', function() {
  console.log('messageLogged listener Called.');
});

emitter.on('Logged Message With Param', function(arg) {
    console.log('LoggedMessageWithParam listener Called.',arg);
});

//using this callback as arrow function
emitter.on('Logged Message With Param', (arg) => {
    console.log('LoggedMessageWithParam listener Called using Arrow function.',arg);
});

 emitter.on('Message Log with 2 args', function(arg1, arg2) {
    console.log('Message Log with 2 args listener Called.', arg1, 'and', arg2);
});

emitter.on('loggingExcercise', (eventParam) => {
    console.log(eventParam?.data?.message);
    emitter.emit('Logged Message With Param',eventParam?.data?.message);
});

emitter.emit('Logged Message With Param',{id: 1, url: 'http://'});

// to raise an event. But no listener, so nothing will happen without a listener.
emitter.emit('messageLogged'); // making a noise||produce something. Pass argument as name of the event.
// This order of listener and emit should be important.
//  First listener should be registered and the event should be raised.
// if you register the listener after calling the emit method, nothing is gonna happen.
// When we call the emit method, this emitter itereates over all the registered listeners
// and calls them synchronously.

//Event args
// Quie often When we raise an event, we also want to send some data about that event.
// In logger module when we log a msg perhaps our remote login service will generate an id for that msg, perhaps we want to return that id to the client.
// Or it may give us URL to access that log msg directly. So when we raise an event, we pass additional args which we refer to as event args.
// So we can add a URL and Id. Better practice is to encapsulate that inside an obj.

emitter.emit("Message Log with 2 args", 1, "url");

emitter.emit('loggingExcercise',{ data: {message: 'This is a message for logging excercise.'}})

logger.logInsideClass('This is from loggerApp module.');

