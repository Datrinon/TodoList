import Tagify from '@yaireo/tagify';
import { compareAsc, format, isPast,
  isSameDay, nextSunday, getMonth,
  formatRelative, parseISO, subDays, isToday} from 'date-fns'
import {Component} from "./component.js";
import {Task} from "./task.js";
import priority from "./priority.js";
import connection from "./TodoListStorage.js";
import {sidebar, TodoListSidebar} from "./TodoListSidebar.js";
const c = new Component();

/**
 * A class containing GUI elements that would be used inside of a To-Do List App.
 * Such GUI elements have their functionalities incorporated here.
 */
export class TodoListElement {

  static connection = connection;
  static p = priority;

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
      let editForm = document.querySelector("#edit-task-form");
      if (editForm !== null) {
        editForm.remove();
      }
      
      e.currentTarget.parentNode.append(TodoListElement.addTaskForm());

      let catInput = document.querySelector("#task-categories");
      new Tagify(catInput);

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

      // if (typeof task.categories === "string" && task.categories.length !== 0) {
      //   categoryField[1].value = JSON.parse(task.categories);  
      // } else {
      //   categoryField[1].value = task.categories;
      // }
      categoryField[1].value = JSON.stringify(task.categories);
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

    okButton = c.button("Add", "form-button");
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
    let taskView = e.currentTarget; 
    while(!taskView.id.includes("task-")) {
      taskView = taskView.parentNode;
    }

    // pop up an edit form that looks like the addtask form.
    let existingTaskId = +taskView.id.split("task-")[1];

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
    // a duplicate form... (edit form open on two posts)
    if (document.querySelector(`#${form.id}`) !== null) {
      document.querySelector(`#${form.id}`).remove();
    }

    form = TodoListElement._generateTaskFormFields(form, existingTaskId);
    form = TodoListElement._generateTaskFormButtons(form, existingTaskId);

    taskView.append(form);
    // TODO
    // and then disable the view of the element.
    // taskView.classList.add("form-active-task-no-display");

    let catInput = document.querySelector("#task-categories");
    new Tagify(catInput);
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
    TodoListElement._updateTaskOnView(task);

