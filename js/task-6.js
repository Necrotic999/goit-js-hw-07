function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector("input")
const btnCreate = document.querySelector("button");
const btnDestroy = btnCreate.nextElementSibling;
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", onBtnCreateClick);
btnDestroy.addEventListener("click", onBtnDestroyClick);

function onBtnCreateClick() { 
  divBoxes.innerHTML = "";
  if (inputEl.value >= 1 && inputEl.value <= 100) { 
    createBoxes(inputEl.value);
    inputEl.value = "";
  }
}

function onBtnDestroyClick() { 
  destroyBoxes();
}

function destroyBoxes() { 
  divBoxes.innerHTML = "";
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement("div");
    divBoxes.appendChild(divBox);
    if (i === 0) {
      divBox.style.width = `${width}px`;
      divBox.style.height = `${height}px`;
    } else { 
      divBox.style.width = `${width += 10}px`;
      divBox.style.height = `${height += 10}px`;
    }
    divBox.style.backgroundColor = getRandomHexColor();
  }
}

