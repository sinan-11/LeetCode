/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr=nums1.filter((item)=>nums2.includes(item))
    let arr1=[...new Set(arr)]
   
    
    return arr1
    
};
console.log(intersection([1,2,3,],[3]))