const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = '';
    let nums = [];
    while(line = await readline()){
        nums.push(Number(line));
    }
    nums.shift();
    nums.sort((a, b) => a - b);
    // 双指针法去重
    function removeDuplicate(nums) {
        let len = 1;
        let k = 1;
        for (let i = 1; i < nums.length; i ++) {
            if (nums[i - 1] !== nums[i]) {
                nums[k++] = nums[i];
                len++;
            }
        }
        return nums.slice(0, len);
    }
    const resultArr = removeDuplicate(nums);
    resultArr.forEach(num => console.log(num))
}()
