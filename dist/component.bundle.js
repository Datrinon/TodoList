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
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
/**
 * Component class. Contains various DOM elements.
 * Author: datrinon
 * Version: 1.1
 */

class Component {
  
  mql = window.matchMedia('(max-width: 600px)');

  constructor() {
    
  }

  /**
   * Initializes a basic HTML skeleton for the web page, generating a header,
   * main, and sticky footer.
   * 
   * @param {*} headerTitle - What the web page is called. 
   * @param {bool} emptyHeader - Should the header use a default structure?
   * The default structure looks like [ Logo | | | | Navigation Links]
   * @returns - An array containing references to the generated header, main, and footer.
   */
  initializeStructure(headerTitle, emptyHeader = false, createMonth, githubLink) {
    const body = document.body;
    const mainWrapper = this.div("content");
    let header;
    if (emptyHeader) {
      header = document.createElement("header");
    } else {
      header = this.header(headerTitle);
    }
    header.id = "header";

    const main = document.createElement("main");
    const footer = this.footer(createMonth, githubLink);
    main.classList.add("main");

    mainWrapper.append(header, main);
    body.append(mainWrapper, footer);

    return [header, main, footer];
  }

  content() {
    let content = document.createElement("div");
    content.classList.add("content");
    
    let main = document.createElement("main");
    main.classList.add("main");

    content.append(main);

    return content;
  }

  header(title) {
    let header = document.createElement("header");
    let titleElem = document.createElement("h1");
    let menuButton = document.createElement("i");

    menuButton.id = "menu-button";
    menuButton.classList.add("fas", "fa-bars", "no-display");

    this.mql.addEventListener("change", (e) => {
      if (e.matches) {
        document.querySelector("#menu-button").classList.remove("no-display");
      } else {
        // it bigger than the query rule.
        document.querySelector("#menu-button").classList.add("no-display");
        document.querySelector("#navbar").classList.remove("slide-in-out");
      }
    });

    window.addEventListener('load', function () {
      document.querySelector("#menu-button").addEventListener("click", (e) => {
        console.log("menu pressed.");
        document.querySelector("#navbar").classList.toggle("slide-in-out");
      });
    })
    
    header.id = "header";
    // header.style.background = `url(${img})`;

    titleElem.id = "page-title";
    titleElem.textContent = title;
    
    titleElem.insertBefore(menuButton, titleElem.firstChild);
    header.append(titleElem);
    
    return header;
  }

  navbar(...links) {
    const nav = document.createElement("nav");
    const linkContainer = document.createElement("ul");

    nav.id = "navbar";
    linkContainer.id = "navbar-buttons-container";

    for (let link of links) {
      const linkButton = document.createElement("li");
      const linkAnchor = document.createElement("a");

      linkButton.classList.add("navbar-button");
      
      linkAnchor.id = `navlink-${link.replace(" ", "-").toLowerCase()}`;
      linkAnchor.textContent = link;
      linkAnchor.setAttribute("href", "#");

      linkButton.append(linkAnchor);
      linkContainer.append(linkButton);



      // Too specific.
      // linkAnchor.addEventListener("click", (e) => {
      //   let currentSectionId = document.querySelector(".main > section:not(.no-display)").id.toLowerCase();
      //   let chosenSectionId = e.currentTarget.textContent.toLowerCase();

      //   if (currentSectionId !== chosenSectionId) {
      //     document.querySelector(`#${currentSectionId}`).classList.add("no-display");
      //     document.querySelector(`#${chosenSectionId}`).classList.remove("no-display");
      //   }

      // });
    }

    nav.append(linkContainer);

    return nav;
  }

  banner(text, img) {
    let bannerContainer = document.createElement("figure");
    let banner = document.createElement("div");
    let caption = document.createElement("figcaption");
    
    bannerContainer.id = "banner";
    banner.id = "banner-image";
    caption.id = "banner-caption";

    banner.style.backgroundImage = `url(${img})`;

    caption.textContent = text;

    bannerContainer.append(banner, caption);

    return bannerContainer;
  }

