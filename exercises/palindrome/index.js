// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // let re = /[\W_]/g;
    // let lowRegStr = str.toLowerCase().replace(re, '');
    let splitStr = str.split('');
    let reserveArr = splitStr.reverse();
    let joinArr= reserveArr.join('');

    if (joinArr === str){
        return true
    } else {
        return false
    }  

    // return joinArr === str
}

// Other answers

// function palindrome(str){
//     return str.split('').every((char, i) =>{
//         return char === str[str.length-i -1]

//     })
// }

module.exports = palindrome;



 