/*

https://leetcode.com/problems/search-a-2d-matrix/description/

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time Complexity is O(log n * m)

const searchMatrix = function (matrix, target) {
  let lo = 0;
  let hi = matrix.length * matrix[0].length - 1;

  while (lo <= hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    const row = Math.floor(m / matrix[0].length);
    const col = m % matrix[0].length;

    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] < target) lo = m + 1;
    else hi = m - 1;
  }

  return false;
};

//Another solution searching first the row that we should be looking for target into, O(log M), and then searching for the target at the given row, O(log N). Overall time complexity is O(log m*n)

// const searchMatrix = function (matrix, target) {
//   let lo = 0;
//   let hi = matrix.length - 1;
//   let row = 0;
//   const arrLen = matrix[0].length;

//   while (lo <= hi) {
//     row = Math.floor(lo + (hi - lo) / 2);

//     if (target > matrix[row][arrLen - 1]) lo = row + 1;
//     else if (target < matrix[row][0]) hi = row - 1;
//     else break;
//   }

//   if (row > matrix.length - 1 || row < 0) return false;
//   lo = 0;
//   hi = arrLen - 1;

//   while (lo <= hi) {
//     const m = Math.floor(lo + (hi - lo) / 2);
//     if (matrix[row][m] === target) return true;
//     else if (matrix[row][m] > target) hi = m - 1;
//     else lo = m + 1;
//   }
//   return false;
// };
