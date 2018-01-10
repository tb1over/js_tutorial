//JavaScript Promise迷你书 http://liubin.org/promises-book/

var promise = new Promise(function(resolve){
    resolve(42);
});
promise.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});