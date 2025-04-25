function twoSum(nums: number[], target: number): number[] {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      return [i, j];
    }
    if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
}
