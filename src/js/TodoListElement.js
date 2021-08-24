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
    addTask.append(c.faIcon("fas", "fa-plus"));
    addTask.append(c.span("Click here to add task..."));

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

    let p = priority;

    let titleField = c.formInput("Title", "text", "task-title", "title");
    let priorityField = c.dropdown("Priority", "priority", "task-priority", ...Object.keys(p));
    let descriptionField = c.textArea("Description", "description", "task-description");
    let categoryField = c.formInput("Category", "text", "task-categories", "categories");
    
    let allFields = [titleField, priorityField, descriptionField, categoryField];

    for (let field of allFields) {
      // add label and the input element of each field.
      form.append(field[0], field[1]);
    }
    
    return form;

  }
}

// TODO LIST
/*
1. Build the add form for the note list.
  a. Use the enumerable properties to determine the type of input to be added.
  b. Use the components library to generate an input and label.
  c. return a form from addTaskForm
2. Work on the C(reate) part of the app.

To be done:
- Local storage save
- Modify and Update
- UI shit
*/