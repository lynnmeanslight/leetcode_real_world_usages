// Approach 2
function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    // find the complement of current number
    const complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 18;
console.log(twoSum(nums, target));

// Time N -> worst case scenario
// Space N