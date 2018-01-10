//Promise#catch这个方法只是 promise.then(undefined, onRejected); 方法的一个别名而已
//用来注册当promise对象状态变为Rejected时的回调函数
/*
var promise =  Promise.reject(new Error('message'));
promise.catch(function(error){
    console.log(error);
});
*/

// ==>
