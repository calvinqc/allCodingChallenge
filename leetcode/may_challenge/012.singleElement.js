/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  // return nums.reduce((res, num) => res ^= num); // Run time: O(n)  Space: O(1)

  let start = 0;
  let end = nums.length;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle + 1] === nums[middle]) {
      if (middle % 2 === 0) start = middle + 1;
      else end = middle;
    } else if (nums[middle - 1] === nums[middle]) {
      if (middle % 2 === 0) end = middle;
      else start = middle + 1;
    }
    return nums[middle];
  }
  return -1;
};
