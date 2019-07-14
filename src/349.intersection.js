/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = [];
  if (nums1.length <= nums2.length) {
    while (nums1.length) {
      let tmp = nums1.shift();
      if (nums2.includes(tmp) && !res.includes(tmp)) res.push(tmp);
    }
  } else {
    while (nums2.length) {
      let tmp = nums2.shift();
      if (nums1.includes(tmp) && !res.includes(tmp)) res.push(tmp);
    }
  }
  return res;
};
