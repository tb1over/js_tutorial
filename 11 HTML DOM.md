# 一、什么是DOM
Document Object Model

DOM 是 W3C（万维网联盟）的标准。
DOM 定义了访问 HTML 和 XML 文档的标准。主要包含三个方面：

- 核心 DOM - 针对任何结构化文档的标准模型
- XML DOM - 针对 XML 文档的标准模型
- HTML DOM - 针对 HTML 文档的标准模型
# 二、什么是HTML DOM

- HTML 的标准对象模型
- HTML 的标准编程接口
- W3C 标准

HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。
换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准.

# 三、DOM 节点
## 1. 在 HTML DOM 中，所有事物都是节点
根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：
- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点
## 2. HTML DOM 树
HTML DOM将HTML文档当做树状结构,树中所有节点都可以通过JavaScript进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。
![htmltree](http://www.w3school.com.cn/i/ct_htmltree.gif)

## 3.节点关系
节点树中的节点彼此有关系
- parent
- child
- sibling
注意：
- 在节点树中，顶端节点被称为根（root）
- 每个节点都有父节点、除了根（它没有父节点）
- 一个节点可拥有任意数量的子
- 同胞是拥有相同父节点的节点

![](http://www.w3school.com.cn/i/dom_navigate.gif)

## 4. 实例
```html
<html>
  <head>
    <title>DOM 教程</title>
  </head>
  <body>
    <h1>DOM 第一课</h1>
    <p>Hello world!</p>
  </body>
</html>
```
- title节点有一个子节点:文本节点 DOM教程

# 四、HTML DOM方法
JavaScript可以通过一些**编程接口**对HTML DOM进行操作，所有HTML元素(节点)被定义为**对象**，而编程接口就是这些对象的的方法和属性。

## 1. getElementById()方法
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="intro">Hello World!</p>
    <p>本例演示 <b>getElementById</b> 方法！</p>

    <script>
      x=document.getElementById("intro");
      document.write("<p>来自 intro 段落的文本：" + x.innerHTML + "</p>");
    </script>
  </body>
</html>
```

## 2.HTML DOM对象常见的的属性和方法
一些常用的 HTML DOM 方法：
- getElementById(id) - 获取带有指定 id 的节点（元素）
- appendChild(node) - 插入新的子节点（元素）
- removeChild(node) - 删除子节点（元素）

一些常用的 HTML DOM 属性：
- innerHTML - 节点（元素）的文本值
- parentNode - 节点（元素）的父节点
- childNodes - 节点（元素）的子节点
- attributes - 节点（元素）的属性节点

![DOM知识脑图](https://img.w3cschool.cn/attachments/image/20160809/1470709730442234.gif)
# 五、JavaScript HTML DOM API 能做什么
## 1. 改变 HTML
### 1）改变HTML输出流
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  
  <body>
    <script>
      document.write(Date()); //谨慎使用
    </script>
</body>
</html>
```
### 2)改变HTML内容
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <p id="p1">Hello World!</p>
  
  <script>
    document.getElementById("p1").innerHTML="新文本!";
  </script>
  
  <p>以上段落通过脚本修改文本。</p>
</body>
</html>
```
### 3)改变HTML的属性
```js
document.getElementById(id).attribute=new value
```
```html
<!DOCTYPE html>
<html>
  <body>
    <img id="image" src="smiley.gif">

    <script>
      document.getElementById("image").src="landscape.jpg";
    </script>
  </body>
</html>
```
## 2.JavaScript HTML DOM - 改变CSS
```js
document.getElementById(id).style.property=new style 
```
```html
<html>
  <body>
    <p id="p2">Hello World!</p>

    <script>
      document.getElementById("p2").style.color="blue";
      document.getElementById("p2").style.fontFamily="Arial";
      document.getElementById("p2").style.fontSize="larger";
    </script>

    <p>The paragraph above was changed by a script.</p>
</body>
</html>
```
```html

<h1 id="id1">我的标题 1</h1>
<button type="button" onclick="document.getElementById('id1').style.color='red'">
点我!</button>

<p id="p1">这是一个文本。 这是一个文本。 这是一个文本。 这是一个文本。 这是一个文本。 这是一个文本。 这是一个文本。</p>
<input type="button" value="隐藏文本" onclick="document.getElementById('p1').style.visibility='hidden'" />
<input type="button" value="显示文本" onclick="document.getElementById('p1').style.visibility='visible'" />
```
## 3. HTML DOM 事件
HTML 事件的例子：
- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交 HTML 表单时
- 当用户触发按键时
```html
<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>
```

### 1)
```html
<script>
  function changetext(id){
	  id.innerHTML="Ooops!";
  }
</script>

<h1 onclick="changetext(this)">点击文本!</h1>
```

### 2)
```html
<button id="myBtn">点这里</button>
<script>
  document.getElementById("myBtn").onclick=function(){displayDate()};
  
  function displayDate(){
    document.getElementById("demo").innerHTML=Date();
  }
</script>
<p id="demo"></p>
```
### 3）onload事件
```html
<body onload="checkCookies()">

  <script>
    function checkCookies(){
	    if (navigator.cookieEnabled==true){
		    alert("Cookies 可用")
	    }else{
		    alert("Cookies 不可用")
	    }
    }
  </script>
  <p>弹窗-提示浏览器cookie是否可用。</p>
```
### 4)onchange 事件
```html
<script>
function myFunction(){
  var x=document.getElementById("fname");
  x.value=x.value.toUpperCase();
}
</script>

<body>
  输入你的名字: <input type="text" id="fname" onchange="myFunction()">
  <p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>
```
### 5)onmouseover onmouseout
```html
<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
<script>
function mOver(obj){
  obj.innerHTML="Thank You"
}
function mOut(obj){
  obj.innerHTML="Mouse Over Me"
}
</script>
```
### 06)onmousedown、onmouseup 以及 onclick 事件
```html
<div onmousedown="mDown(this)" onmouseup="mUp(this)" style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
  Click Me
</div>

<script>
function mDown(obj)
{
  obj.style.backgroundColor="#1ec5e5";
  obj.innerHTML="Release Me"
}

function mUp(obj)
{
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You"
}
```

## 4.JavaScript HTML DOM EventListener
### 1) addEventListener() 方法
```javascript
document.getElementById("myBtn").addEventListener("click", displayDate);
```
- addEventListener() 方法用于向指定元素添加事件句柄。
- addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
- 可以向一个元素添加多个事件句柄。
- 以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
- **使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。**

语法
```js
element.addEventListener(event, function, useCapture);
```
- 第一个参数是事件的类型 (如 "click" 或 "mousedown").
- 第二个参数是事件触发后调用的函数。
- 第三个参数是个布尔值用于描述事件是冒泡还是捕获。可选。

```html
<button id="myBtn">点我</button>
<script>
  document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello World!");
});
</script>
```
```html
<p>该实例使用 addEventListener() 方法在按钮中添加点击事件。 </p>
<button id="myBtn">点我</button>
<script>
  document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello World!");
  });
