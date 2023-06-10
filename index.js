const dropContainer = document.getElementById("dropContainer");
const dragContainer = document.getElementById("dragContainer");
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

let draggedItem ;
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
  this.append(draggedItem);
  draggedItem.classList.remove("dragging");
  alert("Item dropped!");
}


function reset() {
  dropContainer.innerHTML = "";
  dragContainer.append(draggedItem);  
}

