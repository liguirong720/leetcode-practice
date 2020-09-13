/**
 * 面试题 01.01. 判定字符是否唯一
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同
 */

var isUnique = function(astr) {
    let mapping = {}
    for (let i = 0; i < astr.length; i++) {
        if (!mapping[astr[i]]) {
            mapping[astr[i]] = true
        } else {
            return false
        }
    }
    return true
};