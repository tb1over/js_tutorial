//如果 Task A 想给 Task B 传递一个参数该怎么办呢？
//答案非常简单，那就是在 Task A 中 return 的返回值，会在 Task B 执行时传给它。
function doubleUp(value){
    return value * 2;
}
function increment(value){
    return value + 1;
}

function output(value){     // (1+1)*2
    console.log(value);
}

var promise = Promise.resolve(1);
promise
    .then(increment)
    .then(doubleUp)
    .then(output)
    .catch(function(error){
        console.log(error);
    });
//执行流程如下:
//1.Promise.resole(1); 1传递给increment函数
//2.函数increment函数对接收到的参数+1操作并返回(return)
//3.这时参数变为2，并再次传递给doubleUp函数
//4.最后在output中输出结果4

//return的值会由 Promise.resolve(return的返回值); 进行相应的包装处理，
//因此不管回调函数中会返回一个什么样的值，最终 then 的结果都是返回一个新创建的promise对象。