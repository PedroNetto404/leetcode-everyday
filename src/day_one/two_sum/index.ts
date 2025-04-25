function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];
    const mapItem = hash[num];
    if (mapItem !== undefined) {
      return [mapItem, i];
    } else {
      hash[target - num] = i;
    }
  }
  return [];
}
