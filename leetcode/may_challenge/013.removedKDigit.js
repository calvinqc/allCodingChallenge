/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
  let res = '';
  if (num.length === k) return '0';
  if (k <= 0) return num;

  const helper = (num, k) => {
    let min = 0;
    if (num.length <= k) return;

    for (let i = 1; i <= k; i += 1)
      if (num.charAt(i) < num.charAt(min)) min = i;

    res += num[min];
    helper(num.substring(min + 1), k - min);
  };

  helper(num, k);
  res = res.replace(/^0+/, '');

  return res == '' ? '0' : res;
};
