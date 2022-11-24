// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені 
// замовлення навіть після оновлення сторінки (використати localStorage).
// На сторінці спочатку під списком категорій відображається також кнопка “Мої замовлення”.



// При кліку на “Мої замовлення”:
// - замість категорій відображається список усіх замовлень користувача (дата та сума)
// - при кліку на замовлення в середній частині відображаються деталі замовлення.
// - в правій частині відображаються дані про товар з замовлення

// Також реалізувати можливість видалення замовлення зі списку. 
// Потрібно реалізувати можливість видаляти замовлення по одному, 
// тобто напроти кожного рядку зі збереженим заказом повинна бути кнопка для видалення цього рядку. 
// (Підказка - можна використовувати значення `Date.now()` 
// на момент збереження замовлення у якості айдішника замовлення. 
// Потім при виведенні списка замовлень цей айдішник додати як дата атрибут. 
// Таким чином можна буде обробляти кліки по кнопках видалення рідків з замовленнями)


const categories = [
  {
    id: 1,
    category: "Toys",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Toys",
  },
  {
    id: 4,
    category: "Grocery",
  },
  {
    id: 5,
    category: "Garden",
  },
];

const products = [
  {
    id: 1,
    category_id: 2,
    name: "Eggplant - Asian",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 100,
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 100,
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 100,
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 100,
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 100,
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    price: 100,
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 100,
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 100,
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 100,
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 100,
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 100,
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 100,
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 100,
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 100,
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    price: 100,
  },
];




const ulInCategories = document.querySelector('#categories')
const liInCategories = document.querySelector('#categories').querySelectorAll('li')
const ulElementProducts = document.querySelector('#products')
const description = document.querySelector('#description')
const buyBtn = document.querySelector('#buy-button')
const removeBtn = buyBtn.style.visibility = 'hidden'
const purchase = document.querySelector('#purchase')
const myOrdersBtn = document.querySelector('.my-orders')
const refreshBtnInCategoriesBlock = document.querySelector('.refresh')

let productsToBuyArray = []




function showProducts(e) {
   let target = e.target;
   let targetAttribute = target.getAttribute("data-category-id");
   let productsArray = [];
   description.innerText = "";
   buyBtn.style.visibility = "hidden";
   

   let filteredProductsList = products.filter((item) => item.category_id === Number(targetAttribute));
   let addProductsToProductsArray = filteredProductsList.forEach((product) =>
     productsArray.push({
       id: product.id,
       category_id: product.category_id,
       name: product.name,
       description: product.description,
     })
   );

   const liInProducts = ulElementProducts.querySelectorAll("li");
   let removeProducts = liInProducts.forEach((element) => element.remove());

  for (let j = 1; j <= productsArray.length; j++){
    const createLiTag = document.createElement("li")
    ulElementProducts.insertAdjacentElement('beforeend', createLiTag)
  }

  const productsFromCategory = ulElementProducts.querySelectorAll("li");

  for (let i = 0; i < productsArray.length; i++) {
    productsFromCategory[i].innerText = productsArray[i].name;
    productsFromCategory[i].setAttribute('data-product-id',productsArray[i].id)
    productsFromCategory[i].setAttribute('category_id', productsArray[i].category_id ) 
  }
  
  function productDescription(e) {
    let targetProduct = e.target;
    let targetProductAttribute = targetProduct.getAttribute("data-product-id");

    let result;
    let selectedProductDescription = productsArray.reduce((acc, item) => {
      if (Number(targetProductAttribute) === item.id) {
        result = item.description;
      }
      return result;
    },0);
    purchase.style.display = 'block'
    description.innerText = selectedProductDescription;
    buyBtn.style.visibility = "visible";
  }

  productsFromCategory.forEach(element => element.addEventListener('click', productDescription));
}






