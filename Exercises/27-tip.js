// tips of the day

// Removes elements from the end of an array
//  until the passed function returns true.
// Returns the remaining elements in the array.

const tips_dropRight = (arr, func) => {
  let rightIndex = arr.length; // 5
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1);
};
console.log(tips_dropRight([1, 2, 3, 4, 5], (n) => n < 4));

// JavaScript Array slice() Method :
// select elements from an array.
// array.slice(start, end)
// 와 하나도 이해 안 가..
