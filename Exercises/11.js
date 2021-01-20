function cvt1() {
  const c = document.getElementById("cel").value;
  document.getElementById("result1").innerHTML = `${c * 1.8 + 32} °F`;
}

function cvt2() {
  const f = document.getElementById("fa").value;

  document.getElementById("result2").innerHTML = `${((f - 32) / 9) * 5} °C`;
}

// fomula는 맞았는데 자꾸 답이 틀렸던 건 input에서 이벤트를 올바르게 걸지 않았기 때문. onchange-onkeypress-onkeydown 다 하다가 결국 oninput을 썼다.
// Execute a JavaScript when a user writes something in an <input> field: this event is similar to the onchange event. The difference is that the oninput event occurs immediately after the value of an element has changed, while onchange occurs when the element loses focus, after the content has been changed. The other difference is that the onchange event also works on <select> elements.
// so in this case, I wanted to see the calculated result right away, so oninput was the correct answer.
