/**
 * 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。

示例 1:

输入: [0,1,2,4,5,7]
输出: ["0->2","4->5","7"]
解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
示例 2:

输入: [0,2,3,4,6,8,9]
输出: ["0","2->4","6","8->9"]
解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = []
    if (nums.length === 1) {
        result.push(`${nums[0]}`)
    } else {
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            while(i + 1 < nums.length && (nums[i+1] - nums[i] === 1)) {
                i++
            }
            if (curr !== nums[i]) {
                result.push(`${curr}->${nums[i]}`)
            } else {
                result.push(`${curr}`)
            }
        }
    }
    return result
};

let a1 = [0,1,2,4,5,7]
console.log(summaryRanges(a1))

let a2 = [0,2,3,4,6,8,9]
console.log(summaryRanges(a2))
