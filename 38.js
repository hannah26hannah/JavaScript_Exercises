//Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

function exam_status(totmarks, is_exam) {
  if (is_exam) {
    return totmarks >= 90;
  }
  return totmarks >= 89 && totmarks <= 100;
}

console.log(exam_status("78", " ")); // false
console.log(exam_status("89", "true ")); // false
console.log(exam_status("99", "true ")); // true

// "ture "인 경우는 marks가 90보다 넘어야 참이다.
// "" 공백으로 남은 경우 true가 아니므로 아래로 넘어와 else에 해당하는 실행문을 처리하는데 100보다 작고 89보다 높아야 true 를 반환한다.

// 내 솔루션

// function check(marks){
//     const final = true; // final을찾아보려고 막 애썼던 것임..
//    if(final && (marks > 90 || marks = 90)){
//     return "The students will get A+"
//    } else if(marks >= 89 && marks <= 100){
//      return "The Students will get A+."
//    }
//  }

//  console.log(20)
