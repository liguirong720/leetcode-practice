/**
 * 题目描述：
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 * 
 */

var runningSum = function(nums) {
    let result = []
    nums.reduce((prev, curr) => {
        result.push(prev + curr)
        return prev + curr
    }, 0)
    return result
};

let n = [1,2,3,4]
console.log(runningSum(n)) // [ 1, 3, 6, 10 ]

let a = [2, 2, 3, 1]
console.log(a.indexOf(2))