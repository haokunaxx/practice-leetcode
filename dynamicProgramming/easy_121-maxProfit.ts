// 超时
// function maxProfit(prices: number[]): number {
//   const arr: number[] = Array(prices.length).fill(0)
//   let res: number = 0
//   for(let i = 1; i < prices.length; i++){
//     for(let j = i - 1; j >= 0; j--){
//       if(prices[j] < prices[i]){
//         arr[i] = Math.max(prices[i] - prices[j], arr[i])
//         res = Math.max(res, arr[i])
//       }
//     }
//   }
//   return res
// };

function maxProfit(prices: number[]): number {
  let min = prices[0]
  let res: number = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= min) {
      res = Math.max(prices[i] - min, res)
    }else{
      min = prices[i]
    }
  }
  return res
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))

/*
  dp[i] = 
*/