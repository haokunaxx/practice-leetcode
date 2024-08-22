// 1. 整合数组 2.通过长度计算中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = concatArr(nums1, nums2)
  const m = arr.length / 2
  return m % 1 === 0 ? (arr[m - 1] + arr[m]) / 2 : arr[Math.floor(m)]
};

function concatArr(nums1: number[], nums2: number[]): number[] {
  let p = 0,
    q = 0
  const arr: number[] = []
  while (p < nums1.length || q < nums2.length) {
    if (p < nums1.length && q < nums2.length) {
      arr.push(nums1[p] <= nums2[q] ? nums1[p++] : nums2[q++])
    } else if (p < nums1.length) {
      arr.push(nums1[p++])
    } else {
      arr.push(nums2[q++])
    }
  }
  return arr
}


console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))