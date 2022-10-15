// Створити масив, довжину та елементи якого задає користувач.


const arrayLength = prompt(`Array Length`) 

if(arrayLength === null || arrayLength.trim() === '' || isNaN(arrayLength)){
    alert(`Please type the number`)
} else{
    let arr = []
    for(var i=0; i < arrayLength; i++) {

        arr[i] = prompt(`Please type the element which has index ${i}`)
        if(arr[i] === null) {
            alert('Wrong')
            arr.pop()
            break
        }

        if(arr[i] === '') {
            alert('The element cant be empty');
            arr[i] = prompt('Please type the element again'); 
        }

        if(!isNaN(+arr[i])){
          arr[i] = Number(arr[i])
        }
    }
    console.log(arr);

// Відсортувати масив за зростанням.

console.log(arr.sort().sort((a, b) => { return a - b}))
      

//  Видалити елементи з масиву з 2 по 4 (включно!).

  const firstIndex = 1
  const quantityOfElem = 3
  arr.splice (firstIndex, quantityOfElem)
  console.log(arr);
}



    
