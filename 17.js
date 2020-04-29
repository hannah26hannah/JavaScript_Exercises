// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function triple(n) {
  if (n >= 19) return (n - 19) * 3;
  else return 19 - n;
}
console.log(triple(3));
