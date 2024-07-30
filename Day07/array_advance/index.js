const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.push(6)

//map: 요소들을 바꾸기! emoji: 시작 + .
//모두 토마토
const tomato = arr.map(() => {
    return "🍅"
})
console.log(tomato)

//모두 10
const ten = arr.map(()=>{
    return 10
})
console.log(ten)

//홀수 짝수
const oneTwo = arr.map((x)=>{
    return x % 2 == 1 ? 1 : 2
})
console.log(oneTwo)

//숫자3만 토마토로 바꾸기
const three = arr.map((x)=>{
    return x == 3 ? "🍅" : x
})
console.log(three)

//다 문자열로 바꾸기
const stringArr = arr.map((x)=>{
    return String(x)
})
console.log(stringArr)


//filter: 요소들을 필터링(조건에 맞지않으면 cut)
const oddArr = arr.filter((x)=>{
    return x % 2 == 1
})
console.log(`oddArr:${oddArr}`)

//1. 3의 배수만 살리기
//2. 6 이상만 살리기
const quiz1 = arr.filter((x)=>{
    return x % 3 == 0
})

const quiz2 = arr.filter((x)=>{
    return x >= 6 
})


const fruits = ["peach","apple","mango","strawberry","avocado",
    "grape", "kiwi", "watermelon","melon"]
//1. melon이 들어간 과일만 살리기
const onlyMelon = fruits.filter((x)=>{
    return x.includes("melon")
})
//2. 글자 길이가 6글자 이상만 살리기
fruits.filter((x)=>{
    return x.length >= 6
})
//3. 모든 과일을 대문자로 바꾸기
const upperFruits = fruits.map((x)=>{
    return x.toUpperCase
})