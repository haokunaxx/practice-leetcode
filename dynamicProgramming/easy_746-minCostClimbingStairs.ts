function minCostClimbingStairs(cost: number[]): number {
  const arr: number[] = Array(cost.length + 1).fill(0)
  for (let i = 0; i <= cost.length; i++) {
    if (i === 0 || i === 1) {
      continue
    } else {
      arr[i] = Math.min(arr[i - 1] + cost[i - 1], arr[i - 2] + cost[i - 2])
    }
  }
  return arr[cost.length]
};


/*
  dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

*/

console.log(minCostClimbingStairs([10,15,20]))
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))