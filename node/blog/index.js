const express = require('express');
const data = require('./db.json');
// koa 是 express 的小孩子
const app = express();
// get 
app.get('/', function(req, res) {
    // api 用?  res.end(JSON.stringfy(express))
    // Content-Type: application/json; charset=utf-8
    res.json(data);
})
// restful  URL 暴露一个资源
// url + http谓语动词 可以表达资源 对资源做操作
// 设计一个URL，访问第一首诗
// app.get('/posts/:id',function(req, res) {
//     //id
//     //data.posts  id
//     // res.json()
//     let id = req.params.id;
//     let post = data.posts.filter(post => post.id == id);
//     res.json(post);

// })

// 添加一篇新文章  大家设计一下URL + 动词
// app.post("/post", )
app.listen(8081);