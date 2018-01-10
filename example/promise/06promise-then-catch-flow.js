//在Promise里可以将任意个方法连在一起作为一个方法链（method chain）。
/*
function taskA(){
    console.log('Task A');
}
function taskB(){
    console.log('Task B');
}
function onRejected(error){
    console.log('Catch Error:A or B', error);
}
function finalTask(){
    console.log('Final Task');
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);

// Task A
// Task B
// Final Task
*/

function taskA(){
    console.log('Task A');
    throw new Error('throw error @ task A');
}

function taskB(){
    console.log('Task B');
}

function onRejected(error){
    console.log(error);
}
function finalTask(){
    console.log('Final Task');
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);
    
//执行这段代码我们会发现 Task B 是不会被调用的。
