// Write a JavaScript program
// to find a value which is nearest to 100
// from two different given integer values.

function near_100(x, y) {
  if (x != y) {
    // x와 y가 같지 않을 때를 상정해야 비교가 가능하겠지.
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
    if (x1 < y1) {
      return x;
    }
    if (y1 < x1) {
      return y;
    }
    return 0; // x와 y를 모두 리턴하지 않을 때 왜 0을 리턴하는 거지?
  }
  // x = y 라는 상황이므로, 비교가 불가능하니 false를 리턴한다.
  else return false;
}

// 아래는 내 대답!.
// function which_is_nearest(a, b) {
//   const part1 = Math.abs(100 - a);
//   const part2 = Math.abs(100 - b);

//   if (part1 < part2) {
//     return `${a} is more nearest to 100.`;
//   } else {
//     return `${b} is more nearest to 100.`;
//   }
// }

// console.log(which_is_nearest(88, 10));
