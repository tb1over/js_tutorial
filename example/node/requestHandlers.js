const fs = require('fs');
const querystring = require('querystring');
//路由处理程序

const formidable = require('formidable');

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
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            response.end('<h1>服务器内部错误！</h1>');
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(data);
            response.end();
        }
    });
}

//响应的HTML代码写在了后台逻辑中
//借助MVC， 这部分代码应该在视图模板中(jade...)
function upload(response, request) {
    // let userInfo = decodeURIComponent(postData);        //编码转换

    let postData = {};
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = './img';
    form.keepExtensions = true;
    form.parse(request, function (err, fields, files) {
        console.log(`fields:${fields.email}`);
        console.log(`files:${files.avatar.path}`);
        fs.renameSync(files.avatar.path, './img/avatar.jpg');

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
                昵称: ${fields.nickname/*querystring.parse(userInfo).nickname*/}<br />
                邮箱: ${fields.email/*querystring.parse(userInfo).email*/}<br />
                生日: ${fields.birthday/*querystring.parse(userInfo).birthday*/}<br />
                爱好: ${fields.interest/*querystring.parse(userInfo).interest*/}<br />
                头像：<img src='/showImage' <br/>
        
                <div class="copyright">
                    <a title="数学与计算机科学学院" href="#">NXNU</a>
                    <span>V0.1</span>
                    <span>前端页面实例</span>
                </div>
            </div>
        
        </body>
        </html>
    `;
    response.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    response.write(content);
    response.end();
    });
}

//仅仅演示方便，可以构建静态资源服务，用来处理样式
function style(response, postData) {
    let pathname = './style.css';
    fs.readFile(pathname, function (err, data) {
        if (err) {
            response.end('<h1>500服务器内部错误!</h1>');
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/css'
            });
            response.end(data);
        }
    });
}
//读取头像照片，为了演示方便，只读一张
function showImage(response){
    let pathname = './img/avatar.jpg';
    fs.readFile(pathname, function (err, data) {
        if (err) {
            response.end('<h1>500服务器内部错误!</h1>');
        } else {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(data, 'binary');
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.style = style;
exports.showImage = showImage;