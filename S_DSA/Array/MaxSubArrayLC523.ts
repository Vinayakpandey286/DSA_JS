// chatgpt solution
// function maxSubArray(nums: number[]): number {
//   let maxCurrent = nums[0];
//   let maxGlobal = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
//     maxGlobal = Math.max(maxGlobal, maxCurrent);
//   }

//   return maxGlobal;
// }


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// my solution which i understood
function maxSubArray(nums: number[]): number {
    let max = Number.MIN_SAFE_INTEGER
    let sum = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        sum += nums[i]
        if (sum > max) max = sum
        if (sum < 0) sum = 0
    }

    return max
};