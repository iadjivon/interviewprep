// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
// split the sentence at the space, each word now is an array
   const words = str.split(" ")
// iterate over each word (or words[i])
   for (let i=0; i<words.length; i++){
    //  each word now equal to the uppercase of the letter
    // at index[0] + the rest of the word; we had to almost 
    // split the word and rejoin them
    // in the substring, we ask that it return the word starting at index of 1
    // since we are capitalizing index 0

       words[i] = words[i][0].toUpperCase() + words[i].substring(1)
   }
//    here we ask that it returns after it's been joined again by the space
   return words.join(" ");
}


module.exports = capitalize;
