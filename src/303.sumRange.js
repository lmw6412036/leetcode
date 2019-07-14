/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let sums = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) sums.push(nums[0]);
    else sums[i] = nums[i] + sums[i - 1];
  }
  this.sums = sums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return i === 0 ? this.sums[j] : this.sums[j] - this.sums[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
