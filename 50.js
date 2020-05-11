//  Write a JavaScript program to capitalize the first letter of each word of a given string.

function upperCase(str) {
  const s = str.split("");
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case " ":
        break;
      default:
        const part1 = s[i].subst(0, 1).toUpperCase();
        const part2 = s[i].subst(1);
        return (s = part1 + part2);
    }
  }
  return s.join("");
}
console.log(upperCase("welcome to hannah's blog."));

// 아래가 솔루션

function capital_letter(str) {
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    // str[i]의 첫 번째 letter에 접근하는 방법이 굉장히 손쉽고 간단하네.
  }
  return str.join(" ");
}

console.log(capital_letter("welcome to hannah's blog"));
