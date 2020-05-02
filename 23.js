// Write a JavaScript program to create a new string from a given string
// changing the position of first and last characters.
// The string length must be greater than or equal to 1.

function first_last(str){
    if(str.length <= 1){
        return str; // 전체 문자열의 길이가 1보다 같거나 작으면 맨 앞, 맨 뒤의 글자를 서로 바꿀 수가 없다.문제의 마지막 단서를 못 읽고 넘어서 생긴 실수임
    }
    // ES6에서는 계속 else를 생략하나? 
    middle = str.substring(1, str.length -1);
    return (str.charAt(str.length -1)+ middle + (str.charAt(0))
}

console.log(first_last(Nicolas))

// function change(str) {
//     const first = str.substring(0, 1);
//     const last = str.substring(8, str.length);
//      str = str.replace(first, last)
//    return str+first;
//   }
  
//   console.log(change("TreeHouse"));
// // 이 방법의 문제는 given string이 바뀔 때를 염두에 안 두고 특정 숫자 8 같은 것을 썼다는 것.  