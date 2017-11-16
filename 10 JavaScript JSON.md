# 一、JSON是什么
- JSON 英文全称 JavaScript Object Notation
- JSON 是一种轻量级的数据交换格式。
- JSON是独立的语言
- JSON 易于理解

**JSON 使用 JavaScript 语法，但是 JSON 格式仅仅是一个文本。
文本可以被任何编程语言读取及作为数据格式传递。**

# 二、JSON的作用
- 用于存储和传输数据的格式。
- 通常用于服务端向网页传递数据。

# 三、JSON实例
```json
{"employees":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}
```
# 四、JSON语法规则
JSON 格式在语法上与创建 JavaScript 对象代码是相同的。
由于它们很相似，所以 JavaScript 程序可以很容易的将 JSON 数据转换为 JavaScript 对象。

## 1.语法规则
- 数据为 键/值 对。
- 数据由逗号分隔。
- 大括号保存对象
- 方括号保存数组

## 2.JSON 数据
一个名称对应一个值。JSON 数据格式为 键/值 对，就像 JavaScript 对象属性。
键/值对包括字段名称（在双引号中），后面一个冒号，然后是值：
```javascript
 "firstName":"John"
```

## 3.JSON对象
JSON 对象保存在大括号内。
就像在 JavaScript 中, 对象可以保存多个 键/值 对：
```javascript
{"firstName":"John", "lastName":"Doe"} 
```
## 4.JSON 数组
JSON 数组保存在中括号内。
就像在 JavaScript 中, 数组可以包含对象：
```javascript
 "employees":[
     {"firstName":"John", "lastName":"Doe"}, 
     {"firstName":"Anna", "lastName":"Smith"}, 
     {"firstName":"Peter", "lastName":"Jones"}
 ]
```

## 5. JSON 字符串转换为 JavaScript 对象
通常我们从服务器中读取 JSON 数据，并在网页中显示数据,为了演示方便，直接在网页中设置JSON字符串
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>JSON实例</title>
</head>

<body>

    <h2>为 JSON 字符串创建对象</h2>
    <p id="demo"></p>
    <script>
        var text = '{"employees":[' +
            '{"firstName":"John","lastName":"Doe" },' +
            '{"firstName":"Anna","lastName":"Smith" },' +
            '{"firstName":"Peter","lastName":"Jones" }]}';
        obj = JSON.parse(text);
        console.log('type of obj is:' + typeof obj);
        console.log(obj);

        let message = " ";
        for (let i = 0; i < obj.employees.length; i++) {
            message += obj.employees[i].firstName + " " + obj.employees[i].lastName + '<br />';
        }
        /*
            obj.employees.forEach(element => {
                message += element.firstName + " " + element.lastName + '<br />';
            });
        */
        /*
            for (const element of obj.employees) {
                message += element.firstName + " " + element.lastName + '<br />';
            }
        */
        /*
            for (const key in obj.employees) {
                message += obj.employees[key].firstName + " " + obj.employees[key].lastName + '<br />';     
            }
        */
        document.getElementById("demo").innerHTML = message;
    </script>

</body>

</html>
```

# 五、具体实例

**一定注意跨域问题！！！**
请同学们课后自己搜索跨域相关资料
```html
<html>
<head>
    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#b01").click(function () {
                var url = "https://api.douban.com/v2/book/isbn/" + $("#input_isbn").val()
                var img_url = ""        //9787115195999
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'JSONP', //here
                    success: function (data) {
                        console.log(data);
                        $("#title").val(data.title);
                        $("#author").val(data.author[0]);
                        $("#publisher").val(data.publisher);
                        $("#pages").val(data.pages);
                        $("#binding").val(data.binding);
                        $("#summary").val(data.summary);
                        $("#pubdate").val(data.pubdate);
                        $("#image").attr("src", data.images.medium);
                    }
                });

            });
        });
    </script>
</head>

<body>
    输入isbn:
    <input type="text" id="input_isbn" value="">
    <br/>
    <button id="b01" type="button">get book</button>
    <br/> 书名：
    <input type="text" id="title">
    <br/> 作者：
    <input type="text" id="author">
    <br/> 出版社：
    <input type="text" id="publisher">
    <br/> 出版日期：
    <input type="text" id="pubdate">
    <br/> 页面：
    <input type="text" id="pages">
    <br/> 封皮：
    <input type="text" id="binding">
    <br/> 简介：
    <textarea id="summary" rows="10" cols="30"></textarea>
    <br/> 封面：
    <div id="images">
        <img id="image" src="">
    </div>

</body>
</html>
```


```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width = device-width,initial-scale = 1,user-scalable = 0">
    <title>api使用实例</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
</head>

<body>
    <div>
        <input type="text" placeholder="请输入地区zip-code">
        <button id="search">查询</button>
        <div class="info_weather">
            <div class="input-group">
                <span class="input-group-addon" id="sizing-addon2">地区</span>
                <input class="loc" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon2">
            </div>
            <div class="input-group">
                <span class="input-group-addon" id="sizing-addon2">温度</span>
                <input class="temp" type="text" class="form-control" placeholder="" aria-describedby="sizing-addon2">
            </div>

        </div>
    </div>
    <script>
        $("#search").click(function () {
            var input_value = $("input").val();
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather",
                data: {
                    appid: 'ab21b8f814629480b964369f72fb2d70',
                    zip: input_value
                },
                // data: "zip=94040,us",
                dataType: "json",
                success: function (meg) {
                    $(".loc").val("经度" + meg["coord"].lon + "纬度" + meg["coord"].lat);
                    $(".temp").val(meg["main"].temp);
                }
            });
        });
    </script>

</body>

</html>
```

# 六、api地址
- 免费开放天气api:
http://www.sojson.com/api/weather.html
- 豆瓣图书免费api
https://developers.douban.com/

- 综合数据提供商：聚合数据
https://www.juhe.cn/

# 七、深入学习
- JSON教程
https://www.w3cschool.cn/json/json-tutorial.html

- Bootstrap
http://www.bootcss.com/

- es6标准 http://es6.ruanyifeng.com/

- 前段标准 https://developer.mozilla.org/zh-CN/