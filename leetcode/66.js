/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let arr = digits.join('');  // 数组转字符串
    let num = BigInt(arr) + 1n + ''; // BigInt 可以表示任意大的整数
    let arr2 = num.split('');
    let endArr = arr2.map(Number);
    return endArr;
    


};