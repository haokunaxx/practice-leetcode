// 数组为正序数组 => 找到数组中第一个大于等于 target 的索引
// function searchInsert(nums: number[], target: number): number {
//   let p = 0,
//     q = nums.length - 1
//   let res = -1
//   while (p <= q) {
//     const m = p + ((q - p) >> 1)
//     if (nums[m] >= target) {
//       res = m
//       q = m - 1
//     } else {
//       p = m + 1
//     }
//   }
//   return res === -1 ? nums.length : res
// }


console.log(searchInsert([5,5,5,6], 5))
console.log(searchInsert([5,5,5,6], 6))
console.log(searchInsert([5,5,5,6], 7))

function searchInsert(nums: number[], target: number): number {
  let p = 0,
    q = nums.length - 1
  while(p <= q){
    const m = p + ((q-p)>>1)
    if(nums[m] >= target){
      q = m - 1
    }else{
      p = m + 1
    }
  }
  return p
}
