// Write a JavaScript program to create a new string from a given string
// taking the last 3 characters
// and added at both the front and back.
// The string length must be 3 or more

function create(str) {
  if (str.length < 3) {
    // return str;
    return false;
  } else {
    const last3 = str.substring(str.length - 3, str.length);
    // for last three characters, instead of using 'str.length-1', we need to use 'str.length'
    // const last3 = str.substring(str.length - 3, str.length-1)
    return last3 + str + last3;
  }
}

console.log(create(jacket));

// 아래는 솔루션.
// function front_back3(str)
//  {
//   if (str.length>=3)
//    {
// 이 부분은 이해가 안 가서 덧글을 달아두었음.
//    str_len = 3;

//   back = str.substring(str.length-3);
// substring에 매개변수가 하나만 들어가도 되나? 답은 O.
// Parameter Values, start is required but end is optional. if omitted, it extracts the rest of the string.
//    return back + str + back;
//  }
//    else
//      return false;
//  }
