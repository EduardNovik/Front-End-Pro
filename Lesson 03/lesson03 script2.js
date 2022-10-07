const question = prompt('What would you like to do: add, sub, mult or div?')
const number1 = prompt('Type first number')
const number2 = prompt('Type second number')


const plus = Number(number1)  + Number(number2)
const minus = Number(number1) - Number(number2)
const mult = Number(number1) * Number(number2)
const divide = Number(number1) / Number(number2)




if (question === 'add') {
    alert(`${number1} + ${number2} = ${plus}`)
} else if (question === 'sub') { 
    alert(`${number1} - ${number2} = ${minus}`)
}
else if (question === 'mult') { 
    alert(`${number1} * ${number2} = ${mult}`)
}
else if (question === 'div') { 
    alert(`${number1} / ${number2} = ${divide}`)
} else { 
    alert (`Please refresh the page and try to type one of these commands: add, sub, mult or div`)
}




