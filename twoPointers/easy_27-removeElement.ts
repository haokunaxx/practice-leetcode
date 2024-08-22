// 快慢指针
function removeElement(nums: number[], val: number): number {
  let p = 0,
    q = 0
  const len = nums.length
  while (p < len && q < len) {
    if(nums[q] !== val){
      nums[p++] = nums[q]
    }
    q++
  }
  return p
}

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))