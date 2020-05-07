/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length
        if (!len || target < nums[0]) {
            return 0
        } else if (target > nums[len - 1]) {
            return len
        }
        let start = 0, end = len - 1
        while (start < end) {
            const mid = (start + end) >>> 1
            if (target > nums[mid]) {
                start = mid + 1
            } else {
                end = mid
            }
        }
        return start
    
    
    };