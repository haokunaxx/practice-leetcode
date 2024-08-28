function searchMatrix(matrix: number[][], target: number): boolean {
  let p = 0,
    q = matrix.length - 1
  let result = false
  while (p <= q) {
    const m = p + ((q - p) >> 1)
    const temp = matrix[m][0]
    if (temp === target) {
      result = true
      break
    }
    if (temp > target) {
      q = m - 1
    } else {
      if (matrix[m][matrix[m].length - 1] >= target) {
        p = m
        q = m - 1 //当前值在 m 行，所以将 q 的值设置的比 p 小来结束循环
      } else {
        p = m + 1
      }
    }
  }
  if (result) {
    return result
  }
  console.log(p)
  if (p >= matrix.length) {
    result = false
    return result
  }
  const temp = matrix[p]
  p = 0
  q = temp.length
  while (p <= q) {
    const m = p + ((q - p) >> 1)
    if (temp[m] === target) {
      result = true
      break
    } else if (temp[m] > target) {
      q = m - 1
    } else {
      p = m + 1
    }
  }
  return result
};


// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
// console.log(searchMatrix([[1]], 2))
console.log(searchMatrix([[1, 3]], 3))
