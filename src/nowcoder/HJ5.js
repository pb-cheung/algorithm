// HJ5 进制转换
// 描述
// 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。
//
// 数据范围：保证结果在 1 \le n \le 2^{31}-1 \1≤n≤2
// 31
//  −1
// 输入描述：
// 输入一个十六进制的数值字符串。
//
// 输出描述：
// 输出该数值的十进制字符串。不同组的测试用例用\n隔开。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = '';
    while(line = await readline()){
        line.slice(1);
        let result = 0;
        let j = 0;
        for (let i = line.length - 1; i >= 0; i --) {
            let num = hexToNum(line[i])
            result += Math.pow(16, j++) * num;
        }
        console.log(result);
    }
    function hexToNum(num) {
        if (!/^[0-9a-fA-F]{1}$/.test(num)) {
            return false
        }
        if (0 <= num || num <=9) {
            return num;
        }
        const offset = 55;
        return String(num).toUpperCase().charCodeAt() - offset;
    }
}()
