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
/*!***********************************!*\
  !*** ./src/js/TodoListStorage.js ***!
  \***********************************/
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

class TodoListStorage {
  
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
}

const connection = new TodoListStorage(STORAGE_KEY);


// 'this' wasn't getting updated!!
// (Because each time the array updates you have to assign a new event listener.)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL1RvZG9MaXN0U3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBFc3RhYmxpc2hlcyBhIGNvbm5lY3Rpb24gdG8gbG9jYWwgc3RvcmFnZSBhbmQgcHVzaGVzL3B1bGxzIGRhdGEgdG8gbG9jYWwgc3RvcmFnZS5cclxuICovXHJcblxyXG4vLyBTaW5nbGV0b24gUGF0dGVybiBpbiBKUyBSZWZcclxuLy8gaHR0cHM6Ly93d3cuc2l0ZXBvaW50LmNvbS9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy1zaW5nbGV0b24vXHJcblxyXG5jb25zdCBTVE9SQUdFX0tFWSA9IFwidG9kby1saXN0LXRhc2tzXCI7XHJcblxyXG5jb25zdCBfdGFza3MgPSBbXTtcclxuXHJcbmNsYXNzIFRvZG9MaXN0U3RvcmFnZSB7XHJcbiAgXHJcbiAgI3N0b3JhZ2U7XHJcbiAgI1NUT1JBR0VfS0VZO1xyXG5cclxuICBjb25zdHJ1Y3RvcihTVE9SQUdFX0tFWSkge1xyXG4gICAgdGhpcy4jU1RPUkFHRV9LRVkgPSBTVE9SQUdFX0tFWTtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpKSB7XHJcbiAgICAgIHRoaXMuI3N0b3JhZ2UgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuI3N0b3JhZ2UgPSB0aGlzLiNyZXN0b3JlRnJvbVN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBhZGQoLi4uaXRlbXMpIHtcclxuICAgIHRoaXMuI3N0b3JhZ2UucHVzaCguLi5pdGVtcyk7XHJcblxyXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdGhpcy4jc2F2ZVRvU3RvcmFnZSgpO1xyXG4gICAgLy8gRGlkIHlvdSBrbm93PyB0aGlzIHVwZGF0ZXMgZWFjaCB0aW1lLCBhbmQgYXNzaWduaW5nIHRoYXQgdG8gYSBoYW5kbGVyXHJcbiAgICAvLyB1bmZvcnR1bmF0ZWx5IHRoZSBoYW5kbGVyIHdpbGwgbm90IHJlY29nbml6ZSB0aGUgdXBkYXRlLCBzbyB3ZSBoYXZlXHJcbiAgICAvLyB0byBkbyBpdCBtYW51YWxseSBlYWNoIHRpbWUuXHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyBBbiBpbnRlcmVzdGluZyB0ZXN0XHJcbiAgICAvLyBTZXQgYSBjb25kaXRpb25hbCB0aGF0IHdpbGwgb25seSBzYXZlIG9uYmVmb3JldW5sb2FkIGlmIHRoZSBzdG9yYWdlXHJcbiAgICAvLyBsZW5ndGggaXMgb25lLlxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLiNzdG9yYWdlLmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGlkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy4jc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdGhpcy4jc2F2ZVRvU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsSXRlbXMoKSB7XHJcbiAgICBpZiAodGhpcy4jc3RvcmFnZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc3RvcmFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbUJ5SWQoaWQpIHtcclxuICAgIGxldCBpdGVtID0gdGhpcy4jc3RvcmFnZS5maW5kKGVsZW0gPT4gZWxlbS5pZCA9PT0gK2lkKTtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShpdGVtKSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLiNzdG9yYWdlLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgdGhpcy4jc3RvcmFnZVtpbmRleF0gPSBpdGVtO1xyXG5cclxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHRoaXMuI3NhdmVUb1N0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gICNzYXZlVG9TdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHRoaXMuI3N0b3JhZ2UpKTtcclxuICB9XHJcblxyXG4gICNyZXN0b3JlRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICBsZXQganNvblN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI1NUT1JBR0VfS0VZKTtcclxuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XHJcbiAgICAvLyBOb3RlOiBKU09OIGlzIHJlY3Vyc2l2ZTsgaG93ZXZlciwgdGhlIHRhZ2lmeSBsaWJyYXJ5IFxyXG4gICAgLy8gZXNjYXBlcyBxdW90ZXMsIHdoaWNoIGlzIGluY29ycmVjdCBKU09OIGZvcm1hdCAobGVhdmUgcXVvdGVzIHVudG91Y2hlZCkuXHJcbiAgICAvLyBmb3IgdGhhdCByZWFzb24sIHdlIGhhdmUgdG8gbWFudWFsbHkgcnVuIEpTT04ucGFyc2Ugd2hlbiByZXN0b3JpbmdcclxuICAgIC8vIGZyb20gc3RvcmFnZS5cclxuICAgIC8vIE5ldmVyIG1pbmQsIHdlIGp1c3QgY2F0Y2ggdGhhdCBiZWZvcmUgaW4gdGhlIFRvZG9MaXN0RWxlbWVudCBjbGFzcy5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgdHJ5IHtcclxuICAgIC8vICAgICBhcnJheVtpXS5jYXRlZ29yaWVzID0gSlNPTi5wYXJzZShhcnJheVtpXS5jYXRlZ29yaWVzKTtcclxuICAgIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IFRvZG9MaXN0U3RvcmFnZShTVE9SQUdFX0tFWSk7XHJcblxyXG5cclxuLy8gJ3RoaXMnIHdhc24ndCBnZXR0aW5nIHVwZGF0ZWQhIVxyXG4vLyAoQmVjYXVzZSBlYWNoIHRpbWUgdGhlIGFycmF5IHVwZGF0ZXMgeW91IGhhdmUgdG8gYXNzaWduIGEgbmV3IGV2ZW50IGxpc3RlbmVyLilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb247XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==