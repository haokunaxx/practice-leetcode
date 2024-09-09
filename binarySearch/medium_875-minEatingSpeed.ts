// function minEatingSpeed(piles: number[], h: number): number {
//   let k = 1
//   while (true){
//     let totalHours = 0
//     for(let i = 0;i < piles.length; i++){
//       if(piles[i] <= k){
//         totalHours += 1
//       }else{
//         totalHours += Math.ceil(piles[i] / k)
//       }
//       if(totalHours > h){
//         break
//       }
//     }
//     if(totalHours <= h){
//       break
//     }
//     k++
//   }
//   return k
// };



function minEatingSpeed(piles: number[], h: number): number {
  let p = 1, q = Math.max(...piles)
  while (p <= q) {
    let k = p + ((q - p) >> 1)
    let totalHours = 0
    for (let i = 0; i < piles.length; i++) {
      if (piles[i] <= k) {
        totalHours += 1
      } else {
        totalHours += Math.ceil(piles[i] / k)
      }
      if (totalHours > h) {
        break
      }
    }
    if (totalHours <= h) {
      q = k - 1
      continue
    }
    p = k + 1
  }
  return p
};

console.log(minEatingSpeed([3, 6, 7, 11], 8))
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) 
