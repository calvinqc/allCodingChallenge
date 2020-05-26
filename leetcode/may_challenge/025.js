/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = (A, B) => {
  const dp = [...Array(A.length + 1)].map(() => Array(B.length + 1).fill(0));
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (A[i - 1] === B[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[A.length][B.length];
};
