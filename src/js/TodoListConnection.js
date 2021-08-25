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

  constructor(storageArray, STORAGE_KEY) {
    this.#STORAGE_KEY = STORAGE_KEY;
    if (!localStorage.getItem(STORAGE_KEY)) {
      this.#storage = localStorage.getItem(STORAGE_KEY);    
    } else {
      this.#storage = storageArray;
    }

    window.beforeOnUnload = () => this.#saveToStorage();
  }

  add(...items) {
    this.#storage.push(...items);
  }

  remove(...items) {
    for (let item of items) {
      let index = this.#storage.findIndex(elem => elem.id === item.id);
      if (index !== -1) {
        this.#storage.splice(index, 1);
      }
    }
  }

  get() {
    return this.#storage;
  }

  update(item) {
    let index = this.#storage.findIndex(task => task.id === item.id);
    this.#storage[index] = item;
  }

  #saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#storage, this.#STORAGE_KEY));
  }
}

const connection = new TaskListConnection(_tasks);
Object.freeze(connection);

export default connection;
