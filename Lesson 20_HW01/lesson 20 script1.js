// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
// то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.



  const btnSearch = document.querySelector("#btn-search");
  const container = document.querySelector(".container");
  const postBlock = document.querySelector(".post-block");
  const btnComments = document.querySelector(".comments-btn");
  const btnDelete = document.querySelector(".btn-delete");
  const commentsBlock = document.querySelector(".comments-block");
  btnDelete.style.display = "none";

 
  
  
// Event Listeners
  
  btnSearch.addEventListener('click', searchPost)
  btnComments.addEventListener('click', () => {searchPost().then(post => addComments(post))})
  btnDelete.addEventListener('click', removeComments)




//Functions


function searchPost() {

  const input = document.querySelector('#input-id')
  const inputValue = input.value;
  btnComments.style.display = 'block'
  btnDelete.style.display = 'block'
  commentsBlock.innerHTML = ''
  
  return new Promise((resolve, reject) => {

    if (inputValue.trim() <= 100 && inputValue.trim() > 0) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue.trim()}`)
        .then((response) => response.json())
        .then((post) => {
          resolve(post);
          postBlock.innerHTML = `<b>Post title: ${post.title}</b><p>Post: ${post.body}</p><p>Post id:${post.id}</p>`;
        }) 
        .catch((err) => reject("Error is:", err));
    } else {
      btnComments.style.display = 'none'
      btnDelete.style.display = 'none'
      postBlock.innerText = "There is no such post, please type the number from 1 to 100.";
    }
  })
  
}



function addComments (post) {

 return new Promise ((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    .then((response) => response.json())
    .then(comments => {resolve (
        comments.forEach(item => {
        const commentItem = document.createElement('div')
        commentItem.setAttribute('class', 'comment-item')
        commentItem.innerHTML = 
        `<p>Name: ${item.name}</p><p>Comment: ${item.body}</p>
        <p>Email: ${item.email}</p><p>Post Id: ${item.postId}</p>`
        commentsBlock.insertAdjacentElement('beforeend', commentItem)
      }));
      })
    .catch(err => reject('Error is:', err))
  })
}



 function removeComments(){ 
  commentsBlock.innerHTML = ''
 }