function addForm () {

  
  const form = document.querySelector('form') 

  if (form === null) {
    const addFormElem = document.createElement('form')
    purchase.insertAdjacentElement('beforeend', addFormElem)
  
    const addLabelElemName = document.createElement('label')
    addLabelElemName.innerText = 'Your Name: '
    addLabelElemName.setAttribute('for', 'name')
    addFormElem.insertAdjacentElement('beforeend', addLabelElemName)
  
    const addInputElemName = document.createElement('input')
    addInputElemName.setAttribute('id', 'name')
    addInputElemName.setAttribute('required', '')
    addFormElem.insertAdjacentElement('beforeend', addInputElemName)
  
  
  

    const addLabelElemCity = document.createElement('label')
    addLabelElemCity.innerText = 'Your City: '
    addLabelElemCity.setAttribute('for', 'city')
    addFormElem.insertAdjacentElement('beforeend', addLabelElemCity)
  
    const addSelectElemCity = document.createElement('select')
    addSelectElemCity.setAttribute('id', 'city')
    addSelectElemCity.setAttribute('required', '')
    addFormElem.insertAdjacentElement('beforeend', addSelectElemCity)
  
    const addOptionElemCity1 = document.createElement('option')
    addOptionElemCity1.innerText = 'Please choose the city'
    addOptionElemCity1.setAttribute('value', '')
    const addOptionElemCity2 = document.createElement('option')
    addOptionElemCity2.innerText = 'Kyiv'
    const addOptionElemCity3 = document.createElement('option')
    addOptionElemCity3.innerText = 'London'
    addSelectElemCity.insertAdjacentElement('beforeend', addOptionElemCity1)
    addSelectElemCity.insertAdjacentElement('beforeend', addOptionElemCity2)
    addSelectElemCity.insertAdjacentElement('beforeend', addOptionElemCity3)




    const addLabelElemPost= document.createElement('label')
    addLabelElemPost.innerText = 'Post office number: '
    addLabelElemPost.setAttribute('for', 'post')
    addFormElem.insertAdjacentElement('beforeend', addLabelElemPost)
  
    const addInputElemPost = document.createElement('input')
    addInputElemPost.setAttribute('id', 'post')
    addInputElemPost.setAttribute('type', 'number')
    addInputElemPost.setAttribute('min', '1')
    addInputElemPost.setAttribute('max', '10')
    addInputElemPost.setAttribute('required', '')
    addFormElem.insertAdjacentElement('beforeend', addInputElemPost)




    const addLabelElemPayment= document.createElement('label')
    addLabelElemPayment.innerText = 'Payment method: '
    addLabelElemPayment.setAttribute('for', 'payment')
    addFormElem.insertAdjacentElement('beforeend', addLabelElemPayment)
  
    const addSelectElemPayment = document.createElement('select')
    addSelectElemPayment.setAttribute('id', 'payment')
    addSelectElemPayment.setAttribute('required', '')
    addFormElem.insertAdjacentElement('beforeend', addSelectElemPayment)

    const addOptionElemPayment1 = document.createElement('option')
    addOptionElemPayment1.innerText = 'Please choose the payment method'
    addOptionElemPayment1.setAttribute('value', '')
    const addOptionElemPayment2 = document.createElement('option')
    addOptionElemPayment2.innerText = 'Card'
    const addOptionElemPayment3 = document.createElement('option')
    addOptionElemPayment3.innerText = 'Postpaid'
    addSelectElemPayment.insertAdjacentElement('beforeend', addOptionElemPayment1)
    addSelectElemPayment.insertAdjacentElement('beforeend', addOptionElemPayment2)
    addSelectElemPayment.insertAdjacentElement('beforeend', addOptionElemPayment3)



    const addLabelElemProductNum= document.createElement('label')
    addLabelElemProductNum.innerText = 'Number of products: '
    addLabelElemProductNum.setAttribute('for', 'products-number')
    addFormElem.insertAdjacentElement('beforeend', addLabelElemProductNum)
  
    const addInputElemProductNum = document.createElement('input')
    addInputElemProductNum.setAttribute('id', 'products-number')
    addInputElemProductNum.setAttribute('type', 'number')
    addInputElemProductNum.setAttribute('min', '1')
    addInputElemProductNum.setAttribute('max', '5')
    addInputElemProductNum.setAttribute('required', '')
    addFormElem.insertAdjacentElement('beforeend', addInputElemProductNum)



    const submitBtn = document.createElement('input')
    submitBtn.setAttribute('id','submit')
    submitBtn.setAttribute('type','submit')
    submitBtn.setAttribute('value','Submit')
    addFormElem.insertAdjacentElement('beforeend', submitBtn)




    function addProductsToProductsToBuyArray() {
      let currentProductDescription = document.querySelector("#description").textContent;
      for (let i = 0; i< products.length; i++){
        if (currentProductDescription === products[i].description) {
          
          productsToBuyArray.push({
          Name_of_client:document.querySelector("#name").value,
          City: document.querySelector("#city").value,
          Post_office_number: document.querySelector("#post").value,
          Payment_method: document.querySelector("#payment").value,
          Number_of_products: document.querySelector("#products-number").value,
          Date: new Date().toLocaleDateString(),
          Name_of_Product: products[i].name,
          Total_price: products[i].price * document.querySelector("#products-number").value + '$',
          Unique_order_id: new Date().valueOf(),
          Product_description: products[i].description
          })
        }
      }
      addOrdersToLocalStorage()
    }
    


    function validateForm (e) {

      let inputElemName = document.querySelector('#name')
      let selectElemCity = document.querySelector('#city')
      let inputElemPost = document.querySelector('#post')
      let selectElemPayment = document.querySelector('#payment')
      let inputElemProductNum = document.querySelector('#products-number')
      const addMessageBelowForm = document.createElement('p') 
      addMessageBelowForm.setAttribute('id','message-below-form')
      const MessageBelowForm = document.querySelector('#message-below-form')
      const lastErrorMessage = document.querySelector('#message-below-form:nth-child(12)')

      if(lastErrorMessage !== null){
        lastErrorMessage.remove()
      }
      
      if(!isNaN(Number(inputElemName.value)) || inputElemName.value.trim() === ''
       || selectElemCity.options.length == 0 || selectElemPayment.options.length == 0
       || inputElemPost.value === '' || inputElemProductNum.value === ''){
        addMessageBelowForm.innerText = 'Invalid data, please try again'
        addMessageBelowForm.style.color = 'red'
        addFormElem.insertAdjacentElement('beforeend', addMessageBelowForm)
        e.preventDefault()
      }
      else{
        e.preventDefault()
        addProductsToProductsToBuyArray()
      }
    }
      
    const submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', addLocalStorageToProductsToBuyArray, {once: true})
    submitButton.addEventListener('click', validateForm)
  }
  else {
    return
  }
}



