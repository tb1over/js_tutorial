# JavaScript作用域(Scope)
- JavaScript中，函数、对象同样是变量
- JavaScript中，作用域就是变量、函数、对象能访问到的范围。
## 局部变量(Local)
在函数中声明变量，就是函数的局部变量，只能在函数内部访问。
```javascript
//这里不能访问carName
function myFunction(){
    var carName = "Volvo";
    //这里可以访问varName
}
```
**局部变量作用范围：从声明开始，到函数结束**

## 全局变量(Global)
- 在函数外面定义变量，就是全局变量
- 全局变量具有全局范围，同一个web页面中的所有脚本、函数都可以访问它
```js
var carName = "Volvo";
//这里可以访问
function myFunction(){
    //这里可以访问carName
}
```

## 自动全局
如果给一个变量赋值，但是没有声明这个变量，那么这个变量就变成了全局变量
```js
//这里可以使用carName
function myFunction(){
    carName = "Volvl";
    //这里可以使用carName
}
```
**尽量不要使用全局变量，除非没有办法**

## 函数参数
函数参数被作为局部变量对待

## HTML中的全局变量
- JavaScript中，全局范围就是整个JavaScript环境
- HTML中，全局范围是window对象：所有的全局变量都属于window对象
```html
<!DOCTYPE html>
<html>
<body>
<p>
In HTML, all global variables will become window variables.
</p>

<p id="demo"></p>

<script>
myFunction();
document.getElementById("demo").innerHTML =
"I can display " + window.carName;      //I can display Volvo

function myFunction() {
    carName = "Volvo";
}
</script>
</body>
</html>
```
