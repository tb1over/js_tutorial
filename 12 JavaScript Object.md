# 一、 JavaScript对象
之前讲过一点关于JavaScript对象，那点只是仅仅只是介绍对象是一种数据类型。

其实，JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...
此外，JavaScript 允许自定义对象。

JavaScript 提供多个内建对象，比如 String、Date、Array 等等。 对象只是带有属性和方法的特殊数据类型。

- 布尔型可以是一个对象。
- 数字型可以是一个对象。
- 字符串也可以是一个对象
- 日期是一个对象
- 数学和正则表达式也是对象
- 数组是一个对象
- 甚至函数也可以是对象

## 1.JavaScript对象
对象只是一种特殊的数据。对象拥有**属性和方法**。

### 1)访问属性的方法
```javascript
objectName.propertyName ;

 var message="Hello World!";
 var x=message.length;
```

### 2）访问对象的方法
方法是能够在对象上执行的动作。
```js
objectName.methodName();

 var message="Hello world!";
 var x=message.toUpperCase();
```

## 2.创建JavaScript对象

### 1)定义并创建对象的实例
```js
person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";
```
替代写法
```js
//之前学习过
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
```
### 2)使用函数来定义对象，然后创建新的对象实例

- 对象构造器(构造函数)
```js
function Person(firstname,lastname,age,eyecolor){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
```
- 创建JavaScript实例
```js
var chenchen=new Person("chen","chen",500,"black");
```
- 把属性添加到 JavaScript 对象
```js
personObj.firstname="John";
personObj.lastname="Doe";
personObj.age=30;
personObj.eyecolor="blue";

x=person.firstname;
```
- 把方法添加到 JavaScript 对象
```js
 function person(firstname,lastname,age,eyecolor){
     this.firstname=firstname;
     this.lastname=lastname;
     this.age=age;
     this.eyecolor=eyecolor;

     this.changeName=function (name){
           this.lastname=name;
     };
 }
```

## 3. JavaScript类/继承
ECMA Script6标准中有Class的概念，并推荐使用。在ECMA Script5标准中并没有Class的概念，并且继承也是通过基于原型(prototype)实现的。
这部分知识属于更高阶的话题，待有机会再展开讲。下面给出参考资料。