function addLocalStorageToProductsToBuyArray () {
  let arrayFromLocalStorage = JSON.parse(localStorage.getItem('orders'))
  
  if (localStorage.getItem('orders') !== null){
    for (let i = 0; i < arrayFromLocalStorage.length; i++){
      productsToBuyArray.push(arrayFromLocalStorage[i])
    }
  }
}



function addOrdersToLocalStorage () {

  let objToAddInLocalStorage =  productsToBuyArray[productsToBuyArray.length - 1]
  
  if(localStorage.getItem('orders') === null){
    localStorage.setItem('orders', '[]')
  }
  
  let arrayFromLocalStorage = JSON.parse(localStorage.getItem('orders'))
  arrayFromLocalStorage.push(objToAddInLocalStorage)

  localStorage.setItem('orders', JSON.stringify(arrayFromLocalStorage))
}



function removeForm() {
  const formForDelete = document.querySelector("form");
  if (formForDelete === null) {
    return;
  } else {
    formForDelete.remove();
  }
}



function addOrdersToCategoryBlock (){

  const liInCategories = document.querySelector('#categories').querySelectorAll('li')

  if(productsToBuyArray.length === 0){
    description.innerText = ''
    buyBtn.style.visibility = 'hidden'
    const liElemInProd = document.querySelector('#products').querySelectorAll('li')
    const createLi = document.createElement('li')
    const form = document.querySelector('form') 

    if (form !== null){
      form.remove()
    }
  
    createLi.innerText = 'You dont have any orders'
    ulElementProducts.insertAdjacentElement('beforeend', createLi)
    liElemInProd.forEach(element => element.remove())
  }

  if(productsToBuyArray.length !== 0 ){

    const form = document.querySelector("form")
    if(form !== null && buyBtn !== null) {
      form.remove();
      buyBtn.remove();
    }
    description.innerText = ''
    const removeProducts = ulElementProducts.querySelectorAll("li").forEach((element) => element.remove());
    const removeCategories = liInCategories.forEach(item => item.remove())

    for (let i = 0; i < productsToBuyArray.length; i++){

      const createLiInOrdersForDeleteBtn = document.createElement('li')
      createLiInOrdersForDeleteBtn.setAttribute('class', 'delete-order')
      createLiInOrdersForDeleteBtn.setAttribute('deleteBtn-unique-order-id',  productsToBuyArray[i].Unique_order_id)
      createLiInOrdersForDeleteBtn.innerText = 'Delete'
    

      const createLiInOrders = document.createElement('li')
      createLiInOrders.setAttribute('class', 'order')
      createLiInOrders.setAttribute('unique-order-id', productsToBuyArray[i].Unique_order_id)

      const createPInLiOfOrders1 = document.createElement('p')
      createPInLiOfOrders1.innerText = productsToBuyArray[i].Name_of_Product
      const createPInLiOfOrders2 = document.createElement('p')
      createPInLiOfOrders2.innerText = productsToBuyArray[i].Date
      const createPInLiOfOrders3 = document.createElement('p')
      createPInLiOfOrders3.innerText = productsToBuyArray[i].Total_price

      createLiInOrders.insertAdjacentElement('beforeend', createPInLiOfOrders1)
      createLiInOrders.insertAdjacentElement('beforeend', createPInLiOfOrders2)
      createLiInOrders.insertAdjacentElement('beforeend', createPInLiOfOrders3)
      ulInCategories.insertAdjacentElement('beforeend', createLiInOrders)
      ulInCategories.insertAdjacentElement('beforeend', createLiInOrdersForDeleteBtn)
      createLiInOrders.addEventListener('click', showDetailsAndDescriptionOfOrder)
      createLiInOrdersForDeleteBtn.addEventListener('click', deleteOrderBtn)
    }
  }

  if(liInCategories.length !== 0){
    return
  }
}



