# 一、数据类型
String Number Boolean Array Object
## JavaScript DataTypes
```javascript
var length = 16;                            //Number
var lastName = "Johnson"                    //String
var cars = ["Volvo","BWM"];                 //Array
var x = {firstName:"John", lastName:"Doe"}  //Object
```
#### JavaScript 动态类型
```javascript
var x;                  //undefined
x = 5;                  //Number
var x = "John"          //String
```
#### Strings
```javascript
var cat = "Landrover";
var cat = 'Landrover';

var answer = "It's alright";           
var answer = "He is called 'Johnny'";    
var answer = 'He is called "Johnny"'; 
```
#### Numbers
```javascript
var x1 = 34.00;
var x2 = 34;

var y = 123e5;
var z = 123e-5; 
```
#### Booleans
```javascript
var x = true;
var y = false;
```

#### Arrays
```javascript
var car = ["volvo","bwm","landrover"];
```
#### Objects
```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; //对象具有四个属性
```

#### typeof
```javascript
typeof "John"                // string 
typeof 3.14                  // number
typeof false                 //  boolean
typeof [1,2,3,4]             //  object
typeof {name:'John', age:34} //  object
```

#### Undefined
在JavaScript中，一个变量没有值，它的值就是undefined，类型也是undefined
```javascript
var person; //value is undefined, type is undefined
```

#### empty
- 一个空值和undefined没什么两样
- 一个空的字符串具有类型和值
```javascript
var car = "";   //value is "" typeof is string  
```

#### Null
- Javascript中null就是"nothing",可以认为是不存在(does not exist)
- 不幸地是，在JavaScript中，null的类型是object
- 可以认为这在JavaScript中是个bug(typeof null is an object. It should be null)
```javascript
var person = null; //value is null, type is still an object

var person = undefined; //value is undefined, type is undefined
```

#### Undefined and Null
```javascript
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```
# 二、函数
```javascript
function myFunction(p1, p2) {
    return p1 * p2;              
}
```
## 语法
```javascript
function name(parameter1, parameter2, parameter3) {
    code to be executed
}
```
## 函数调用(Invocation/call)
- 事件发生(单击事件)
- 被JavaScript代码调用
- 自动调用

## 返回值
```javascript
var x = myFunction(4, 3);       
function myFunction(a, b) {
    return a * b;                
}
```

## ()触发函数调用
```javascript
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
```
```javascript
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;
```