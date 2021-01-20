// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.


function check(a, b){
    if((a >= 40 && a <= 60) && (b >= 40 && b <= 60) || ((a >= 60 && a <= 100) && (b >= 70 && b <= 100)){ // 논리연산자를 붙여서 코드를 더 짧게 함
      return true
    }
   else 
     return false;
 } 
// 두 번째로 작성한 것 
// function check(a, b){
//     if((a >= 40 && a <= 60) && (b >= 40 && b <= 60)){
//       return true
//     } else if ((a >= 60 && a <= 100) && (b >= 70 && b <= 100)){
//       return true
//     }
//    else 
//      return false
//  } 
 
//  console.log(check(55, 55))
//  console.log(check(60, 60))
//  console.log(check(-45, 75))

// // a는 40~60 사이에, b는 70~100 사이라고 생각하고 잘못 풀었다.
// function check(a, b) {
//   if (a < b) {
//     if (a >= 40 && a <= 60 && b >= 70 && b <= 100) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

// console.log(check(55, 90));
// console.log(check(60, 60));
// console.log(check(-45, 75));
