

// 1.

// -Дан масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.



// const array = [1,4,8,16,'a','b','c','d','e']

//   function meanValue(array) {
//     let sumOfNumbers = 0;
//     let quntityOfNumbers = 0
//     let arrayLength = array.length
//     for (let i = 0; i < arrayLength; i++) {
//       if (!isNaN(array[i])) {
//         sumOfNumbers += array[i];
//         quntityOfNumbers++
//       }
//     }
//     console.log('Mean value is: '+ sumOfNumbers/quntityOfNumbers);
//   }

//   meanValue(array);







// 2.

// -Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.



  // let a;
  // let b;
  // let sign;
 

  // do {
  //   a = prompt("Please, type the first number");
  //   if (a === null) {
  //     alert("Wrong number");
  //     break;
  //   }
  // } while (a.trim() === "" || isNaN(Number(a)));

  // do {
  //   b = prompt("Please, type the second number");
  //   if (b === null) {
  //     alert("Wrong number");
  //     break;
  //   }
  // } while (b.trim() === "" || isNaN(Number(b)));

  // do {
  //   sign = prompt(
  //     "Please, type one of the arithmetic operations (+, -, *, /, %, ^)"
  //   );
  //   if (sign === null) {
  //     alert("Please, refresh the page and type arithmetic operation again");
  //     break;
  //   }
  // } while (
  //   sign.trim() === "" ||
  //   (sign !== "+" &&
  //     sign !== "-" &&
  //     sign !== "*" &&
  //     sign !== "/" &&
  //     sign !== "%" &&
  //     sign !== "^")
  // );



  // function doMath(x, znak, y) {
  //   let result;
  //   let numberX = Number(x);
  //   let numberY = Number(y);

  //   if (znak === "+") {
  //     result = numberX + numberY;
  //     console.log(`${numberX} ${znak} ${numberY} = ${result}`);
  //   } else if (znak === "-") {
  //     result = numberX - numberY;
  //     console.log(`${numberX} ${znak} ${numberY} = ${result}`);
  //   } else if (znak === "*") {
  //     result = numberX * numberY;
  //     console.log(`${numberX} ${znak} ${numberY} = ${result}`);
  //   } else if (znak === "/") {
  //     result = numberX / numberY;
  //     console.log(`${numberX} ${znak} ${numberY} = ${result}`);
  //   } else if (znak === "%") {
  //     result = numberX % numberY;
  //     console.log(`${numberX} ${znak} ${numberY} = ${result}`);
  //   } else if (znak === "^") {
  //     result = Math.pow(numberX, numberY);
  //     console.log(`${numberX} ${znak} ${numberY} = ${result}`);
  //   }
  // }

  // doMath(a, sign, b);







//3.

// -Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.


// function fnArray () {

//   const arrayLength = prompt(`First Array Length`) 

//   if(arrayLength === null || arrayLength.trim() === '' || isNaN(+arrayLength)){
//       alert(`Please type the number and refresh the page`)
//       return 
//   } 

//   const arrayInnerLength = prompt(`Inner Array Length`) 

//   if(arrayInnerLength === null || arrayInnerLength.trim() === '' || isNaN(+arrayInnerLength)){
//     alert(`Please type the number and refresh the page`)
//     return 
//   } else {
//       let array = []
//       let arrayInner
      
//       for (var i = 0; i < arrayLength; i++) {
        
//         array[i] = prompt(`Please type the ${i+1} element of outer array, or create the inner array by input []`);

//         if (array[i] === null) {
//           alert("Wrong, refresh the page and try again");
//           return
//         }

//          while (array[i].trim() === ''){
//           array[i] = prompt("The element of outer array can't be empty, please try again");
//           if(array[i] === null){return}
//         }

//         if (!isNaN(+array[i])) {
//           array[i] = Number(array[i]);
//         }
  
//         if (array[i] === "[]") {

//           arrayInner = array[i] = new Array(arrayInnerLength);

//           for (let b = 0; b < arrayInnerLength; b++) {

//             arrayInner[b] = prompt(`Please type the ${b+1} element of inner array`);

//             if (arrayInner[b] === null) {
//               alert("Wrong, refresh the page and try again");
//               return;
//             }
            
//             while (arrayInner[b].trim() === '') {
//               arrayInner[b] = prompt("The element of innner array can't be empty, please try again");
//               if(arrayInner[b] === null){return}
//             }

//             if (!isNaN(+arrayInner[b])) {
//               arrayInner[b] = Number(arrayInner[b]);
//             }
//           }
//         }
//       }

//       console.log(array);
//     }
// }

// fnArray()








//4. 


// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач


let text
let arrayWithElemToDelete = []
let elemToDelete 

  do {
    text = prompt("Type the data please");
    if (text === null) {
      alert("You haven't typed the data");
      break;
    }
  } while (text.trim() === "");

  console.log(`Input data is: ${text}`);

  do {
    elemToDelete = prompt("Type the elements to be removed or press cancel to stop input the data.");

    arrayWithElemToDelete.push(elemToDelete);

  } while (elemToDelete !== null);

arrayWithElemToDelete.pop();

console.log(arrayWithElemToDelete);

function removeElem(a, b) {

  if( a === null){
    return
  }

  let modifyToArray = [...a];
  let filteredArray;

  filteredArray = modifyToArray.filter((elem) => !b.includes(elem));

  console.log(filteredArray.join(""));
}

removeElem(text, arrayWithElemToDelete);