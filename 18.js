//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

// function boolean(x, y) {
//     if ((x == 50 || y == 50) || (x + y) == 50) {
//       return true;
//     }
//   }

//   console.log(boolean(50, 1));

// =만 써서 오류 났었음. 동등연산자 == 를 썼어야 함.
// 이 코드를 더 간결하게 바꾸자면?

function boolean(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}

console.log(boolean(50, 1));

// if 문을 삭제해서 한 줄을 더 없앨 수 있었음.
