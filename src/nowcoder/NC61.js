// NC61 两数之和
// 描述
// 给出一个整型数组 numbers 和一个目标值 target，请在数组中找出两个加起来等于目标值的数的下标，返回的下标按升序排列。
// （注：返回的数组下标从1开始算起，保证target一定可以由数组里面2个数字相加得到）
//
// 数据范围：2\leq len(numbers) \leq 10^52≤len(numbers)≤10
// 5
//  ，-10 \leq numbers_i \leq 10^9−10≤numbers
// i
// ​
//  ≤10
// 9
//  ，0 \leq target \leq 10^90≤target≤10
// 9
//
// 要求：空间复杂度 O(n)O(n)，时间复杂度 O(nlogn)O(nlogn)

/**
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
function twoSum( numbers ,  target ) {
    let map = new Map();
    let result = [];
    numbers.forEach((num, index) => {
        if (map.has(target - num)) {
            result.push(map.get(target - num));
            result.push(index + 1);
            result.sort((a,b) => a - b);
        } else {
            map.set(num, index + 1);
        }
    });
    return result;
}
// module.exports = {
//     twoSum : twoSum
// };

console.log(twoSum([3,2,4],6));
console.log(twoSum([20,70,110,150],90));
console.log(twoSum([-3, 4, 3, 90], 0));
