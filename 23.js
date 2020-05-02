// Write a JavaScript program to create a new string from a given string
// with the first character of the given string added at the front and back.

function create(str) {
  const first = str.substring(0, 1);
  return first + str + first;
  // 굳이 어지럽게 이렇게 쓸 필요 없지
  // return `${first}${str}${first}`;
}

console.log(create("TreeHouse"));
