// Write a program to check whether a specified character exists
// within the 2nd to 4th position in a given string.

function check_char(str, char) {
  ctr = 0; // 초기화를 하자.
  for (
    let i = 0;
    i < str.length;
    i++ // 2번 째와 4번 째 자리를 확인할 것이므로, 총 3번의 반복이 일어나는 것. 그런데, 그냥 charAt를 써서 두 번만 일하면 안 되는 거야.. ? 근데 코드는 이게 더 짧긴 해 근데 짧은 코드가 더 효율적인가 아니면 일 자체를 적게 하는 게 더 효율적인가?
  ) {
    if (str.charAt(i) == char) {
      ctr++;
    }
  }
  return ctr >= 2 && ctr <= 4;
}

console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));

// function check(str){
//     const char = "a";
//     const second = str.charAt(1);
//     const fourth = str.charAt(3)
//     if(char == second){
//       if(char == fourth){
//         return true
//       } else {
//         return false
//       }
//     } return false
//   }

//   console.log(check("JavaScript"))

// a specified character라고 했을 때 이걸 parameter로 받을 생각을 했어야징.

// function check(str, char){
//     const second = str.charAt(1);
//     const fourth = str.charAt(3)
//     if(char == second){
//       if(char == fourth){
//         return true
//       } else {
//         return false
//       }
//     } return false
//   }

//   console.log(check("JavaScript", "a"))
// 파라미터를 두 개를 받아서 코드를 하나 줄임.

// 내가 for문에 익숙하지 않음을 보여주는 예제이군.
