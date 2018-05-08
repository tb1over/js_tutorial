# 07 Number
## 7.1 综述
JavaScript的数字类型只有一种：Number.即使整数也是如此，如：1和1.0是同一个数.以下都是合法的Number类型：
```javascript
123;    //整数
0.456；  //浮点数
1.2345e3;   //浮点数，科学计数法
-99;
NaN;   //Not a Number,无法表示的数字
Infinity;   //无限大
```
## 7.2 运算
Number类型可以进行四则运算
```javascript
1 + 2; // 3
(1 + 2) * 5 / 2; // 7.5
2 / 0; // Infinity
0 / 0; // NaN
10 % 3; // 1
10.5 % 3; // 1.5
```
## 7.3 存储方式
JavaScript和其他的程序设计语言(c/c++/java/c#)不同，它没有定义不同的数值类型，诸如int,float,double等。

JavaScript数值完全遵守IEEE 754 浮点数标准，以双精度浮点数去存储，占8bytes存储空间。所以存在精度问题，在实际中一定要注意。
```javascript
0.1 + 0.2 === 0.3  //false
0.3 / 0.1 ;//2.9999999999999996
(0.3 - 0.2) === (0.2 - 0.1) //false
```
关于精度问题、数值范围问题，请参考 [JavaScript标准参考教程](http://javascript.ruanyifeng.com/grammar/number.html)

## 7.3 表示方法、进制
表示方法：
- 十进制(默认) 35
- 十六进制 0xFF
- 科学计数法 123e3

进制：
- 十进制：没有前导0的数值
- 八进制：有前缀0o或者0O的数值，或者有前导0、且只能用0-7八个阿拉伯数字的数值
- 十六进制：有前缀0x或0X的数值
- 二进制：有前缀0b或0B的数值。
```javascript
var x = 0XFF;   //255

//默认情况下，javascript显示数值都以十进制显示，但是可以通过toString()方法去显示二进制、十六进制、八进制的形式
var myNumber = 128;
myNumber.toString(16);     // returns 80
myNumber.toString(8);      // returns 200
myNumber.toString(2);      // returns 10000000
```

## 7.4 特殊数值
JavaScript提供了几个特殊数值.
#### 7.4.1 正零和负零
在JavaScript内部，实际上存在2个0：一个是+0，一个是-0。它们是等价的。
```javascript
-0 === +0 // true
0 === -0 // true
0 === +0 // true
```
几乎所有场合，正零和负零都会被当作正常的0
```javascript
+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'

```
唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的
```javascript
(1 / +0) === (1 / -0) // false
//+Infinity - Infinity
```

#### 7.4.2 NaN
1. NaN是js中特殊值，可理解为无法表示的数字，主要出现在将字符串解析成数字出错的场景。
```javascript
5 - 'x' ; //NaN,无法将将'X'转化成数值，结果就是NaN
5 + 'x' ; //??

Math.sqrt(-1); // NaN

0 / 0; // NaN

typeof NaN  ;//'number'
```
2. 关于NaN的一些特点：
```javascript
NaN === NaN // false自身和自身不相等
Boolean(NaN) //false

//NaN与任何数运算，结果都是NaN
NaN + 32 // NaN
NaN - 32 // NaN
NaN * 32 // NaN
NaN / 32 // NaN
```
3. 判断NaN的方法
```javascript
isNaN(NaN)  //true
isNaN(123)  //false
```
注意：isNaN只对数值有效，如果传入其他值，会被先转成数值
```javascript
isNaN('Hello') // true
// 相当于
isNaN(Number('Hello')) // true

isNaN({}) // true
// 等同于
isNaN(Number({})) // true

isNaN(['xzy']) // true
// 等同于
isNaN(Number(['xzy'])) // true

isNaN([]) // false
isNaN([123]) // false
isNaN(['123']) // false
```
4. 建议
- 使用isNaN之前，最好判断一下数据类型
```javascript
function myIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}
```
- 判断NaN更可靠的方法,利用NaN是JavaScript之中唯一不等于自身的值这个特点
```javascript
function myIsNaN(value) {
  return value !== value;
}
```

#### 7.4.3 Infinity
Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity.
```javascript
0 / 0 // NaN
1 / 0 // Infinity
Infinity === -Infinity // false
1 / -0 // -Infinity
-1 / -0 // Infinity
```
isFinite函数返回一个布尔值，检查某个值是不是正常数值，而不是Infinity。
```javascript
isFinite(Infinity) // false
isFinite(-1) // true
isFinite(true) // true
isFinite(NaN) // false
```

## 7.5 与数值相关的全局方法

#### 7.5.1 parseInt()
- 基本用法 :方法用于将字符串转为整数
```javascript
parseInt('123') // 123
parseInt('   81') // 81

//如果parseInt的参数不是字符串，则会先转为字符串再转换
parseInt(1.23) // 1
// 等同于
parseInt('1.23') // 1

//字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。
parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15

//如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1

//如果字符串以0x或0X开头，parseInt会将其按照十六进制数解析。
parseInt('0x10') // 16

//如果字符串以0开头，将其按照10进制解析。
parseInt('011') // 11
```
- 进制转换
parseInt方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。
```javascript
parseInt('1000') // 1000
// 等同于
parseInt('1000', 10) // 1000

parseInt('1000', 2) // 8
parseInt('1000', 6) // 216
parseInt('1000', 8) // 512

```

#### 7.5.2 parseFloat()
用于将一个字符串转为浮点数
```javascript
parseFloat('3.14') // 3.14

parseFloat('314e-2') // 3.14
parseFloat('0.0314E+2') // 3.14

parseFloat('3.14more non-digit characters') // 3.14

parseFloat('\t\v\r12.34\n ') // 12.34

parseFloat([]) // NaN
parseFloat('FF2') // NaN
parseFloat('') // NaN
```
注意parseFloat函数与Number函数转换的区别
```javascript
parseFloat(true)  // NaN
Number(true) // 1

parseFloat(null) // NaN
Number(null) // 0

parseFloat('') // NaN
Number('') // 0

parseFloat('123.45#') // 123.45
Number('123.45#') // NaN
```
#### 7.5.3 toExponential()
```javascript
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0
```
#### 7.5.4 toFixed()
```javascript
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000 
```
#### 7.5.5 toPrecision()
```javascript
 var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600 
```

#### 7.5.6 valueOf()
```javascript
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23 

//js中valueOf()方法主要用来将对象转化成普通值
```

## 7.6 Number对象
后续有机会讲内置对象时再详细讲，类似于包装对象(java/c#)
```javascript
var x = 123;
var y = new Number(123);

// typeof x returns number
// typeof y returns object 
```

```javascript
var x = 500;             
var y = new Number(500);
// (x == y) is true because x and y have equal values 
```

```javascript
var x = 500;             
var y = new Number(500);

// (x === y) is false because x and y have different types 
```

```javascript
var x = new Number(500);             
var y = new Number(500);

// (x == y) is false because objects cannot be compared
```

JavaScript入门篇：https://www.imooc.com/learn/36
JavaScript进阶篇：https://www.imooc.com/learn/10
JavaScript深入浅出：https://www.imooc.com/learn/277
DOM探索之基础篇：https://www.imooc.com/learn/488
DOM事件揭秘：https://www.imooc.com/learn/138

JavaScript基础实验：Javascript基础