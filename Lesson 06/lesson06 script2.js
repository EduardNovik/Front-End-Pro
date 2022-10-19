// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const length = 10

function generateKey(length, characters) {

  let text = '';
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++)

    text += characters.charAt(Math.floor(Math.random() * charactersLength));

  return text;
}

console.log(generateKey(length, characters));



