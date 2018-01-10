//.then 中指定的方法调用是异步进行的
var promise = new Promise(function(resolve){
    console.log('inner promise');   //1
    resolve(42);
});

promise.then(function(value){ //即使在调用 promise.then 注册回调函数的时候promise对象已经是确定的状态，
                              //Promise也会以异步的方式调用该回调函数，这是在Promise设计上的规定方针
    console.log(value);             //3
})

console.log('outer promise');       //2