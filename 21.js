// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function string_check(str) {
  if (str === null || str === undefined || str.substring(0, 2) === "Py") {
    return str;
  }
  return `Py${str}`;
  // ES6 version부터는 if ~ else 문에서 else가 없어도 되나본데??
  //ES2015에 .startsWith가 처음 생긴 모양.
}

console.log(string_check("Python"));
console.log(string_check("thon"));

// // 내 답은 str 자리에 null 값이나, undefined가 올 경우는 생각을 안 했다는 거지.
// function addNewString(str) {
//   // const in = str.includes("Py");
//   const start = str.startsWith("Py");
//   if (start) {
//     return str;
//   } else {
//     return "Py" + str;
//   }
// }

// console.log(addNewString("Pim"));
