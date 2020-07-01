function createPhoneNumber(numbers) {
    // 代码语义连贯
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))