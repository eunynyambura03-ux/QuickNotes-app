// QuickNotes - main script

// ----- Select elements -----
const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

const MAX_LENGTH = 200;

// ----- Data: array of note objects { id, text, category, createdAt } -----
let notes = [];

// ----- Helpers -----
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = "You have " + notes.length + " notes.";
  }
}

function createNoteElement(note) {
  const li = document.createElement("li");
  li.className = "note category-" + note.category;

  const text = document.createElement("p");
  text.className = "note-text";
  text.textContent = note.text;

  const meta = document.createElement("div");
  meta.className = "note-meta";

  const label = document.createElement("span");
  label.className = "category-label";
  label.textContent = capitalize(note.category);

  const date = document.createElement("span");
  date.textContent = note.createdAt;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteNote(note.id);
  });

  meta.append(label, date, deleteButton);
  li.append(text, meta);
  return li;
}

// ----- Render: rebuild the list from the array -----
function render() {
  notesList.textContent = "";

  const visible = notes;

  visible.forEach(function (note) {
    notesList.appendChild(createNoteElement(note));
  });

  updateCount();
}

// ----- Add -----
function addNote(text, category) {
  const note = {
    id: Date.now(),
    text: text,
    category: category,
    createdAt: new Date().toLocaleString()
  };
  notes.push(note);
  render();
}

// ----- Delete -----
function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });
  render();
}

// ----- Events -----
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = noteInput.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }
  if (text.length > MAX_LENGTH) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";
  addNote(text, categorySelect.value);
  noteInput.value = "";
  noteInput.focus();
});


// Initial render
render();
