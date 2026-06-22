/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let r=a.toLowerCase().split("").reverse().join("")
    return a==r
};