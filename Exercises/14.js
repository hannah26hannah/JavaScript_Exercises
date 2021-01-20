// write a JavaScript exercise to get the extension of a filename.
// 파일 이름의 확장자를 얻는 방법.

const file1 = "50.xsl";
const file2 = "20.doc";

// 파일 이름이 변수에 각각 저장 되어 있다.

getFileExtension(file1);
getFileExtension(file2);

function getFileExtension(filename) {
  return filename.split(".").pop();
  // split는 문자열을 분할하는 메소드. string.split(separator, limit) 여기에서 separator에는 분할의 기준을 넣는다. 여기에서는 dot을 기준으로 분할 한 것임.limit 값을 정하지 않으면 전체를 다 분할한다.

  // The pop() method removes the last element of an array, and returns that element. This method changes the length of an array. To remove the first element of an array, use the shift() method.

  // 여기서는 점으로 이 스트링을 분할했고 pop() 메소드를 통해 총 두 element로 분할된 배열(확실치 않음)의 마지막 원소를 반환한다.
}
