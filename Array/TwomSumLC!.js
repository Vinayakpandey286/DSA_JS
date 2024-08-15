/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  function sortedArray(x, y) {
    return x[0] - y[0]
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i]
  }
  nums.sort(sortedArray)

  let start = 0
  let end = nums.length - 1

  while (start < end) {
    if (nums[start][0] + nums[end][0] === target) {
      return [nums[start][1], nums[end][1]]
    }
    else if (nums[start][0] + nums[end][0] > target) {
      end--
    } else {
      start++
    }
  }


};