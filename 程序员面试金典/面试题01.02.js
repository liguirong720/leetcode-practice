/**
 * 面试题 01.02. 判定是否互为字符重排
 * 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 * 
 */
var CheckPermutation = function(s1, s2) {
    s1 = s1.split('').sort(function(a,b) {
        return a > b ? 1 : -1
    }).join('')
    s2 = s2.split('').sort(function(a,b) {
        return a > b ? 1 : -1
    }).join('')
    return s1 === s2
};

CheckPermutation('a', 'ab')