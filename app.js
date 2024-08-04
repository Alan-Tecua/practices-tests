//You have two arrays of strings or numbers. Write a function that finds if the there is a common element within the two arrays
// for example
// array1 : ['a', 'b', 'c', 'x']
// array2 : ['b', 'y', '¥']
// solution(array1, array2) = true


//using Map function

let array1 = [ 1, 2, 3, 4, 5, 6, 7,]
let array2 = [9, 0,0 ]

const isMatch = (array1, array2) => {
  const map = new Map()
  array1.forEach(item => map.set(item, true));
  return array2.some(item => map.has(item));
}

result = isMatch(array1, array2)

console.log(result);


// cleaner Syntax using the includes() function:

let array3 = ['a', 'b', 'c', 'd', 'e'];
let array4 = ['f', 'g', 'o'];


const isMatchClean = (arr1, arr2) => {
   return arr1.some(item => arr2.includes(item));
}

result2 = isMatchClean(array3, array4)
console.log(result2);


// Solution and more found on the link below
// https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/
