# JavaScript String
JavaScript中string是用来存储和操作文本信息的。

- 字符串可以存储一系列字符，如 "John Doe"。
- 字符串可以是插入到引号中的任何字符。可以使用单引号或双引号：
```javascript
var carname = "Volvo XC60";
var carname = 'Volvo XC60';
```
- 可以在字符串中出现引号，只要不和字符串两边的括号匹配即可
```javascript
// correct example
var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';

//incrrect 
var y = "We are the so-called "Vikings" from the north."
```
- 字符串长度
字符串长度通过内置属性length获取到
```javascript
var text = "ABCDEF";
var sln = text.length;
```
- 特殊字符
解决特殊字符的办法是通过转义字符 \ escape character
```javascript
var x = 'It \'s alright';
var y = "We are the so-called \"Vikings\" from the north."
```

- 切断长的代码行
```javascript
document.getElementById("demo").innerHtml = 
"Hello world!";

document.getElementById("demo").innerHtml = "Hello \
world!";

```
# 字符串属性和方法
## length
## Finding a String in a String 
### 1. indexOf()
返回字符串中检索指定字符第一次出现的位置
```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```
 ### 2. lastIndexOf()
返回字符串中检索指定字符最后一次出现的位置

注意：indexof和lastindexof函数如果返回-1，表示没有找到

### 3. search()

功能：在字符串中搜索字符串出现的位置，与indexOf函数类似，但是比indexOf函数强大，其可以接收正则表达式作为参数。
```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```

## Extracting String Parts
### 1. slice(start, end)
从一个字符串中提取部分出来形成一个新的字符串[star, end)
```javascript
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); //Banana [7, 13)

//negative parameter
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12,-6);   //Banana [-6,-12]

//omit second parameter
var res = str.slice(7);     //from start to the rest of string
var res = str.slice(-12);   // the same as before
```

### 2. substring(start, end)
substring函数功能和slice功能类似,但是不能接受负数参数
```javascript
<!DOCTYPE html>
<html>
<body>
    <p>The substr() method extract a part of a string
and returns the extracted parts in a new string:</p>
    <p id="demo"></p>
    <script>
        var str = "Apple, Banana, Kiwi";
        document.getElementById("demo").innerHTML = str.substring(7,13);
    </script>
</body>
</html>
```
### 3. substr(start, length)
substr函数功能与slice函数功能类似，区别在于第二个参数指定截取部分长度
```javascript
var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);      //Banana
```
## Replacing String Content
replace()函数实现在一个字符串中进行内容替换
```javascript
str =  "Please visit Oracle!"
var n = str.replace("Oracle", "Microsoft"); 
// 1. the replace() return a new string, does not change the string it is called on.
// 2. the first parameter can be a regular expression
```

## Converting to Upper and Lower Case
```javascript
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
```

## concat() Method
连接两个或多个字符串
```javascript
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat("	",text2);

// do the same
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ","World!");
```

**注意：** 所有字符串函数都返回一个新字符串,而不会修改原来字符串。

## charAt() Method
返回指定索引位置的字符

```javascript
var str = "HELLO WORLD";
str.charAt(0);  // H
```
## charCodeAt() Method
返回指定索引位置字符的 Unicode 值
```javascript
var str = "HELLO WORLD";
str.charCodeAt(0);         //	returns 72
```

## Converting a String to an Array
split()函数可以把字符串分割为子字符串数组
```javascript
var txt = "a,b,c,d,e";   // String
var arr = txt.split(",");          // Split on commas
```
[ Complete JavaScript String Reference](http://w3schools.bootcss.com/jsref/jsref_obj_string.html)