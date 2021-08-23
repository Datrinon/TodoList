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

import {Task} from "./task.js"
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
  const body = document.body;
  const display = c.div("content");
  const addTask = c.button("Add Task");

  display.append(addTask);

  body.append(display);
})();