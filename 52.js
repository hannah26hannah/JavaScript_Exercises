// Write a JavaScript program to convert the letters of a given string in alphabetical order.

function alph(str) {
  const s = str.split("").sort().join("");
  return s.trim();
}

console.log(alph("it is given string"));

// split(), sort(), join(), trim()
