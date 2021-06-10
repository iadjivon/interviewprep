// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/////////////////////////////////////////
// Solution using character mapping
////////////////////////////////////////
function anagrams(stringA, stringB) {
 const aCharMap = buildCharMap(stringA); 
 const bCharMap = buildCharMap(stringB);

//  compare the length of both maps, if they are not the same
//  then they cannot be anagrams

if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
}

// iterate through the keys in of one of the charMaps and compare it to 
// the other one, if it's not the same, then they are not anagrams

// because the maps are object, we use for ...in; we use for...let with arrays
for (let char in aCharMap){
    if (aCharMap[char] !== bCharMap[char]){
        return false;
    }  
}
return true;

}

//  here is a helper function that would prevent us from using two for loops
function buildCharMap(str){
    // this is an empty object that will serve as our character map
    const charMap = {};
    // create a cleaned string that removes unwanted characters(!, $ etc.)
    // and also lowercases it
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase()
    // iterate through the string and for each character inside of the string,
    // we will add it to our character map

    for (let char of cleanedStr){
        // take character map (charMap), assign a key(char) to the 
        // current character that we are looking at and then we increment
        // the value at that character
        charMap[char] = charMap[char]+ 1 || 1;
    }
    return charMap;
}


module.exports = anagrams;





/////////////////////////////////////////
// Solution using split, sort, join
///////////////////////////////////////
// function anagrams(stringA, stringB) {
//     // compare both strings to each other to see if they are the same length
//        const newStringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//        const newStringB = stringB.replace(/[^\w]/g, '').toLowerCase()
        
    
//         let lenA = newStringA.length;
//         let lenB = newStringB.length;
//         // if their length is not the same, they cannot be anagrams
//         if (lenA !== lenB){
//             return false
//         } 
    
//        const sortedStringA = newStringA.split('').sort().join('');
//        const sortedStringB = newStringB.split('').sort().join('');
    
        
//       return sortedStringA === sortedStringB
    
//     }
    
//     module.exports = anagrams;
    