/*
  m = 4
  [1,1,2,3,3,4,4,8,8]
  [1,1,2,2,3,3,4,8,8]

  m = 3
  [3,3,7,7,10,11,11]
  [3,3,7,10,10,11,11]

  m 索引为双数则 m 要和 m + 1 一致
  m 索引为单数则 m 要和 m - 1 一致
*/
function singleNonDuplicate(nums: number[]): number {
  let p = 0,
    q = nums.length
  let res: number = -1
  while (p <= q) {
    const m = p + ((q - p) >> 1),
      temp = m % 2
    if (temp) {
      // 单数
      if (nums[m] === nums[m - 1]) {
        p = m + 1
      } else if (nums[m] === nums[m + 1]) {
        q = m - 1
      } else {
        res = nums[m]
        break
      }
    } else {
      // 双数
      if (nums[m] === nums[m + 1]) {
        p = m + 2
      } else if (nums[m] === nums[m - 1]) {
        q = m - 2
      } else {
        res = nums[m]
        break
      }
    }
  }

  return p > q ? nums[p] : res
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3]))