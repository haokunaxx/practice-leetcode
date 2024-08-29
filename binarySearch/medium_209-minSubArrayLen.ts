// 滑动窗口
function minSubArrayLen(target: number, nums: number[]): number {
  let p = 0, q = 0
  let temp = 0
  let res = 0
  while (p < nums.length && q < nums.length) {
    if (p === q && p === 0) {
      temp += nums[p]
    } else {
      temp += nums[q]
    }
    if (temp >= target) {
      // 一个数就满足的情况
      if (q - p + 1 === 1) {
        res = 1
        break;
      } else {
        res = res ? Math.min(res, q - p + 1) : q - p + 1
        // p 右移
        temp -= nums[p]
        temp -= nums[q]
        p++
      }
    } else {
      q++
    }
  }

  return res
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))
console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]))

/*
  [2,3,1,2,4,3]   7
   2
   2 3
   2 3 1
   2 3 1 2  => 4
     3 1 2 
     3 1 2 4 => 4
       1 2 4 => 3
         2 4 
         2 4 3 => 3
           4 3 => 2
             3 
*/