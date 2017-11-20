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