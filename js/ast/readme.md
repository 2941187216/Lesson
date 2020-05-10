<div id="root">
        <span class="demo"> 
            This is a span.
        </span>
        <p>DOM</p>
</div>

DOM 树  AST  Tree Abstract
{

}
对象字面量 表达一下
JSON 描述一下

{
    name：'a',
    sex:'男',
    isSingle:false
}
html docement 什么东西？

- URL 输入 打开页面了，发生了什么？
 download  index.html  html标签
 1. 空白页面 背后发生了什么
 启动了一个tab，进程1（主进程）
 2. window.url = http://127.0.0.1:5500/js/ats/index.html
 html 文档标记语言

- tab 主进程  url ，
启动一个网络请求 进程2 url 127.0.0.1:5502/  html文件
- 渲染页面进程

WEB应用 也是多进程架构
当我们用Chrome 打开页面的时候
启动4个进程 
 应用进程（pid 计算机及资源调用的最小单元） ：浏览器运行
 tab：负责一次页面渲染需要的主进程
 两个子进程 Network Service  http 请求 200
 GPU 计算  高速css 绘制 

 GPU 加速  chrome为了让页面加载更快，使用GPU来绘制页面
 这也是Chrome战胜IE的

 html 文本 text/html

 将文本 -> dom 对象 内存里面  ... 浏览器怎么写的
 Chrome v8
 BOM Browser Object Model
 DOM Document Object Model

 abstract syntax tree 抽象语法树

 api  可以把所有css都查询出来
