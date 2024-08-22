/*
  32. 最长有效括号 困难

  给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

  示例 1：
    输入：s = "(()"
    输出：2
    解释：最长有效括号子串是 "()"
  示例 2：
    输入：s = ")()())"
    输出：4
    解释：最长有效括号子串是 "()()"
  示例 3：
    输入：s = ""
    输出：0
*/

/*
// [ ) ,), (, (, ),), )]
//   0  1  2  3  4 5  6

  s[i] === )
    s[i-1] === ( 
      s[i - 2] 存在 dp[i-2] + 2
      s[i - 2] 不存在 2
    s[i-1] === ) 
      s[i - 1 - dp[i-1]] === (
        dp[i - 2 - dp[i-1]] 存在 dp[i - 1] + 2  + dp[i - 2 - dp[i-1]]
        dp[i - 2 - dp[i-1]] 不存在 dp[i-1] + 2
      s[i - 1 - dp[i-1]] === ): 0
  s[i] === (
    0
*/

export function longestValidParentheses(s: string): number {
  const len = s.length
  if (len <= 1) return 0
  let max = 0
  const dp = Array(len).fill(0)
  for (let i = 1; i < len; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        if (s[i - 2]) {
          dp[i] = dp[i - 2] + 2
        } else {
          dp[i] = 2
        }
      } else {
        if (s[i - dp[i - 1] - 1] === '(') {
          if (s[i - dp[i - 1] - 2]) {
            dp[i] = dp[i - 1] + 2 + dp[i - 2 - dp[i - 1]]
          } else {
            dp[i] = dp[i - 1] + 2
          }
        }else{
          dp[i] = 0
        }
      }
    } else {
      dp[i] = 0
    }
    max = Math.max(max, dp[i])
  }
  return max
}

console.log(longestValidParentheses('(()'))
console.log(longestValidParentheses(')()())'))
console.log(longestValidParentheses(')('))
console.log(longestValidParentheses('()(())'))
console.log(longestValidParentheses(')()())()()('))
