// Перехід за посиланням
// На сторінці інпут та кнопка.

// При натисканні на кнопку - переходимо за посиланням, яке введено у інпут. 
// Також треба реалізувати перевірку введеного значення, чи вказаний протокол `http`/`https`. 
// Якщо протокол не вказаний - додаємо `https`


const btn = document.querySelector("button");
const input = document.querySelector("#url");

function openThePage() {

  const inputValue = input.value;

  if (inputValue.includes("http://")||inputValue.includes("https://")) {
    location.assign(inputValue);
  } 
  else {
    location.assign("https://" + inputValue);
  }
}
 
btn.addEventListener("click", openThePage);