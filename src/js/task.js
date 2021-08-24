import priority from "./priority.js";

export class Task {
  
  createDate;
  title;
  priority;
  description;
  categories;
  
  constructor() {
    this.createDate = Date.now();
    this.title = "";
    this.priority = priority;
    this.description = "";
    this.categories = [];
  }

  displayTaskInfo() {
    for (let prop in Task) {
      console.log(this[prop]);
    }
  }

}