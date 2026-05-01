var arraySign = function(nums) {
    let sum=1
    if(nums.includes(0)){
        return 0
    }
    for(let i=0;i<nums.length;i++){
        sum*=nums[i]
    }
    
    if (sum>0){
        return 1
    }else if(sum ===0 ){
        return 0
    }else{
        return -1
    }
};