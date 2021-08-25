import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import {Component} from "./component.js";
import {Task} from "./task.js";
import priority from "./priority.js";
import connection from "./TodoListConnection.js";
const c = new Component();

/**
 * A class containing GUI elements that would be used inside of a To-Do List App.
 * Such GUI elements have their functionalities incorporated here.
 */
export class TodoListElement {

  static connection = connection;
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
    let dueDateField = c.formInput("Due Date", "date", "task-dueDate", "dueDate");
    
    let allFields = [titleField, priorityField, descriptionField,
        dueDateField, categoryField];

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

    okButton.addEventListener("click", TodoListElement._handleSubmission);
    
    return form;
  }

  static _handleSubmission() {
    let task = TodoListElement._parseFormFields();

    document.querySelector("#add-task-submit").setAttribute("disabled", "");
    document.querySelectorAll("#add-task-form input[id^=task-], #add-task-form textarea")
        .forEach(input => {
          input.value = "";
        });

    TodoListElement.addTaskToView(task, "#tasks-active");
    
    TodoListElement.connection.add(task);
  }

  static _parseFormFields() {
    let task = new Task();
    task.title = document.querySelector("#task-title").value;
    task.priority = document.querySelector("#task-priority").value;
    task.description = document.querySelector("#task-description").value;
    task.dueDate = document.querySelector("#task-dueDate").value;
    // TODO change the categories input later right here because it's going to be like 
    // a tag implementation instead of just a simple text field.
    task.categories = document.querySelector("#task-categories").value;

    return task;
  }


  static closeForm() {
    document.querySelector("#add-task-form").remove();
    document.querySelector("#display-ask-form-button").classList.remove("no-display");
  }

  static addTaskToView(task, parentSelector) {
    let taskView = c.div("task");
    taskView.id = "task-" + task.id;
    let header = c.heading(task.title, 2, "task-view-title");
    let createDate = c.paragraph(format(task.id, "'Added' MM/dd/yyyy"), "task-view-create-date"); //c.paragraph();
    let dueDate = c.paragraph(task.dueDate, "task-view-due-date"); //format(task.dueDate, "'Due' MM/dd/yyyy"), "task-view-due-date");
    let priority = c.paragraph(task.priority, "task-view-title");
    let description = c.paragraph(task.description, "task-view-description");
    let finishButton = c.button("Complete", "task-view-finish-button");

    finishButton.addEventListener("click", TodoListElement._completeTask);

    taskView.append(header, priority, description, createDate, dueDate);
    if (task.completed) {
      document.querySelector("#tasks-completed").append(taskView);
    } else {
      taskView.append(finishButton);
      document.querySelector(parentSelector).append(taskView);
    }
  }

  static _completeTask(e) {
    let taskView = e.currentTarget.parentNode;
    let id = +taskView.id.split("task-")[1];

    // Mark the task as completed
    let task = TodoListElement.connection.getItemById(id);
    task.completed = true;
    // update the storage array.
    TodoListElement.connection.update(task);
    
    // Remove the finish button from taskview
    taskView.querySelector(".task-view-finish-button").remove();

    // Add the task to the completed view.
    // I know that append will not duplicate elements since
    // "if the given child is a reference to an existing node in the document,
    // appendChild() moves it from its current position to the new position."
    document.querySelector("#tasks-completed").append(taskView);

    ///// TODO Add a completed section.
    
  }
}

// TODO LIST
/*
// 1. Build the add form for the note list.
//   a. Use the enumerable properties to determine the type of input to be added.
//   b. Use the components library to generate an input and label.
//   c. return a form from addTaskForm
// 2. Work on the C(reate) part of the app.
3. Local Storage
4. Complete Button


To be done:
- Local storage save
- Modify and Update
- UI s
*/