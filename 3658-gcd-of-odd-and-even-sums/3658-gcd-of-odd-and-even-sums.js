/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumEven=0
    let sumOdd=0
    for(let i=0;i<=n*2;i++){
        if(i%2==0){
            sumEven+=i
        }else{
            sumOdd+=i
        }
    }
    if(n!==1){
        return sumEven%sumOdd
    }return 1
};