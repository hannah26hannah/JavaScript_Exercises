// const d = new Date();
// const year = d.getFullYear();
// 주어진 year는 어떤 것이든 될 수 있다.

const s = document.querySelector("span");
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2020));

// https://www.livescience.com/45768-gregorian-calendar.html
// 너무 어려운걸...
