function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length
  let res = -1
  while (l < r) {
    const m = l + ((r - l) >> 1)
    if (nums[m] === target) {
      res = m
      break
    } else if (nums[m] < target) {
      l = m + 1
    } else {
      r = m
    }
  }
  return res
}

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))