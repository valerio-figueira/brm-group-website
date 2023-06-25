import addFormListener from "../services/SendCurriculum.js";

const fileInput = document.querySelector("#file-input");
const fileNameDisplay = document.querySelector("#file-name-display");

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = "Arquivo: " + fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = "";
    }
})


addFormListener(document.querySelector("#work-with-us form"))