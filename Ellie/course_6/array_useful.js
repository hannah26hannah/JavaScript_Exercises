
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    
    // ellie solution
    const result = fruits.join(); // apple,banana,orange
    const result2 = fruits.join('*'); // apple*banana*orange
    

    // 내 대답
    // console.log(fruits.toString()); // apple,banana,orange

  }
  
  // Q2. make an array out of a string
  {

    const fruits = '🍎, 🥝, 🍌, 🍒';

    // Ellie's solution
    const result = fruits.split(',', 2) // ["🍎", " 🥝"]
    const result2 = fruits.split();  // ["🍎, 🥝, 🍌, 🍒"]

    // return 받을 배열의 사이즈도 limit parameter로 지정 가능

    // 내 대답
    // const newArray = [];
    // newArray.push(fruits); 
    // console.log(newArray); //  ["🍓, 🥝, 🍌, 🍒"]
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {

    // Ellie's solution
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse()); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1]
    // reverse()는 array 자체도 변경한다. 

    // My Solution
    //const array = [1, 2, 3, 4, 5];
    //console.log(array.sort((a, b) => b - a));
  }
  
  // Q4. make new array without the first two elements
  {
    // Ellie's Solution
    // const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2);
    // console.log(result); // [1, 2]
    // console.log(array); // [3, 4, 5]

    // 배열 자체가 변했기 때문에, 새로운 배열을 반환하는 다른 메소드가 필요해. 


    // My Solution
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2, 5)); // [3, 4, 5]
    console.log(array.slice(2)); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5] 
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  
  // Q5. find a student with the score 90
  {
    const result = students.find((student) => student.score === 90);
    console.log(result);

    // callback 함수를 받는 find. 이 callback에는 this, value, index, obj가 전달되고 값이 value is S (boolean으로 온다) 여기서 value라는 것은 students라는 배열안의 모든 학생student를 말하겠지 value나 item, student 등 원하는 alias로 부르도록. 
    // arrow func -> {} , return , ; 모두 생략 가능

  }
  
  // Q6. make an array of enrolled students
  {
    
    // Ellie's solution
    const result = students.filter((student) => student.enrolled);
    console.log(result); // [Student, Student, Student]

    // My Solution was using map();
    // const enrolledMap = students.map((student) => {
    //   student.enrolled === true;
    // })
    // console.log(enrolledMap); //  [undefined, undefined, undefined, undefined, undefined]

    // const enrolledresult = students.filter((student) => {
    //   student.enrolled === true;
    // })
    // console.log(enrolledresult); // []

  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    // This is my solution 💛💛💛
    // Map() 메소드는 배열이 가지고 있는 요소 한 가지 한 가지를 다른 배열로 출력
    // 의미없는 alias를 쓰지 말고, callback으로 전달되는 인자는 이해하기 쉽게 써 student처럼
    const result = students.map((student) => {
      return student.score;
    })
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {

    // ellie's 
    const result = students.some((student) => student.score < 50);
    console.log(result); // true. 있는지 없는지를 보는 거였으니까 true/false로 반환되게끔 하는 메소드를 썼어야 해 
    // every와 비교해

    // my solution 
    // const result = students.filter((student) => {
    //   return student.score < 50;
    // })
    // console.log(result); [student]
  }
  
  // Q9. compute students' average score

  {

    // Ellie's 

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);

    // ReduceRight은 제일 뒤에서부터 시작. 

    // My Solution
    const scoreList = students.map((student) => {
      return student.score;
    })
    console.log(scoreList); // [45, 80, 90, 66, 88]
    const reducer = (acc, cur) => acc + cur;
    const total = scoreList.reduce(reducer);
    const studentNum = scoreList.length;
    const average = total / studentNum;
    console.log(average);

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {

    // ellie's 
    const results = students.map((student) => student.score).join(', ');
    console.log(results);
    // 만일 여기서 점수가 50점 이상인 score만 배열로 만들고 싶다고 하면?
    const result50 = students.map((student) => student.score)
    .filter((score) => score >= 50) // 이제는 score가 return 된 상태이므로 score를 인자로 받아서
    .join(', ');
    console.log(result50);
    // mine
    const result = students.map((student) => {
      return student.score;
    })
    console.log(result.join(', '));
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const results = students.map((student) => student.score).sort((a, b) => a - b).join(', ');
    console.log(results);
  }
