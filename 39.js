//  Write a JavaScript program
// to compute the sum of the two given integers,
// If the sum is in the range 50..80
// return 65
// other wise return 80

function cal(a, b) {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
}

console.log(cal(20, 40)); // 60 -> 65
console.log(cal(-100, -20)); // -120 -> 80

// This was EASYYY
