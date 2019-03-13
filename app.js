 function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // delete button
    deleteButton.innerHTML = "Delete"
    deleteButton.class = "delete"

    deleteButton.addEventListener(`click`, () => {
      event.preventDefault(); 
      // console.log("clicked on button!")
      // console.log(newLi);
      newLi.remove(); 
    })
    
    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox)
    newLi.appendChild(deleteButton);


    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';    

  });

 }

window.onload = function() {
   // alert("The window has loaded!");
  onReady();

 };
