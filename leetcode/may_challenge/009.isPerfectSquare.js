/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  let i = 1;
  for (; i * i < num; ) i += 1;
  return i * i === num;
};
