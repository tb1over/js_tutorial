
function route(pathname, handler, response, postData) {
    console.log("About to route a request for " + pathname);

    if(typeof handler[pathname] === 'function'){
        return handler[pathname](response, postData);        //调用路由处理函数
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
  }
  
exports.route = route;