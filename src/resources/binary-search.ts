function binarySearch(list: number[], item: number) {
  var bottom = 0;
  var top = list.length - 1;

  while (bottom <= top) {
    const mid = (bottom + top) / 2;
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      bottom = mid;
    } else {
      top = mid;
    }
  }
  return -1
}

console.log(binarySearch([1_100], 57))
console.log(binarySearch([1_100], 321))