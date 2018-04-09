/**
 * 给定一个排好序的数组和一个目标值，找到这个目标值在数组中的位置，如果数组中不存在该目标值，
 * 返回这个目标值应该所处的位置
 */

 function searchInsert(nums: number[], target: number) {
   if (nums[0] > target) {
     return 0
   }
   if (nums[nums.length - 1] < target) {
     return nums.length
   }
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] === target) {
       return i
     }
     if (nums[i] > target) {
       return i
     }
   }
 }

 export default searchInsert