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

import {Task} from "./task.js";
import {Component} from "./component.js";

const c = new Component();
// index is the main controller.
// use this to rig events.


/**
 * Called upon load.
 */
(function main() {
  // Spawn a button.
  // It says Add Task...
  const [header, main, footer] = [...c.initializeStructure("To-Do List")];
  const navbar = c.navbar("Home", "Search", "Account");
  header.append(navbar);

  // return the header, main, and footer for editing.

  const addTask = c.button("Add Task");

  main.append(addTask);
})();