[0. HeadFirst JavaScript程序设计(人民邮电出版社) - 12章 高级对象构造技巧](https://book.douban.com/subject/24807524/)

[1. MDN 继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[2. ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/class-extends)

```html
<!DOCTYE html>
<html>

<head>
    <script>
        function Dictionary() {
            //Define an object for a Dictionary type 	 	
            var _obj = new Object();
            //Check whether a certain key contained or not 	 	
            this.containsKey = function (k) {
                var isContained = false;
                for (var attr in _obj) {
                    if (attr == k) {
                        isContained = true;
                        break;
                    }
                }
                return isContained;
            }
            //Add a new element 	 	
            this.addElement = function (k, v) {
                if (!this.containsKey(k)) {
                    _obj[k] = v;
                }
            }
            //Remove an existing element 	 	
            this.removeElement = function (k) {
                if (this.containsKey(k)) {
                    delete _obj[k];
                }
            }
            //Print the result 	 	
            this.printAll = function () {
                var result = JSON.stringify(_obj);
                return result;
            }
        }
        var newD = new Dictionary();

        function AddAndPrint() {
            newD.addElement("0000", "张三");
            newD.addElement("0001", "李四");
            document.getElementById("divContent").innerHTML = newD.printAll();
        }

        function RemoveAndPrint(k) {
            newD.removeElement("0000");
            document.getElementById("divContent").innerHTML = newD.printAll();
        }
    </script>
</head>

<body>
    <div id="divContent"></div>
    <input type="button" value="Click Me To Add" onclick="AddAndPrint();" />
    <input type="button" value="Click Me To Remove" onclick="RemoveAndPrint(&#39;0000&#39;);" />
</body>

</html>
```
# 二、JavaScript内置对象

## 1. Number 对象

## 2. String对象
String 对象用于处理已有的字符块。

#### 1)JavaScript 字符串

- 一个字符串用于存储一系列字符就像 "John Doe".
- 一个字符串可以使用单引号或双引号：
- 你使用位置（索引）可以访问字符串中任何的字符：
```js
var carname='Volvo XC60';
var character=carname[7];
```

#### 2）对象方法
- length方法
```js
var txt="Hello World!";
document.write(txt.length);

var txt="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.write(txt.length);
```

- indexOf()方法
```js
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");
```
- match()方法

用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符。
```js
var str="Hello world!";
document.write(str.match("world") + "<br>");
document.write(str.match("World") + "<br>");
document.write(str.match("world!"));
```

- replace() 方法
```js
str="Please visit Microsoft!"
var n=str.replace("Microsoft","Google");
```

-  toUpperCase() / toLowerCase()方法
```js
var txt="Hello World!";       // String
var txt1=txt.toUpperCase();   // txt1 is txt converted to upper
var txt2=txt.toLowerCase();   // txt2 is txt converted to lower
```

- String to Array
```js
txt="a,b,c,d,e"   // String
txt.split(",");   // Split on commas
txt.split(" ");   // Split on spaces
txt.split("|");   // Split on pipe 
```
- 其他属性及方法
    - length
    - prototype
    - constructor
    - charAt()
    - charCodeAt()
    - concat()
    - fromCharCode()
    - indexOf()
    - lastIndexOf()
    - match()
    - replace()
    - search()
    - slice()
    - split()
    - substr()
    - substring()
    - toLowerCase()
    - toUpperCase()
    - valueOf()

具体请查阅手册

## 3. Date对象
日期对象用于处理日期和时间。

[Date对象参考地址](https://www.w3cschool.cn/jsref/jsref-obj-date.html)
#### 1）创建日期
```js
 new Date() // 当前日期和时间
 new Date(milliseconds) //返回从 1970 年 1 月 1 日至今的毫秒数
 new Date(dateString)
 new Date(year, month, day, hours, minutes, seconds, milliseconds)
```
#### 2) 设置日期
```js
 var myDate=new Date();
 myDate.setFullYear(2010,0,14);

var myDate=new Date();
 myDate.setDate(myDate.getDate()+5);
```

#### 3）日期比较
```js
var x=new Date();
x.setFullYear(2100,0,14);
var today = new Date();

if (x>today){
   alert("Today is before 14th January 2100");
}else{
   alert("Today is after 14th January 2100");
}
```

## 4. Array对象
数组对象的作用是：使用单独的变量名来存储一系列的值。

#### 1)创建数据
```js
 var myCars=new Array(); 
 myCars[0]="Saab";       
 myCars[1]="Volvo";
 myCars[2]="BMW";

 var myCars=new Array("Saab","Volvo","BMW");

 var myCars=["Saab","Volvo","BMW"];
```

#### 2)访问元素
```js
var name=myCars[0];

myCars[0]="Opel";

//注意数组的下标不像其他语言中的下标是数字，而是字符串'0', '1', '2'.....
```

#### 3)在一个数组中你可以有不同的对象
```js
myArray[0]=Date.now;
 myArray[1]=myFunction;
 myArray[2]=myCars;
```

#### 4) 数组方法和属性
```js
 var x=myCars.length             // the number of elements in myCars
 var y=myCars.indexOf("Volvo")   // the index position of "Volvo"
```

#### 5)创建新方法
```js
Array.prototype.ucase=function(){
    for (i=0;i<this.length;i++){
      this[i]=this[i].toUpperCase();
    }
}
```
#### 6)完整参考手册
[手册地址](https://www.w3cschool.cn/jsref/jsref-obj-array.html)

## 5. Boolean对象
Boolean对象用于将非布尔值转化为布尔值(true/false).
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Boolean</title>
</head>

<body>
    <script>
        var b1 = new Boolean(0);
        var b2 = new Boolean(1);
        var b3 = new Boolean("");
        var b4 = new Boolean(null);
        var b5 = new Boolean(NaN);
        var b6 = new Boolean("false");
        document.write("0 为布尔值 " + b1 + "<br>");
        document.write("1 为布尔值 " + b2 + "<br>");
        document.write("空字符串是布尔值 " + b3 + "<br>");
        document.write("null 是布尔值 " + b4 + "<br>");
        document.write("NaN 是布尔值 " + b5 + "<br>");
        document.write("字符串'false' 是布尔值" + b6 + "<br>");
    </script>
</body>
</html>
```
[完整的Boolean对象参考](https://www.w3cschool.cn/jsref/jsref-obj-boolean.html)
## 6. JavaScript RegExp 对象
正则表达式(Regular Expression)是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"）。
正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串。
```js
var str = 'abc123def';
var patt = /[0-9]+/;
document.write(str.match(patt1));
```
#### 1)简介
大家有没有使用过通配符的经验，在windows系统中想搜索所有以“2017”开始的文件。
- 通配符*
- 通配符?
而正则表达式是一种更加强大、灵活的字符串处理模块。

一个更直观的例子

![](http://www.runoob.com/wp-content/uploads/2014/03/CEBB49BB-B1AD-4539-AC7A-B40DDC62D1B2.jpg)
- ^为匹配输入字符串的开始位置。
- [0-9]+匹配多个数字， [0-9] 匹配单个数字，+ 匹配一个或者多个。
- abc$匹配字母 abc 并以 abc 结尾，$ 为匹配输入字符串的结束位置。
```js
var str = "123abc";
var patt1 = /^[0-9]+abc$/; // /^[0-9]+/  ; /^[0-9]/ 
document.write(str.match(patt1));   //123abc
```
```js
var str = "mn12abc";
var patt1 = /[0-9]+[a-z]*$/;
document.write(str.match(patt1));
```
为什么要使用正则表达式？
- 测试字符串内的模式。
例如，可以测试输入字符串，以查看字符串内是否出现电话号码模式或信用卡号码模式。这称为数据验证。
- 替换文本。
可以使用正则表达式来识别文档中的特定文本，完全删除该文本或者用其他文本替换它。
- 基于模式匹配从字符串中提取子字符串。
可以查找文档内或输入域内特定的文本。

#### 2)参考资料
[MDN 正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

[博客园 ](https://www.cnblogs.com/moqing/archive/2016/07/13/5665126.html)

[W3C School](https://www.w3cschool.cn/javascript/js-obj-regexp.html)

