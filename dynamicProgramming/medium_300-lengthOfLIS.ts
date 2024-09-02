function lengthOfLIS(nums: number[]): number {
  const arr: number[] = Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        arr[i] = Math.max(arr[j] + 1, arr[i])
      }
    }
  }
  return Math.max(...arr)
};

/*
  [10,9,2,5,3,7,101,18]

  str[i] = nums[i] > nums[i - 1] ? str[i-1] + nums[i] : str[i - 1]

  2 6 7 3 4 5 
*/