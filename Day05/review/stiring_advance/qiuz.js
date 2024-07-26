//유저에게 뉴스기사를 입력받고, 바꾸고 싶은 단어로 바꾸고
//바뀐 단어들로 대체된 뉴스기사를 콘솔로 보여주기

// const news = prompt("뉴스기사를 입력해주세요");
// const word = prompt("바뀌게 하고 싶은 단어 입력");
// const want = prompt("바꾸고 싶은 단어 입력");

// const changedNews = news.replaceAll(word, want); //replaceAll : 바꾸고싶은 모든 단어 바꾸기
// console.log(changedNews);

//단어와 숫자를 입력하면 대문자화 시켜서 숫자만큼 반복된 단어 돌려주는 함수 만들기

function test(word, num) {
  return word.toUpperCase().repeat(num);
}
const word = prompt("단어를 입력해주세요");
const num = Number(prompt("숫자를 입력해주세요"));

const wordNum = word.toLocaleUpperCase().repeat(num);
console.log(wordNum);
