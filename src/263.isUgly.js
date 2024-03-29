/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num === 0) return false;
  if (num === 1) return true;
  while (num % 2 === 0) {
    num = parseInt(num / 2);
  }
  while (num % 3 === 0) {
    num = parseInt(num / 3);
  }
  while (num % 5 === 0) {
    num = parseInt(num / 5);
  }
  return num === 1;
};
