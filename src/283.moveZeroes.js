/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let idx = findNotZero(nums, i + 1);
      if (idx === false) break;
      else {
        let tmp = nums[i];
        nums[i] = nums[idx];
        nums[idx] = tmp;
      }
    }
  }
};

var findNotZero = function (nums, start) {
  for (let i = start; i < nums.length; i++) {
    if (nums[i] !== 0) return i;
  }
  return false;
};
