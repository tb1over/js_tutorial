# 一、什么是BOM
- BOM（Browser Object Document）即浏览器对象模型。
- BOM提供了独立于内容 而与浏览器窗口进行交互的对象；
- 由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window；
- BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性；
- BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。

# 二、BOM内容
![](http://images2015.cnblogs.com/blog/997049/201608/997049-20160830235030324-1067760196.jpg)

## 1.Window对象
所有浏览器都支持 window 对象。它表示浏览器窗口。
所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
全局变量是 window 对象的属性。
全局函数是 window 对象的方法。
甚至 HTML DOM 的 document 也是 window 对象的属性之一：
```js
window.document.getElementById("header"); 
document.getElementById("header"); 
```

## 2.window尺寸
有三种方法能够确定浏览器窗口的尺寸（浏览器的窗口，不包括工具栏和滚动条）。
对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
- window.innerHeight - 浏览器窗口的内部高度
- window.innerWidth - 浏览器窗口的内部宽度
对于 Internet Explorer 8、7、6、5：
- document.documentElement.clientHeight
- document.documentElement.clientWidth
或者
- document.body.clientHeight
- document.body.clientWidth

实用的 JavaScript 方案（涵盖所有浏览器）：
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>BOM</title>
</head>

<body>

    <p id="demo"></p>
    <script>
        var w = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        var h = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
        x = document.getElementById("demo");
        x.innerHTML = "浏览器window宽度: " + w + ", 高度: " + h + "。"
    </script>

</body>

</html>
```
## 3.其他windows方法
- window.open() - 打开新窗口
- window.close() - 关闭当前窗口
- window.moveTo() - 移动当前窗口
- window.resizeTo() - 调整当前窗口的尺寸

## 4.window.screen对象
window.screen 对象包含有关用户屏幕的信息。
- screen.availWidth - 可用的屏幕宽度
- screen.availHeight - 可用的屏幕高度
```js
document.write("可用宽度: " + screen.availWidth + "<br />"+"可用高度:" + screen.availHeight);
```
## 5. Window Location对象
window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

window.location 对象在编写时可不使用 window 这个前缀。
一些实例:
- location.hostname 返回 web 主机的域名
- location.pathname 返回当前页面的路径和文件名
- location.port 返回 web 主机的端口 （80 或 443）
- location.protocol 返回所使用的 web 协议（http:// 或 https://）
```js
document.write(location.href);
```
```js
document.write(location.pathname);
```
## 6. Window History对象
window.history 对象包含浏览器的历史

- history.back() - 与在浏览器点击后退按钮相同
- history.forward() - 与在浏览器中点击向前按钮向前相同

## 7. window.navigator 对象
包含有关访问者浏览器的信息。

来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
- navigator 数据可被浏览器使用者更改
- 一些浏览器对测试站点会识别错误
- 浏览器无法报告晚于浏览器发布的新操作系统

## 8.  弹窗
### 1) alert
```js
window.alert("sometext");
```

### 2) confirm
```js
<p id="demo"></p>
<script>
function myFunction(){
	var x;
	var r=confirm("按下按钮!");
	if (r==true){
		x="你按下了\"确定\"按钮!";
	}
	else{
		x="你按下了\"取消\"按钮!";
	}
	document.getElementById("demo").innerHTML=x;
}
</script>
```
### 3) prompt
提示框经常用于提示用户在进入页面前输入某个值。
当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。
如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。

```html
<p>点击按钮查看输入的对话框。</p>
<button onclick="myFunction()">点我</button>
<p id="demo"></p>
<script>
function myFunction(){
	var x;
	var person=prompt("请输入你的名字","Harry Potter");
	if (person!=null && person!=""){
	    x="你好 " + person + "！今天感觉如何？";
	    document.getElementById("demo").innerHTML=x;
	}
}
</script>
```
## 9. 计时事件
通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。
在 JavaScritp 中使用计时事件是很容易的，两个关键方法是:
- setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
- setTimeout() - 暂停指定的毫秒数后执行指定的代码
### 1) setInterval() 方法
```js
window.setInterval("javascript function",milliseconds);
```
```html
<p>再次点击警告框，经过3秒出现新的警告框，这将一直执行 ...</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	setInterval(function(){alert("Hello")},3000);
}
</script>
```
```html
<p>在页面显示一个时钟</p>
<p id="demo"></p>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
</script>
```
### 2) clearInterval() 方法
clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。
```js
window.clearInterval(intervalVariable)
```
```html
<p>页面上显示时钟：</p>
<p id="demo"></p>
<button onclick="myStopFunction()">停止时钟</button>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
	clearInterval(myVar);
}
</script>
```

### 3) setTimeout() 方法
```html
<p>点击按钮，在等待 3 秒后弹出 "Hello"。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	setTimeout(function(){alert("Hello")},3000);
}
</script>
```

### 3) clearTimeout() 方法


## 实例

```html
<script>
function timedText(){
	var x=document.getElementById('txt');
	var t1=setTimeout(function(){x.value="2 seconds"},2000);
	var t2=setTimeout(function(){x.value="4 seconds"},4000);
	var t3=setTimeout(function(){x.value="6 seconds"},6000);
}
</script>
</head>
<body>
	
<form>
<input type="button" value="显示文本时间!" onclick="timedText()" />
<input type="text" id="txt" />
</form>
<p>点击上面的按钮，输出的文本将告诉你2秒，4秒，6秒已经过去了。</p>
```

# 三、更多实例
[更多BOM实例](https://www.w3cschool.cn/javascript/js-ex-browser.html)

# 四、特别强调
web前端开发的课程咱们匆忙、快速介绍完。讲解了基础的HTML, CSS, JavaScript知识，只是最最最基础的部分。近几年web前端技术发展迅速，不停涌现出新的库、框架、解决方案或者工具，但都是以这三个基本只是为基础。另外，近几年移动应用开发也大量用到web前端开发知识(web app、微信小程序...)。还有server端程序也可以使用JavaScript去开发，所以JavaScript很重要很重要很重要。

咱们只讲了皮毛，课堂其实就是这样，只能在大方向给大家指引，介绍基础，不可能面面俱到，大学重要的是培养大家自学的能力。咱们在课程进行的时候给大家留了大量的阅读资料，这是需要大家去持续阅读、练习、掌握的东西，这可能是咱们课程最终的目的。

每年咱们学院有很多同学去北京、西安等地的培训机构缴高额的培训费用，学习程序开发课程。每听到这样的消息，我都很自责和强烈的挫败感，我就是一个讲授程序设计的老师，为什么学生毕业了之后还要花钱去培训机构呢？

我分析有下列原因：
- 教师水平问题,没有踏入产业界或者离开太久了
- 课时问题
- 学生学习心态问题
- 学生学习方式、自学能力
- 学生耐力、耐不住寂寞

建议：
普通程序员已经很饱和很饱和很饱和了，花钱进培训机构这种方式踏入程序员行列一定要谨慎，切记切记。

一句不太恰当的话，送给大家，共勉

**路漫漫其修远兮 吾将上下而求索**