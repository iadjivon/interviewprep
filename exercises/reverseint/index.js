// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n){
     const numToString = n.toString().split('').reverse().join('');
     if (n<0) {
         return parseInt(numToString) * -1
        
     }
     
     return parseInt(numToString)
         
}



module.exports = reverseInt;
 



//  Another solution is: return parseInt(numToString) * Math.sign(n) --> the Math.sign will equal -1 in this sense
        // Math.sign() funcrion returns ither a positive or negative +/-1, indicating the sign of a number
        // pased into the argument. In this case. the argument is the "n", so if the n is positive, 
        // the parseInt will be multiplied by a +1, whereas if the n is negative, it will be multiplied by a -1.

        // Note the IF  statement is why we use the -1 here. To use the Math.sign, remove the if statement.
        //  and you will simply get: return parseInt(numToString) * Math.sign(n)