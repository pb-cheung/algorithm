// NC52 有效括号序列
// 给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
// 括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。
//
// 数据范围：字符串长度 0\le n \le 100000≤n≤10000
// 要求：空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)

// 方法一：
// 栈
// 遍历字符串，左括号入栈
// 遇到有括号，检查和栈顶左括号是否是一对，不是一对，直接退出，字符串不合法
// 循环结束，如果栈中为空则字符串合法；栈中不为空字符串不合法

function isValid(s) {
    const left = ['(', '{', '['];
    const right = [')', ']', '}'];
    const stack = [];
    function isMatch(left, right) {
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        return map[left] === right;
    }
    for(let i = 0; i < s.length; i++) {
        const current = s[i];
        if (left.includes(current)) {
            stack.push(current);
        } else if(right.includes(current)) {
            const topVal = stack[stack.length - 1];
            if (isMatch(topVal, current)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length;
}

// 方法二：
// 1、无论哪种括号，在最里面一层一定是成对出现的；
// 2、将所有成对括号删除剩下的仍然是成对括号；
// 3、若最后有剩余则不满足条件；

/**
 *
 * @param s string字符串
 * @return boolean
 */
function isValid2( s ) {
    const arr = ['()', '[]', '{}'];
    // 检查是否还有成对出现的括号
    function check() {
        let result = arr.filter(item => {
            return s.indexOf(item) > -1;
        })
        return result.length;
    }
    while (check() > 0) {
        arr.forEach(item => {
            s = s.replace(item, ''); // 删除成对出现的括号
        })
    }
    return s.length <= 0;
}

let str = '[(){}]';
console.log(isValid(str));

module.exports = {
    isValid : isValid
};
