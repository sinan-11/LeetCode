/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let org=n;
    let sum=0;
    let mul=1;
     
    
    while(n>0){
        let a=n%10
        sum+=a
        mul*=a
         n=Math.floor(n/10);
       
        
    }
    let total=sum+mul;
   
    if(org%total==0){
        return true
    }else{
        return false
    }
};