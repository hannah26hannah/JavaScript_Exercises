// Write a JavaScript program to check 
// two given integer values and
// return true if one of the number is 15
// or if their sum or difference is 15.

function test_nmuber(a, b){
    // == 대신 === 를 쓰고 있음. 저번에도 그랬나?
    // 어쨌든 === 은 자료형도 일치하고 그 내용도 일치하는지를 본다. 
    // ==는 추상 동등 비교로 비교 전 미리 두 자료형을 동일한 자료형으로 변환 후 비교를 체크한다. 

    return (a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15){

        // 아래 코드와 비교해서 비교연산자가 달라진 것을 제외하고도 괄호를 많이 쓰지 않을 것을 알 수 있다.
    // return ((a == 15 || b == 15)) || 
    //   ((a + b == 15) || (Math.abs(a - b) == 15))
  }
  
  console.log(test_nmuber(15, 9));
  console.log(test_nmuber(25, 15));
  console.log(test_nmuber(7, 8));
  console.log(test_nmuber(25, 10));
  console.log(test_nmuber(5, 9));
  console.log(test_nmuber(7, 9));
  console.log(test_nmuber(9, 25));