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

  getAllItems() {
    return this.#storage;
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#storage, this.#STORAGE_KEY));
  }
}

const connection = new TaskListConnection(_tasks);
Object.freeze(connection);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvVG9kb0xpc3RDb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIEVzdGFibGlzaGVzIGEgY29ubmVjdGlvbiB0byBsb2NhbCBzdG9yYWdlIGFuZCBwdXNoZXMvcHVsbHMgZGF0YSB0byBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuXHJcbi8vIFNpbmdsZXRvbiBQYXR0ZXJuIGluIEpTIFJlZlxyXG4vLyBodHRwczovL3d3dy5zaXRlcG9pbnQuY29tL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLXNpbmdsZXRvbi9cclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gXCJ0b2RvLWxpc3QtdGFza3NcIjtcclxuXHJcbmNvbnN0IF90YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgVGFza0xpc3RDb25uZWN0aW9uIHtcclxuICBcclxuICAjc3RvcmFnZTtcclxuICAjU1RPUkFHRV9LRVk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0b3JhZ2VBcnJheSwgU1RPUkFHRV9LRVkpIHtcclxuICAgIHRoaXMuI1NUT1JBR0VfS0VZID0gU1RPUkFHRV9LRVk7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSkge1xyXG4gICAgICB0aGlzLiNzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpOyAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuI3N0b3JhZ2UgPSBzdG9yYWdlQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmJlZm9yZU9uVW5sb2FkID0gKCkgPT4gdGhpcy4jc2F2ZVRvU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKC4uLml0ZW1zKSB7XHJcbiAgICB0aGlzLiNzdG9yYWdlLnB1c2goLi4uaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKC4uLml0ZW1zKSB7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuI3N0b3JhZ2UuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLiNzdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFsbEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3N0b3JhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQnlJZChpbmRleCkge1xyXG4gICAgbGV0IGl0ZW0gPSB0aGlzLiNzdG9yYWdlLmZpbmQoZWxlbSA9PiBlbGVtLmlkID09PSBpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoaXRlbSkge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy4jc3RvcmFnZS5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSBpdGVtLmlkKTtcclxuICAgIHRoaXMuI3N0b3JhZ2VbaW5kZXhdID0gaXRlbTtcclxuICB9XHJcblxyXG4gICNzYXZlVG9TdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHRoaXMuI3N0b3JhZ2UsIHRoaXMuI1NUT1JBR0VfS0VZKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IFRhc2tMaXN0Q29ubmVjdGlvbihfdGFza3MpO1xyXG5PYmplY3QuZnJlZXplKGNvbm5lY3Rpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGlvbjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9