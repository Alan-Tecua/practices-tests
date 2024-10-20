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
  // to make it an O(n) we can store the number on a has map, the value would be the index and the key will be number,
  //then we can return the value once the iteration is done
  let result = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (result.has(target - nums[i])){
      return [result.get(target - nums[i]), i]
    }
    result.set(nums[i], i)
  }
  return [-1, -1];
};

console.log(twoSum([1,3,5], 4)); //[0,1]
console.log(twoSum([1,3,5], 6)); //[0,2]


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


// Merge Two Assorted Lists:
  // You are given the heads of two sorted linked lists list1 and list2.
  // Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
  // Return the head of the merged linked list.


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeList(list1: ListNode | null, list2: ListNode | null ): ListNode | null {

  // many solution include the creation of a "dummy node" which pretty much is a new list with a 0 attached to it, making it look like there is a third list ready to be poplated
  // once we have this new dummy node ready, we make a new varible that will help with the merging, some called it the tail = hat *(since you add it from the top to bottom)
  let newList = new ListNode(0);
  let tail = newList
  // we can start a while loop, this loop will compare values and add the lower node, for wxxample if list1 has 1,3,4,/ and list2 has 2,4,5,
  while (list1 != null && list2 != null) {
    //then the new list will add the values on the correct order from both lists: 1,2,3,4,4,5. hence why the while loop
    if(list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    //tail = tail.next moves the tail pointer to the next node in the new list to continue building it.
    tail = tail.next
  }

  // attach remaining nodes
  tail.next = list1 != null ? list1 : list2
  // we return the final list.
  return newList.next;
}

let listx = new ListNode(1, new ListNode(2, new ListNode(4)));  // Represents [1, 2, 4]
let listy = new ListNode(2, new ListNode(3, new ListNode(5)));  // Represents [1, 3, 4]

console.log(mergeList(listx, listy));



// Remove Element
  // Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

  // Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

  // Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
  // Return k.
  // Custom Judge:

  // The judge will test your solution with the following code:

  // int[] nums = [...]; // Input array
  // int val = ...; // Value to remove
  // int[] expectedNums = [...]; // The expected answer with correct length.
  //                             // It is sorted with no values equaling val.

  // int k = removeElement(nums, val); // Calls your implementation

  // assert k == expectedNums.length;
  // sort(nums, 0, k); // Sort the first k elements of nums
  // for (int i = 0; i < actualLength; i++) {
  //     assert nums[i] == expectedNums[i];
  // }
  // If all assertions pass, then your solution will be accepted.

function removeElement(nums: number[], val: number ): number {

  // first, we initialize our array with a let i =0, as well as the length of the array

  let k = nums.length;
  let i = 0;

  // then we create a loop to iteriate in all the values inside the array, so we can check them with the val so it can be switched positions
  // after we switched we can reduce the length of the array to remove the matching val, finally we will return the new length of the array under the new `k`

  while (i < k) {
    if (nums[i] === val) {
      nums[i] = nums[k - 1];
      k--;
    } else {
      i++
    }
  }
  return k
}

console.log(removeElement([1,2,3,4,5,6], 3)); //5
console.log(removeElement([1,5,3,4,4], 4)); //3
console.log(removeElement([1,5,1,1], 1)); //1



// Add two numbers:
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function addTwoNums(l1: ListNode | null, l2: ListNode | null ): ListNode | null {

  // intialize dummy new list or non-empty linked list
  // from the values inside the list, 1: reverse the order, then `merge` to get the new value.
  // do the same with l2
  // afterwards, split the values again and retunr the new list
  let ans = new ListNode(0),
    p1 = l1,
    p2 = l2,
    num1 = 0,
    num2 = 0,
    carry = 0,
    current = ans;
    while (p1 || p2) {
      num1 = (p1) ? p1.val : 0;
      num2 = (p2) ? p2.val : 0;
      if(num1 + num2+carry > 9) {
          current.next = new ListNode(num1 + num2 + carry -10);
          current = current.next;
          carry = 1;
      } else {
          current.next = new ListNode(num1 + num2 + carry );
          current = current.next;
          carry = 0
      }
      if(p1) p1 = p1.next;
      if(p2) p2 = p2.next;
  }
  if(carry) current.next = new ListNode(carry);
  return ans.next;
}


// it non empty list
// two non negateive integers
// digits are stored in reverse order
// itirate trough the link list, if its a number above the 9 wthen we need to carry it for the next value,
//point 1 = list1 (point to the first or in this case the head list)
// point 2 the bottom
//num1-2 and carry (if the value is more than 9 on the sum)
// ans, the list we will return of course.
// current = ans -> pointer to the solution

//while loop, p1 or p2 is truthy, if it exist, lets continue on this loop
//num1 = istruthy(not empty or null) ? p1.val(to be returned or back to 0) : 0; repeat for p1

//fun part, check the conditions (if): if(num1+num2+carry > 9) -> do something -> else do this
// if its greater than nine, then we carry the number, if not, we reset the carry  to 0
// if(p1) isTruthy? assing that value to the p1: if(p1) p1 = p1.next; if(p2) p2 = p2.next
//current.next = new ListNode(num1+num2+carry - 10);
//current = current.next
// there is also one edge case, if(carry) still exists, then we need to pass it on a new list = new ListNode(carry);
//return the ans.next



//28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.



// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

function strStr(haystack: string, needle: string): number {
  // the brute force solution
  let pointer = 0
    for(let i = 0; i < haystack.length; i++) {
      if (haystack[i] != needle[pointer]) {
        i = i - pointer;
        pointer = 0;
      } else if (pointer == needle.length -1){
        return i - pointer;
      }
      else pointer++
    };
  return -1
};

console.log(strStr("iphjrkipo", "ipo" )); // 6
console.log(strStr("string", "str")); // 0


// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.



//write the maximun profit by wirting in one transaction
// buy a stick in 7 and seell on 6 i get a -1, so thats a no no
// we have to buy before sell and the mx profit can be 0
// t2 thinks tp keep track, the best profit and the buy price
// the buy prce we can go throu an Array

function maxProfit(prices:number[]): number {
  let ans = 0,
      buy = Infinity;
  for ( let i = 0; i < prices.length; i++) {
    ans = Math.max(ans, prices[i] - buy);
    buy = Math.min(buy, prices[i])
  }
  return ans
}

console.log(maxProfit([1,9])); //8
console.log(maxProfit([7,1,5,3,6,4])); //5



// Searh Insert position, algorithm without constraint

function searchInsert(nums: number[], target: number): number {
  let left = 0,
      right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if ( nums[mid] === target) {
          return mid
      } else if (nums[mid] < target) {
          left = mid + 1
      } else {
          right = mid-1
      }
  }
  return left

};


// Search onsert with constraints


// function searchInsert2(nums: number[], target: number): number {
//   let left = 0,
//       right = nums.length - 1;
//   for(let i = 0; i < nums.length; i++) {
//       while (left <= right) {
//           let i = Math.floor((left + right) / 2),
//               mid = i;
//           if ( nums[mid] === target) {
//               return mid
//           } else if (nums[mid] < target) {
//               left = mid + 1
//           } else {
//               right = mid - 1
//           }
//       }
//   return left
//   }
// };

// Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.



// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function lengthOfLastWord(s: string): number {
  let reversedWordCount = 0;
  for (let i = s.length -1; i >= 0; i--) {
    if (s[i] !== ' ' ) {
      for ( let counter = i; counter >= 0; counter--){
        if (s[counter] !== ' ') {
          reversedWordCount++;
        } else {
          return reversedWordCount;
        }
      }
      return reversedWordCount;
    }
  }
};

// create a varaible that start the count from the last part of the s
// from here we creaet 2 loops with conditions
//one condition will cound when a letter beigns and another when is not an empty space

//last word variable
//loop backwards the string
// condition if : current char is no a space
//       loop backward for current char
//          condition if current char is not a space
//            increment last word count
//       else: return last word count
//       return last word count
