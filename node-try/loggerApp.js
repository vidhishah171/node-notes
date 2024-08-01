// node does not executes code directly, it wraps it inside of a function. 
// immidiately invoked function expression.
// require is a module wrapper function.
var url = 'http://mylogger.io/log';
console.log('Filename: ',__filename); // complete path
console.log('Directory Name: ',__dirname); // complete path
const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter {
     logInsideClass(message) { // when inside class, don't need to add function keyword. 
        //Send an HTTP request
        console.log(message);
        // two different eventEmitter objects will not work with same listener.
        // emitter.emit('loggingExcercise',{ data: {message: 'This is a message for logging excercise.'}})
        // this references this EventEmitter class itself
        this.emit('loggingExcercise',{ data: {message: 'This is a message for logging excercise.'}})

    }
}

function log(message) {
    //Send an HTTP request
    console.log(message);
    // two different eventEmitter objects will not work with same listener.
    emitter.emit('loggingExcercise',{ data: {message: 'This is a message for logging excercise.'}})
}


// emitter.on('Logged Message With Param', (arg) => {
//     console.log('LoggedMessageWithParam listener Called using Arrow function.',arg);
// });

// emitter.on('loggingExcercise', (eventParam) => {
//     console.log(eventParam?.data?.message);
//     emitter.emit('Logged Message With Param',eventParam?.data?.message);
// });




console.log(module)
// module.exports.log = log; // the object we are exporting here has a single call method log.
module.exports.endPoint = url; // can change the name of url for accessing outside.
//  We'll keep the url private.
// We can also export function directly like
// module.exports = Logger;

// here we can write 
module.exports.log = log;
exports.log = log; //same as above
// exports = log; //We cannot change the reference to module and exports
console.log(module)
