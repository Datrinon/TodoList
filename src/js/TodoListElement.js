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
   * Generates fields for the form based on the task attributes.
   * @param {} form - The form to add fields on.
   * @return form = The form with fields now added onto it.
   */
  static _generateTaskFormFields(form, existingTaskId = null) {
    let OKButtonId;
    if (existingTaskId != null) {
      OKButtonId = "#update-task-submit";
    } else {
      OKButtonId = "#add-task-submit";
    }
    
    let p = priority; // calling priority by itself was undefined earlier. 
    // Maybe something to do with export behavior and lexical environment?
    // After using connection in index, it seems that it has to do with the fact
    // is in a class?

    let titleField = c.formInput("Title", "text", "task-title", "title");
    // add event listeners here for title
    titleField[1].addEventListener("input", (e) => {
      if (e.currentTarget.value === "" || e.currentTarget.value === null) {
        document.querySelector(OKButtonId).setAttribute("disabled", "");
      } else {
        document.querySelector(OKButtonId).removeAttribute("disabled");
      }
    });

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

    if (existingTaskId !== null) {
      let taskView = document.querySelector(`#task-${existingTaskId}`);
      let task = connection.getItemById(existingTaskId);
      titleField[1].value = task.title;
      //priorityField[1].value = task.priority;
      taskView.querySelectorAll('[name="priority"] > option').forEach(elem => {
        if (elem.value === task.priority) {
          elem.setAttribute("selected", "true");
        }
      });

      // categoryField[1].value = task // TODO fill out category field
      descriptionField[1].value = task.description;
      dueDateField[1].value = task.dueDate;
    }


    return form;
  }

  static _generateTaskFormButtons(form, existingTaskId = null) {
    let okButton;
    let cancelButton;

    okButton = c.button("Create Task");
    cancelButton = c.button("Close");

    okButton.setAttribute("type", "button");
    okButton.setAttribute("disabled", "");
    okButton.setAttribute("autocomplete", "off");

    cancelButton.setAttribute("type", "button");
    cancelButton.addEventListener("click", TodoListElement._closeForm);

    cancelButton.id = "add-task-cancel";
    if (existingTaskId === null) {
      okButton.id = "add-task-submit";
      
      okButton.addEventListener("click", TodoListElement._handleAddTask);
    } else {
      okButton.textContent = "Update";
      okButton.id = "update-task-submit";
      okButton.removeAttribute("disabled");
      okButton.addEventListener("click", (e) => {
        TodoListElement._handleUpdateTask(existingTaskId);
      });
    }
    
    form.append(okButton, cancelButton);

    return form;
  }

  static _editTaskForm(e) {
    console.log("Calling");
    // pop up an addtask form that looks like the addtask form.
    let existingTaskId = +e.currentTarget.parentNode.id.split("task-")[1];

    let form = document.createElement("form");
    form.id = "edit-task-form";

    form = TodoListElement._generateTaskFormFields(form, existingTaskId);
    form = TodoListElement._generateTaskFormButtons(form, existingTaskId);

    e.currentTarget.parentNode.append(form);

    // if add form open close that thing up.
    document.querySelector("#display-ask-form-button").classList.remove("no-display");
    let addForm = document.querySelector("#add-task-form");
    if (addForm != null) {
      document.querySelector("#add-task-form").remove();
    }
  }


  /**
   * A generic add form for a Task.
   * @returns form - form element with Task attributes.
   */
  static addTaskForm() {
    // Enumerate through the properties of a Task object, and then use that
    // to create inputs based on the type.
    let form = document.createElement("form");
    form.id = "add-task-form";

    form = TodoListElement._generateTaskFormFields(form);
    form = TodoListElement._generateTaskFormButtons(form);
    
    return form;
  }

  static _handleUpdateTask(taskId) {
    let task = TodoListElement._parseFormFields();
    task.id = taskId;

    connection.update(task);

    let taskView = document.querySelector(`#task-${taskId}`);

    taskView.querySelector(".task-view-title").textContent = task.title;
    taskView.querySelector(".task-view-priority").textContent = task.priority;
    taskView.querySelector(".task-view-description").textContent = task.description;
    taskView.querySelector(".task-view-create-date").textContent = format(task.id, "'Added' MM/dd/yyyy");
    taskView.querySelector(".task-view-due-date").textContent = task.dueDate;
    // TODO add category field
    // TODO fix due date field
    // TODO show task updated message somewhere.    
    console.log("Task updated successfully.");
  }

  static _handleAddTask() {
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


  static _closeForm(e) {
    let id = e.currentTarget.parentNode.id;
    e.currentTarget.parentNode.remove();

    //document.querySelector("#add-task-form").remove();
    if (id === "add-task-form") {
      document.querySelector("#display-ask-form-button").classList.remove("no-display");
    } 
  }

  static addTaskToView(task, parentSelector) {
    let taskView = c.div("task");
    taskView.id = "task-" + task.id;
    let header = c.heading(task.title, 2, "task-view-title");
    let createDate = c.paragraph(format(task.id, "'Added' MM/dd/yyyy"), "task-view-create-date"); //c.paragraph();
    let dueDate = c.paragraph(task.dueDate, "task-view-due-date"); //format(task.dueDate, "'Due' MM/dd/yyyy"), "task-view-due-date");
    let priority = c.paragraph(task.priority, "task-view-priority");
    let description = c.paragraph(task.description, "task-view-description");
    let finishButton = c.button("Complete", "task-view-finish-button");
    let editButton = c.button("Edit", "task-view-edit-button");

    finishButton.addEventListener("click", TodoListElement._completeTask);
    editButton.addEventListener("click", TodoListElement._editTaskForm);

    taskView.append(header, priority, description, createDate, dueDate);
    if (task.completed) {
      document.querySelector("#tasks-completed").append(taskView);
    } else {
      taskView.append(finishButton, editButton);
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
// 3. Local Storage
// 4. Complete Button
5. The ability to modify tasks.
6. A global class containing constants


Backburner:
- Categories
- Navbar area
- UI
*/