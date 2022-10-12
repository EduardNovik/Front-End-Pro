// 1 Вивести на сторінку в один рядок через кому числа від 10 до 20

// let output = ''
// for (let i = 10; i <= 20; i++) {
//     output += `${i}, `
// }
// console.log(output)





// 2 Вивести квадрати чисел від 10 до 20

// let output = ''
// for (let i = 10; i <= 20; i++ ) {
//     output += `${i**2}, `
// }
// console.log(output)




// 3 Вивести таблицю множення на 7

// let output = ''

// for (let i = 1; i <= 10; i++ ) {
//     output += `7 * ${i} = ${7*i}\n`
// }
// console.log(output)



// 4 Знайти суму всіх цілих чисел від 1 до 15

// (Для кожного числа окремо)

// let output = ''

// for (let i = 1; i <= 15; i++ ) {
//     output += `${i*(i+1)/2}, `
// }
// console.log(output)


// (Для всіх чисел разом)

// let output = 0
// for (let i = 1; i <= 15; i++ ) {
//     output += i
// }
// console.log(output)





// // 5 Знайти добуток усіх цілих чисел від 15 до 35 

// let result = 1
// for (let i = 15; i <= 35; i++ ) {
//         result  *= i
// }
// console.log(result)






// 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// (Для кожного числа окремо)

// let output = ''
// for (let i = 1; i <= 500; i++ ) {
//     output += `${(i*(i+1)/2)/i}, `
// }
// console.log(output)



// (Для всіх чисел разом)

// let output = 0
// const quantityOfnumbers = 500

// for (let i = 1; i <= 500; i++ ) {
//     output += i/quantityOfnumbers
// }
// console.log(output)




// 7 Вивести суму лише парних чисел в діапазоні від 30 до 80 

// let output = 0
// for (let i = 30; i <= 80; i++ ) {
//     if( i % 2 == 0 ){
//         output += i
//     }
// }
// console.log(output)





// 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3

// let output = ''
// for (let i = 100; i <= 200; i++ ) {

//     if (i % 3 == 0) {
//         output += `${i}, `
//     }
// }
// console.log(output)




// 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// let natural = +prompt('Type your number')
// let output = ''
// for(i = 1; i <= natural; i++ ) {
//     if ( natural % i == 0)
//     output += `${i}, `
// } 

// alert(output)




//10 Визначити кількість його парних дільників

// let natural = +prompt('Type your number')
// let output = ''
// for(i = 2; i <= natural; i++ ) {
//     if ( natural % i == 0 && i % 2 == 0 ){
//         output++
//     }
// }

// alert(output)



//11 Знайти суму його парних дільників

// let natural = +prompt('Type your number')
// let output = 0
// for(i = 1; i <= natural; i++ ) {
//     if ( natural % i == 0 && i % 2 == 0 ){
//         output += i
//     }
// }

// alert(output)




// 12 Надрукувати повну таблицю множення від 1 до 10

// let result = ''
// let output = ''
// for(let i = 1; i <= 10; i++ ) {
//         for (let j = 1; j <=10; j++) {
//                 console.log(output = `${i} * ${j} = ${i*j} `); 
//         }    
//         console.log(result);
// }

 















