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
import '../css/responsive-header.css';
import '../css/index.css';

import {Component} from "./component.js";
import {TodoListElement} from "./TodoListElement.js";
import connection from "./TodoListConnection.js";

const c = new Component();

/**
 * Called upon load. Initializes general GUI elements, like the header,
 * navbar, controls, etc.
 */
(function loadGUI() {

  const [header, main, footer] = [...c.initializeStructure("To-Do List")];
  const navbar = c.navbar("Good Evening!");
  header.append(navbar);

  const activeTaskList = c.section("tasks-active");
  const completedTasksList = c.section("tasks-completed");
  const addTask = TodoListElement.addTaskButton();

  let activeLabel = c.heading("Active", 2, "task-section-header");
  let completedLabel = c.heading("Completed", 2, "task-section-header");
  activeTaskList.append(activeLabel);
  completedTasksList.append(completedLabel);

  main.append(activeTaskList, addTask, completedTasksList);

  let initialTasks = connection.getAllItems();

  if (initialTasks !== null) {
    for (let item of initialTasks) {
      TodoListElement.addTaskToView(item, "#tasks-active");
    }
  }

})();