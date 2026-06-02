/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr=[]
    for(let i=0;i<2*n-1;i++){
        if(arr.length<2*n){
             arr.push(nums[i])
        arr.push(nums[i+n])
        }
       
        
    }

    return arr
    
};