const kadane = (nums, i, j, sign) => {
  let curMax = Number.MIN_SAFE_INTEGER;
  let totalMax = Number.MIN_SAFE_INTEGER;

  for (let k = i; k <= j; k++) {
    curMax = sign * nums[k] + Math.max(curMax, 0);
    totalMax = Math.max(totalMax, curMax);
  }
  return totalMax;
};

/**
 * @param {number[]} A
 * @return {number}
 */
const maxSubarraySumCircular = (nums) => {
  let sum = 0;

  for (const x of nums) sum += x;

  const sum1 = kadane(nums, 0, nums.length - 1, 1);
  const sum2 = sum + kadane(nums, 1, nums.length - 1, -1);
  const sum3 = sum + kadane(nums, 0, nums.length - 2, -1);
  return Math.max(sum1, Math.max(sum2, sum3));
};
