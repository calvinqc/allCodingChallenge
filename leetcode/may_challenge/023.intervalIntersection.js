/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
    // [[0,2],[5,10],[13,23],[24,25]]
    // [[1,5],[8,12],[15,24],[25,26]]
    //=============================================
    // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
    
    
    // [max(A[0], B[0]), min(A[1], B[1])]
    // if max(A[1], B[1]) >= min(A[0], B[0]) => [max(A[1], B[1]), min(A[0], B[0])]
    // Need to keep track of prev max(A[1], B[1])
 */
const intervalIntersection = (A, B) => {
  const result = [];
  let Ai = 0;
  let Bi = 0;
  while (Ai < A.length && Bi < B.length) {
    const currMax = Math.max(A[Ai][0], B[Bi][0]);
    const lastMin = Math.min(A[Ai][1], B[Bi][1]);
    if (currMax <= lastMin) result.push([currMax, lastMin]);
    A[Ai][1] > B[Bi][1] ? Bi++ : Ai++;
  }
  return result;
};
