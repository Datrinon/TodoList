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

function loadSideBar() {
  let sideBarNav = document.createElement("nav");
  sideBarNav.id = "sidebar-nav";

  let sideBarLinksContainer = document.createElement("ul");
  let sideBarLinks = ["All", "Today", "This Week", "Categories", "Completed"]
  
  for (let link of sideBarLinks) {
    let linkUl = document.createElement("li");
    let button = c.button(link);
    let linkId = link.replace(" ", "-").toLowerCase();
    
    linkId = `nav-link-${linkId}`;
    linkUl.id = linkId;
    linkUl.classList.add("task-type-nav-link");
    //linkUl.textContent = link;
    linkUl.append(button);

    sideBarLinksContainer.append(linkUl);
  }

  sideBarNav.append(sideBarLinksContainer);

  document.querySelector(".sidebar").append(sideBarNav);
  
  // now add in the categories.
  updateCategoriesOnSidebar();
}


function updateCategoriesOnSidebar() {
  document.querySelector("#nav-link-categories").append(getCategoriesAsLinks());
}

/**
 * Check the categories listed for each task, and then return a navbar with 
 * the categories. Ideally, run this function each time you submit or update
 * a task.
 * 
 * @returns links - An array of links pertaining to all relevant categories, 
 * and the count of tasks in each category. Add this after the category
 * link.
 */
function getCategoriesAsLinks() {
  
  let categories = connection.getAllItems().reduce((cats, task) => {
    // guard clause since continue doesn't work; after all, it is a function, not a loop block.
    if (task.categories === "") {
      return cats;
    }
    let taskCategories = JSON.parse(task.categories).map(elem => elem.value);
    // need to convert task.categories into an array.
    for (let cat of taskCategories) {
      cat = cat.replace(" ", "-").toLowerCase();
      if (cat in cats) {
        cats[cat] += 1;
      } else {
        cats[cat] = 1;
      }
    }

    return cats;
  }, {});

  let catContainer = document.createElement("ul");
  catContainer.id = "category-links";

  for (let cat in categories) {
    let catLink = document.createElement('li');
    catLink.textContent = cat.replace("-", ' ');
    catLink.textContent += ` (${categories[cat]})`;

    catLink.classList.add("category-nav-link");

    catContainer.append(catLink);
  }

  return catContainer;
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

  let logoMenuDiv = c.div("logo-menu");
  let pageLogo = c.heading("To-Do List", 1);
  let searchBar = c.div("search-bar");
  logoMenuDiv.append(pageLogo, searchBar);
  // Removed search bar for sake of time
  // let searchField = document.createElement("input");
  // searchField.setAttribute("type", "text");
  // let searchIcon = c.faIcon("fas", "fa-search");
  // searchBar.append(searchIcon, searchField);

  let navBar = c.navbar("My Account");

  header.append(logoMenuDiv, navBar);

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

  // Load Task-related stuffs
  // tasks 
  if (initialTasks !== null) {
    for (let item of initialTasks) {
      TodoListElement.addTaskToView(item, "#tasks-active");
    }
  }
  // task navigation links
  loadSideBar();

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

