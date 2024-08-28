// 二次二分，第一次先找 k，判断 target 是在 k 的左区间还是右区间，第二次查找目标值
// function search(nums: number[], target: number): number {
//   const len = nums.length
//   let p = 0,
//     q = len - 1
//   let k: number = q
//   while (p <= q) {
//     const m = p + ((q - p) >> 1)
//     if (nums[m - 1] > nums[m]) {
//       k = m
//       break
//     } else if (nums[m] > nums[len - 1]) {
//       p = m + 1
//     } else {
//       q = m - 1
//     }
//   }
//   let res: number = -1
//   if (nums[len - 1] >= target) {
//     q = len - 1
//     p = nums[k] <= target ? k : 0
//   } else if (nums[k - 1] >= target) {
//     p = 0
//     q = k - 1
//   } else {
//     p = 1
//     q = 0
//   }
//   while (p <= q) {
//     const m = p + ((q - p) >> 1)
//     if (nums[m] > target) {
//       q = m - 1
//     } else if (nums[m] < target) {
//       p = m + 1
//     } else {
//       res = m
//       break
//     }
//   }
//   return res
// };

// 一次二分
function search(nums: number[], target: number): number {
  let p = 0, q = nums.length - 1
  let res = -1
  while (p <= q) {
    const m = p + ((q - p) >> 1)
    if (nums[m] === target) {
      res = m
      break
    }
    // TODO:优化判断逻辑
    // console.log(m)
    if (nums[p] < target) {
      if (nums[m] < target) {
        if(nums[m] >= nums[p]){
          p = m + 1
        }else{
          p++
          q = m - 1
        }
      } else {
        q = m - 1
      }
    } else if (nums[p] > target) {
      if (nums[m] > target) {
        if (nums[m] >= nums[p]) {
          p = m + 1
        } else {
          p++
          q = m - 1
        }
      } else {
        p = m + 1
      }
    } else {
      res = p
      break
    }
  }
  return res
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))   //4
console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 9))   //5
console.log(search([4, 5, 0, 1, 2], 3))   //-1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))   //-1
console.log(search([1], 0))   //-1
console.log(search([1], 2))   //-1
console.log(search([1, 3], 1))   //0
console.log(search([5, 1, 2, 3, 4], 1)) //1
console.log(search([3, 1], 1))   //1
console.log(search([8, 9, 2, 3, 4], 9))   //1


// [4,5,6,7,0,1,2] 