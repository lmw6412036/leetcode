/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let ret = 0;
  while (num !== 0) {
    ret += num % 10;
    num = Math.floor(num / 10);
  }
  if (ret >= 10) {
    return addDigits(ret);
  } else return ret;
};
