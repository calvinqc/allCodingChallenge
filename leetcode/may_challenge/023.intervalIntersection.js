/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  // [[0,2],[5,10],[13,23],[24,25
  // [[1,5],[8,12],[15,24],[25,26]]
  //=============================================
  // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

  // [max(A[0], B[0]), min(A[1], B[1])]
  // if max(A[1], B[1]) >= min(A[0], B[0]) => [max(A[1], B[1]), min(A[0], B[0])]
  // Need to keep track of prev max(A[1], B[1])
  //     let result = [];
  //     if (A.length && B.length) {
  //         let prevMax = Math.max(A[0][1], B[0][1]);

  //         for (let i = 0; i < Math.max(A.length, B.length); i++) {
  //             const currMin = Math.min(A[i][0], B[i][0]); // 5
  //             console.log('prevmax', prevMax)
  //             console.log('currMin', currMin)
  //             if (prevMax >= currMin && i > 0) {
  //                 console.log('push', [prevMax, currMin])
  //                 result.push([prevMax, currMin])
  //                 prevMax = currMin;
  //             } else {
  //                 prevMax = Math.max(A[i][1], B[i][1]);
  //             }

  //             result.push([Math.max(A[i][0], B[i][0]), Math.min(A[i][1], B[i][1])])
  //         }
  //     }

  let Ai = 0,
    Bi = 0;
  let res = [];

  while (Ai < A.length && Bi < B.length) {
    let maxStart = Math.max(A[Ai][0], B[Bi][0]);
    let minEnd = Math.min(A[Ai][1], B[Bi][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]); // overlap found

    if (A[Ai][1] < B[Bi][1]) Ai++;
    else Bi++;
  }

  return res;

  // return result;
};
