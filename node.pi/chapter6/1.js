// console.log("0123456789".length);

// console.log("零一二三四五六七八九".length);

// console.log("\u00bd".length);

// var str = "深入浅出node.js";
// var buf = new Buffer(str, 'utf-8');
// console.log(buf);

var buf = new Buffer(100);
console.log(buf.length);
console.log(buf[10]);

buf[10] = 100;
console.log(buf[10]);

buf[20] = -100;
console.log(buf[20]);

buf[21] = 300;
console.log(buf[21]);

buf[22] = 3.1415;
console.log(buf[22]);

var  pool ;
function allocPool () {
    pool = new SlowBuffer(Buffer.poolSize);
    pool.used = 0;
} 
    

