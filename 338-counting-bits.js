// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 105

const countBits = function (n) {
  const ans = [0];
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset *= 2;
    ans[i] = 1 + ans[i - offset];
  }
  return ans;
};
