/**
 * 从排好序的数字数组中，移除重复的部分，最后返回移除后数组的长度，不可创建新数组
 */

function removeDuplicates(nums: number[]) {
  if (nums.length === 0) return
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}