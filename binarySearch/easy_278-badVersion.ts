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