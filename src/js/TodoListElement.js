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
      let div = c.div(`container-${field[1].id}`);
      div.append(field[0], field[1]);
      // add label and the input element of each field.
      form.append(div);
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
    let buttonSection;

    buttonSection = c.div("form-buttons");

    okButton = c.button("Create Task", "form-button");
    cancelButton = c.button("Close", "form-button");

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
    
    buttonSection.append(okButton, cancelButton);
    form.append(buttonSection);

    return form;
  }

  static _displayEditTaskForm(e) {
    // pop up an edit form that looks like the addtask form.
    let existingTaskId = +e.currentTarget.parentNode.id.split("task-")[1];

    let form = document.createElement("form");
    form.id = "edit-task-form";

    // if add form open close that form up.
    document.querySelector("#display-ask-form-button").classList.remove("no-display");
    let addForm = document.querySelector("#add-task-form");
    if (addForm != null) {
      console.log("Closing add form...");
      document.querySelector("#add-task-form").remove();
    }
    // Had to implement this since the append call
    // doesn't seem to be able to remove
    // a duplicate form...?
    if (document.querySelector(`#${form.id}`) !== null) {
      document.querySelector(`#${form.id}`).remove();
    }

    form = TodoListElement._generateTaskFormFields(form, existingTaskId);
    form = TodoListElement._generateTaskFormButtons(form, existingTaskId);

    e.currentTarget.parentNode.append(form);
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
    // remove the form after we've finished using it.
    taskView.querySelector("#edit-task-form").remove();
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

    let taskInformationArea = c.div("task-information");
    let taskDragArea = c.div("task-move");
    let taskControlArea = c.div("task-controls");

    taskView.id = "task-" + task.id;
    let header = c.heading(task.title, 2, "task-view-title");
    let createDate = c.paragraph(format(task.id, "'Added' MM/dd/yyyy"), "task-view-create-date"); //c.paragraph();
    let dueDate = c.paragraph(task.dueDate, "task-view-due-date"); //format(task.dueDate, "'Due' MM/dd/yyyy"), "task-view-due-date");
    let priority = c.paragraph(task.priority, "task-view-priority");
    let description = c.paragraph(task.description, "task-view-description");

    taskInformationArea.append(header, createDate, dueDate, priority, description);
    
    let finishButton = c.button("", "task-view-finish-button");
    let finishIcon = c.faIcon("fas", "fa-check-square");
    finishButton.append(finishIcon, "Finish");
    
    let editButton = c.button("", "task-view-edit-button");
    let editIcon = c.faIcon("fas", "fa-edit");
    editButton.append(editIcon, "Edit");

    let deleteButton = c.button("", "task-view-delete-button");
    let deleteIcon = c.faIcon("fas", "fa-trash-alt");
    deleteButton.append(deleteIcon, "Delete");

    taskControlArea.append(finishButton, editButton, deleteButton);

    finishButton.addEventListener("click", TodoListElement._completeTask);
    editButton.addEventListener("click", TodoListElement._displayEditTaskForm);
    deleteButton.addEventListener("click", TodoListElement._deleteTask);

    let dragButton = c.button("", "task-view-drag-button");
    let dragIcon = c.faIcon("fas", "fa-grip-vertical");
    dragButton.append(dragIcon);

    taskDragArea.append(dragButton);

    if (task.completed) {
      taskDragArea.firstChild.remove();
      taskView.append(taskDragArea, taskInformationArea);
      document.querySelector("#tasks-completed").append(taskView);
    } else {
      taskView.append(taskDragArea, taskInformationArea, taskControlArea);
      document.querySelector(parentSelector).append(taskView);

      dragButton.addEventListener("mousedown", () => {
        taskView.setAttribute("draggable", "true");
      });

      dragButton.addEventListener("mouseup", () => {
        taskView.removeAttribute("draggable");
      });

      taskView.classList.add("draggable");
      TodoListElement._applyDragCapabilities();
    }
  }

  static _applyDragCapabilities() {
    let draggables = document.querySelectorAll(".draggable");
    let container = document.querySelector("#tasks-active");

    draggables.forEach(draggable => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    })

    container.addEventListener('dragover', (e) => {
      // dragover: fired when an element or text selection
      // is being dragged over a valid drop target 
      // use e.preventDefault() -- prevent default behavior that is 
      // not explicitly handled, which, in this case, is dragging.
      e.preventDefault();

      const afterElement = getDragAfterElement(e.clientY);
      const activeDraggable = document.querySelector(".dragging");
      
      // if afterElement is null, we're at the bottom fo the list
      if (afterElement === null) {
        container.append(activeDraggable); 
      } else {
      // else our mouse is hovering above an element, so insert before it.
        container.insertBefore(activeDraggable, afterElement);
      }
    });

    function getDragAfterElement(mouseY) {
      // get all elements not being dragged.
      const inactiveDraggables = Array.from(container.
          querySelectorAll(".draggable:not(.dragging)"));

      // reduce() call, which will find us the element that is 
      // after the mouse cursor based on the y position we pass in.
      // we just need to figure out the offset of the cursor
      // against the element after it.
      return inactiveDraggables.reduce((closestElem, elem) => {
        // getBoundingClientRect:
        // returns a DOMRect object providing information
        // about the size of an element and its position relative
        // to the viewport.
        // we get the size of the task (width + height)
        // and then its position rel to the viewport (top and left)
        const box = elem.getBoundingClientRect();
        // distance from center of box to our mouse.
        const offset = mouseY - box.top - (box.height / 2);
        //console.log(offset);
        if (offset > closestElem.offset && offset < 0) {
          // return a new 'closestElem' if this elem offset is 
          // greater than the other (it's closer than any
          // other element in the array) and the offset
          // is less than 0 (the mouse is above the element)
          return {offset: offset, element: elem};
        } else {
          return closestElem; // maintain closestElem as closest.
        }
       }, {offset: Number.NEGATIVE_INFINITY}).element;
      // offset is infinity so that we have an element that can be returned
      // every single element is going to be closer than the INFINITY.
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
  }

  static _deleteTask(e) {
    let taskView = e.currentTarget.parentNode;
    let taskId = +taskView.id.split("task-")[1];
    let taskTitle = taskView.querySelector(".task-view-title").textContent;

    const removeTask = (e) => {
      // remove the view
      taskView.remove();
      // remove the task from the storage.
      connection.remove(taskId);

      console.log("Task deleted successfully.");
      document.querySelector("#prompt-wrapper").remove();
    }

    let removePrompt = c.confirmModal(
        "add-tasks-delete-dialog",
        "Delete Task",
        `Are you sure you want to delete ${taskTitle.trim()}?`,
        "Delete",
        "Cancel",
        removeTask,
        null
    );

    document.querySelector(".content").append(removePrompt);
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
// 5. The ability to modify tasks.
// 6. The ability to drag and reorder tasks.
//7. The ability to delete tasks. 
// 8. Time to add the sidebar.
09. The add form css, looks hella despicable
10. Category input
11. Search bar (search title and description, show relevant results).
12. Straighten up the navbar.
Work on the media query for it on 82 of index.js


9. A global class containing constants 
referring to IDs associated with the GUI 
elements.


Backburner:
- Categories
- Navbar area
- UI
*/