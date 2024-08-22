var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let p = 1,
      q = n
    while (p <= q) {
      const m = p + ((q - p) >> 1)
      if (isBadVersion(m)) {
        q = m - 1
      } else {
        p = m + 1
      }
    }
    return p
  };
};


/*
 [1, 2, 3, 4, 5, 6, 7]
  6是第一个错误的版本
  1-7 的中间 4 不是错误版本
  5-7 的中间 6 是错误版本
  5-6 的中间 5 不是错误版本
  6-6 的中间 6 是错误版本
  6-5  p > q 结束

  3是第一个错误的版本
  1-7 的中间 4 是错误版本
  1-3 的中间 2 不是错误版本
  3-3 的中间 3 是错误版本
  4-3 p > q 结束
  
  2是第一个错误版本
  1-7 的中间 4 是错误版本
  1-3 的中间 2 是错误版本
  1-2 的中间 1 不是错误版本
  2-2 的中间 2 是错误版本
  2-1 p > q 结束
*/
