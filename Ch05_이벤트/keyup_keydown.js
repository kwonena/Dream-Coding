const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if(text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
      <div class="item">
        <span class="item_name">${text}</span>
        <button class="item_delete">
          <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
      </div>
      <div class="item_divider"></div>
  `;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

// keypress 이벤트는 곧 사라질 예정이라
// 다른 이벤트로 변경 하는 것이 좋음

// keydown에서 한글을 사용할 때 문제가 생기면
input.addEventListener('keydown', event => {
  if (event.isComposing) { // 글자가 만들어질 때 발생하는 이벤트는 무시
    return;
  }
  if(event.key === 'Enter') {
    onAdd();
  }
});

// keyup은 한글 입력시 문제 없음
input.addEventListener('keyup', event => {
  if(event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});