// 1)Робота з даними і історією

// Потрібно створити масив товарів з id, name, price, isActive

// Вивести список на основі готової верстки на головну сторінку

// По кліку на карточку товару на головній має відбуватися перехід на сторінку товару

// https://developer.mozilla.org/ru/docs/Web/API/History/pushState

// На сторінці товару потрібно відображати актуальну інформацію - назву товару

// https://developer.mozilla.org/ru/docs/Web/API/History/state

// 2)Робота з DOM

// Кнопка корзини біля товару доступна лише якщо товар isActive

// Елементи для списку створювати через document.createElement і addEventListener

// Підміняти інформацію про товар на актуальну на сторінці товару через:

// innerText/innerHTML/insertAdjacent*

// 3)Робота з ООП

// Створити javascript-клас MyCustomElement

// при створенні він має приймати селектор для елемента (div, span, buttton...)

// та мати необхідні методи для роботи, які підходять, наприклад:

// addClass, removeClass, setAttribute, removeAttribute, setStyle

// Що працює по ланцюжку на подобі цього

// new MyCustomElement('div').addClass('hidden').setAttribute('name', nameStr);

// Підказка: методи класу повинні повертати this
// Додавання картинок, робота з localStorage - необов'язково, за бажанням


const products = [
    {id: 1, name: 'Car', price: 9000, isActive: true},
    {id: 2, name: 'Phone', price: 400, isActive: true},
    {id: 3, name: 'TV', price: 200, isActive: true},
    {id: 4, name: 'Book', price: 30, isActive: false},
    {id: 5, name: 'Xbox', price: 400, isActive: true},
    {id: 6, name: 'Laptop', price: 2200, isActive: false}
]
 
const productsWraper = document.querySelector('.products')


class DomElClass {
  element = null;

  constructor(typeOfElement) {
    this.element = document.createElement(typeOfElement);
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  addText(txt) {
    this.element.insertAdjacentText("beforeend", txt);
    return this;
  }

  setAtr(attributeName, attributeContent) {
    this.element.setAttribute(attributeName, attributeContent);
    return this;
  }
}



products.forEach((product) => {
  const domElWrapper = new DomElClass("div");
  const domElWrapperWithClass = domElWrapper.addClass("product").setAtr('id', product.id);

  const productTitleEl = new DomElClass("div");
  const productTitleElWithClass = productTitleEl.addClass("product__title").addText(product.name);

  const productImageEl = new DomElClass("div");
  const productImageElWithClass = productImageEl.addClass("product__image");

  const productImgElInDiv = new DomElClass('img');
  const productImgElInDivWithClass = productImgElInDiv.addClass('img_elem').setAtr('src', `./Img/${product.id}.jpg`)

  
  const productPriceEl = new DomElClass("div");
  const productPriceElWithClass = productPriceEl.addClass("product__price").addText(`${product.price}$`)

  const productBtnEl = new DomElClass("button");
  const productBtnElWithClass = productBtnEl.addClass("product__btn").addText(`Add to cart`);

  if(!product.isActive){
    productBtnElWithClass.setAtr('disabled', true)
  }else{
    domElWrapperWithClass.addClass("availableProduct")
  }

  domElWrapperWithClass.element.insertAdjacentElement('beforeend', productTitleElWithClass.element)
  productImageElWithClass.element.insertAdjacentElement('beforeend', productImgElInDivWithClass.element)
  domElWrapperWithClass.element.insertAdjacentElement('beforeend', productImageElWithClass.element)
  domElWrapperWithClass.element.insertAdjacentElement('beforeend', productPriceElWithClass.element)
  domElWrapperWithClass.element.insertAdjacentElement('beforeend', productBtnElWithClass.element)
  productsWraper.insertAdjacentElement('beforeend', domElWrapperWithClass.element)
});




function goToProductPage(e) {
  let targetProductStatus = e.target.closest('.availableProduct');
  let targetBtn = e.target.classList.contains('product__btn')
  let targetId = e.target.id;
  
  if (targetId === "") {
    targetId = e.target.parentElement.id;
    if (targetId === "") {
      targetId = e.target.parentElement.parentElement.id;
    }
  }

  if(!targetBtn && targetProductStatus !== null){
    history.pushState(`${targetId}`, `Product page`, `./lesson 23 test2.html`);
    window.location = "./lesson 23 test2.html";
  }
}


const productBlock = document.querySelectorAll('.product')


productBlock.forEach((elem) => {
  elem.addEventListener("click", goToProductPage);
});


window.addEventListener("popstate", () => {
  if (history.state !== null) {
    window.location = "./lesson 23 test2.html";
  } else if (!history.state) {
    window.location = "./lesson 23 test1.html";
  }
});


