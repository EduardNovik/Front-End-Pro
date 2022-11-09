// У папці `img` є зображення собак.
// При кожному завантаженні сторінки повинно виводитися випадково обране зображення.


// Стартові файли для проекту можна знайти за посиланням:
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw23

const imgSrcArray = [
  "./img/dog1.jpeg",
  "./img/dog2.jpeg",
  "./img/dog3.jpeg",
  "./img/dog4.jpeg",
  "./img/dog5.jpeg",
  "./img/dog6.jpeg",
];
function randomPicture (pic) {
  const randomIndex = Math.floor(Math.random()*pic.length)
  const img = document.querySelector('img')
  img.src = pic[randomIndex]
 }

 randomPicture(imgSrcArray)

