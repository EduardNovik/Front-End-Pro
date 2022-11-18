// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

// Додаткові смайлики можна взяти тут https://emojipedia.org/
// Підказка - треба використати event delegation


const reactions = ["👍", "👎", "💚", "💩", "🤣"];

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("InnerWrapper");
  const button = document.createElement("button");
  button.innerText = reaction;
  const counter = document.createElement("div");
  counter.classList.add("counter");
  counter.innerText = 0;
  wrapper.append(button, counter);
  return wrapper;
});


reactionElements.forEach((elem) => container.appendChild(elem));
 

const InnerWrapper = document.querySelectorAll('.InnerWrapper') //returns NodeList with div.innerWraper


function addScore (e){
 let counterValue = e.target.closest('div').querySelector('.counter').innerText 
 let elemCounter = e.target.closest('div').querySelector('.counter')
 elemCounter.innerText = parseInt(counterValue) + 1
}

InnerWrapper.forEach((element) =>{element.querySelector("button").addEventListener('click', addScore)})

