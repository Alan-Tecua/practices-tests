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
