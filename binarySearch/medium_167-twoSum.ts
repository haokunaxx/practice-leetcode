// 1. 二分找左区间 2.双指针找结果
function twoSum(numbers: number[], target: number): number[] {
  let p = 0,
    q = numbers.length - 1
  while (p < q) {
    const m = p + ((q - p) >> 1)
    if (numbers[m] > target && numbers[m] + numbers[0] > target) {
      q = m
    } else {
      p = m + 1
    }
  }
  q = p
  p = 0
  while (p < q) {
    if (numbers[p] + numbers[q] === target) {
      break
    } else if (numbers[p] + numbers[q] > target) {
      q--
    } else {
      p++
    }
  }
  return [p + 1, q + 1]
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 3, 4], 6))
// console.log(twoSum([-1, 0], -1))
console.log(twoSum([-1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], -2))
console.log(twoSum([-10, -8, -2, 1, 2, 5, 6], 0))