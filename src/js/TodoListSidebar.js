import connection from "./TodoListConnection.js";
import {Component} from "./component.js";

export class TodoListSidebar {
  
  #mql;
  #c;
  #sidebarBG;
  #sidebarContainer;
  #sidebarContent;
  #sidebarCategoryContainer;
  
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
    let sideBarLinks = ["All", "Today", "This Week", "Categories", "No Due Date", "Completed"];
    
    for (let link of sideBarLinks) {
      let linkUl = document.createElement("li");
      let button = this.#c.button(link);
      let linkId = link.replace(" ", "-").toLowerCase();
      
      linkId = `nav-link-${linkId}`;
      linkUl.id = linkId;
      linkUl.classList.add("task-type-nav-link");
      //linkUl.textContent = link;
      linkUl.append(button);
  
      sideBarLinksContainer.append(linkUl);

      if (linkId.includes("categor")) {
        this.#sidebarCategoryContainer = linkUl;
      }
    }
  
    this.#sidebarContent.append(sideBarLinksContainer);
  
    // document.querySelector(".sidebar").append(sideBarNav);
    
    // now add in the categories. 
    // This is a method because we want to call this each time a task is added / updated.
    // We need to update the categories...
    this.updateCategoriesOnSidebar();
  }

  updateCategoriesOnSidebar() {
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
   * Check the categories listed for each task, and then return a navbar with 
   * the categories. Ideally, run this function each time you submit or update
   * a task.
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
      let taskCategories = JSON.parse(task.categories).map(elem => elem.value);
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
      let catLink = document.createElement('li');
      catLink.textContent = cat.replace("-", ' ');
      catLink.textContent += ` (${categories[cat]})`;
  
      catLink.classList.add("category-nav-link");
  
      catContainer.append(catLink);
    }
  
    return catContainer;
  }

  getSidebar() {
    return this.#sidebarBG;
  }
}