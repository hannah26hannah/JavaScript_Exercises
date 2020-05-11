// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// 다음 글자들을 하나 하나 알파벳 순으로 배열하라는 것인 줄 알았네. 틀렸지만 의도대로 나온 결과이긴 함.

function order(str) {
  console.log(str); // "strawberry"
  const newArray = str.split("");
  const newOrder = newArray.sort();
  return newOrder;
}

console.log(order("strawberry")); // ["a", "b", "e", "r", "r", "r", "s", "t", "w", "y"]

// 원래 의도는 a 자리에 있는 알파벳을 하나씩 뒤로 밀어 b 를 넣는 식으로 대체하라는 뜻이었음.

function LetterChanges(text) {
  const s = text.split("");
  for (let i = 0; i < s.length; i++) {
    // 반복문에서는 let에 할당
    switch (s[i]) {
      case "":
        break;
      case "z":
        s[i] = "a";
        break;
      case "Z":
        s[i] = "A";
        break;
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
    }

    // Upper-case vowels
    switch (s[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        s[i] = s[i].toUpperCase();
    }
  }
  return s.join("");
}

console.log(LetterChanges("PYTHON")); //"QZUIPO"
console.log(LetterChanges("W3R")); //"X4S"
console.log(LetterChanges("php")); //"qIq"
