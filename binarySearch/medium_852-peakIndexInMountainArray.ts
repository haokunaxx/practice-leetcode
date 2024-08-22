// 题目数据 保证 arr 是一个山脉数组，所以至少有三个，不需要判断长度小于三的情况

function peakIndexInMountainArray(arr: number[]): number {
  let p = 0,
    q = arr.length - 1

  while (p <= q) {
    const m = p + ((q - p) >> 1)
    if (arr[m - 1] < arr[m] && arr[m] > arr[m + 1]) {
      p = m
      break;
    } else if (arr[m - 1] === undefined || arr[m - 1] < arr[m]) {
      // 递增侧
      p = m + 1
    } else {
      // 递减侧
      q = m - 1
    }
  }

  return p
};

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]))