/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) return 1;
    if (isBadVersion(n) && isBadVersion(n - 1) === false) return n;
    return dg(1, n);
  };

  function dg(start, end) {
    let idx = parseInt((start + end) / 2);
    if (isBadVersion(idx) === false) {
      return dg(idx + 1, end);
    } else {
      if (isBadVersion(idx - 1) === false) {
        return idx;
      } else {
        return dg(start, idx - 1);
      }
    }
  }
};
