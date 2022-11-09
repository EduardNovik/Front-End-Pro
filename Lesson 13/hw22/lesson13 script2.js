
// Вивести на сторінку таблицю 10 × 10, 
// заповнену числами від 1 до 100 (таблиця створюється за допомогою JavaScript).

// У HTML файлі для тих, хто забув, наведено приклад, 
// як виглядає структура таблиці 


// Стартові файли для проекту можна знайти за посиланням:
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw22


const row = 10
const column = 10
const container = document.querySelector('.container')
let value = 1
function add(row, column) {
  const table = document.createElement('table')
  for (let i = 1; i<= row; i++){
    var tr = document.createElement('tr')
    for(let j = 1; j<=column; j++){
      var td = document.createElement('td')
      td.innerText = value++
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
  container.appendChild(table)
}

add(row, column)

 