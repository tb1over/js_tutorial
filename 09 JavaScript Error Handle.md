# 09 JavaScript 错误处理 Throw、Try 和 Catch

## JavaScript 错误 - throw、try 和 catch

### try 语句测试代码块的错误。
### catch 语句处理错误。
### throw 语句创建自定义错误。

#### 一、JavaScript 错误
- 可能是语法错误
    
    JavaScript不是编译型的语言，而是解释型语言，JavaScript引擎(web浏览器/node ...)不会对代码进行编译，基本上逐条解释执行。所以代码在被执行之前的语法错误无法探知，只有在执行时才报错。
- 执行引擎缺少相应的功能

    浏览器差异，或者执行环境差异
- 来之服务器或者用户的输入而导致的错误
- 其他不可知的因素

#### 二、当错误发生时
当错误发生时，JavaScript引擎通常会停止执行，并生成一个错误。即抛出一个错误(throw).


#### 三、捕获处理错误/异常
try...catch允许我们在JavaScript引擎抛出错误后捕获该错误，并进行相应的处理，而不是直接将错误抛给用户。
```javascript
try{
    //这里运行代码可能出现的错误会被测试到并捕获
}catch(err){
    //在这里处理错误
}
```

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript错误处理</title>
<script>
var txt="";
function message(){
	try {
		adddlert("Welcome guest!");
	}
	catch(err) {
		txt="本页有一个错误。\n\n";
		txt+="错误描述：" + err.message + "\n\n";
		txt+="点击确定继续。\n\n";
        
        /* es6较新的写法
        txt = `本页有一个错误。\n\n
			错误描述：${err.message} \n\n
            点击确定继续。\n\n`;
        */
		alert(txt);
	}
}
</script>
</head>
<body>

<input type="button" value="查看消息" onclick="message()" />

</body>
</html>
```

#### 四、自定义错误
throw 语句允许我们创建自定义错误。
正确的技术术语是：创建或抛出异常（exception）。
如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。

**实例**

本例检测输入变量的值。如果值是错误的，会抛出一个异常（错误）。catch 会捕捉到这个错误，并显示一段自定义的错误消息

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>throw实例</title>
<script>
function myFunction(){
	try{ 
		
        var x=document.getElementById("demo").value;
		if(x=="")    throw "值为空";
		if(isNaN(x)) throw "不是数字";
		if(x>10)     throw "太大";
		if(x<5)      throw "太小";
	}
	catch(err){
		var y=document.getElementById("mess");
		y.innerHTML="错误：" + err + "。";
	}
}
</script>
</head>
<body>

<h1>try...catch  throw实例</h1>
<p>请输出一个 5 到 10 之间的数字:</p>
<input id="demo" type="text">
<button type="button" onclick="myFunction()">测试输入</button>
<p id="mess"></p>

</body>
</html>
```