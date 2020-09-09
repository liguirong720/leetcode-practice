/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    x += ''
    let arr = x.split('')
    let len = arr.length
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) {
            return false
        }
    }
    return true
};

let x = 123321
console.log(isPalindrome(x))