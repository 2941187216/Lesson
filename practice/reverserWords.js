

// let s = "Let's take LeetCode contest";
// console.log(s.split('').reverse().join(''))
// let arr = s.split('').reverse().join('')
// console.log(arr.split(' ').reverse().join(' '));


// var addTwoNumbers = function(l1, l2) {
//     let node = new ListNode('head');
//     let sum = 0;
//     // 是否进位
//     let n = 0;
//     let temp = node;
//     while(l1 || l2) {
//         const n1 = l1 ? l1.val : 0;
//         const n2 = l2 ? l2.val : 0;
//         sum = n1 + n2 + n;
//         temp.next = new ListNode(sum % 10);
//         temp = temp.next;
//         n = parseInt(sum / 10);
//         if(l1) {
//             l1 = l1.next;
//         }
//         if(l2) {
//             l2 = l2.next;
//         }
//     }
//     if(n > 0) {
//         temp.next = new ListNode(n);
//     }
//     return node.next;
// }

let s = " the sky is blue";
console.log(s.trim().split(/\s+/).reverse().join(' '));

