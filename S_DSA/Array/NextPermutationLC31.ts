/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let min_value = -1;
  // check break boin from backwards if i > i-1
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      min_value = i - 1;
      break;
    }
  }
  if (min_value == -1) {
    nums.reverse();
  } else {
    for (let i = nums.length - 1; i > min_value; i--) {
      if (nums[i] > nums[min_value]) {
        // swapping 2 variables
        [nums[i], nums[min_value]] = [nums[min_value], nums[i]];
        break;
      }
    }

    // reverse the array from min_value+1 to nums.length-1

    nums.splice(
      min_value + 1,
      nums.length - min_value - 1,
      ...nums.slice(min_value + 1).reverse()
    );
  }
}
