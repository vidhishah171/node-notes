const Logger = require('./loggerApp');
const loggerObj = new Logger();

// instead of using obj of EventEmitter, we will use the object of Logger class which has extended EventEmitter,
// So it has all the methods of EventEmitter. and We can call those methods with loggerObj to reference the same event emitter for listeners.

//using this callback as arrow function
loggerObj.on('Logged Message With Param', (arg) => {
    console.log('LoggedMessageWithParam listener Called using Arrow function.',arg);
});


loggerObj.on('loggingExcercise', (eventParam) => {
    console.log(eventParam?.data?.message);
    loggerObj.emit('Logged Message With Param',eventParam?.data?.message);
});

loggerObj.logInsideClass('message');