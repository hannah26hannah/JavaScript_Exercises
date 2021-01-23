
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
    console.log(result); // true.

    // TODO: const result = students.some((student) => { student.score < 50 }); 을 출력해보면 false가 나온다.
    
    /**
     *  some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
     * some() 메서드는 인자로 주어진 조건자 함수를 배열에 적용해 결과로 true나 false를 반환한다. some() 메서드는 전달 인자로 넘긴 함수가 배열의 일부 원소에 대해 true를 반환하는 경우 some() 메서드는 true를 반환한다. 반환 값이 결정된 즉시 배열의 원소 순회를 중단한다. 
     * 
     * every() 메서드도 마찬가지인데, every() 메서드는 전달 인자로 넘긴 함수가 배열의 모든 원소에 대해 true를 반환하는 경우 true를 반환한다. 반환 값 결정 시 원소 순회를 중단한다. 
     */
  }
  
  // Q9. compute students' average score

  {

    // Ellie's 

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  
    /**
     * reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
     * 인자로 주어진 함수를 사용해 배열의 원소들을 하나의 값으로 통합한다. reduce() 메서드는 두 개의 인자를 갖는다. 첫 번째 인자는 배열 원소의 감소 작업을 하는 함수이다. 감소 함수는 배열 원소 중 두 값을 하나로 결합하며 크기를 줄이고, 마지막 남은 값을 반환한다. 두 번째 인자는 감소 함수에 전달할 시작 값이다. 
     * reduce() 메서드에 사용되는 함수는 forEach()와 map()과는 조금 다르다. reduce()에 사용하는 함수의 첫 번째 인자는 함수를 사용해 계산된 값의 누적된 결과이다. 이 초기값이 바로 reduce()의 두 번째 인자로 전달한 값이다. 이후 호출에서는 전 단계 함수 호출의 반환 값을 함수의 첫 번째 인자로 사용한다. 
     * reduceRight() 메서드는 reduce() 메서드와 동작이 같지만, 배열 끝부터 시작해 반대 방향으로 처리한다. 감소 함수의 피연산자들 중 오른쪽 피연산자의 우선순위가 높ㅇ르 경우 사용한다. 이 둘 메서드는 감소 함수 호출 시 사용할 this 값을 선택 인자로 지정 불가하다. 선택 초기값 인자만 지정 가능하다. 감소 함수를 특정 object의 메서드로 호출하고자 한다면 Function.bind() 메서드를 사용해야 한다. 
     * 
     * 
     */

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
    // My Solution (21-01-23) -> 배열을 하나 만듦으로써 배열을 순회하는 forEach를 씀. 하지만 배열 메소드 중에는 결과를 배열에 담아 반환하는 메소드가 있으므로 map() 메소드를 사용하는 것이 훨씬 효율적이다. 
    let strArry = [] ;
    students.forEach((el) => {
      strArry.push(el);
    })
    console.log(strArry.join(', '));

    
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
  

/**
 * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 * 각 인자는 배열의 원소값, 원소의 인덱스 값, 그리고 배열 그 자체다. 배열의 모든 원소가 순회되기 전에는 종료되지 않는다. 루프에서 사용하는 break 문을 쓸 수 없다. 루프를 중간에 종료하려면 예외를 발생시켜야 한다. forEach는 try 블록 안에서 호출되어야 한다. 
 * 
 * 
 * map(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): u[];
 * returns the elements of an array that meet the condition specified in a callback function. 
 * map() 메서드는 배열의 각 원소를 메서드의 첫 번째 전달 인자로 지정한 함수에 전달하고, 해당 함수의 반환 값을 배열에 담아 반환한다. 
 * map() 메서드에 전달한 함수는 forEach()에 전달한 함수와 동일한 형태로 호출되지만, map() 메서드에 인자로 전달된 함수는 반드시 값을 반환해야 한다. map()은 기존 배열을 수정하지 않고, 새 배열을 반환한다. 
 * 
 * filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
 * filter() 메서드는 배열의 일부를 반환한다. 이 메서드에 전달하는 함수는 조건자 함수(항상 true나 false를 반환해야 하는 함수)여야 한다. 
 */

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const results = students.map((student) => student.score).sort((a, b) => a - b).join(', ');
    console.log(results);
  }
