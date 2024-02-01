const buildArray = nums => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

const callFunction = buildArray([0, 2, 1, 5, 3, 4]);
console.log(callFunction);
