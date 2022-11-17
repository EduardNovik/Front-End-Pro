// Є текстове поле на сторінці. 
// Під час фокусування на цьому полі збоку з'являється `<div>`.
// При пропажі фокусу - `<div>` так само пропадає



const input = document.querySelector('.input')
const container = document.querySelector('.container')


const ghostDiv = document.querySelector(".ghost");
ghostDiv.style.opacity = 0;

function hideSpan() {
  ghostDiv.style.opacity = 1;
}

function showSpan() {
    ghostDiv.style.opacity = 0;
}

input.addEventListener("focus", hideSpan);
input.addEventListener("blur", showSpan);