function asyncFunction(){
    //1.返回一个promise对象
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Async hello world');
        },1000);
    });
}

// 2.设置调用返回值时的回调函数
asyncFunction.then(function(value){     //then 方法来设置resolve后的回调函数
    console.log(value);
}).catch(function(error){               //catch 方法来设置发生错误时的回调函数
    console.log(error);
});