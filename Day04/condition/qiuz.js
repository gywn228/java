// //1.각도를 물어보고, 0~90 예각, 90 직각, 90~180 둔각, 180 평각
// const gak = Number(prompt("각도는 몇 도 입니까?"));

// if (0 <= gak && gak < 90) {
//   alert("예각");
// } else if (gak == 90) {
//   alert("직각");
// } else if (90 < gak && gak < 180) {
//   alert("둔각");
// } else if (gak == 180) {
//   alert("평각");
// } else {
//   alert("입력오류");
// }
// //2. 영어 시험 점수를 입력하고
// //90점 이상이면 A, 80점 이상B, 70점 이상C, 60점 이상D, 그 외는 나락
// const eng = Number(prompt("영어 시험 점수를 입력하세요"));

// if (eng >= 90) {
//   alert("A");
// } else if (eng >= 80) {
//   alert("B");
// } else if (eng >= 70) {
//   alert("C");
// } else if (eng >= 60) {
//   alert("D");
// } else {
//   alert("나락");
// }
//3. [Object문제] mbti를 물어봐서 어떤 성향인지 알려주는 프로그램
//ex) 4번 물어봄
// e 인가요 i 인가요?
// n 인가요 s 인가요?
// f 인가요 t 인가요?
// j 인가요 p 인가요?
// entj => 외향적이고 직관적이고 이성적이고 계획적이군요!

const ei = prompt("당신은 e 인가요 i 인가요?");
const ns = prompt("당신은 n 인가요 s 인가요?");
const ft = prompt("당신은 f 인가요 t 인가요?");
const jp = prompt("당신은 j 인가요 p 인가요?");

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "직관적",
  s: "감각적",
  f: "감성적",
  t: "이성적",
  j: "계획적",
  p: "즉흥적",
};

console.log(
  `당신의 mbti는 ${mbti[ei]}이고 ${mbti[ns]}이고 ${mbti[ft]}이고 ${mbti[jp]}이시군요!`
);
