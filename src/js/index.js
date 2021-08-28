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

import {Component} from "./component.js";
import {TodoListElement} from "./TodoListElement.js";
import connection from "./TodoListConnection.js";

const c = new Component();


function toggleSideBar(e) {
  console.log("Sidebar: Sidebar toggling...");
  let sidebar = document.querySelector(".sidebar");
  let sidebarWrapper = document.querySelector(".sidebar-wrapper");
  sidebar.classList.toggle("hide-sidebar");
  if (!sidebar.classList.contains("hide-sidebar")) {
    sidebarWrapper.classList.add("sidebar-active-wrapper-bg");
  } else {
    sidebarWrapper.classList.remove("sidebar-active-wrapper-bg");
  }
}

function queryPageWidth(e) {
  if (e.matches) {
    document.querySelector(".sidebar").classList.add("hide-sidebar");
    document.querySelector(".sidebar-wrapper").classList.remove("sidebar-active-wrapper-bg");
  } else {
    // it bigger than the query rule.
    document.querySelector(".sidebar").classList.remove("hide-sidebar");
  }
}

/**
 * Called upon load. Initializes general GUI elements, like the header,
 * navbar, controls, etc.
 */
(function loadGUI() {

  const [header, main, footer] = [...c.initializeStructure("To-Do List", true)];

  // header elements
  let menuButton = c.button("", "navbar-button");
  menuButton.id = "menu-toggle-button";
  let menuIcon = c.faIcon("fas", "fa-bars");
  menuButton.append(menuIcon);

  let pageLogo = c.heading("To-Do List", 1);
  let searchBar = c.div("search-bar");
  let searchField = document.createElement("input");
  searchField.setAttribute("type", "text");
  let searchIcon = c.faIcon("fas", "fa-search");
  searchBar.append(searchIcon, searchField);

  let navBar = c.navbar("My Account");

  header.append(menuButton, pageLogo, searchBar, navBar);

  // sidebar
  let sideBarWrapper = c.div("sidebar-wrapper");
  let sideBar = c.div("sidebar");
  sideBarWrapper.append(sideBar);

  // Begin Main Content (Task) Section
  const taskMasterSection = c.section("tasks-area");
  const activeTaskList = c.section("tasks-active");
  const addForm = c.section("tasks-add");
  const completedTasksList = c.section("tasks-completed");
  const addTaskButton = TodoListElement.addTaskButton();

  addForm.append(addTaskButton);

  let activeLabel = c.heading("Active", 2, "task-section-header");
  let completedLabel = c.heading("Completed", 2, "task-section-header");
  activeTaskList.append(activeLabel);
  completedTasksList.append(completedLabel);

  taskMasterSection.append(activeTaskList, addForm, completedTasksList);
  main.append(sideBarWrapper,taskMasterSection);

  let initialTasks = connection.getAllItems();

  if (initialTasks !== null) {
    for (let item of initialTasks) {
      TodoListElement.addTaskToView(item, "#tasks-active");
    }
  }

  window.addEventListener("load", (e) => {
    
    document.querySelector(`#${menuButton.id}`).addEventListener("click", toggleSideBar);

    let mql = window.matchMedia('(max-width: 700px)');
    // matchMedia is part of CSS Object Model, like we have Document Object Model
    // matchMedia returns a mediaquerylist representing the media query string.
    // .matches returns whether or not the state of the document matches the given query rule.
    if (mql.matches) {
      document.querySelector(".sidebar").classList.add("hide-sidebar");
      document.querySelector(".sidebar-wrapper").classList.remove("sidebar-active-wrapper-bg");
    } else {
      document.querySelector(".sidebar").classList.remove("hide-sidebar");
    }

    mql.addEventListener("change", queryPageWidth);
  });
})();

