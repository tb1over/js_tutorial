var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function (req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.parse(req, function (err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
            console.log((fields.title));
            res.write('received upload:\n\n');
            res.end(util.inspect({
                fields: fields,
                files: files
            }));
        });

        return;
    }

    // show a file upload form
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <form action="/upload" enctype="multipart/form-data" method="post">
            请输入名称：<input type="text" name="title"><br>
            请选择文件：<input type="file" name="upload" multiple="multiple"><br>
            <input type="submit" value="上传">
        </form>
        </body>
    </html>`;
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(html);
}).listen(9999);