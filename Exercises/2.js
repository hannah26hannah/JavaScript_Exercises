// 현재 윈도우 화면의 컨텐츠를 출력하는 자바스크립트 프로그램을 만들 것

function print_current_page() {
  window.print();
}

// 함수를 따로 호출할 필요는 없어. 이미 html에서 호출했기 때문에
// print();

// function print(){window.print()};는 동작하지 않았는데 function 이름에 단순히 print만 쓰면 뭔가 에러가 나는 모양이다. 예제에서도 print_current_page라는 이름을 괜히 쓴 게 아닌 듯.
