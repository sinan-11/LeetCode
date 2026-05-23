/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let ans=[...nums]
    let rev=nums.reverse()
    
    for(let i=0;i<rev.length;i++){
     ans.push(rev[i])
    }
    return ans
};