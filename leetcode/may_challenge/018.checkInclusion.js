/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  // Count Number of p_char appears
  let s1Count = 0;
  let s2Count = 0;

  let currIndex = 0;
  let nextIndexToCheck = s1.length - 1;

  for (let i = 0; i < s1.length; i += 1) {
    s1Count += s1.charCodeAt(i) ** 4;
    s2Count += s2.charCodeAt(i) ** 4;
  }

  while (currIndex <= s2.length - s1.length) {
    if (s1Count === s2Count) return true;

    s2Count -= s2.charCodeAt(currIndex) ** 4;
    currIndex += 1;
    nextIndexToCheck += 1;
    s2Count += s2.charCodeAt(nextIndexToCheck) ** 4;
  }

  return false;
};
