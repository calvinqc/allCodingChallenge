/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
  if (coordinates.length === 2) return true;
  const currSlope =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);
  for (let i = 2; i < coordinates.length; i += 1)
    if (
      (coordinates[i][1] - coordinates[i - 1][1]) /
        (coordinates[i][0] - coordinates[i - 1][0]) !==
      currSlope
    )
      return false;
  return true;
};
