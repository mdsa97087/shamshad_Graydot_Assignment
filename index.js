const dropContainer = document.getElementById('dropContainer');
const dragItems = document.querySelectorAll('.imageDiv');



// Add event listeners to each drag item
dragItems.forEach(item => {
      item.addEventListener('dragstart', dragStart);
    });


    // Add event listeners to the drop container
dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('dragenter', dragEnter);
dropContainer.addEventListener('dragleave', dragLeave);
dropContainer.addEventListener('drop', drop);


let draggedItem = null;

function dragStart(event) {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  dropContainer.classList.add('active');
}

function dragLeave() {
  dropContainer.classList.remove('active');
}

function drop() {
  dropContainer.classList.remove('active');
  this.append(draggedItem);
  draggedItem.classList.remove('dragging');
  showMessage('Item dropped!');
  draggedItem = null;
}



function showMessage(message) {
  const messageContainer = document.createElement('div');
  messageContainer.textContent = message;
  dropContainer.appendChild(messageContainer);
}



// Add event listener to the reset button
resetButton.addEventListener('click', reset);

function reset() {
      dropContainer.innerHTML = 'Drop items here';
      draggedItem = null;
      showMessage('');
    }