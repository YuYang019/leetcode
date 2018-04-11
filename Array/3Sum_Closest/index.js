/**
 * 给定一个整型数组，和一个目标值，在数组中找到最接近目标值的三个数的和，返回这个和
 */
// 思路：先将数组排序
// 如果数组长度<=3，直接返回和
// 大于3，先取前三个的和为基准值，然后，要取三个数和它比较
// 这三个数怎么确定，就是两层循环，最外层的i表示取的第一个数，j和k就是剩下的数的头和尾
// 它们是两个指针，将i, j, k相加和基准值比较，如果大于，说明数大了，k减小1位
// 小了，说明数小了，j加上一位。j和k相遇了这层循环就结束了，然后最外层的i加一位，继续如此
// 结束之后，res就是最接近的值
function threeSumClosest(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var length = nums.length;
    var res = 0;
    if (length <= 3) {
        res = nums.reduce(function (a, b) { return a + b; });
        return res;
    }
    res = nums[0] + nums[1] + nums[2];
    for (var i = 0; i <= length - 3; i++) {
        var j = i + 1;
        var k = length - 1;
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - res) >= Math.abs(target - sum)) {
                res = sum;
                if (res === target)
                    return res;
            }
            if (sum > target)
                k--;
            else if (sum < target)
                j++;
        }
    }
    return res;
}
//# sourceMappingURL=index.js.map