/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    
    let count=0
    for(let i=1;i<=num;i++){
      let str=i.toString().split('').reduce((a,b)=>a+Number(b),0)
      if(str%2==0){
          count ++
      }
        
    }
    return count
};