console.log("americano".toUpperCase());
console.log("americano".repeat(3).toUpperCase());
console.log("AMERICANO".toLocaleLowerCase().repeat(10));

//단어입력받고,대문자화시키고,숫자입력받고 그만큼 반복

const word = prompt("단어를 입력해주세요");
const num = Number(prompt("숫자를 입력해주세요"));
const result = word.toLocaleUpperCase().repeat(num);
console.log(result);

//이모지 = 시작 + .
console.log("abcdef".replace("a", "🎀"));
