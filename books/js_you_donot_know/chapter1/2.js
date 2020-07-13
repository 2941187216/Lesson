function a(age) {
    console.log(age);
    var age = 20;
    console.log(age);
    function age() {

    }
    console.log(age);
}
age(18);


function fn(a) {
    console.log(a)

    var a = 123;

    function a() {}

    console.log(a)

    var b = function() {}

    console.log(b)
    function d() {}
}
fn(1)

// 1. 创建AO 执行期上下文