function simpleMultiply(x:number, y:number):number {
  return x * y;

}

console.log(simpleMultiply(2,5));


function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  const str1 = strs[0];
  const str2 = strs[strs.length - 1];
  let idx = 0;

  while (idx < str1.length && idx < str2.length) {
      if (str1.charAt(idx) == str2.charAt(idx)) {
          idx++;
      } else {
          break
      }
  }
  return str1.substring(0, idx);
};



// Two numbers:
  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  // You may assume that each input would have exactly one solution, and you may not use the same element twice.
  // You can return the answer in any order.


function twoSum(nums: number[], target: number): number[] {
  let result = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (result.has(target - nums[i])){
      return [result.get(target - nums[i]), i]
    }
    result.set(nums[i], i)
  }
  return [-1, -1];
};

console.log(twoSum([1,3,5], 4));


// Palindrome Number:
  // Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindromNum(x:number): boolean {
  const toStr = x.toString()
  const reversed = toStr.split('').reverse().join('')
  return toStr === reversed

}

console.log(isPalindromNum(123321)); //true
console.log(isPalindromNum(1231)); //false


//Roman to integer
  // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  // Symbol       Value
  // I             1
  // V             5
  // X             10
  // L             50
  // C             100
  // D             500
  // M             1000

  // For example, 2 is written as II in Roman numeral, just two ones added together.
  // 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

  // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
  // Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
  // The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

  // I can be placed before V (5) and X (10) to make 4 and 9.
  // X can be placed before L (50) and C (100) to make 40 and 90.
  // C can be placed before D (500) and M (1000) to make 400 and 900.

function romanToInteger(s: string): number {
  let total = 0
  let sideValue = 0
  const value: {[key: string]: number} = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  for (let i = 0; i < s.length; i++ ) {
    const middleValue = value[s[i]]
    //Roman calculation where sideValue takes or add to the middle value depending on which has greater value
    //let use a (ternary) operation
    total += middleValue > sideValue ? middleValue -2 * sideValue : middleValue;
    sideValue = middleValue
  };
  return total
}

console.log(romanToInteger('IVXLCDM'));
console.log(romanToInteger('LCDM'));
console.log(romanToInteger('IVX'));


// Longest Common Prefix
  // Write a function to find the longest common prefix string amongst an array of strings.

  // If there is no common prefix, return an empty string "".7

  //   Example 1:

  // Input: strs = ["flower","flow","flight"]
  // Output: "fl"
  // Example 2:

  // Input: strs = ["dog","racecar","car"]
  // Output: ""
  // Explanation: There is no common prefix among the input strings.


function longestPrefix(words:string[]): string {

  //let begin by first sorting the words, so that the common prefix is alway at the star of the str.
  words.sort();

  //after sorting we can need to fileter out botht the first and last common character (console log them to see if your sorting is working)
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  //then we can initialize the index at the start of the str
  let index = 0;
  // loop count and break as soon as the lastWord is different from the nex word. That will go through each word a pull just the commmon letter on the words, store it and matehc to the next word and thus get ur common prefix result
  while (index < firstWord.length && index < lastWord.length) {
    if (firstWord.charAt(index) == lastWord.charAt(index)) {
      index++;
    } else {
      break
    }
  };

  return firstWord.substring(0, index);
}

console.log(longestPrefix(['pero', 'perrro', 'perbola'])); //per
console.log(longestPrefix(['conker', 'coqueto', 'cosa'])); //co
console.log(longestPrefix(['panfilo', 'Hecatonquiros'])); //""


// Valid parenthesis
  // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  // An input string is valid if:

  // Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.
  // Every close bracket has a corresponding open bracket of the same type.


function isValid(s: string): boolean {
  //this is what is know an 'stack' challenge, imagine you have a box when you store one of the parenthesis, then add another on top of it the symbol is different.
  //like yo (, then [, and finally {, at the same time, if the next symbol is: 1. the opposite 2. following the order, then you remove the symbol from the stack: '}])'
  //since its only 6 character that cancelt themselves once it counter part appears, the satck solution is the default, an, once any of the order does not match, you can stop the loop making the comaprison
  //about the loop, you only need to return true or false , so by making the stack retunr when == 0 , then true else if stack has at least 1 char lft, that an automatic false.

  //firs we need to map our chars htat we will use for the comparison.
  //then we initialize the array that will hold the stack
  const map: Record<string, string> = {')':'(', ']':'[', '}':'{'};
  const stack = [];
  //we can start the loop now, by comparing the chars on our map, add it to the stack, and then remove them once they met their pair on the proper order, use push() and pop()
  for (const char of s) {
    if (!(char in map)) {
      stack.push(char)
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false
      }
    }
  }
  return stack.length === 0;
}


console.log(isValid('()[}')); //false
console.log(isValid('()[]{}')); //true
console.log(isValid('({[]})')); //true
