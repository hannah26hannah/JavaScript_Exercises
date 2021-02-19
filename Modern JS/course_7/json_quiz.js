// https://ko.javascript.info/json quiz

// obj -> JSON 
let user = {
    name: "John Smith",
    age: 35
  };
let toJSON = JSON.stringify(user);
console.log(toJSON); // {"name":"John Smith","age":35}

// JSON -> obj
const toObj = JSON.parse(toJSON);
console.log(toObj); // {name: "John Smith", age: 35}

// answer 
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);

// 역참조 배제하기
console.clear();

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // 순환 참조
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
// My answer  console.log(JSON.stringify(meetup, ['title', 'occupiedBy', 'place', 'name']));

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  
  /* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */