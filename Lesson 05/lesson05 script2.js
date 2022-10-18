
// 1. Знайти суму та кількість позитивних елементів.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// //sum of the positive elements

// const posArray = arr.reduce((total, elem) => {
//     if(elem > 0) {
//         total += elem
//     } return total
    
// }, 0);


// //number of the positive elements

// const posSumArray = arr.reduce((total, elem) => {
//     if(elem > 0) {
//         total ++
//     }
//     return total
// },0);
// console.log(`sum: ${posArray}, amount of positive elements: ${posSumArray}`);







// 2. Знайти мінімальний елемент масиву та його порядковий номер.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const minValue = arr.reduce((a, b) => Math.min(a, b));


// console.log(`The minimum element of an array is: ${minValue} 
// Index of the min element is: `+ arr.indexOf(minValue));





// 3. Знайти максимальний елемент масиву та його порядковий номер.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const maxValue = arr.reduce((a, b) => Math.max(a, b), -Infinity);


// console.log(`The maximum element of an array is: ${maxValue} 
// Index of the max element is: `+ arr.indexOf(maxValue));







// 4. Визначити кількість негативних елементів.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const ArrayWithNegValues = arr.filter((elem) => {
//     if(elem < 0) {
//     return elem
// } 
// } )

// console.log(ArrayWithNegValues.length)





// 5.Знайти кількість непарних позитивних елементів.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const ArrayWithOddPosValues = arr.filter((elem) => {
//     if(elem > 0 && elem % 2 !== 0){
//     return true

// } 
// } )

// console.log(ArrayWithOddPosValues.length)







// 6. Знайти кількість парних позитивних елементів.
//done


// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const ArrayWithEvenPosValues = arr.filter((elem) => {
//     if(elem > 0 && elem % 2 === 0){
//     return true
// } 
// } )

// console.log(ArrayWithEvenPosValues.length)









// 7. Знайти суму парних позитивних елементів.
// done 


// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const ArrayWithEvenPosValues = arr.filter((elem) => {
//     if(elem >= 0 && elem % 2 === 0){
//     return true
// } 
// } )
// console.log(ArrayWithEvenPosValues)


// const result = ArrayWithEvenPosValues.reduce((total, elem) => {
//     return total + elem            
// }, 0) 

//  console.log(result);






//  8. Знайти суму непарних позитивних елементів.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const ArrayWithOddPosValues = arr.filter((elem) => {
//     if(elem >= 0 && elem % 2 !== 0){
//     return true
// } 
// } )
// console.log(ArrayWithOddPosValues)


// const amount = ArrayWithOddPosValues.reduce((total, elem) => {
//     return total + elem            
// }, 0) 

//  console.log(amount);







// 9. Знайти добуток позитивних елементів.
//done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const ArrayWithOddPosValues = arr.filter((elem) => {
//     if(elem >= 0){
//     return true
// } 
// } )

// const amount = ArrayWithOddPosValues.reduce((total, elem) => {
//     return total * elem            
// }, 1) 

//  console.log(amount);




// Знайти добуток позитивних елементів _v2.
// done

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     let result = 1
//    for (i = 0; i < arr.length; i++){
//     if (arr[i] > 0 )
//      result *= arr[i]
//    }
//    console.log(result);







//10. Знайти найбільший серед елементів масиву, остальні обнулити.


// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// const biggestElemOfArray = arr.reduce((total, elem) => {
//     return Math.max(total, elem)
// }, -Infinity)

// console.log(biggestElemOfArray);

// const zeroArray = arr.map((elem) => {
// if (elem !== biggestElemOfArray) {
//     return elem = 0
// } else {
//     return elem
// }

// })

// console.log(zeroArray)




























