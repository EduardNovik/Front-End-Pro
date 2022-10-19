// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]





// const array = [1,4,8,16,'a','b','c','d','e']
// const item = 'd'

// function removeElem (array, item){
//   let newArray 
//   if (array.map((elem) => elem === item)){
//     newArray = array.reduce((acc, elem) => {
//       if (elem !== item){
//         acc.push(elem)
//       }
//       return acc
//     },[])
//     console.log(newArray);
//   }else{
//     console.log('There is no such element in array')
//   }
// }

// removeElem(array, item)





const array = [1,4,8,16,'a','b','c','d','e']
const item = 'b'

function removeElem (array, item){
  let elemIndex = array.indexOf(item)

  if (array.some(elem => elem === item)){ 
     array.splice(elemIndex, 1)
     console.log(array);
  } else {
    console.log('There is no such element in array');
  }
    
}

removeElem(array, item)

console.log(array);





//Alternative option 2

// const arrayLength = prompt(`Array Length`) 

// if(arrayLength === null || arrayLength.trim() === '' || isNaN(+arrayLength)){
//     alert(`Please type the number and refresh the page`)
// } else {
//     let array = []
//     for(var i=0; i < arrayLength; i++) {

//         array[i] = prompt(`Please type the element which has index ${i}`)
//         if(array[i] === null) {
//             alert('Wrong')
//             array.pop()
//             break
//         }

//         if(array[i] === '') {
//             alert('The element cant be empty');
//             array[i] = prompt('Please type the element again'); 
//         }

//         if(!isNaN(+array[i])){
//             array[i] = Number(array[i])
//         }
//     }
//     console.log(array);

// const item = 5

// function removeElem (argument, item) {
  
// let filterArray = argument.filter((elem) => {

//   if (elem !== item) {
//   return elem  
//   }
// })
// console.log(filterArray);
// }

// removeElem(array, item)

// }






//Alternative option 3


// const arrayLength = prompt(`Array Length`) 

// if(arrayLength === null || arrayLength.trim() === '' || isNaN(+arrayLength)){
//     alert(`Please type the number and refresh the page`)
// } else {
//     let array = []
//     for(var i=0; i < arrayLength; i++) {

//         array[i] = prompt(`Please type the element which has index ${i}`)
//         if(array[i] === null) {
//             alert('Wrong')
//             array.pop()
//             break
//         }

//         if(array[i] === '') {
//             alert('The element cant be empty');
//             array[i] = prompt('Please type the element again'); 
//         }

//         if(!isNaN(+array[i])){
//             array[i] = Number(array[i])
//         }
//     }
//     console.log(array);




// let elemToDelete;
// let elemToDeleteWithRightType

// do{

//   elemToDelete = prompt('Please type the value which needs to be removed');

//  if (!isNaN(+elemToDelete)) {
//   elemToDeleteWithRightType = Number(elemToDelete);
//  } else {
//   elemToDeleteWithRightType = elemToDelete
//  }

//  if(elemToDelete === null) {
//    alert('Refresh the page and try again')
//    break
//  }

// } while (elemToDelete.trim() === '')


// function removeElem (argument, elemToDeleteWithRightType) {
  
// let filterArray = argument.filter((elem) => {

//   if (elem !== elemToDeleteWithRightType) {
//   return elem  
//   }
// })
// console.log(filterArray);
// }

// removeElem(array, elemToDeleteWithRightType)

// }








//Alternative option 4


// const arrayLength = prompt(`Array Length`) 

// if(arrayLength === null || arrayLength.trim() === '' || isNaN(+arrayLength)){
//     alert(`Please refresh the page and type the number again`)
// } else {
//     let array = []
//     for(var i=0; i < arrayLength; i++) {

//         array[i] = prompt(`Please type the element which has index ${i}`)
//         if(array[i] === null) {
//             alert('Wrong')
//             array.pop()
//             break
//         }

//         if(array[i] === '') {
//             alert('The element cant be empty');
//             break
//         }

//         if(!isNaN(+array[i])){
//             array[i] = Number(array[i])
//         }
//     }
//     console.log(array);



// function removeElem (argument) {
//         let elemToDelete;
//         let elemToDeleteToNumber;
//         let elemToDeleteToString;
//         let indexToDelete 
//         let filterArray
//     do{
//          elemToDelete = prompt('Please type the value which needs to be removed');

//         if (!isNaN(+elemToDelete)) {
//           elemToDeleteToNumber = Number(elemToDelete);
//           indexToDelete = argument.indexOf(elemToDeleteToNumber)
     
//         } else {
//           elemToDeleteToString = elemToDelete;
//           indexToDelete = argument.indexOf(elemToDeleteToString)
//         }
//         if(elemToDelete === null) {
//           alert('Refresh the page and try again')
//           return
//         }
     
//     } while (indexToDelete === -1 || elemToDelete.trim() === '')

//     filterArray = argument.filter((elem) => {
//      if (elem !== elemToDeleteToNumber && elem !== elemToDeleteToString) {
//        return elem  
//      }
//     })
//      console.log(filterArray);
//   }

// removeElem(array)

// }








//Alternative option 5

// const array = [1,4,8,16,'a','b','c','d','e']
// const item = 'b'



// function removeElem (array, item) {

//   for (item of array) {
//     if (item === array[5]){
//       array.splice(5,'')
//     }
    
//   }
//   return array
  
//   console.log(array)
  
// }

// removeElem(array, item)








//Alternative option 6


// const array = [1,4,8,16,'a','b','c','d','e']
// const item = 'b'

// function removeElem (array, item){
//   let newArray 
//   if (array.some(elem => elem === item)){
//     newArray = array.reduce((acc, elem) => {
//       if (elem !== item){
//         acc.push(elem)
//       }
//       return acc
//     },[])
//     console.log(newArray);
//   }else{
//     console.log('There is no such element in array')
//   }
// }

// removeElem(array, item)






