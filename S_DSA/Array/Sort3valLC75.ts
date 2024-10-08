/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] == 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    } else if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else {
      mid++;
    }
  }
}