</script>
```
```html
<p>该实例使用 addEventListener() 方法向同个按钮中添加两个点击事件。</p>
<button id="myBtn">点我</button>
<script>
  var x = document.getElementById("myBtn");
  x.addEventListener("click", myFunction);
  x.addEventListener("click", someOtherFunction);

  function myFunction() {
    alert ("Hello World!")
  }
  function someOtherFunction() {
    alert ("函数已执行!")
  }
</script>
```

```html
<p>实例使用 addEventListener() 方法在同一个按钮中添加多个事件。</p>
<button id="myBtn">点我</button>
<p id="demo"></p>
<script>
  var x = document.getElementById("myBtn");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("click", mySecondFunction);
  x.addEventListener("mouseout", myThirdFunction);
  
  function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>"
  }
  function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>"
  }
  function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>"
  }
```
```html
  //传递参数
  <p>实例演示了在使用 addEventListener() 方法时如何传递参数。 </p>
  <p>点击按钮执行计算。</p>
  <button id="myBtn">点我</button>
  <p id="demo"></p>

<script>
document.getElementById("myBtn").addEventListener("click", function() {
	let p1 = 5;
	let p2 = 7;
    myFunction(p1, p2);
});
function myFunction(a, b) {
    var result = a * b;
    document.getElementById("demo").innerHTML = result;
}
</script>
```
### 2)事件冒泡/捕获
- 事件传递有两种方式：冒泡与捕获。
- 事件传递定义了元素事件触发的顺序。 如果你将 p 元素插入到 div 元素中，用户点击 p 元素, 哪个元素的 "click" 事件先被触发呢？
  - 在 **冒泡** 中，内部元素的事件会先被触发，然后再触发外部元素，即： p 元素的点击事件先触发，然后会触发 div 元素的点击事件。
  - 在 **捕获** 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： div 元素的点击事件先触发 ，然后再触发 p 元素的点击事件。
- 默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。
```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <style>
    div {
      background-color: coral;
      border: 1px solid;
      padding: 50px;
    }
  </style>
  </head>
