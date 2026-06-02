var reversePrefix = function(s, k) {
    let rev=""
    for(let i=k-1;i>=0;i--){
        rev+=s[i]
        
    }
    for(let i=k;i<=s.length-1;i++){
            rev+=s[i]
        }
    return rev
};
console.log(reversePrefix("abcd",2))