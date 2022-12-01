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

  const createTableElem = document.createElement('table')
  createTableElem.setAttribute('id', "table-with-data")
  form.insertAdjacentElement('beforeend', createTableElem)
  const tableElem = document.querySelectorAll('#table-with-data')
  const createTrElem1 = document.createElement('tr')
  const createTrElem2 = document.createElement('tr')
    createTableElem.insertAdjacentElement('beforeend', createTrElem1)
    createTableElem.insertAdjacentElement('beforeend', createTrElem2)

    let createTdElems = []
    for (let i = 1; i <= 7; i++){
      createTdElems[i] = document.createElement('td')
      createTdElems[i].innerText = document.querySelector(`.input-header${i}`).textContent
      createTrElem1.insertAdjacentElement('beforeend', createTdElems[i])
    }
    
    let createTdElem2= []
    for (let i = 1; i <= 7; i++){
      createTdElem2[i] = document.createElement('td')
    }

    createTdElem2[1].innerText = document.querySelector('#name').value
    createTdElem2[2].innerText = document.querySelector('#surname').value
    createTdElem2[3].innerText = document.querySelector('#date').value

    if(inputMale.checked){
        createTdElem2[4].innerText = inputMale.value
    }
    else if(inputFemale.checked){
        createTdElem2[4].innerText = inputFemale.value
    }

    if(optionElemKyiv.selected){
        createTdElem2[5].innerText = optionElemKyiv.value
    }
    else if(optionElemLondon.selected){
        createTdElem2[5].innerText = optionElemLondon.value
    }

    createTdElem2[6].innerText = document.querySelector('#address').value

    const languageDiv = document.querySelector('.language')
    const inputElemInLanguageDiv = languageDiv.querySelectorAll('input')

    for(let i = 0; i< inputElemInLanguageDiv.length; i++){
      if (inputElemInLanguageDiv[i].checked) {
        let createElemP = document.createElement('p')
        createElemP.innerText = inputElemInLanguageDiv[i].value
        createTdElem2[7].insertAdjacentElement('beforeend', createElemP)
      }
    }

    for (let q = 1; q <= 7; q++){
      createTrElem2.insertAdjacentElement('beforeend', createTdElem2[q])
    }


    const areAllEmpty = () => {
      return Array.from(createTrElem2.querySelectorAll('td')).every(
        (cell) => cell.textContent.trim() === ''
        );
      }

    if(tableElem.length === 2 || areAllEmpty() === true){
      tableElem[0].remove()
    }
}

btn.addEventListener('click', createTable)
