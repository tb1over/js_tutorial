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
let formidable = require('formidable');

let util = require('util');

function start(route, handler) {
  function onRequest(request, response) {

    pathname = url.parse(request.url).pathname;

    //使用nodejs解析post数据
    /*
    let postData = '';
    request.setEncoding('utf8');
    
    request.addListener('data', dataChunk =>{
      postData += dataChunk;
    });

    request.addListener('end', () => {
      route(pathname, handler, response, postData);
    });
    */
    //使用formidable处理post数据

    route(pathname, handler, response, request);
  }

  http.createServer(onRequest).listen(9999);
  console.log("Server has started at 9999.");
}
exports.start = start