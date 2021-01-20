// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

function random() {
  const randomNum = Math.floor(Math.random() * 10);
  // Math.ceil(Math.random()+10) 이렇게 해도 돼.
  const guess = prompt("guess this number!", "");
  if (guess === randomNum) {
    alert("great job");
  } else {
    alert("didn't match");
  }
}
