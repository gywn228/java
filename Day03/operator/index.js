// Operator[연산]: something을 토큰에 의해서 새로운거 만들기
// token[토큰]: 기호들
//ex)
//사칙연산: +,-,*
//??연산: ~,&&, ||, ...

//수리연산[arithmath]
1 + 2; // 더하기 연산
1 - 2; // 빼기 연산
1 * 3; // 곱하기 연산
2 ** 3; // 제곱 연산
3 / 2; // 나누기 연산
3 % 2; // 나머지 연산

10 + "10"; // 문자열 연결 연산 -> 암묵적[문자화]
+"100"; // 단항 덧셈 연산 -> 암묵적[숫자화]

//대입 연산
const a = 10; // =

//비교 연산[> , < , >= , <= , == , !=]
const b = 5 > 3; // true
const b1 = 5 < 3; // false
const b2 = 5 == 1; // false
const b3 = 5 != 1; // true

//논리 연산
// &&[and]: 모든 조건이 true이어야 true
// ||[or]: 하나라도 조건이 true이면 true
// ![not]: 값을 반대로 하기

const c1 = 10 > 5 && 10 > 3 && 10 >= 11; // false
const c2 = 10 > 5 || 10 > 3 || 10 >= 11; // true
const c3 = !false; // true
const c4 = !!false; // false

//삼항 연산자
// ?
const d1 = 5 > 3 ? "장원영" : "아이유"; //장원영
const d2 = 5 != 3 ? "안유진" : "윈터"; //윈터