    document.querySelectorAll("#category-links > *").forEach(link => {
      link.remove();
    });
    sidebar.updateCategorySidebarListing();
  }

  static _updateTaskOnView(task) {
    let taskView = document.querySelector(`#task-${task.id}`);

    taskView.querySelector(".task-view-title").textContent = task.title;
    taskView.querySelector(".task-view-priority").textContent = task.priority;
    taskView.querySelector(".task-view-description").textContent = task.description;

    taskView.querySelector(".task-view-due-date").textContent =
        TodoListElement._getDateTextForTask(task, taskView);

    let categories = taskView.querySelector(".task-view-categories");
    TodoListElement._addCategoryViewToTaskView(categories, task);

    c.toast("Task updated successfully", 3);
    console.log("Task updated successfully.");
    // remove the form after we've finished using it.
    taskView.querySelector("#edit-task-form").remove();
  }

  static _addCategoryViewToTaskView(categoryDiv, task) {
    categoryDiv.textContent = "";
    if (task.categories.length !== 0){
      task.categories.forEach(elem => {
        let span = c.span(elem.value, "category-label");
        categoryDiv.append(span);
      });
    } else {
      categoryDiv.append(c.paragraph("No categories set."));
    }
  }

  /**
   * Takes a given task's date and uses it to create text for an element.
   * Will mark as overdue if the date is past the current day, or mark 
   * no due date if the task does not have a due date, hence it needing a 
   * reference to the task view.
   * 
   * @returns date
   */
  static _getDateTextForTask(task, taskView) {
    let dueDateMsg;
    if (task.dueDate === "") {
      dueDateMsg = "No Due Date";
    } else {
      if (typeof task.dueDate === 'string') {
        task.dueDate = parseISO(task.dueDate);
      }
      dueDateMsg = "Due " + format(task.dueDate, 'P');
      if (!isSameDay((task.dueDate), new Date()) && isPast(task.dueDate)) {
        taskView.classList.add("overdue");
        dueDateMsg = "(Overdue) " + dueDateMsg;
      } else {
        taskView.classList.remove("overdue");
      }
    }
    return dueDateMsg;
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

    document.querySelectorAll("#category-links > *").forEach(link => {
      link.remove();
    });
    sidebar.updateCategorySidebarListing();
  }

  static _parseFormFields() {
    let task = new Task();
    task.title = document.querySelector("#task-title").value;
    task.priority = document.querySelector("#task-priority").value;
    task.description = document.querySelector("#task-description").value;
    task.dueDate = document.querySelector("#task-dueDate").value;
    if (task.dueDate !== "") {
      task.dueDate = parseISO(task.dueDate);
    }
    
    let categories = document.querySelector("#task-categories").value;
    if (categories !== "") {
      categories = JSON.parse(categories);
    }

    categories = ([...new Set(categories)])
    task.categories = categories;

    return task;
  }


  static _closeForm(e) {
    let elem = e.currentTarget;
    while (!elem.id.includes("task-form")) {
      elem = elem.parentNode;
    }

    let id = elem.id;
    elem.remove();
    // display the button again if the form being closed is the add-task-form.
    if (id === "add-task-form") {
      document.querySelector("#display-ask-form-button").classList.remove("no-display");
    }
  }

  /**
   * Adds tasks to underneath a given parent container.
   * @param task - The task object to give.
   * @param parentSelector {string} - Rule to select a container.
   */
  static addTaskToView(task, parentSelector) {
    
    let taskView = c.div("task");

    let taskInformationArea = c.div("task-information");
    let taskDragArea = c.div("task-move");
    let taskControlArea = c.div("task-controls");

    // Information Section Begin
    taskView.id = "task-" + task.id;
    let header = c.heading(task.title, 2, "task-view-title");
    let createDate = c.paragraph(format(task.id, "'Added' MM/dd/yyyy"), "task-view-create-date"); //c.paragraph();

    let dueDate = c.paragraph("", "task-view-due-date");
    
    dueDate.textContent = TodoListElement._getDateTextForTask(task, taskView);

    let priority = c.paragraph("", "task-view-priority");
    priority.textContent = task.priority;

    let description = c.paragraph(task.description, "task-view-description");
    let categories = c.div("task-view-categories");
    TodoListElement._addCategoryViewToTaskView(categories, task);

    let generalInfo = c.div("general-info");
    let expandedInfo = c.div("expanded-info", "no-display");
    let expandButton = c.button("", "expand-task-button");
    let expandIcon = c.faIcon("fas", "fa-chevron-down");

    generalInfo.append(header, dueDate);
    expandedInfo.append(description, categories, priority, createDate);
    expandButton.append(expandIcon);
    
    expandButton.addEventListener("click", (e) => {
      e.currentTarget.querySelector("svg").classList.toggle("point-down");
      let task = e.currentTarget;
      while (!task.id.includes("task-")) {
        task = task.parentNode;
      }
      task.querySelector(".expanded-info").classList.toggle("no-display");
    })

    taskInformationArea.append(generalInfo, expandedInfo, expandButton);
    // Information Section End

    taskView.append(taskDragArea, taskInformationArea, taskControlArea);

    if (!task.completed) {
      TodoListElement._addControlsToTaskView(taskControlArea);
      TodoListElement._addDragControlToTaskView(taskView, taskDragArea);
      TodoListElement._applyTaskViewHoverFX(taskView);
    }

    document.querySelector(parentSelector).append(taskView);
  }

  static _addControlsToTaskView(taskControlArea) {
    let finishButton = c.button("", "task-view-finish-button");
    let finishIcon = c.faIcon("fas", "fa-check-square");
    finishButton.append(finishIcon, "Finish");
    
    let editButton = c.button("", "task-view-edit-button");
    let editIcon = c.faIcon("fas", "fa-edit");
    editButton.append(editIcon, "Edit");

    let deleteButton = c.button("", "task-view-delete-button");
    let deleteIcon = c.faIcon("fas", "fa-trash-alt");
    deleteButton.append(deleteIcon, "Delete");

    finishButton.addEventListener("click", TodoListElement._completeTask);
    editButton.addEventListener("click", TodoListElement._displayEditTaskForm);
    deleteButton.addEventListener("click", TodoListElement._deleteTask);

    taskControlArea.append(finishButton, editButton, deleteButton);
  }

  static _addDragControlToTaskView(taskView, taskDragArea) {
    let dragButton = c.button("", "task-view-drag-button");
    let dragIcon = c.faIcon("fas", "fa-grip-vertical");
    dragButton.append(dragIcon);

    taskDragArea.append(dragButton);

    dragButton.addEventListener("mousedown", () => {
      taskView.setAttribute("draggable", "true");
    });

    dragButton.addEventListener("mouseup", () => {
      taskView.removeAttribute("draggable");
    });

    taskView.classList.add("draggable");
    TodoListElement._applyDragCapabilities();
  }

  /**
   * Apply hover effects when hovering over the task.
   */
  static _applyTaskViewHoverFX(taskView) {
    let buttonsSelector = ".task-move > button, .task-controls > button";
    // Default state, all buttons are low opacity.
    taskView.querySelectorAll(buttonsSelector).forEach(btn => {
      console.log("adding low opacity");
      btn.classList.add("low-opacity");
    });
    
    // Apply hover capabilities, and that's when buttons are shown.
    taskView.onmouseover = (e) => {
      let taskView = e.currentTarget;
      while (!taskView.id.includes("task-")) {
        taskView = taskView.parentNode;
      }
      taskView.querySelectorAll(buttonsSelector).forEach(btn => {
        btn.classList.remove("low-opacity");
      });
    }
    taskView.onmouseout = (e) => {
      let taskView = e.currentTarget;
      while (!taskView.id.includes("task-")) {
        taskView = taskView.parentNode;
      }
      taskView.querySelectorAll(buttonsSelector).forEach(btn => {
        btn.classList.add("low-opacity");
      });
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
    let taskView = e.currentTarget;
    while (!taskView.id.includes("task-")) {
      taskView = taskView.parentNode;
    }

    let id = +taskView.id.split("task-")[1];

    // Mark the task as completed
    let task = TodoListElement.connection.getItemById(id);
    task.completed = true;
    // update the storage array.
    TodoListElement.connection.update(task);
    
    // Remove the finish button from taskview
    // taskView.querySelector(".task-view-finish-button").remove();
    taskView.remove();
  }

  static _deleteTask(e) {
    let taskView = e.currentTarget;
    while (!taskView.id.includes("task-")) {
      taskView = taskView.parentNode;
    }

    let taskId = +taskView.id.split("task-")[1];
    let taskTitle = taskView.querySelector(".task-view-title").textContent;

    const removeTask = (e) => {
      // remove the view
      taskView.remove();
      // remove the task from the storage.
      connection.remove(taskId);

      c.toast("Task deleted successfully.", 3);
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

  static filterTasks(filterName, type) {
    let items;
    let condition;

    if (filterName !== "completed") {
    }

    switch (type) {
      case "attribute":
        if (filterName === "all") {
          condition = (elem) => true;
        } else if (filterName === "nodate") {
          condition = (elem) => (elem.dueDate === ""); 
        } else if (filterName === "completed") {
          condition = (elem) => (elem.completed === true);
        }
        break;
      case "date":
        if (filterName === "today") {
          condition = (elem) => {
            return (elem.dueDate !== "" && isToday(parseISO(elem.dueDate)));
          };
        } else if (filterName === "week") {
          condition = (elem) => {
            if (elem.dueDate === "") {
              return false;
            }
            let today = new Date();
            return (compareAsc(nextSunday(today), parseISO(elem.dueDate)) === 1)
          };
        } else if (filterName === "month") {
          condition = (elem) => {
            if (elem.dueDate === "") {
              return false;
            }
            return getMonth(new Date()) === getMonth(parseISO(elem.dueDate));
          };
        }
        break;
      case "category":
        condition = (elem) => {
          for (let cat of elem.categories) {
            if (cat.value.toLowerCase() === filterName) {
              return true;
            }
          }
        };
        break;
    }

    if (filterName !== "completed") {
      items = TodoListElement.connection.getAllItems()
      .filter(elem => elem.completed === false)
      .filter(condition);
    } else {
      items = TodoListElement.connection.getAllItems().filter(condition);
    }

    // console.log(items);
    // console.trace();
    TodoListElement.updateTaskView(filterName, items);
  }

  /**
   * Update the task view with given tasks, and show the filter as the header name.
   */
  static updateTaskView(filterName, tasks) {
    let parentContainer = "#tasks-active";

    // remove all task views from the view.
    document.querySelectorAll(`${parentContainer} > .task`).forEach((elem) => {
      console.log("removing");
      elem.remove();
    });
    // update the view...
    // with the name of the filter, unless it's a category.
    let displayLabel;
    if (filterName in sidebar.sidebarLinks) {
      displayLabel = sidebar.sidebarLinks[filterName].displayLabel;
    } else {
      displayLabel = filterName;
    }

    document.querySelector(`${parentContainer} > .task-section-header`)
        .textContent = displayLabel;
    // and for the new tasks.
    for (let task of tasks) {
      TodoListElement.addTaskToView(task, parentContainer);
    }
    // don't let users add for completed tasks section.
    if (filterName === "completed") {
      document.querySelector("#tasks-add").classList.add("no-display");
    } else {
      document.querySelector("#tasks-add").classList.remove("no-display");
    }

  }

}


