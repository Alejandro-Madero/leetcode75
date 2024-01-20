// https://leetcode.com/problems/valid-palindrome/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

//////////////////////////////////////////////////////////////////////////////////////

// Solution O(n) time & O(1) space

const isPalindrome = function (str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    while (l < r && !str[l].match(/[a-z0-9]/i)) l++;
    while (r > l && !str[r].match(/[a-z0-9]/i)) r--;
    if (str[l].toLowerCase() !== str[r].toLowerCase()) return false;
    l++;
    r--;
  }

  return true;
};

//OTHER SOLUTIONS:

// const isPalindrome = function (s) {
//   s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   return s === s.split("").reverse().join("");
// };

// const isPalindrome = function (string) {
//   let curedStr = "";
//   let reversedCuredStr = "";
//   const regex = /[a-z0-9]/i;

//   for (const char of string) {
//     if (char.match(regex)) {
//       curedStr += char.toLowerCase();
//       reversedCuredStr = char.toLowerCase() + reversedCuredStr;
//     }
//   }

//   return curedStr === reversedCuredStr;
// };
