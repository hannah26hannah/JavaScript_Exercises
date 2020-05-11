// Write a JavaScript program to check whether a given number is presents in the range 40..10000.
// 어떤 숫자가 40과 10000 사이의 두 범위의 숫자 안에 들어가 있는지를 보는 문제였네. 마찬가지로 영어 문제를 이해하지 못해서 벌어진 일임.

function check(n) {
  return n >= 40 && n <= 10000;
}

console.log(check(20));
console.log(check(60));
console.log(check(6000));

// 밑에가 솔루션

function test_digit(x, y, n) {
  if (n < 40 || n > 10000)
    // 40과 10000 안에 들어가지 못하는 숫자는 당연히 false. 하나라도 충족이 안 되면 false 이므로 OR을 씀.
    return false;
  else if (n >= x && n <= y)
    //  최소 조건을 충족한 뒤 범위가 될 x, y를 새로 넣어서 확인.
    return true;
  else return false;
}
console.log(test_digit(40, 4000, 45));
console.log(test_digit(80, 320, 79));
console.log(test_digit(89, 4000, 30));
