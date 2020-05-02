// Write a JavaScript program to remove a character at the specified position of a given string and
// return the new string.

function remove_character(str, char_position) {
  part1 = str.substring(0, char_position);
  part2 = str.substring(char_position + 1, str.length);
  return part1 + part2;
}
console.log(remove_character("Python", 0));

// function remove_return(str) {
//   const remove = str.substring(1, 2);
//   str = str.replace(remove, "a");
//   // 여기에서는 대체할 character로 "a"를 썼지만, "" 공백으로 남겨둔다면 그 character를 그냥 삭제할 수 있어.
//   // 매개변수를 string 하나만 받았기 때문에 특정 포지션도 매개변수로 받으려면 다른 구성이 필요하겠지.. -> 솔루션

//   return str;
// }

// console.log(remove_return("Hello"));
