/*
    #This is to handle inputs from table body. 
        -Data will be stored in 2-Dimentional Array in local storage
        -First row of array represents a week.
        -Second row of array represents each To-do element of the day.
        -Local storage will be updated on every change of the array.
        -To-do element is an object contains keys: id, text
        -To-do element will be appended to sibling ul of each form element
            as a child li element, along with a delete button.
    
*/

// Variables
const SAVE_KEY = "weekTodo"
const todoTable = document.getElementById("todoTable");
const todoInputs = document.querySelectorAll("#todoTable input");
const todoForms = document.querySelectorAll("#todoTable form");

let weekArray = [[], [], [], [], [], [], []];

// Functions
// To update current array in local storage
function updateData(){
    localStorage.setItem(SAVE_KEY, JSON.stringify(weekArray));
}

// To remove li from its parent ul, 
// filter the current array and update the new array in local storage
function deleteTodo(deleteBtnEvent){
    const listItemObject = deleteBtnEvent.path[2];
    const parentIndex = deleteBtnEvent.path[4].cellIndex;
    //filter and replace it to a new array
    weekArray[parentIndex] = weekArray[parentIndex].filter((toDoObject) => 
        toDoObject.id !== parseInt(listItemObject.id));
    //updte in local storage
    updateData();

    //remove li from ul
    listItemObject.remove();

}
// To add a To-do element in ul
function addTodo(newTodoObject, targetDay){
    const todoListItem = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoListItem.id = newTodoObject.id;
    todoText.innerText = newTodoObject.text;
    deleteBtn.innerHTML = `<i class="fa-solid fa-skull"></i>`

    todoListItem.appendChild(deleteBtn);
    todoListItem.appendChild(todoText);

    const tableTd = document.querySelector(`#todoTable td:nth-child(${targetDay + 1})`);
    const todoList = tableTd.querySelector("ul");
    todoList.appendChild(todoListItem);

    deleteBtn.addEventListener("click", deleteTodo);

}

//To handle form submition
function onTodoElementSubmit (submitEvent){
    submitEvent.preventDefault();
    const inputValue = submitEvent.target[0].value;
    submitEvent.target[0].value = "";

    const newTodoObject = {
        id: Date.now(),
        text: inputValue
    }
    const targetDay = submitEvent.target.parentElement.cellIndex;
    weekArray[targetDay].push(newTodoObject);
    addTodo(newTodoObject, targetDay);
    updateData();
}

todoForms.forEach(form => form.addEventListener("submit", onTodoElementSubmit));

const savedWeekArray = localStorage.getItem(SAVE_KEY);

// Check if local storage is not empty
if(savedWeekArray !== null){
    const parsedWeekArray = JSON.parse(savedWeekArray);
    //reload saved todos each week
    weekArray = parsedWeekArray;
    for(i = 0; i < weekArray.length; i++){
        weekArray[i].forEach(todo => addTodo(todo, i));
    }
}

