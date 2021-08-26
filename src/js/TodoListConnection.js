/**
 * Establishes a connection to local storage and pushes/pulls data to local storage.
 */

// Singleton Pattern in JS Ref
// https://www.sitepoint.com/javascript-design-patterns-singleton/

const STORAGE_KEY = "todo-list-tasks";

const _tasks = [];

class TaskListConnection {
  
  #storage;
  #STORAGE_KEY;

  constructor(STORAGE_KEY) {
    this.#STORAGE_KEY = STORAGE_KEY;
    if (!localStorage.getItem(STORAGE_KEY)) {
      this.#storage = [];
    } else {
      this.#storage = this.#restoreFromStorage();
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

    return array;
  }
}

const connection = new TaskListConnection(STORAGE_KEY);


// Didn't work
// Putting it in a function () {}
// Putting it in outside of class and exposing it
// For some reason array is still 0 length?!
// this wasn't getting updated!!

export default connection;
