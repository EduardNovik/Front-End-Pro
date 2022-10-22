// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]




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



