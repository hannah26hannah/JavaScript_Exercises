// 객체야 안녕?
let user = {}; // 빈 객체를 만듭니다.
user.name = "John"; // user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user.surname = "Smith"; // user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.

user.name = "Pete"; // name의 값을 Pete로 수정해보세요.
delete user.name; // user에서 프로퍼티 name을 삭제하세요. 
console.log(user.name in user) // 삭제가 잘 되었는지 알아보기 위해선 "key" in Object 문법을 사용해봅니다. false 출력 시 잘 삭제가 되었다는 뜻입니다. 

// 객체가 비어있는지 확인하기

// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어보세요. 

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false; // 비어있지 않다. 즉, 프로퍼티가 존재.
  }
  return true; // 루프가 돌지 않으니 프로퍼티 값이 없으므로, is Empty. 
}

// 프로퍼티 합계 구하기

// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  let sum = 0; // salaries가 비어있다면 sum에 0이 저장어야 합니다. 
  for(let key in salaries) {
    sum += salaries[key]
  }
  
  alert(sum)

  // 프로퍼티 값 두 배로 부풀리기

  // 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

// 함수 호출 전, 내가 만든 답. for문이 if문과 순서가 바뀌어야 한다. 

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    if(typeof key === "number") {
      for(let key in obj) {
          obj.key = obj.key * 2;
      }
  }
    return;
  }
  multiplyNumeric(menu);

// 함수 호출 후 아래와 같아야 한다 

menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

// 답


  function multiplyNumeric(obj) {
    for(let key in obj) {
      if(typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  
  multiplyNumeric(menu);
  
  console.log(menu);

// 희한하게 아래같이 객체의 프로퍼티 순서가 바뀌어서 정렬이 된다. 

// [object Object] {
//   height: 600,
//   title: "My menu",
//   width: 400
// }