// LHS RHS 变量查找 就在那一行相关
function foo(a) {// LHS: a = 2
    var b = a; // LHs
    return a + b; // RHS
}

var c = foo(2); // LHS