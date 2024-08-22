function isPerfectSquare(num: number): boolean {
    let p = 0,
      q = num
    let ans = false
    while(p <= q){
      const m = p + ((q-p) >> 1)
      const val = m * m
      if(val === num){
        ans = true
        break
      }
      if(val < num){
        p = m + 1
      }else{
        q = m -1
      }
    }
    return ans
};

console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(2))
console.log(isPerfectSquare(9))
console.log(isPerfectSquare(10))
console.log(isPerfectSquare(11))
console.log(isPerfectSquare(12))
console.log(isPerfectSquare(16))