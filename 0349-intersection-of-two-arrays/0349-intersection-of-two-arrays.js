/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let NewNums2=new Set(nums2)
    let result=[]
    for(let i=0;i<nums1.length;i++){
        if(NewNums2.has(nums1[i])){
            result.push(nums1[i])
            
        }
        
    }let res=[...new Set(result)]
    return res
};