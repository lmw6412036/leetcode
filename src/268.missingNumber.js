/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum1 = (nums.length + 0) * (nums.length + 1) / 2;
  let sum2 = nums.reduce((t, v) => t + v);
  return sum1 - sum2;
};
