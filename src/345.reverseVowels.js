/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = s.split('');
  let reg = /[aeiou]/i;
  let i = 0, j = arr.length - 1;
  while (i <= j) {
    if (reg.test(arr[i])) {
      let tmp = arr[i];
      if (reg.test(arr[j])) {
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
      } else j--;
    } else {
      i++;
    }
  }
  return arr.join('');
};
