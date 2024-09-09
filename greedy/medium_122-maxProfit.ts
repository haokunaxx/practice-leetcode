(() => {
  //到峰顶才卖
  // function maxProfit(prices: number[]): number {
  //   let sum = 0
  //   let buyValue = -1
  //   for (let i = 0; i < prices.length; i++) {
  //     if (buyValue === -1) {
  //       buyValue = prices[i]
  //     }
  //     if (prices[i] > prices[i + 1] || !prices[i + 1]) {
  //       sum += prices[i] - buyValue
  //       buyValue = -1
  //     }
  //   }
  //   return sum
  // };



  // 一天一卖，连续涨的当前卖了之后再买入
  function maxProfit(prices: number[]): number {
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
      if (prices[i + 1] > prices[i]) {
        sum += prices[i + 1] - prices[i]
      }
    }
    return sum
  }


  console.log(maxProfit([7, 1, 5, 3, 6, 4]))
  console.log(maxProfit([1, 2, 3, 4, 5]));
  console.log(maxProfit([2, 1, 2, 0, 1]));


})()