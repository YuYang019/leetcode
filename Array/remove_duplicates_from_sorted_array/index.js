/**
 * 从排好序的数字数组中，移除重复的部分，后面的部分可忽略，最后返回移除后数组的长度，不可创建新数组
 */
function removeDuplicates(nums) {
    if (nums.length === 0)
        return;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
//# sourceMappingURL=index.js.map