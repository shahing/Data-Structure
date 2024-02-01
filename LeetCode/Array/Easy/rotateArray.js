function rotateArray(nums, n){

  const revNum=(arr, start, end)=>{
    [arr[start], arr[end]] = [arr[end], arr[start]]
  }
  nums.reverse()// 7,4,3,1,5,2 
  revNum(nums, 0, n)//7,4,3 4,3,7
  revNum(nums,n+1, nums.length-1)// 1,5,2 : 5,,2,
  return nums

}
const callFunction = rotateArray([2,5,1,3,4,7],3)
console.log(callFunction)