//Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

function check_script(str) {
  if (str.length < 6) {
    return str;
    // script 길이보다 짧으면 어떤 string 안에 script가 특정 인덱스에 위치하는지 이야기를 하는 것이 불가능하므로.
  }
  let result_str = str;
  if (str.substring(10, 4) == "Script") {
    // If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1). 그럼 지금 여기에서는 str.substring(10, 4) == str.substring(4, 10)
    result_str = str.substring(0, 4) + str.substring(10, str.length);
  }
  return result_str;
}
// function check(str) {
//   const index4 = str.charAt(4);
//   if (index4 == "Script") {
//     return str.substring(0, 4);
//   } else {
//     return str;
//   }
// }

// console.log(check("JavaScript"));
