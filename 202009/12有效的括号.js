/**
 * 20、有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

var isValid1 = function(s) {
    if (!s) return true
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            if (s[i] === ')') {
                stack[stack.length - 1] === '(' && stack.pop() || stack.push(s[i])
            }
            if (s[i] === ']') {
                stack[stack.length - 1] === '[' && stack.pop() || stack.push(s[i])
            }
            if (s[i] === '}') {
                stack[stack.length - 1] === '{' && stack.pop() || stack.push(s[i])
            }
        }
    }
    return stack.length === 0
};


var isValid2 = function(s) {
    
    // 空返回true
    if (!s) return true
    
    // 长度为奇数，返回false
    if (s.length % 2) return false

    let stack = []

    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    for (let i = 0; i < s.length; i++) {
        // 左括号入栈
        if (!mapping[s[i]]) {
            stack.push(s[i])
        } else {
            // 右括号出栈
            if (mapping[s[i]] !== stack.pop()) {
                return false
            }
        }

        // 超过一半未匹配，返回false
        if (stack.length > s.length / 2) return false
    }
    return stack.length === 0
};

console.log(isValid1('{{}}'))
console.log(isValid2('{{[]}}'))
console.log(isValid1('{({}}'))
console.log(isValid2('{{}})'))