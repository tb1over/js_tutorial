const fs = require('fs');
const querystring = require('querystring');
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

//响应的HTML代码写在了后台逻辑中
//借助MVC， 这部分代码应该在视图模板中(jade...)
function upload(response, postData) {
    console.log(decodeURIComponent(postData));
    let userInfo = decodeURIComponent(postData);        //编码转换
    let content = `             
        <!DOCTYPE html>        
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>用户信息</title>
            <link href="style.css" rel="stylesheet" type="text/css"/> 
        </head>
        <body>
            <div class="wrap">
            <h2>用户信息</h2>
                昵称: ${querystring.parse(userInfo).nickname}<br />
                邮箱: ${querystring.parse(userInfo).email}<br />
                生日: ${querystring.parse(userInfo).birthday}<br />
                爱好: ${querystring.parse(userInfo).interest}<br />
        
                <div class="copyright">
                    <a title="数学与计算机科学学院" href="#">NXNU</a>
                    <span>V0.1</span>
                    <span>前端页面实例</span>
                </div>
            </div>
        
        </body>
        </html>
    `;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
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