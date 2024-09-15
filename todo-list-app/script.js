const input = document.getElementById('add-item');
const list = document.getElementById('list-container');
const button = document.querySelector('button');

function generateList(event) {
  const value = input.value;
  if (value === '') {
    alert('Please write something!');
  } else {
    let li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
  }
}

button.addEventListener('click', generateList);
