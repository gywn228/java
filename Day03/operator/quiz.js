const year = Number(prompt("태어난 년도는 몇년도 입니까?"));
const year2 = 2025 - year >= 20 ? "성인 입니다." : "미성년자 입니다.";

console.log(year2);

const height = Number(prompt("당신의 키는 몇입니까?"));
const canRide = height >= 140 ? "탑승 할 수 있습니다" : "탑승이 불가능 합니다";

console.log(canRide);

const gender = prompt("당신의 성별은 무엇입니까? 남성/여성");
const age = Number(prompt("당신의 나이는 무엇입니까?"));
const army = gender == "남성" && age >= 20 ? "징집대상" : "징집대상 아님";
console.log(`귀하는 ${army}' 입니다.`);

const total = Number(prompt("총 구매 금액은?"));
const cost = total >= 50000 ? total * 0.9 : total;
console.log(`다이소 총 구매 금액: ${cost} 입니다.`);

const age1 = Number(prompt("당신의 나이는?"));
const result = age1 >= 20 ? "성인" : age1 > 13 ? "청소년" : "어린이";
