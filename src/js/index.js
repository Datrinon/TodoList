/**
 * Index.js - The main controller of the to-do app. Assigns event handlers.
 * Author: dht
 * Date: 23 August 2021
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
import '@yaireo/tagify/dist/tagify.css';

import {Component} from "./component.js";
import {TodoListElement} from "./TodoListElement.js";
import connection from "./TodoListConnection.js";
import {TodoListSidebar} from "./TodoListSidebar.js";

const c = new Component();


/**
 * Called upon load. Initializes general GUI elements, like the header,
 * navbar, controls, etc.
 */
(function loadGUI() {

  const [header, main, footer] = [...c.initializeStructure("To-Do List", true)];

  // header elements
  let menuButton;
  let menuIcon;
  let logoMenuDiv;
  let pageLogo;
  let navBar;

  menuButton = c.button("", "navbar-button");
  menuButton.id = "menu-toggle-button";
  
  menuIcon = c.faIcon("fas", "fa-bars");
  menuButton.append(menuIcon);

  logoMenuDiv = c.div("logo-menu");
  pageLogo = c.heading("To-Do List", 1);
  
  logoMenuDiv.append(menuButton, pageLogo);
  
  navBar = c.navbar("My Account");

  header.append(logoMenuDiv, navBar);
  // End Header Section 

  // Begin Main Content (Task) Section
  const taskMasterSection = c.section("tasks-area");
  const activeTaskList = c.section("tasks-active");
  const addForm = c.section("tasks-add");
  const completedTasksList = c.section("tasks-completed");
  const addTaskButton = TodoListElement.addTaskButton();

  addForm.append(addTaskButton);

  const activeLabel = c.heading("Active", 2, "task-section-header");
  const completedLabel = c.heading("Completed", 2, "task-section-header");
  activeTaskList.append(activeLabel);
  completedTasksList.append(completedLabel);

  taskMasterSection.append(activeTaskList, addForm, completedTasksList);  
  // End Main Content Section

  // Sidebar Section
  // Sidebar
  const sidebarManager = new TodoListSidebar();
  // End Sidebar section

  // Append the major sections.
  main.append(sidebarManager.getSidebar(), taskMasterSection);


  // Begin Task-related stuffs (loading tasks and sidebar population.)
  let initialTasks = connection.getAllItems();

  if (initialTasks !== null) {
    for (let item of initialTasks) {
      TodoListElement.addTaskToView(item, "#tasks-active");
    }
  }

  window.addEventListener("load", (e) => {
    
    document.querySelector(`#${menuButton.id}`)
        .addEventListener("click", TodoListSidebar.toggleSidebar);

    sidebarManager.mql = 700;

    TodoListSidebar.queryPageWidth(sidebarManager.mql);

    sidebarManager.mql.addEventListener("change",  TodoListSidebar.queryPageWidth);
    
  }); 
})();

