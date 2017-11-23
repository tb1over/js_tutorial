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
https://www.w3cschool.cn/javascript/js-objects.html