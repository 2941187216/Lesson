const http = require('http');

class MyKoa {
    constructor() {
        // 手写代码 源码分析
        console.log('aaa')
        this.fn = undefined;
    }
    // listen   use

    listen(...args) {
        // createServer
        let server = http.createServer(this.fn);//异步的回调函数
        server.listen(...args);

    }
    use(fn) {
        this.fn = fn;
    }
}




module.exports = MyKoa