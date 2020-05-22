/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
  return Object.values(
    s.split('').reduce((o, i) => {
      o[i] = (o[i] || '') + i; // {t: 't', r: 'r', e: 'ee'}
      return o;
    }, {})
  )
    .sort((a, b) => b.length - a.length) // Sort based on frequency ['ee', 'r', 't']
    .join(''); // Join all char into string 'eert'
};
