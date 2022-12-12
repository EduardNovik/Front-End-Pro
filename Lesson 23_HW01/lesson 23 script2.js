const products = [
        {id: 1, name: 'Car', price: 9000, isActive: 'true'},
        {id: 2, name: 'Phone', price: 400, isActive: 'true'},
        {id: 3, name: 'TV', price: 200, isActive: 'true'},
        {id: 4, name: 'Book', price: 30, isActive: 'false'},
        {id: 5, name: 'Xbox', price: 400, isActive: 'true'},
        {id: 6, name: 'Laptop', price: 2200, isActive: 'false'}
]


const contentDivElem = document.querySelector('.content')


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

  if(Number(history.state) === product.id){
    const domElWrapper = new DomElClass("div");
    const domElWrapperWithClass = domElWrapper.addClass("product");
  
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
    productBtnElWithClass.insertAdjacentText('beforeend', 'Add to cart')
    if(product.isActive === 'false'){
      productBtnElWithClass.setAttribute('disabled', 'true');
    }
  
    domElWrapperWithClass.insertAdjacentElement('beforeend', productTitleElWithClass)
    productImageElWithClass.insertAdjacentElement('beforeend', productImgElInDivWithClass)
    domElWrapperWithClass.insertAdjacentElement('beforeend', productImageElWithClass)
    domElWrapperWithClass.insertAdjacentElement('beforeend', productPriceElWithClass)
    domElWrapperWithClass.insertAdjacentElement('beforeend', productBtnElWithClass)
    contentDivElem.insertAdjacentElement('beforeend', domElWrapperWithClass)
  }
});


window.addEventListener("popstate", () => {
  if (history.state !== null) {
    window.location = "./lesson 23 test2.html";
  } else if (history.state === null) {
    window.location = "./lesson 23 test1.html";
  }
});

