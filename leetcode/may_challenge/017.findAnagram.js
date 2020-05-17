/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const result = [];
  // Count Number of p_char appears
  let pCount = 0;
  let sCount = 0;

  let currIndex = 0;
  let nextIndexToCheck = p.length - 1;

  for (let i = 0; i < p.length; i += 1) {
    pCount += p.charCodeAt(i) ** 4;
    sCount += s.charCodeAt(i) ** 4;
  }

  while (currIndex <= s.length - p.length) {
    if (pCount === sCount) {
      console.log(currIndex);
      result.push(currIndex);
    }

    sCount -= s.charCodeAt(currIndex) ** 4();
    currIndex += 1;
    nextIndexToCheck += 1;
    console.log('currIndex = ', s[currIndex]);
    console.log('nextIndex = ', s[nextIndexToCheck]);
    sCount += s.charCodeAt(nextIndexToCheck) ** 4;
  }

  return result;
};
