/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count_1 = 0
    let temp=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count_1+=1
        }
        else{
            if(count_1>temp){
                temp=count_1
            }
            count_1=0
        }
    }
    return Math.max(count_1,temp)
};