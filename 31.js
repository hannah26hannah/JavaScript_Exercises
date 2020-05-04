// Write a JavaScript program to find the largest of three given integers

function max_of_three(x, y, z) {
  max_val = 0; // 사실 이걸 왜 쓰는지 잘 모르겠어. 선언해주는 건가? let을 생략해도 되는 건가.

  if (x > y) {
    max_val = x;
  } else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return max_val;
}

// 병렬의 형태로 나란한 두 if. 첫 번째의 두 개 정수를 비교한 다음 나머지 정수와 비교하는 좀 더 효율적인 형태를 썼다.

// // 이게 내 대답이었는데, 이렇게 해도 대답은 잘 나왔지만 솔루션을 참고해보자.
// function find(x, y, z){
//     if(x >= y && x >= z){
//       return `${x} is the largest number of these three integers.`
//     }
//     else if(y >= z && y >= x){
//       return  `${y} is the largest number of these three integers.`
//     }
//     else if(z >= x && z >= y){
//       return  `${z} is the largest number of these three integers.`
//     } else {
//       return false
//     }
//   }

//   console.log(find(11, 10, 8))
