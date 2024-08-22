/*
  转换成找到
*/
function searchRange(nums: number[], target: number): number[] {
  const searchFirst = (nums: number[], target: number) => {
    let p = 0,
      q = nums.length - 1
    let idx = -1
    while (p <= q) {
      const m = p + ((q - p) >> 1)
      if (nums[m] > target) {
        q = m - 1
      } else if (nums[m] < target) {
        p = m + 1
      } else {
        idx = m
        q = m - 1
      }
    }
    return idx
  }

  const searchLast = (nums: number[], target: number) => {
    let p = 0,
      q = nums.length - 1
    let idx = -1
    while (p <= q) {
      const m = p + ((q - p) >> 1)
      if (nums[m] > target) {
        q = m - 1
      } else if (nums[m] < target) {
        p = m + 1
      } else {
        idx = m
        p = m + 1
      }
    }
    return idx
  }

  return [searchFirst(nums, target),searchLast(nums, target)]
}

searchRange([5, 6, 6, 6, 6, 7, 8, 8, 10],7)
// [5,7,7,7,7,7,7,7,8,8,10]
/*
  第一次二分中间向左查找
  第二次二分中间向右查找
*/
