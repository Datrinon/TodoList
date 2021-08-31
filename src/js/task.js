import priority from "./priority.js";

export class Task {
  
  id;
  title;
  priority;
  description;
  categories;
  dueDate;
  completed;
  
  constructor() {
    this.id = Date.now();
    this.title = "";
    this.priority = priority;
    this.description = "";
    this.categories = [];
    this.dueDate = null;
    this.completed = false;
  }

  displayTaskInfo() {
    for (let prop in Task) {
      console.log(this[prop]);
    }
  }
}