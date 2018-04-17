/**
 * 找到给定整型数组中，乘积最大的子数组，至少有一个数，返回这个乘积
 */
// 注意，子数组必须是连续的
// 思路：不同于加法，累加的结果是正的则一定是递增，乘法有可能一个很小的负数，后面跟另一个负数相乘就得到很大的乘积
// 所以，需要维护一个局部最小 min 和局部最大 max
// max的值 = 当前 max 乘下一个数 nums[i] 和当前 min 乘下一个数 nums[i] 和 下一个数 nums[i] 里的最大值
// min的值 = 之前 max 及 temp 乘下一个数 nums[i] 和当前 min 乘下一个数 nums[i] 和 下一个数 nums[i] 里的最小值
// 为什么是之前max，因为，max先于min计算，所以计算min的时候得用之前储存的max，其实本质上这两个都是在当前循环找最小和最大
// 
// 这个解法貌似是一维的动态规划，从大局入手，最大的值，只能从 nums[i], max * nums[i], min * nums[i] 里取得。
// 思路值得学习
function maxProduct(nums) {
    if (nums.length === 0)
        return 0;
    var max = nums[0];
    var min = nums[0];
    var result = nums[0];
    for (var i = 0; i < nums.length; i++) {
        var temp = max;
        max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
        min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
        if (max > result) {
            result = max;
        }
    }
    return result;
}
//# sourceMappingURL=index.js.map