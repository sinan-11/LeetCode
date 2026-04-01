var reduce = function(nums,fn,init) {
    let sum=init;
    for(let i=0;i<nums.length;i++) {
        sum =fn(sum,nums[i])
    }
    
    return sum
};
const fn=function (acc,curr){
    return acc + curr
}