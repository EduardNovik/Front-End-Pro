// // Пишемо свій слайдер зображень.

// // На сторінці є зображення та кнопки Next, Prev з боків від зображення.
// // При кліку на Next - показуємо наступне зображення.
// // При кліку на Prev - попереднє.
// // При досягненні останнього зображення - ховати кнопку Next. 
// // Аналогічно з першим зображенням і кнопкою Prev.


// // Стартові файли для проекту можна знайти за посиланням:
// // https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw24



const imgSrcArray = [
  "./img/dog1.jpeg",
  "./img/dog2.jpeg",
  "./img/dog3.jpeg",
  "./img/dog4.jpeg",
  "./img/dog5.jpeg",
  "./img/dog6.jpeg",
];


function slider (pic){
  const btnP = document.querySelector('button:nth-child(1)')
  const btnN = document.querySelector('button:nth-child(3)')
  const img = document.querySelector('img')
  let a = 0
  btnP.setAttribute('disabled', '');

  function nextPic() {
    if (a < pic.length - 1) {
      a++;
    } else {
      return;
    }

    if (a === pic.length - 1) {
      btnN.setAttribute("disabled", "");
    }
    if (a > 0) {
      btnP.removeAttribute("disabled");
    }
    img.src = pic[a];
    console.log(a);
  }

  function prevPic() {
    if (a > 0) {
      a--;
    } else {
      return;
    }

    if (a === 0) {
      btnP.setAttribute("disabled", "");
    }
    if (a < pic.length - 1) {
      btnN.removeAttribute("disabled");
    }
    img.src = pic[a];
    console.log(a);
  }

  btnN.addEventListener("click", nextPic);
  btnP.addEventListener('click', prevPic)

}

slider(imgSrcArray)









