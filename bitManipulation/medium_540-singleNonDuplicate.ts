export function singleNonDuplicate(nums: number[]): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3]))