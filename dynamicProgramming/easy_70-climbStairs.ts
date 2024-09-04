function climbStairs(n: number): number {
  const arr = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};

/*
  dp[n] = dp[n-1] + dp[n-2]
  dp[1] = 1
  dp[2] = 2
*/

console.log(climbStairs(2))
console.log(climbStairs(3))