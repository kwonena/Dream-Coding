const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');
const form = document.querySelector('.new_form');

// submit은 브라우저를 자동 재실행 시켜 리스트에서 사라짐
form.addEventListener('submit', (event) => {
  event.preventDefault(); // 브라우저의 자동 재실행을 막아줌
  onAdd();
})

function onAdd() {
  const text = input.value;
  if(text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({block: 'center'});
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

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});