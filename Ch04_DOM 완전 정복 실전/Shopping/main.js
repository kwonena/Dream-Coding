const plus = document.querySelector("#plusBtn");

function inputText() {
  let text = document.querySelector("#textBox").value;
  // div에 리스트 추가
  let div = document.createElement("div", "listText");
  const listBox = document.querySelector(".listBox");
  // li.setAttribute('class', 'list');
  // li.innerText = text;
  // ul.appendChild(li);
  div.innerHTML = `
            <span class="list">
            ${text}<img src="./img/delete.png"
            onmouseover="this.src='./img/remove.png'"
            onmouseout="this.src='./img/delete.png'"
            class="trash" onclick="removeList();">
            </span>
        `;
  listBox.appendChild(div);
  document.querySelector("#textBox").value = "";
}

plus.addEventListener("click", () => {
  inputText();
});

function pressEnter() {
  if (window.event.keyCode == 13) inputText();
}
function removeList() {
  let list = document.querySelector(".list");
  list.remove();
}
