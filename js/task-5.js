function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const btnEl = document.querySelector(".change-color")
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() { 
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}
