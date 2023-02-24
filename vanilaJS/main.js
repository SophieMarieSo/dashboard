const writeForm = document.querySelector('.writeForm');
const overlay = document.querySelector('.background');
const readForm = document.querySelector('.readForm');
const textList = document.querySelector('.textList');
const formEx = document.querySelector('.formExample');

const writeBtn = document.querySelector('.writeBtn');
const closeModalbtn = document.querySelector('.closeModal');
const closeReadbtn = document.querySelector('.closeRead');

const postTitle = document.querySelector('#postTitle');
const postAuthor = document.querySelector('#postAuthor');
const postText = document.querySelector('.postText');
const readTitle = document.querySelector('.readTitle');
const readAuthor = document.querySelector('.readAuthor');
const readText = document.querySelector('.readText');
const clock = document.querySelector('.clock');
let isChanged = false;

// set timer
function showClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `⏰ ${hours} : ${minutes} : ${seconds}`;
}
showClock();
setInterval(showClock, 1000);

// open& close
function openModal() {
  writeForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  writeForm.classList.add('hidden');
  overlay.classList.add('hidden');
  readForm.classList.add('hidden');

  postTitle.value = '';
  postAuthor.value = '';
  postText.value = '';
}

function closeRead() {
  overlay.classList.add('hidden');
  readForm.classList.add('hidden');
}

// saving post
function createPost() {
  const title = postTitle.value;
  const author = postAuthor.value;
  const text = postText.value;

  const tr = document.createElement('tr');
  tr.setAttribute('class', 'textItem');
  let time = new Date();

  tr.innerHTML = `<td class="title" onclick="readPost(this)">${title}</td>
    <td class="author">${author}</td> <td class="hidden">${text}</td> 
    <td>${time.getFullYear()}년${String(time.getMonth() + 1).padStart(2, '0')}월
    ${String(time.getDate() + 1).padStart(2, '0')}일 
    ${String(time.getHours() + 1).padStart(2, '0')}시
    ${String(time.getMinutes() + 1).padStart(2, '0')}분</td>`;

  const btns = document.createElement('td');
  btns.innerHTML = `<button class="btn edit" onClick="updatePost(this)">수정</button>
                    <button class="btn delete" onClick="deletePost(this)">삭제</button>`;

  // 수정 모드
  if (isChanged) {
    deletePost(isChanged);
    isChanged = false;
  }
  tr.appendChild(btns);
  textList.appendChild(tr);
  closeModal();
}

// delete post
function deletePost(element) {
  textList.removeChild(element.parentElement.parentElement);
}

// update post
function updatePost(element) {
  const tr = element.parentElement.parentElement; // <tr class="textItem">
  postTitle.value = tr.children[0].textContent;
  postAuthor.value = tr.children[1].textContent;
  postText.value = tr.children[2].textContent;

  isChanged = element;
  openModal();
}

// read post
function readPost(element) {
  readTitle.textContent = element.parentElement.children[0].textContent;
  readAuthor.textContent = element.parentElement.children[1].textContent;
  readText.textContent = element.parentElement.children[2].textContent;

  readForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//event listener
writeBtn.addEventListener('click', openModal);
closeModalbtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
closeReadbtn.addEventListener('click', closeModal);

formEx.addEventListener('submit', (event) => {
  event.preventDefault();
  createPost();
});
