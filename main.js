const inputElemet = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");
const notes = [
  {
    title: "преэкт ютуб",
    complite: false,
  },
  { title: "создать ютуб канал на программированию", complite: false },
  { title: "качекственные ролики", complite: true },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p>Нет заметок</p>";
  
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML(
      "beforeend",
      getNoteTemplate(notes[i], i)
    );
  }
}

render();

createBtn.onclick = function () {
  if (inputElemet.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElemet.value,
    complite: false,
  };

  notes.push(newNote);
  render();
  inputElemet.value = "";
};

listElement.onclick = function (e) {
  if (e.target.dataset.index) {
    const index = Number(e.target.dataset.index);
    const type = e.target.dataset.type;

    if (type === "toggle") {
      notes[index].complite = !notes[index].complite
    }else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
}


function getNoteTemplate(note, index) {
  return ` <li
  class=" mb-1 rounded  list-group-item d-flex justify-content-between align-items-center"
  >
  <span class="${note.complite ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
  <span>
    <span class="btn btn-small btn-${
      note.complite ? "warning" : "success"
    }"data-index="${index}" data-type="toggle">&check;</span>
    <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
  </span>
  </li>`;
}
