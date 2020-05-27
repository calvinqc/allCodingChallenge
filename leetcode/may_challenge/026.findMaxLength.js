/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  let map = { 0: -1 };
  let count = 0,
    maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] == 0 ? -1 : 1;

    if (map[count] != null) maxLength = Math.max(maxLength, i - map[count]);
    else map[count] = i;
  }

  return maxLength;
};
