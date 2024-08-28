// Map
// function intersect(nums1: number[], nums2: number[]): number[] {
//   const helpMap = new Map<number, number>()
//   const res: number[] = []
//   let i = 0,
//     len = nums1.length
//   for (; i < len; i++) {
//     helpMap.set(nums1[i], (helpMap.get(nums1[i]) || 0) + 1)
//   }
//   i = 0
//   len = nums2.length
//   for (; i < len; i++) {
//     const temp = helpMap.get(nums2[i])
//     if (temp) {
//       res.push(nums2[i])
//       if (temp === 1) {
//         helpMap.delete(nums2[i])
//       } else {
//         helpMap.set(nums2[i], temp - 1)
//       }
//     }
//   }
//   return res
// };


// 排序 + 双指针
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  const res: number[] = []
  let p = 0, q = 0
  while (p < nums1.length && q < nums2.length) {
    if (nums1[p] < nums2[q]) {
      p++
    } else if (nums1[p] > nums2[q]) {
      q++
    } else {
      res.push(nums1[p])
      p++
      q++
    }
  }
  return res
};
