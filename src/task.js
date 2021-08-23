export class Task {
  
  date;
  title;
  priority;
  description;
  categories;
  
  constructor() {

  }

  displayTaskInfo() {
    for (let prop in Task) {
      console.log(this[prop]);
    }
  }

}