/*

LINK:
https://leetcode.com/problems/maximum-subarray/

DESCRIPTION: 

Given an integer array nums, find the subarray which has the largest sum and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

*/

// SOLUTION:

const maxSubArray = function (arr) {
  let maxSum = arr[0];
  let curSum = 0;

  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    maxSum = Math.max(maxSum, curSum);
    if (curSum < 0) curSum = 0;
  }

  return maxSum;
};