function showDetailsAndDescriptionOfOrder(e) {
  let targetProduct = e.target;
  let uniqueOrderIdAttribute = targetProduct.getAttribute("unique-order-id");
  const orderDetailsFirstLiElem = document.querySelector("#products li:nth-child(1)");

  

  if (uniqueOrderIdAttribute === null) {
    const parentElement = e.target.parentElement;
    uniqueOrderIdAttribute = parentElement.getAttribute("unique-order-id");
  }

  for (i = 0; i < productsToBuyArray.length; i++) {
    if (Number(uniqueOrderIdAttribute) === productsToBuyArray[i].Unique_order_id) {
      const createLi = document.createElement("li");
      createLi.innerText = `Name of client: ${productsToBuyArray[i].Name_of_client}
      City: ${productsToBuyArray[i].City}
      Post office number: ${productsToBuyArray[i].Post_office_number}
      Payment method: ${productsToBuyArray[i].Payment_method}
      Number of products: ${productsToBuyArray[i].Number_of_products}`;
      ulElementProducts.insertAdjacentElement("beforeend", createLi);

      const descriptionOfOrder = document.querySelector("#description");
      descriptionOfOrder.innerText = productsToBuyArray[i].Product_description;
    }
    if (orderDetailsFirstLiElem !== null) {
      orderDetailsFirstLiElem.remove();
    }
  }
}



function deleteOrderBtn(e) {
  let targetBtn = e.target;
  let uniqueOrderIdAttribute = targetBtn.getAttribute("deleteBtn-unique-order-id");
  const allLiInCategories = document.querySelector("#categories").querySelectorAll(".order");

  for (i = 0; i < allLiInCategories.length; i++) {
    if(uniqueOrderIdAttribute === allLiInCategories[i].getAttribute('unique-order-id')){
      allLiInCategories[i].remove()
      targetBtn.remove()
    }
  }

  for (j = 0; j < productsToBuyArray.length; j++){
    if(Number(uniqueOrderIdAttribute) === productsToBuyArray[j].Unique_order_id ){
       productsToBuyArray.splice([j], 1)
      console.log(productsToBuyArray);
    }

    localStorage.setItem('orders', JSON.stringify(productsToBuyArray)) 
  }

  ulElementProducts.querySelector('li').remove()
  description.innerText =''
}
  


function refreshHendler(){
  location.reload()
}



liInCategories.forEach(element => element.addEventListener('click', removeForm));
buyBtn.addEventListener('click', addForm)

liInCategories.forEach(element => element.addEventListener('click', showProducts));
myOrdersBtn.addEventListener('click', addOrdersToCategoryBlock)

refreshBtnInCategoriesBlock.addEventListener('click', refreshHendler)




