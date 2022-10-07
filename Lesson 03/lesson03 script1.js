const number1 = prompt('Type first number')
const number2 = prompt('Type second number')

const plus = Number(number1)  + Number(number2)
const minus = Number(number1) - Number(number2)
const mult = Number(number1) * Number(number2)
const divide = Number(number1) / Number(number2)


console.log(alert(`You have typed ${number1} and ${number2}: 
${number1}+${number2} = ${plus}
${number1}-${number2} = ${minus}
${number1}*${number2} = ${mult}
${number1}/${number2} = ${divide}`));
