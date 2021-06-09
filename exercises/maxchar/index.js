// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const characters = {};
    let max = 0;
    let maxChar= "";  

    for (let character of str) {
    // this is saying that if at any specific character in characters,
    // and this character was not present before, set that character as 1,
    // otherwise increment that character by 1. 
        if (!characters[character]){
            characters[character] = 1;
        } else {
            characters[character]++;
        }
    }
    // in the for..in look the character here is returning the key(here the letter), 
    // NOT the value(here how many times it shows up)
for (let character in characters){
    if (characters[character] > max){
        max = characters[character];
        maxChar = character;
    }
}
return maxChar;
}


module.exports = maxChar;
