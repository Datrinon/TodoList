import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import {Component} from "./component.js";
import {Task} from "./task.js";
import priority from "./priority.js";
const c = new Component();

/**
 * A class containing GUI elements that would be used inside of a To-Do List App.
 */
export class TodoListElement {
  constructor() {

  }

  /**
   * Initializes an add button, which can be used to create tasks.
   */
  static addTaskButton(){
    const addTask = c.button("");
    addTask.id = "display-ask-form-button";
    addTask.append(c.faIcon("fas", "fa-plus"));
    addTask.append(c.span("Click here to add task..."));

    addTask.addEventListener("click", (e) => {
      e.currentTarget.parentNode.append(TodoListElement.addTaskForm());
      addTask.classList.add("no-display");
    });

    return addTask;
  }

  /**
   * A generic add form for a Task.
   * @returns form - form element with Task attributes.
   */
  static addTaskForm() {
    // Enumerate through the properties of a Task object, and then use that
    // to create inputs based on the type.
    const form = document.createElement("form");
    form.id = "add-task-form";

    let p = priority; // calling priority by itself was undefined earlier. 
    // Maybe something to do with export behavior and lexical environment?

    let titleField = c.formInput("Title", "text", "task-title", "title");
    let priorityField = c.dropdown("Priority", "priority", "task-priority", ...Object.keys(p));
    let descriptionField = c.textArea("Description", "description", "task-description");
    let categoryField = c.formInput("Category", "text", "task-categories", "categories");
    
    let allFields = [titleField, priorityField, descriptionField, categoryField];

    for (let field of allFields) {
      // add label and the input element of each field.
      form.append(field[0], field[1]);
    }

    let okButton = c.button("Create Task");
    okButton.id = "add-task-submit";
    let cancelButton = c.button("Cancel");
    cancelButton.id = "add-task-cancel";
    
    okButton.setAttribute("type", "button");
    okButton.setAttribute("disabled", "");
    okButton.setAttribute("autocomplete", "off");
    
    cancelButton.setAttribute("type", "button");
    cancelButton.addEventListener("click", () => {
      TodoListElement.closeForm();
    });

    // add event listeners here for title
    titleField[1].addEventListener("input", (e) => {
      if (e.currentTarget.value !== "") {
        document.querySelector("#add-task-submit").removeAttribute("disabled");
      } else {
        document.querySelector("#add-task-submit").setAttribute("disabled", "");
      }
    });

    form.append(okButton, cancelButton);

    okButton.addEventListener("click", TodoListElement.addTask);
    
    return form;
  }

  static addTask() {
    let task = TodoListElement._parseFormFields();

    document.querySelector("#add-task-submit").setAttribute("disabled", "");
    document.querySelectorAll("input[id^=task-]").forEach(input => {
      input.value = "";
    });

    TodoListElement.addTaskToView(task, ".main");
  }

  static _parseFormFields() {
    let task = new Task();
    task.title = document.querySelector("#task-title").value;
    task.priority = document.querySelector("#task-priority").value;
    task.description = document.querySelector("#task-description").value;
    // TODO change the categories input later right here because it's going to be like 
    // a tag implementation instead of just a simple text field.
    task.categories = document.querySelector("#task-categories").value;

    return task;
  }


  static closeForm() {
    document.querySelector("#add-task-form").remove();
    document.querySelector("#display-ask-form-button").classList.remove("no-display");
  }

  static addTaskToView(task, parent) {
    let taskView = c.div("task");
    let header = c.heading(task.title, "task-view-title");
    let date = c.paragraph(format(task.createDate, "MM/dd/yyyy"), "task-view-date"); //c.paragraph();
    let priority = c.paragraph(task.priority, "task-view-title");
    let description = c.paragraph(task.description, "task-view-description");

    taskView.append(header, priority, description, date);

    document.querySelector(parent).append(taskView);
  }
}

// TODO LIST
/*
// 1. Build the add form for the note list.
//   a. Use the enumerable properties to determine the type of input to be added.
//   b. Use the components library to generate an input and label.
//   c. return a form from addTaskForm
2. Work on the C(reate) part of the app.
I fill... out the form. The form sends data someway. Let's see if we can do it
without query selectors.



To be done:
- Local storage save
- Modify and Update
- UI s
*/