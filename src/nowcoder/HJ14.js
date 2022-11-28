// HJ14 字符串排序
// 描述
// 给定 n 个字符串，请对 n 个字符串按照字典序排列。
//
// 数据范围： 1 \le n \le 1000 \1≤n≤1000  ，字符串长度满足 1 \le len \le 100 \1≤len≤100
// 输入描述：
// 输入第一行为一个正整数n(1≤n≤1000),下面n行为n个字符串(字符串长度≤100),字符串中只含有大小写字母。
// 输出描述：
// 数据输出n行，输出结果为按照字典序排列的字符串。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let arr = [];
    while(line = await readline()){
        arr.push(line)
    }
    if (Number(arr[0]) === arr.length -1) {
        arr.shift();
    }
    arr.sort();
    arr.forEach(ele => console.log(ele))
}()
