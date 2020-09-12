/**
 * 125、验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 */

// 循环比较
var isPalindrome = function(s = '') {
    if (!s) return true
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true
};

// 反转比较
var isPalindrome2 = function(s = '') {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    rs = s.split('').reverse().join('')
    return s === rs
};

console.log(isPalindrome2('A man, a plan, a canal: Panama'))
console.log(isPalindrome2('race a car'))
console.log(isPalindrome2(''))