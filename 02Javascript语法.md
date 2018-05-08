# 一、JavaScript语法简介
## 1. 语句以;分割
```javascript
va x = 5;
var y = 6
var z = x + y;
```
## 2. Values
#### 1) 字面值
- 数字
```javascript
10.50
1001
```
- 字符串
```javascript
"Hello World!"
```
#### 2）变量
**关键字var声明变量**
```javascript
var x=10;
```
## 3. 运算符
- =
- \+ - * /
## 4. 表达式
```javascript
5*10
x*100
"Hello" + " " + "world!"
```
## 5. 关键字
- var
- function

## 6. 注释
- //
- /* */

## 7.大小写敏感
```javascript
lastName=10;
lastname=100;
```
## 8. Camel Case
- first-name, last-name, master-card, inter-city
- first_name, last_name, master_card, inter_city.
- FirstName, LastName, MasterCard, InterCity

![Camel Case](http://w3schools.bootcss.com/js/pic_camelcase.jpg)
## 9. 字符集
Unicode字符集

# 二、变量
**JavaScript variables are containers for storing data values**
## 1. 标识符规则
- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

## 2. 数据类型
- numbers
- strings
```javascript
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
```

## 3. 声明/创建变量
```javascript
var carName;
carName = "Landrover";
```
```javascript
var carName = "Landrover"
```
```javascript
var person="John",carName="Landrover",price=200;
```
#### 1) undefined
变量被声明，但是没有赋值，将拥有默认的undefined
```javascript
var carName;
document.getElementById("demo").innerHTML = carName;
```
#### 2) Re-Declaring
重新声明/定义一个变量，不会丢失值
```javascript
var carName = "Landrover";
var carName;
console.log(carName);
```
#### 3) javascript计算
```javascript
var x = 5 + 2 + 3;
var x = "John" + " " + "Doe";
var x = "5" + 2 + 3; //output??
var x = 2 + 3 + '5'; // output?
```
# 二、JavaScript运算符
#### 1. 算术运算符
- \+
- \-
- \*
- /
- %
- ++
- \--

#### 2. 赋值运算符
- =
- +=
- -=
- *=
- /=
- %=

#### 3. string Operators
**+ 应用在string类型上，作用是字符串连接**
```javascript
txt1 = "John";
txt2 = "Doe";
txt3 = txt1 + " " + txt2;
```
#### 4. string和number相加
**If you add a number and a string, the result will be a string!**
```javascript
x = 5 + 5;
y = "5" + 5;
z = "Hello" + 5;
```

#### 5. 逻辑运算符
```javascript
 ==
 ===       //equal value and equal type
 !=
 !==       //not equal value or not equal type
 > or >=
 < or <=
 ?
```
#### 6. 类型操作符
- typeof 返回变量的类型
- instanceof 判断是否为对象类型