
function sayHello(name) {
    console.log("Hello " + name);
  }
  
  sayHello("Vidhi");


var message = "hi";
console.log(global.message); //undefined

var sayHelloInline = function () {
  console.log("Hello World!");
};

sayHelloInline();

console.log(module)

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
