// Реалізовуємо форму для реєстрації.

// Поля:
// - Ім'я, Прізвище (Текстові поля)
// - Дата народження (Текстове поле)
// - Стать (radio)
// - Місто (select)
// - Адреса (textarea)
// - Мови, якими володіє (checkbox)
// - Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.


const listOfInputInLanguage = document.querySelector('.language').querySelectorAll('input')
const btn = document.querySelector('#btn')
const form = document.querySelector('#form')
const inputMale = document.querySelector('#male')
const inputFemale = document.querySelector('#female')
const optionElemKyiv = document.querySelector('option:nth-child(2)')
const optionElemLondon = document.querySelector('option:nth-child(3)')



function checkboxChecked(e) {
  if (
    listOfInputInLanguage[0].checked ||
    listOfInputInLanguage[1].checked ||
    listOfInputInLanguage[2].checked
  ) {
    listOfInputInLanguage.forEach((item) => (item.required = false));
    e.preventDefault();
  }
}

btn.addEventListener('click', checkboxChecked)




function createTable() {
    const tableElem = document.querySelector('table:nth-child(14)')
    const createTableElem = document.createElement('table')
    form.insertAdjacentElement('beforeend', createTableElem)
    const createTrElem1 = document.createElement('tr')
    const createTrElem2 = document.createElement('tr')
    createTableElem.insertAdjacentElement('beforeend', createTrElem1)
    createTableElem.insertAdjacentElement('beforeend', createTrElem2)

    const createTdElem1 = document.createElement('td')
    const createTdElem2 = document.createElement('td')
    const createTdElem3 = document.createElement('td')
    const createTdElem4 = document.createElement('td')
    const createTdElem5 = document.createElement('td')
    const createTdElem6 = document.createElement('td')

    createTdElem1.innerText = document.querySelector('label:nth-child(1)').textContent
    createTdElem2.innerText = document.querySelector('label:nth-child(3)').textContent
    createTdElem3.innerText = document.querySelector('legend:nth-child(5)').textContent
    createTdElem4.innerText = document.querySelector('label:nth-child(8)').textContent
    createTdElem5.innerText = document.querySelector('label:nth-child(10)').textContent
    createTdElem6.innerText = document.querySelector('.language legend:nth-child(1)').textContent
   
    createTrElem1.insertAdjacentElement('beforeend', createTdElem1)
    createTrElem1.insertAdjacentElement('beforeend', createTdElem2)
    createTrElem1.insertAdjacentElement('beforeend', createTdElem3)
    createTrElem1.insertAdjacentElement('beforeend', createTdElem4)
    createTrElem1.insertAdjacentElement('beforeend', createTdElem5)
    createTrElem1.insertAdjacentElement('beforeend', createTdElem6)

    const createTdElem21 = document.createElement('td')
    const createTdElem22 = document.createElement('td')
    const createTdElem23 = document.createElement('td')
    const createTdElem24 = document.createElement('td')
    const createTdElem25 = document.createElement('td')
    const createTdElem26 = document.createElement('td')

    createTdElem21.innerText = document.querySelector('input:nth-child(2)').value
    createTdElem22.innerText = document.querySelector('input:nth-child(4)').value

    if(inputMale.checked){
        createTdElem23.innerText = inputMale.value
    }
    else if(inputFemale.checked){
        createTdElem23.innerText = inputFemale.value
    }

    if(optionElemKyiv.selected){
        createTdElem24.innerText = optionElemKyiv.value
    }
    else if(optionElemLondon.selected){
        createTdElem24.innerText = optionElemLondon.value
    }

    createTdElem25.innerText = document.querySelector('textarea:nth-child(11)').value

    const languageDiv = document.querySelector('.language')
    const inputElemInLanguageDiv = languageDiv.querySelectorAll('input')

    for(let i = 0; i< inputElemInLanguageDiv.length; i++){
      if (inputElemInLanguageDiv[i].checked) {
        let createElemP = document.createElement('p')
        createElemP.innerText = inputElemInLanguageDiv[i].value
        createTdElem26.insertAdjacentElement('beforeend', createElemP)
      }
    }

    createTrElem2.insertAdjacentElement('beforeend', createTdElem21)
    createTrElem2.insertAdjacentElement('beforeend', createTdElem22)
    createTrElem2.insertAdjacentElement('beforeend', createTdElem23)
    createTrElem2.insertAdjacentElement('beforeend', createTdElem24)
    createTrElem2.insertAdjacentElement('beforeend', createTdElem25)
    createTrElem2.insertAdjacentElement('beforeend', createTdElem26) 

    
    if(tableElem !== null){
      tableElem.remove()
    }
}

btn.addEventListener('click', createTable)
