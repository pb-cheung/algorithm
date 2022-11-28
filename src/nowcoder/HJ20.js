/*
HJ20 密码验证合格程序
* 描述
密码要求:

1.长度超过8位

2.包括大小写字母.数字.其它符号,以上四种至少三种

3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）

数据范围：输入的字符串长度满足 1 \le n \le 100 \1≤n≤100
输入描述：
一组字符串。

输出描述：
如果符合要求输出：OK，否则输出NG

输入：
021Abc9000
021Abc9Abc1
021ABC9000
021$bc9000
*
输出：
OK
NG
NG
OK

* */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = ''
    while(line = await readline()){
        console.log(validatePassword(line) ? 'OK': 'NG');
    }

    function validatePassword(password) {
        if (password.length <= 8) {
            return false;
        }
        function validateType(password) {
            let sum = 0;
            if (/[a-z]/.test(password)) {
                sum ++;
            }
            if (/[A-Z]/.test(password)) {
                sum ++;
            }
            if (/[0-9]/.test(password)) {
                sum ++;
            }
            if (/[^a-zA-Z0-9]/.test(password)) {
                sum ++;
            }
            return sum >= 3;
        }
        function isRepeated(password) {
            const result = []
            for (let i = 0; i < password.length - 2; i ++ ) {
                const subStr = password.substring(i, i + 3);
                if (result.includes(subStr)) {
                    return false;
                } else {
                    result.push(subStr);
                }
            }
            return true;
        }
        return validateType(password) && isRepeated(password);
    }
}()
