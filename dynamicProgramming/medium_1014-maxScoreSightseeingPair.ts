function maxScoreSightseeingPair(values: number[]): number {
  let max = 0
  let dp = [0]
  const len = values.length
  for (let i = 1; i < len; i++) {
    max = Math.max(max, values[i - 1] + i - 1)
    dp[i] = Math.max(max + values[i] - i, dp[i - 1])
  }
  return dp[len - 1]
};