  footer(createMonth, githubLink) {
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    let text = `Created in ${createMonth} 2021. Odin Project x Dan T.`;
    let githubElem = document.createElement("a");
    let ghIcon = this.faIcon("fab", "fa-github-square", "icon");

    githubElem.append(ghIcon);
    githubElem.classList.add("footer-github-icon");
    githubElem.setAttribute("href", githubLink);
    githubElem.setAttribute("target", "_blank");
    githubElem.style.display = "inline-block";

    let p = document.createElement("p");

    p.textContent = text;
    p.append(githubElem);
    footer.append(p);

    return footer;
  }

  /**
   * Create an element with larger, emboldened, text,
   * similar to a pull quote in a magazine.
   * 
   * @param msg {string} Text to include in the block quote
   */
  pullquote(msg) {
    let pull = document.createElement("aside");
    pull.textContent = msg;

    pull.classList.add("pull-quote");

    return pull;
  }

  section(id) {
    let element = document.createElement("section");
    element.id = id;
    element.classList.add("section");

    return element;
  }

  /**
   * Creates a text heading element.
   * 
   * @param {*} text - The label for the header.
   * @param {*} level - The level of header.
   */
  heading(text, level, ...className) {
    if (level < 1 || level > 6) {
      throw Error("Heading levels can only be between 1 to 6!");
    }
    let header = document.createElement(`h${level}`);

    if (className !== null) {
      header.classList.add(...className);
    }
    header.textContent = text;

    return header;
  }

  paragraph(text, ...className) {
    let p = document.createElement("p");
    p.classList.add(...className);

    p.textContent = text;

    return p;
  }

  img(url, ...className) {
    let image = new Image();
    image.classList.add(...className);

    image.src = url;

    return image;
  }

  div(...className) {
    let div = document.createElement("div");
    div.classList.add(...className);

    return div;
  }

  button(label, ...className) {
    let btn = document.createElement("button");
    btn.classList.add(...className);

    btn.textContent = label;
    return btn;
  }

  /**
   * Generates a basic table with single-cell columns and rows, based on the imported file.
   * 
   * @param {csv} data - Data to turn into a table. Please use webpack to import .csv files.
   */
  table(id = "", data) {
    let table = document.createElement("table");
    table.id = id;
    
    // Generate a table header row.
    let tableHeader = document.createElement("thead");
    let tableHeaderRow = document.createElement("tr");

    for (let col of Object.keys(data[0])) {
      let colCell = document.createElement("th");
      colCell.textContent = col;

      tableHeaderRow.append(colCell);
    }
    tableHeader.append(tableHeaderRow);
    
    table.append(tableHeader);

    const tableBody = document.createElement("tbody");
    // Generate table rows.
    for (let i = 0; i < data.length; i++) {
      let trow = document.createElement("tr");
      for (let prop in data[i]) {
        let tcell = document.createElement("td");
        
        tcell.textContent = data[i][prop];
        trow.append(tcell);
      }

      tableBody.append(trow);      
    }
    table.append(tableBody);
    
    return table;
  }

  faIcon(category, name, ...className){
    let fasIcon = document.createElement("i");
    fasIcon.classList.add(category, name);
    if (className !== null) {
      fasIcon.classList.add(...className);
    }

    return fasIcon;
  }

  span(textContent = null, ...className) {
    let span = document.createElement("span");
    if (className.length !== 0) {
      span.classList.add(...className);
    }
    span.textContent = textContent;

    return span;
  }

  formInput(labelText, type, inputId, name) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let input = document.createElement("input");
    input.id = inputId;
    input.name = name;
    input.type = type;

