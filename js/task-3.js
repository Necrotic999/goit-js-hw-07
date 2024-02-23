const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputNameInput);

function onInputNameInput(e) {
    spanName.textContent = e.target.value.trim() || "Anonymous";
}