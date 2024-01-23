/**
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105


 */

// Two-pointers solution:

const threeSum = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const res = [];
  let l, r;

  for (let i = 0; i < nums.length; i++) {
    l = i + 1;
    r = sortedNums.length - 1;

    if (sortedNums[i] > 0) return res;
    if (sortedNums[i] === sortedNums[i - 1]) continue;

    while (l < r) {
      const sum = sortedNums[i] + sortedNums[l] + sortedNums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        ++l;
        while (sortedNums[l] === sortedNums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
};

////////////////////////////////////////////////////////////////////////

// Hash map solution:

// const threeSum = function (nums) {
//   const sortedNums = nums.toSorted((a, b) => a - b);
//   let map = new Map();
//   let usedKs = new Set();

//   const res = [];
//   for (let i = 0; i < sortedNums.length - 2; i++) {
//     if (sortedNums[i] > 0) break;
//     if (sortedNums[i] === sortedNums[i - 1]) continue;
//     map = new Map();
//     usedKs = new Set();
//     for (let j = i + 1; j < sortedNums.length; j++) {
//       const target = 0 - sortedNums[i] - sortedNums[j];
//       if (map.has(sortedNums[j]) && !usedKs.has(sortedNums[j])) {
//         res.push([...map.get(sortedNums[j]), sortedNums[j]]);
//         usedKs.add(sortedNums[j]);
//       } else map.set(target, [sortedNums[i], sortedNums[j]]);
//     }
//   }
//   return res;
// };

///////////////////////////////////////////////////////////////////////

// Brute force solution:

// const threeSum = function (nums) {
//   const sortedNums = nums.toSorted((a, b) => a - b);
//   const res = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (sortedNums[i] > 0) break;
//     while (sortedNums[i] === sortedNums[i - 1]) {
//       i++;
//     }
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       if (j - 1 !== i && sortedNums[j] === sortedNums[j - 1]) {
//         continue;
//       }

//       for (let k = j + 1; k < nums.length; k++) {
//         if (k - 1 !== j && sortedNums[k] === sortedNums[k - 1]) {
//           continue;
//         }
//         const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
//         if (sum === 0) res.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
//       }
//     }
//   }

//   return res;
// };
