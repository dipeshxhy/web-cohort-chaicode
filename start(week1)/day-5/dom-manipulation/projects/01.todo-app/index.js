const todoInput = document.querySelector("#todo-input");
const todoAddBtn = document.querySelector("#todo-add-btn");
const todoError = document.querySelector("#todo-error");
const todoItems = document.querySelector(".todo-items");
const todoLi = document.querySelector("li");

const resetBtn = document.querySelector("#reset-btn");

todoAddBtn.addEventListener("click", () => {
  console.log(todoInput.value);
  if (!todoInput.value) {
    todoError.innerHTML = "Please, add todo ! ";
  } else {
    // createDiv(todoInput.value);
    // createCrossBtn();
    todoError.innerHTML = "";
    addTodo(todoInput.value);
  }
});
// hello world

resetBtn.addEventListener("click", () => {
  todoItems.innerHTML = "";

  todoError.innerHTML = "All todos cleared!";

  setTimeout(() => {
    todoError.innerHTML = "";
  }, 2000);
});
function addTodo(todo) {
  todoInput.value = "";
  const liElem = document.createElement("li");
  liElem.innerText = todo;
  todoItems.append(liElem);
  todoInput.focus();

  const cross = createCrossBtn();
  cross.classList.add("cross");

  liElem.appendChild(cross);
  liElem.classList.add("todo-list");

  cross.addEventListener("click", () => {
    liElem.remove();
  });
}

function createCrossBtn() {
  const cross = document.createElement("button");
  cross.innerText = "X";
  cross.classList.add("todo-button");
  return cross;
}
function createResetBtn() {
  const reset = document.createElement("button");
  reset.innerText = "Reset Todos";
  reset.classList.add("todo-button");
  return reset;
}
