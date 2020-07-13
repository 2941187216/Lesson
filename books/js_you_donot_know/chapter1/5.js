
"use strict"
function init(a) {
    b = a + 3;// LHS 声明在全局
}

init(2);
console.log(b);