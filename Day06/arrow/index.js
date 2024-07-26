//general function[일반 함수]
function smaller(x, y) {
  return x > y ? y : x;
}

//arrow function[화살표 함수]
const smaller1 = (x, y) => {
  return x > y ? y : x;
};

// 어떠한 단어가 들어오면 "!" 붙혀서 돌려주는 함수
const quiz = (x) => {
  return x + "!";
};
// 어떠한 숫자가 들어오면 반 나눠서 돌려주는 함수
const quiz2 = (x) => {
  return x / 2;
};
// 어떠한 두 숫자가 들어오면 합치고 두배해서 돌려주는 함수
const quiz3 = (x, y) => {
  return (x + y) * 2;
};

// 어떠한 배열과 과일을 넣었을때, 배열에 과일을 추가해주는 함수
const quiz4 = (arr, fruit) => {
  arr.push(fruit);
};

// 어떠한 배열과 과일을 영어로 넣었을때, 과일에 알파벳이 a, p 가 들어가면 배열에 추가가 안되고
// 그게 아니면 추가되는 함수 만들기
const noap = (arr, fruit) => {
  if (!fruit.includes("a") && !fruit.includes("p")) {
    arr.push(fruit);
  }
};

// 비밀번호를 입력 했을 때, !  #가 안들어가면 특수문자 필수!
// 비밀번호의 길이가 6~20사이가 아니면 비밀번호 길이를 재수정!
// 비밀번호의 시작이 IT or it로 시작 안하면 반드시 IT or it로 시작
// 다 통과되면 비밀번호 통과!
const pw = (password) => {
  if (!password.includes("!") && !password.includes("#")) {
    return "특수문자 필수!";
  } else if (password.length <= 6 || 20 < password.length) {
    return "비밀번호 길이 재수정!";
  } else if (!(password.startsWith("IT") || password.startsWith("it"))) {
    return "반드시 IT or it로 시작!";
  } else {
    return "비밀번호 통과";
  }
};
