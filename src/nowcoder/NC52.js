// NC52 有效括号序列
// 给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
// 括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。
//
// 数据范围：字符串长度 0\le n \le 100000≤n≤10000
// 要求：空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)

// 分析：
// 1、无论哪种括号，在最里面一层一定是成对出现的；
// 2、将所有成对括号删除剩下的仍然是成对括号；
// 3、若最后有剩余则不满足条件；

/**
 *
 * @param s string字符串
 * @return boolean
 */
function isValid( s ) {
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

let str = '[({)]';
console.log(isValid(str));

module.exports = {
    isValid : isValid
};
