const dropContainer = document.getElementById("dropContainer");
const dragItems = document.querySelectorAll(".imageDiv");

// Add event listeners to each drag item
dragItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

// Add event listeners to the drop container
dropContainer.addEventListener("dragover", dragOver);
dropContainer.addEventListener("dragenter", dragEnter);
dropContainer.addEventListener("dragleave", dragLeave);
dropContainer.addEventListener("drop", drop);

let draggedItem = null;

function dragStart(event) {
  draggedItem = this;
  this.classList.add("dragging");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  dropContainer.classList.add("active");
}

function dragLeave() {
  dropContainer.classList.remove("active");
}

function drop() {
  // dropContainer.classList.remove('active');
  this.append(draggedItem);
  draggedItem.classList.remove("dragging");
  alert("Item dropped!");
  // draggedItem = null;
}

// function showMessage(message) {
//   const messageContainer = document.createElement('div');
//   messageContainer.textContent = message;
//   dropContainer.appendChild(messageContainer);
// }

function reset() {
  dropContainer.innerHTML = "";
  // dropContainer.innerHTML = 'Drop items here';
  // showMessage('');
}

//     Reverse Item From Second Div

const dragContainer = document.getElementById("dragContainer");
const dragItems2 = document.querySelectorAll(".imageDiv");

// Add event listeners to each drag item
dragItems2.forEach((item) => {
  item.addEventListener("dragstart", dragStart2);
});

// Add event listeners to the drop container
dragContainer.addEventListener("dragover", dragOver2);
dragContainer.addEventListener("dragenter", dragEnter2);
dragContainer.addEventListener("dragleave", dragLeave2);
dragContainer.addEventListener("drop", drop2);

let draggedItem2 = null;

function dragStart2(event) {
  draggedItem2 = this;
  this.classList.add("dragging");
}

function dragOver2(event) {
  event.preventDefault();
}

function dragEnter2(event) {
  event.preventDefault();
  dragContainer.classList.add("active");
}

function dragLeave2() {
  dragContainer.classList.remove("active");
}

function drop2() {
  dragContainer.classList.remove("active");
  this.append(draggedItem2);
  draggedItem2.classList.remove("dragging");
}

