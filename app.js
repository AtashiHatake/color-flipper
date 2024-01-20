const changeBtn = document.querySelector("#changeColor");
const colorTxt = document.querySelector("span");
const body = document.querySelector("body");

changeBtn.addEventListener("click", function () {
  randomColor = colorFlipper();
  document.body.style.backgroundColor = randomColor;
  colorTxt.style.color = randomColor;
  colorTxt.textContent = randomColor;
});

function colorFlipper() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
