
window.onload=function(){
  



//selectors - variables what we need to use start with variables


const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".to-do-list");


// event and listeners

todoButton.addEventListener("click", addTodo); // addTodo is a function name
todoList.addEventListener("click", deleteCheck);
todoList.addEventListener("click", complete);

//functions



function addTodo(event){

  // prevent from submitting 
 
  
event.preventDefault();

// new DIV

const toDoDiv = document.createElement("div");
toDoDiv.classList.add("todo");


// new LI

const newJob = document.createElement("li");

newJob.innerText = todoInput.value;
newJob.classList.add("to-do-item");

toDoDiv.appendChild(newJob);

// new button 

const completedButton = document.createElement("button");
completedButton.innerHTML = '<i>OK<i/>';
completedButton.classList.add("completed-button");

toDoDiv.appendChild(completedButton);

// new trash button

const trashButton = document.createElement("button");
trashButton.innerHTML = '<i>Bin<i/>';
trashButton.classList.add("trash-button");

toDoDiv.appendChild(trashButton);

//append to main list

todoList.appendChild(toDoDiv);

// clear input value

todoInput.value = "";


}


function deleteCheck(e){
  const item = e.target;

  if (item.classList[0] === "trash-button")
  {
    const todo = item.parentElement;
    todo.remove();
  }

}

function complete(e){

const  item = e.target;

if (item.classList[0] === "completed-button"){


  const done = item.parentElement;
  done.classList.add("complete");

}

}


  
  

}




