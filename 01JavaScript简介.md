# 一、JavaScript简介
## 1. 与Java没有任何关系
## 2. 能做什么？
#### 1) JavaScript Can Change HTML Content
```html
<h1>What Can JavaScript Do?</h1>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">
Click Me!</button>
```
#### 2) JavaScript Can Change HTML Attributes
```html
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Can Change Images</h1>
<img id="myImage" onclick="changeImage()" src="http://w3schools.bootcss.com/js/pic_bulboff.gif" width="100" height="180">
<p>Click the light bulb to turn on/off the light.</p>
<script>
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "http://w3schools.bootcss.com/js/pic_bulbon.gif";
    } else {
        image.src = "http://w3schools.bootcss.com/js/pic_bulboff.gif";
    }
}
</script>
</body>
</html>
```
#### 3) JavaScript Can Change HTML Styles (CSS)
```html
<h1>What Can JavaScript Do?</h1>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px";           
    x.style.color = "red"; 
}
</script>
```
#### 4) JavaScript Can Validate Data
```html
<h1>JavaScript Can Validate Input</h1>
<p>Please input a number between 1 and 10:</p>
<input id="numb">
<button type="button" onclick="myFunction()">Submit</button>
<p id="demo"></p>
<script>
function myFunction() {
    var x, text;
    x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>
```
......


## 3. JavaScript代码放在哪
#### 1） \<script>标签
- 在HTML中,Javascript代码可以放在\<script></script>标签中
- \<script>标签可以放在<head>标签或者\<body>标签中
- 建议放在\<body>标签底部,能增加页面渲染效率
#### 2) 外部文件
- 将JavaScript代码放在另外一个.js为后缀的文件中
- 在HTML文件中使用\<script src="myScript.js">标签引入
- 优点
    - 将HTML,JavaScript代码分离
    - 提高可读性
    - 浏览器缓存JavaScript文件,提高页面加载速度
```JavaScript
//myScript.js
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```
```html
<!DOCTYPE html>
<html>
<body> 
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    <script src="myScript.js"></script>
</body>
</html>
```

## 4. JavaScript输出
**JavaScript没有内置的类似于print或者显示函数,只能曲线救国**
#### 1) Writing into an alert box, using window.alert().
```javascript
window.alert(5+6);
```
#### 2) Writing into the HTML output using document.write().
```javascript
document.write(5+6);
```
**如果HTML文档加载完成再使用document.write会删除所有已经存在的HTML元素**
```html
<!DOCTYPE html>
<html>
<body>
<h1>My First Web Page</h1>
<p>My first paragraph.</p>
<button onclick="document.write(5 + 6)">Try it</button>
</body>
</html>
```
#### 3) Writing into an HTML element, using innerHTML.
```javascript
document.getElementById("demo").innerHTML = 5 + 6;
```
#### 4) Writing into the browser console, using console.log()
```javascript
console.log(5 + 6);
```

# 学习资源
[w3schools](http://w3schools.bootcss.com/js/default.html)

[JavaScript标准参考教程](http://javascript.ruanyifeng.com/)

[免费的编程中文书籍索引](https://github.com/justjavac/free-programming-books-zh_CN#javascript)

# 本阶段作业
[MOOC作业1-JavaScript入门篇](http://www.imooc.com/learn/36)

[MOOC作业2-JavaScript进阶篇](http://www.imooc.com/learn/10)

[MOOC视频1-DOM探索之基础详解篇](http://www.imooc.com/learn/488)

[MOOC视频2-DOM事件探秘](http://www.imooc.com/learn/138)

# 需要阅读书籍列表
### HeaderFirst JavaScript
### HeaderFirst HTML5
### JavaScript-Core-and-Practice
### JavaScript权威指南

# 进阶
### NodeJS
### 微信小程序
### .....