const fs = require('fs');
//路由处理程序

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    
    /*
    setTimeout(function(){
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write('Hello start!');
        response.end();
    }, 10000);
    */
    let path = './createUser.html';
    fs.readFile(path, (err, data) => {
        if(err){
            response.writeHead(404, {'Content-Type':'text/html'});
            response.end('<h1>服务器内部错误！</h1>');
        }else{
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            response.end();
        }
    });
}
  
function upload(response, postData) {
    console.log(decodeURIComponent(postData));
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello Upload!</h1>");
    response.end();
}

//仅仅演示方便，可以构建静态资源服务，用来处理样式
function style(response, postData){
    let pathname = './style.css';
    fs.readFile(pathname, function(err, data){
        if(err){
            response.end('<h1>500服务器内部错误!</h1>');
        }else{
            response.writeHead(200, {'Content-Type':'text/css'});
            response.end(data);
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.style = style;