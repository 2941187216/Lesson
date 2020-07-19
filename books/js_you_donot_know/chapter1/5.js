
// "use strict"
// function init(a) {
//     b = a + 3;// LHS 声明在全局
// }

// init(2);
// console.log(b);

function fn(a) {
    console.log(a);
    var a = 123;
    console.log(a);
    function a() {}
    console.log(a);
    var b = function () {};
    console.log(b);
    function d() {}
}
fn(1);