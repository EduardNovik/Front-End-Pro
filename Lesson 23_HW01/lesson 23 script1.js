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
    {id: 1, name: 'Car', price: 9000, isActive: 'true'},
    {id: 2, name: 'Phone', price: 400, isActive: 'true'},
    {id: 3, name: 'TV', price: 200, isActive: 'true'},
    {id: 4, name: 'Book', price: 30, isActive: 'false'},
    {id: 5, name: 'Xbox', price: 400, isActive: 'true'},
    {id: 6, name: 'Laptop', price: 2200, isActive: 'false'}
]
 
const productsWraper = document.querySelector('.products')


class DomElClass {
  element = null;

  constructor(typeOfElement) {
    this.element = document.createElement(typeOfElement);
  }

  addClass(className) {
    this.element.classList.add(className);
    return this.element;
  }

  addText(txt) {
    this.element.insertAdjacentText("beforeend", txt);
    return this.element;
  }

  setAtr(attributeName, attributeContent) {
    this.element.setAttribute(attributeName, attributeContent);
    return this.element;
  }
}



products.forEach((product) => {
  const domElWrapper = new DomElClass("div");
  const domElWrapperWithClass = domElWrapper.addClass("product");
  domElWrapperWithClass.setAttribute('id', product.id);

  const productTitleEl = new DomElClass("div");
  const productTitleElWithClass = productTitleEl.addClass("product__title");
  productTitleElWithClass.insertAdjacentText('beforeend', product.name)

  const productImageEl = new DomElClass("div");
  const productImageElWithClass = productImageEl.addClass("product__image");

  const productImgElInDiv = new DomElClass('img');
  const productImgElInDivWithClass = productImgElInDiv.addClass('img_elem')
  productImgElInDivWithClass.setAttribute('src', `./Img/${product.id}.jpg`);

  
  const productPriceEl = new DomElClass("div");
  const productPriceElWithClass = productPriceEl.addClass("product__price");
  productPriceElWithClass.insertAdjacentText('beforeend', `${product.price}$`)

  const productBtnEl = new DomElClass("button");
  const productBtnElWithClass = productBtnEl.addClass("product__btn");
  productBtnElWithClass.insertAdjacentText('beforeend', `Add to cart`)
  if(product.isActive === 'false'){
    productBtnElWithClass.setAttribute('disabled', 'true');
  }

  domElWrapperWithClass.insertAdjacentElement('beforeend', productTitleElWithClass)
  productImageElWithClass.insertAdjacentElement('beforeend', productImgElInDivWithClass)
  domElWrapperWithClass.insertAdjacentElement('beforeend', productImageElWithClass)
  domElWrapperWithClass.insertAdjacentElement('beforeend', productPriceElWithClass)
  domElWrapperWithClass.insertAdjacentElement('beforeend', productBtnElWithClass)
  productsWraper.insertAdjacentElement('beforeend', domElWrapperWithClass)
});




function goToProductPage(e) {
  let targetId = e.target.id;
  
  if (targetId === "") {
    targetId = e.target.parentElement.id;
    if (targetId === "") {
      targetId = e.target.parentElement.parentElement.id;
    }
  }
  
  history.pushState(`${targetId}`, `Product page`, `./lesson 23 test2.html`);
  window.location = "./lesson 23 test2.html";
}


const productBlock = document.querySelectorAll('.product')


productBlock.forEach((elem) => {
  elem.addEventListener("click", goToProductPage);
});


window.addEventListener("popstate", () => {
  if (history.state !== null) {
    window.location = "./lesson 23 test2.html";
  } else if (history.state === null) {
    window.location = "./lesson 23 test1.html";
  }
});