    return [label, input];
  }

  dropdown(labelText, name, inputId, ...values) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let select = document.createElement("select");
    select.setAttribute("name", name);
    select.setAttribute("id", inputId);

    for (let val of values) {
      let entry = document.createElement("option");
      entry.value = val;
      if (isNaN(val) && (typeof val === "string")) {
        entry.textContent = val[0].toUpperCase() + val.slice(1);
      } else {
        entry.textContent = val;
      }

      select.append(entry);
    }

    return [label, select];
  }

  textArea(labelText, name, inputId) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    let ta = document.createElement("textarea");
    ta.id = inputId;
    ta.setAttribute("name", name);

    return [label, ta];
  }

  /**
   * Create a confirm modal.
   * 
   * @param {*} className - Classes the modal should belong to.
   * @param {*} title - The title appearing on the modal.
   * @param {*} message - The message appearing on the modal.
   * @param {*} positiveButtonLabel - Text for the OK button.
   * @param {*} negativeButtonLabel - Text for the cancel button.
   * @param {*} positiveCallback - Function to run if OK is pressed.
   * @param {*} negativeCallback - Function to run if cancel is pressed. 'null' by
   * default, which then just closes the modal.
   * 
   * @returns - Returns the generated modal element.
   */
  confirmModal(className, title, message, positiveButtonLabel,
    negativeButtonLabel, positiveCallback, negativeCallback = null) {
      let modalWrapper = this.div();
      modalWrapper.id = "prompt-wrapper";
      let modal = this.div(className);
      
      const titleHeader = this.heading(title, 1, "modal-header");
      const messageParagraph = this.paragraph(message, "modal-dialog");
      const positiveButton = this.button(positiveButtonLabel, "modal-confirm");
      const negativeButton = this.button(negativeButtonLabel, "modal-cancel");

      const buttonSection = this.div("modal-button-area");

      if (negativeCallback === null) {
        negativeCallback = () => {
          console.log("Negative pressed.");
          modalWrapper.remove();  
        };
      }

      // positiveButton.addEventListener("click", positiveCallback);
      positiveButton.addEventListener("click", (e) => {
        positiveCallback(e);
        modalWrapper.remove();
      })
      negativeButton.addEventListener("click", negativeCallback);

      buttonSection.append(positiveButton, negativeButton);
      modal.append(titleHeader, messageParagraph, buttonSection);
      modalWrapper.append(modal);

      // styling moved to .css page.

      return modalWrapper;
  }


  /**
   * Display a brief, unobtrusive pop-up message at the bottom of the screen.
   * @param {*} textContent - The text the message should display.
   * @param {*} duration - The duration of the message in seconds.
   */
  toast(textContent, duration) {
    let toastBox = document.createElement("div");
    let toastMessage = document.createElement("paragraph");
    toastBox.classList.add("toast");
    toastMessage.textContent = textContent;
    toastMessage.classList.add("toast-message");

    toastBox.append(toastMessage);

    let toastBoxCss = "position: fixed; bottom: 10vh;";
    toastBoxCss += "width: 100vw;"
    toastBoxCss += `animation: fade-in-out ${duration}s;`;
    toastBoxCss += "z-index: 9999;"

    let toastMessageCss = "margin: 0 auto; width: 300px; display: block; background-color: grey;"
    toastMessageCss += "text-align: center; border: 1px solid black; border-radius: 5px;"
    toastMessageCss += "color: white;"
    
    toastBox.style.cssText = toastBoxCss;
    toastMessage.style.cssText = toastMessageCss;

    toastBox.addEventListener("animationend", () => {
      toastBox.remove();
    });

    document.body.append(toastBox);
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUU7QUFDeEQsa0NBQWtDO0FBQ2xDO0FBQ0EsMkNBQTJDLGNBQWMsZ0JBQWdCLHVCQUF1QjtBQUNoRyw0Q0FBNEMseUJBQXlCLG1CQUFtQjtBQUN4RixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogQ29tcG9uZW50IGNsYXNzLiBDb250YWlucyB2YXJpb3VzIERPTSBlbGVtZW50cy5cclxuICogQXV0aG9yOiBkYXRyaW5vblxyXG4gKiBWZXJzaW9uOiAxLjFcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICBcclxuICBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjAwcHgpJyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBhIGJhc2ljIEhUTUwgc2tlbGV0b24gZm9yIHRoZSB3ZWIgcGFnZSwgZ2VuZXJhdGluZyBhIGhlYWRlcixcclxuICAgKiBtYWluLCBhbmQgc3RpY2t5IGZvb3Rlci5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IGhlYWRlclRpdGxlIC0gV2hhdCB0aGUgd2ViIHBhZ2UgaXMgY2FsbGVkLiBcclxuICAgKiBAcGFyYW0ge2Jvb2x9IGVtcHR5SGVhZGVyIC0gU2hvdWxkIHRoZSBoZWFkZXIgdXNlIGEgZGVmYXVsdCBzdHJ1Y3R1cmU/XHJcbiAgICogVGhlIGRlZmF1bHQgc3RydWN0dXJlIGxvb2tzIGxpa2UgWyBMb2dvIHwgfCB8IHwgTmF2aWdhdGlvbiBMaW5rc11cclxuICAgKiBAcmV0dXJucyAtIEFuIGFycmF5IGNvbnRhaW5pbmcgcmVmZXJlbmNlcyB0byB0aGUgZ2VuZXJhdGVkIGhlYWRlciwgbWFpbiwgYW5kIGZvb3Rlci5cclxuICAgKi9cclxuICBpbml0aWFsaXplU3RydWN0dXJlKGhlYWRlclRpdGxlLCBlbXB0eUhlYWRlciA9IGZhbHNlLCBjcmVhdGVNb250aCwgZ2l0aHViTGluaykge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IHRoaXMuZGl2KFwiY29udGVudFwiKTtcclxuICAgIGxldCBoZWFkZXI7XHJcbiAgICBpZiAoZW1wdHlIZWFkZXIpIHtcclxuICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlciA9IHRoaXMuaGVhZGVyKGhlYWRlclRpdGxlKTtcclxuICAgIH1cclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gdGhpcy5mb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBtYWluV3JhcHBlci5hcHBlbmQoaGVhZGVyLCBtYWluKTtcclxuICAgIGJvZHkuYXBwZW5kKG1haW5XcmFwcGVyLCBmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBbaGVhZGVyLCBtYWluLCBmb290ZXJdO1xyXG4gIH1cclxuXHJcbiAgY29udGVudCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgICBcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKHRpdGxlKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGxldCB0aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1iYXJzXCIsIFwibm8tZGlzcGxheVwiKTtcclxuXHJcbiAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGl0IGJpZ2dlciB0aGFuIHRoZSBxdWVyeSBydWxlLlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW51IHByZXNzZWQuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuICAgIC8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICB0aXRsZUVsZW0uaWQgPSBcInBhZ2UtdGl0bGVcIjtcclxuICAgIHRpdGxlRWxlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgXHJcbiAgICB0aXRsZUVsZW0uaW5zZXJ0QmVmb3JlKG1lbnVCdXR0b24sIHRpdGxlRWxlbS5maXJzdENoaWxkKTtcclxuICAgIGhlYWRlci5hcHBlbmQodGl0bGVFbGVtKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIG5hdmJhciguLi5saW5rcykge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgbmF2LmlkID0gXCJuYXZiYXJcIjtcclxuICAgIGxpbmtDb250YWluZXIuaWQgPSBcIm5hdmJhci1idXR0b25zLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgY29uc3QgbGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgY29uc3QgbGlua0FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcclxuICAgICAgXHJcbiAgICAgIGxpbmtBbmNob3IuaWQgPSBgbmF2bGluay0ke2xpbmsucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgbGlua0FuY2hvci50ZXh0Q29udGVudCA9IGxpbms7XHJcbiAgICAgIGxpbmtBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmFwcGVuZChsaW5rQW5jaG9yKTtcclxuICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQobGlua0J1dHRvbik7XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIFRvbyBzcGVjaWZpYy5cclxuICAgICAgLy8gbGlua0FuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgLy8gICBsZXQgY3VycmVudFNlY3Rpb25JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IHNlY3Rpb246bm90KC5uby1kaXNwbGF5KVwiKS5pZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAvLyAgIGxldCBjaG9zZW5TZWN0aW9uSWQgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIC8vICAgaWYgKGN1cnJlbnRTZWN0aW9uSWQgIT09IGNob3NlblNlY3Rpb25JZCkge1xyXG4gICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudFNlY3Rpb25JZH1gKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Nob3NlblNlY3Rpb25JZH1gKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgLy8gICB9XHJcblxyXG4gICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYuYXBwZW5kKGxpbmtDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBiYW5uZXIodGV4dCwgaW1nKSB7XHJcbiAgICBsZXQgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICAgIFxyXG4gICAgYmFubmVyQ29udGFpbmVyLmlkID0gXCJiYW5uZXJcIjtcclxuICAgIGJhbm5lci5pZCA9IFwiYmFubmVyLWltYWdlXCI7XHJcbiAgICBjYXB0aW9uLmlkID0gXCJiYW5uZXItY2FwdGlvblwiO1xyXG5cclxuICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmQoYmFubmVyLCBjYXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gYENyZWF0ZWQgaW4gJHtjcmVhdGVNb250aH0gMjAyMS4gT2RpbiBQcm9qZWN0IHggRGFuIFQuYDtcclxuICAgIGxldCBnaXRodWJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsZXQgZ2hJY29uID0gdGhpcy5mYUljb24oXCJmYWJcIiwgXCJmYS1naXRodWItc3F1YXJlXCIsIFwiaWNvblwiKTtcclxuXHJcbiAgICBnaXRodWJFbGVtLmFwcGVuZChnaEljb24pO1xyXG4gICAgZ2l0aHViRWxlbS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWdpdGh1Yi1pY29uXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGdpdGh1YkxpbmspO1xyXG4gICAgZ2l0aHViRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICBnaXRodWJFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBwLmFwcGVuZChnaXRodWJFbGVtKTtcclxuICAgIGZvb3Rlci5hcHBlbmQocCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggbGFyZ2VyLCBlbWJvbGRlbmVkLCB0ZXh0LFxyXG4gICAqIHNpbWlsYXIgdG8gYSBwdWxsIHF1b3RlIGluIGEgbWFnYXppbmUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBUZXh0IHRvIGluY2x1ZGUgaW4gdGhlIGJsb2NrIHF1b3RlXHJcbiAgICovXHJcbiAgcHVsbHF1b3RlKG1zZykge1xyXG4gICAgbGV0IHB1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XHJcbiAgICBwdWxsLnRleHRDb250ZW50ID0gbXNnO1xyXG5cclxuICAgIHB1bGwuY2xhc3NMaXN0LmFkZChcInB1bGwtcXVvdGVcIik7XHJcblxyXG4gICAgcmV0dXJuIHB1bGw7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uKGlkKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0ZXh0IGhlYWRpbmcgZWxlbWVudC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IHRleHQgLSBUaGUgbGFiZWwgZm9yIHRoZSBoZWFkZXIuXHJcbiAgICogQHBhcmFtIHsqfSBsZXZlbCAtIFRoZSBsZXZlbCBvZiBoZWFkZXIuXHJcbiAgICovXHJcbiAgaGVhZGluZyh0ZXh0LCBsZXZlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAobGV2ZWwgPCAxIHx8IGxldmVsID4gNikge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkhlYWRpbmcgbGV2ZWxzIGNhbiBvbmx5IGJlIGJldHdlZW4gMSB0byA2IVwiKTtcclxuICAgIH1cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtsZXZlbH1gKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBwYXJhZ3JhcGgodGV4dCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICBpbWcodXJsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG5cclxuICBkaXYoLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbihsYWJlbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGEgYmFzaWMgdGFibGUgd2l0aCBzaW5nbGUtY2VsbCBjb2x1bW5zIGFuZCByb3dzLCBiYXNlZCBvbiB0aGUgaW1wb3J0ZWQgZmlsZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge2Nzdn0gZGF0YSAtIERhdGEgdG8gdHVybiBpbnRvIGEgdGFibGUuIFBsZWFzZSB1c2Ugd2VicGFjayB0byBpbXBvcnQgLmNzdiBmaWxlcy5cclxuICAgKi9cclxuICB0YWJsZShpZCA9IFwiXCIsIGRhdGEpIHtcclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIHRhYmxlLmlkID0gaWQ7XHJcbiAgICBcclxuICAgIC8vIEdlbmVyYXRlIGEgdGFibGUgaGVhZGVyIHJvdy5cclxuICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgIGxldCB0YWJsZUhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgb2YgT2JqZWN0LmtleXMoZGF0YVswXSkpIHtcclxuICAgICAgbGV0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgIGNvbENlbGwudGV4dENvbnRlbnQgPSBjb2w7XHJcblxyXG4gICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmQoY29sQ2VsbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZUhlYWRlci5hcHBlbmQodGFibGVIZWFkZXJSb3cpO1xyXG4gICAgXHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgIC8vIEdlbmVyYXRlIHRhYmxlIHJvd3MuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGZvciAobGV0IHByb3AgaW4gZGF0YVtpXSkge1xyXG4gICAgICAgIGxldCB0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0Y2VsbC50ZXh0Q29udGVudCA9IGRhdGFbaV1bcHJvcF07XHJcbiAgICAgICAgdHJvdy5hcHBlbmQodGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kKHRyb3cpOyAgICAgIFxyXG4gICAgfVxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIGZhSWNvbihjYXRlZ29yeSwgbmFtZSwgLi4uY2xhc3NOYW1lKXtcclxuICAgIGxldCBmYXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnksIG5hbWUpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBmYXNJY29uLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFzSWNvbjtcclxuICB9XHJcblxyXG4gIHNwYW4odGV4dENvbnRlbnQgPSBudWxsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpZiAoY2xhc3NOYW1lLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIGZvcm1JbnB1dChsYWJlbFRleHQsIHR5cGUsIGlucHV0SWQsIG5hbWUpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LmlkID0gaW5wdXRJZDtcclxuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgaW5wdXRdO1xyXG4gIH1cclxuXHJcbiAgZHJvcGRvd24obGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkLCAuLi52YWx1ZXMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlcykge1xyXG4gICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBlbnRyeS52YWx1ZSA9IHZhbDtcclxuICAgICAgaWYgKGlzTmFOKHZhbCkgJiYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpKSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWxbMF0udG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZChlbnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgc2VsZWN0XTtcclxuICB9XHJcblxyXG4gIHRleHRBcmVhKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgdGEuaWQgPSBpbnB1dElkO1xyXG4gICAgdGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCB0YV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb25maXJtIG1vZGFsLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Kn0gY2xhc3NOYW1lIC0gQ2xhc3NlcyB0aGUgbW9kYWwgc2hvdWxkIGJlbG9uZyB0by5cclxuICAgKiBAcGFyYW0geyp9IHRpdGxlIC0gVGhlIHRpdGxlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgT0sgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBPSyBpcyBwcmVzc2VkLlxyXG4gICAqIEBwYXJhbSB7Kn0gbmVnYXRpdmVDYWxsYmFjayAtIEZ1bmN0aW9uIHRvIHJ1biBpZiBjYW5jZWwgaXMgcHJlc3NlZC4gJ251bGwnIGJ5XHJcbiAgICogZGVmYXVsdCwgd2hpY2ggdGhlbiBqdXN0IGNsb3NlcyB0aGUgbW9kYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMgLSBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbW9kYWwgZWxlbWVudC5cclxuICAgKi9cclxuICBjb25maXJtTW9kYWwoY2xhc3NOYW1lLCB0aXRsZSwgbWVzc2FnZSwgcG9zaXRpdmVCdXR0b25MYWJlbCxcclxuICAgIG5lZ2F0aXZlQnV0dG9uTGFiZWwsIHBvc2l0aXZlQ2FsbGJhY2ssIG5lZ2F0aXZlQ2FsbGJhY2sgPSBudWxsKSB7XHJcbiAgICAgIGxldCBtb2RhbFdyYXBwZXIgPSB0aGlzLmRpdigpO1xyXG4gICAgICBtb2RhbFdyYXBwZXIuaWQgPSBcInByb21wdC13cmFwcGVyXCI7XHJcbiAgICAgIGxldCBtb2RhbCA9IHRoaXMuZGl2KGNsYXNzTmFtZSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB0aXRsZUhlYWRlciA9IHRoaXMuaGVhZGluZyh0aXRsZSwgMSwgXCJtb2RhbC1oZWFkZXJcIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VQYXJhZ3JhcGggPSB0aGlzLnBhcmFncmFwaChtZXNzYWdlLCBcIm1vZGFsLWRpYWxvZ1wiKTtcclxuICAgICAgY29uc3QgcG9zaXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihwb3NpdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNvbmZpcm1cIik7XHJcbiAgICAgIGNvbnN0IG5lZ2F0aXZlQnV0dG9uID0gdGhpcy5idXR0b24obmVnYXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jYW5jZWxcIik7XHJcblxyXG4gICAgICBjb25zdCBidXR0b25TZWN0aW9uID0gdGhpcy5kaXYoXCJtb2RhbC1idXR0b24tYXJlYVwiKTtcclxuXHJcbiAgICAgIGlmIChuZWdhdGl2ZUNhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgbmVnYXRpdmVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmVnYXRpdmUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7ICBcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9zaXRpdmVDYWxsYmFjayk7XHJcbiAgICAgIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIHBvc2l0aXZlQ2FsbGJhY2soZSk7XHJcbiAgICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICBuZWdhdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVnYXRpdmVDYWxsYmFjayk7XHJcblxyXG4gICAgICBidXR0b25TZWN0aW9uLmFwcGVuZChwb3NpdGl2ZUJ1dHRvbiwgbmVnYXRpdmVCdXR0b24pO1xyXG4gICAgICBtb2RhbC5hcHBlbmQodGl0bGVIZWFkZXIsIG1lc3NhZ2VQYXJhZ3JhcGgsIGJ1dHRvblNlY3Rpb24pO1xyXG4gICAgICBtb2RhbFdyYXBwZXIuYXBwZW5kKG1vZGFsKTtcclxuXHJcbiAgICAgIC8vIHN0eWxpbmcgbW92ZWQgdG8gLmNzcyBwYWdlLlxyXG5cclxuICAgICAgcmV0dXJuIG1vZGFsV3JhcHBlcjtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGEgYnJpZWYsIHVub2J0cnVzaXZlIHBvcC11cCBtZXNzYWdlIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cclxuICAgKiBAcGFyYW0geyp9IHRleHRDb250ZW50IC0gVGhlIHRleHQgdGhlIG1lc3NhZ2Ugc2hvdWxkIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHsqfSBkdXJhdGlvbiAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbWVzc2FnZSBpbiBzZWNvbmRzLlxyXG4gICAqL1xyXG4gIHRvYXN0KHRleHRDb250ZW50LCBkdXJhdGlvbikge1xyXG4gICAgbGV0IHRvYXN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xyXG4gICAgdG9hc3RCb3guY2xhc3NMaXN0LmFkZChcInRvYXN0XCIpO1xyXG4gICAgdG9hc3RNZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB0b2FzdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRvYXN0LW1lc3NhZ2VcIik7XHJcblxyXG4gICAgdG9hc3RCb3guYXBwZW5kKHRvYXN0TWVzc2FnZSk7XHJcblxyXG4gICAgbGV0IHRvYXN0Qm94Q3NzID0gXCJwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMTB2aDtcIjtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwid2lkdGg6IDEwMHZ3O1wiXHJcbiAgICB0b2FzdEJveENzcyArPSBgYW5pbWF0aW9uOiBmYWRlLWluLW91dCAke2R1cmF0aW9ufXM7YDtcclxuICAgIHRvYXN0Qm94Q3NzICs9IFwiei1pbmRleDogOTk5OTtcIlxyXG5cclxuICAgIGxldCB0b2FzdE1lc3NhZ2VDc3MgPSBcIm1hcmdpbjogMCBhdXRvOyB3aWR0aDogMzAwcHg7IGRpc3BsYXk6IGJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiXHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz0gXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiA1cHg7XCJcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPSBcImNvbG9yOiB3aGl0ZTtcIlxyXG4gICAgXHJcbiAgICB0b2FzdEJveC5zdHlsZS5jc3NUZXh0ID0gdG9hc3RCb3hDc3M7XHJcbiAgICB0b2FzdE1lc3NhZ2Uuc3R5bGUuY3NzVGV4dCA9IHRvYXN0TWVzc2FnZUNzcztcclxuXHJcbiAgICB0b2FzdEJveC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgdG9hc3RCb3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b2FzdEJveCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==