// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

////////////////////////////////////////
// Solution with while loop 
///////////////////////////////////////
// this solution is essentially the same as  
// the for loop, but written as the while loop

function chunk(array, size) {
    const chunks = [];
    // we declare index before the while loop 
    let i = 0 
    
    while (i<array.length){
        //  slice everything from index to index + size. 
        // so the first iteration here would be from 0 to 0+2 
        // then we push it into chunks
        
        chunks.push(array.slice(i, i+size));
        
        //  this code increases the index by the size, so the second 
        // iteration would start from index of 2 and end at index of 2+2 (=4)
        i+=size;
    }

    //  return the new array
    return chunks;
}


module.exports = chunk;



////////////////////////////////////////
// Solution with for loop 
///////////////////////////////////////

// function chunk(array, size) {
//     const chunks = [];
//     // create a temporary variable to get the last
//     // item in the chunked array
//     // last technically refers to the subarrays which 
//     // each have their own index in the chunked array.
//     // because when we call last, we are calling on the last index
//     // which  in fact is chunked at the index [chunked.length -1]
//     const last = chunks[chunks.length -1];

//     // let i= 0;
//     //  iterate through the existing array
//     // here we have i+=size becasue after each loop, we want i to be 
//     // incremented by the specified size, rather than by 1 (i++)
//     for (let i=0; i< array.length; i+=size){
//         // slice the array starting from i and ending at "size" 
//         // --> slice (start, end ) is equal to slice(i, i+=size)
//         // then push it into the new array created
//        if (!last || last.length === size){
//         chunks.push(array.slice(i, i+size ));
//        } 
//            }
//     //  return the new array
//     return chunks;
// }


// module.exports = chunk;



////////////////////////////////////////
// Solution with let... of 
///////////////////////////////////////

// function chunk(array, size) {
//     // create an empty array to house the new chunks
//     const chunked = [];
//     // iterate through the array 
//     for (let element of array){
//         // create a temporary variable to get the last
//         // item in the chunked array
//         const last = chunked[chunked.length -1];
//         // if the last element does not exist or if the 
//         // length of the last equals to the chunk size
//         // push a new chunk(subarray) into chunked 
//         // with the current element
//         if (!last || last.length === size){
//             chunked.push([element]);
//             // else, push the element into the chunk(subarray)
//         } else {
//             last.push(element)
//         }
//     }

        
//     return chunked;
// }


// module.exports = chunk;