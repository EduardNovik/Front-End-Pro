const products = [
    {id: 1, name: 'Car', price: 9000, isActive: true},
    {id: 2, name: 'Phone', price: 400, isActive: true},
    {id: 3, name: 'TV', price: 200, isActive: true},
    {id: 4, name: 'Book', price: 30, isActive: false},
    {id: 5, name: 'Xbox', price: 400, isActive: true},
    {id: 6, name: 'Laptop', price: 2200, isActive: false}
]


const contentDivElem = document.querySelector('.content')


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

  if(Number(history.state) === product.id){
    const domElWrapper = new DomElClass("div");
    const domElWrapperWithClass = domElWrapper.addClass("product").addClass("availableProduct");
  
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
   
  
    domElWrapperWithClass.element.insertAdjacentElement('beforeend', productTitleElWithClass.element)
    productImageElWithClass.element.insertAdjacentElement('beforeend', productImgElInDivWithClass.element)
    domElWrapperWithClass.element.insertAdjacentElement('beforeend', productImageElWithClass.element)
    domElWrapperWithClass.element.insertAdjacentElement('beforeend', productPriceElWithClass.element)
    domElWrapperWithClass.element.insertAdjacentElement('beforeend', productBtnElWithClass.element)
    contentDivElem.insertAdjacentElement('beforeend', domElWrapperWithClass.element)
  }
});


window.addEventListener("popstate", () => {
  if (history.state !== null) {
    window.location = "./lesson 23 test2.html";
  } else if (!history.state) {
    window.location = "./lesson 23 test1.html";
  }
});

