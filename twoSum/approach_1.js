// Approach 1

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const nums = [2, 7, 11, 15],
  target = 26;
console.log(twoSum(nums, target));


// Time N*2 -> worst case scenario
// Space 1