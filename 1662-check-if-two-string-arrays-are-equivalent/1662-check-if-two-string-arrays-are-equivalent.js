/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
   let w1= word1.join("").split(" ")
   
    let w2= word2.join("").split(" ")
    
   return w1[0]==w2[0]
    
};