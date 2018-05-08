# 例子
现实生活中，一辆车是一个对象(object)。一个车具有诸如重量、颜色等属性(properties)，同时还具有启动、刹车等方法(methods)。

所有的车都具有相同的属性，但是属性值各不相同；
所有的车都具有相同的方法，但是方法的执行效果不同。

# JavaScript Objects
## 普通变量
```javascript
var cat = "Fiat";
```
## 对象
对象同样也是变量，但是对象可以包含很多值
```javascript
var cat = {type:"Fiat", model:"500", color:"white"};
```
JavaScript对象是name:value对的容器。

#### 对象属性
```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person.firstName; //John
```
#### 对象方法
```javascript
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName();
```

# JavaScript事件(Events)
## HTML Events(参考HTML DOM)
- WEB页面加载完成
- input内容变化
- button被按下
- ...... 
```html
<button onclick="getElementById('demo').innerHTML=Date()">The time is?</button>
```
```javascript
<button onclick="displayDate()">The time is?</button>
<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>
<p id="demo"></p>
```

## 常用的HTML Events
- onchange
- onclick
- onmouseover
- onmouseout
- onkeydown
- onload

[W3Schools JavaScript Reference HTML DOM Events](http://w3schools.bootcss.com/jsref/dom_obj_event.html)