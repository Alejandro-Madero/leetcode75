/* 

https://leetcode.com/problems/koko-eating-bananas/description/


Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109


*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

const minEatingSpeed = function (piles, h) {
  let lo = 1;
  let hi = Math.max(...piles);

  console.log(hi);
  while (lo < hi) {
    const k = Math.floor(lo + (hi - lo) / 2);

    let totalHours = piles.reduce(
      (acc, pile) => (acc += Math.ceil(pile / k)),
      0
    );

    if (totalHours > h) lo = k + 1;
    else hi = k;
  }

  return hi;
};

// Another solution:

// const minEatingSpeed = function (piles, h) {
//   let lo = 1;
//   let hi = Math.max(...piles);
//   let best = hi;

//   while (lo <= hi) {
//     const k = Math.floor(lo + (hi - lo) / 2);

//     let totalHours = piles.reduce(
//       (acc, pile) => (acc += Math.ceil(pile / k)),
//       0
//     );

//     if (totalHours <= h) {
//       hi = k - 1;
//       best = k;
//     } else lo = k + 1;
//   }

//   return best;
// };
