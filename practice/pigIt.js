let str = 'Hello world !';
let s = str.split(' ').map(word => 
    word.substring(1) + word.charAt(0)
).map(el => {
    if(!el.charAt(1)) return el.charAt(0);
    return el + 'ay';
}).join(' ')

console.log(s)