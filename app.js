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
  const sum = arrsum.reduce((param, a) => param + a, 0);
  return sum
}

result3 = totalSum(arraysum)
console.log(result3);

// Although contra-intuitive, the .reduce() method works since it iterates over each element of the array, accumulating the total sum.
// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers


// (1.2) Same challenge but using the `forEach()` method:

function sum(...args) {
  var total = 0;
  args.forEach(arg => {
    total += arg;
  });
  console.log(total);
}

sum(1, 3);
// https://stackoverflow.com/questions/52997764/calculate-sum-with-foreach-function


class arraySum {
  constructor() {
    this.sum = 0
  }
  add(array) {
    array.forEach( function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this)
  }
}

const obj = new arraySum()
obj.add([1,5,6]);
console.log(obj.sum);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach




// (2) Write me a function that takes an array of fruits (strings) and prints how many of each fruit are in the array.
// Example:
// Solution(['apple', 'banana', 'apple'])
// Terminal should print "you have 2 apple, 1 banana"

let arrayfruit = ['apple', 'banana', 'apple', 'strawberry', 'dragonfruit', 'dragonfruit']

const fruitbasket = (arrFruit) => {
  const count = arrFruit.reduce((countMap, fruit) => {
    countMap[fruit] = (countMap[fruit] || 0) + 1
    return countMap
  }, {});
  for (const [fruit, number] of Object.entries(count)) {
    console.log(`You have ${number} ${fruit}(s)`);
  }
};

result4 = fruitbasket(arrayfruit);
console.log(result4);

//  (2.2) Same as (1), do the previous problem (2 - fruits) with (a) for loop (b) forEach().

let arrayfruit2 = ['apple', 'banana', 'apple', 'apple', 'strawberry', 'dragonfruit', 'dragonfruit', 'strawberry'];

const fruitbasketForEach = (arrFruit) => {
  const count = {};

  arrFruit.forEach(fruit => {
    count[fruit] = (count[fruit] || 0) + 1;
  });

  for (const [fruit, number] of Object.entries(count)) {
    console.log(`You have ${number} ${fruit}(s)`);
  }
};

fruitbasketForEach(arrayfruit2);

// solution inspired from : https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects?page=1&tab=scoredesc#tab-top
// var groupBy = function(value, key) {
//   return value.reduce(function(rv, x) {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// };

// console.log(groupBy(['apple', 'banana', 'apple'], 'length'));


// (3) A bit harder - write a function that sorts an array. Do not use native JavaScript helper methods like array.sort() . Please let us know the time complexity of your solution
// Example:
// Solution[2,3,1,5] = [1,2,3,5]


let arraySort = [2,3,1,5]

const sortWithoutSort = (arrsort) => {
  let n = arrsort.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arrsort[i] > arrsort[i + 1]) {
        [arrsort[i], arrsort[i + 1]] = [arrsort[i + 1], arrsort[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arrsort;
}

result5 = sortWithoutSort(arraySort);
console.log(result5);

// this is an O(n^2)


// some sort explanation found in :https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work
let arr = [90, 1, 20, 14, 3, 55];
var sortRes = [];
var copy = arr.slice();		//create duplicate array
var inc = 0;	//inc meant increment
copy.sort((a, b) => {
	sortRes[inc] = [ a, b, a-b ];
	inc += 1;
	return a - b;
});
var p = 0;
for (var i = 0; i < inc; i++) {
	copy = arr.slice();
	copy.sort((a, b) => {
		p += 1;
		if (p <= i ) {
			return a - b;
		}
		else{
			return false;
		}
	});
	p = 0;
	console.log(copy +' \t a: '+ sortRes[i][0] +' \tb: '+ sortRes[i][1] +'\tTotal: '+ sortRes[i][2]);
}


// (3)  I have an array of letters. Write a program that will check the array and return a count of each individual letter.
// Example: solution(['a', 'b', 'x', 'a']) = {a:2, b:1, x:1}

let arrayletters = ['a', 'b', 'x', 'a']

const letterCounter = (arrLetter) => {
  const count = arrLetter.reduce((countMap, letter) => {
    countMap[letter] = (countMap[letter] || 0) + 1
    return countMap
  }, {});

  return count;
};

result = letterCounter(arrayletters);
console.log(result);
