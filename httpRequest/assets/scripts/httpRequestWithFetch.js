const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data = null) {
  return fetch(url, {
    method: method,
    body: data,
    // body: JSON.stringify(data),
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then((errData) => {
        console.log(errData);
        throw new Error('Something happened on the server');
      });
    }
  });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );

    const listOfPosts = responseData;
    // const listOfPosts = JSON.parse(xhr.response);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  //   const post = JSON.stringify({
  //     title: title,
  //     body: content,
  //     userId: userId,
  //   });
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData();
  fd.append('title', title);
  fd.append('title', content);
  fd.append('title', userId);

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
});
// fetchPosts();
postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});