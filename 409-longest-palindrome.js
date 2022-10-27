// https://leetcode.com/problems/longest-palindrome/

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

const longestPalindrome = function (s) {
  const charCount = {};
  let oddChar = false;
  let length = 0;

  for (const char of s) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }

  for (const [_, count] of Object.entries(charCount)) {
    if (count % 2 === 0) length += count;
    if (count % 2 !== 0) {
      length += count - 1;
      oddChar = true;
    }
  }
  return oddChar ? length + 1 : length;
};
