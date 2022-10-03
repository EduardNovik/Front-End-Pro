const me = 'Eduard'
const surname = 'Novik'
const age = 30

const merge = 'My name is ' + me + ' my surname is ' + surname + ', im ' + age +' years old.'
const join = `My name is ${me} my surname is ${surname}, im ${age} years old.`

console.log(merge)
console.log(join)



const number = 12345

const numberString = number.toString();


const result = numberString.split('').join(' ');
console.log(result)