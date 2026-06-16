/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr=nums;
    let n=nums.length

    for(let i=0;i<n;i++){
        arr.push(nums[i])
    }
    return arr
};