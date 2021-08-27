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

import {Component} from "./component.js";
import {TodoListElement} from "./TodoListElement.js";
import connection from "./TodoListConnection.js";

const c = new Component();


function toggleSideBar(e) {
  console.log("ello");
  document.querySelector(".sidebar").classList.toggle("hide-sidebar");
}

/**
 * Called upon load. Initializes general GUI elements, like the header,
 * navbar, controls, etc.
 */
(function loadGUI() {

  const [header, main, footer] = [...c.initializeStructure("To-Do List", true)];

  // header elements
  let menuIcon = c.faIcon("fas", "fa-bars");
  menuIcon.id = "menu-toggle-button";
  let pageLogo = c.heading("To-Do List", 1);
  let searchBar = c.div("search-bar");
  let searchField = document.createElement("input");
  searchField.setAttribute("type", "text");
  let searchIcon = c.faIcon("fas", "fa-search");
  searchBar.append(searchIcon, searchField);

  let navBar = c.navbar("My Account");

  header.append(menuIcon, pageLogo, searchBar, navBar);

  // sidebar
  let sideBar = c.div("sidebar");

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
  main.append(sideBar,taskMasterSection);

  let initialTasks = connection.getAllItems();

  if (initialTasks !== null) {
    for (let item of initialTasks) {
      TodoListElement.addTaskToView(item, "#tasks-active");
    }
  }

  window.addEventListener("load", () => {
    document.querySelector(`#${menuIcon.id}`).addEventListener("click", toggleSideBar);

    let mql = window.matchMedia('(max-width: 900px)');
    mql.addEventListener("change", (e) => {
      if (e.matches) {
        document.querySelector(".sidebar").classList.add("hide-sidebar");
        // TODO Change the schema of the sidebar to overlay the rest of the page,
      } else {
        // it bigger than the query rule.
        document.querySelector(".sidebar").classList.remove("hide-sidebar");
      }
    })
  });
})();

