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

  const taskList = c.section("notes");
  const addTask = TodoListElement.addTaskButton();

  main.append(taskList, addTask);

  let initialTasks = connection.getAllItems();

  if (initialTasks !== null) {
    for (let item of initialTasks) {
      TodoListElement.addTaskToView(item, "#notes");
    }
  }

})();