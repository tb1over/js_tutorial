var server = require("./server");
var router = require('./route');
var requestHandlers = require('./requestHandlers');

var handler = {};   //对象
handler['/'] = requestHandlers.start;
handler['/start'] = requestHandlers.start;
handler['/upload'] = requestHandlers.upload;

server.start(router.route, handler);