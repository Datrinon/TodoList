/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/js/TodoListConnection.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  remove(...items) {
    for (let item of items) {
      let index = this.#storage.findIndex(elem => elem.id === item.id);
      if (index !== -1) {
        this.#storage.splice(index, 1);
      }
    }
  }

  getAllItems() {
    if (this.#storage.length != 0) {
      return this.#storage;
    } else {
      return null;
    }
  }

  getItemById(index) {
    let item = this.#storage.find(elem => elem.id === index);

    return item;
  }

  update(item) {
    let index = this.#storage.findIndex(task => task.id === item.id);
    this.#storage[index] = item;
  }

  #saveToStorage() {
    alert(this.#storage);
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.#storage));
  }

  #restoreFromStorage() {
    let jsonString = localStorage.getItem(this.#STORAGE_KEY);
    let array = JSON.parse(jsonString);

    return array;
  }
}

const connection = new TaskListConnection(STORAGE_KEY);

window.onbeforeunload = () => connection.saveToStorage();

// Didn't work
// Putting it in a function () {}
// Putting it in outside of class and exposing it
// For some reason array is still 0 length?!

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvVG9kb0xpc3RDb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIEVzdGFibGlzaGVzIGEgY29ubmVjdGlvbiB0byBsb2NhbCBzdG9yYWdlIGFuZCBwdXNoZXMvcHVsbHMgZGF0YSB0byBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuXHJcbi8vIFNpbmdsZXRvbiBQYXR0ZXJuIGluIEpTIFJlZlxyXG4vLyBodHRwczovL3d3dy5zaXRlcG9pbnQuY29tL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLXNpbmdsZXRvbi9cclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gXCJ0b2RvLWxpc3QtdGFza3NcIjtcclxuXHJcbmNvbnN0IF90YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgVGFza0xpc3RDb25uZWN0aW9uIHtcclxuICBcclxuICAjc3RvcmFnZTtcclxuICAjU1RPUkFHRV9LRVk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFNUT1JBR0VfS0VZKSB7XHJcbiAgICB0aGlzLiNTVE9SQUdFX0tFWSA9IFNUT1JBR0VfS0VZO1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkpIHtcclxuICAgICAgdGhpcy4jc3RvcmFnZSA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jc3RvcmFnZSA9IHRoaXMuI3Jlc3RvcmVGcm9tU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFkZCguLi5pdGVtcykge1xyXG4gICAgdGhpcy4jc3RvcmFnZS5wdXNoKC4uLml0ZW1zKTtcclxuXHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB0aGlzLiNzYXZlVG9TdG9yYWdlKCk7XHJcbiAgICAvLyBEaWQgeW91IGtub3c/IHRoaXMgdXBkYXRlcyBlYWNoIHRpbWUsIGFuZCBhc3NpZ25pbmcgdGhhdCB0byBhIGhhbmRsZXJcclxuICAgIC8vIHVuZm9ydHVuYXRlbHkgdGhlIGhhbmRsZXIgd2lsbCBub3QgcmVjb2duaXplIHRoZSB1cGRhdGUsIHNvIHdlIGhhdmVcclxuICAgIC8vIHRvIGRvIGl0IG1hbnVhbGx5IGVhY2ggdGltZS5cclxuICAgIC8vIFRPRE9cclxuICAgIC8vIEFuIGludGVyZXN0aW5nIHRlc3RcclxuICAgIC8vIFNldCBhIGNvbmRpdGlvbmFsIHRoYXQgd2lsbCBvbmx5IHNhdmUgb25iZWZvcmV1bmxvYWQgaWYgdGhlIHN0b3JhZ2VcclxuICAgIC8vIGxlbmd0aCBpcyBvbmUuXHJcbiAgfVxyXG5cclxuICByZW1vdmUoLi4uaXRlbXMpIHtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy4jc3RvcmFnZS5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuI3N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsSXRlbXMoKSB7XHJcbiAgICBpZiAodGhpcy4jc3RvcmFnZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc3RvcmFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbUJ5SWQoaW5kZXgpIHtcclxuICAgIGxldCBpdGVtID0gdGhpcy4jc3RvcmFnZS5maW5kKGVsZW0gPT4gZWxlbS5pZCA9PT0gaW5kZXgpO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGl0ZW0pIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuI3N0b3JhZ2UuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICB0aGlzLiNzdG9yYWdlW2luZGV4XSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICAjc2F2ZVRvU3RvcmFnZSgpIHtcclxuICAgIGFsZXJ0KHRoaXMuI3N0b3JhZ2UpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHRoaXMuI3N0b3JhZ2UpKTtcclxuICB9XHJcblxyXG4gICNyZXN0b3JlRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICBsZXQganNvblN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI1NUT1JBR0VfS0VZKTtcclxuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBUYXNrTGlzdENvbm5lY3Rpb24oU1RPUkFHRV9LRVkpO1xyXG5cclxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gY29ubmVjdGlvbi5zYXZlVG9TdG9yYWdlKCk7XHJcblxyXG4vLyBEaWRuJ3Qgd29ya1xyXG4vLyBQdXR0aW5nIGl0IGluIGEgZnVuY3Rpb24gKCkge31cclxuLy8gUHV0dGluZyBpdCBpbiBvdXRzaWRlIG9mIGNsYXNzIGFuZCBleHBvc2luZyBpdFxyXG4vLyBGb3Igc29tZSByZWFzb24gYXJyYXkgaXMgc3RpbGwgMCBsZW5ndGg/IVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGlvbjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9