// Write a JavaScript program to check
// from three given numbers (non negative integers) 0과 양의 정수
// that two or all of them
// have the same rightmost digit. 가장 오른쪽의 digit은 끝자리를 의미해.

function same_last_digit(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}

// function same_last_digit(x, y, z){
//     //   if(x >= 0 && y >= 0 && z >= 0){ 이걸 아예 안 써줬다 솔루션에서는
//     //     const x_right = x % 10;
//     //     const y_right = y % 10;
//     //     const z_right = z % 10; 어차피 한 번만 쓰일 것, 이것도 안 썼더라
//         if(x_right == y_right || y_right == z_right || z_right == x_right){
//           return true
//         } else
//           return false

//       } return false
//     }

console.log(same_last_digit(22, 32, 42));
console.log(same_last_digit(102, 302, 2));
console.log(same_last_digit(20, 22, 45));

// 접근법은 맞아썽, 하지만 코드를 더 깔끔하게 쓸 방법을 생각해보자.
