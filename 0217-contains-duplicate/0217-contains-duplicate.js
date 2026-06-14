/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let arr=[...new Set(nums)]
    console.log(arr)
    if(arr.length==nums.length){
        return false
    }else{
        return true
    }
    
}
