// Write a JavaScript program to calculate days left until next Christmas.

const today = new Date();
// 굳이 변수로 만들지 않아도 되는 코드 const now_t = now.getTime();
const xmas = new Date(today.getFullYear(), 11, 25);
// const xMas = new Date(2020, 11, 25);
// 코드의 간결화를 위해 지움 const xmas_t = xMas.getTime();

// const t_d = xmas_t - now_t;

if (today.getMonth() == 11 && today.getDate() > 25) {
  xmas.setFullYear(xmas.getFullYear() + 1);
}

// const seconds = t_d / 1000;
// const minutes = seconds / 60;
// const hours = minutes / 60;
// const days = hours / 24;

const one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((xmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas"
);

// 만약에 오늘이 크리스마스보다 시간이 자난 날이라면???
