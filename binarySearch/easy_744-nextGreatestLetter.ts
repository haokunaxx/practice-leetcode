function nextGreatestLetter(letters: string[], target: string): string {
    let p = 0,
      q = letters.length - 1

    if(letters[q] <= target){
      return letters[0]
    }
    //说明肯定有比target大的
    while(p <= q){
      const m = p + ((q - p) >> 1)
      if(letters[m] > target){
        q = m - 1
      }else{
        p = m + 1
      }
    }

    return letters[p]
};

console.log(nextGreatestLetter(["c","f","j"], "a"))
console.log(nextGreatestLetter(["c","f","j"], "c"))
console.log(nextGreatestLetter(["x","x","y","y"], "z"))