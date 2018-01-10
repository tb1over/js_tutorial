var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// npm install xmlhttprequest


//通过回调方式来进行多个异步调用
function getURLCallback(URL, callback){
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function(){
        if(req.status === 200){

            console.log('******DEBUG IN Function getURLCallback:******');
            console.log(callback);
            console.log('\n');

            callback(null, req.responseText);
        }else{
            callback(new Error(req.statusText), req.responseText);
        }
    };
    req.onerror = function(){
        callback(new Error(req.statusText));
    };
    req.send();
}

// 1.对json数据进行解析
function jsonParse(callback, error, value){
    if(error){
        callback(error, value);
    }else{
        try {

            console.log('******DEBUG IN Function jsonParse:******');
            console.log(callback);
            console.log('\n');

            var result = JSON.parse(value);
            callback(null, result);
        } catch (e) {
            callback(e, value);
        }
    }
}

// 2. XHR请求
var request = {
    comment: function getComment(callback){

        console.log('******DEBUG IN Function getComment:******');
        console.log(callback);
        console.log('\n');

        return getURLCallback('http://azu.github.io/promises-book/json/comment.json'
                                , jsonParse.bind(null, callback));  //绑定jsonParse方法的第一个的参数为callback
    },
    people: function getPeople(callback){
        return getURLCallback('http://azu.github.io/promises-book/json/people.json'
                                , jsonParse.bind(null, callback));
    }
};

//3. 启动XHR请求，当所有请求返回时调用callback
function allRequest(requests, callback, results){

    console.log('******DEBUG IN Function allRequest:******');
    console.log(callback);
    console.log('\n');

    if(requests.length === 0){
        return callback(null, results);
    }
    var req = requests.shift();
    req(function requestCallback(error, value){
        if(error){
            callback(error, value);
        }else{
            results.push(value);
            allRequest(requests, callback, results);
        }
    });
}

function main(callback){

    console.log('******DEBUG IN Function main:******');
    console.log(callback);
    console.log('\n');

    allRequest([request.comment, request.people], callback, []);
}

main(function callbackMain(error, results){
    if(error){
        return console.error(error);
    }
    //console.log(results);
});