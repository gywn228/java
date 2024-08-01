//좌석 A1~A9만들기

//1.컨테이너 만들기
const theater = document.createElement("div");
theater.style.display = "grid";
theater.style.gridTemplateColumns = "repeat(9,1fr)";

const makeSeat = (alphabet) => {
  return Array(14)
    .fill(alphabet)
    .map((x, i) => {
      return x + (i + 1);
    });
};

[..."ABCDEFGHIJKL"].forEach((x) => {
  makeSeat(x).forEach((x) => {
    const seat = document.createElement("div");
    seat.innerText = x;
    seat.style.width = "50px";
    seat.style.height = "50px";
    seat.style.border = "1px solid black";
    theater.appendChild(seat);
  });
});

document.body.appendChild(theater);
