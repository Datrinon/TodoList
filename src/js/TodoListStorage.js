import {getUnixTime, parseISO} from "date-fns";  

/**
 * Establishes a connection to local storage and pushes/pulls data to local storage.
 */

// Singleton Pattern in JS Ref
// https://www.sitepoint.com/javascript-design-patterns-singleton/

const STORAGE_KEY = "todo-list-tasks";

const _tasks = [];

class TodoListStorage {
  
  #storage;
  #STORAGE_KEY;

  constructor(STORAGE_KEY) {
    this.#STORAGE_KEY = STORAGE_KEY;
    if (!localStorage.getItem(STORAGE_KEY)) {
      this.#storage = [];
    } else {
      this.#storage = this.#restoreFromStorage();
      this.sortByDueDate();
    }

  }

  add(...items) {
    this.#storage.push(...items);

    window.onbeforeunload = () => this.#saveToStorage();
    // Did you know? this updates each time, and assigning that to a handler
    // unfortunately the handler will not recognize the update, so we have
    // to do it manually each time.
    // TODO
    // An interesting test
    // Set a conditional that will only save onbeforeunload if the storage
    // length is one.
  }

  remove(id) {
    let index = this.#storage.findIndex(elem => elem.id === id);
    if (index !== -1) {
      this.#storage.splice(index, 1);
    }
    window.onbeforeunload = () => this.#saveToStorage();
  }

  getAllItems() {
    if (this.#storage.length != 0) {
      return this.#storage;
    } else {
      return null;
    }
  }

  getItemById(id) {
    let item = this.#storage.find(elem => elem.id === +id);

    return item;
  }

  update(item) {
    let index = this.#storage.findIndex(task => task.id === item.id);
    this.#storage[index] = item;

    window.onbeforeunload = () => this.#saveToStorage();
  }

  #saveToStorage() {
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.#storage));
  }

  #restoreFromStorage() {
    let jsonString = localStorage.getItem(this.#STORAGE_KEY);
    let array = JSON.parse(jsonString);
    // Note: JSON is recursive; however, the tagify library 
    // escapes quotes, which is incorrect JSON format (leave quotes untouched).
    // for that reason, we have to manually run JSON.parse when restoring
    // from storage.
    // Never mind, we just catch that before in the TodoListElement class.
    // for (let i = 0; i < array.length; i++) {
    //   try {
    //     array[i].categories = JSON.parse(array[i].categories);
    //   } catch (error) {
    //   }
    // }


    return array;
  }

  sortByDueDate() {  

    this.#storage.sort((a, b) => {
      if (a.dueDate === "" && b.dueDate === "") {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      }
      if (a.dueDate === "") {
        return 1; // sort b before a
      }
      if (b.dueDate === "") {
        return -1; // sort a before b
      }
      
      let aMs = getUnixTime(parseISO(a.dueDate));
      let bMs = getUnixTime(parseISO(b.dueDate));

      if (aMs > bMs) {
        return 1;
      } else if (aMs < bMs) {
        return -1;
      } else { // both are the same date
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    console.log(this.#storage);
  }
}



const connection = new TodoListStorage(STORAGE_KEY);


// 'this' wasn't getting updated!!
// (Because each time the array updates you have to assign a new event listener.)

export default connection;
