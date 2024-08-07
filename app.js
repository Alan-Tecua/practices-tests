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


// Alright just off the top of my head, very simple:

// (1) Write me a function that takes an array of numbers, and returns the total sum of all of elements of the array.  For example
// Solution([1,2,3]) = 6

let arraysum = [1,2,3,4,56,73,45,2]

const totalSum = (arrsum) => {
  const sum = arrsum.reduce((partialSum, a) => partialSum + a, 0);
  return sum
}

result3 = totalSum(arraysum)
console.log(result3);

// Although contra-intuitive, the .reduce() method works since it iterates over each element of the array, accumulating the total sum.
// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers


// (2) Write me a function that takes an array of fruits (strings) and prints how many of each fruit are in the array.
// Example:
// Solution(['apple', 'banana', 'apple'])
// Terminal should print "you have 2 apple, 1 banana"

var groupBy = function(value, key) {
  return value.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

console.log(groupBy(['apple', 'banana', 'apple'], 'length'));

// (3) A bit harder - write a function that sorts an array. Do not use native JavaScript helper methods like array.sort() . Please let us know the time complexity of your solution
// Example:
// Solution[2,3,1,5] = [1,2,3,5]
