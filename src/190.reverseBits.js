/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let str = '', ret = 0;
  while (n) {
    str += n % 2;
    n = parseInt(n / 2);
  }
  str = str.padEnd(32, '0');
  for (let i = 0; i < str.length; i++) {
    ret += Math.pow(2, i) * parseInt(str.charAt(str.length - 1 - i));
  }
  return ret;
};
