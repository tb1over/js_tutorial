
<!-- TOC -->

- [1. 服务端JavaScript - NodeJS](#1-服务端javascript---nodejs)
    - [1.1 Long long ago](#11-long-long-ago)
    - [1.2 Now](#12-now)
    - [1.3 NodeJS](#13-nodejs)
    - [1.4 安装](#14-安装)
- [2.  Hello World](#2--hello-world)
- [3. 完整的基于NodeJS的web应用](#3-完整的基于nodejs的web应用)
- [4. 一个基础的HTTP服务器](#4-一个基础的http服务器)
    - [4.1 分析一下这个简单的程序](#41-分析一下这个简单的程序)
        - [4.2.1 服务器是如何处理请求的](#421-服务器是如何处理请求的)
        - [4.2.2 服务端的模块放在哪里?](#422-服务端的模块放在哪里)
- [5. 路由(router)](#5-路由router)
    - [5.1 什么是路由(router)](#51-什么是路由router)
        - [5.1.1 网络中的路由器](#511-网络中的路由器)
        - [5.1.2 Web开发中的路由(router)](#512-web开发中的路由router)

<!-- /TOC -->

# 1. 服务端JavaScript - NodeJS
## 1.1 Long long ago
JavaScript最早是运行在浏览器中，然而浏览器只是提供了一个上下文，它定义了使用JavaScript可以做什么，但并没有“说”太多关于JavaScript语言本身可以做什么。事实上，JavaScript是一门“完整”的语言： 它可以使用在不同的上下文中，其能力与其他同类语言相比有过之而无不及
## 1.2 Now
JavaScript脱离了浏览器环境
## 1.3 NodeJS
Node.js事实上就是另外一种上下文，它允许在后端（脱离浏览器环境）运行JavaScript代码。

要实现在后台运行JavaScript代码，代码需要先被解释然后正确的执行。Node.js的原理正是如此，它使用了Google的V8虚拟机（Google的Chrome浏览器使用的JavaScript执行环境），来解释和执行JavaScript代码。
## 1.4 安装
NodeJS有Windows版本，Linux版本，Mac版本，请根据自己操作系统安装相应版本。具体参照[Nodejs官网](https://nodejs.org/en/) 或者[Nodejs中文网](http://nodejs.cn/)

# 2.  Hello World
```js
// helloworld.js
// node helloworld.js
console.log("Hello World");
```
**是不是非常简单呢？？但是也很无聊。**

# 3. 完整的基于NodeJS的web应用
接下来的案例将持续很长时间，通过持续的迭代改进。

**目标：**
- 用户可以通过浏览器使用我们的应用。
- 当用户请求http://domain/start时，可以看到一个欢迎页面，页面上有一个文件上传的表单。
- 用户可以选择一个图片并提交表单，随后文件将被上传到http://domain/upload，该页面完成上传后会把图片显示在页面上。

**分析**

为了完成以上目标，我们需要做什么呢？
- 我们需要提供Web页面，因此需要一个HTTP服务器
- 对于不同的请求，根据请求的URL，我们的服务器需要给予不同的响应，因此我们需要一个路由，用于把请求对应到请求处理程序（request handler）
- 当请求被服务器接收并通过路由传递之后，需要可以对其进行处理，因此我们需要最终的请求处理程序
- **路由**还应该能处理**POST**数据，并且把数据封装成更友好的格式传递给请求处理入程序，因此需要请求数据处理功能
- 我们不仅仅要处理URL对应的请求，还要把内容显示出来，这意味着我们需要一些视图逻辑供请求处理程序使用，以便将内容发送给用户的浏览器
- 最后，用户需要上传图片，所以我们需要上传处理功能来处理这方面的细节

# 4. 一个基础的HTTP服务器
```js
// server.js
let http = require('http');

let server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
});
server.listen(8888);
console.log('Server running at 8888');
```
**懵了吗？**

## 4.1 分析一下这个简单的程序
- 第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。 关于Nodejs HTTP模块详情，请查阅 - [HTTP 模块API文档](http://nodejs.cn/api/http.html#http_http).

- 接下来调用http模块提供的函数： createServer 。这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。

- 最有趣（也是最不好理解，也是Nodejs的核心思想，也是Nodejs最有魅力，同时也是Nodejs程序的地狱）的部分是 createServer() 的第一个参数，一个函数定义.  

看下面代码。

```js
function say(word) {
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "Hello");
```
**再看：**
```js
function execute(someFunction, value) {
  someFunction(value);
}
execute(function(word){ console.log(word) }, "Hello");
```
 在 execute 接受第一个参数的地方直接定义了准备传递给 execute 的函数。用这种方式，甚至不用给这个函数起名字，这也是为什么它被叫做 *匿名函数* 。 

 **see again**

 ```js
let http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
 ```

 ## 4.2 基于事件驱动的回调
 基于事件驱动的回调是Node.js原生的工作方式。它是事件驱动的，这也是它为什么这么快的原因。
- 传统的web server多为基于线程模型。启动Apache或者什么server，它开始等待接受连接。当收到一个连接，server保持连接连通直到页面或者什么事务请求完成。如果他需要花几微妙时间去读取磁盘或者访问数据库，web server就阻塞了IO操作（这也被称之为阻塞式IO).想提高这样的web server的性能就只有启动更多的server实例
- Node.js使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

- 服务员给顾客点餐的例子。

那么在我们的Node.js程序中，当一个新的请求到达8888端口的时候，我们怎么控制流程呢？ **异步**

- 我们创建了服务器，并且向创建它的方法传递了一个函数。无论何时我们的服务器收到一个请求，这个函数就会被调用。

- 我们不知道这件事情什么时候会发生，但是我们现在有了一个处理请求的地方：它就是我们传递过去的那个函数。至于它是被预先定义的函数还是匿名函数，就无关紧要了。

- 这个就是传说中的 回调 。我们给某个方法传递了一个函数，这个方法在有相应事件发生时调用这个函数来进行 回调 。 

### 4.2.1 服务器是如何处理请求的

- 当回调启动，onRequest() 函数被触发的时候，有两个参数被传入： request 和 response 。

- 它们是对象，可以使用它们的方法来处理HTTP请求的细节，并且响应请求（比如向发出请求的浏览器发回一些东西）。

- 所以：当收到请求时，使用 response.writeHead() 函数发送一个HTTP状态200和HTTP头的内容类型（content-type），使用 response.write() 函数在HTTP相应主体中发送文本“Hello World"。

- 最后，我们调用 response.end() 完成响应。 

关于request, response 详情，请查阅[HTTP模块]((http://nodejs.cn/api/http.html#http_http))。这两个对象就是HTTP request, response的封装。request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

### 4.2.2 服务端的模块放在哪里?
接下来，对server.js进行一次封装，把server.js变成一个真正的Node.js模块，使它可以被其他文件调用。

```js
var http = require("http");
...
http.createServer(...);
```
其中require进来的http是Node.js提供的原生模块，咱们怎么创建自己的模块呢?

```js
let http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start //将start函数导出
```

```js
// index.js
var server = require("./server");
server.start();
```
# 5. 路由(router)
## 5.1 什么是路由(router)
### 5.1.1 网络中的路由器
路由器通常连接两个或多个由IP子网或点到点协议标识的逻辑端口，至少拥有1个物理端口。路由器根据收到数据包中的网络层地址以及路由器内部维护的路由表决定输出端口以及下一跳地址，并且重写链路层数据包头实现转发数据包。路由器通过动态维护路由表来反映当前的网络拓扑，并通过网络上其他路由器交换路由和链路信息来维护路由表。
### 5.1.2 Web开发中的路由(router)
router可以理解为一个容器，或者说一种机制，它管理了一组route。简单来说，route只是进行了URL和函数的映射，而在当接收到一个URL之后，去路由映射表中查找相应的函数，这个过程是由router来处理的。一句话概括就是 “The router routes you to a route“。
```
https://www.imooc.com/learn/488
```
```js
/users        ->  getAllUsers()
/users/count  ->  getUsersCount()
```
```
                               url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
        querystring.parse(string)["foo"]    |
                                            |
                         querystring.parse(string)["hello"]
```
- url 模块
- querystring模块
```js
//代码演示一下上图的URL该如何解析
let http = require("http");
let url = require('url');
let querystring = require('querystring');

function start() {
  function onRequest(request, response) {

    console.log(`request url: ${request.url}`);

    pathname = url.parse(request.url).pathname;

    console.log(`pathname: ${pathname}`);

    qs = url.parse(request.url).query;
    console.log(`qs: ${qs}`);

    console.log(`foo: ${querystring.parse(qs)['foo']}`);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(9999);
  console.log("Server has started at 9999.");
}
exports.start = start
```
**现在可以通过请求的URL路径来区别不同请求了--以使用路由（还未完成）来将请求以URL路径为基准映射到处理程序上。**

下面将来自/start和/upload的请求使用不同的代码来处理。

## 5.2 创建路由文件

* 1.建立名为router.js的文件
```js

function route(pathname) {
    console.log("About to route a request for " + pathname);
  }
  
exports.route = route;
```
* 2.扩展一下服务器的start()函数，将路由函数作为参数传递过去
```js
//server.js
let http = require("http");
let url = require('url');
let querystring = require('querystring');

function start(route) {
  function onRequest(request, response) {

    pathname = url.parse(request.url).pathname;

    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(9999);
  console.log("Server has started at 9999.");
}
exports.start = start
```
* 3.扩展index.js，使得路由函数可以被注入到服务器中
```js
//index.js
var server = require("./server");
var router = require('./router');

server.start(router.route);
```

## 5.3 路由给真正的请求处理程序

针对不同的URL有不同的处理方式。例如处理/start的“业务逻辑”就应该和处理/upload的不同。

* 创建一个叫做requestHandlers的模块，并对于每一个请求处理程序，添加一个占位用函数，随后将这些函数作为模块的方法导出：

```js
//requestHandlers.js
function start() {
    console.log("Request handler 'start' was called.");
}
  
function upload() {
    console.log("Request handler 'upload' was called.");
}
  
exports.start = start;
exports.upload = upload;
```
* 将导出对象引入到主文件index.js中
```js
//index.js
var server = require("./server");
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handler = {};   //对象
handler['/'] = requestHandlers.start;
handler['/start'] = requestHandlers.start;
handler['upload'] = requestHandlers.upload;

//handler 关联对象数据
server.start(router.route);
```
将不同的URL映射到相同的请求处理程序上是很容易的：只要在对象中添加一个键为"/"的属性，对应requestHandlers.start即可，这样我们就可以干净简洁地配置/start和/的请求都交由start这一处理程序处理。

* server模块修改
```js
//server.js
...
route(handle, pathname);
...
```

* router.js文件中修改route()函数
```js
//route.js

function route(pathname, handler) {
    console.log("About to route a request for " + pathname);

    if(typeof handler[pathname] === 'function'){
        handler[pathname]();        //调用路由处理函数
    }
  }
  
exports.route = route;
```

## 5.4 让请求处理程序作出响应
目前的程序，不论请求路径是/start还是/upload，页面响应都是hello world!  

Too young too simple ...

其实“处理请求”说白了就是“对请求作出响应”，因此，需要让请求处理程序能够像onRequest函数那样可以和浏览器进行“对话”。

之前对请求作出响应，都是在server.js模块完成。这部分工作不该是由requestHandlers完成吗？？？

对以下代码进程重构
```js
//requstHandlers.js
function start() {
    console.log("Request handler 'start' was called.");
    return 'hello start!';
}
  
function upload() {
    console.log("Request handler 'upload' was called.");
    return 'hello upload!';
}  
exports.start = start;
exports.upload = upload;
```

```js
// route.js

function route(pathname, handler) {
    console.log("About to route a request for " + pathname);

    if(typeof handler[pathname] === 'function'){
        return handler[pathname]();        //调用路由处理函数
    }else{
        console.log("No request handler found for " + pathname);
        return "404 Not found";
    }
  }
  
exports.route = route;
```

```js
// server.js
...
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname)
    response.write(content);
    response.end();
  }
...
```
**代码有问题吗？？看似没问题，但是涉及到了致命问题：**
## 5.5 阻塞与非阻塞
修改一下代码,注意观察在访问/start 和/upload的现象，这个现象为什么会发生，就是因为阻塞。

形象的说就是“它阻塞了所有其他的处理工作”。
```js
// requestHandlers.js
function start() {
  console.log("Request handler 'start' was called.");
  
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(20000);
  return "Hello Start";
}
function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}
exports.start = start;
exports.upload = upload;
```

Node.js可以在不新增额外线程的情况下，依然可以对任务进行并行处理 —— Node.js是单线程的。它通过事件轮询（event loop）来实现并行操作，对此，我们应该要充分利用这一点 —— 尽可能的避免阻塞操作，取而代之，多使用非阻塞操作。

然而，要用非阻塞操作，我们需要使用回调，通过将函数作为参数传递给其他需要花时间做处理的函数（比方说，休眠10秒，或者查询数据库，又或者是进行大量的计算）。

**什么是非阻塞**

对于Node.js来说，它是这样处理的：“嘿，probablyExpensiveFunction()（这里指的就是需要花时间处理的函数），你继续处理你的事情，我（Node.js线程）先不等你了，我继续去处理你后面的代码，请你提供一个callbackFunction()，等你处理完之后我会去调用该回调函数的，谢谢！”

修改代码，使用回调函数继续模拟这个过程。
```js

function start() {
    console.log("Request handler 'start' was called.");
    let res = 'empty';
    setTimeout(function(){
        res = 'hello start!';
    }, 10000);
    return res;
}
......
```
会发生什么事情呢？

不再阻塞了，但是请求/或者/start没有得到正确的输出结果。

**正确的姿势：不能使用返回值，给客户端的响应应该是在requstHandler模块中完成，而不是在server模块中响应**

## 5.6 以非阻塞操作进行请求响应
继续重构：将response对象（从服务器的回调函数onRequest()获取）通过请求路由传递给请求处理程序。 随后，处理程序就可以采用该对象上的函数来对请求作出响应。
```js
//server.js
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
```
```js
// route.js

function route(pathname, handler, response) {
    console.log("About to route a request for " + pathname);

    if(typeof handler[pathname] === 'function'){
        return handler[pathname](response);        //调用路由处理函数
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
  }
  
exports.route = route;
```

```js
// requestHandlers.js
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
```
**现在一切好像没问题了，那接下来就是实际任务了。**


# 作业(电子版文档)

## 1. 在自己计算机搭建NodeJS开发环境
* 安装NodeJS，官网下载
* 搞清楚、会用nvm工具进行NodeJS版本管理
* 详细了解、会使用npm进行模块安装

## 2. 完成讲义中的示例代码
* 深刻理解回调函数
* 深刻理解阻塞与非阻塞
* 熟练掌握NodeJS内置的http, url, querystring模块，已经相关的方法。