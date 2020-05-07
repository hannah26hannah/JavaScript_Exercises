// Write a JavaScript program to reverse a given string.

// how to reverse string. https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// 아티클 정독을 했는데, recursion 알고리즘을 쓰는 게 약간 어려워서 다시 한 번 정독 해봐야겠어.
// 알고리즘 강의를 보고 나니까 이해가 잘 되긴 하네.

function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  const splitString = str.split("");

  // Step 2. Use the reverse() method to reverse the new created array

  const reverseArray = splitString.reverse();

  // Step 3. Use the join() method to join all elements of the array into a string

  const joinArray = reverseArray.join("");

  //Step 4. Return the reversed string

  return joinArray;
}

reverseString("Hello");

// 위 코드는 아래처럼 짧아질 수 있다.

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("Hello");

// 2. Reverse a String With a Deccrementing For Loop 감소하는 for 반복을 통해 문자열을 뒤집기

function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  const newString = "";

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */

  for (const i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
}

reverseString("hello");

// 3. Reverse a String With Recursion

//  For this solution, we will use two methods: the String.prototype.substr() method
//  and the String.prototype.charAt() method.
