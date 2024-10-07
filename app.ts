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

function romanTo(s: string): number {
  let total = 0
  let sideValue = 0
  const value: {[key: string]: number} = {
      I             1
      V             5
      X             10
      L             50
      C             100
      D             500
      M             1000

  }


}
