function onReady() {
  var toDos = [];
  const addTodoForm = document.getElementById('addToDoForm');
  let id = 0;

  // create delete button
  let deleteButton = document.createElement('button')
  deleteButton.textContent = "Delete";


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }

    id++;

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      // create delete button
      let deleteButton = document.createElement('button')
      deleteButton.textContent = "Delete";

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      // listener to delete button
      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(function(el) {
         return el.id !== toDo.id;
        });
        renderTheUI();
      });

    });

    addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
    });
  };


  renderTheUI();
}


window.onload = function() {
  onReady();
};
