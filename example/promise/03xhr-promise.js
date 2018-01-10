//创建promise过程
//1. new Promise(fn)返回一个promise对象
//2. 在fn中指定异步等处理
//  处理结果正确的话，调用resolve(处理结果值)
//  处理结果错误的话，调用reject(Error对象)


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//创建一个用Promise把XHR处理包装起来的名为 getURL 的函数
function getURL(URL){

    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function(){
            if(req.status === 200){
                resolve(req.responseText);//会将promise对象变为resolve（Fulfilled）状态， 
                                          // 同时使用其值调用 onFulfilled 函数
            }else{
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function(){
            reject(new Error(req.statusText));
        };

        req.send();
    });
}

// 运行实例
var URL = 'http://httpbin.org/status/500';         //http://httpbin.org/get
getURL(URL).then(function onFullfilled(value){
    console.log(value);
}).catch(function onReject(error){
    console.error(error);
});