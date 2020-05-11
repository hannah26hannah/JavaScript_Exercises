// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// 다음 글자들을 하나 하나 알파벳 순으로 배열하라는 것인 줄 알았네. 틀렸지만 의도대로 나온 결과이긴 함.

function order(str) {
  console.log(str);
  const newArray = str.split("");
  const newOrder = newArray.sort();
  return newOrder;
}

console.log(order("strawberry"));
