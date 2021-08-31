import connection from "./TodoListStorage.js";
import {Component} from "./component.js";
import {TodoListElement} from "./TodoListElement.js";

class TodoListSidebar {
  
  #mql;
  #c;
  #sidebarBG;
  #sidebarContainer;
  #sidebarContent;
  #sidebarCategoryContainer;
  #sidebarLinks = {
    all: {
      displayLabel: "Active",
      type: "attribute"
    }, 
    today: {
      displayLabel: "Today",
      type: "date"
    }, 
    week: {
      displayLabel: "This Week",
      type: "date"
    },
    month: {
      displayLabel: "This Month",
      type: "date"
    },
    nodate: {
      displayLabel: "No Due Date",
      type: "attribute"
    },
    category: {
      displayLabel: "By Category",
      type: "category"
    },
    completed: {
      displayLabel: "Completed",
      type: "attribute"
    }
  };
  
  constructor() {
    this.#c = new Component();

    this.#sidebarContent = document.createElement("nav");
    this.#sidebarContent.id = "sidebar-nav";

    this.#sidebarBG = this.#c.div("sidebar-wrapper");
    this.#sidebarContainer = this.#c.div("sidebar");

    this.#sidebarBG.append(this.#sidebarContainer);
    this.#sidebarContainer.append(this.#sidebarContent);

    this.#loadSideBar();
  }

  set mql(value) {
    this.#mql = window.matchMedia(`(max-width: ${value}px)`);
  }

  get mql() {
    return this.#mql;
  }

  #loadSideBar() {
    let sideBarLinksContainer = document.createElement("ul");
    
    for (let link in this.#sidebarLinks) {
      let linkUl;
      let linkId;
      let linkButton;

      linkUl = document.createElement("li");
      linkButton = this.#c.button(this.#sidebarLinks[link].displayLabel);
      linkId = `nav-link-${link}`;
      
      linkUl.id = linkId;
      linkUl.classList.add("task-type-nav-link");

      if (link !== "category") { // skip category handler addition, will be done elsewhere.
        linkUl.addEventListener("click", () => {
          TodoListElement.filterTasks(link, this.#sidebarLinks[link].type)
        });
      }

      linkUl.append(linkButton);
  
      sideBarLinksContainer.append(linkUl);

      // save category id element reference, so that we can update its categories later.
      if (link === "category") {
        this.#sidebarCategoryContainer = linkUl;
      }
    }
  
    this.#sidebarContent.append(sideBarLinksContainer);
  
    this.updateCategorySidebarListing();
  }

  updateCategorySidebarListing() {
    this.#sidebarCategoryContainer.append(this.#getCategoriesAsLinks());
  }

  static queryPageWidth(e) {
    if (e.matches) {
      document.querySelector(".sidebar").classList.add("hide-sidebar");
      document.querySelector(".sidebar-wrapper").classList.remove("sidebar-active-wrapper-bg");
    } else {
      // it bigger than the query rule.
      document.querySelector(".sidebar").classList.remove("hide-sidebar");
    }
  }

  static toggleSidebar(e) {
    console.log("Sidebar: Sidebar toggling...");
    let sidebar = document.querySelector(".sidebar");
    let sidebarWrapper = document.querySelector(".sidebar-wrapper");
    sidebar.classList.toggle("hide-sidebar");
    if (!sidebar.classList.contains("hide-sidebar")) {
      sidebarWrapper.classList.add("sidebar-active-wrapper-bg");
    } else {
      sidebarWrapper.classList.remove("sidebar-active-wrapper-bg");
    }
  }

  /**
   * Check the categories listed for each task, and then return a navbar elem with 
   * the categories as list elements.
   * Ideally, run this function each time you submit or update a task.
   * 
   * @returns links - An array of links pertaining to all relevant categories, 
   * and the count of tasks in each category. Add this after the category
   * link.
   */
  #getCategoriesAsLinks() {
    let categories = connection.getAllItems().reduce((cats, task) => {
      // guard clause since continue doesn't work; after all, it is a function, not a loop block.
      if (task.categories.length === 0) {
        return cats;
      }
      let taskCategories = task.categories.map(elem => elem.value);
      // need to convert task.categories into an array.
      for (let cat of taskCategories) {
        cat = cat.replace(" ", "-").toLowerCase();
        if (cat in cats) {
          cats[cat] += 1;
        } else {
          cats[cat] = 1;
        }
      }
  
      return cats;
    }, {});
  
    let catContainer = document.createElement("ul");
    catContainer.id = "category-links";
  
    for (let cat in categories) {
      let catListItem = document.createElement('li');
      let catLink = document.createElement("button");
      catLink.textContent = cat.replace("-", ' ');
      catLink.textContent += ` (${categories[cat]})`;
  
      //TODO
      // Add filter tasks callback over here.
      catLink.classList.add("category-nav-link");
      catLink.addEventListener("click", () => {TodoListElement.filterTasks(cat, "category")});
  
      catListItem.append(catLink);
      catContainer.append(catListItem);
    }
  
    return catContainer;
  }

  getSidebar() {
    return this.#sidebarBG;
  }
}

const sidebar = new TodoListSidebar();

export {sidebar, TodoListSidebar};