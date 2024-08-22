/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guess (num): any { }

function guessNumber(n: number): number {
  let p = 1,
    q = n

  while (p <= q) {
    const m = p + ((q - p) >> 1)
    const temp = guess(m) as -1 | 0 | 1
    if (temp === 0){
      p = m
      break
    }else if(temp === -1){
      q = m - 1
    }else{
      p = m + 1
    }
  }
  return p
};


/*
 [1, 2, 3, 4, 5, 6, 7]
  数字是 6
  1-7 的中间 4 小了
  5-7 的中间 6 是
  结束

  数字是 3
  1-7 的中间 4 大了
  1-3 的中间 2 小了
  3-3 的中间 3 是
  结束
  
  数字是 2
  1-7 的中间 4 大了
  1-3 的中间 2 是
  结束
*/