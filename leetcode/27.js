/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((a,b) => a -b)
    let index = nums.indexOf(val);
    let i = index;
    if(index != -1){
        while(nums[i] == val) i++;
        let len = i - index;
        nums.splice(index, len);
    }
    return nums.length;
};

