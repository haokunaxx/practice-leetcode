// 解法一：排序 + 二分
// function missingNumber(nums: number[]): number {
//   nums = nums.sort((a, b) => a - b)
//   let p = 0,
//     q = nums.length
//   while (p < q) {
//     const m = p + ((q - p) >> 1)
//     if (nums[m] > m) {
//       q = m
//     } else {
//       p = m + 1
//     }
//   }
//   return p
// };

// 解法二：helpMap + for 循环
// function missingNumber(nums: number[]): number {
//   const helpMap = new Map<number, number>()
//   const len = nums.length
//   let res = len
//   for (let i = 0; i < len; i++) {
//     helpMap.set(nums[i], i)
//   }

//   for (let i = 0; i <= len; i++) {
//     if (!helpMap.has(i)) {
//       res = i
//       break
//     }
//   }
//   return res
// }

// 解法三：位运算
// function missingNumber(nums: number[]): number {
//   let temp = 0
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     temp ^= nums[i]
//   }

//   for (let i = 0; i <= len; i++) {
//     temp ^= i
//   }
//   return temp
// }


// 解法四：和
function missingNumber(nums: number[]): number {
  let temp = 0
  const len = nums.length
  for (let i = 0; i <= len; i++) {
    temp += i
  }

  for (let i = 0; i < len; i++) {
    temp -= nums[i]
  }
  return temp
}

