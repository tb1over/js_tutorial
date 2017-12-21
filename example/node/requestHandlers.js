
//路由处理程序

function start(response) {
    console.log("Request handler 'start' was called.");
    
    setTimeout(function(){
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write('Hello start!');
        response.end();
    }, 10000);
}
  
function upload(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello Upload!</h1>");
    response.end();
}  
exports.start = start;
exports.upload = upload;