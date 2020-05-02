// Write a JavaScript program to check whether a string starts with 'Java'
// and false otherwise

function start_spec_str(str) {
  if (str.length < 4) {
    return false;
    // 이 부분을 빠뜨렸었네
  }
  front = str.substring(0, 4);
  if (front == "Java") {
    return true;
  } else {
    return false;
  }
}
console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));

// // 이건 나의 답
// function check(str){
//     const has = str.startsWith("Java")
//     if(has){
//       return true
//     } else {
//       return false
//     }
//   }
//   console.log(check("JavaScript"));
//   console.log(check("Python"))
