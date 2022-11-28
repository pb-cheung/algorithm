// 合并表记录
// 描述
// 数据表记录包含表索引index和数值value（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照index值升序进行输出。
//
//
// 提示:
// 0 <= index <= 11111111
// 1 <= value <= 100000
//
// 输入描述：
// 先输入键值对的个数n（1 <= n <= 500）
// 接下来n行每行输入成对的index和value值，以空格隔开
//
// 输出描述：
// 输出合并后的键值对（多行）

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = '';
    let map = {};
    while(line = await readline()){
        if (line.split(' ').length === 1) {
            continue;
        }
        let [key, value] = line.split(' ');
        if (map[key]) {
            map[key] = map[key] + Number(value);
        } else {
            map[key] = Number(value);
        }
    }
    for(let key in map) {
        console.log(`${key} ${map[key]}`);
    }
}()
