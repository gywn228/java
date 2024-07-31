//세로
const makeBox = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  document.body.appendChild(div);
};
makeBox("#54efc3");
makeBox("#00b894");
makeBox("#ffeaa7");
makeBox("#fdca6e");

// ["red", "blue", "balck", "skyblue"].forEach((x) => {
//   makeBox(x);
// });

//가로
const container = document.createElement("div");
container.style.display = "flex";

const makeBox1 = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  return div;
};
//-2) box 5개 만들어야함 그리고 컨테이너에 넣어야함
["red", "blue", "black", "skyblue", "pink"].forEach((x) => {
  container.appendChild(makeBox1(x));
});

document.body.appendChild(container);
