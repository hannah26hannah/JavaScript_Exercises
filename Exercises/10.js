// official solution
function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

// 함수 바깥에서 값을 할당하니 함수 안에서 활용을 못하네.

// const num1 = document.getElementById("firstNumber").value;
// const num2 = document.getElementById("secondNumber").value;
// const result = document.getElementById("result");
