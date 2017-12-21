/*
let http = require('http');

let server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
});
server.listen(8888);
console.log('Server running at 8888');

*/

let http = require("http");
let url = require('url');
let querystring = require('querystring');

function start(route, handler) {
  function onRequest(request, response) {

    pathname = url.parse(request.url).pathname;

    route(pathname, handler, response);
  }

  http.createServer(onRequest).listen(9999);
  console.log("Server has started at 9999.");
}
exports.start = start