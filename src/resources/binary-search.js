function binarySearch(list, item) {
    var bottom = 0;
    var top = list.length - 1;
    while (bottom <= top) {
        var mid = Math.floor((bottom + top) / 2);
        var guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            top = mid - 1;
        }
        else {
            bottom = mid + 1;
        }
    }
    return undefined;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3));
console.log(binarySearch([1, 3, 5, 7, 9], -1));
