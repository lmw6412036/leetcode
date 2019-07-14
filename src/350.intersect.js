/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i], value = 0;
    if (map.has(key)) value = map.get(key);
    map.set(key, ++value);
  }
  let ret = [];
  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i], value;
    if (map.has(key)) {
      value = map.get(key);
      ret.push(key);
      value--;
      if (value === 0) map.delete(key);
      else map.set(key, value);
    }
  }
  return ret;
};
