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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9Ub2RvTGlzdENvbm5lY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogRXN0YWJsaXNoZXMgYSBjb25uZWN0aW9uIHRvIGxvY2FsIHN0b3JhZ2UgYW5kIHB1c2hlcy9wdWxscyBkYXRhIHRvIGxvY2FsIHN0b3JhZ2UuXHJcbiAqL1xyXG5cclxuLy8gU2luZ2xldG9uIFBhdHRlcm4gaW4gSlMgUmVmXHJcbi8vIGh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMtc2luZ2xldG9uL1xyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSBcInRvZG8tbGlzdC10YXNrc1wiO1xyXG5cclxuY29uc3QgX3Rhc2tzID0gW107XHJcblxyXG5jbGFzcyBUYXNrTGlzdENvbm5lY3Rpb24ge1xyXG4gIFxyXG4gICNzdG9yYWdlO1xyXG4gICNTVE9SQUdFX0tFWTtcclxuXHJcbiAgY29uc3RydWN0b3IoU1RPUkFHRV9LRVkpIHtcclxuICAgIHRoaXMuI1NUT1JBR0VfS0VZID0gU1RPUkFHRV9LRVk7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSkge1xyXG4gICAgICB0aGlzLiNzdG9yYWdlID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiNzdG9yYWdlID0gdGhpcy4jcmVzdG9yZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkKC4uLml0ZW1zKSB7XHJcbiAgICB0aGlzLiNzdG9yYWdlLnB1c2goLi4uaXRlbXMpO1xyXG5cclxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHRoaXMuI3NhdmVUb1N0b3JhZ2UoKTtcclxuICAgIC8vIERpZCB5b3Uga25vdz8gdGhpcyB1cGRhdGVzIGVhY2ggdGltZSwgYW5kIGFzc2lnbmluZyB0aGF0IHRvIGEgaGFuZGxlclxyXG4gICAgLy8gdW5mb3J0dW5hdGVseSB0aGUgaGFuZGxlciB3aWxsIG5vdCByZWNvZ25pemUgdGhlIHVwZGF0ZSwgc28gd2UgaGF2ZVxyXG4gICAgLy8gdG8gZG8gaXQgbWFudWFsbHkgZWFjaCB0aW1lLlxyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8gQW4gaW50ZXJlc3RpbmcgdGVzdFxyXG4gICAgLy8gU2V0IGEgY29uZGl0aW9uYWwgdGhhdCB3aWxsIG9ubHkgc2F2ZSBvbmJlZm9yZXVubG9hZCBpZiB0aGUgc3RvcmFnZVxyXG4gICAgLy8gbGVuZ3RoIGlzIG9uZS5cclxuICB9XHJcblxyXG4gIHJlbW92ZSguLi5pdGVtcykge1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLiNzdG9yYWdlLmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy4jc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBbGxJdGVtcygpIHtcclxuICAgIGlmICh0aGlzLiNzdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzdG9yYWdlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQnlJZChpbmRleCkge1xyXG4gICAgbGV0IGl0ZW0gPSB0aGlzLiNzdG9yYWdlLmZpbmQoZWxlbSA9PiBlbGVtLmlkID09PSBpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoaXRlbSkge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy4jc3RvcmFnZS5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSBpdGVtLmlkKTtcclxuICAgIHRoaXMuI3N0b3JhZ2VbaW5kZXhdID0gaXRlbTtcclxuXHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB0aGlzLiNzYXZlVG9TdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICAjc2F2ZVRvU3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh0aGlzLiNzdG9yYWdlKSk7XHJcbiAgfVxyXG5cclxuICAjcmVzdG9yZUZyb21TdG9yYWdlKCkge1xyXG4gICAgbGV0IGpzb25TdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiNTVE9SQUdFX0tFWSk7XHJcbiAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgVGFza0xpc3RDb25uZWN0aW9uKFNUT1JBR0VfS0VZKTtcclxuXHJcblxyXG4vLyBEaWRuJ3Qgd29ya1xyXG4vLyBQdXR0aW5nIGl0IGluIGEgZnVuY3Rpb24gKCkge31cclxuLy8gUHV0dGluZyBpdCBpbiBvdXRzaWRlIG9mIGNsYXNzIGFuZCBleHBvc2luZyBpdFxyXG4vLyBGb3Igc29tZSByZWFzb24gYXJyYXkgaXMgc3RpbGwgMCBsZW5ndGg/IVxyXG4vLyB0aGlzIHdhc24ndCBnZXR0aW5nIHVwZGF0ZWQhIVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGlvbjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9