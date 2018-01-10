// 每次调用then都会返回一个新创建的promise对象
// 不管是 then 还是 catch 方法调用，都返回了一个新的promise对象
/*
var aPromise = new Promise(function(resolve){
    resolve(100);
});
var thenPromise = aPromise.then(function(value){
    console.log(value);
});
var catchPromise = thenPromise.catch(function(error){
    console.log(error);
});
console.log(aPromise !== thenPromise);
console.log(thenPromise !== catchPromise);
*/

// 1.对同一个promise对象调用then方法
var bPromise = new Promise(function(resolve){
    resolve(100);
});
bPromise.then(function(value){
    return value * 2;
});
bPromise.then(function(value){
    return value * 3;
});
bPromise.then(function(value){
    console.log('1:' + value);          // ==> 100
});

//2.对promise对象进行then chain方式调用
var cPromise = new Promise(function(resolve){
    resolve(100);
});
cPromise
    .then(function(value){
        return value * 2;
    }).then(function(value){
        return value * 3;
    }).then(function(value){
        console.log(`2:${value}`);      // ==> 100*2*3
    });

// 第1种写法中并没有使用promise的方法链方式，这在Promise中是应该极力避免的写法。
// 这种写法中的 then 调用几乎是在同时开始执行的，而且传给每个 then 方法的 value 值都是 100 
// 第2中写法则采用了方法链的方式将多个 then 方法调用串连在了一起，各函数也会严格按照 resolve → then → then → then 的顺序执行，
// 并且传给每个 then 方法的 value 的值都是前一个promise对象通过 return 返回的值。