<body>

  <p>实例演示了在添加不同事件监听时，冒泡与捕获的不同。</p>
  <div id="myDiv">
    <p id="myP">点击段落，我是冒泡。</p>
  </div><br>
  <div id="myDiv2">
    <p id="myP2">点击段落，我是捕获。 </p>
  </div>
  <script>

  document.getElementById("myP").addEventListener("click", function() {
    alert("你点击了 P 元素!");
}, false);
  
  document.getElementById("myDiv").addEventListener("click", function() {
    alert(" 你点击了 DIV 元素 !");
}, false);

  document.getElementById("myP2").addEventListener("click", function() {
    alert("你点击了 P2 元素!");
}, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("你点击了 DIV2 元素 !");
}, true);

  </script>
</body>
</html>
```

## 5 removeEventListener() 方法
removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    
    <style>
    #myDIV {
      background-color: coral;
      border: 1px solid;
      padding: 50px;
      color: white;
    }
    </style>
  </head>

<body>
    <div id="myDIV"> div 元素添加了 onmousemove 事件句柄，鼠标在桔红色的框内移动时会显示随机数。
      <p>点击按钮移除 DIV 的事件句柄。</p>
      <button onclick="removeHandler()" id="myBtn">点我</button>
    </div>

    <p id="demo"></p>

  <script>
    document.getElementById("myDIV").addEventListener("mousemove", myFunction);
    
    function myFunction() {
      document.getElementById("demo").innerHTML = Math.random();
    }

    function removeHandler() {
      document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
    }
  </script>

</body>
</html>
```
## 6. HTML DOM 元素
### 1. 创建新的 HTML 元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">  
  </head>

  <body>
    <div id="div1">
      <p id="p1">这是一个段落。</p>
      <p id="p2">这是另一个段落。</p>
    </div>

    <script>
      var para=document.createElement("p");
      var node=document.createTextNode("这是一个新段落。");

      para.appendChild(node);
    
      var element=document.getElementById("div1");
      element.appendChild(para);
    </script>
  </body>
</html>
```
```html
<body>
<div id="div1">
	<p id="p1">这是一个段落。</p>
	<p id="p2">这是另一个段落。</p>
</div>
<script>
  var parent=document.getElementById("div1");
  var child=document.getElementById("p1");
  parent.removeChild(child);
</script>
</body>
```

```js
var child=document.getElementById("p1");
child.parentNode.removeChild(child);
```
## 7,参考资料

[W3Cscool HTML DOM](https://www.w3cschool.cn/javascript/js-htmldom-elements.html)

[W3Cscool HTML DOM教程](https://www.w3cschool.cn/htmldom/htmldom-tutorial.html)

[JavaScript HTML DOM 实例](https://www.w3cschool.cn/javascript/js-ex-dom.html)

## 8. 更进一步
[JavaScript DOMb编程艺术](https://book.douban.com/subject/6038371/)

[jQuery](http://jquery.com/)

[zepto](http://zeptojs.com)