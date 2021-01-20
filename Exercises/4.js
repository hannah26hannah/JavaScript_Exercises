const p = document.querySelector("p");

const a = 5;
const b = 6;
const c = 7;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// 일반 수학처럼 생각하다가 컴퓨터에서는 *를 생략한다고 곱셈이 된다고 믿어버림.. 꼭 곱셈 시에는 * 마크를 잊지 말 것

p.innerHTML = `s is : ${s} <br> area is ${area}`;
