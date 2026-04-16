/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let ssum=0;
    let dsum=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<10){
            ssum+=nums[i]
        }else{
            dsum+=nums[i]
        }
    }
    return ssum>dsum || dsum>ssum
};