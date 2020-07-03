// 左移
// 右移

// 按位操作

    // 按位与 & 每一位都是1，结果才是1
     8 & 7
     1000 & 0111

    // 按位或 | 存在一位是1，结果就是1
     8 | 7
     1000 | 0111 

    // 按位异或 ^ 每一位都不同，结果才是1
    8 | 7
    1000 | 0111 

// 两数不使用四则运算得出和
// a + b = (a ^ b) + ((a & b) << 1)

function sum(a, b) {
    if(a === 0) return b;
    if(b === 0) return a;
    let newA = a ^ b;
    let newB = (a & b) << 1;
    return sum(newA, newB);
}

console.log(sum(8, 7))