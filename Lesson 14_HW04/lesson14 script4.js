// # generateList

// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел і генерує список з елементів:

// Приклад 1. [1, 2, 3]

// ```
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// ```

// Приклад 2. [1,2, [1, 2, 3], 3, [5, 6, [8]]]

// ```
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <ul>
//         <li>2.1</li>
//         <li>2.2</li>
//         <li>2.3</li>
//     </ul>
//     <li>3</li>
//     <ul>
//         <li>3.5</li>
//         <li>3.6</li>
//         <ul>
//             <li>3.6.8</li>
//         </ul>
//     </ul>
// </ul>



const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
const body = document.querySelector("body");


function addList(array, content) {

let num = content;
const createUlElem = document.createElement("ul");

array.forEach((item, indexOfItem) => {
  if (!Array.isArray(item)) {
    const createLiElem = document.createElement("li");
    createLiElem.innerText = `${num.join("")}${item}`;
    createUlElem.insertAdjacentElement("beforeend", createLiElem);
  }
  if (Array.isArray(item)) {
    const addPrefixToNum = num.push(`${array[indexOfItem - 1]}.`);
    createUlElem.insertAdjacentHTML("beforeend", addList(item, num).outerHTML);
  }
  if (indexOfItem === array.length - 1) {
    num.pop();
  }
});
  
  return createUlElem;
}


body.insertAdjacentElement("beforeend", addList(listOfLists, []));






