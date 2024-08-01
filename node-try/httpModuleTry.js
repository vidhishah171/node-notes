const http = require('http');
const endPoint = require('./loggerApp').endPoint;
console.log(endPoint);

const server = http.createServer((req, res) => {
// With this function, instead of working with socket, we'd work on actual request and response objects.
if(req.url === '/'){
    res.write('Hello Vidhi.\n'); // Here we are writing to client.
    res.end('end');
} 
if(req.url === '/array/integer') {
    res.write(JSON.stringify([1,2,3]));
    res.end(); //need to do for getting result. and load the page completely.
}
}) //used to create a webserver. 
// Here server is also Event Emitter. Has capabilities of the EventEmitter
server.listen(3000);
console.log('Listening on port: 3000.'); 
// Everytime a new request or new connection is made on this server, it raises an event.
// So we can use its own method to handle that event. 
// So before listening we need to register a handler or listener.
// server.on('connection',(socket) => {
//     console.log('Someone connected.');
// }) not used in real world, there we pass callback function to createServer.