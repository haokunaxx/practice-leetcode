function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x
  let p = 1,
    q = x
  let ans = 0
  while (p <= q) {
    const m = p + ((q - p) >> 1)
    if (m * m <= x) {
      ans = m
      p = m + 1
    } else {
      q = m - 1
    }
  }
  return ans
}
console.log(mySqrt(0))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(10))
console.log(mySqrt(15))
console.log(mySqrt(16))
