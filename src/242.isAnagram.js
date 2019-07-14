/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sA = s.split('');
  let tA = t.split('');
  for (let i = 0; i < sA.length; i++) {
    let char = sA[i];
    let idx = tA.indexOf(char);
    if (idx < 0) return false;
    else tA.splice(idx, 1);
  }
  return true;
};
