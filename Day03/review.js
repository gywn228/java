const lunch = prompt("무슨 점심메뉴를 드셨나요?");
console.log(`${lunch} 을 먹었다니 맛있었겠군요!`);

const base = Number(prompt("정삼각형의 밑변의 길이는?"));
const base2 = Number(prompt("정삼각형의 높이는?"));
console.log(`정삼각형의 넓이는 ${(base * base2) / 2} 입니다.`);

const cash = Number(prompt("원화 입력"));
const rate = 0.013;
console.log(`엔화: ${cash * rate}`);
