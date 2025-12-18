import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleTodo);
  const todoElement = todo.getView();
  return todoElement;
};

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleTodo(todoElement) {
  todoCounter.updateTotal(todoElement);
}

const section = new Section({
  items: initialTodos,
  renderer: (data) => {
    const todo = generateTodo(data);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    if (!addTodoForm.checkValidity()) {
      return;
    }

    const name = inputValues.name;
    const dateInput = inputValues.date;
    const id = uuidv4();

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const values = { name, date, id };

    const todo = generateTodo(values);
    section.addItem(todo);
    handleTodo(true);
    addTodoPopup.close();
    newTodoValidator.resetValidation();
  },
});
addTodoPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
