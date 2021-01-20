function animate_string(id) {
  let element = document.getElementById(id);
  // document.querySelector()가 아니어서 css의 클래스 작법을 따르지 않아도 되는 듯.
  let textNode = element.childNodes[0];
  //element가 가지는 텍스트 노드는 하나니까. 0이라는 인덱스로써 첫 번째 노드를 반환함. assuming no other children
  let text = textNode.data; // ""으로 감싸지지도 않은, 텍스트 노드의 데이터 값 그 자체.

  //   console.log(text.length); 공백을 포함하므로 11임.

  // setInterval(function () {
  //   text = text[text.length - 1] + text.substring(0, text.length - 1);
  //   // 맨 끝의 글자를 앞으로 옮긴다고 했으니, childNodes를 선택할 때 공백을 제외한 가장 마지막 인덱스를 선택해야지. 그리고 그 글자를 0과의 범위로 설정해 문자를 split.
  //   textNode.data = text; // 이렇게 만들어진 text는 textNode.data에 새로 할당해서 100밀리세컨마다 반복이 일어나게 하는 것.
  // }, 100);

  // Arrow Function, ES6 version. working well, too!

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}

// periodically 정기적으로, 즉 setInterval을 이용해서 함수를 지정한 주기마다 계속 실행
// rotate the string in right direction 즉, 애니메이션을 이용할 때
// removing one letter from the end of the string, string 자체를 배열처럼 만들어서 배열의 순서를 바꾸는 건 어떨까? append를 써도 될 것 같고..
// 마지막 글자가 계속 앞으로 이동해야 함.
// 와 내가 문제 자체를 잘못 이해했구나.. 전광판처럼 오른쪽으로 지나가는 걸 만드는 거였어.
