/**
 * 一、题目描述：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 二、测试案例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

var twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        let idx = nums.indexOf(diff)
        if (idx > -1 && i !== idx) {
            result = [i, idx]
            break
        }
    }
    return result
};

// test
let n1 = [3,2,4]
let t1 = 6

let n2 = [2,7,11,15]
let t2 = 9

console.log(twoSum(n1, t1)) // [ 1, 2 ]
console.log(twoSum(n2, t2)) // [ 0, 1 ]