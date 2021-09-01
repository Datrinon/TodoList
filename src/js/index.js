/**
 * Index.js - The main controller of the to-do app. Assigns event handlers.
 * Author: dht
 * Create Date: 23 August 2021
 */
 "use strict"

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

import '../css/reset.css';
import '../css/sticky-footer.css';
// import '../css/responsive-header.css';
import '../css/index.css';
import '../css/draggable.css';
import '../css/todo-list-area.css';
import '../css/todo-list-task.css';
import '@yaireo/tagify/dist/tagify.css';

import {Component} from "./component.js";
import {TodoListElement} from "./TodoListElement.js";
import connection from "./TodoListStorage.js";
import {sidebar, TodoListSidebar} from "./TodoListSidebar.js";
import {format} from "date-fns";

const c = new Component();

/**
 * Called upon load. Initializes general GUI elements, like the header,
 * navbar, controls, etc.
 */
(function loadGUI() {

  function loadHeader(header) {
  
    let menuButton;
    let menuIcon;
    let logoMenuDiv;
    let pageLogo;
    let todayDate;
    let navBar;
  
    menuButton = c.button("", "navbar-button");
    menuButton.id = "menu-toggle-button";
    
    menuIcon = c.faIcon("fas", "fa-bars");
    menuButton.append(menuIcon);
  
    logoMenuDiv = c.div("logo-menu");
    pageLogo = c.heading("To-Do List", 1, "page-title");
    todayDate = c.paragraph(`${format(new Date(), "PP")}`, "today-date");

    logoMenuDiv.append(menuButton, pageLogo, todayDate);

    
    navBar = c.navbar("My Account");
  
    header.append(logoMenuDiv, navBar);
  
    return header;
  }
  
  function loadMain(main, sidebar) {
    // Begin Main Content (Task) Section
    const taskMasterSection = c.section("tasks-area");
    const activeTaskList = c.section("tasks-active");
    const addForm = c.section("tasks-add");
    const completedTasksList = c.section("tasks-completed");
    const addTaskButton = TodoListElement.addTaskButton();
  
    addForm.append(addTaskButton);
  
    const activeLabel = c.heading("All", 2, "task-section-header");
    activeTaskList.append(activeLabel);
  
    taskMasterSection.append(activeTaskList, addForm, completedTasksList);  
  
    main.append(sidebar.getSidebar(), taskMasterSection);
  
    // Begin Task-related stuffs (loading tasks and sidebar population.)
    let initialTasks = connection.getAllItems();
  
    if (initialTasks !== null) {
      for (let item of initialTasks) {
        if (item.completed === false) {
          TodoListElement.addTaskToView(item, "#tasks-active");
        }
      }
    }
  
    return main;
  }
  
  function determineSidebarPresentation(sidebarManager) {
    document.querySelector("#menu-toggle-button").addEventListener("click",
        TodoListSidebar.toggleSidebar);
  
    sidebarManager.mql = 700;
  
    TodoListSidebar.queryPageWidth(sidebarManager.mql);
  
    sidebarManager.mql.addEventListener("change",  TodoListSidebar.queryPageWidth);
  }

  let [header, main, footer] = [...c.initializeStructure("To-Do List", true)];

  // header elements
  header = loadHeader(header);
  main = loadMain(main, sidebar);
  // End Header Section 

  window.addEventListener("load", () => determineSidebarPresentation(sidebar)); 
})();

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
// 7. The ability to delete tasks. 
// 8. Time to add the sidebar.
// 9. The add form css, basic css.
// 10. Category input
//- Use library tagify
11. Sidebar has the following roles:
// - Today
// - This week
// - Categories:
//   > Categories Listed
// - Completed
// 11-2. Move sidebar into a separate class
// - Class name, PageElement.js
// - Named it sidebar/
// 12. Sidebar functionality:
// - Clicking on one of the buttons filters the tasks.
// - Use TodoListElement

// 13. Straighten up the navbar.
// Work on the media query for it on 82 of index.js
12. Each time you edit or append tags, update the task view.
14. CSS time
a. Top bar CSS
b. Sidebar CSS
c. Tasks


Backburner:
- Categories
- Navbar area
- UI
*/