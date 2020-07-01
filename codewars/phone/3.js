function createPhoneNumber(numbers) {
    // return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    // 编译
    numbers = numbers.join('');
    // es6 优雅
    // 编程风格的不同
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))