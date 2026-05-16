var reverseString = function(s) {

    for(let i = s.length -1; i >=0 ; i--) {
    s.push(s[i])
    
    }
    for(let j=0;j<s.length;j++){
        s.shift()
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]))