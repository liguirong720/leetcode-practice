/**
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * 
 * 示例
 * 输入：
 * [2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3 
 */

// 循环，如果存在某个元素，其indexOf值和lastIndexOf值不相等，则该值重复
var findRepeatNumber = function(nums = []) {
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (nums.indexOf(curr) !== nums.lastIndexOf(curr)) {
            return curr
        }
    }
    return null
};

// set，如果已经在set中，则返回，否则添加
var findRepeatNumber2 = function(nums = []) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i]
        } else {
            set.add(nums[i])
        }
    }
    return null
};


console.log(findRepeatNumber2([2, 3, 1, 0, 2, 5, 3]))