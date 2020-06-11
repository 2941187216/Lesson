/** 
 * @param {number[]} nums 
 * @param {number} k
 * @return {number[]}
*/

// 方法一：双指针 + 遍历 O(kn)
const maxSlidingWindow = function (nums, k) {
    const length = nums.length;
    let res = [];
    let left = 0;
    let right = k - 1;
    while (right < length) {
        let max = calMax(nums, left, right);
        res.push(max);
        left++;
        right++;
    }
    return res;
}

function calMax(arr, left, right) {
    if (!arr || arr.length <= 0) return;
    const max = arr[left];
    for(let i = left; i <= right; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}