// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {   
//     let cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
//     let vowel = ["a", "e", "i", "o", "u"];
//     let vowelsNum = 0;

//     // for each character of the string 
//     // careful here with in (used for object) and of (used for arrays)
//     for (let char of cleanedStr){
//     // if this array includes this character we are currently iterating over...
//         if (vowel.includes(char)){
//     // increase vowelNum by 1
//            vowelsNum++
//         }
//     // else, do nothing ( we do not need an else statement here)
//    }
// // return the vowelsNum
//    return vowelsNum;  
// }

// module.exports = vowels;




function vowels(str) { 
    // this regex is saying that if this str contains any of the 
    // characters listed, let us know 
    // the g tells it to look for multiple, the i tells it to be case in sensitive
    
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;  
    
}

module.exports = vowels;
