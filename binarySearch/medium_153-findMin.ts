function findMin(nums: number[]): number {
  let p = 0,
    q = nums.length - 1
  if (nums[p] < nums[q] || p === q) return nums[p];
  while (p < q) {
    const m = p + ((q - p) >> 1)
    if (nums[m] > nums[p]) {
      p = m
    } else {
      q = m
    }
  }
  return nums[p + 1]
};


console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([4, 5, 0, 1, 2, 3]))
console.log(findMin([0, 1, 2, 4, 5, 6, 7]))