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
  let wid = 20;
  let heig = 20;
  for (let i = 0; i < amount; i++) { 
    const divBox = document.createElement("div");
    divBoxes.appendChild(divBox);
    console.log(divBox);
    divBox.style.width = `${wid += 10}px`;
    divBox.style.height = `${heig += 10}px`;
    divBox.style.backgroundColor = getRandomHexColor();
  }
}

