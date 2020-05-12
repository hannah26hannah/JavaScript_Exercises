// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// 정규식을 써야 할 것 같은데, 가운데 3개의 레터가 어던 것이든 상관없이 자리를 차지한다가 핵심이네 a___b 이런 모습이 되어야겠지. => a...b 여기서 dot은 any charactor를 의미함.

function three(str) {
  const pattern = /a...b/;
  return pattern.test(str); // 찾고자 하는 정보인 패턴에 메소드를 쓰는 식. test(str)이다.
}

console.log(three("asordb")); // false
console.log(three("aaabb")); // true

// 아래는 솔루션

function ab_Check(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(ab_Check("Chainsbreak")); // true
console.log(ab_Check("pane borrowed")); // true
console.log(ab_Check("abCheck")); // false

// 놓친 것 : a와 b 사이라고 했지만, b와 a 사이도 고려했어야 했던 것

// any character를 위한 표시는 dot. patter.test(str) method를 배움
