// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Ступінь передається як другий аргумент у функцію

// pow (num, degree)




const inputNumber = 2;
const powerNumber = 3;

function nPower(number, degree) {
  if (degree === 1) return number;

  return number * nPower(number, degree - 1);
}

console.log(nPower(inputNumber, powerNumber)); 

