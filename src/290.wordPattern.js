/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let arr = str.split(/\s/);
  if (arr.length !== pattern.length) return false;
  if (new Set(arr).size !== new Set(pattern).size) return false;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = pattern.charAt(i);
    if (!map.has(key)) map.set(key, arr[i]);
    else if (map[key] !== arr[i]) return false;
  }
  return true;
};

wordPattern('abba', 'dog cat cat dog');
