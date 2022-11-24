// # Реалізувати подобу інтернет-магазину

// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і 
// повернення у вихідний стан програми (коли відображається лише список категорій).]

// У файлі `index.js` додано масиви з даними категорій та товарів.
// У файлі `index.html` зроблено базову структуру сторінки.


const ulElementProducts = document.querySelector('#products')
const removeProducts = ulElementProducts.querySelectorAll("li").forEach((element) => element.remove());

const liInCategories = document.querySelector('#categories').querySelectorAll('li')
const description = document.querySelector('#description')
const btn = document.querySelector('#buy-button')
const removeBtn = btn.style.visibility = 'hidden'
const message = document.querySelector('#message')



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

  function addBuyMessageAndClearInfo () {
    message.innerText = 'Great, You bought the product!'
    message.style.color ='mediumseagreen'

    setTimeout(() => {
    ulElementProducts.querySelectorAll("li").forEach((element) => element.remove());
    description.innerText = '';
    btn.style.visibility = 'hidden'
    message.innerText = ''
    }, 1000)
  }

  btn.addEventListener('click', addBuyMessageAndClearInfo)
  productsFromCategory.forEach(element => element.addEventListener('click', productDescription));
}


liInCategories.forEach(element => element.addEventListener('click', showProducts));







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
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
];

