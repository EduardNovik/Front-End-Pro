// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>


function generateKey() {
  let text = '';
  let quantityOfChatacters   
  let inputCharacters

  do{

    inputCharacters = prompt('Please, type the characters')
    if(inputCharacters === null ){
      alert('Refresh the page and try again')
      return
    }
   
  }while(inputCharacters.trim() === '')


  do{
    quantityOfChatacters = prompt('How many characters you want?')
    if(quantityOfChatacters === null){
      alert('Refresh the page and try again')
      return
    }

  } while(isNaN(+quantityOfChatacters) || quantityOfChatacters.trim() === '')


  for (var i = 0; i < quantityOfChatacters; i++)

    text += inputCharacters.charAt(Math.floor(Math.random() * inputCharacters.length));

  return text;
  
}

console.log(generateKey());



