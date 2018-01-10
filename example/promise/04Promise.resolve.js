// 静态方法Promise.resolve可以认为是 new Promise的快捷方式

Promise.resolve(42);        //返回一个promise对象
//等价于，可以认为是下面构造函数写法的语法糖
new Promise(function(resolve){
    resolve(42);
});
// ==>
Promise.resolve(42).then(function(value){
    console.log(value);
});
//简单总结一下 Promise.resolve 方法的话，
//可以认为它的作用就是将传递给它的参数填充（Fulfilled）到promise对象后并返回这个promise对象。


// Promise.reject
Promise.reject(new Error('出错了'));

// ==>
new Promise(function(resolve, reject){
    reject(new Error('出错了'));
});

// ==>
Promise.reject(new Error('出错了')).catch(function(error){
    console.error(error);
});