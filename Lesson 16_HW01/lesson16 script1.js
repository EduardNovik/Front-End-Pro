
// Робимо на підставі дз 26.

// В праву частину з описом товару додати кнопку "купити".
// При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:
// - ПІБ покупця
// - Місто (вибір зі списку декількох міст)
// - Склад Нової пошти для надсилання (числове поле)
// - Спосіб оплати: післяплата або оплата на банківську картку
// - Кількість продукції, що купується
// Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.
// При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).
// Якщо дані у формі некоректні, вивести повідомлення про це під формою.
// Дані замовлення зберегти у обʼєкті. До обʼєкту також додати властивості 
// з даними про дату створення та суму замовлення.
// Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON.
// Підказка - щоб красиво вивести дані на сторінку можна використати тег `pre`:
//  innerHTML = `<pre>${JSON.stringify(data, null, 4)}<pre>`
// Щоб розрахувати суму замовлення потрібно додати властивість зі значенням ціни до кожного товару.
// Щоб занадто не ускладнювати завдання будемо вважати, 
// що замовлення може складатися лише з одного виду товару

const liInCategories = document.querySelector('#categories').querySelectorAll('li')
const ulElementProducts = document.querySelector('#products')
const removeProducts = ulElementProducts.querySelectorAll("li").forEach((element) => element.remove());

const description = document.querySelector('#description')
const btn = document.querySelector('#buy-button')
const removeBtn = btn.style.visibility = 'hidden'
const purchase = document.querySelector('#purchase')




function showProducts(e) {
   let target = e.target;
   let targetAttribute = target.getAttribute("data-category-id");
   let productsArray = [];
   description.innerText = "";
   btn.style.visibility = "hidden";
   

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

    description.innerText = selectedProductDescription;
    btn.style.visibility = "visible";
  }

  productsFromCategory.forEach(element => element.addEventListener('click', productDescription));
}


liInCategories.forEach(element => element.addEventListener('click', showProducts));






function addForm () {

  let productsToBuyObj = {};
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


      

    function addProductsToBuyMessage() {
      let currentProductDescription = document.querySelector("#description").textContent;
      const obj = document.querySelector('#order-below-form:nth-child(12)')
      for (let i = 0; i< products.length; i++){
        if (currentProductDescription === products[i].description) {
          productsToBuyObj.Name_of_client = document.querySelector("#name").value,
          productsToBuyObj.City = document.querySelector("#city").value,
          productsToBuyObj.Post_office_number = document.querySelector("#post").value,
          productsToBuyObj.Payment_method = document.querySelector("#payment").value,
          productsToBuyObj.Number_of_products = document.querySelector("#products-number").value,
          productsToBuyObj.Date = new Date().toLocaleDateString(),
          productsToBuyObj.Name_of_Product = products[i].name,
          productsToBuyObj.Total_price = products[i].price * document.querySelector("#products-number").value + '$'
        }
      }
      const addOrderBelowForm = document.createElement('pre') 
      addOrderBelowForm.setAttribute('id','order-below-form')
      addOrderBelowForm.innerText = JSON.stringify(productsToBuyObj)
      addFormElem.insertAdjacentElement('beforeend',addOrderBelowForm)
      
      if(obj !== null){
        obj.remove()
      }
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
        
      }else{
        e.preventDefault()
        addProductsToBuyMessage()
      }
    }  


    const submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', validateForm)
  }
  else {
    return
  }
}




function removeForm (){
  const formForDelete = document.querySelector('form') 
  if (formForDelete === null){
    return
  }
  else{
    formForDelete.remove()
  }
}


liInCategories.forEach(element => element.addEventListener('click', removeForm));
btn.addEventListener('click', addForm)










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





