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

function isPalindromNum(x: number): boolean {
  const toString = x.toString();
  const reversed = toString.split('').reverse().join('')
  return toString === reversed
}

console.log(isPalindromNum(12321)); // true
console.log(isPalindromNum(32)); //false
