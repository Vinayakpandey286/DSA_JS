/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i]);
    let idx = x - 1;
    if (nums[idx] > 0) {
      nums[idx] *= -1;
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;

  // my solutions(Brute force)

  // result=Array(nums.length).fill(0)
  // for(let i=0;i<nums.length;i++){
  //     result[nums[i]-1]=1
  // }
  // let finalarr = []
  // for(let j=0;j<result.length;j++){
  //     if(result[j]===0){
  //         finalarr.push(j+1)
  //     }
  // }
  // return finalarr
};
