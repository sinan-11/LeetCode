/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(n===1){
        return 2
    }
    
    for(let i=1;i<=n;i++){
        if((n*i)%2==0 && (n*i)%n==0){
          return n*i
        }
    }
    
    
};