/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yaireo/tagify/dist/tagify.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@yaireo/tagify/dist/tagify.min.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * Tagify (v 4.7.2) - tags input component
 * By Yair Even-Or
 * Don't sell this code. (c)
 * https://github.com/yairEO/tagify
 */

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function i(i){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?e(Object(a),!0).forEach((function(e){t(i,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(a,t))}))}return i}const s=(t,e,i,s)=>(t=""+t,e=""+e,s&&(t=t.trim(),e=e.trim()),i?t==e:t.toLowerCase()==e.toLowerCase());function a(t,e){var i,s={};for(i in t)e.indexOf(i)<0&&(s[i]=t[i]);return s}function n(t){var e=document.createElement("div");return t.replace(/\&#?[0-9a-z]+;/gi,(function(t){return e.innerHTML=t,e.innerText}))}function o(t,e){for(e=e||"previous";t=t[e+"Sibling"];)if(3==t.nodeType)return t}function r(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/`|'/g,"&#039;"):t}function l(t){var e=Object.prototype.toString.call(t).split(" ")[1].slice(0,-1);return t===Object(t)&&"Array"!=e&&"Function"!=e&&"RegExp"!=e&&"HTMLUnknownElement"!=e}function d(t,e,i){function s(t,e){for(var i in e)if(e.hasOwnProperty(i)){if(l(e[i])){l(t[i])?s(t[i],e[i]):t[i]=Object.assign({},e[i]);continue}if(Array.isArray(e[i])){t[i]=Object.assign([],e[i]);continue}t[i]=e[i]}}return t instanceof Object||(t={}),s(t,e),i&&s(t,i),t}function h(t){return String.prototype.normalize?"string"==typeof t?t.normalize("NFD").replace(/[\u0300-\u036f]/g,""):void 0:t}var g=()=>/(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);var p={delimiters:",",pattern:null,tagTextProp:"value",maxTags:1/0,callbacks:{},addTagOnBlur:!0,duplicates:!1,whitelist:[],blacklist:[],enforceWhitelist:!1,userInput:!0,keepInvalidTags:!1,mixTagsAllowedAfter:/,|\.|\:|\s/,mixTagsInterpolator:["[[","]]"],backspace:!0,skipInvalid:!1,pasteAsTags:!0,editTags:{clicks:2,keepInvalid:!0},transformTag:()=>{},trim:!0,a11y:{focusableTags:!1},mixMode:{insertAfterTag:" "},autoComplete:{enabled:!0,rightKey:!1},classNames:{namespace:"tagify",mixMode:"tagify--mix",selectMode:"tagify--select",input:"tagify__input",focus:"tagify--focus",tag:"tagify__tag",tagNoAnimation:"tagify--noAnim",tagInvalid:"tagify--invalid",tagNotAllowed:"tagify--notAllowed",inputInvalid:"tagify__input--invalid",tagX:"tagify__tag__removeBtn",tagText:"tagify__tag-text",dropdown:"tagify__dropdown",dropdownWrapper:"tagify__dropdown__wrapper",dropdownItem:"tagify__dropdown__item",dropdownItemActive:"tagify__dropdown__item--active",dropdownInital:"tagify__dropdown--initial",scopeLoading:"tagify--loading",tagLoading:"tagify__tag--loading",tagEditing:"tagify__tag--editable",tagFlash:"tagify__tag--flash",tagHide:"tagify__tag--hide",hasMaxTags:"tagify--hasMaxTags",hasNoTags:"tagify--noTags",empty:"tagify--empty"},dropdown:{classname:"",enabled:2,maxItems:10,searchKeys:["value","searchBy"],fuzzySearch:!0,caseSensitive:!1,accentedSearch:!0,highlightFirst:!1,closeOnSelect:!0,clearOnSelect:!0,position:"all",appendTarget:null},hooks:{beforeRemoveTag:()=>Promise.resolve(),beforePaste:()=>Promise.resolve(),suggestionClick:()=>Promise.resolve()}};function c(){this.dropdown={};for(let t in this._dropdown)this.dropdown[t]="function"==typeof this._dropdown[t]?this._dropdown[t].bind(this):this._dropdown[t];this.settings.dropdown.enabled>=0&&this.dropdown.init()}var u,m={init(){this.DOM.dropdown=this.parseTemplate("dropdown",[this.settings]),this.DOM.dropdown.content=this.DOM.dropdown.querySelector(this.settings.classNames.dropdownWrapperSelector)},show(t){var e,i,a,n=this.settings,o="mix"==n.mode&&!n.enforceWhitelist,r=!n.whitelist||!n.whitelist.length,d="manual"==n.dropdown.position;if(t=void 0===t?this.state.inputText:t,(!r||o||n.templates.dropdownItemNoMatch)&&!1!==n.dropdown.enable&&!this.state.isLoading){if(clearTimeout(this.dropdownHide__bindEventsTimeout),this.suggestedListItems=this.dropdown.filterListItems(t),t&&!this.suggestedListItems.length&&(this.trigger("dropdown:noMatch",t),n.templates.dropdownItemNoMatch&&(a=n.templates.dropdownItemNoMatch.call(this,{value:t}))),!a){if(this.suggestedListItems.length)t&&o&&!this.state.editing.scope&&!s(this.suggestedListItems[0].value,t)&&this.suggestedListItems.unshift({value:t});else{if(!t||!o||this.state.editing.scope)return this.input.autocomplete.suggest.call(this),void this.dropdown.hide();this.suggestedListItems=[{value:t}]}i=""+(l(e=this.suggestedListItems[0])?e.value:e),n.autoComplete&&i&&0==i.indexOf(t)&&this.input.autocomplete.suggest.call(this,e)}this.dropdown.fill(a),n.dropdown.highlightFirst&&this.dropdown.highlightOption(this.DOM.dropdown.content.children[0]),this.state.dropdown.visible||setTimeout(this.dropdown.events.binding.bind(this)),this.state.dropdown.visible=t||!0,this.state.dropdown.query=t,this.setStateSelection(),d||setTimeout((()=>{this.dropdown.position(),this.dropdown.render()})),setTimeout((()=>{this.trigger("dropdown:show",this.DOM.dropdown)}))}},hide(t){var e=this.DOM,i=e.scope,s=e.dropdown,a="manual"==this.settings.dropdown.position&&!t;if(s&&document.body.contains(s)&&!a)return window.removeEventListener("resize",this.dropdown.position),this.dropdown.events.binding.call(this,!1),i.setAttribute("aria-expanded",!1),s.parentNode.removeChild(s),setTimeout((()=>{this.state.dropdown.visible=!1}),100),this.state.dropdown.query=this.state.ddItemData=this.state.ddItemElm=this.state.selection=null,this.state.tag&&this.state.tag.value.length&&(this.state.flaggedTags[this.state.tag.baseOffset]=this.state.tag),this.trigger("dropdown:hide",s),this},toggle(t){this.dropdown[this.state.dropdown.visible&&!t?"hide":"show"]()},render(){var t,e,i,s=(t=this.DOM.dropdown,(i=t.cloneNode(!0)).style.cssText="position:fixed; top:-9999px; opacity:0",document.body.appendChild(i),e=i.clientHeight,i.parentNode.removeChild(i),e),a=this.settings;return this.DOM.scope.setAttribute("aria-expanded",!0),document.body.contains(this.DOM.dropdown)||(this.DOM.dropdown.classList.add(a.classNames.dropdownInital),this.dropdown.position(s),a.dropdown.appendTarget.appendChild(this.DOM.dropdown),setTimeout((()=>this.DOM.dropdown.classList.remove(a.classNames.dropdownInital)))),this},fill(t){var e;t="string"==typeof t?t:this.dropdown.createListHTML(t||this.suggestedListItems),this.DOM.dropdown.content.innerHTML=(e=t)?e.replace(/\>[\r\n ]+\</g,"><").replace(/(<.*?>)|\s+/g,((t,e)=>e||" ")):""},refilter(t){t=t||this.state.dropdown.query||"",this.suggestedListItems=this.dropdown.filterListItems(t),this.dropdown.fill(),this.suggestedListItems.length||this.dropdown.hide(),this.trigger("dropdown:updated",this.DOM.dropdown)},position(t){var e=this.settings.dropdown;if("manual"!=e.position){var i,s,a,n,o,r,l=this.DOM.dropdown,d=e.placeAbove,h=document.documentElement.clientHeight,g=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)>480?e.position:"all",p=this.DOM["input"==g?"input":"scope"];t=t||l.clientHeight,this.state.dropdown.visible&&("text"==g?(a=(i=this.getCaretGlobalPosition()).bottom,s=i.top,n=i.left,o="auto"):(r=function(t){for(var e=0,i=0;t;)e+=t.offsetLeft||0,i+=t.offsetTop||0,t=t.parentNode;return{left:e,top:i}}(this.settings.dropdown.appendTarget),s=(i=p.getBoundingClientRect()).top-r.top,a=i.bottom-1-r.top,n=i.left-r.left,o=i.width+"px"),s=Math.floor(s),a=Math.ceil(a),d=void 0===d?h-i.bottom<t:d,l.style.cssText="left:"+(n+window.pageXOffset)+"px; width:"+o+";"+(d?"top: "+(s+window.pageYOffset)+"px":"top: "+(a+window.pageYOffset)+"px"),l.setAttribute("placement",d?"top":"bottom"),l.setAttribute("position",g))}},events:{binding(t=!0){var e=this.dropdown.events.callbacks,i=this.listeners.dropdown=this.listeners.dropdown||{position:this.dropdown.position.bind(this),onKeyDown:e.onKeyDown.bind(this),onMouseOver:e.onMouseOver.bind(this),onMouseLeave:e.onMouseLeave.bind(this),onClick:e.onClick.bind(this),onScroll:e.onScroll.bind(this)},s=t?"addEventListener":"removeEventListener";"manual"!=this.settings.dropdown.position&&(window[s]("resize",i.position),window[s]("keydown",i.onKeyDown)),this.DOM.dropdown[s]("mouseover",i.onMouseOver),this.DOM.dropdown[s]("mouseleave",i.onMouseLeave),this.DOM.dropdown[s]("mousedown",i.onClick),this.DOM.dropdown.content[s]("scroll",i.onScroll)},callbacks:{onKeyDown(t){var e=this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector),i=this.dropdown.getSuggestionDataByNode(e);switch(t.key){case"ArrowDown":case"ArrowUp":case"Down":case"Up":var s;t.preventDefault(),e&&(e=e[("ArrowUp"==t.key||"Up"==t.key?"previous":"next")+"ElementSibling"]),e||(s=this.DOM.dropdown.content.children,e=s["ArrowUp"==t.key||"Up"==t.key?s.length-1:0]),i=this.dropdown.getSuggestionDataByNode(e),this.dropdown.highlightOption(e,!0);break;case"Escape":case"Esc":this.dropdown.hide();break;case"ArrowRight":if(this.state.actions.ArrowLeft)return;case"Tab":if("mix"!=this.settings.mode&&e&&!this.settings.autoComplete.rightKey&&!this.state.editing){t.preventDefault();var a=this.dropdown.getMappedValue(i);return this.input.autocomplete.set.call(this,a),!1}return!0;case"Enter":t.preventDefault(),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{if(e)return this.dropdown.selectOption(e);this.dropdown.hide(),"mix"!=this.settings.mode&&this.addTags(this.state.inputText.trim(),!0)})).catch((t=>t));break;case"Backspace":{if("mix"==this.settings.mode||this.state.editing.scope)return;let t=this.state.inputText.trim();""!=t&&8203!=t.charCodeAt(0)||(!0===this.settings.backspace?this.removeTags():"edit"==this.settings.backspace&&setTimeout(this.editTag.bind(this),0))}}},onMouseOver(t){var e=t.target.closest(this.settings.classNames.dropdownItemSelector);e&&this.dropdown.highlightOption(e)},onMouseLeave(t){this.dropdown.highlightOption()},onClick(t){if(0==t.button&&t.target!=this.DOM.dropdown&&t.target!=this.DOM.dropdown.content){var e=t.target.closest(this.settings.classNames.dropdownItemSelector),i=this.dropdown.getSuggestionDataByNode(e);this.state.actions.selectOption=!0,setTimeout((()=>this.state.actions.selectOption=!1),50),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{e?this.dropdown.selectOption(e):this.dropdown.hide()})).catch((t=>t))}},onScroll(t){var e=t.target,i=e.scrollTop/(e.scrollHeight-e.parentNode.clientHeight)*100;this.trigger("dropdown:scroll",{percentage:Math.round(i)})}}},getSuggestionDataByNode(t){var e=t?+t.getAttribute("tagifySuggestionIdx"):-1;return this.suggestedListItems[e]||null},highlightOption(t,e){var i,s=this.settings.classNames.dropdownItemActive;if(this.state.ddItemElm&&(this.state.ddItemElm.classList.remove(s),this.state.ddItemElm.removeAttribute("aria-selected")),!t)return this.state.ddItemData=null,this.state.ddItemElm=null,void this.input.autocomplete.suggest.call(this);i=this.suggestedListItems[this.getNodeIndex(t)],this.state.ddItemData=i,this.state.ddItemElm=t,t.classList.add(s),t.setAttribute("aria-selected",!0),e&&(t.parentNode.scrollTop=t.clientHeight+t.offsetTop-t.parentNode.clientHeight),this.settings.autoComplete&&(this.input.autocomplete.suggest.call(this,i),this.dropdown.position())},selectOption(t){var e,i=this.settings.dropdown,s=i.clearOnSelect,a=i.closeOnSelect;if(!t)return e=this.addTags(this.state.inputText,!0),void(a&&this.dropdown.hide());var n=t.getAttribute("tagifySuggestionIdx"),o=this.suggestedListItems[+n];this.trigger("dropdown:select",{data:o,elm:t}),n&&o?(this.state.editing?this.onEditTagDone(null,d({__isValid:!0},o)):e=this["mix"==this.settings.mode?"addMixTags":"addTags"]([o],s),this.DOM.input.parentNode&&(setTimeout((()=>{this.DOM.input.focus(),this.toggleFocusClass(!0),this.placeCaretAfterNode(e)})),a?setTimeout(this.dropdown.hide.bind(this)):this.dropdown.refilter())):this.dropdown.hide()},selectAll(){return this.suggestedListItems.length=0,this.dropdown.hide(),this.addTags(this.dropdown.filterListItems(""),!0),this},filterListItems(t,e){var i,s,a,n,o,r=this.settings,d=r.dropdown,g=(e=e||{},t="select"==r.mode&&this.value.length&&this.value[0][r.tagTextProp]==t?"":t,[]),p=r.whitelist,c=d.maxItems||1/0,u=d.searchKeys,m=0;if(!t||!u.length)return(r.duplicates?p:p.filter((t=>!this.isTagDuplicate(l(t)?t.value:t)))).slice(0,c);function v(t,e){return e.toLowerCase().split(" ").every((e=>t.includes(e.toLowerCase())))}for(o=d.caseSensitive?""+t:(""+t).toLowerCase();m<p.length;m++){i=p[m]instanceof Object?p[m]:{value:p[m]};let t=!Object.keys(i).some((t=>u.includes(t)))?["value"]:u;if(d.fuzzySearch&&!e.exact?(a=t.reduce(((t,e)=>t+" "+(i[e]||"")),"").toLowerCase(),d.accentedSearch&&(a=h(a),o=h(o)),s=v(a,o)):s=t.some((t=>{var s=""+(i[t]||"");return d.accentedSearch&&(s=h(s),o=h(o)),d.caseSensitive||(s=s.toLowerCase()),e.exact?s==o:0==s.indexOf(o)})),n=!r.duplicates&&this.isTagDuplicate(l(i)?i.value:i),s&&!n&&c--&&g.push(i),0==c)break}return g},getMappedValue(t){var e=this.settings.dropdown.mapValueTo;return e?"function"==typeof e?e(t):t[e]||t.value:t.value},createListHTML(t){return d([],t).map(((t,e)=>{"string"!=typeof t&&"number"!=typeof t||(t={value:t});var i=this.dropdown.getMappedValue(t);t.value=i&&"string"==typeof i?r(i):i;var s=this.settings.templates.dropdownItem.apply(this,[t,this]);return s=s.replace(/\s*tagifySuggestionIdx=(["'])(.*?)\1/gim,"").replace(">",` tagifySuggestionIdx="${e}">`)})).join("")}},v={empty:"empty",exceed:"number of tags exceeded",pattern:"pattern mismatch",duplicate:"already exists",notAllowed:"not allowed"},f={wrapper:(t,e)=>`<tags class="${e.classNames.namespace} ${e.mode?`${e.classNames[e.mode+"Mode"]}`:""} ${t.className}"\n                    ${e.readonly?"readonly":""}\n                    ${e.disabled?"disabled":""}\n                    ${e.required?"required":""}\n                    tabIndex="-1">\n            <span ${!e.readonly&&e.userInput?"contenteditable":""} tabIndex="0" data-placeholder="${e.placeholder||"&#8203;"}" aria-placeholder="${e.placeholder||""}"\n                class="${e.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${"mix"==e.mode}"></span>\n        </tags>`,tag(t,e){var i=this.settings;return`<tag title="${t.title||t.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${i.a11y.focusableTags?0:-1}"\n                    class="${i.classNames.tag} ${t.class||""}"\n                    ${this.getAttributes(t)}>\n            <x title='' class="${i.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${i.classNames.tagText}">${t[i.tagTextProp]||t.value}</span>\n            </div>\n        </tag>`},dropdown(t){var e=t.dropdown,i="manual"==e.position,s=`${t.classNames.dropdown}`;return`<div class="${i?"":s} ${e.classname}" role="listbox" aria-labelledby="dropdown">\n                    <div class="${t.classNames.dropdownWrapper}"></div>\n                </div>`},dropdownItem(t,e){return`<div ${this.getAttributes(t)}\n                    class='${this.settings.classNames.dropdownItem} ${t.class?t.class:""}'\n                    tabindex="0"\n                    role="option">${t.value}</div>`},dropdownItemNoMatch:null};var T={customBinding(){this.customEventsList.forEach((t=>{this.on(t,this.settings.callbacks[t])}))},binding(t=!0){var e,i=this.events.callbacks,s=t?"addEventListener":"removeEventListener";if(!this.state.mainEvents||!t)for(var a in this.state.mainEvents=t,t&&!this.listeners.main&&(this.events.bindGlobal.call(this),this.settings.isJQueryPlugin&&jQuery(this.DOM.originalInput).on("tagify.removeAllTags",this.removeAllTags.bind(this))),e=this.listeners.main=this.listeners.main||{focus:["input",i.onFocusBlur.bind(this)],keydown:["input",i.onKeydown.bind(this)],click:["scope",i.onClickScope.bind(this)],dblclick:["scope",i.onDoubleClickScope.bind(this)],paste:["input",i.onPaste.bind(this)]})this.DOM[e[a][0]][s](a,e[a][1])},bindGlobal(t){var e,i=this.events.callbacks,s=t?"removeEventListener":"addEventListener";if(t||!this.listeners.global)for(e of(this.listeners.global=this.listeners&&this.listeners.global||[{type:this.isIE?"keydown":"input",target:this.DOM.input,cb:i[this.isIE?"onInputIE":"onInput"].bind(this)},{type:"keydown",target:window,cb:i.onWindowKeyDown.bind(this)},{type:"blur",target:this.DOM.input,cb:i.onFocusBlur.bind(this)}],this.listeners.global))e.target[s](e.type,e.cb)},unbindGlobal(){this.events.bindGlobal.call(this,!0)},callbacks:{onFocusBlur(t){var e=t.target?this.trim(t.target.textContent):"",i=this.settings,s=t.type,a=i.dropdown.enabled>=0,n={relatedTarget:t.relatedTarget},o=this.state.actions.selectOption&&(a||!i.dropdown.closeOnSelect),r=this.state.actions.addNew&&a,l=t.relatedTarget&&t.relatedTarget.classList.contains(i.classNames.tag)&&this.DOM.scope.contains(t.relatedTarget);if("blur"==s){if(t.relatedTarget===this.DOM.scope)return this.dropdown.hide(),void this.DOM.input.focus();this.postUpdate(),this.triggerChangeEvent()}if(!o&&!r)if(this.state.hasFocus="focus"==s&&+new Date,this.toggleFocusClass(this.state.hasFocus),"mix"!=i.mode){if("focus"==s)return this.trigger("focus",n),void(0!==i.dropdown.enabled&&i.userInput||this.dropdown.show());"blur"==s&&(this.trigger("blur",n),this.loading(!1),"select"==this.settings.mode&&l&&(e=""),("select"==this.settings.mode&&e?!this.value.length||this.value[0].value!=e:e&&!this.state.actions.selectOption&&i.addTagOnBlur)&&this.addTags(e,!0),"select"!=this.settings.mode||e||this.removeTags()),this.DOM.input.removeAttribute("style"),this.dropdown.hide()}else"focus"==s?this.trigger("focus",n):"blur"==t.type&&(this.trigger("blur",n),this.loading(!1),this.dropdown.hide(),this.state.dropdown.visible=void 0,this.setStateSelection())},onWindowKeyDown(t){var e,i=document.activeElement;if(i.classList.contains(this.settings.classNames.tag)&&this.DOM.scope.contains(document.activeElement))switch(e=i.nextElementSibling,t.key){case"Backspace":this.removeTags(i),(e||this.DOM.input).focus();break;case"Enter":setTimeout(this.editTag.bind(this),0,i)}},onKeydown(t){"select"==this.settings.mode&&this.settings.enforceWhitelist&&this.value.length&&t.preventDefault();var e=this.trim(t.target.textContent);if(this.trigger("keydown",{originalEvent:this.cloneEvent(t)}),"mix"==this.settings.mode){switch(t.key){case"Left":case"ArrowLeft":this.state.actions.ArrowLeft=!0;break;case"Delete":case"Backspace":if(this.state.editing)return;var i,s,a,r=document.getSelection(),l="Delete"==t.key&&r.anchorOffset==(r.anchorNode.length||0),d=1==r.anchorNode.nodeType||!r.anchorOffset&&r.anchorNode.previousElementSibling,h=n(this.DOM.input.innerHTML),p=this.getTagElms();if("edit"==this.settings.backspace&&d)return i=1==r.anchorNode.nodeType?null:r.anchorNode.previousElementSibling,setTimeout(this.editTag.bind(this),0,i),void t.preventDefault();if(g()&&d)return a=o(d),d.hasAttribute("readonly")||d.remove(),this.DOM.input.focus(),void setTimeout((()=>{this.placeCaretAfterNode(a),this.DOM.input.click()}));if("BR"==r.anchorNode.nodeName)return;if((l||d)&&1==r.anchorNode.nodeType?s=0==r.anchorOffset?l?p[0]:null:p[r.anchorOffset-1]:l?s=r.anchorNode.nextElementSibling:d&&(s=d),3==r.anchorNode.nodeType&&!r.anchorNode.nodeValue&&r.anchorNode.previousElementSibling&&t.preventDefault(),(d||l)&&!this.settings.backspace)return void t.preventDefault();if("Range"!=r.type&&!r.anchorOffset&&r.anchorNode==this.DOM.input&&"Delete"!=t.key)return void t.preventDefault();if("Range"!=r.type&&s&&s.hasAttribute("readonly"))return void this.placeCaretAfterNode(o(s));clearTimeout(u),u=setTimeout((()=>{var t=document.getSelection(),e=n(this.DOM.input.innerHTML),i=!l&&t.anchorNode.previousElementSibling;if(!g()&&e.length>=h.length&&i&&!i.hasAttribute("readonly")&&(this.removeTags(i),this.fixFirefoxLastTagNoCaret(),2==this.DOM.input.children.length&&"BR"==this.DOM.input.children[1].tagName))return this.DOM.input.innerHTML="",this.value.length=0,!0;this.value=[].map.call(p,((t,e)=>{var i=this.tagData(t);if(t.parentNode||i.readonly)return i;this.trigger("remove",{tag:t,index:e,data:i})})).filter((t=>t))}),20)}return!0}switch(t.key){case"Backspace":"select"==this.settings.mode&&this.settings.enforceWhitelist?this.removeTags():this.state.dropdown.visible&&"manual"!=this.settings.dropdown.position||""!=e&&8203!=e.charCodeAt(0)||(!0===this.settings.backspace?this.removeTags():"edit"==this.settings.backspace&&setTimeout(this.editTag.bind(this),0));break;case"Esc":case"Escape":if(this.state.dropdown.visible)return;t.target.blur();break;case"Down":case"ArrowDown":this.state.dropdown.visible||this.dropdown.show();break;case"ArrowRight":{let t=this.state.inputSuggestion||this.state.ddItemData;if(t&&this.settings.autoComplete.rightKey)return void this.addTags([t],!0);break}case"Tab":{let i="select"==this.settings.mode;if(!e||i)return!0;t.preventDefault()}case"Enter":if(this.state.dropdown.visible||229==t.keyCode)return;t.preventDefault(),setTimeout((()=>{this.state.actions.selectOption||this.addTags(e,!0)}))}},onInput(t){if("mix"==this.settings.mode)return this.events.callbacks.onMixTagsInput.call(this,t);var e=this.input.normalize.call(this),i=e.length>=this.settings.dropdown.enabled,s={value:e,inputElm:this.DOM.input};s.isValid=this.validateTag({value:e}),this.state.inputText!=e&&(this.input.set.call(this,e,!1),-1!=e.search(this.settings.delimiters)?this.addTags(e)&&this.input.set.call(this):this.settings.dropdown.enabled>=0&&this.dropdown[i?"show":"hide"](e),this.trigger("input",s))},onMixTagsInput(t){var e,i,s,a,n,o,r,l,h=this.settings,p=this.value.length,c=this.getTagElms(),u=document.createDocumentFragment(),m=window.getSelection().getRangeAt(0),v=[].map.call(c,(t=>this.tagData(t).value));if("deleteContentBackward"==t.inputType&&g()&&this.events.callbacks.onKeydown.call(this,{target:t.target,key:"Backspace"}),this.value.slice().forEach((t=>{t.readonly&&!v.includes(t.value)&&u.appendChild(this.createTagElem(t))})),u.childNodes.length&&(m.insertNode(u),this.setRangeAtStartEnd(!1,u.lastChild)),c.length!=p)return this.value=[].map.call(this.getTagElms(),(t=>this.tagData(t))),void this.update({withoutChangeEvent:!0});if(this.hasMaxTags())return!0;if(window.getSelection&&(o=window.getSelection()).rangeCount>0&&3==o.anchorNode.nodeType){if((m=o.getRangeAt(0).cloneRange()).collapse(!0),m.setStart(o.focusNode,0),s=(e=m.toString().slice(0,m.endOffset)).split(h.pattern).length-1,(i=e.match(h.pattern))&&(a=e.slice(e.lastIndexOf(i[i.length-1]))),a){if(this.state.actions.ArrowLeft=!1,this.state.tag={prefix:a.match(h.pattern)[0],value:a.replace(h.pattern,"")},this.state.tag.baseOffset=o.baseOffset-this.state.tag.value.length,l=this.state.tag.value.match(h.delimiters))return this.state.tag.value=this.state.tag.value.replace(h.delimiters,""),this.state.tag.delimiters=l[0],this.addTags(this.state.tag.value,h.dropdown.clearOnSelect),void this.dropdown.hide();n=this.state.tag.value.length>=h.dropdown.enabled;try{r=(r=this.state.flaggedTags[this.state.tag.baseOffset]).prefix==this.state.tag.prefix&&r.value[0]==this.state.tag.value[0],this.state.flaggedTags[this.state.tag.baseOffset]&&!this.state.tag.value&&delete this.state.flaggedTags[this.state.tag.baseOffset]}catch(t){}(r||s<this.state.mixMode.matchedPatternCount)&&(n=!1)}else this.state.flaggedTags={};this.state.mixMode.matchedPatternCount=s}setTimeout((()=>{this.update({withoutChangeEvent:!0}),this.trigger("input",d({},this.state.tag,{textContent:this.DOM.input.textContent})),this.state.tag&&this.dropdown[n?"show":"hide"](this.state.tag.value)}),10)},onInputIE(t){var e=this;setTimeout((function(){e.events.callbacks.onInput.call(e,t)}))},onClickScope(t){var e=this.settings,i=t.target.closest("."+e.classNames.tag),s=+new Date-this.state.hasFocus;if(t.target!=this.DOM.scope){if(!t.target.classList.contains(e.classNames.tagX))return i?(this.trigger("click",{tag:i,index:this.getNodeIndex(i),data:this.tagData(i),originalEvent:this.cloneEvent(t)}),void(1!==e.editTags&&1!==e.editTags.clicks||this.events.callbacks.onDoubleClickScope.call(this,t))):void(t.target==this.DOM.input&&("mix"==e.mode&&this.fixFirefoxLastTagNoCaret(),s>500)?this.state.dropdown.visible?this.dropdown.hide():0===e.dropdown.enabled&&"mix"!=e.mode&&this.dropdown.show():"select"==e.mode&&!this.state.dropdown.visible&&this.dropdown.show());this.removeTags(t.target.parentNode)}else this.state.hasFocus||this.DOM.input.focus()},onPaste(t){t.preventDefault();var e,i,s=this.settings;if("select"==s.mode&&s.enforceWhitelist||!s.userInput)return!1;s.readonly||(e=t.clipboardData||window.clipboardData,i=e.getData("Text"),s.hooks.beforePaste(t,{tagify:this,pastedText:i,clipboardData:e}).then((e=>{void 0===e&&(e=i),e&&(this.injectAtCaret(e,window.getSelection().getRangeAt(0)),"mix"==this.settings.mode?this.events.callbacks.onMixTagsInput.call(this,t):this.settings.pasteAsTags?this.addTags(e,!0):this.state.inputText=e)})).catch((t=>t)))},onEditTagInput(t,e){var i=t.closest("."+this.settings.classNames.tag),s=this.getNodeIndex(i),a=this.tagData(i),n=this.input.normalize.call(this,t),o=i.innerHTML!=i.__tagifyTagData.__originalHTML,r=this.validateTag({[this.settings.tagTextProp]:n});o||!0!==t.originalIsValid||(r=!0),i.classList.toggle(this.settings.classNames.tagInvalid,!0!==r),a.__isValid=r,i.title=!0===r?a.title||a.value:r,n.length>=this.settings.dropdown.enabled&&(this.state.editing&&(this.state.editing.value=n),this.dropdown.show(n)),this.trigger("edit:input",{tag:i,index:s,data:d({},this.value[s],{newValue:n}),originalEvent:this.cloneEvent(e)})},onEditTagFocus(t){this.state.editing={scope:t,input:t.querySelector("[contenteditable]")}},onEditTagBlur(t){if(this.state.hasFocus||this.toggleFocusClass(),this.DOM.scope.contains(t)){var e,i,s=this.settings,a=t.closest("."+s.classNames.tag),n=this.input.normalize.call(this,t),o=this.tagData(a).__originalData,r=a.innerHTML!=a.__tagifyTagData.__originalHTML,l=this.validateTag({[s.tagTextProp]:n});if(n)if(r){if(e=this.hasMaxTags(),i=this.getWhitelistItem(n)||d({},o,{[s.tagTextProp]:n,value:n,__isValid:l}),s.transformTag.call(this,i,o),!0!==(l=!e&&this.validateTag({[s.tagTextProp]:i[s.tagTextProp]}))){if(this.trigger("invalid",{data:i,tag:a,message:l}),s.editTags.keepInvalid)return;s.keepInvalidTags?i.__isValid=l:i=o}else s.keepInvalidTags&&(delete i.title,delete i["aria-invalid"],delete i.class);this.onEditTagDone(a,i)}else this.onEditTagDone(a,o);else this.onEditTagDone(a)}},onEditTagkeydown(t,e){switch(this.trigger("edit:keydown",{originalEvent:this.cloneEvent(t)}),t.key){case"Esc":case"Escape":e.innerHTML=e.__tagifyTagData.__originalHTML;case"Enter":case"Tab":t.preventDefault(),t.target.blur()}},onDoubleClickScope(t){var e,i,s=t.target.closest("."+this.settings.classNames.tag),a=this.settings;s&&a.userInput&&(e=s.classList.contains(this.settings.classNames.tagEditing),i=s.hasAttribute("readonly"),"select"==a.mode||a.readonly||e||i||!this.settings.editTags||this.editTag(s),this.toggleFocusClass(!0),this.trigger("dblclick",{tag:s,index:this.getNodeIndex(s),data:this.tagData(s)}))}}};function w(t,e){return t?t.previousElementSibling&&t.previousElementSibling.classList.contains("tagify")?(console.warn("Tagify: ","input element is already Tagified",t),this):(d(this,function(t){var e=document.createTextNode("");function i(t,i,s){s&&i.split(/\s+/g).forEach((i=>e[t+"EventListener"].call(e,i,s)))}return{off(t,e){return i("remove",t,e),this},on(t,e){return e&&"function"==typeof e&&i("add",t,e),this},trigger(i,s,a){var n;if(a=a||{cloneData:!0},i)if(t.settings.isJQueryPlugin)"remove"==i&&(i="removeTag"),jQuery(t.DOM.originalInput).triggerHandler(i,[s]);else{try{var o="object"==typeof s?s:{value:s};if((o=a.cloneData?d({},o):o).tagify=this,s instanceof Object)for(var r in s)s[r]instanceof HTMLElement&&(o[r]=s[r]);n=new CustomEvent(i,{detail:o})}catch(t){console.warn(t)}e.dispatchEvent(n)}}}}(this)),this.isFirefox="undefined"!=typeof InstallTrigger,this.isIE=window.document.documentMode,this.applySettings(t,e||{}),this.state={inputText:"",editing:!1,actions:{},mixMode:{},dropdown:{},flaggedTags:{}},this.value=[],this.listeners={},this.DOM={},this.build(t),c.call(this),this.getCSSVars(),this.loadOriginalValues(),this.events.customBinding.call(this),this.events.binding.call(this),void(t.autofocus&&this.DOM.input.focus())):(console.warn("Tagify: ","input element not found",t),this)}return w.prototype={_dropdown:m,customEventsList:["change","add","remove","invalid","input","click","keydown","focus","blur","edit:input","edit:beforeUpdate","edit:updated","edit:start","edit:keydown","dropdown:show","dropdown:hide","dropdown:select","dropdown:updated","dropdown:noMatch","dropdown:scroll"],dataProps:["__isValid","__removed","__originalData","__originalHTML","__tagId"],trim(t){return this.settings.trim&&t&&"string"==typeof t?t.trim():t},parseHTML:function(t){return(new DOMParser).parseFromString(t.trim(),"text/html").body.firstElementChild},templates:f,parseTemplate(t,e){return t=this.settings.templates[t]||t,this.parseHTML(t.apply(this,e))},set whitelist(t){this.settings.whitelist=t&&Array.isArray(t)?t:[]},get whitelist(){return this.settings.whitelist},applySettings(t,e){p.templates=this.templates;var s=this.settings=d({},p,e);s.disabled=t.hasAttribute("disabled"),s.readonly=t.hasAttribute("readonly"),s.placeholder=t.getAttribute("placeholder")||s.placeholder||"",s.required=t.hasAttribute("required");for(let t in s.classNames)Object.defineProperty(s.classNames,t+"Selector",{get(){return"."+this[t].split(" ")[0]}});if(this.isIE&&(s.autoComplete=!1),["whitelist","blacklist"].forEach((e=>{var i=t.getAttribute("data-"+e);i&&(i=i.split(s.delimiters))instanceof Array&&(s[e]=i)})),"autoComplete"in e&&!l(e.autoComplete)&&(s.autoComplete=p.autoComplete,s.autoComplete.enabled=e.autoComplete),"mix"==s.mode&&(s.autoComplete.rightKey=!0,s.delimiters=e.delimiters||null,s.tagTextProp&&!s.dropdown.searchKeys.includes(s.tagTextProp)&&s.dropdown.searchKeys.push(s.tagTextProp)),t.pattern)try{s.pattern=new RegExp(t.pattern)}catch(t){}if(this.settings.delimiters)try{s.delimiters=new RegExp(this.settings.delimiters,"g")}catch(t){}this.TEXTS=i(i({},v),s.texts||{}),"select"!=s.mode&&s.userInput||(s.dropdown.enabled=0),s.dropdown.appendTarget=e.dropdown&&e.dropdown.appendTarget?e.dropdown.appendTarget:document.body},getAttributes(t){var e,i=this.getCustomAttributes(t),s="";for(e in i)s+=" "+e+(void 0!==t[e]?`="${i[e]}"`:"");return s},getCustomAttributes(t){if(!l(t))return"";var e,i={};for(e in t)"__"!=e.slice(0,2)&&"class"!=e&&t.hasOwnProperty(e)&&void 0!==t[e]&&(i[e]=r(t[e]));return i},setStateSelection(){var t=window.getSelection(),e={anchorOffset:t.anchorOffset,anchorNode:t.anchorNode,range:t.getRangeAt&&t.rangeCount&&t.getRangeAt(0)};return this.state.selection=e,e},getCaretGlobalPosition(){const t=document.getSelection();if(t.rangeCount){const e=t.getRangeAt(0),i=e.startContainer,s=e.startOffset;let a,n;if(s>0)return n=document.createRange(),n.setStart(i,s-1),n.setEnd(i,s),a=n.getBoundingClientRect(),{left:a.right,top:a.top,bottom:a.bottom};if(i.getBoundingClientRect)return i.getBoundingClientRect()}return{left:-9999,top:-9999}},getCSSVars(){var t=getComputedStyle(this.DOM.scope,null);var e;this.CSSVars={tagHideTransition:(({value:t,unit:e})=>"s"==e?1e3*t:t)(function(t){if(!t)return{};var e=(t=t.trim().split(" ")[0]).split(/\d+/g).filter((t=>t)).pop().trim();return{value:+t.split(e).filter((t=>t))[0].trim(),unit:e}}((e="tag-hide-transition",t.getPropertyValue("--"+e))))}},build(t){var e=this.DOM;this.settings.mixMode.integrated?(e.originalInput=null,e.scope=t,e.input=t):(e.originalInput=t,e.scope=this.parseTemplate("wrapper",[t,this.settings]),e.input=e.scope.querySelector(this.settings.classNames.inputSelector),t.parentNode.insertBefore(e.scope,t))},destroy(){this.events.unbindGlobal.call(this),this.DOM.scope.parentNode.removeChild(this.DOM.scope),this.dropdown.hide(!0),clearTimeout(this.dropdownHide__bindEventsTimeout)},loadOriginalValues(t){var e,i=this.settings;if(void 0===t&&(t=i.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value),this.removeAllTags({withoutChangeEvent:!0}),t)if("mix"==i.mode)this.parseMixTags(t.trim()),(e=this.DOM.input.lastChild)&&"BR"==e.tagName||this.DOM.input.insertAdjacentHTML("beforeend","<br>");else{try{JSON.parse(t)instanceof Array&&(t=JSON.parse(t))}catch(t){}this.addTags(t).forEach((t=>t&&t.classList.add(i.classNames.tagNoAnimation)))}else this.postUpdate();this.state.lastOriginalValueReported=i.mixMode.integrated?"":this.DOM.originalInput.value,this.state.loadedOriginalValues=!0},cloneEvent(t){var e={};for(var i in t)e[i]=t[i];return e},loading(t){return this.state.isLoading=t,this.DOM.scope.classList[t?"add":"remove"](this.settings.classNames.scopeLoading),this},tagLoading(t,e){return t&&t.classList[e?"add":"remove"](this.settings.classNames.tagLoading),this},toggleClass(t,e){"string"==typeof t&&this.DOM.scope.classList.toggle(t,e)},toggleFocusClass(t){this.toggleClass(this.settings.classNames.focus,!!t)},triggerChangeEvent:function(){if(!this.settings.mixMode.integrated){var t=this.DOM.originalInput,e=this.state.lastOriginalValueReported!==t.value,i=new CustomEvent("change",{bubbles:!0});e&&(this.state.lastOriginalValueReported=t.value,i.simulated=!0,t._valueTracker&&t._valueTracker.setValue(Math.random()),t.dispatchEvent(i),this.trigger("change",this.state.lastOriginalValueReported),t.value=this.state.lastOriginalValueReported)}},events:T,fixFirefoxLastTagNoCaret(){},placeCaretAfterNode(t){if(t&&t.parentNode){var e=t.nextSibling,i=window.getSelection(),s=i.getRangeAt(0);i.rangeCount&&(s.setStartBefore(e||t),s.setEndBefore(e||t),i.removeAllRanges(),i.addRange(s))}},insertAfterTag(t,e){if(e=e||this.settings.mixMode.insertAfterTag,t&&t.parentNode&&e)return e="string"==typeof e?document.createTextNode(e):e,t.parentNode.insertBefore(e,t.nextSibling),e},editTag(t,e){t=t||this.getLastTag(),e=e||{},this.dropdown.hide();var i=this.settings;function s(){return t.querySelector(i.classNames.tagTextSelector)}var a=s(),n=this.getNodeIndex(t),o=this.tagData(t),r=this.events.callbacks,l=this,h=!0;if(a){if(!(o instanceof Object&&"editable"in o)||o.editable)return a.setAttribute("contenteditable",!0),t.classList.add(i.classNames.tagEditing),this.tagData(t,{__originalData:d({},o),__originalHTML:t.innerHTML}),a.addEventListener("focus",r.onEditTagFocus.bind(this,t)),a.addEventListener("blur",(function(){setTimeout((()=>r.onEditTagBlur.call(l,s())))})),a.addEventListener("input",r.onEditTagInput.bind(this,a)),a.addEventListener("keydown",(e=>r.onEditTagkeydown.call(this,e,t))),a.focus(),this.setRangeAtStartEnd(!1,a),e.skipValidation||(h=this.editTagToggleValidity(t)),a.originalIsValid=h,this.trigger("edit:start",{tag:t,index:n,data:o,isValid:h}),this}else console.warn("Cannot find element in Tag template: .",i.classNames.tagTextSelector)},editTagToggleValidity(t,e){var i;if(e=e||this.tagData(t))return(i=!("__isValid"in e)||!0===e.__isValid)||this.removeTagsFromValue(t),this.update(),t.classList.toggle(this.settings.classNames.tagNotAllowed,!i),e.__isValid;console.warn("tag has no data: ",t,e)},onEditTagDone(t,e){e=e||{};var i={tag:t=t||this.state.editing.scope,index:this.getNodeIndex(t),previousData:this.tagData(t),data:e};this.trigger("edit:beforeUpdate",i,{cloneData:!1}),this.state.editing=!1,delete e.__originalData,delete e.__originalHTML,t&&e[this.settings.tagTextProp]?(t=this.replaceTag(t,e),this.editTagToggleValidity(t,e),this.settings.a11y.focusableTags&&t.focus()):t&&this.removeTags(t),this.trigger("edit:updated",i),this.dropdown.hide(),this.settings.keepInvalidTags&&this.reCheckInvalidTags()},replaceTag(t,e){e&&e.value||(e=t.__tagifyTagData),e.__isValid&&1!=e.__isValid&&d(e,this.getInvalidTagAttrs(e,e.__isValid));var i=this.createTagElem(e);return t.parentNode.replaceChild(i,t),this.updateValueByDOMTags(),i},updateValueByDOMTags(){this.value.length=0,[].forEach.call(this.getTagElms(),(t=>{t.classList.contains(this.settings.classNames.tagNotAllowed.split(" ")[0])||this.value.push(this.tagData(t))})),this.update()},setRangeAtStartEnd(t,e){t="number"==typeof t?t:!!t,e=(e=e||this.DOM.input).lastChild||e;var i=document.getSelection();try{i.rangeCount>=1&&["Start","End"].forEach((s=>i.getRangeAt(0)["set"+s](e,t||e.length)))}catch(t){console.warn("Tagify: ",t)}},injectAtCaret(t,e){if(e=e||this.state.selection.range)return"string"==typeof t&&(t=document.createTextNode(t)),e.deleteContents(),e.insertNode(t),this.setRangeAtStartEnd(!1,t),this.updateValueByDOMTags(),this.update(),this},input:{set(t="",e=!0){var i=this.settings.dropdown.closeOnSelect;this.state.inputText=t,e&&(this.DOM.input.innerHTML=r(""+t)),!t&&i&&this.dropdown.hide.bind(this),this.input.autocomplete.suggest.call(this),this.input.validate.call(this)},validate(){var t=!this.state.inputText||!0===this.validateTag({value:this.state.inputText});return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid,!t),t},normalize(t){var e=t||this.DOM.input,i=[];e.childNodes.forEach((t=>3==t.nodeType&&i.push(t.nodeValue))),i=i.join("\n");try{i=i.replace(/(?:\r\n|\r|\n)/g,this.settings.delimiters.source.charAt(0))}catch(t){}return i=i.replace(/\s/g," "),this.settings.trim&&(i=i.replace(/^\s+/,"")),i},autocomplete:{suggest(t){if(this.settings.autoComplete.enabled){"string"==typeof(t=t||{})&&(t={value:t});var e=t.value?""+t.value:"",i=e.substr(0,this.state.inputText.length).toLowerCase(),s=e.substring(this.state.inputText.length);e&&this.state.inputText&&i==this.state.inputText.toLowerCase()?(this.DOM.input.setAttribute("data-suggest",s),this.state.inputSuggestion=t):(this.DOM.input.removeAttribute("data-suggest"),delete this.state.inputSuggestion)}},set(t){var e=this.DOM.input.getAttribute("data-suggest"),i=t||(e?this.state.inputText+e:null);return!!i&&("mix"==this.settings.mode?this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix+i)):(this.input.set.call(this,i),this.setRangeAtStartEnd()),this.input.autocomplete.suggest.call(this),this.dropdown.hide(),!0)}}},getTagIdx(t){return this.value.findIndex((e=>e.__tagId==(t||{}).__tagId))},getNodeIndex(t){var e=0;if(t)for(;t=t.previousElementSibling;)e++;return e},getTagElms(...t){var e="."+[...this.settings.classNames.tag.split(" "),...t].join(".");return[].slice.call(this.DOM.scope.querySelectorAll(e))},getLastTag(){var t=this.DOM.scope.querySelectorAll(`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`);return t[t.length-1]},tagData:(t,e,i)=>t?(e&&(t.__tagifyTagData=i?e:d({},t.__tagifyTagData||{},e)),t.__tagifyTagData):(console.warn("tag elment doesn't exist",t,e),e),isTagDuplicate(t,e){var i=this.settings;return"select"!=i.mode&&this.value.reduce(((a,n)=>s(this.trim(""+t),n.value,e||i.dropdown.caseSensitive)?a+1:a),0)},getTagIndexByValue(t){var e=[];return this.getTagElms().forEach(((i,a)=>{s(this.trim(i.textContent),t,this.settings.dropdown.caseSensitive)&&e.push(a)})),e},getTagElmByValue(t){var e=this.getTagIndexByValue(t)[0];return this.getTagElms()[e]},flashTag(t){t&&(t.classList.add(this.settings.classNames.tagFlash),setTimeout((()=>{t.classList.remove(this.settings.classNames.tagFlash)}),100))},isTagBlacklisted(t){return t=this.trim(t.toLowerCase()),this.settings.blacklist.filter((e=>(""+e).toLowerCase()==t)).length},isTagWhitelisted(t){return!!this.getWhitelistItem(t)},getWhitelistItem(t,e,i){e=e||"value";var a,n=this.settings;return(i=i||n.whitelist).some((i=>{var o="string"==typeof i?i:i[e]||i.value;if(s(o,t,n.dropdown.caseSensitive,n.trim))return a="string"==typeof i?{value:i}:i,!0})),a||"value"!=e||"value"==n.tagTextProp||(a=this.getWhitelistItem(t,n.tagTextProp,i)),a},validateTag(t){var e=this.settings,i="value"in t?"value":e.tagTextProp,s=this.trim(t[i]+"");return(t[i]+"").trim()?e.pattern&&e.pattern instanceof RegExp&&!e.pattern.test(s)?this.TEXTS.pattern:!e.duplicates&&this.isTagDuplicate(s,this.state.editing)?this.TEXTS.duplicate:this.isTagBlacklisted(s)||e.enforceWhitelist&&!this.isTagWhitelisted(s)?this.TEXTS.notAllowed:!e.validate||e.validate(t):this.TEXTS.empty},getInvalidTagAttrs(t,e){return{"aria-invalid":!0,class:`${t.class||""} ${this.settings.classNames.tagNotAllowed}`.trim(),title:e}},hasMaxTags(){return this.value.length>=this.settings.maxTags&&this.TEXTS.exceed},setReadonly(t,e){var i=this.settings;document.activeElement.blur(),i[e||"readonly"]=t,this.DOM.scope[(t?"set":"remove")+"Attribute"](e||"readonly",!0),"mix"==i.mode&&(this.DOM.input.contentEditable=!t)},setDisabled(t){this.setReadonly(t,"disabled")},normalizeTags(t){var e=this.settings,i=e.whitelist,s=e.delimiters,a=e.mode,n=e.tagTextProp;e.enforceWhitelist;var o=[],r=!!i&&i[0]instanceof Object,l=t instanceof Array,d=t=>(t+"").split(s).filter((t=>t)).map((t=>({[n]:this.trim(t),value:this.trim(t)})));if("number"==typeof t&&(t=t.toString()),"string"==typeof t){if(!t.trim())return[];t=d(t)}else l&&(t=[].concat(...t.map((t=>t.value?t:d(t)))));return r&&(t.forEach((t=>{var e=o.map((t=>t.value)),i=this.dropdown.filterListItems.call(this,t[n],{exact:!0});this.settings.duplicates||(i=i.filter((t=>!e.includes(t.value))));var s=i.length>1?this.getWhitelistItem(t[n],n,i):i[0];s&&s instanceof Object?o.push(s):"mix"!=a&&(null==t.value&&(t.value=t[n]),o.push(t))})),t=o),t},parseMixTags(t){var e=this.settings,i=e.mixTagsInterpolator,s=e.duplicates,a=e.transformTag,n=e.enforceWhitelist,o=e.maxTags,r=e.tagTextProp,l=[];return t=t.split(i[0]).map(((t,e)=>{var d,h,g,p=t.split(i[1]),c=p[0],u=l.length==o;try{if(c==+c)throw Error;h=JSON.parse(c)}catch(t){h=this.normalizeTags(c)[0]||{value:c}}if(u||!(p.length>1)||n&&!this.isTagWhitelisted(h.value)||!s&&this.isTagDuplicate(h.value)){if(t)return e?i[0]+t:t}else a.call(this,h),h[d=h[r]?r:"value"]=this.trim(h[d]),g=this.createTagElem(h),l.push(h),g.classList.add(this.settings.classNames.tagNoAnimation),p[0]=g.outerHTML,this.value.push(h);return p.join("")})).join(""),this.DOM.input.innerHTML=t,this.DOM.input.appendChild(document.createTextNode("")),this.DOM.input.normalize(),this.getTagElms().forEach(((t,e)=>this.tagData(t,l[e]))),this.update({withoutChangeEvent:!0}),t},replaceTextWithNode(t,e){if(this.state.tag||e){e=e||this.state.tag.prefix+this.state.tag.value;var i,s,a=window.getSelection(),n=a.anchorNode,o=this.state.tag.delimiters?this.state.tag.delimiters.length:0;return n.splitText(a.anchorOffset-o),i=n.nodeValue.lastIndexOf(e),s=n.splitText(i),t&&n.parentNode.replaceChild(t,s),!0}},selectTag(t,e){var i=this.settings;if(!i.enforceWhitelist||this.isTagWhitelisted(e.value)){this.input.set.call(this,e[i.tagTextProp||"value"],!0),this.state.actions.selectOption&&setTimeout(this.setRangeAtStartEnd.bind(this));var s=this.getLastTag();return s?this.replaceTag(s,e):this.appendTag(t),i.enforceWhitelist&&this.DOM.input.removeAttribute("contenteditable"),this.value[0]=e,this.trigger("add",{tag:t,data:e}),this.update(),[t]}},addEmptyTag(t){var e=d({value:""},t||{}),i=this.createTagElem(e);this.tagData(i,e),this.appendTag(i),this.editTag(i,{skipValidation:!0})},addTags(t,e,i=this.settings.skipInvalid){var s=[],a=this.settings,n=document.createDocumentFragment();return t&&0!=t.length?(t=this.normalizeTags(t),"mix"==a.mode?this.addMixTags(t):("select"==a.mode&&(e=!1),this.DOM.input.removeAttribute("style"),t.forEach((t=>{var e,o={},r=Object.assign({},t,{value:t.value+""});if((t=Object.assign({},r)).__isValid=this.hasMaxTags()||this.validateTag(t),a.transformTag.call(this,t),!0!==t.__isValid){if(i)return;d(o,this.getInvalidTagAttrs(t,t.__isValid),{__preInvalidData:r}),t.__isValid==this.TEXTS.duplicate&&this.flashTag(this.getTagElmByValue(t.value))}if(t.readonly&&(o["aria-readonly"]=!0),e=this.createTagElem(t,o),s.push(e),"select"==a.mode)return this.selectTag(e,t);n.appendChild(e),t.__isValid&&!0===t.__isValid?(this.value.push(t),this.trigger("add",{tag:e,index:this.value.length-1,data:t})):(this.trigger("invalid",{data:t,index:this.value.length,tag:e,message:t.__isValid}),a.keepInvalidTags||setTimeout((()=>this.removeTags(e,!0)),1e3)),this.dropdown.position()})),this.appendTag(n),this.update(),t.length&&e&&this.input.set.call(this),this.dropdown.refilter(),s)):("select"==a.mode&&this.removeAllTags(),s)},addMixTags(t){if((t=this.normalizeTags(t))[0].prefix||this.state.tag)return this.prefixedTextToTag(t[0]);"string"==typeof t&&(t=[{value:t}]);var e=!!this.state.selection,i=document.createDocumentFragment();return t.forEach((t=>{var e=this.createTagElem(t);i.appendChild(e),this.insertAfterTag(e)})),e?this.injectAtCaret(i):(this.DOM.input.focus(),(e=this.setStateSelection()).range.setStart(this.DOM.input,e.range.endOffset),e.range.setEnd(this.DOM.input,e.range.endOffset),this.DOM.input.appendChild(i),this.updateValueByDOMTags(),this.update()),i},prefixedTextToTag(t){var e,i=this.settings,s=this.state.tag.delimiters;if(i.transformTag.call(this,t),t.prefix=t.prefix||this.state.tag?this.state.tag.prefix:(i.pattern.source||i.pattern)[0],e=this.createTagElem(t),this.replaceTextWithNode(e)||this.DOM.input.appendChild(e),setTimeout((()=>e.classList.add(this.settings.classNames.tagNoAnimation)),300),this.value.push(t),this.update(),!s){var a=this.insertAfterTag(e)||e;this.placeCaretAfterNode(a)}return this.state.tag=null,this.trigger("add",d({},{tag:e},{data:t})),e},appendTag(t){var e=this.DOM,i=e.scope.lastElementChild;i===e.input?e.scope.insertBefore(t,i):e.scope.appendChild(t)},createTagElem(t,e){t.__tagId=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)));var s,a=d({},t,i({value:r(t.value+"")},e));return function(t){for(var e,i=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,null,!1);e=i.nextNode();)e.textContent.trim()||e.parentNode.removeChild(e)}(s=this.parseTemplate("tag",[a])),this.tagData(s,t),s},reCheckInvalidTags(){var t=this.settings;this.getTagElms(t.classNames.tagNotAllowed).forEach(((t,e)=>{var i=this.tagData(t),s=this.hasMaxTags(),a=this.validateTag(i);if(!0===a&&!s)return i=i.__preInvalidData?i.__preInvalidData:{value:i.value},this.replaceTag(t,i);t.title=s||a}))},removeTags(t,e,i){var s;t=t&&t instanceof HTMLElement?[t]:t instanceof Array?t:t?[t]:[this.getLastTag()],s=t.reduce(((t,e)=>(e&&"string"==typeof e&&(e=this.getTagElmByValue(e)),e&&this.tagData(e)&&t.push({node:e,idx:this.getTagIdx(this.tagData(e)),data:this.tagData(e,{__removed:!0})}),t)),[]),i="number"==typeof i?i:this.CSSVars.tagHideTransition,"select"==this.settings.mode&&(i=0,this.input.set.call(this)),1==s.length&&s[0].node.classList.contains(this.settings.classNames.tagNotAllowed)&&(e=!0),s.length&&this.settings.hooks.beforeRemoveTag(s,{tagify:this}).then((()=>{function t(t){t.node.parentNode&&(t.node.parentNode.removeChild(t.node),e?this.settings.keepInvalidTags&&this.trigger("remove",{tag:t.node,index:t.idx}):(this.trigger("remove",{tag:t.node,index:t.idx,data:t.data}),this.dropdown.refilter(),this.dropdown.position(),this.DOM.input.normalize(),this.settings.keepInvalidTags&&this.reCheckInvalidTags()))}i&&i>10&&1==s.length?function(e){e.node.style.width=parseFloat(window.getComputedStyle(e.node).width)+"px",document.body.clientTop,e.node.classList.add(this.settings.classNames.tagHide),setTimeout(t.bind(this),i,e)}.call(this,s[0]):s.forEach(t.bind(this)),e||(this.removeTagsFromValue(s.map((t=>t.node))),this.update(),"select"==this.settings.mode&&this.DOM.input.setAttribute("contenteditable",!0))})).catch((t=>{}))},removeTagsFromDOM(){[].slice.call(this.getTagElms()).forEach((t=>t.parentNode.removeChild(t)))},removeTagsFromValue(t){(t=Array.isArray(t)?t:[t]).forEach((t=>{var e=this.tagData(t),i=this.getTagIdx(e);i>-1&&this.value.splice(i,1)}))},removeAllTags(t){t=t||{},this.value=[],"mix"==this.settings.mode?this.DOM.input.innerHTML="":this.removeTagsFromDOM(),this.dropdown.position(),"select"==this.settings.mode&&this.input.set.call(this),this.update(t)},postUpdate(){var t=this.settings.classNames,e="mix"==this.settings.mode?this.settings.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value:this.value.length;this.toggleClass(t.hasMaxTags,this.value.length>=this.settings.maxTags),this.toggleClass(t.hasNoTags,!this.value.length),this.toggleClass(t.empty,!e)},update(t){var e=this.DOM.originalInput;this.settings.mixMode.integrated||(e.value=this.getInputValue()),this.postUpdate(),!(t||{}).withoutChangeEvent&&this.state.loadedOriginalValues&&this.triggerChangeEvent()},getInputValue(){var t=this.getCleanValue();return"mix"==this.settings.mode?this.getMixedTagsAsString(t):t.length?this.settings.originalInputValueFormat?this.settings.originalInputValueFormat(t):JSON.stringify(t):""},getCleanValue(t){return e=t||this.value,i=this.dataProps,e&&Array.isArray(e)&&e.map((t=>a(t,i)));var e,i},getMixedTagsAsString(){var t="",e=this,i=this.settings.mixTagsInterpolator;return this.DOM.input.childNodes.forEach((s=>{if(1==s.nodeType){const n=e.tagData(s);if(s.classList.contains(e.settings.classNames.tag)&&n){if(n.__removed)return;return void(t+=i[0]+JSON.stringify(a(n,e.dataProps))+i[1])}"BR"!=s.tagName||s.parentNode!=e.DOM.input&&1!=s.parentNode.childNodes.length?"DIV"!=s.tagName&&"P"!=s.tagName||(t+="\r\n",!s.children.length&&s.textContent&&(t+=s.textContent)):t+="\r\n"}else t+=s.textContent})),t}},w.prototype.removeTag=w.prototype.removeTags,w}));


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getTime/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getTime/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getUnixTime/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getUnixTime/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUnixTime)
/* harmony export */ });
/* harmony import */ var _getTime_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getTime/index.js */ "./node_modules/date-fns/esm/getTime/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */

function getUnixTime(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return Math.floor((0,_getTime_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate) / 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/nextDay/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/nextDay/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextDay)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _getDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getDay/index.js */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextDay(date, day) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var delta = day - (0,_getDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date);
  if (delta <= 0) delta += 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, delta);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextSunday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/nextSunday/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextSunday)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _nextDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nextDay/index.js */ "./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");



/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */

function nextSunday(date) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_nextDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date), 0);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/js/TodoListElement.js":
/*!***********************************!*\
  !*** ./src/js/TodoListElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoListElement": () => (/* binding */ TodoListElement)
/* harmony export */ });
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @yaireo/tagify */ "./node_modules/@yaireo/tagify/dist/tagify.min.js");
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yaireo_tagify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/nextSunday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMonth/index.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./src/js/component.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/js/task.js");
/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority.js */ "./src/js/priority.js");
/* harmony import */ var _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoListStorage.js */ "./src/js/TodoListStorage.js");
/* harmony import */ var _TodoListSidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodoListSidebar.js */ "./src/js/TodoListSidebar.js");







const c = new _component_js__WEBPACK_IMPORTED_MODULE_1__.Component();

/**
 * A class containing GUI elements that would be used inside of a To-Do List App.
 * Such GUI elements have their functionalities incorporated here.
 */
class TodoListElement {

  static connection = _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_4__.default;
  static p = _priority_js__WEBPACK_IMPORTED_MODULE_3__.default;

  constructor() {

  }

  /**
   * Initializes an add button, which can be used to create tasks.
   */
  static addTaskButton(){
    const addTask = c.button("");
    addTask.id = "display-ask-form-button";
    addTask.append(c.faIcon("fas", "fa-plus"));
    addTask.append(c.span("Click here to add task..."));

    addTask.addEventListener("click", (e) => {
      let editForm = document.querySelector("#edit-task-form");
      if (editForm !== null) {
        editForm.remove();
      }
      
      e.currentTarget.parentNode.append(TodoListElement.addTaskForm());

      let catInput = document.querySelector("#task-categories");
      new (_yaireo_tagify__WEBPACK_IMPORTED_MODULE_0___default())(catInput);

      addTask.classList.add("no-display");
    });

    return addTask;
  }

  /**
   * Generates fields for the form based on the task attributes.
   * @param {} form - The form to add fields on.
   * @return form = The form with fields now added onto it.
   */
  static _generateTaskFormFields(form, existingTaskId = null) {
    let OKButtonId;
    if (existingTaskId != null) {
      OKButtonId = "#update-task-submit";
    } else {
      OKButtonId = "#add-task-submit";
    }
    
    let p = _priority_js__WEBPACK_IMPORTED_MODULE_3__.default; // calling priority by itself was undefined earlier. 
    // Maybe something to do with export behavior and lexical environment?
    // After using connection in index, it seems that it has to do with the fact
    // is in a class?

    let titleField = c.formInput("Title", "text", "task-title", "title");
    // add event listeners here for title
    titleField[1].addEventListener("input", (e) => {
      if (e.currentTarget.value === "" || e.currentTarget.value === null) {
        document.querySelector(OKButtonId).setAttribute("disabled", "");
      } else {
        document.querySelector(OKButtonId).removeAttribute("disabled");
      }
    });

    let priorityField = c.dropdown("Priority", "priority", "task-priority", ...Object.keys(p));
    let descriptionField = c.textArea("Description", "description", "task-description");
    let categoryField = c.formInput("Category", "text", "task-categories", "categories");
    let dueDateField = c.formInput("Due Date", "date", "task-dueDate", "dueDate");
    
    let allFields = [titleField, priorityField, descriptionField,
        dueDateField, categoryField];

    for (let field of allFields) {
      let div = c.div(`container-${field[1].id}`);
      div.append(field[0], field[1]);
      // add label and the input element of each field.
      form.append(div);
    }

    if (existingTaskId !== null) {
      let taskView = document.querySelector(`#task-${existingTaskId}`);
      let task = _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_4__.default.getItemById(existingTaskId);
      titleField[1].value = task.title;
      //priorityField[1].value = task.priority;
      taskView.querySelectorAll('[name="priority"] > option').forEach(elem => {
        if (elem.value === task.priority) {
          elem.setAttribute("selected", "true");
        }
      });

      // if (typeof task.categories === "string" && task.categories.length !== 0) {
      //   categoryField[1].value = JSON.parse(task.categories);  
      // } else {
      //   categoryField[1].value = task.categories;
      // }
      categoryField[1].value = JSON.stringify(task.categories);
      descriptionField[1].value = task.description;
      dueDateField[1].value = task.dueDate;
    }


    return form;
  }

  static _generateTaskFormButtons(form, existingTaskId = null) {
    let okButton;
    let cancelButton;
    let buttonSection;

    buttonSection = c.div("form-buttons");

    okButton = c.button("Add", "form-button");
    cancelButton = c.button("Close", "form-button");

    okButton.setAttribute("type", "button");
    okButton.setAttribute("disabled", "");
    okButton.setAttribute("autocomplete", "off");

    cancelButton.setAttribute("type", "button");
    cancelButton.addEventListener("click", TodoListElement._closeForm);

    cancelButton.id = "add-task-cancel";
    if (existingTaskId === null) {
      okButton.id = "add-task-submit";
      
      okButton.addEventListener("click", TodoListElement._handleAddTask);
    } else {
      okButton.textContent = "Update";
      okButton.id = "update-task-submit";
      okButton.removeAttribute("disabled");
      okButton.addEventListener("click", (e) => {
        TodoListElement._handleUpdateTask(existingTaskId);
      });
    }
    
    buttonSection.append(okButton, cancelButton);
    form.append(buttonSection);

    return form;
  }

  static _displayEditTaskForm(e) {
    let taskView = e.currentTarget; 
    while(!taskView.id.includes("task-")) {
      taskView = taskView.parentNode;
    }

    // pop up an edit form that looks like the addtask form.
    let existingTaskId = +taskView.id.split("task-")[1];

    let form = document.createElement("form");
    form.id = "edit-task-form";

    // if add form open close that form up.
    document.querySelector("#display-ask-form-button").classList.remove("no-display");
    let addForm = document.querySelector("#add-task-form");
    if (addForm != null) {
      console.log("Closing add form...");
      document.querySelector("#add-task-form").remove();
    }
    // Had to implement this since the append call
    // doesn't seem to be able to remove
    // a duplicate form... (edit form open on two posts)
    if (document.querySelector(`#${form.id}`) !== null) {
      document.querySelector(`#${form.id}`).remove();
    }

    form = TodoListElement._generateTaskFormFields(form, existingTaskId);
    form = TodoListElement._generateTaskFormButtons(form, existingTaskId);

    taskView.append(form);
    // TODO
    // and then disable the view of the element.
    // taskView.classList.add("form-active-task-no-display");

    let catInput = document.querySelector("#task-categories");
    new (_yaireo_tagify__WEBPACK_IMPORTED_MODULE_0___default())(catInput);
  }


  /**
   * A generic add form for a Task.
   * @returns form - form element with Task attributes.
   */
  static addTaskForm() {
    // Enumerate through the properties of a Task object, and then use that
    // to create inputs based on the type.
    let form = document.createElement("form");
    form.id = "add-task-form";

    form = TodoListElement._generateTaskFormFields(form);
    form = TodoListElement._generateTaskFormButtons(form);
    
    return form;
  }

  static _handleUpdateTask(taskId) {
    let task = TodoListElement._parseFormFields();
    task.id = taskId;

    _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_4__.default.update(task);
    TodoListElement._updateTaskOnView(task);

    document.querySelectorAll("#category-links > *").forEach(link => {
      link.remove();
    });
    _TodoListSidebar_js__WEBPACK_IMPORTED_MODULE_5__.sidebar.updateCategorySidebarListing();
  }

  static _updateTaskOnView(task) {
    let taskView = document.querySelector(`#task-${task.id}`);

    taskView.querySelector(".task-view-title").textContent = task.title;


    // let priorityStars = "";
    // for (let i = 0; i < TodoListElement.p[task.priority]; i++) {
    //   priorityStars += "★";
    // }
    taskView.querySelector(".task-view-priority").textContent = task.priority;

    taskView.querySelector(".task-view-description").textContent = task.description;
    // taskView.querySelector(".task-view-create-date").textContent = format(task.id, "'Added' PP");

    let dueDate;
    let dueDateMsg;
    if (task.dueDate === "") {
      dueDateMsg = "No Due Date";
    } else {
      if (typeof task.dueDate === 'string') {
        task.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(task.dueDate);
      }
      dueDateMsg = "Due " + (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(task.dueDate, 'P');
      if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)((task.dueDate), new Date()) && (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(task.dueDate)) {
        taskView.classList.add("overdue");
        dueDateMsg = "(Overdue) " + dueDateMsg;
      } else {
        taskView.classList.remove("overdue");
      }
    }

    taskView.querySelector(".task-view-due-date").textContent = dueDateMsg;

    let categories = taskView.querySelector(".task-view-categories");
    categories.textContent = "";
    if (task.categories.length !== 0){
      task.categories.forEach(elem => {
        let span = c.span(elem.value, "category-label");
        categories.append(span);
      });
    } else {
      categories.append(c.paragraph("No categories set."));
    }

    c.toast("Task updated successfully", 3);
    console.log("Task updated successfully.");
    // remove the form after we've finished using it.
    taskView.querySelector("#edit-task-form").remove();
  }

  static _handleAddTask() {
    let task = TodoListElement._parseFormFields();

    document.querySelector("#add-task-submit").setAttribute("disabled", "");
    document.querySelectorAll("#add-task-form input[id^=task-], #add-task-form textarea")
        .forEach(input => {
          input.value = "";
        });

    TodoListElement.addTaskToView(task, "#tasks-active");
    
    TodoListElement.connection.add(task);

    document.querySelectorAll("#category-links > *").forEach(link => {
      link.remove();
    });
    _TodoListSidebar_js__WEBPACK_IMPORTED_MODULE_5__.sidebar.updateCategorySidebarListing();
  }

  static _parseFormFields() {
    let task = new _task_js__WEBPACK_IMPORTED_MODULE_2__.Task();
    task.title = document.querySelector("#task-title").value;
    task.priority = document.querySelector("#task-priority").value;
    task.description = document.querySelector("#task-description").value;
    task.dueDate = document.querySelector("#task-dueDate").value;
    if (task.dueDate !== "") {
      task.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(task.dueDate);
    }
    
    let categories = document.querySelector("#task-categories").value;
    if (categories !== "") {
      categories = JSON.parse(categories);
    }

    categories = ([...new Set(categories)])
    task.categories = categories;

    return task;
  }


  static _closeForm(e) {
    let elem = e.currentTarget;
    while (!elem.id.includes("task-form")) {
      elem = elem.parentNode;
    }

    let id = elem.id;
    elem.remove();
    // display the button again if the form being closed is the add-task-form.
    if (id === "add-task-form") {
      document.querySelector("#display-ask-form-button").classList.remove("no-display");
    }
    // TODO
    // display the task again too.
      // document.querySelector(".form-active-task-disable-display")
      //     .classList.remove("form-active-task-disable-display");
  }

  /**
   * Adds tasks to underneath a given parent container.
   * @param task - The task object to give.
   * @param parentSelector {string} - Rule to select a container.
   */
  static addTaskToView(task, parentSelector) {
    
    let taskView = c.div("task");

    let taskInformationArea = c.div("task-information");
    let taskDragArea = c.div("task-move");
    let taskControlArea = c.div("task-controls");

    // Information Section Begin
    taskView.id = "task-" + task.id;
    let header = c.heading(task.title, 2, "task-view-title");
    let createDate = c.paragraph((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(task.id, "'Added' MM/dd/yyyy"), "task-view-create-date"); //c.paragraph();

    let dueDate;
    let dueDateMsg;
    if (task.dueDate === "") {
      dueDateMsg = "No Due Date";
    } else {
      if (typeof task.dueDate === 'string') {
        task.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(task.dueDate);
      }
      dueDateMsg = "Due " + (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(task.dueDate, 'P');
      if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)((task.dueDate), new Date()) && (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(task.dueDate)) {
        taskView.classList.add("overdue");
        dueDateMsg = "(Overdue) " + dueDateMsg;
      } else {
        taskView.classList.remove("overdue");
      }
    }

    dueDate = c.paragraph(dueDateMsg, "task-view-due-date"); //format(task.dueDate, "'Due' MM/dd/yyyy"), "task-view-due-date");

    // let priorityStars = "";
    // for (let i = 0; i < TodoListElement.p[task.priority]; i++) {
      //   priorityStars += "★";
      // }
    let priority = c.paragraph("", "task-view-priority");
    priority.textContent = task.priority;

    let description = c.paragraph(task.description, "task-view-description");
    let categories = c.div("task-view-categories");
    if (task.categories.length !== 0){
      task.categories.forEach(elem => {
        let span = c.span(elem.value, "category-label");
        categories.append(span);
      });
    } else {
      categories.append(c.paragraph("No categories set."));
    }

    //taskInformationArea.append(header, dueDate, categories, priority, description, createDate);

    let generalInfo = c.div("general-info");
    let expandedInfo = c.div("expanded-info", "no-display");
    let expandButton = c.button("", "expand-task-button");
    let expandIcon = c.faIcon("fas", "fa-chevron-down");


    generalInfo.append(header, dueDate);
    expandedInfo.append(description, categories, priority, createDate);
    expandButton.append(expandIcon);
    
    expandButton.addEventListener("click", (e) => {
      e.currentTarget.querySelector("svg").classList.toggle("point-down");
      let task = e.currentTarget;
      while (!task.id.includes("task-")) {
        task = task.parentNode;
      }
      task.querySelector(".expanded-info").classList.toggle("no-display");
    })

    taskInformationArea.append(generalInfo, expandedInfo, expandButton);
    // Information Section End

    // Controls Section Begin

    let finishButton = c.button("", "task-view-finish-button");
    let finishIcon = c.faIcon("fas", "fa-check-square");
    finishButton.append(finishIcon, "Finish");
    
    let editButton = c.button("", "task-view-edit-button");
    let editIcon = c.faIcon("fas", "fa-edit");
    editButton.append(editIcon, "Edit");

    let deleteButton = c.button("", "task-view-delete-button");
    let deleteIcon = c.faIcon("fas", "fa-trash-alt");
    deleteButton.append(deleteIcon, "Delete");

    taskControlArea.append(finishButton, editButton, deleteButton);

    // Controls Section End

    finishButton.addEventListener("click", TodoListElement._completeTask);
    editButton.addEventListener("click", TodoListElement._displayEditTaskForm);
    deleteButton.addEventListener("click", TodoListElement._deleteTask);

    let dragButton = c.button("", "task-view-drag-button");
    let dragIcon = c.faIcon("fas", "fa-grip-vertical");
    dragButton.append(dragIcon);

    taskDragArea.append(dragButton);

    taskView.append(taskDragArea, taskInformationArea, taskControlArea);

    document.querySelector(parentSelector).append(taskView);

    dragButton.addEventListener("mousedown", () => {
      taskView.setAttribute("draggable", "true");
    });

    dragButton.addEventListener("mouseup", () => {
      taskView.removeAttribute("draggable");
    });

    taskView.classList.add("draggable");
    TodoListElement._applyDragCapabilities();
    
    let buttonsSelector = ".task-move > button, .task-controls > button";
    // Default state, all buttons are low opacity.
    taskView.querySelectorAll(buttonsSelector).forEach(btn => {
      btn.classList.add("low-opacity");
    });
    
    // Apply hover capabilities, and that's when buttons are shown.
    taskView.onmouseover = (e) => {
      let taskView = e.currentTarget;
      while (!taskView.id.includes("task-")) {
        taskView = taskView.parentNode;
      }
      taskView.querySelectorAll(buttonsSelector).forEach(btn => {
        btn.classList.remove("low-opacity");
      });
    }
    taskView.onmouseout = (e) => {
      let taskView = e.currentTarget;
      while (!taskView.id.includes("task-")) {
        taskView = taskView.parentNode;
      }
      taskView.querySelectorAll(buttonsSelector).forEach(btn => {
        btn.classList.add("low-opacity");
      });
    }
  }


  static _applyDragCapabilities() {
    let draggables = document.querySelectorAll(".draggable");
    let container = document.querySelector("#tasks-active");

    draggables.forEach(draggable => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    })

    container.addEventListener('dragover', (e) => {
      // dragover: fired when an element or text selection
      // is being dragged over a valid drop target 
      // use e.preventDefault() -- prevent default behavior that is 
      // not explicitly handled, which, in this case, is dragging.
      e.preventDefault();

      const afterElement = getDragAfterElement(e.clientY);
      const activeDraggable = document.querySelector(".dragging");
      
      // if afterElement is null, we're at the bottom fo the list
      if (afterElement === null) {
        container.append(activeDraggable); 
      } else {
      // else our mouse is hovering above an element, so insert before it.
        container.insertBefore(activeDraggable, afterElement);
      }
    });

    function getDragAfterElement(mouseY) {
      // get all elements not being dragged.
      const inactiveDraggables = Array.from(container.
          querySelectorAll(".draggable:not(.dragging)"));

      // reduce() call, which will find us the element that is 
      // after the mouse cursor based on the y position we pass in.
      // we just need to figure out the offset of the cursor
      // against the element after it.
      return inactiveDraggables.reduce((closestElem, elem) => {
        // getBoundingClientRect:
        // returns a DOMRect object providing information
        // about the size of an element and its position relative
        // to the viewport.
        // we get the size of the task (width + height)
        // and then its position rel to the viewport (top and left)
        const box = elem.getBoundingClientRect();
        // distance from center of box to our mouse.
        const offset = mouseY - box.top - (box.height / 2);
        //console.log(offset);
        if (offset > closestElem.offset && offset < 0) {
          // return a new 'closestElem' if this elem offset is 
          // greater than the other (it's closer than any
          // other element in the array) and the offset
          // is less than 0 (the mouse is above the element)
          return {offset: offset, element: elem};
        } else {
          return closestElem; // maintain closestElem as closest.
        }
       }, {offset: Number.NEGATIVE_INFINITY}).element;
      // offset is infinity so that we have an element that can be returned
      // every single element is going to be closer than the INFINITY.
    }
  }

  static _completeTask(e) {
    let taskView = e.currentTarget;
    while (!taskView.id.includes("task-")) {
      taskView = taskView.parentNode;
    }

    let id = +taskView.id.split("task-")[1];

    // Mark the task as completed
    let task = TodoListElement.connection.getItemById(id);
    task.completed = true;
    // update the storage array.
    TodoListElement.connection.update(task);
    
    // Remove the finish button from taskview
    // taskView.querySelector(".task-view-finish-button").remove();
    taskView.remove();
  }

  static _deleteTask(e) {
    let taskView = e.currentTarget;
    while (!taskView.id.includes("task-")) {
      taskView = taskView.parentNode;
    }

    let taskId = +taskView.id.split("task-")[1];
    let taskTitle = taskView.querySelector(".task-view-title").textContent;

    const removeTask = (e) => {
      // remove the view
      taskView.remove();
      // remove the task from the storage.
      _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_4__.default.remove(taskId);

      c.toast("Task deleted successfully.", 3);
    }

    let removePrompt = c.confirmModal(
        "add-tasks-delete-dialog",
        "Delete Task",
        `Are you sure you want to delete ${taskTitle.trim()}?`,
        "Delete",
        "Cancel",
        removeTask,
        null
    );

    document.querySelector(".content").append(removePrompt);
  }

  static filterTasks(filterName, type) {
    let items;
    let condition;

    if (filterName !== "completed") {
    }

    switch (type) {
      case "attribute":
        if (filterName === "all") {
          condition = (elem) => true;
        } else if (filterName === "nodate") {
          condition = (elem) => (elem.dueDate === ""); 
        } else if (filterName === "completed") {
          condition = (elem) => (elem.completed === true);
        }
        break;
      case "date":
        if (filterName === "today") {
          condition = (elem) => {
            return (elem.dueDate !== "" && (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(elem.dueDate)));
          };
        } else if (filterName === "week") {
          condition = (elem) => {
            if (elem.dueDate === "") {
              return false;
            }
            let today = new Date();
            return ((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(today), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(elem.dueDate)) === 1)
          };
        } else if (filterName === "month") {
          condition = (elem) => {
            if (elem.dueDate === "") {
              return false;
            }
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.default)(new Date()) === (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(elem.dueDate));
          };
        }
        break;
      case "category":
        condition = (elem) => {
          for (let cat of elem.categories) {
            if (cat.value.toLowerCase() === filterName) {
              return true;
            }
          }
        };
        break;
    }

    if (filterName !== "completed") {
      items = TodoListElement.connection.getAllItems()
      .filter(elem => elem.completed === false)
      .filter(condition);
    } else {
      items = TodoListElement.connection.getAllItems().filter(condition);
    }

    // console.log(items);
    // console.trace();
    TodoListElement.updateTaskView(filterName, items);
  }

  /**
   * Update the task view with given tasks, and show the filter as the header name.
   */
  static updateTaskView(filterName, tasks) {
    let parentContainer = "#tasks-active";

    // remove all task views from the view.
    document.querySelectorAll(`${parentContainer} > .task`).forEach((elem) => {
      console.log("removing");
      elem.remove();
    });
    // update the view...
    // with the name of the filter, unless it's a category.
    let displayLabel;
    if (filterName in _TodoListSidebar_js__WEBPACK_IMPORTED_MODULE_5__.sidebar.sidebarLinks) {
      displayLabel = _TodoListSidebar_js__WEBPACK_IMPORTED_MODULE_5__.sidebar.sidebarLinks[filterName].displayLabel;
    } else {
      displayLabel = filterName;
    }

    document.querySelector(`${parentContainer} > .task-section-header`)
        .textContent = displayLabel;
    // and for the new tasks.
    for (let task of tasks) {
      TodoListElement.addTaskToView(task, parentContainer);
    }
    // don't let users add for completed tasks section.
    if (filterName === "completed") {
      document.querySelector("#tasks-add").classList.add("no-display");
    } else {
      document.querySelector("#tasks-add").classList.remove("no-display");
    }

  }

}




/***/ }),

/***/ "./src/js/TodoListSidebar.js":
/*!***********************************!*\
  !*** ./src/js/TodoListSidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "TodoListSidebar": () => (/* binding */ TodoListSidebar)
/* harmony export */ });
/* harmony import */ var _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListStorage.js */ "./src/js/TodoListStorage.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./src/js/component.js");
/* harmony import */ var _TodoListElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoListElement.js */ "./src/js/TodoListElement.js");




class TodoListSidebar {
  
  #mql;
  #c;
  #sidebarBG;
  #sidebarContainer;
  #sidebarContent;
  #sidebarCategoryContainer;
  sidebarLinks = {
    all: {
      displayLabel: "All",
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
    this.#c = new _component_js__WEBPACK_IMPORTED_MODULE_1__.Component();

    this.#sidebarContent = document.createElement("nav");
    this.#sidebarContent.id = "sidebar-nav";

    this.#sidebarBG = this.#c.div("sidebar-wrapper");
    // this.#sidebarBG.addEventListener("click", this.#hideSideBar);
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
    
    for (let link in this.sidebarLinks) {
      let linkUl;
      let linkId;
      let linkButton;

      linkUl = document.createElement("li");
      linkButton = this.#c.button(this.sidebarLinks[link].displayLabel);
      linkId = `nav-link-${link}`;
      
      linkUl.id = linkId;
      linkUl.classList.add("task-type-nav-link");


      if (link !== "category") { // skip category handler addition, will be done elsewhere.
        linkUl.addEventListener("click", (e) => {
          let currentSelected = document.querySelector(".sidebar-selected");
          if (currentSelected !== null) {
            currentSelected.classList.remove("sidebar-selected");
          }
          e.currentTarget.classList.add("sidebar-selected");
          _TodoListElement_js__WEBPACK_IMPORTED_MODULE_2__.TodoListElement.filterTasks(link, this.sidebarLinks[link].type)
        });
      }

      if (link === "all") {
        linkUl.classList.add("sidebar-selected");
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
      console.log("Sidebar: Sidebar toggling from query page...");
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
      sidebarWrapper.addEventListener("click", TodoListSidebar.toggleSidebar);
    } else {
      sidebarWrapper.classList.remove("sidebar-active-wrapper-bg");
      sidebarWrapper.removeEventListener("click", TodoListSidebar.toggleSidebar);
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
    let categories = _TodoListStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.getAllItems().reduce((cats, task) => {
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
  
      // Add filter tasks callback over here.
      catLink.classList.add("category-nav-link");
      catLink.addEventListener("click", (e) => {
        let currentSelected = document.querySelector(".sidebar-selected");
        if (currentSelected !== null) {
          currentSelected.classList.remove("sidebar-selected");
        }
        e.currentTarget.classList.add("sidebar-selected");
        _TodoListElement_js__WEBPACK_IMPORTED_MODULE_2__.TodoListElement.filterTasks(cat, "category")
      });
  
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



/***/ }),

/***/ "./src/js/TodoListStorage.js":
/*!***********************************!*\
  !*** ./src/js/TodoListStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getUnixTime/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
  

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
      
      let aMs = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(a.dueDate));
      let bMs = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(b.dueDate));

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
    // console.log(this.#storage);
  }
}



const connection = new TodoListStorage(STORAGE_KEY);


// 'this' wasn't getting updated!!
// (Because each time the array updates you have to assign a new event listener.)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);


/***/ }),

/***/ "./src/js/component.js":
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    let githubElem = document.createElement("a", "footer-github-icon");
    let ghIcon = this.faIcon("fab", "fa-github-square", "icon");

    githubElem.append(ghIcon);
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


/***/ }),

/***/ "./src/js/priority.js":
/*!****************************!*\
  !*** ./src/js/priority.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// function Priority() {
//   this.CRITICAL = 4;
//   this.HIGH = 3;
//   this.MEDIUM = 2;
//   this.LOW = 1;
//   this.NONE = 0;
// }

// export {Priority as default};

const priority = {
  NONE: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  CRITICAL: 4,
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priority);

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priority.js */ "./src/js/priority.js");


class Task {
  
  id;
  title;
  priority;
  description;
  categories;
  dueDate;
  completed;
  
  constructor() {
    this.id = Date.now();
    this.title = "";
    this.priority = _priority_js__WEBPACK_IMPORTED_MODULE_0__.default;
    this.description = "";
    this.categories = [];
    this.dueDate = null;
    this.completed = false;
  }

  displayTaskInfo() {
    for (let prop in Task) {
      console.log(this[prop]);
    }
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/TodoListElement.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLGlFQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxrRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixvRUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0Isc0VBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047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QUMyQjtBQUM2QjtBQUN6RTtBQUNNLENBQUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsOEJBQThCO0FBQzlCO0FBQ0EsUUFBUSxHQUFHLGlDQUFpQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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aXJlby90YWdpZnkvZGlzdC90YWdpZnkubWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0TW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9uZXh0RGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9uZXh0U3VuZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvVG9kb0xpc3RFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL1RvZG9MaXN0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9Ub2RvTGlzdFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUYWdpZnkgKHYgNC43LjIpIC0gdGFncyBpbnB1dCBjb21wb25lbnRcbiAqIEJ5IFlhaXIgRXZlbi1PclxuICogRG9uJ3Qgc2VsbCB0aGlzIGNvZGUuIChjKVxuICogaHR0cHM6Ly9naXRodWIuY29tL3lhaXJFTy90YWdpZnlcbiAqL1xuXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLlRhZ2lmeT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUsaSl7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1pLHR9ZnVuY3Rpb24gZSh0LGUpe3ZhciBpPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHM9cy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksaS5wdXNoLmFwcGx5KGkscyl9cmV0dXJuIGl9ZnVuY3Rpb24gaShpKXtmb3IodmFyIHM9MTtzPGFyZ3VtZW50cy5sZW5ndGg7cysrKXt2YXIgYT1udWxsIT1hcmd1bWVudHNbc10/YXJndW1lbnRzW3NdOnt9O3MlMj9lKE9iamVjdChhKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dChpLGUsYVtlXSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhhKSk6ZShPYmplY3QoYSkpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLHQpKX0pKX1yZXR1cm4gaX1jb25zdCBzPSh0LGUsaSxzKT0+KHQ9XCJcIit0LGU9XCJcIitlLHMmJih0PXQudHJpbSgpLGU9ZS50cmltKCkpLGk/dD09ZTp0LnRvTG93ZXJDYXNlKCk9PWUudG9Mb3dlckNhc2UoKSk7ZnVuY3Rpb24gYSh0LGUpe3ZhciBpLHM9e307Zm9yKGkgaW4gdCllLmluZGV4T2YoaSk8MCYmKHNbaV09dFtpXSk7cmV0dXJuIHN9ZnVuY3Rpb24gbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnJlcGxhY2UoL1xcJiM/WzAtOWEtel0rOy9naSwoZnVuY3Rpb24odCl7cmV0dXJuIGUuaW5uZXJIVE1MPXQsZS5pbm5lclRleHR9KSl9ZnVuY3Rpb24gbyh0LGUpe2ZvcihlPWV8fFwicHJldmlvdXNcIjt0PXRbZStcIlNpYmxpbmdcIl07KWlmKDM9PXQubm9kZVR5cGUpcmV0dXJuIHR9ZnVuY3Rpb24gcih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90LnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvPi9nLFwiJmd0O1wiKS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpLnJlcGxhY2UoL2B8Jy9nLFwiJiMwMzk7XCIpOnR9ZnVuY3Rpb24gbCh0KXt2YXIgZT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc3BsaXQoXCIgXCIpWzFdLnNsaWNlKDAsLTEpO3JldHVybiB0PT09T2JqZWN0KHQpJiZcIkFycmF5XCIhPWUmJlwiRnVuY3Rpb25cIiE9ZSYmXCJSZWdFeHBcIiE9ZSYmXCJIVE1MVW5rbm93bkVsZW1lbnRcIiE9ZX1mdW5jdGlvbiBkKHQsZSxpKXtmdW5jdGlvbiBzKHQsZSl7Zm9yKHZhciBpIGluIGUpaWYoZS5oYXNPd25Qcm9wZXJ0eShpKSl7aWYobChlW2ldKSl7bCh0W2ldKT9zKHRbaV0sZVtpXSk6dFtpXT1PYmplY3QuYXNzaWduKHt9LGVbaV0pO2NvbnRpbnVlfWlmKEFycmF5LmlzQXJyYXkoZVtpXSkpe3RbaV09T2JqZWN0LmFzc2lnbihbXSxlW2ldKTtjb250aW51ZX10W2ldPWVbaV19fXJldHVybiB0IGluc3RhbmNlb2YgT2JqZWN0fHwodD17fSkscyh0LGUpLGkmJnModCxpKSx0fWZ1bmN0aW9uIGgodCl7cmV0dXJuIFN0cmluZy5wcm90b3R5cGUubm9ybWFsaXplP1wic3RyaW5nXCI9PXR5cGVvZiB0P3Qubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csXCJcIik6dm9pZCAwOnR9dmFyIGc9KCk9Pi8oPz0uKmNocm9tZSkoPz0uKmFuZHJvaWQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTt2YXIgcD17ZGVsaW1pdGVyczpcIixcIixwYXR0ZXJuOm51bGwsdGFnVGV4dFByb3A6XCJ2YWx1ZVwiLG1heFRhZ3M6MS8wLGNhbGxiYWNrczp7fSxhZGRUYWdPbkJsdXI6ITAsZHVwbGljYXRlczohMSx3aGl0ZWxpc3Q6W10sYmxhY2tsaXN0OltdLGVuZm9yY2VXaGl0ZWxpc3Q6ITEsdXNlcklucHV0OiEwLGtlZXBJbnZhbGlkVGFnczohMSxtaXhUYWdzQWxsb3dlZEFmdGVyOi8sfFxcLnxcXDp8XFxzLyxtaXhUYWdzSW50ZXJwb2xhdG9yOltcIltbXCIsXCJdXVwiXSxiYWNrc3BhY2U6ITAsc2tpcEludmFsaWQ6ITEscGFzdGVBc1RhZ3M6ITAsZWRpdFRhZ3M6e2NsaWNrczoyLGtlZXBJbnZhbGlkOiEwfSx0cmFuc2Zvcm1UYWc6KCk9Pnt9LHRyaW06ITAsYTExeTp7Zm9jdXNhYmxlVGFnczohMX0sbWl4TW9kZTp7aW5zZXJ0QWZ0ZXJUYWc6XCLCoFwifSxhdXRvQ29tcGxldGU6e2VuYWJsZWQ6ITAscmlnaHRLZXk6ITF9LGNsYXNzTmFtZXM6e25hbWVzcGFjZTpcInRhZ2lmeVwiLG1peE1vZGU6XCJ0YWdpZnktLW1peFwiLHNlbGVjdE1vZGU6XCJ0YWdpZnktLXNlbGVjdFwiLGlucHV0OlwidGFnaWZ5X19pbnB1dFwiLGZvY3VzOlwidGFnaWZ5LS1mb2N1c1wiLHRhZzpcInRhZ2lmeV9fdGFnXCIsdGFnTm9BbmltYXRpb246XCJ0YWdpZnktLW5vQW5pbVwiLHRhZ0ludmFsaWQ6XCJ0YWdpZnktLWludmFsaWRcIix0YWdOb3RBbGxvd2VkOlwidGFnaWZ5LS1ub3RBbGxvd2VkXCIsaW5wdXRJbnZhbGlkOlwidGFnaWZ5X19pbnB1dC0taW52YWxpZFwiLHRhZ1g6XCJ0YWdpZnlfX3RhZ19fcmVtb3ZlQnRuXCIsdGFnVGV4dDpcInRhZ2lmeV9fdGFnLXRleHRcIixkcm9wZG93bjpcInRhZ2lmeV9fZHJvcGRvd25cIixkcm9wZG93bldyYXBwZXI6XCJ0YWdpZnlfX2Ryb3Bkb3duX193cmFwcGVyXCIsZHJvcGRvd25JdGVtOlwidGFnaWZ5X19kcm9wZG93bl9faXRlbVwiLGRyb3Bkb3duSXRlbUFjdGl2ZTpcInRhZ2lmeV9fZHJvcGRvd25fX2l0ZW0tLWFjdGl2ZVwiLGRyb3Bkb3duSW5pdGFsOlwidGFnaWZ5X19kcm9wZG93bi0taW5pdGlhbFwiLHNjb3BlTG9hZGluZzpcInRhZ2lmeS0tbG9hZGluZ1wiLHRhZ0xvYWRpbmc6XCJ0YWdpZnlfX3RhZy0tbG9hZGluZ1wiLHRhZ0VkaXRpbmc6XCJ0YWdpZnlfX3RhZy0tZWRpdGFibGVcIix0YWdGbGFzaDpcInRhZ2lmeV9fdGFnLS1mbGFzaFwiLHRhZ0hpZGU6XCJ0YWdpZnlfX3RhZy0taGlkZVwiLGhhc01heFRhZ3M6XCJ0YWdpZnktLWhhc01heFRhZ3NcIixoYXNOb1RhZ3M6XCJ0YWdpZnktLW5vVGFnc1wiLGVtcHR5OlwidGFnaWZ5LS1lbXB0eVwifSxkcm9wZG93bjp7Y2xhc3NuYW1lOlwiXCIsZW5hYmxlZDoyLG1heEl0ZW1zOjEwLHNlYXJjaEtleXM6W1widmFsdWVcIixcInNlYXJjaEJ5XCJdLGZ1enp5U2VhcmNoOiEwLGNhc2VTZW5zaXRpdmU6ITEsYWNjZW50ZWRTZWFyY2g6ITAsaGlnaGxpZ2h0Rmlyc3Q6ITEsY2xvc2VPblNlbGVjdDohMCxjbGVhck9uU2VsZWN0OiEwLHBvc2l0aW9uOlwiYWxsXCIsYXBwZW5kVGFyZ2V0Om51bGx9LGhvb2tzOntiZWZvcmVSZW1vdmVUYWc6KCk9PlByb21pc2UucmVzb2x2ZSgpLGJlZm9yZVBhc3RlOigpPT5Qcm9taXNlLnJlc29sdmUoKSxzdWdnZXN0aW9uQ2xpY2s6KCk9PlByb21pc2UucmVzb2x2ZSgpfX07ZnVuY3Rpb24gYygpe3RoaXMuZHJvcGRvd249e307Zm9yKGxldCB0IGluIHRoaXMuX2Ryb3Bkb3duKXRoaXMuZHJvcGRvd25bdF09XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fZHJvcGRvd25bdF0/dGhpcy5fZHJvcGRvd25bdF0uYmluZCh0aGlzKTp0aGlzLl9kcm9wZG93blt0XTt0aGlzLnNldHRpbmdzLmRyb3Bkb3duLmVuYWJsZWQ+PTAmJnRoaXMuZHJvcGRvd24uaW5pdCgpfXZhciB1LG09e2luaXQoKXt0aGlzLkRPTS5kcm9wZG93bj10aGlzLnBhcnNlVGVtcGxhdGUoXCJkcm9wZG93blwiLFt0aGlzLnNldHRpbmdzXSksdGhpcy5ET00uZHJvcGRvd24uY29udGVudD10aGlzLkRPTS5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bldyYXBwZXJTZWxlY3Rvcil9LHNob3codCl7dmFyIGUsaSxhLG49dGhpcy5zZXR0aW5ncyxvPVwibWl4XCI9PW4ubW9kZSYmIW4uZW5mb3JjZVdoaXRlbGlzdCxyPSFuLndoaXRlbGlzdHx8IW4ud2hpdGVsaXN0Lmxlbmd0aCxkPVwibWFudWFsXCI9PW4uZHJvcGRvd24ucG9zaXRpb247aWYodD12b2lkIDA9PT10P3RoaXMuc3RhdGUuaW5wdXRUZXh0OnQsKCFyfHxvfHxuLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW1Ob01hdGNoKSYmITEhPT1uLmRyb3Bkb3duLmVuYWJsZSYmIXRoaXMuc3RhdGUuaXNMb2FkaW5nKXtpZihjbGVhclRpbWVvdXQodGhpcy5kcm9wZG93bkhpZGVfX2JpbmRFdmVudHNUaW1lb3V0KSx0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcz10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyh0KSx0JiYhdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RoJiYodGhpcy50cmlnZ2VyKFwiZHJvcGRvd246bm9NYXRjaFwiLHQpLG4udGVtcGxhdGVzLmRyb3Bkb3duSXRlbU5vTWF0Y2gmJihhPW4udGVtcGxhdGVzLmRyb3Bkb3duSXRlbU5vTWF0Y2guY2FsbCh0aGlzLHt2YWx1ZTp0fSkpKSwhYSl7aWYodGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RoKXQmJm8mJiF0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUmJiFzKHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zWzBdLnZhbHVlLHQpJiZ0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy51bnNoaWZ0KHt2YWx1ZTp0fSk7ZWxzZXtpZighdHx8IW98fHRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSlyZXR1cm4gdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpLHZvaWQgdGhpcy5kcm9wZG93bi5oaWRlKCk7dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXM9W3t2YWx1ZTp0fV19aT1cIlwiKyhsKGU9dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXNbMF0pP2UudmFsdWU6ZSksbi5hdXRvQ29tcGxldGUmJmkmJjA9PWkuaW5kZXhPZih0KSYmdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMsZSl9dGhpcy5kcm9wZG93bi5maWxsKGEpLG4uZHJvcGRvd24uaGlnaGxpZ2h0Rmlyc3QmJnRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQuY2hpbGRyZW5bMF0pLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZXx8c2V0VGltZW91dCh0aGlzLmRyb3Bkb3duLmV2ZW50cy5iaW5kaW5nLmJpbmQodGhpcykpLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT10fHwhMCx0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5PXQsdGhpcy5zZXRTdGF0ZVNlbGVjdGlvbigpLGR8fHNldFRpbWVvdXQoKCgpPT57dGhpcy5kcm9wZG93bi5wb3NpdGlvbigpLHRoaXMuZHJvcGRvd24ucmVuZGVyKCl9KSksc2V0VGltZW91dCgoKCk9Pnt0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpzaG93XCIsdGhpcy5ET00uZHJvcGRvd24pfSkpfX0saGlkZSh0KXt2YXIgZT10aGlzLkRPTSxpPWUuc2NvcGUscz1lLmRyb3Bkb3duLGE9XCJtYW51YWxcIj09dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5wb3NpdGlvbiYmIXQ7aWYocyYmZG9jdW1lbnQuYm9keS5jb250YWlucyhzKSYmIWEpcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5kcm9wZG93bi5wb3NpdGlvbiksdGhpcy5kcm9wZG93bi5ldmVudHMuYmluZGluZy5jYWxsKHRoaXMsITEpLGkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCExKSxzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocyksc2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGU9ITF9KSwxMDApLHRoaXMuc3RhdGUuZHJvcGRvd24ucXVlcnk9dGhpcy5zdGF0ZS5kZEl0ZW1EYXRhPXRoaXMuc3RhdGUuZGRJdGVtRWxtPXRoaXMuc3RhdGUuc2VsZWN0aW9uPW51bGwsdGhpcy5zdGF0ZS50YWcmJnRoaXMuc3RhdGUudGFnLnZhbHVlLmxlbmd0aCYmKHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF09dGhpcy5zdGF0ZS50YWcpLHRoaXMudHJpZ2dlcihcImRyb3Bkb3duOmhpZGVcIixzKSx0aGlzfSx0b2dnbGUodCl7dGhpcy5kcm9wZG93blt0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJiF0P1wiaGlkZVwiOlwic2hvd1wiXSgpfSxyZW5kZXIoKXt2YXIgdCxlLGkscz0odD10aGlzLkRPTS5kcm9wZG93biwoaT10LmNsb25lTm9kZSghMCkpLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDsgdG9wOi05OTk5cHg7IG9wYWNpdHk6MFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaSksZT1pLmNsaWVudEhlaWdodCxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksZSksYT10aGlzLnNldHRpbmdzO3JldHVybiB0aGlzLkRPTS5zY29wZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsITApLGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5ET00uZHJvcGRvd24pfHwodGhpcy5ET00uZHJvcGRvd24uY2xhc3NMaXN0LmFkZChhLmNsYXNzTmFtZXMuZHJvcGRvd25Jbml0YWwpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24ocyksYS5kcm9wZG93bi5hcHBlbmRUYXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5ET00uZHJvcGRvd24pLHNldFRpbWVvdXQoKCgpPT50aGlzLkRPTS5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKGEuY2xhc3NOYW1lcy5kcm9wZG93bkluaXRhbCkpKSksdGhpc30sZmlsbCh0KXt2YXIgZTt0PVwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6dGhpcy5kcm9wZG93bi5jcmVhdGVMaXN0SFRNTCh0fHx0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcyksdGhpcy5ET00uZHJvcGRvd24uY29udGVudC5pbm5lckhUTUw9KGU9dCk/ZS5yZXBsYWNlKC9cXD5bXFxyXFxuIF0rXFw8L2csXCI+PFwiKS5yZXBsYWNlKC8oPC4qPz4pfFxccysvZywoKHQsZSk9PmV8fFwiIFwiKSk6XCJcIn0scmVmaWx0ZXIodCl7dD10fHx0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5fHxcIlwiLHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zPXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKHQpLHRoaXMuZHJvcGRvd24uZmlsbCgpLHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aHx8dGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy50cmlnZ2VyKFwiZHJvcGRvd246dXBkYXRlZFwiLHRoaXMuRE9NLmRyb3Bkb3duKX0scG9zaXRpb24odCl7dmFyIGU9dGhpcy5zZXR0aW5ncy5kcm9wZG93bjtpZihcIm1hbnVhbFwiIT1lLnBvc2l0aW9uKXt2YXIgaSxzLGEsbixvLHIsbD10aGlzLkRPTS5kcm9wZG93bixkPWUucGxhY2VBYm92ZSxoPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsZz1NYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh8fDAsd2luZG93LmlubmVyV2lkdGh8fDApPjQ4MD9lLnBvc2l0aW9uOlwiYWxsXCIscD10aGlzLkRPTVtcImlucHV0XCI9PWc/XCJpbnB1dFwiOlwic2NvcGVcIl07dD10fHxsLmNsaWVudEhlaWdodCx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJihcInRleHRcIj09Zz8oYT0oaT10aGlzLmdldENhcmV0R2xvYmFsUG9zaXRpb24oKSkuYm90dG9tLHM9aS50b3Asbj1pLmxlZnQsbz1cImF1dG9cIik6KHI9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsaT0wO3Q7KWUrPXQub2Zmc2V0TGVmdHx8MCxpKz10Lm9mZnNldFRvcHx8MCx0PXQucGFyZW50Tm9kZTtyZXR1cm57bGVmdDplLHRvcDppfX0odGhpcy5zZXR0aW5ncy5kcm9wZG93bi5hcHBlbmRUYXJnZXQpLHM9KGk9cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkudG9wLXIudG9wLGE9aS5ib3R0b20tMS1yLnRvcCxuPWkubGVmdC1yLmxlZnQsbz1pLndpZHRoK1wicHhcIikscz1NYXRoLmZsb29yKHMpLGE9TWF0aC5jZWlsKGEpLGQ9dm9pZCAwPT09ZD9oLWkuYm90dG9tPHQ6ZCxsLnN0eWxlLmNzc1RleHQ9XCJsZWZ0OlwiKyhuK3dpbmRvdy5wYWdlWE9mZnNldCkrXCJweDsgd2lkdGg6XCIrbytcIjtcIisoZD9cInRvcDogXCIrKHMrd2luZG93LnBhZ2VZT2Zmc2V0KStcInB4XCI6XCJ0b3A6IFwiKyhhK3dpbmRvdy5wYWdlWU9mZnNldCkrXCJweFwiKSxsLnNldEF0dHJpYnV0ZShcInBsYWNlbWVudFwiLGQ/XCJ0b3BcIjpcImJvdHRvbVwiKSxsLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsZykpfX0sZXZlbnRzOntiaW5kaW5nKHQ9ITApe3ZhciBlPXRoaXMuZHJvcGRvd24uZXZlbnRzLmNhbGxiYWNrcyxpPXRoaXMubGlzdGVuZXJzLmRyb3Bkb3duPXRoaXMubGlzdGVuZXJzLmRyb3Bkb3dufHx7cG9zaXRpb246dGhpcy5kcm9wZG93bi5wb3NpdGlvbi5iaW5kKHRoaXMpLG9uS2V5RG93bjplLm9uS2V5RG93bi5iaW5kKHRoaXMpLG9uTW91c2VPdmVyOmUub25Nb3VzZU92ZXIuYmluZCh0aGlzKSxvbk1vdXNlTGVhdmU6ZS5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKSxvbkNsaWNrOmUub25DbGljay5iaW5kKHRoaXMpLG9uU2Nyb2xsOmUub25TY3JvbGwuYmluZCh0aGlzKX0scz10P1wiYWRkRXZlbnRMaXN0ZW5lclwiOlwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiO1wibWFudWFsXCIhPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ucG9zaXRpb24mJih3aW5kb3dbc10oXCJyZXNpemVcIixpLnBvc2l0aW9uKSx3aW5kb3dbc10oXCJrZXlkb3duXCIsaS5vbktleURvd24pKSx0aGlzLkRPTS5kcm9wZG93bltzXShcIm1vdXNlb3ZlclwiLGkub25Nb3VzZU92ZXIpLHRoaXMuRE9NLmRyb3Bkb3duW3NdKFwibW91c2VsZWF2ZVwiLGkub25Nb3VzZUxlYXZlKSx0aGlzLkRPTS5kcm9wZG93bltzXShcIm1vdXNlZG93blwiLGkub25DbGljayksdGhpcy5ET00uZHJvcGRvd24uY29udGVudFtzXShcInNjcm9sbFwiLGkub25TY3JvbGwpfSxjYWxsYmFja3M6e29uS2V5RG93bih0KXt2YXIgZT10aGlzLkRPTS5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1BY3RpdmVTZWxlY3RvciksaT10aGlzLmRyb3Bkb3duLmdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKGUpO3N3aXRjaCh0LmtleSl7Y2FzZVwiQXJyb3dEb3duXCI6Y2FzZVwiQXJyb3dVcFwiOmNhc2VcIkRvd25cIjpjYXNlXCJVcFwiOnZhciBzO3QucHJldmVudERlZmF1bHQoKSxlJiYoZT1lWyhcIkFycm93VXBcIj09dC5rZXl8fFwiVXBcIj09dC5rZXk/XCJwcmV2aW91c1wiOlwibmV4dFwiKStcIkVsZW1lbnRTaWJsaW5nXCJdKSxlfHwocz10aGlzLkRPTS5kcm9wZG93bi5jb250ZW50LmNoaWxkcmVuLGU9c1tcIkFycm93VXBcIj09dC5rZXl8fFwiVXBcIj09dC5rZXk/cy5sZW5ndGgtMTowXSksaT10aGlzLmRyb3Bkb3duLmdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKGUpLHRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKGUsITApO2JyZWFrO2Nhc2VcIkVzY2FwZVwiOmNhc2VcIkVzY1wiOnRoaXMuZHJvcGRvd24uaGlkZSgpO2JyZWFrO2Nhc2VcIkFycm93UmlnaHRcIjppZih0aGlzLnN0YXRlLmFjdGlvbnMuQXJyb3dMZWZ0KXJldHVybjtjYXNlXCJUYWJcIjppZihcIm1peFwiIT10aGlzLnNldHRpbmdzLm1vZGUmJmUmJiF0aGlzLnNldHRpbmdzLmF1dG9Db21wbGV0ZS5yaWdodEtleSYmIXRoaXMuc3RhdGUuZWRpdGluZyl7dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBhPXRoaXMuZHJvcGRvd24uZ2V0TWFwcGVkVmFsdWUoaSk7cmV0dXJuIHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnNldC5jYWxsKHRoaXMsYSksITF9cmV0dXJuITA7Y2FzZVwiRW50ZXJcIjp0LnByZXZlbnREZWZhdWx0KCksdGhpcy5zZXR0aW5ncy5ob29rcy5zdWdnZXN0aW9uQ2xpY2sodCx7dGFnaWZ5OnRoaXMsdGFnRGF0YTppLHN1Z2dlc3Rpb25FbG06ZX0pLnRoZW4oKCgpPT57aWYoZSlyZXR1cm4gdGhpcy5kcm9wZG93bi5zZWxlY3RPcHRpb24oZSk7dGhpcy5kcm9wZG93bi5oaWRlKCksXCJtaXhcIiE9dGhpcy5zZXR0aW5ncy5tb2RlJiZ0aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS5pbnB1dFRleHQudHJpbSgpLCEwKX0pKS5jYXRjaCgodD0+dCkpO2JyZWFrO2Nhc2VcIkJhY2tzcGFjZVwiOntpZihcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGV8fHRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSlyZXR1cm47bGV0IHQ9dGhpcy5zdGF0ZS5pbnB1dFRleHQudHJpbSgpO1wiXCIhPXQmJjgyMDMhPXQuY2hhckNvZGVBdCgwKXx8KCEwPT09dGhpcy5zZXR0aW5ncy5iYWNrc3BhY2U/dGhpcy5yZW1vdmVUYWdzKCk6XCJlZGl0XCI9PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlJiZzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDApKX19fSxvbk1vdXNlT3Zlcih0KXt2YXIgZT10LnRhcmdldC5jbG9zZXN0KHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1TZWxlY3Rvcik7ZSYmdGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24oZSl9LG9uTW91c2VMZWF2ZSh0KXt0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbigpfSxvbkNsaWNrKHQpe2lmKDA9PXQuYnV0dG9uJiZ0LnRhcmdldCE9dGhpcy5ET00uZHJvcGRvd24mJnQudGFyZ2V0IT10aGlzLkRPTS5kcm9wZG93bi5jb250ZW50KXt2YXIgZT10LnRhcmdldC5jbG9zZXN0KHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1TZWxlY3RvciksaT10aGlzLmRyb3Bkb3duLmdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKGUpO3RoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb249ITAsc2V0VGltZW91dCgoKCk9PnRoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb249ITEpLDUwKSx0aGlzLnNldHRpbmdzLmhvb2tzLnN1Z2dlc3Rpb25DbGljayh0LHt0YWdpZnk6dGhpcyx0YWdEYXRhOmksc3VnZ2VzdGlvbkVsbTplfSkudGhlbigoKCk9PntlP3RoaXMuZHJvcGRvd24uc2VsZWN0T3B0aW9uKGUpOnRoaXMuZHJvcGRvd24uaGlkZSgpfSkpLmNhdGNoKCh0PT50KSl9fSxvblNjcm9sbCh0KXt2YXIgZT10LnRhcmdldCxpPWUuc2Nyb2xsVG9wLyhlLnNjcm9sbEhlaWdodC1lLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KSoxMDA7dGhpcy50cmlnZ2VyKFwiZHJvcGRvd246c2Nyb2xsXCIse3BlcmNlbnRhZ2U6TWF0aC5yb3VuZChpKX0pfX19LGdldFN1Z2dlc3Rpb25EYXRhQnlOb2RlKHQpe3ZhciBlPXQ/K3QuZ2V0QXR0cmlidXRlKFwidGFnaWZ5U3VnZ2VzdGlvbklkeFwiKTotMTtyZXR1cm4gdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXNbZV18fG51bGx9LGhpZ2hsaWdodE9wdGlvbih0LGUpe3ZhciBpLHM9dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbUFjdGl2ZTtpZih0aGlzLnN0YXRlLmRkSXRlbUVsbSYmKHRoaXMuc3RhdGUuZGRJdGVtRWxtLmNsYXNzTGlzdC5yZW1vdmUocyksdGhpcy5zdGF0ZS5kZEl0ZW1FbG0ucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiKSksIXQpcmV0dXJuIHRoaXMuc3RhdGUuZGRJdGVtRGF0YT1udWxsLHRoaXMuc3RhdGUuZGRJdGVtRWxtPW51bGwsdm9pZCB0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyk7aT10aGlzLnN1Z2dlc3RlZExpc3RJdGVtc1t0aGlzLmdldE5vZGVJbmRleCh0KV0sdGhpcy5zdGF0ZS5kZEl0ZW1EYXRhPWksdGhpcy5zdGF0ZS5kZEl0ZW1FbG09dCx0LmNsYXNzTGlzdC5hZGQocyksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsITApLGUmJih0LnBhcmVudE5vZGUuc2Nyb2xsVG9wPXQuY2xpZW50SGVpZ2h0K3Qub2Zmc2V0VG9wLXQucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpLHRoaXMuc2V0dGluZ3MuYXV0b0NvbXBsZXRlJiYodGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMsaSksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpKX0sc2VsZWN0T3B0aW9uKHQpe3ZhciBlLGk9dGhpcy5zZXR0aW5ncy5kcm9wZG93bixzPWkuY2xlYXJPblNlbGVjdCxhPWkuY2xvc2VPblNlbGVjdDtpZighdClyZXR1cm4gZT10aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS5pbnB1dFRleHQsITApLHZvaWQoYSYmdGhpcy5kcm9wZG93bi5oaWRlKCkpO3ZhciBuPXQuZ2V0QXR0cmlidXRlKFwidGFnaWZ5U3VnZ2VzdGlvbklkeFwiKSxvPXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zWytuXTt0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpzZWxlY3RcIix7ZGF0YTpvLGVsbTp0fSksbiYmbz8odGhpcy5zdGF0ZS5lZGl0aW5nP3RoaXMub25FZGl0VGFnRG9uZShudWxsLGQoe19faXNWYWxpZDohMH0sbykpOmU9dGhpc1tcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/XCJhZGRNaXhUYWdzXCI6XCJhZGRUYWdzXCJdKFtvXSxzKSx0aGlzLkRPTS5pbnB1dC5wYXJlbnROb2RlJiYoc2V0VGltZW91dCgoKCk9Pnt0aGlzLkRPTS5pbnB1dC5mb2N1cygpLHRoaXMudG9nZ2xlRm9jdXNDbGFzcyghMCksdGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKGUpfSkpLGE/c2V0VGltZW91dCh0aGlzLmRyb3Bkb3duLmhpZGUuYmluZCh0aGlzKSk6dGhpcy5kcm9wZG93bi5yZWZpbHRlcigpKSk6dGhpcy5kcm9wZG93bi5oaWRlKCl9LHNlbGVjdEFsbCgpe3JldHVybiB0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5sZW5ndGg9MCx0aGlzLmRyb3Bkb3duLmhpZGUoKSx0aGlzLmFkZFRhZ3ModGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXMoXCJcIiksITApLHRoaXN9LGZpbHRlckxpc3RJdGVtcyh0LGUpe3ZhciBpLHMsYSxuLG8scj10aGlzLnNldHRpbmdzLGQ9ci5kcm9wZG93bixnPShlPWV8fHt9LHQ9XCJzZWxlY3RcIj09ci5tb2RlJiZ0aGlzLnZhbHVlLmxlbmd0aCYmdGhpcy52YWx1ZVswXVtyLnRhZ1RleHRQcm9wXT09dD9cIlwiOnQsW10pLHA9ci53aGl0ZWxpc3QsYz1kLm1heEl0ZW1zfHwxLzAsdT1kLnNlYXJjaEtleXMsbT0wO2lmKCF0fHwhdS5sZW5ndGgpcmV0dXJuKHIuZHVwbGljYXRlcz9wOnAuZmlsdGVyKCh0PT4hdGhpcy5pc1RhZ0R1cGxpY2F0ZShsKHQpP3QudmFsdWU6dCkpKSkuc2xpY2UoMCxjKTtmdW5jdGlvbiB2KHQsZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuZXZlcnkoKGU9PnQuaW5jbHVkZXMoZS50b0xvd2VyQ2FzZSgpKSkpfWZvcihvPWQuY2FzZVNlbnNpdGl2ZT9cIlwiK3Q6KFwiXCIrdCkudG9Mb3dlckNhc2UoKTttPHAubGVuZ3RoO20rKyl7aT1wW21daW5zdGFuY2VvZiBPYmplY3Q/cFttXTp7dmFsdWU6cFttXX07bGV0IHQ9IU9iamVjdC5rZXlzKGkpLnNvbWUoKHQ9PnUuaW5jbHVkZXModCkpKT9bXCJ2YWx1ZVwiXTp1O2lmKGQuZnV6enlTZWFyY2gmJiFlLmV4YWN0PyhhPXQucmVkdWNlKCgodCxlKT0+dCtcIiBcIisoaVtlXXx8XCJcIikpLFwiXCIpLnRvTG93ZXJDYXNlKCksZC5hY2NlbnRlZFNlYXJjaCYmKGE9aChhKSxvPWgobykpLHM9dihhLG8pKTpzPXQuc29tZSgodD0+e3ZhciBzPVwiXCIrKGlbdF18fFwiXCIpO3JldHVybiBkLmFjY2VudGVkU2VhcmNoJiYocz1oKHMpLG89aChvKSksZC5jYXNlU2Vuc2l0aXZlfHwocz1zLnRvTG93ZXJDYXNlKCkpLGUuZXhhY3Q/cz09bzowPT1zLmluZGV4T2Yobyl9KSksbj0hci5kdXBsaWNhdGVzJiZ0aGlzLmlzVGFnRHVwbGljYXRlKGwoaSk/aS52YWx1ZTppKSxzJiYhbiYmYy0tJiZnLnB1c2goaSksMD09YylicmVha31yZXR1cm4gZ30sZ2V0TWFwcGVkVmFsdWUodCl7dmFyIGU9dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5tYXBWYWx1ZVRvO3JldHVybiBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZSh0KTp0W2VdfHx0LnZhbHVlOnQudmFsdWV9LGNyZWF0ZUxpc3RIVE1MKHQpe3JldHVybiBkKFtdLHQpLm1hcCgoKHQsZSk9PntcInN0cmluZ1wiIT10eXBlb2YgdCYmXCJudW1iZXJcIiE9dHlwZW9mIHR8fCh0PXt2YWx1ZTp0fSk7dmFyIGk9dGhpcy5kcm9wZG93bi5nZXRNYXBwZWRWYWx1ZSh0KTt0LnZhbHVlPWkmJlwic3RyaW5nXCI9PXR5cGVvZiBpP3IoaSk6aTt2YXIgcz10aGlzLnNldHRpbmdzLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW0uYXBwbHkodGhpcyxbdCx0aGlzXSk7cmV0dXJuIHM9cy5yZXBsYWNlKC9cXHMqdGFnaWZ5U3VnZ2VzdGlvbklkeD0oW1wiJ10pKC4qPylcXDEvZ2ltLFwiXCIpLnJlcGxhY2UoXCI+XCIsYCB0YWdpZnlTdWdnZXN0aW9uSWR4PVwiJHtlfVwiPmApfSkpLmpvaW4oXCJcIil9fSx2PXtlbXB0eTpcImVtcHR5XCIsZXhjZWVkOlwibnVtYmVyIG9mIHRhZ3MgZXhjZWVkZWRcIixwYXR0ZXJuOlwicGF0dGVybiBtaXNtYXRjaFwiLGR1cGxpY2F0ZTpcImFscmVhZHkgZXhpc3RzXCIsbm90QWxsb3dlZDpcIm5vdCBhbGxvd2VkXCJ9LGY9e3dyYXBwZXI6KHQsZSk9PmA8dGFncyBjbGFzcz1cIiR7ZS5jbGFzc05hbWVzLm5hbWVzcGFjZX0gJHtlLm1vZGU/YCR7ZS5jbGFzc05hbWVzW2UubW9kZStcIk1vZGVcIl19YDpcIlwifSAke3QuY2xhc3NOYW1lfVwiXFxuICAgICAgICAgICAgICAgICAgICAke2UucmVhZG9ubHk/XCJyZWFkb25seVwiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICAke2UuZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICAke2UucmVxdWlyZWQ/XCJyZXF1aXJlZFwiOlwiXCJ9XFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCI+XFxuICAgICAgICAgICAgPHNwYW4gJHshZS5yZWFkb25seSYmZS51c2VySW5wdXQ/XCJjb250ZW50ZWRpdGFibGVcIjpcIlwifSB0YWJJbmRleD1cIjBcIiBkYXRhLXBsYWNlaG9sZGVyPVwiJHtlLnBsYWNlaG9sZGVyfHxcIiYjODIwMztcIn1cIiBhcmlhLXBsYWNlaG9sZGVyPVwiJHtlLnBsYWNlaG9sZGVyfHxcIlwifVwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtlLmNsYXNzTmFtZXMuaW5wdXR9XCJcXG4gICAgICAgICAgICAgICAgcm9sZT1cInRleHRib3hcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImJvdGhcIlxcbiAgICAgICAgICAgICAgICBhcmlhLW11bHRpbGluZT1cIiR7XCJtaXhcIj09ZS5tb2RlfVwiPjwvc3Bhbj5cXG4gICAgICAgIDwvdGFncz5gLHRhZyh0LGUpe3ZhciBpPXRoaXMuc2V0dGluZ3M7cmV0dXJuYDx0YWcgdGl0bGU9XCIke3QudGl0bGV8fHQudmFsdWV9XCJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZT0nZmFsc2UnXFxuICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPSdmYWxzZSdcXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiJHtpLmExMXkuZm9jdXNhYmxlVGFncz8wOi0xfVwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIiR7aS5jbGFzc05hbWVzLnRhZ30gJHt0LmNsYXNzfHxcIlwifVwiXFxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZ2V0QXR0cmlidXRlcyh0KX0+XFxuICAgICAgICAgICAgPHggdGl0bGU9JycgY2xhc3M9XCIke2kuY2xhc3NOYW1lcy50YWdYfVwiIHJvbGU9J2J1dHRvbicgYXJpYS1sYWJlbD0ncmVtb3ZlIHRhZyc+PC94PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHtpLmNsYXNzTmFtZXMudGFnVGV4dH1cIj4ke3RbaS50YWdUZXh0UHJvcF18fHQudmFsdWV9PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC90YWc+YH0sZHJvcGRvd24odCl7dmFyIGU9dC5kcm9wZG93bixpPVwibWFudWFsXCI9PWUucG9zaXRpb24scz1gJHt0LmNsYXNzTmFtZXMuZHJvcGRvd259YDtyZXR1cm5gPGRpdiBjbGFzcz1cIiR7aT9cIlwiOnN9ICR7ZS5jbGFzc25hbWV9XCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93blwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dC5jbGFzc05hbWVzLmRyb3Bkb3duV3JhcHBlcn1cIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+YH0sZHJvcGRvd25JdGVtKHQsZSl7cmV0dXJuYDxkaXYgJHt0aGlzLmdldEF0dHJpYnV0ZXModCl9XFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0nJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtfSAke3QuY2xhc3M/dC5jbGFzczpcIlwifSdcXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXFxuICAgICAgICAgICAgICAgICAgICByb2xlPVwib3B0aW9uXCI+JHt0LnZhbHVlfTwvZGl2PmB9LGRyb3Bkb3duSXRlbU5vTWF0Y2g6bnVsbH07dmFyIFQ9e2N1c3RvbUJpbmRpbmcoKXt0aGlzLmN1c3RvbUV2ZW50c0xpc3QuZm9yRWFjaCgodD0+e3RoaXMub24odCx0aGlzLnNldHRpbmdzLmNhbGxiYWNrc1t0XSl9KSl9LGJpbmRpbmcodD0hMCl7dmFyIGUsaT10aGlzLmV2ZW50cy5jYWxsYmFja3Mscz10P1wiYWRkRXZlbnRMaXN0ZW5lclwiOlwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiO2lmKCF0aGlzLnN0YXRlLm1haW5FdmVudHN8fCF0KWZvcih2YXIgYSBpbiB0aGlzLnN0YXRlLm1haW5FdmVudHM9dCx0JiYhdGhpcy5saXN0ZW5lcnMubWFpbiYmKHRoaXMuZXZlbnRzLmJpbmRHbG9iYWwuY2FsbCh0aGlzKSx0aGlzLnNldHRpbmdzLmlzSlF1ZXJ5UGx1Z2luJiZqUXVlcnkodGhpcy5ET00ub3JpZ2luYWxJbnB1dCkub24oXCJ0YWdpZnkucmVtb3ZlQWxsVGFnc1wiLHRoaXMucmVtb3ZlQWxsVGFncy5iaW5kKHRoaXMpKSksZT10aGlzLmxpc3RlbmVycy5tYWluPXRoaXMubGlzdGVuZXJzLm1haW58fHtmb2N1czpbXCJpbnB1dFwiLGkub25Gb2N1c0JsdXIuYmluZCh0aGlzKV0sa2V5ZG93bjpbXCJpbnB1dFwiLGkub25LZXlkb3duLmJpbmQodGhpcyldLGNsaWNrOltcInNjb3BlXCIsaS5vbkNsaWNrU2NvcGUuYmluZCh0aGlzKV0sZGJsY2xpY2s6W1wic2NvcGVcIixpLm9uRG91YmxlQ2xpY2tTY29wZS5iaW5kKHRoaXMpXSxwYXN0ZTpbXCJpbnB1dFwiLGkub25QYXN0ZS5iaW5kKHRoaXMpXX0pdGhpcy5ET01bZVthXVswXV1bc10oYSxlW2FdWzFdKX0sYmluZEdsb2JhbCh0KXt2YXIgZSxpPXRoaXMuZXZlbnRzLmNhbGxiYWNrcyxzPXQ/XCJyZW1vdmVFdmVudExpc3RlbmVyXCI6XCJhZGRFdmVudExpc3RlbmVyXCI7aWYodHx8IXRoaXMubGlzdGVuZXJzLmdsb2JhbClmb3IoZSBvZih0aGlzLmxpc3RlbmVycy5nbG9iYWw9dGhpcy5saXN0ZW5lcnMmJnRoaXMubGlzdGVuZXJzLmdsb2JhbHx8W3t0eXBlOnRoaXMuaXNJRT9cImtleWRvd25cIjpcImlucHV0XCIsdGFyZ2V0OnRoaXMuRE9NLmlucHV0LGNiOmlbdGhpcy5pc0lFP1wib25JbnB1dElFXCI6XCJvbklucHV0XCJdLmJpbmQodGhpcyl9LHt0eXBlOlwia2V5ZG93blwiLHRhcmdldDp3aW5kb3csY2I6aS5vbldpbmRvd0tleURvd24uYmluZCh0aGlzKX0se3R5cGU6XCJibHVyXCIsdGFyZ2V0OnRoaXMuRE9NLmlucHV0LGNiOmkub25Gb2N1c0JsdXIuYmluZCh0aGlzKX1dLHRoaXMubGlzdGVuZXJzLmdsb2JhbCkpZS50YXJnZXRbc10oZS50eXBlLGUuY2IpfSx1bmJpbmRHbG9iYWwoKXt0aGlzLmV2ZW50cy5iaW5kR2xvYmFsLmNhbGwodGhpcywhMCl9LGNhbGxiYWNrczp7b25Gb2N1c0JsdXIodCl7dmFyIGU9dC50YXJnZXQ/dGhpcy50cmltKHQudGFyZ2V0LnRleHRDb250ZW50KTpcIlwiLGk9dGhpcy5zZXR0aW5ncyxzPXQudHlwZSxhPWkuZHJvcGRvd24uZW5hYmxlZD49MCxuPXtyZWxhdGVkVGFyZ2V0OnQucmVsYXRlZFRhcmdldH0sbz10aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uJiYoYXx8IWkuZHJvcGRvd24uY2xvc2VPblNlbGVjdCkscj10aGlzLnN0YXRlLmFjdGlvbnMuYWRkTmV3JiZhLGw9dC5yZWxhdGVkVGFyZ2V0JiZ0LnJlbGF0ZWRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGkuY2xhc3NOYW1lcy50YWcpJiZ0aGlzLkRPTS5zY29wZS5jb250YWlucyh0LnJlbGF0ZWRUYXJnZXQpO2lmKFwiYmx1clwiPT1zKXtpZih0LnJlbGF0ZWRUYXJnZXQ9PT10aGlzLkRPTS5zY29wZSlyZXR1cm4gdGhpcy5kcm9wZG93bi5oaWRlKCksdm9pZCB0aGlzLkRPTS5pbnB1dC5mb2N1cygpO3RoaXMucG9zdFVwZGF0ZSgpLHRoaXMudHJpZ2dlckNoYW5nZUV2ZW50KCl9aWYoIW8mJiFyKWlmKHRoaXMuc3RhdGUuaGFzRm9jdXM9XCJmb2N1c1wiPT1zJiYrbmV3IERhdGUsdGhpcy50b2dnbGVGb2N1c0NsYXNzKHRoaXMuc3RhdGUuaGFzRm9jdXMpLFwibWl4XCIhPWkubW9kZSl7aWYoXCJmb2N1c1wiPT1zKXJldHVybiB0aGlzLnRyaWdnZXIoXCJmb2N1c1wiLG4pLHZvaWQoMCE9PWkuZHJvcGRvd24uZW5hYmxlZCYmaS51c2VySW5wdXR8fHRoaXMuZHJvcGRvd24uc2hvdygpKTtcImJsdXJcIj09cyYmKHRoaXMudHJpZ2dlcihcImJsdXJcIixuKSx0aGlzLmxvYWRpbmcoITEpLFwic2VsZWN0XCI9PXRoaXMuc2V0dGluZ3MubW9kZSYmbCYmKGU9XCJcIiksKFwic2VsZWN0XCI9PXRoaXMuc2V0dGluZ3MubW9kZSYmZT8hdGhpcy52YWx1ZS5sZW5ndGh8fHRoaXMudmFsdWVbMF0udmFsdWUhPWU6ZSYmIXRoaXMuc3RhdGUuYWN0aW9ucy5zZWxlY3RPcHRpb24mJmkuYWRkVGFnT25CbHVyKSYmdGhpcy5hZGRUYWdzKGUsITApLFwic2VsZWN0XCIhPXRoaXMuc2V0dGluZ3MubW9kZXx8ZXx8dGhpcy5yZW1vdmVUYWdzKCkpLHRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLHRoaXMuZHJvcGRvd24uaGlkZSgpfWVsc2VcImZvY3VzXCI9PXM/dGhpcy50cmlnZ2VyKFwiZm9jdXNcIixuKTpcImJsdXJcIj09dC50eXBlJiYodGhpcy50cmlnZ2VyKFwiYmx1clwiLG4pLHRoaXMubG9hZGluZyghMSksdGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlPXZvaWQgMCx0aGlzLnNldFN0YXRlU2VsZWN0aW9uKCkpfSxvbldpbmRvd0tleURvd24odCl7dmFyIGUsaT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O2lmKGkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcpJiZ0aGlzLkRPTS5zY29wZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSlzd2l0Y2goZT1pLm5leHRFbGVtZW50U2libGluZyx0LmtleSl7Y2FzZVwiQmFja3NwYWNlXCI6dGhpcy5yZW1vdmVUYWdzKGkpLChlfHx0aGlzLkRPTS5pbnB1dCkuZm9jdXMoKTticmVhaztjYXNlXCJFbnRlclwiOnNldFRpbWVvdXQodGhpcy5lZGl0VGFnLmJpbmQodGhpcyksMCxpKX19LG9uS2V5ZG93bih0KXtcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJnRoaXMuc2V0dGluZ3MuZW5mb3JjZVdoaXRlbGlzdCYmdGhpcy52YWx1ZS5sZW5ndGgmJnQucHJldmVudERlZmF1bHQoKTt2YXIgZT10aGlzLnRyaW0odC50YXJnZXQudGV4dENvbnRlbnQpO2lmKHRoaXMudHJpZ2dlcihcImtleWRvd25cIix7b3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQodCl9KSxcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGUpe3N3aXRjaCh0LmtleSl7Y2FzZVwiTGVmdFwiOmNhc2VcIkFycm93TGVmdFwiOnRoaXMuc3RhdGUuYWN0aW9ucy5BcnJvd0xlZnQ9ITA7YnJlYWs7Y2FzZVwiRGVsZXRlXCI6Y2FzZVwiQmFja3NwYWNlXCI6aWYodGhpcy5zdGF0ZS5lZGl0aW5nKXJldHVybjt2YXIgaSxzLGEscj1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKSxsPVwiRGVsZXRlXCI9PXQua2V5JiZyLmFuY2hvck9mZnNldD09KHIuYW5jaG9yTm9kZS5sZW5ndGh8fDApLGQ9MT09ci5hbmNob3JOb2RlLm5vZGVUeXBlfHwhci5hbmNob3JPZmZzZXQmJnIuYW5jaG9yTm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLGg9bih0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUwpLHA9dGhpcy5nZXRUYWdFbG1zKCk7aWYoXCJlZGl0XCI9PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlJiZkKXJldHVybiBpPTE9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZT9udWxsOnIuYW5jaG9yTm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLHNldFRpbWVvdXQodGhpcy5lZGl0VGFnLmJpbmQodGhpcyksMCxpKSx2b2lkIHQucHJldmVudERlZmF1bHQoKTtpZihnKCkmJmQpcmV0dXJuIGE9byhkKSxkLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpfHxkLnJlbW92ZSgpLHRoaXMuRE9NLmlucHV0LmZvY3VzKCksdm9pZCBzZXRUaW1lb3V0KCgoKT0+e3RoaXMucGxhY2VDYXJldEFmdGVyTm9kZShhKSx0aGlzLkRPTS5pbnB1dC5jbGljaygpfSkpO2lmKFwiQlJcIj09ci5hbmNob3JOb2RlLm5vZGVOYW1lKXJldHVybjtpZigobHx8ZCkmJjE9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZT9zPTA9PXIuYW5jaG9yT2Zmc2V0P2w/cFswXTpudWxsOnBbci5hbmNob3JPZmZzZXQtMV06bD9zPXIuYW5jaG9yTm9kZS5uZXh0RWxlbWVudFNpYmxpbmc6ZCYmKHM9ZCksMz09ci5hbmNob3JOb2RlLm5vZGVUeXBlJiYhci5hbmNob3JOb2RlLm5vZGVWYWx1ZSYmci5hbmNob3JOb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcmJnQucHJldmVudERlZmF1bHQoKSwoZHx8bCkmJiF0aGlzLnNldHRpbmdzLmJhY2tzcGFjZSlyZXR1cm4gdm9pZCB0LnByZXZlbnREZWZhdWx0KCk7aWYoXCJSYW5nZVwiIT1yLnR5cGUmJiFyLmFuY2hvck9mZnNldCYmci5hbmNob3JOb2RlPT10aGlzLkRPTS5pbnB1dCYmXCJEZWxldGVcIiE9dC5rZXkpcmV0dXJuIHZvaWQgdC5wcmV2ZW50RGVmYXVsdCgpO2lmKFwiUmFuZ2VcIiE9ci50eXBlJiZzJiZzLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpKXJldHVybiB2b2lkIHRoaXMucGxhY2VDYXJldEFmdGVyTm9kZShvKHMpKTtjbGVhclRpbWVvdXQodSksdT1zZXRUaW1lb3V0KCgoKT0+e3ZhciB0PWRvY3VtZW50LmdldFNlbGVjdGlvbigpLGU9bih0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUwpLGk9IWwmJnQuYW5jaG9yTm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2lmKCFnKCkmJmUubGVuZ3RoPj1oLmxlbmd0aCYmaSYmIWkuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikmJih0aGlzLnJlbW92ZVRhZ3MoaSksdGhpcy5maXhGaXJlZm94TGFzdFRhZ05vQ2FyZXQoKSwyPT10aGlzLkRPTS5pbnB1dC5jaGlsZHJlbi5sZW5ndGgmJlwiQlJcIj09dGhpcy5ET00uaW5wdXQuY2hpbGRyZW5bMV0udGFnTmFtZSkpcmV0dXJuIHRoaXMuRE9NLmlucHV0LmlubmVySFRNTD1cIlwiLHRoaXMudmFsdWUubGVuZ3RoPTAsITA7dGhpcy52YWx1ZT1bXS5tYXAuY2FsbChwLCgodCxlKT0+e3ZhciBpPXRoaXMudGFnRGF0YSh0KTtpZih0LnBhcmVudE5vZGV8fGkucmVhZG9ubHkpcmV0dXJuIGk7dGhpcy50cmlnZ2VyKFwicmVtb3ZlXCIse3RhZzp0LGluZGV4OmUsZGF0YTppfSl9KSkuZmlsdGVyKCh0PT50KSl9KSwyMCl9cmV0dXJuITB9c3dpdGNoKHQua2V5KXtjYXNlXCJCYWNrc3BhY2VcIjpcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJnRoaXMuc2V0dGluZ3MuZW5mb3JjZVdoaXRlbGlzdD90aGlzLnJlbW92ZVRhZ3MoKTp0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUmJlwibWFudWFsXCIhPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ucG9zaXRpb258fFwiXCIhPWUmJjgyMDMhPWUuY2hhckNvZGVBdCgwKXx8KCEwPT09dGhpcy5zZXR0aW5ncy5iYWNrc3BhY2U/dGhpcy5yZW1vdmVUYWdzKCk6XCJlZGl0XCI9PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlJiZzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDApKTticmVhaztjYXNlXCJFc2NcIjpjYXNlXCJFc2NhcGVcIjppZih0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGUpcmV0dXJuO3QudGFyZ2V0LmJsdXIoKTticmVhaztjYXNlXCJEb3duXCI6Y2FzZVwiQXJyb3dEb3duXCI6dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlfHx0aGlzLmRyb3Bkb3duLnNob3coKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6e2xldCB0PXRoaXMuc3RhdGUuaW5wdXRTdWdnZXN0aW9ufHx0aGlzLnN0YXRlLmRkSXRlbURhdGE7aWYodCYmdGhpcy5zZXR0aW5ncy5hdXRvQ29tcGxldGUucmlnaHRLZXkpcmV0dXJuIHZvaWQgdGhpcy5hZGRUYWdzKFt0XSwhMCk7YnJlYWt9Y2FzZVwiVGFiXCI6e2xldCBpPVwic2VsZWN0XCI9PXRoaXMuc2V0dGluZ3MubW9kZTtpZighZXx8aSlyZXR1cm4hMDt0LnByZXZlbnREZWZhdWx0KCl9Y2FzZVwiRW50ZXJcIjppZih0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGV8fDIyOT09dC5rZXlDb2RlKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCksc2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9ufHx0aGlzLmFkZFRhZ3MoZSwhMCl9KSl9fSxvbklucHV0KHQpe2lmKFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZSlyZXR1cm4gdGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uTWl4VGFnc0lucHV0LmNhbGwodGhpcyx0KTt2YXIgZT10aGlzLmlucHV0Lm5vcm1hbGl6ZS5jYWxsKHRoaXMpLGk9ZS5sZW5ndGg+PXRoaXMuc2V0dGluZ3MuZHJvcGRvd24uZW5hYmxlZCxzPXt2YWx1ZTplLGlucHV0RWxtOnRoaXMuRE9NLmlucHV0fTtzLmlzVmFsaWQ9dGhpcy52YWxpZGF0ZVRhZyh7dmFsdWU6ZX0pLHRoaXMuc3RhdGUuaW5wdXRUZXh0IT1lJiYodGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzLGUsITEpLC0xIT1lLnNlYXJjaCh0aGlzLnNldHRpbmdzLmRlbGltaXRlcnMpP3RoaXMuYWRkVGFncyhlKSYmdGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzKTp0aGlzLnNldHRpbmdzLmRyb3Bkb3duLmVuYWJsZWQ+PTAmJnRoaXMuZHJvcGRvd25baT9cInNob3dcIjpcImhpZGVcIl0oZSksdGhpcy50cmlnZ2VyKFwiaW5wdXRcIixzKSl9LG9uTWl4VGFnc0lucHV0KHQpe3ZhciBlLGkscyxhLG4sbyxyLGwsaD10aGlzLnNldHRpbmdzLHA9dGhpcy52YWx1ZS5sZW5ndGgsYz10aGlzLmdldFRhZ0VsbXMoKSx1PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPXdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLHY9W10ubWFwLmNhbGwoYywodD0+dGhpcy50YWdEYXRhKHQpLnZhbHVlKSk7aWYoXCJkZWxldGVDb250ZW50QmFja3dhcmRcIj09dC5pbnB1dFR5cGUmJmcoKSYmdGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uS2V5ZG93bi5jYWxsKHRoaXMse3RhcmdldDp0LnRhcmdldCxrZXk6XCJCYWNrc3BhY2VcIn0pLHRoaXMudmFsdWUuc2xpY2UoKS5mb3JFYWNoKCh0PT57dC5yZWFkb25seSYmIXYuaW5jbHVkZXModC52YWx1ZSkmJnUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUYWdFbGVtKHQpKX0pKSx1LmNoaWxkTm9kZXMubGVuZ3RoJiYobS5pbnNlcnROb2RlKHUpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCExLHUubGFzdENoaWxkKSksYy5sZW5ndGghPXApcmV0dXJuIHRoaXMudmFsdWU9W10ubWFwLmNhbGwodGhpcy5nZXRUYWdFbG1zKCksKHQ9PnRoaXMudGFnRGF0YSh0KSkpLHZvaWQgdGhpcy51cGRhdGUoe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pO2lmKHRoaXMuaGFzTWF4VGFncygpKXJldHVybiEwO2lmKHdpbmRvdy5nZXRTZWxlY3Rpb24mJihvPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSkucmFuZ2VDb3VudD4wJiYzPT1vLmFuY2hvck5vZGUubm9kZVR5cGUpe2lmKChtPW8uZ2V0UmFuZ2VBdCgwKS5jbG9uZVJhbmdlKCkpLmNvbGxhcHNlKCEwKSxtLnNldFN0YXJ0KG8uZm9jdXNOb2RlLDApLHM9KGU9bS50b1N0cmluZygpLnNsaWNlKDAsbS5lbmRPZmZzZXQpKS5zcGxpdChoLnBhdHRlcm4pLmxlbmd0aC0xLChpPWUubWF0Y2goaC5wYXR0ZXJuKSkmJihhPWUuc2xpY2UoZS5sYXN0SW5kZXhPZihpW2kubGVuZ3RoLTFdKSkpLGEpe2lmKHRoaXMuc3RhdGUuYWN0aW9ucy5BcnJvd0xlZnQ9ITEsdGhpcy5zdGF0ZS50YWc9e3ByZWZpeDphLm1hdGNoKGgucGF0dGVybilbMF0sdmFsdWU6YS5yZXBsYWNlKGgucGF0dGVybixcIlwiKX0sdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldD1vLmJhc2VPZmZzZXQtdGhpcy5zdGF0ZS50YWcudmFsdWUubGVuZ3RoLGw9dGhpcy5zdGF0ZS50YWcudmFsdWUubWF0Y2goaC5kZWxpbWl0ZXJzKSlyZXR1cm4gdGhpcy5zdGF0ZS50YWcudmFsdWU9dGhpcy5zdGF0ZS50YWcudmFsdWUucmVwbGFjZShoLmRlbGltaXRlcnMsXCJcIiksdGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycz1sWzBdLHRoaXMuYWRkVGFncyh0aGlzLnN0YXRlLnRhZy52YWx1ZSxoLmRyb3Bkb3duLmNsZWFyT25TZWxlY3QpLHZvaWQgdGhpcy5kcm9wZG93bi5oaWRlKCk7bj10aGlzLnN0YXRlLnRhZy52YWx1ZS5sZW5ndGg+PWguZHJvcGRvd24uZW5hYmxlZDt0cnl7cj0ocj10aGlzLnN0YXRlLmZsYWdnZWRUYWdzW3RoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXRdKS5wcmVmaXg9PXRoaXMuc3RhdGUudGFnLnByZWZpeCYmci52YWx1ZVswXT09dGhpcy5zdGF0ZS50YWcudmFsdWVbMF0sdGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XSYmIXRoaXMuc3RhdGUudGFnLnZhbHVlJiZkZWxldGUgdGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XX1jYXRjaCh0KXt9KHJ8fHM8dGhpcy5zdGF0ZS5taXhNb2RlLm1hdGNoZWRQYXR0ZXJuQ291bnQpJiYobj0hMSl9ZWxzZSB0aGlzLnN0YXRlLmZsYWdnZWRUYWdzPXt9O3RoaXMuc3RhdGUubWl4TW9kZS5tYXRjaGVkUGF0dGVybkNvdW50PXN9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnVwZGF0ZSh7d2l0aG91dENoYW5nZUV2ZW50OiEwfSksdGhpcy50cmlnZ2VyKFwiaW5wdXRcIixkKHt9LHRoaXMuc3RhdGUudGFnLHt0ZXh0Q29udGVudDp0aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudH0pKSx0aGlzLnN0YXRlLnRhZyYmdGhpcy5kcm9wZG93bltuP1wic2hvd1wiOlwiaGlkZVwiXSh0aGlzLnN0YXRlLnRhZy52YWx1ZSl9KSwxMCl9LG9uSW5wdXRJRSh0KXt2YXIgZT10aGlzO3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5ldmVudHMuY2FsbGJhY2tzLm9uSW5wdXQuY2FsbChlLHQpfSkpfSxvbkNsaWNrU2NvcGUodCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPXQudGFyZ2V0LmNsb3Nlc3QoXCIuXCIrZS5jbGFzc05hbWVzLnRhZykscz0rbmV3IERhdGUtdGhpcy5zdGF0ZS5oYXNGb2N1cztpZih0LnRhcmdldCE9dGhpcy5ET00uc2NvcGUpe2lmKCF0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoZS5jbGFzc05hbWVzLnRhZ1gpKXJldHVybiBpPyh0aGlzLnRyaWdnZXIoXCJjbGlja1wiLHt0YWc6aSxpbmRleDp0aGlzLmdldE5vZGVJbmRleChpKSxkYXRhOnRoaXMudGFnRGF0YShpKSxvcmlnaW5hbEV2ZW50OnRoaXMuY2xvbmVFdmVudCh0KX0pLHZvaWQoMSE9PWUuZWRpdFRhZ3MmJjEhPT1lLmVkaXRUYWdzLmNsaWNrc3x8dGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uRG91YmxlQ2xpY2tTY29wZS5jYWxsKHRoaXMsdCkpKTp2b2lkKHQudGFyZ2V0PT10aGlzLkRPTS5pbnB1dCYmKFwibWl4XCI9PWUubW9kZSYmdGhpcy5maXhGaXJlZm94TGFzdFRhZ05vQ2FyZXQoKSxzPjUwMCk/dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlP3RoaXMuZHJvcGRvd24uaGlkZSgpOjA9PT1lLmRyb3Bkb3duLmVuYWJsZWQmJlwibWl4XCIhPWUubW9kZSYmdGhpcy5kcm9wZG93bi5zaG93KCk6XCJzZWxlY3RcIj09ZS5tb2RlJiYhdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiZ0aGlzLmRyb3Bkb3duLnNob3coKSk7dGhpcy5yZW1vdmVUYWdzKHQudGFyZ2V0LnBhcmVudE5vZGUpfWVsc2UgdGhpcy5zdGF0ZS5oYXNGb2N1c3x8dGhpcy5ET00uaW5wdXQuZm9jdXMoKX0sb25QYXN0ZSh0KXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIGUsaSxzPXRoaXMuc2V0dGluZ3M7aWYoXCJzZWxlY3RcIj09cy5tb2RlJiZzLmVuZm9yY2VXaGl0ZWxpc3R8fCFzLnVzZXJJbnB1dClyZXR1cm4hMTtzLnJlYWRvbmx5fHwoZT10LmNsaXBib2FyZERhdGF8fHdpbmRvdy5jbGlwYm9hcmREYXRhLGk9ZS5nZXREYXRhKFwiVGV4dFwiKSxzLmhvb2tzLmJlZm9yZVBhc3RlKHQse3RhZ2lmeTp0aGlzLHBhc3RlZFRleHQ6aSxjbGlwYm9hcmREYXRhOmV9KS50aGVuKChlPT57dm9pZCAwPT09ZSYmKGU9aSksZSYmKHRoaXMuaW5qZWN0QXRDYXJldChlLHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApKSxcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5ldmVudHMuY2FsbGJhY2tzLm9uTWl4VGFnc0lucHV0LmNhbGwodGhpcyx0KTp0aGlzLnNldHRpbmdzLnBhc3RlQXNUYWdzP3RoaXMuYWRkVGFncyhlLCEwKTp0aGlzLnN0YXRlLmlucHV0VGV4dD1lKX0pKS5jYXRjaCgodD0+dCkpKX0sb25FZGl0VGFnSW5wdXQodCxlKXt2YXIgaT10LmNsb3Nlc3QoXCIuXCIrdGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZykscz10aGlzLmdldE5vZGVJbmRleChpKSxhPXRoaXMudGFnRGF0YShpKSxuPXRoaXMuaW5wdXQubm9ybWFsaXplLmNhbGwodGhpcyx0KSxvPWkuaW5uZXJIVE1MIT1pLl9fdGFnaWZ5VGFnRGF0YS5fX29yaWdpbmFsSFRNTCxyPXRoaXMudmFsaWRhdGVUYWcoe1t0aGlzLnNldHRpbmdzLnRhZ1RleHRQcm9wXTpufSk7b3x8ITAhPT10Lm9yaWdpbmFsSXNWYWxpZHx8KHI9ITApLGkuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnSW52YWxpZCwhMCE9PXIpLGEuX19pc1ZhbGlkPXIsaS50aXRsZT0hMD09PXI/YS50aXRsZXx8YS52YWx1ZTpyLG4ubGVuZ3RoPj10aGlzLnNldHRpbmdzLmRyb3Bkb3duLmVuYWJsZWQmJih0aGlzLnN0YXRlLmVkaXRpbmcmJih0aGlzLnN0YXRlLmVkaXRpbmcudmFsdWU9biksdGhpcy5kcm9wZG93bi5zaG93KG4pKSx0aGlzLnRyaWdnZXIoXCJlZGl0OmlucHV0XCIse3RhZzppLGluZGV4OnMsZGF0YTpkKHt9LHRoaXMudmFsdWVbc10se25ld1ZhbHVlOm59KSxvcmlnaW5hbEV2ZW50OnRoaXMuY2xvbmVFdmVudChlKX0pfSxvbkVkaXRUYWdGb2N1cyh0KXt0aGlzLnN0YXRlLmVkaXRpbmc9e3Njb3BlOnQsaW5wdXQ6dC5xdWVyeVNlbGVjdG9yKFwiW2NvbnRlbnRlZGl0YWJsZV1cIil9fSxvbkVkaXRUYWdCbHVyKHQpe2lmKHRoaXMuc3RhdGUuaGFzRm9jdXN8fHRoaXMudG9nZ2xlRm9jdXNDbGFzcygpLHRoaXMuRE9NLnNjb3BlLmNvbnRhaW5zKHQpKXt2YXIgZSxpLHM9dGhpcy5zZXR0aW5ncyxhPXQuY2xvc2VzdChcIi5cIitzLmNsYXNzTmFtZXMudGFnKSxuPXRoaXMuaW5wdXQubm9ybWFsaXplLmNhbGwodGhpcyx0KSxvPXRoaXMudGFnRGF0YShhKS5fX29yaWdpbmFsRGF0YSxyPWEuaW5uZXJIVE1MIT1hLl9fdGFnaWZ5VGFnRGF0YS5fX29yaWdpbmFsSFRNTCxsPXRoaXMudmFsaWRhdGVUYWcoe1tzLnRhZ1RleHRQcm9wXTpufSk7aWYobilpZihyKXtpZihlPXRoaXMuaGFzTWF4VGFncygpLGk9dGhpcy5nZXRXaGl0ZWxpc3RJdGVtKG4pfHxkKHt9LG8se1tzLnRhZ1RleHRQcm9wXTpuLHZhbHVlOm4sX19pc1ZhbGlkOmx9KSxzLnRyYW5zZm9ybVRhZy5jYWxsKHRoaXMsaSxvKSwhMCE9PShsPSFlJiZ0aGlzLnZhbGlkYXRlVGFnKHtbcy50YWdUZXh0UHJvcF06aVtzLnRhZ1RleHRQcm9wXX0pKSl7aWYodGhpcy50cmlnZ2VyKFwiaW52YWxpZFwiLHtkYXRhOmksdGFnOmEsbWVzc2FnZTpsfSkscy5lZGl0VGFncy5rZWVwSW52YWxpZClyZXR1cm47cy5rZWVwSW52YWxpZFRhZ3M/aS5fX2lzVmFsaWQ9bDppPW99ZWxzZSBzLmtlZXBJbnZhbGlkVGFncyYmKGRlbGV0ZSBpLnRpdGxlLGRlbGV0ZSBpW1wiYXJpYS1pbnZhbGlkXCJdLGRlbGV0ZSBpLmNsYXNzKTt0aGlzLm9uRWRpdFRhZ0RvbmUoYSxpKX1lbHNlIHRoaXMub25FZGl0VGFnRG9uZShhLG8pO2Vsc2UgdGhpcy5vbkVkaXRUYWdEb25lKGEpfX0sb25FZGl0VGFna2V5ZG93bih0LGUpe3N3aXRjaCh0aGlzLnRyaWdnZXIoXCJlZGl0OmtleWRvd25cIix7b3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQodCl9KSx0LmtleSl7Y2FzZVwiRXNjXCI6Y2FzZVwiRXNjYXBlXCI6ZS5pbm5lckhUTUw9ZS5fX3RhZ2lmeVRhZ0RhdGEuX19vcmlnaW5hbEhUTUw7Y2FzZVwiRW50ZXJcIjpjYXNlXCJUYWJcIjp0LnByZXZlbnREZWZhdWx0KCksdC50YXJnZXQuYmx1cigpfX0sb25Eb3VibGVDbGlja1Njb3BlKHQpe3ZhciBlLGkscz10LnRhcmdldC5jbG9zZXN0KFwiLlwiK3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcpLGE9dGhpcy5zZXR0aW5ncztzJiZhLnVzZXJJbnB1dCYmKGU9cy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0VkaXRpbmcpLGk9cy5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSxcInNlbGVjdFwiPT1hLm1vZGV8fGEucmVhZG9ubHl8fGV8fGl8fCF0aGlzLnNldHRpbmdzLmVkaXRUYWdzfHx0aGlzLmVkaXRUYWcocyksdGhpcy50b2dnbGVGb2N1c0NsYXNzKCEwKSx0aGlzLnRyaWdnZXIoXCJkYmxjbGlja1wiLHt0YWc6cyxpbmRleDp0aGlzLmdldE5vZGVJbmRleChzKSxkYXRhOnRoaXMudGFnRGF0YShzKX0pKX19fTtmdW5jdGlvbiB3KHQsZSl7cmV0dXJuIHQ/dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nJiZ0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFnaWZ5XCIpPyhjb25zb2xlLndhcm4oXCJUYWdpZnk6IFwiLFwiaW5wdXQgZWxlbWVudCBpcyBhbHJlYWR5IFRhZ2lmaWVkXCIsdCksdGhpcyk6KGQodGhpcyxmdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtmdW5jdGlvbiBpKHQsaSxzKXtzJiZpLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goKGk9PmVbdCtcIkV2ZW50TGlzdGVuZXJcIl0uY2FsbChlLGkscykpKX1yZXR1cm57b2ZmKHQsZSl7cmV0dXJuIGkoXCJyZW1vdmVcIix0LGUpLHRoaXN9LG9uKHQsZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmkoXCJhZGRcIix0LGUpLHRoaXN9LHRyaWdnZXIoaSxzLGEpe3ZhciBuO2lmKGE9YXx8e2Nsb25lRGF0YTohMH0saSlpZih0LnNldHRpbmdzLmlzSlF1ZXJ5UGx1Z2luKVwicmVtb3ZlXCI9PWkmJihpPVwicmVtb3ZlVGFnXCIpLGpRdWVyeSh0LkRPTS5vcmlnaW5hbElucHV0KS50cmlnZ2VySGFuZGxlcihpLFtzXSk7ZWxzZXt0cnl7dmFyIG89XCJvYmplY3RcIj09dHlwZW9mIHM/czp7dmFsdWU6c307aWYoKG89YS5jbG9uZURhdGE/ZCh7fSxvKTpvKS50YWdpZnk9dGhpcyxzIGluc3RhbmNlb2YgT2JqZWN0KWZvcih2YXIgciBpbiBzKXNbcl1pbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYob1tyXT1zW3JdKTtuPW5ldyBDdXN0b21FdmVudChpLHtkZXRhaWw6b30pfWNhdGNoKHQpe2NvbnNvbGUud2Fybih0KX1lLmRpc3BhdGNoRXZlbnQobil9fX19KHRoaXMpKSx0aGlzLmlzRmlyZWZveD1cInVuZGVmaW5lZFwiIT10eXBlb2YgSW5zdGFsbFRyaWdnZXIsdGhpcy5pc0lFPXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudE1vZGUsdGhpcy5hcHBseVNldHRpbmdzKHQsZXx8e30pLHRoaXMuc3RhdGU9e2lucHV0VGV4dDpcIlwiLGVkaXRpbmc6ITEsYWN0aW9uczp7fSxtaXhNb2RlOnt9LGRyb3Bkb3duOnt9LGZsYWdnZWRUYWdzOnt9fSx0aGlzLnZhbHVlPVtdLHRoaXMubGlzdGVuZXJzPXt9LHRoaXMuRE9NPXt9LHRoaXMuYnVpbGQodCksYy5jYWxsKHRoaXMpLHRoaXMuZ2V0Q1NTVmFycygpLHRoaXMubG9hZE9yaWdpbmFsVmFsdWVzKCksdGhpcy5ldmVudHMuY3VzdG9tQmluZGluZy5jYWxsKHRoaXMpLHRoaXMuZXZlbnRzLmJpbmRpbmcuY2FsbCh0aGlzKSx2b2lkKHQuYXV0b2ZvY3VzJiZ0aGlzLkRPTS5pbnB1dC5mb2N1cygpKSk6KGNvbnNvbGUud2FybihcIlRhZ2lmeTogXCIsXCJpbnB1dCBlbGVtZW50IG5vdCBmb3VuZFwiLHQpLHRoaXMpfXJldHVybiB3LnByb3RvdHlwZT17X2Ryb3Bkb3duOm0sY3VzdG9tRXZlbnRzTGlzdDpbXCJjaGFuZ2VcIixcImFkZFwiLFwicmVtb3ZlXCIsXCJpbnZhbGlkXCIsXCJpbnB1dFwiLFwiY2xpY2tcIixcImtleWRvd25cIixcImZvY3VzXCIsXCJibHVyXCIsXCJlZGl0OmlucHV0XCIsXCJlZGl0OmJlZm9yZVVwZGF0ZVwiLFwiZWRpdDp1cGRhdGVkXCIsXCJlZGl0OnN0YXJ0XCIsXCJlZGl0OmtleWRvd25cIixcImRyb3Bkb3duOnNob3dcIixcImRyb3Bkb3duOmhpZGVcIixcImRyb3Bkb3duOnNlbGVjdFwiLFwiZHJvcGRvd246dXBkYXRlZFwiLFwiZHJvcGRvd246bm9NYXRjaFwiLFwiZHJvcGRvd246c2Nyb2xsXCJdLGRhdGFQcm9wczpbXCJfX2lzVmFsaWRcIixcIl9fcmVtb3ZlZFwiLFwiX19vcmlnaW5hbERhdGFcIixcIl9fb3JpZ2luYWxIVE1MXCIsXCJfX3RhZ0lkXCJdLHRyaW0odCl7cmV0dXJuIHRoaXMuc2V0dGluZ3MudHJpbSYmdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC50cmltKCk6dH0scGFyc2VIVE1MOmZ1bmN0aW9uKHQpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodC50cmltKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5maXJzdEVsZW1lbnRDaGlsZH0sdGVtcGxhdGVzOmYscGFyc2VUZW1wbGF0ZSh0LGUpe3JldHVybiB0PXRoaXMuc2V0dGluZ3MudGVtcGxhdGVzW3RdfHx0LHRoaXMucGFyc2VIVE1MKHQuYXBwbHkodGhpcyxlKSl9LHNldCB3aGl0ZWxpc3QodCl7dGhpcy5zZXR0aW5ncy53aGl0ZWxpc3Q9dCYmQXJyYXkuaXNBcnJheSh0KT90OltdfSxnZXQgd2hpdGVsaXN0KCl7cmV0dXJuIHRoaXMuc2V0dGluZ3Mud2hpdGVsaXN0fSxhcHBseVNldHRpbmdzKHQsZSl7cC50ZW1wbGF0ZXM9dGhpcy50ZW1wbGF0ZXM7dmFyIHM9dGhpcy5zZXR0aW5ncz1kKHt9LHAsZSk7cy5kaXNhYmxlZD10Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpLHMucmVhZG9ubHk9dC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSxzLnBsYWNlaG9sZGVyPXQuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIil8fHMucGxhY2Vob2xkZXJ8fFwiXCIscy5yZXF1aXJlZD10Lmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpO2ZvcihsZXQgdCBpbiBzLmNsYXNzTmFtZXMpT2JqZWN0LmRlZmluZVByb3BlcnR5KHMuY2xhc3NOYW1lcyx0K1wiU2VsZWN0b3JcIix7Z2V0KCl7cmV0dXJuXCIuXCIrdGhpc1t0XS5zcGxpdChcIiBcIilbMF19fSk7aWYodGhpcy5pc0lFJiYocy5hdXRvQ29tcGxldGU9ITEpLFtcIndoaXRlbGlzdFwiLFwiYmxhY2tsaXN0XCJdLmZvckVhY2goKGU9Pnt2YXIgaT10LmdldEF0dHJpYnV0ZShcImRhdGEtXCIrZSk7aSYmKGk9aS5zcGxpdChzLmRlbGltaXRlcnMpKWluc3RhbmNlb2YgQXJyYXkmJihzW2VdPWkpfSkpLFwiYXV0b0NvbXBsZXRlXCJpbiBlJiYhbChlLmF1dG9Db21wbGV0ZSkmJihzLmF1dG9Db21wbGV0ZT1wLmF1dG9Db21wbGV0ZSxzLmF1dG9Db21wbGV0ZS5lbmFibGVkPWUuYXV0b0NvbXBsZXRlKSxcIm1peFwiPT1zLm1vZGUmJihzLmF1dG9Db21wbGV0ZS5yaWdodEtleT0hMCxzLmRlbGltaXRlcnM9ZS5kZWxpbWl0ZXJzfHxudWxsLHMudGFnVGV4dFByb3AmJiFzLmRyb3Bkb3duLnNlYXJjaEtleXMuaW5jbHVkZXMocy50YWdUZXh0UHJvcCkmJnMuZHJvcGRvd24uc2VhcmNoS2V5cy5wdXNoKHMudGFnVGV4dFByb3ApKSx0LnBhdHRlcm4pdHJ5e3MucGF0dGVybj1uZXcgUmVnRXhwKHQucGF0dGVybil9Y2F0Y2godCl7fWlmKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVycyl0cnl7cy5kZWxpbWl0ZXJzPW5ldyBSZWdFeHAodGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXJzLFwiZ1wiKX1jYXRjaCh0KXt9dGhpcy5URVhUUz1pKGkoe30sdikscy50ZXh0c3x8e30pLFwic2VsZWN0XCIhPXMubW9kZSYmcy51c2VySW5wdXR8fChzLmRyb3Bkb3duLmVuYWJsZWQ9MCkscy5kcm9wZG93bi5hcHBlbmRUYXJnZXQ9ZS5kcm9wZG93biYmZS5kcm9wZG93bi5hcHBlbmRUYXJnZXQ/ZS5kcm9wZG93bi5hcHBlbmRUYXJnZXQ6ZG9jdW1lbnQuYm9keX0sZ2V0QXR0cmlidXRlcyh0KXt2YXIgZSxpPXRoaXMuZ2V0Q3VzdG9tQXR0cmlidXRlcyh0KSxzPVwiXCI7Zm9yKGUgaW4gaSlzKz1cIiBcIitlKyh2b2lkIDAhPT10W2VdP2A9XCIke2lbZV19XCJgOlwiXCIpO3JldHVybiBzfSxnZXRDdXN0b21BdHRyaWJ1dGVzKHQpe2lmKCFsKHQpKXJldHVyblwiXCI7dmFyIGUsaT17fTtmb3IoZSBpbiB0KVwiX19cIiE9ZS5zbGljZSgwLDIpJiZcImNsYXNzXCIhPWUmJnQuaGFzT3duUHJvcGVydHkoZSkmJnZvaWQgMCE9PXRbZV0mJihpW2VdPXIodFtlXSkpO3JldHVybiBpfSxzZXRTdGF0ZVNlbGVjdGlvbigpe3ZhciB0PXdpbmRvdy5nZXRTZWxlY3Rpb24oKSxlPXthbmNob3JPZmZzZXQ6dC5hbmNob3JPZmZzZXQsYW5jaG9yTm9kZTp0LmFuY2hvck5vZGUscmFuZ2U6dC5nZXRSYW5nZUF0JiZ0LnJhbmdlQ291bnQmJnQuZ2V0UmFuZ2VBdCgwKX07cmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0aW9uPWUsZX0sZ2V0Q2FyZXRHbG9iYWxQb3NpdGlvbigpe2NvbnN0IHQ9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYodC5yYW5nZUNvdW50KXtjb25zdCBlPXQuZ2V0UmFuZ2VBdCgwKSxpPWUuc3RhcnRDb250YWluZXIscz1lLnN0YXJ0T2Zmc2V0O2xldCBhLG47aWYocz4wKXJldHVybiBuPWRvY3VtZW50LmNyZWF0ZVJhbmdlKCksbi5zZXRTdGFydChpLHMtMSksbi5zZXRFbmQoaSxzKSxhPW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse2xlZnQ6YS5yaWdodCx0b3A6YS50b3AsYm90dG9tOmEuYm90dG9tfTtpZihpLmdldEJvdW5kaW5nQ2xpZW50UmVjdClyZXR1cm4gaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX1yZXR1cm57bGVmdDotOTk5OSx0b3A6LTk5OTl9fSxnZXRDU1NWYXJzKCl7dmFyIHQ9Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLkRPTS5zY29wZSxudWxsKTt2YXIgZTt0aGlzLkNTU1ZhcnM9e3RhZ0hpZGVUcmFuc2l0aW9uOigoe3ZhbHVlOnQsdW5pdDplfSk9Plwic1wiPT1lPzFlMyp0OnQpKGZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybnt9O3ZhciBlPSh0PXQudHJpbSgpLnNwbGl0KFwiIFwiKVswXSkuc3BsaXQoL1xcZCsvZykuZmlsdGVyKCh0PT50KSkucG9wKCkudHJpbSgpO3JldHVybnt2YWx1ZTordC5zcGxpdChlKS5maWx0ZXIoKHQ9PnQpKVswXS50cmltKCksdW5pdDplfX0oKGU9XCJ0YWctaGlkZS10cmFuc2l0aW9uXCIsdC5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1cIitlKSkpKX19LGJ1aWxkKHQpe3ZhciBlPXRoaXMuRE9NO3RoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnRlZ3JhdGVkPyhlLm9yaWdpbmFsSW5wdXQ9bnVsbCxlLnNjb3BlPXQsZS5pbnB1dD10KTooZS5vcmlnaW5hbElucHV0PXQsZS5zY29wZT10aGlzLnBhcnNlVGVtcGxhdGUoXCJ3cmFwcGVyXCIsW3QsdGhpcy5zZXR0aW5nc10pLGUuaW5wdXQ9ZS5zY29wZS5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5pbnB1dFNlbGVjdG9yKSx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUuc2NvcGUsdCkpfSxkZXN0cm95KCl7dGhpcy5ldmVudHMudW5iaW5kR2xvYmFsLmNhbGwodGhpcyksdGhpcy5ET00uc2NvcGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLkRPTS5zY29wZSksdGhpcy5kcm9wZG93bi5oaWRlKCEwKSxjbGVhclRpbWVvdXQodGhpcy5kcm9wZG93bkhpZGVfX2JpbmRFdmVudHNUaW1lb3V0KX0sbG9hZE9yaWdpbmFsVmFsdWVzKHQpe3ZhciBlLGk9dGhpcy5zZXR0aW5ncztpZih2b2lkIDA9PT10JiYodD1pLm1peE1vZGUuaW50ZWdyYXRlZD90aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudDp0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlKSx0aGlzLnJlbW92ZUFsbFRhZ3Moe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pLHQpaWYoXCJtaXhcIj09aS5tb2RlKXRoaXMucGFyc2VNaXhUYWdzKHQudHJpbSgpKSwoZT10aGlzLkRPTS5pbnB1dC5sYXN0Q2hpbGQpJiZcIkJSXCI9PWUudGFnTmFtZXx8dGhpcy5ET00uaW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8YnI+XCIpO2Vsc2V7dHJ5e0pTT04ucGFyc2UodClpbnN0YW5jZW9mIEFycmF5JiYodD1KU09OLnBhcnNlKHQpKX1jYXRjaCh0KXt9dGhpcy5hZGRUYWdzKHQpLmZvckVhY2goKHQ9PnQmJnQuY2xhc3NMaXN0LmFkZChpLmNsYXNzTmFtZXMudGFnTm9BbmltYXRpb24pKSl9ZWxzZSB0aGlzLnBvc3RVcGRhdGUoKTt0aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQ9aS5taXhNb2RlLmludGVncmF0ZWQ/XCJcIjp0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlLHRoaXMuc3RhdGUubG9hZGVkT3JpZ2luYWxWYWx1ZXM9ITB9LGNsb25lRXZlbnQodCl7dmFyIGU9e307Zm9yKHZhciBpIGluIHQpZVtpXT10W2ldO3JldHVybiBlfSxsb2FkaW5nKHQpe3JldHVybiB0aGlzLnN0YXRlLmlzTG9hZGluZz10LHRoaXMuRE9NLnNjb3BlLmNsYXNzTGlzdFt0P1wiYWRkXCI6XCJyZW1vdmVcIl0odGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnNjb3BlTG9hZGluZyksdGhpc30sdGFnTG9hZGluZyh0LGUpe3JldHVybiB0JiZ0LmNsYXNzTGlzdFtlP1wiYWRkXCI6XCJyZW1vdmVcIl0odGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0xvYWRpbmcpLHRoaXN9LHRvZ2dsZUNsYXNzKHQsZSl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJnRoaXMuRE9NLnNjb3BlLmNsYXNzTGlzdC50b2dnbGUodCxlKX0sdG9nZ2xlRm9jdXNDbGFzcyh0KXt0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5mb2N1cywhIXQpfSx0cmlnZ2VyQ2hhbmdlRXZlbnQ6ZnVuY3Rpb24oKXtpZighdGhpcy5zZXR0aW5ncy5taXhNb2RlLmludGVncmF0ZWQpe3ZhciB0PXRoaXMuRE9NLm9yaWdpbmFsSW5wdXQsZT10aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQhPT10LnZhbHVlLGk9bmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KTtlJiYodGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkPXQudmFsdWUsaS5zaW11bGF0ZWQ9ITAsdC5fdmFsdWVUcmFja2VyJiZ0Ll92YWx1ZVRyYWNrZXIuc2V0VmFsdWUoTWF0aC5yYW5kb20oKSksdC5kaXNwYXRjaEV2ZW50KGkpLHRoaXMudHJpZ2dlcihcImNoYW5nZVwiLHRoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZCksdC52YWx1ZT10aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQpfX0sZXZlbnRzOlQsZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCl7fSxwbGFjZUNhcmV0QWZ0ZXJOb2RlKHQpe2lmKHQmJnQucGFyZW50Tm9kZSl7dmFyIGU9dC5uZXh0U2libGluZyxpPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSxzPWkuZ2V0UmFuZ2VBdCgwKTtpLnJhbmdlQ291bnQmJihzLnNldFN0YXJ0QmVmb3JlKGV8fHQpLHMuc2V0RW5kQmVmb3JlKGV8fHQpLGkucmVtb3ZlQWxsUmFuZ2VzKCksaS5hZGRSYW5nZShzKSl9fSxpbnNlcnRBZnRlclRhZyh0LGUpe2lmKGU9ZXx8dGhpcy5zZXR0aW5ncy5taXhNb2RlLmluc2VydEFmdGVyVGFnLHQmJnQucGFyZW50Tm9kZSYmZSlyZXR1cm4gZT1cInN0cmluZ1wiPT10eXBlb2YgZT9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKTplLHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0Lm5leHRTaWJsaW5nKSxlfSxlZGl0VGFnKHQsZSl7dD10fHx0aGlzLmdldExhc3RUYWcoKSxlPWV8fHt9LHRoaXMuZHJvcGRvd24uaGlkZSgpO3ZhciBpPXRoaXMuc2V0dGluZ3M7ZnVuY3Rpb24gcygpe3JldHVybiB0LnF1ZXJ5U2VsZWN0b3IoaS5jbGFzc05hbWVzLnRhZ1RleHRTZWxlY3Rvcil9dmFyIGE9cygpLG49dGhpcy5nZXROb2RlSW5kZXgodCksbz10aGlzLnRhZ0RhdGEodCkscj10aGlzLmV2ZW50cy5jYWxsYmFja3MsbD10aGlzLGg9ITA7aWYoYSl7aWYoIShvIGluc3RhbmNlb2YgT2JqZWN0JiZcImVkaXRhYmxlXCJpbiBvKXx8by5lZGl0YWJsZSlyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwhMCksdC5jbGFzc0xpc3QuYWRkKGkuY2xhc3NOYW1lcy50YWdFZGl0aW5nKSx0aGlzLnRhZ0RhdGEodCx7X19vcmlnaW5hbERhdGE6ZCh7fSxvKSxfX29yaWdpbmFsSFRNTDp0LmlubmVySFRNTH0pLGEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsci5vbkVkaXRUYWdGb2N1cy5iaW5kKHRoaXMsdCkpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCgoKT0+ci5vbkVkaXRUYWdCbHVyLmNhbGwobCxzKCkpKSl9KSksYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyLm9uRWRpdFRhZ0lucHV0LmJpbmQodGhpcyxhKSksYS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlPT5yLm9uRWRpdFRhZ2tleWRvd24uY2FsbCh0aGlzLGUsdCkpKSxhLmZvY3VzKCksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoITEsYSksZS5za2lwVmFsaWRhdGlvbnx8KGg9dGhpcy5lZGl0VGFnVG9nZ2xlVmFsaWRpdHkodCkpLGEub3JpZ2luYWxJc1ZhbGlkPWgsdGhpcy50cmlnZ2VyKFwiZWRpdDpzdGFydFwiLHt0YWc6dCxpbmRleDpuLGRhdGE6byxpc1ZhbGlkOmh9KSx0aGlzfWVsc2UgY29uc29sZS53YXJuKFwiQ2Fubm90IGZpbmQgZWxlbWVudCBpbiBUYWcgdGVtcGxhdGU6IC5cIixpLmNsYXNzTmFtZXMudGFnVGV4dFNlbGVjdG9yKX0sZWRpdFRhZ1RvZ2dsZVZhbGlkaXR5KHQsZSl7dmFyIGk7aWYoZT1lfHx0aGlzLnRhZ0RhdGEodCkpcmV0dXJuKGk9IShcIl9faXNWYWxpZFwiaW4gZSl8fCEwPT09ZS5fX2lzVmFsaWQpfHx0aGlzLnJlbW92ZVRhZ3NGcm9tVmFsdWUodCksdGhpcy51cGRhdGUoKSx0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQsIWkpLGUuX19pc1ZhbGlkO2NvbnNvbGUud2FybihcInRhZyBoYXMgbm8gZGF0YTogXCIsdCxlKX0sb25FZGl0VGFnRG9uZSh0LGUpe2U9ZXx8e307dmFyIGk9e3RhZzp0PXR8fHRoaXMuc3RhdGUuZWRpdGluZy5zY29wZSxpbmRleDp0aGlzLmdldE5vZGVJbmRleCh0KSxwcmV2aW91c0RhdGE6dGhpcy50YWdEYXRhKHQpLGRhdGE6ZX07dGhpcy50cmlnZ2VyKFwiZWRpdDpiZWZvcmVVcGRhdGVcIixpLHtjbG9uZURhdGE6ITF9KSx0aGlzLnN0YXRlLmVkaXRpbmc9ITEsZGVsZXRlIGUuX19vcmlnaW5hbERhdGEsZGVsZXRlIGUuX19vcmlnaW5hbEhUTUwsdCYmZVt0aGlzLnNldHRpbmdzLnRhZ1RleHRQcm9wXT8odD10aGlzLnJlcGxhY2VUYWcodCxlKSx0aGlzLmVkaXRUYWdUb2dnbGVWYWxpZGl0eSh0LGUpLHRoaXMuc2V0dGluZ3MuYTExeS5mb2N1c2FibGVUYWdzJiZ0LmZvY3VzKCkpOnQmJnRoaXMucmVtb3ZlVGFncyh0KSx0aGlzLnRyaWdnZXIoXCJlZGl0OnVwZGF0ZWRcIixpKSx0aGlzLmRyb3Bkb3duLmhpZGUoKSx0aGlzLnNldHRpbmdzLmtlZXBJbnZhbGlkVGFncyYmdGhpcy5yZUNoZWNrSW52YWxpZFRhZ3MoKX0scmVwbGFjZVRhZyh0LGUpe2UmJmUudmFsdWV8fChlPXQuX190YWdpZnlUYWdEYXRhKSxlLl9faXNWYWxpZCYmMSE9ZS5fX2lzVmFsaWQmJmQoZSx0aGlzLmdldEludmFsaWRUYWdBdHRycyhlLGUuX19pc1ZhbGlkKSk7dmFyIGk9dGhpcy5jcmVhdGVUYWdFbGVtKGUpO3JldHVybiB0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGksdCksdGhpcy51cGRhdGVWYWx1ZUJ5RE9NVGFncygpLGl9LHVwZGF0ZVZhbHVlQnlET01UYWdzKCl7dGhpcy52YWx1ZS5sZW5ndGg9MCxbXS5mb3JFYWNoLmNhbGwodGhpcy5nZXRUYWdFbG1zKCksKHQ9Pnt0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZC5zcGxpdChcIiBcIilbMF0pfHx0aGlzLnZhbHVlLnB1c2godGhpcy50YWdEYXRhKHQpKX0pKSx0aGlzLnVwZGF0ZSgpfSxzZXRSYW5nZUF0U3RhcnRFbmQodCxlKXt0PVwibnVtYmVyXCI9PXR5cGVvZiB0P3Q6ISF0LGU9KGU9ZXx8dGhpcy5ET00uaW5wdXQpLmxhc3RDaGlsZHx8ZTt2YXIgaT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTt0cnl7aS5yYW5nZUNvdW50Pj0xJiZbXCJTdGFydFwiLFwiRW5kXCJdLmZvckVhY2goKHM9PmkuZ2V0UmFuZ2VBdCgwKVtcInNldFwiK3NdKGUsdHx8ZS5sZW5ndGgpKSl9Y2F0Y2godCl7Y29uc29sZS53YXJuKFwiVGFnaWZ5OiBcIix0KX19LGluamVjdEF0Q2FyZXQodCxlKXtpZihlPWV8fHRoaXMuc3RhdGUuc2VsZWN0aW9uLnJhbmdlKXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSksZS5kZWxldGVDb250ZW50cygpLGUuaW5zZXJ0Tm9kZSh0KSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCghMSx0KSx0aGlzLnVwZGF0ZVZhbHVlQnlET01UYWdzKCksdGhpcy51cGRhdGUoKSx0aGlzfSxpbnB1dDp7c2V0KHQ9XCJcIixlPSEwKXt2YXIgaT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLmNsb3NlT25TZWxlY3Q7dGhpcy5zdGF0ZS5pbnB1dFRleHQ9dCxlJiYodGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPXIoXCJcIit0KSksIXQmJmkmJnRoaXMuZHJvcGRvd24uaGlkZS5iaW5kKHRoaXMpLHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzKSx0aGlzLmlucHV0LnZhbGlkYXRlLmNhbGwodGhpcyl9LHZhbGlkYXRlKCl7dmFyIHQ9IXRoaXMuc3RhdGUuaW5wdXRUZXh0fHwhMD09PXRoaXMudmFsaWRhdGVUYWcoe3ZhbHVlOnRoaXMuc3RhdGUuaW5wdXRUZXh0fSk7cmV0dXJuIHRoaXMuRE9NLmlucHV0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmlucHV0SW52YWxpZCwhdCksdH0sbm9ybWFsaXplKHQpe3ZhciBlPXR8fHRoaXMuRE9NLmlucHV0LGk9W107ZS5jaGlsZE5vZGVzLmZvckVhY2goKHQ9PjM9PXQubm9kZVR5cGUmJmkucHVzaCh0Lm5vZGVWYWx1ZSkpKSxpPWkuam9pbihcIlxcblwiKTt0cnl7aT1pLnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVycy5zb3VyY2UuY2hhckF0KDApKX1jYXRjaCh0KXt9cmV0dXJuIGk9aS5yZXBsYWNlKC9cXHMvZyxcIiBcIiksdGhpcy5zZXR0aW5ncy50cmltJiYoaT1pLnJlcGxhY2UoL15cXHMrLyxcIlwiKSksaX0sYXV0b2NvbXBsZXRlOntzdWdnZXN0KHQpe2lmKHRoaXMuc2V0dGluZ3MuYXV0b0NvbXBsZXRlLmVuYWJsZWQpe1wic3RyaW5nXCI9PXR5cGVvZih0PXR8fHt9KSYmKHQ9e3ZhbHVlOnR9KTt2YXIgZT10LnZhbHVlP1wiXCIrdC52YWx1ZTpcIlwiLGk9ZS5zdWJzdHIoMCx0aGlzLnN0YXRlLmlucHV0VGV4dC5sZW5ndGgpLnRvTG93ZXJDYXNlKCkscz1lLnN1YnN0cmluZyh0aGlzLnN0YXRlLmlucHV0VGV4dC5sZW5ndGgpO2UmJnRoaXMuc3RhdGUuaW5wdXRUZXh0JiZpPT10aGlzLnN0YXRlLmlucHV0VGV4dC50b0xvd2VyQ2FzZSgpPyh0aGlzLkRPTS5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN1Z2dlc3RcIixzKSx0aGlzLnN0YXRlLmlucHV0U3VnZ2VzdGlvbj10KToodGhpcy5ET00uaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zdWdnZXN0XCIpLGRlbGV0ZSB0aGlzLnN0YXRlLmlucHV0U3VnZ2VzdGlvbil9fSxzZXQodCl7dmFyIGU9dGhpcy5ET00uaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdWdnZXN0XCIpLGk9dHx8KGU/dGhpcy5zdGF0ZS5pbnB1dFRleHQrZTpudWxsKTtyZXR1cm4hIWkmJihcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5yZXBsYWNlVGV4dFdpdGhOb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuc3RhdGUudGFnLnByZWZpeCtpKSk6KHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyxpKSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCgpKSx0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyksdGhpcy5kcm9wZG93bi5oaWRlKCksITApfX19LGdldFRhZ0lkeCh0KXtyZXR1cm4gdGhpcy52YWx1ZS5maW5kSW5kZXgoKGU9PmUuX190YWdJZD09KHR8fHt9KS5fX3RhZ0lkKSl9LGdldE5vZGVJbmRleCh0KXt2YXIgZT0wO2lmKHQpZm9yKDt0PXQucHJldmlvdXNFbGVtZW50U2libGluZzspZSsrO3JldHVybiBlfSxnZXRUYWdFbG1zKC4uLnQpe3ZhciBlPVwiLlwiK1suLi50aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnLnNwbGl0KFwiIFwiKSwuLi50XS5qb2luKFwiLlwiKTtyZXR1cm5bXS5zbGljZS5jYWxsKHRoaXMuRE9NLnNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpfSxnZXRMYXN0VGFnKCl7dmFyIHQ9dGhpcy5ET00uc2NvcGUucXVlcnlTZWxlY3RvckFsbChgJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnU2VsZWN0b3J9Om5vdCguJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnSGlkZX0pOm5vdChbcmVhZG9ubHldKWApO3JldHVybiB0W3QubGVuZ3RoLTFdfSx0YWdEYXRhOih0LGUsaSk9PnQ/KGUmJih0Ll9fdGFnaWZ5VGFnRGF0YT1pP2U6ZCh7fSx0Ll9fdGFnaWZ5VGFnRGF0YXx8e30sZSkpLHQuX190YWdpZnlUYWdEYXRhKTooY29uc29sZS53YXJuKFwidGFnIGVsbWVudCBkb2Vzbid0IGV4aXN0XCIsdCxlKSxlKSxpc1RhZ0R1cGxpY2F0ZSh0LGUpe3ZhciBpPXRoaXMuc2V0dGluZ3M7cmV0dXJuXCJzZWxlY3RcIiE9aS5tb2RlJiZ0aGlzLnZhbHVlLnJlZHVjZSgoKGEsbik9PnModGhpcy50cmltKFwiXCIrdCksbi52YWx1ZSxlfHxpLmRyb3Bkb3duLmNhc2VTZW5zaXRpdmUpP2ErMTphKSwwKX0sZ2V0VGFnSW5kZXhCeVZhbHVlKHQpe3ZhciBlPVtdO3JldHVybiB0aGlzLmdldFRhZ0VsbXMoKS5mb3JFYWNoKCgoaSxhKT0+e3ModGhpcy50cmltKGkudGV4dENvbnRlbnQpLHQsdGhpcy5zZXR0aW5ncy5kcm9wZG93bi5jYXNlU2Vuc2l0aXZlKSYmZS5wdXNoKGEpfSkpLGV9LGdldFRhZ0VsbUJ5VmFsdWUodCl7dmFyIGU9dGhpcy5nZXRUYWdJbmRleEJ5VmFsdWUodClbMF07cmV0dXJuIHRoaXMuZ2V0VGFnRWxtcygpW2VdfSxmbGFzaFRhZyh0KXt0JiYodC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdGbGFzaCksc2V0VGltZW91dCgoKCk9Pnt0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0ZsYXNoKX0pLDEwMCkpfSxpc1RhZ0JsYWNrbGlzdGVkKHQpe3JldHVybiB0PXRoaXMudHJpbSh0LnRvTG93ZXJDYXNlKCkpLHRoaXMuc2V0dGluZ3MuYmxhY2tsaXN0LmZpbHRlcigoZT0+KFwiXCIrZSkudG9Mb3dlckNhc2UoKT09dCkpLmxlbmd0aH0saXNUYWdXaGl0ZWxpc3RlZCh0KXtyZXR1cm4hIXRoaXMuZ2V0V2hpdGVsaXN0SXRlbSh0KX0sZ2V0V2hpdGVsaXN0SXRlbSh0LGUsaSl7ZT1lfHxcInZhbHVlXCI7dmFyIGEsbj10aGlzLnNldHRpbmdzO3JldHVybihpPWl8fG4ud2hpdGVsaXN0KS5zb21lKChpPT57dmFyIG89XCJzdHJpbmdcIj09dHlwZW9mIGk/aTppW2VdfHxpLnZhbHVlO2lmKHMobyx0LG4uZHJvcGRvd24uY2FzZVNlbnNpdGl2ZSxuLnRyaW0pKXJldHVybiBhPVwic3RyaW5nXCI9PXR5cGVvZiBpP3t2YWx1ZTppfTppLCEwfSkpLGF8fFwidmFsdWVcIiE9ZXx8XCJ2YWx1ZVwiPT1uLnRhZ1RleHRQcm9wfHwoYT10aGlzLmdldFdoaXRlbGlzdEl0ZW0odCxuLnRhZ1RleHRQcm9wLGkpKSxhfSx2YWxpZGF0ZVRhZyh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9XCJ2YWx1ZVwiaW4gdD9cInZhbHVlXCI6ZS50YWdUZXh0UHJvcCxzPXRoaXMudHJpbSh0W2ldK1wiXCIpO3JldHVybih0W2ldK1wiXCIpLnRyaW0oKT9lLnBhdHRlcm4mJmUucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCYmIWUucGF0dGVybi50ZXN0KHMpP3RoaXMuVEVYVFMucGF0dGVybjohZS5kdXBsaWNhdGVzJiZ0aGlzLmlzVGFnRHVwbGljYXRlKHMsdGhpcy5zdGF0ZS5lZGl0aW5nKT90aGlzLlRFWFRTLmR1cGxpY2F0ZTp0aGlzLmlzVGFnQmxhY2tsaXN0ZWQocyl8fGUuZW5mb3JjZVdoaXRlbGlzdCYmIXRoaXMuaXNUYWdXaGl0ZWxpc3RlZChzKT90aGlzLlRFWFRTLm5vdEFsbG93ZWQ6IWUudmFsaWRhdGV8fGUudmFsaWRhdGUodCk6dGhpcy5URVhUUy5lbXB0eX0sZ2V0SW52YWxpZFRhZ0F0dHJzKHQsZSl7cmV0dXJue1wiYXJpYS1pbnZhbGlkXCI6ITAsY2xhc3M6YCR7dC5jbGFzc3x8XCJcIn0gJHt0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZH1gLnRyaW0oKSx0aXRsZTplfX0saGFzTWF4VGFncygpe3JldHVybiB0aGlzLnZhbHVlLmxlbmd0aD49dGhpcy5zZXR0aW5ncy5tYXhUYWdzJiZ0aGlzLlRFWFRTLmV4Y2VlZH0sc2V0UmVhZG9ubHkodCxlKXt2YXIgaT10aGlzLnNldHRpbmdzO2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLGlbZXx8XCJyZWFkb25seVwiXT10LHRoaXMuRE9NLnNjb3BlWyh0P1wic2V0XCI6XCJyZW1vdmVcIikrXCJBdHRyaWJ1dGVcIl0oZXx8XCJyZWFkb25seVwiLCEwKSxcIm1peFwiPT1pLm1vZGUmJih0aGlzLkRPTS5pbnB1dC5jb250ZW50RWRpdGFibGU9IXQpfSxzZXREaXNhYmxlZCh0KXt0aGlzLnNldFJlYWRvbmx5KHQsXCJkaXNhYmxlZFwiKX0sbm9ybWFsaXplVGFncyh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9ZS53aGl0ZWxpc3Qscz1lLmRlbGltaXRlcnMsYT1lLm1vZGUsbj1lLnRhZ1RleHRQcm9wO2UuZW5mb3JjZVdoaXRlbGlzdDt2YXIgbz1bXSxyPSEhaSYmaVswXWluc3RhbmNlb2YgT2JqZWN0LGw9dCBpbnN0YW5jZW9mIEFycmF5LGQ9dD0+KHQrXCJcIikuc3BsaXQocykuZmlsdGVyKCh0PT50KSkubWFwKCh0PT4oe1tuXTp0aGlzLnRyaW0odCksdmFsdWU6dGhpcy50cmltKHQpfSkpKTtpZihcIm51bWJlclwiPT10eXBlb2YgdCYmKHQ9dC50b1N0cmluZygpKSxcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYoIXQudHJpbSgpKXJldHVybltdO3Q9ZCh0KX1lbHNlIGwmJih0PVtdLmNvbmNhdCguLi50Lm1hcCgodD0+dC52YWx1ZT90OmQodCkpKSkpO3JldHVybiByJiYodC5mb3JFYWNoKCh0PT57dmFyIGU9by5tYXAoKHQ9PnQudmFsdWUpKSxpPXRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zLmNhbGwodGhpcyx0W25dLHtleGFjdDohMH0pO3RoaXMuc2V0dGluZ3MuZHVwbGljYXRlc3x8KGk9aS5maWx0ZXIoKHQ9PiFlLmluY2x1ZGVzKHQudmFsdWUpKSkpO3ZhciBzPWkubGVuZ3RoPjE/dGhpcy5nZXRXaGl0ZWxpc3RJdGVtKHRbbl0sbixpKTppWzBdO3MmJnMgaW5zdGFuY2VvZiBPYmplY3Q/by5wdXNoKHMpOlwibWl4XCIhPWEmJihudWxsPT10LnZhbHVlJiYodC52YWx1ZT10W25dKSxvLnB1c2godCkpfSkpLHQ9byksdH0scGFyc2VNaXhUYWdzKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT1lLm1peFRhZ3NJbnRlcnBvbGF0b3Iscz1lLmR1cGxpY2F0ZXMsYT1lLnRyYW5zZm9ybVRhZyxuPWUuZW5mb3JjZVdoaXRlbGlzdCxvPWUubWF4VGFncyxyPWUudGFnVGV4dFByb3AsbD1bXTtyZXR1cm4gdD10LnNwbGl0KGlbMF0pLm1hcCgoKHQsZSk9Pnt2YXIgZCxoLGcscD10LnNwbGl0KGlbMV0pLGM9cFswXSx1PWwubGVuZ3RoPT1vO3RyeXtpZihjPT0rYyl0aHJvdyBFcnJvcjtoPUpTT04ucGFyc2UoYyl9Y2F0Y2godCl7aD10aGlzLm5vcm1hbGl6ZVRhZ3MoYylbMF18fHt2YWx1ZTpjfX1pZih1fHwhKHAubGVuZ3RoPjEpfHxuJiYhdGhpcy5pc1RhZ1doaXRlbGlzdGVkKGgudmFsdWUpfHwhcyYmdGhpcy5pc1RhZ0R1cGxpY2F0ZShoLnZhbHVlKSl7aWYodClyZXR1cm4gZT9pWzBdK3Q6dH1lbHNlIGEuY2FsbCh0aGlzLGgpLGhbZD1oW3JdP3I6XCJ2YWx1ZVwiXT10aGlzLnRyaW0oaFtkXSksZz10aGlzLmNyZWF0ZVRhZ0VsZW0oaCksbC5wdXNoKGgpLGcuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnTm9BbmltYXRpb24pLHBbMF09Zy5vdXRlckhUTUwsdGhpcy52YWx1ZS5wdXNoKGgpO3JldHVybiBwLmpvaW4oXCJcIil9KSkuam9pbihcIlwiKSx0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9dCx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5ET00uaW5wdXQubm9ybWFsaXplKCksdGhpcy5nZXRUYWdFbG1zKCkuZm9yRWFjaCgoKHQsZSk9PnRoaXMudGFnRGF0YSh0LGxbZV0pKSksdGhpcy51cGRhdGUoe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pLHR9LHJlcGxhY2VUZXh0V2l0aE5vZGUodCxlKXtpZih0aGlzLnN0YXRlLnRhZ3x8ZSl7ZT1lfHx0aGlzLnN0YXRlLnRhZy5wcmVmaXgrdGhpcy5zdGF0ZS50YWcudmFsdWU7dmFyIGkscyxhPXdpbmRvdy5nZXRTZWxlY3Rpb24oKSxuPWEuYW5jaG9yTm9kZSxvPXRoaXMuc3RhdGUudGFnLmRlbGltaXRlcnM/dGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycy5sZW5ndGg6MDtyZXR1cm4gbi5zcGxpdFRleHQoYS5hbmNob3JPZmZzZXQtbyksaT1uLm5vZGVWYWx1ZS5sYXN0SW5kZXhPZihlKSxzPW4uc3BsaXRUZXh0KGkpLHQmJm4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxzKSwhMH19LHNlbGVjdFRhZyh0LGUpe3ZhciBpPXRoaXMuc2V0dGluZ3M7aWYoIWkuZW5mb3JjZVdoaXRlbGlzdHx8dGhpcy5pc1RhZ1doaXRlbGlzdGVkKGUudmFsdWUpKXt0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMsZVtpLnRhZ1RleHRQcm9wfHxcInZhbHVlXCJdLCEwKSx0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uJiZzZXRUaW1lb3V0KHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kLmJpbmQodGhpcykpO3ZhciBzPXRoaXMuZ2V0TGFzdFRhZygpO3JldHVybiBzP3RoaXMucmVwbGFjZVRhZyhzLGUpOnRoaXMuYXBwZW5kVGFnKHQpLGkuZW5mb3JjZVdoaXRlbGlzdCYmdGhpcy5ET00uaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpLHRoaXMudmFsdWVbMF09ZSx0aGlzLnRyaWdnZXIoXCJhZGRcIix7dGFnOnQsZGF0YTplfSksdGhpcy51cGRhdGUoKSxbdF19fSxhZGRFbXB0eVRhZyh0KXt2YXIgZT1kKHt2YWx1ZTpcIlwifSx0fHx7fSksaT10aGlzLmNyZWF0ZVRhZ0VsZW0oZSk7dGhpcy50YWdEYXRhKGksZSksdGhpcy5hcHBlbmRUYWcoaSksdGhpcy5lZGl0VGFnKGkse3NraXBWYWxpZGF0aW9uOiEwfSl9LGFkZFRhZ3ModCxlLGk9dGhpcy5zZXR0aW5ncy5za2lwSW52YWxpZCl7dmFyIHM9W10sYT10aGlzLnNldHRpbmdzLG49ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0JiYwIT10Lmxlbmd0aD8odD10aGlzLm5vcm1hbGl6ZVRhZ3ModCksXCJtaXhcIj09YS5tb2RlP3RoaXMuYWRkTWl4VGFncyh0KTooXCJzZWxlY3RcIj09YS5tb2RlJiYoZT0hMSksdGhpcy5ET00uaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksdC5mb3JFYWNoKCh0PT57dmFyIGUsbz17fSxyPU9iamVjdC5hc3NpZ24oe30sdCx7dmFsdWU6dC52YWx1ZStcIlwifSk7aWYoKHQ9T2JqZWN0LmFzc2lnbih7fSxyKSkuX19pc1ZhbGlkPXRoaXMuaGFzTWF4VGFncygpfHx0aGlzLnZhbGlkYXRlVGFnKHQpLGEudHJhbnNmb3JtVGFnLmNhbGwodGhpcyx0KSwhMCE9PXQuX19pc1ZhbGlkKXtpZihpKXJldHVybjtkKG8sdGhpcy5nZXRJbnZhbGlkVGFnQXR0cnModCx0Ll9faXNWYWxpZCkse19fcHJlSW52YWxpZERhdGE6cn0pLHQuX19pc1ZhbGlkPT10aGlzLlRFWFRTLmR1cGxpY2F0ZSYmdGhpcy5mbGFzaFRhZyh0aGlzLmdldFRhZ0VsbUJ5VmFsdWUodC52YWx1ZSkpfWlmKHQucmVhZG9ubHkmJihvW1wiYXJpYS1yZWFkb25seVwiXT0hMCksZT10aGlzLmNyZWF0ZVRhZ0VsZW0odCxvKSxzLnB1c2goZSksXCJzZWxlY3RcIj09YS5tb2RlKXJldHVybiB0aGlzLnNlbGVjdFRhZyhlLHQpO24uYXBwZW5kQ2hpbGQoZSksdC5fX2lzVmFsaWQmJiEwPT09dC5fX2lzVmFsaWQ/KHRoaXMudmFsdWUucHVzaCh0KSx0aGlzLnRyaWdnZXIoXCJhZGRcIix7dGFnOmUsaW5kZXg6dGhpcy52YWx1ZS5sZW5ndGgtMSxkYXRhOnR9KSk6KHRoaXMudHJpZ2dlcihcImludmFsaWRcIix7ZGF0YTp0LGluZGV4OnRoaXMudmFsdWUubGVuZ3RoLHRhZzplLG1lc3NhZ2U6dC5fX2lzVmFsaWR9KSxhLmtlZXBJbnZhbGlkVGFnc3x8c2V0VGltZW91dCgoKCk9PnRoaXMucmVtb3ZlVGFncyhlLCEwKSksMWUzKSksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpfSkpLHRoaXMuYXBwZW5kVGFnKG4pLHRoaXMudXBkYXRlKCksdC5sZW5ndGgmJmUmJnRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyksdGhpcy5kcm9wZG93bi5yZWZpbHRlcigpLHMpKTooXCJzZWxlY3RcIj09YS5tb2RlJiZ0aGlzLnJlbW92ZUFsbFRhZ3MoKSxzKX0sYWRkTWl4VGFncyh0KXtpZigodD10aGlzLm5vcm1hbGl6ZVRhZ3ModCkpWzBdLnByZWZpeHx8dGhpcy5zdGF0ZS50YWcpcmV0dXJuIHRoaXMucHJlZml4ZWRUZXh0VG9UYWcodFswXSk7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVt7dmFsdWU6dH1dKTt2YXIgZT0hIXRoaXMuc3RhdGUuc2VsZWN0aW9uLGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0LmZvckVhY2goKHQ9Pnt2YXIgZT10aGlzLmNyZWF0ZVRhZ0VsZW0odCk7aS5hcHBlbmRDaGlsZChlKSx0aGlzLmluc2VydEFmdGVyVGFnKGUpfSkpLGU/dGhpcy5pbmplY3RBdENhcmV0KGkpOih0aGlzLkRPTS5pbnB1dC5mb2N1cygpLChlPXRoaXMuc2V0U3RhdGVTZWxlY3Rpb24oKSkucmFuZ2Uuc2V0U3RhcnQodGhpcy5ET00uaW5wdXQsZS5yYW5nZS5lbmRPZmZzZXQpLGUucmFuZ2Uuc2V0RW5kKHRoaXMuRE9NLmlucHV0LGUucmFuZ2UuZW5kT2Zmc2V0KSx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZChpKSx0aGlzLnVwZGF0ZVZhbHVlQnlET01UYWdzKCksdGhpcy51cGRhdGUoKSksaX0scHJlZml4ZWRUZXh0VG9UYWcodCl7dmFyIGUsaT10aGlzLnNldHRpbmdzLHM9dGhpcy5zdGF0ZS50YWcuZGVsaW1pdGVycztpZihpLnRyYW5zZm9ybVRhZy5jYWxsKHRoaXMsdCksdC5wcmVmaXg9dC5wcmVmaXh8fHRoaXMuc3RhdGUudGFnP3RoaXMuc3RhdGUudGFnLnByZWZpeDooaS5wYXR0ZXJuLnNvdXJjZXx8aS5wYXR0ZXJuKVswXSxlPXRoaXMuY3JlYXRlVGFnRWxlbSh0KSx0aGlzLnJlcGxhY2VUZXh0V2l0aE5vZGUoZSl8fHRoaXMuRE9NLmlucHV0LmFwcGVuZENoaWxkKGUpLHNldFRpbWVvdXQoKCgpPT5lLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vQW5pbWF0aW9uKSksMzAwKSx0aGlzLnZhbHVlLnB1c2godCksdGhpcy51cGRhdGUoKSwhcyl7dmFyIGE9dGhpcy5pbnNlcnRBZnRlclRhZyhlKXx8ZTt0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUoYSl9cmV0dXJuIHRoaXMuc3RhdGUudGFnPW51bGwsdGhpcy50cmlnZ2VyKFwiYWRkXCIsZCh7fSx7dGFnOmV9LHtkYXRhOnR9KSksZX0sYXBwZW5kVGFnKHQpe3ZhciBlPXRoaXMuRE9NLGk9ZS5zY29wZS5sYXN0RWxlbWVudENoaWxkO2k9PT1lLmlucHV0P2Uuc2NvcGUuaW5zZXJ0QmVmb3JlKHQsaSk6ZS5zY29wZS5hcHBlbmRDaGlsZCh0KX0sY3JlYXRlVGFnRWxlbSh0LGUpe3QuX190YWdJZD0oWzFlN10rLTFlMystNGUzKy04ZTMrLTFlMTEpLnJlcGxhY2UoL1swMThdL2csKHQ9Pih0XmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdJjE1Pj50LzQpLnRvU3RyaW5nKDE2KSkpO3ZhciBzLGE9ZCh7fSx0LGkoe3ZhbHVlOnIodC52YWx1ZStcIlwiKX0sZSkpO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGUsaT1kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IodCxOb2RlRmlsdGVyLlNIT1dfVEVYVCxudWxsLCExKTtlPWkubmV4dE5vZGUoKTspZS50ZXh0Q29udGVudC50cmltKCl8fGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0ocz10aGlzLnBhcnNlVGVtcGxhdGUoXCJ0YWdcIixbYV0pKSx0aGlzLnRhZ0RhdGEocyx0KSxzfSxyZUNoZWNrSW52YWxpZFRhZ3MoKXt2YXIgdD10aGlzLnNldHRpbmdzO3RoaXMuZ2V0VGFnRWxtcyh0LmNsYXNzTmFtZXMudGFnTm90QWxsb3dlZCkuZm9yRWFjaCgoKHQsZSk9Pnt2YXIgaT10aGlzLnRhZ0RhdGEodCkscz10aGlzLmhhc01heFRhZ3MoKSxhPXRoaXMudmFsaWRhdGVUYWcoaSk7aWYoITA9PT1hJiYhcylyZXR1cm4gaT1pLl9fcHJlSW52YWxpZERhdGE/aS5fX3ByZUludmFsaWREYXRhOnt2YWx1ZTppLnZhbHVlfSx0aGlzLnJlcGxhY2VUYWcodCxpKTt0LnRpdGxlPXN8fGF9KSl9LHJlbW92ZVRhZ3ModCxlLGkpe3ZhciBzO3Q9dCYmdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P1t0XTp0IGluc3RhbmNlb2YgQXJyYXk/dDp0P1t0XTpbdGhpcy5nZXRMYXN0VGFnKCldLHM9dC5yZWR1Y2UoKCh0LGUpPT4oZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXRoaXMuZ2V0VGFnRWxtQnlWYWx1ZShlKSksZSYmdGhpcy50YWdEYXRhKGUpJiZ0LnB1c2goe25vZGU6ZSxpZHg6dGhpcy5nZXRUYWdJZHgodGhpcy50YWdEYXRhKGUpKSxkYXRhOnRoaXMudGFnRGF0YShlLHtfX3JlbW92ZWQ6ITB9KX0pLHQpKSxbXSksaT1cIm51bWJlclwiPT10eXBlb2YgaT9pOnRoaXMuQ1NTVmFycy50YWdIaWRlVHJhbnNpdGlvbixcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJihpPTAsdGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzKSksMT09cy5sZW5ndGgmJnNbMF0ubm9kZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQpJiYoZT0hMCkscy5sZW5ndGgmJnRoaXMuc2V0dGluZ3MuaG9va3MuYmVmb3JlUmVtb3ZlVGFnKHMse3RhZ2lmeTp0aGlzfSkudGhlbigoKCk9PntmdW5jdGlvbiB0KHQpe3Qubm9kZS5wYXJlbnROb2RlJiYodC5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5ub2RlKSxlP3RoaXMuc2V0dGluZ3Mua2VlcEludmFsaWRUYWdzJiZ0aGlzLnRyaWdnZXIoXCJyZW1vdmVcIix7dGFnOnQubm9kZSxpbmRleDp0LmlkeH0pOih0aGlzLnRyaWdnZXIoXCJyZW1vdmVcIix7dGFnOnQubm9kZSxpbmRleDp0LmlkeCxkYXRhOnQuZGF0YX0pLHRoaXMuZHJvcGRvd24ucmVmaWx0ZXIoKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKCksdGhpcy5ET00uaW5wdXQubm9ybWFsaXplKCksdGhpcy5zZXR0aW5ncy5rZWVwSW52YWxpZFRhZ3MmJnRoaXMucmVDaGVja0ludmFsaWRUYWdzKCkpKX1pJiZpPjEwJiYxPT1zLmxlbmd0aD9mdW5jdGlvbihlKXtlLm5vZGUuc3R5bGUud2lkdGg9cGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLm5vZGUpLndpZHRoKStcInB4XCIsZG9jdW1lbnQuYm9keS5jbGllbnRUb3AsZS5ub2RlLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0hpZGUpLHNldFRpbWVvdXQodC5iaW5kKHRoaXMpLGksZSl9LmNhbGwodGhpcyxzWzBdKTpzLmZvckVhY2godC5iaW5kKHRoaXMpKSxlfHwodGhpcy5yZW1vdmVUYWdzRnJvbVZhbHVlKHMubWFwKCh0PT50Lm5vZGUpKSksdGhpcy51cGRhdGUoKSxcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJnRoaXMuRE9NLmlucHV0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCEwKSl9KSkuY2F0Y2goKHQ9Pnt9KSl9LHJlbW92ZVRhZ3NGcm9tRE9NKCl7W10uc2xpY2UuY2FsbCh0aGlzLmdldFRhZ0VsbXMoKSkuZm9yRWFjaCgodD0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpKSl9LHJlbW92ZVRhZ3NGcm9tVmFsdWUodCl7KHQ9QXJyYXkuaXNBcnJheSh0KT90Olt0XSkuZm9yRWFjaCgodD0+e3ZhciBlPXRoaXMudGFnRGF0YSh0KSxpPXRoaXMuZ2V0VGFnSWR4KGUpO2k+LTEmJnRoaXMudmFsdWUuc3BsaWNlKGksMSl9KSl9LHJlbW92ZUFsbFRhZ3ModCl7dD10fHx7fSx0aGlzLnZhbHVlPVtdLFwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9XCJcIjp0aGlzLnJlbW92ZVRhZ3NGcm9tRE9NKCksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpLFwic2VsZWN0XCI9PXRoaXMuc2V0dGluZ3MubW9kZSYmdGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzKSx0aGlzLnVwZGF0ZSh0KX0scG9zdFVwZGF0ZSgpe3ZhciB0PXRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcyxlPVwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLnNldHRpbmdzLm1peE1vZGUuaW50ZWdyYXRlZD90aGlzLkRPTS5pbnB1dC50ZXh0Q29udGVudDp0aGlzLkRPTS5vcmlnaW5hbElucHV0LnZhbHVlOnRoaXMudmFsdWUubGVuZ3RoO3RoaXMudG9nZ2xlQ2xhc3ModC5oYXNNYXhUYWdzLHRoaXMudmFsdWUubGVuZ3RoPj10aGlzLnNldHRpbmdzLm1heFRhZ3MpLHRoaXMudG9nZ2xlQ2xhc3ModC5oYXNOb1RhZ3MsIXRoaXMudmFsdWUubGVuZ3RoKSx0aGlzLnRvZ2dsZUNsYXNzKHQuZW1wdHksIWUpfSx1cGRhdGUodCl7dmFyIGU9dGhpcy5ET00ub3JpZ2luYWxJbnB1dDt0aGlzLnNldHRpbmdzLm1peE1vZGUuaW50ZWdyYXRlZHx8KGUudmFsdWU9dGhpcy5nZXRJbnB1dFZhbHVlKCkpLHRoaXMucG9zdFVwZGF0ZSgpLCEodHx8e30pLndpdGhvdXRDaGFuZ2VFdmVudCYmdGhpcy5zdGF0ZS5sb2FkZWRPcmlnaW5hbFZhbHVlcyYmdGhpcy50cmlnZ2VyQ2hhbmdlRXZlbnQoKX0sZ2V0SW5wdXRWYWx1ZSgpe3ZhciB0PXRoaXMuZ2V0Q2xlYW5WYWx1ZSgpO3JldHVyblwibWl4XCI9PXRoaXMuc2V0dGluZ3MubW9kZT90aGlzLmdldE1peGVkVGFnc0FzU3RyaW5nKHQpOnQubGVuZ3RoP3RoaXMuc2V0dGluZ3Mub3JpZ2luYWxJbnB1dFZhbHVlRm9ybWF0P3RoaXMuc2V0dGluZ3Mub3JpZ2luYWxJbnB1dFZhbHVlRm9ybWF0KHQpOkpTT04uc3RyaW5naWZ5KHQpOlwiXCJ9LGdldENsZWFuVmFsdWUodCl7cmV0dXJuIGU9dHx8dGhpcy52YWx1ZSxpPXRoaXMuZGF0YVByb3BzLGUmJkFycmF5LmlzQXJyYXkoZSkmJmUubWFwKCh0PT5hKHQsaSkpKTt2YXIgZSxpfSxnZXRNaXhlZFRhZ3NBc1N0cmluZygpe3ZhciB0PVwiXCIsZT10aGlzLGk9dGhpcy5zZXR0aW5ncy5taXhUYWdzSW50ZXJwb2xhdG9yO3JldHVybiB0aGlzLkRPTS5pbnB1dC5jaGlsZE5vZGVzLmZvckVhY2goKHM9PntpZigxPT1zLm5vZGVUeXBlKXtjb25zdCBuPWUudGFnRGF0YShzKTtpZihzLmNsYXNzTGlzdC5jb250YWlucyhlLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnKSYmbil7aWYobi5fX3JlbW92ZWQpcmV0dXJuO3JldHVybiB2b2lkKHQrPWlbMF0rSlNPTi5zdHJpbmdpZnkoYShuLGUuZGF0YVByb3BzKSkraVsxXSl9XCJCUlwiIT1zLnRhZ05hbWV8fHMucGFyZW50Tm9kZSE9ZS5ET00uaW5wdXQmJjEhPXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aD9cIkRJVlwiIT1zLnRhZ05hbWUmJlwiUFwiIT1zLnRhZ05hbWV8fCh0Kz1cIlxcclxcblwiLCFzLmNoaWxkcmVuLmxlbmd0aCYmcy50ZXh0Q29udGVudCYmKHQrPXMudGV4dENvbnRlbnQpKTp0Kz1cIlxcclxcblwifWVsc2UgdCs9cy50ZXh0Q29udGVudH0pKSx0fX0sdy5wcm90b3R5cGUucmVtb3ZlVGFnPXcucHJvdG90eXBlLnJlbW92ZVRhZ3Msd30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/Lyk7XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMgezB8MXwyfDN8NHw1fDZ9IHRoZSBkYXkgb2Ygd2VlaywgMCByZXByZXNlbnRzIFN1bmRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0TW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggbW9udGggaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldE1vbnRoKG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICByZXR1cm4gbW9udGg7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHRpbWVzdGFtcFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgdGltZXN0YW1wIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDUuMTIzOlxuICogY29uc3QgcmVzdWx0ID0gZ2V0VGltZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1LCA1LCAxMjMpKVxuICogLy89PiAxMzMwNTE1OTA1MTIzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgcmV0dXJuIHRpbWVzdGFtcDtcbn0iLCJpbXBvcnQgZ2V0VGltZSBmcm9tIFwiLi4vZ2V0VGltZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0VW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgc2Vjb25kcyB0aW1lc3RhbXAgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB0aW1lc3RhbXBcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIHRpbWVzdGFtcCBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1IENFVDpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldFVuaXhUaW1lKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUpKVxuICogLy89PiAxMzMwNTEyMzA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gTWF0aC5mbG9vcihnZXRUaW1lKGRpcnR5RGF0ZSkgLyAxMDAwKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIHZhciByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxhbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocXVhcnRlcikgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cblxudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0RGF5IGZyb20gXCIuLi9nZXREYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIG5leHREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFdoZW4gaXMgdGhlIG5leHQgZGF5IG9mIHRoZSB3ZWVrP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogV2hlbiBpcyB0aGUgbmV4dCBkYXkgb2YgdGhlIHdlZWs/IDAtNiB0aGUgZGF5IG9mIHRoZSB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5LlxuICpcbiAqIEBwYXJhbSB7RGF0ZSB8IG51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RheX0gZGF5IC0gZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgZGF0ZSBpcyB0aGUgbmV4dCBkYXkgb2Ygd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoZW4gaXMgdGhlIG5leHQgTW9uZGF5IGFmdGVyIE1hciwgMjAsIDIwMjA/XG4gKiBjb25zdCByZXN1bHQgPSBuZXh0RGF5KG5ldyBEYXRlKDIwMjAsIDIsIDIwKSwgMSlcbiAqIC8vPT4gTW9uIE1hciAyMyAyMDIwIDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoZW4gaXMgdGhlIG5leHQgVHVlc2RheSBhZnRlciBNYXIsIDIxLCAyMDIwP1xuICogY29uc3QgcmVzdWx0ID0gbmV4dERheShuZXcgRGF0ZSgyMDIwLCAyLCAyMSksIDIpXG4gKiAvLz0+IFR1ZSBNYXIgMjQgMjAyMCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5leHREYXkoZGF0ZSwgZGF5KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGVsdGEgPSBkYXkgLSBnZXREYXkoZGF0ZSk7XG4gIGlmIChkZWx0YSA8PSAwKSBkZWx0YSArPSA3O1xuICByZXR1cm4gYWRkRGF5cyhkYXRlLCBkZWx0YSk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBuZXh0RGF5IGZyb20gXCIuLi9uZXh0RGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgbmV4dFN1bmRheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgV2hlbiBpcyB0aGUgbmV4dCBTdW5kYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGVuIGlzIHRoZSBuZXh0IFN1bmRheT9cbiAqXG4gKiBAcGFyYW0ge0RhdGUgfCBudW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBzdGFydCBjb3VudGluZyBmcm9tXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5leHQgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBTdW5kYXkgYWZ0ZXIgTWFyLCAyMiwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IG5leHRTdW5kYXkobmV3IERhdGUoMjAyMCwgMiwgMjIpKVxuICogLy89PiBTdW4gTWFyIDI5IDIwMjAgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXh0U3VuZGF5KGRhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBuZXh0RGF5KHRvRGF0ZShkYXRlKSwgMCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0hPVVIgPSAzNjAwMDAwO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMDtcbnZhciBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTID0gMjtcbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgcHJldmlvdXMgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbiB3YXMgcmVuYW1lZCB0byBgcGFyc2VJU09gLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIHBhcnNlKCcyMDE2LTAxLTAxJylcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgcGFyc2VJU08oJzIwMTYtMDEtMDEnKVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IHZhbGlkYXRlcyBzZXBhcmF0ZSBkYXRlIGFuZCB0aW1lIHZhbHVlcyBpbiBJU08tODYwMSBzdHJpbmdzXG4gKiAgIGFuZCByZXR1cm5zIGBJbnZhbGlkIERhdGVgIGlmIHRoZSBkYXRlIGlzIGludmFsaWQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIHBhcnNlSVNPKCcyMDE4LTEzLTMyJylcbiAqICAgLy89PiBJbnZhbGlkIERhdGVcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyBkb2Vzbid0IGZhbGwgYmFjayB0byBgbmV3IERhdGVgIGNvbnN0cnVjdG9yXG4gKiAgIGlmIGl0IGZhaWxzIHRvIHBhcnNlIGEgc3RyaW5nIGFyZ3VtZW50LiBJbnN0ZWFkLCBpdCByZXR1cm5zIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogdmFyIHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogdmFyIHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09IG51bGwgPyBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTIDogdG9JbnRlZ2VyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmIChpc05hTihkYXRlKSB8fCAhZGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpIHx8IHRpbWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBudWxsO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBudWxsXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gJiYgcGFyc2VJbnQoY2FwdHVyZXNbMV0pO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdICYmIHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBudWxsO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbnVsbDtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIE1JTExJU0VDT05EU19JTl9IT1VSICsgbWludXRlcyAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIE1JTExJU0VDT05EU19JTl9IT1VSICsgbWludXRlcyAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBUYWdpZnkgZnJvbSAnQHlhaXJlby90YWdpZnknO1xyXG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQsIGlzUGFzdCxcclxuICBpc1NhbWVEYXksIG5leHRTdW5kYXksIGdldE1vbnRoLFxyXG4gIGZvcm1hdFJlbGF0aXZlLCBwYXJzZUlTTywgc3ViRGF5cywgaXNUb2RheX0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQuanNcIjtcclxuaW1wb3J0IHtUYXNrfSBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCBwcmlvcml0eSBmcm9tIFwiLi9wcmlvcml0eS5qc1wiO1xyXG5pbXBvcnQgY29ubmVjdGlvbiBmcm9tIFwiLi9Ub2RvTGlzdFN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHtzaWRlYmFyLCBUb2RvTGlzdFNpZGViYXJ9IGZyb20gXCIuL1RvZG9MaXN0U2lkZWJhci5qc1wiO1xyXG5jb25zdCBjID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xhc3MgY29udGFpbmluZyBHVUkgZWxlbWVudHMgdGhhdCB3b3VsZCBiZSB1c2VkIGluc2lkZSBvZiBhIFRvLURvIExpc3QgQXBwLlxyXG4gKiBTdWNoIEdVSSBlbGVtZW50cyBoYXZlIHRoZWlyIGZ1bmN0aW9uYWxpdGllcyBpbmNvcnBvcmF0ZWQgaGVyZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUb2RvTGlzdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XHJcbiAgc3RhdGljIHAgPSBwcmlvcml0eTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYW4gYWRkIGJ1dHRvbiwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY3JlYXRlIHRhc2tzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRUYXNrQnV0dG9uKCl7XHJcbiAgICBjb25zdCBhZGRUYXNrID0gYy5idXR0b24oXCJcIik7XHJcbiAgICBhZGRUYXNrLmlkID0gXCJkaXNwbGF5LWFzay1mb3JtLWJ1dHRvblwiO1xyXG4gICAgYWRkVGFzay5hcHBlbmQoYy5mYUljb24oXCJmYXNcIiwgXCJmYS1wbHVzXCIpKTtcclxuICAgIGFkZFRhc2suYXBwZW5kKGMuc3BhbihcIkNsaWNrIGhlcmUgdG8gYWRkIHRhc2suLi5cIikpO1xyXG5cclxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWZvcm1cIik7XHJcbiAgICAgIGlmIChlZGl0Rm9ybSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5hcHBlbmQoVG9kb0xpc3RFbGVtZW50LmFkZFRhc2tGb3JtKCkpO1xyXG5cclxuICAgICAgbGV0IGNhdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNhdGVnb3JpZXNcIik7XHJcbiAgICAgIG5ldyBUYWdpZnkoY2F0SW5wdXQpO1xyXG5cclxuICAgICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhZGRUYXNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGVzIGZpZWxkcyBmb3IgdGhlIGZvcm0gYmFzZWQgb24gdGhlIHRhc2sgYXR0cmlidXRlcy5cclxuICAgKiBAcGFyYW0ge30gZm9ybSAtIFRoZSBmb3JtIHRvIGFkZCBmaWVsZHMgb24uXHJcbiAgICogQHJldHVybiBmb3JtID0gVGhlIGZvcm0gd2l0aCBmaWVsZHMgbm93IGFkZGVkIG9udG8gaXQuXHJcbiAgICovXHJcbiAgc3RhdGljIF9nZW5lcmF0ZVRhc2tGb3JtRmllbGRzKGZvcm0sIGV4aXN0aW5nVGFza0lkID0gbnVsbCkge1xyXG4gICAgbGV0IE9LQnV0dG9uSWQ7XHJcbiAgICBpZiAoZXhpc3RpbmdUYXNrSWQgIT0gbnVsbCkge1xyXG4gICAgICBPS0J1dHRvbklkID0gXCIjdXBkYXRlLXRhc2stc3VibWl0XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBPS0J1dHRvbklkID0gXCIjYWRkLXRhc2stc3VibWl0XCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBwID0gcHJpb3JpdHk7IC8vIGNhbGxpbmcgcHJpb3JpdHkgYnkgaXRzZWxmIHdhcyB1bmRlZmluZWQgZWFybGllci4gXHJcbiAgICAvLyBNYXliZSBzb21ldGhpbmcgdG8gZG8gd2l0aCBleHBvcnQgYmVoYXZpb3IgYW5kIGxleGljYWwgZW52aXJvbm1lbnQ/XHJcbiAgICAvLyBBZnRlciB1c2luZyBjb25uZWN0aW9uIGluIGluZGV4LCBpdCBzZWVtcyB0aGF0IGl0IGhhcyB0byBkbyB3aXRoIHRoZSBmYWN0XHJcbiAgICAvLyBpcyBpbiBhIGNsYXNzP1xyXG5cclxuICAgIGxldCB0aXRsZUZpZWxkID0gYy5mb3JtSW5wdXQoXCJUaXRsZVwiLCBcInRleHRcIiwgXCJ0YXNrLXRpdGxlXCIsIFwidGl0bGVcIik7XHJcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIGhlcmUgZm9yIHRpdGxlXHJcbiAgICB0aXRsZUZpZWxkWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlID09PSBcIlwiIHx8IGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoT0tCdXR0b25JZCkuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihPS0J1dHRvbklkKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5RmllbGQgPSBjLmRyb3Bkb3duKFwiUHJpb3JpdHlcIiwgXCJwcmlvcml0eVwiLCBcInRhc2stcHJpb3JpdHlcIiwgLi4uT2JqZWN0LmtleXMocCkpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uRmllbGQgPSBjLnRleHRBcmVhKFwiRGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiLCBcInRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICBsZXQgY2F0ZWdvcnlGaWVsZCA9IGMuZm9ybUlucHV0KFwiQ2F0ZWdvcnlcIiwgXCJ0ZXh0XCIsIFwidGFzay1jYXRlZ29yaWVzXCIsIFwiY2F0ZWdvcmllc1wiKTtcclxuICAgIGxldCBkdWVEYXRlRmllbGQgPSBjLmZvcm1JbnB1dChcIkR1ZSBEYXRlXCIsIFwiZGF0ZVwiLCBcInRhc2stZHVlRGF0ZVwiLCBcImR1ZURhdGVcIik7XHJcbiAgICBcclxuICAgIGxldCBhbGxGaWVsZHMgPSBbdGl0bGVGaWVsZCwgcHJpb3JpdHlGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCxcclxuICAgICAgICBkdWVEYXRlRmllbGQsIGNhdGVnb3J5RmllbGRdO1xyXG5cclxuICAgIGZvciAobGV0IGZpZWxkIG9mIGFsbEZpZWxkcykge1xyXG4gICAgICBsZXQgZGl2ID0gYy5kaXYoYGNvbnRhaW5lci0ke2ZpZWxkWzFdLmlkfWApO1xyXG4gICAgICBkaXYuYXBwZW5kKGZpZWxkWzBdLCBmaWVsZFsxXSk7XHJcbiAgICAgIC8vIGFkZCBsYWJlbCBhbmQgdGhlIGlucHV0IGVsZW1lbnQgb2YgZWFjaCBmaWVsZC5cclxuICAgICAgZm9ybS5hcHBlbmQoZGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhpc3RpbmdUYXNrSWQgIT09IG51bGwpIHtcclxuICAgICAgbGV0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtleGlzdGluZ1Rhc2tJZH1gKTtcclxuICAgICAgbGV0IHRhc2sgPSBjb25uZWN0aW9uLmdldEl0ZW1CeUlkKGV4aXN0aW5nVGFza0lkKTtcclxuICAgICAgdGl0bGVGaWVsZFsxXS52YWx1ZSA9IHRhc2sudGl0bGU7XHJcbiAgICAgIC8vcHJpb3JpdHlGaWVsZFsxXS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICAgIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwicHJpb3JpdHlcIl0gPiBvcHRpb24nKS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGlmIChlbGVtLnZhbHVlID09PSB0YXNrLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gaWYgKHR5cGVvZiB0YXNrLmNhdGVnb3JpZXMgPT09IFwic3RyaW5nXCIgJiYgdGFzay5jYXRlZ29yaWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAvLyAgIGNhdGVnb3J5RmllbGRbMV0udmFsdWUgPSBKU09OLnBhcnNlKHRhc2suY2F0ZWdvcmllcyk7ICBcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gICBjYXRlZ29yeUZpZWxkWzFdLnZhbHVlID0gdGFzay5jYXRlZ29yaWVzO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGNhdGVnb3J5RmllbGRbMV0udmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0YXNrLmNhdGVnb3JpZXMpO1xyXG4gICAgICBkZXNjcmlwdGlvbkZpZWxkWzFdLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgICAgZHVlRGF0ZUZpZWxkWzFdLnZhbHVlID0gdGFzay5kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfZ2VuZXJhdGVUYXNrRm9ybUJ1dHRvbnMoZm9ybSwgZXhpc3RpbmdUYXNrSWQgPSBudWxsKSB7XHJcbiAgICBsZXQgb2tCdXR0b247XHJcbiAgICBsZXQgY2FuY2VsQnV0dG9uO1xyXG4gICAgbGV0IGJ1dHRvblNlY3Rpb247XHJcblxyXG4gICAgYnV0dG9uU2VjdGlvbiA9IGMuZGl2KFwiZm9ybS1idXR0b25zXCIpO1xyXG5cclxuICAgIG9rQnV0dG9uID0gYy5idXR0b24oXCJBZGRcIiwgXCJmb3JtLWJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ1dHRvbiA9IGMuYnV0dG9uKFwiQ2xvc2VcIiwgXCJmb3JtLWJ1dHRvblwiKTtcclxuXHJcbiAgICBva0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgb2tCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XHJcbiAgICBva0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XHJcblxyXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG9MaXN0RWxlbWVudC5fY2xvc2VGb3JtKTtcclxuXHJcbiAgICBjYW5jZWxCdXR0b24uaWQgPSBcImFkZC10YXNrLWNhbmNlbFwiO1xyXG4gICAgaWYgKGV4aXN0aW5nVGFza0lkID09PSBudWxsKSB7XHJcbiAgICAgIG9rQnV0dG9uLmlkID0gXCJhZGQtdGFzay1zdWJtaXRcIjtcclxuICAgICAgXHJcbiAgICAgIG9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBUb2RvTGlzdEVsZW1lbnQuX2hhbmRsZUFkZFRhc2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2tCdXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgICBva0J1dHRvbi5pZCA9IFwidXBkYXRlLXRhc2stc3VibWl0XCI7XHJcbiAgICAgIG9rQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICBva0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBUb2RvTGlzdEVsZW1lbnQuX2hhbmRsZVVwZGF0ZVRhc2soZXhpc3RpbmdUYXNrSWQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uU2VjdGlvbi5hcHBlbmQob2tCdXR0b24sIGNhbmNlbEJ1dHRvbik7XHJcbiAgICBmb3JtLmFwcGVuZChidXR0b25TZWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfZGlzcGxheUVkaXRUYXNrRm9ybShlKSB7XHJcbiAgICBsZXQgdGFza1ZpZXcgPSBlLmN1cnJlbnRUYXJnZXQ7IFxyXG4gICAgd2hpbGUoIXRhc2tWaWV3LmlkLmluY2x1ZGVzKFwidGFzay1cIikpIHtcclxuICAgICAgdGFza1ZpZXcgPSB0YXNrVmlldy5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvcCB1cCBhbiBlZGl0IGZvcm0gdGhhdCBsb29rcyBsaWtlIHRoZSBhZGR0YXNrIGZvcm0uXHJcbiAgICBsZXQgZXhpc3RpbmdUYXNrSWQgPSArdGFza1ZpZXcuaWQuc3BsaXQoXCJ0YXNrLVwiKVsxXTtcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IFwiZWRpdC10YXNrLWZvcm1cIjtcclxuXHJcbiAgICAvLyBpZiBhZGQgZm9ybSBvcGVuIGNsb3NlIHRoYXQgZm9ybSB1cC5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1hc2stZm9ybS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICBsZXQgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZm9ybVwiKTtcclxuICAgIGlmIChhZGRGb3JtICE9IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDbG9zaW5nIGFkZCBmb3JtLi4uXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWZvcm1cIikucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBIYWQgdG8gaW1wbGVtZW50IHRoaXMgc2luY2UgdGhlIGFwcGVuZCBjYWxsXHJcbiAgICAvLyBkb2Vzbid0IHNlZW0gdG8gYmUgYWJsZSB0byByZW1vdmVcclxuICAgIC8vIGEgZHVwbGljYXRlIGZvcm0uLi4gKGVkaXQgZm9ybSBvcGVuIG9uIHR3byBwb3N0cylcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtLmlkfWApICE9PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm0uaWR9YCkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSA9IFRvZG9MaXN0RWxlbWVudC5fZ2VuZXJhdGVUYXNrRm9ybUZpZWxkcyhmb3JtLCBleGlzdGluZ1Rhc2tJZCk7XHJcbiAgICBmb3JtID0gVG9kb0xpc3RFbGVtZW50Ll9nZW5lcmF0ZVRhc2tGb3JtQnV0dG9ucyhmb3JtLCBleGlzdGluZ1Rhc2tJZCk7XHJcblxyXG4gICAgdGFza1ZpZXcuYXBwZW5kKGZvcm0pO1xyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8gYW5kIHRoZW4gZGlzYWJsZSB0aGUgdmlldyBvZiB0aGUgZWxlbWVudC5cclxuICAgIC8vIHRhc2tWaWV3LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWFjdGl2ZS10YXNrLW5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgbGV0IGNhdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWNhdGVnb3JpZXNcIik7XHJcbiAgICBuZXcgVGFnaWZ5KGNhdElucHV0KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBBIGdlbmVyaWMgYWRkIGZvcm0gZm9yIGEgVGFzay5cclxuICAgKiBAcmV0dXJucyBmb3JtIC0gZm9ybSBlbGVtZW50IHdpdGggVGFzayBhdHRyaWJ1dGVzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRUYXNrRm9ybSgpIHtcclxuICAgIC8vIEVudW1lcmF0ZSB0aHJvdWdoIHRoZSBwcm9wZXJ0aWVzIG9mIGEgVGFzayBvYmplY3QsIGFuZCB0aGVuIHVzZSB0aGF0XHJcbiAgICAvLyB0byBjcmVhdGUgaW5wdXRzIGJhc2VkIG9uIHRoZSB0eXBlLlxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBcImFkZC10YXNrLWZvcm1cIjtcclxuXHJcbiAgICBmb3JtID0gVG9kb0xpc3RFbGVtZW50Ll9nZW5lcmF0ZVRhc2tGb3JtRmllbGRzKGZvcm0pO1xyXG4gICAgZm9ybSA9IFRvZG9MaXN0RWxlbWVudC5fZ2VuZXJhdGVUYXNrRm9ybUJ1dHRvbnMoZm9ybSk7XHJcbiAgICBcclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9oYW5kbGVVcGRhdGVUYXNrKHRhc2tJZCkge1xyXG4gICAgbGV0IHRhc2sgPSBUb2RvTGlzdEVsZW1lbnQuX3BhcnNlRm9ybUZpZWxkcygpO1xyXG4gICAgdGFzay5pZCA9IHRhc2tJZDtcclxuXHJcbiAgICBjb25uZWN0aW9uLnVwZGF0ZSh0YXNrKTtcclxuICAgIFRvZG9MaXN0RWxlbWVudC5fdXBkYXRlVGFza09uVmlldyh0YXNrKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NhdGVnb3J5LWxpbmtzID4gKlwiKS5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzaWRlYmFyLnVwZGF0ZUNhdGVnb3J5U2lkZWJhckxpc3RpbmcoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfdXBkYXRlVGFza09uVmlldyh0YXNrKSB7XHJcbiAgICBsZXQgdGFza1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2suaWR9YCk7XHJcblxyXG4gICAgdGFza1ZpZXcucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXctdGl0bGVcIikudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgcHJpb3JpdHlTdGFycyA9IFwiXCI7XHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IFRvZG9MaXN0RWxlbWVudC5wW3Rhc2sucHJpb3JpdHldOyBpKyspIHtcclxuICAgIC8vICAgcHJpb3JpdHlTdGFycyArPSBcIuKYhVwiO1xyXG4gICAgLy8gfVxyXG4gICAgdGFza1ZpZXcucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXctcHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuICAgIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3LWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIC8vIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3LWNyZWF0ZS1kYXRlXCIpLnRleHRDb250ZW50ID0gZm9ybWF0KHRhc2suaWQsIFwiJ0FkZGVkJyBQUFwiKTtcclxuXHJcbiAgICBsZXQgZHVlRGF0ZTtcclxuICAgIGxldCBkdWVEYXRlTXNnO1xyXG4gICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICBkdWVEYXRlTXNnID0gXCJObyBEdWUgRGF0ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHR5cGVvZiB0YXNrLmR1ZURhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGFzay5kdWVEYXRlID0gcGFyc2VJU08odGFzay5kdWVEYXRlKTtcclxuICAgICAgfVxyXG4gICAgICBkdWVEYXRlTXNnID0gXCJEdWUgXCIgKyBmb3JtYXQodGFzay5kdWVEYXRlLCAnUCcpO1xyXG4gICAgICBpZiAoIWlzU2FtZURheSgodGFzay5kdWVEYXRlKSwgbmV3IERhdGUoKSkgJiYgaXNQYXN0KHRhc2suZHVlRGF0ZSkpIHtcclxuICAgICAgICB0YXNrVmlldy5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZVwiKTtcclxuICAgICAgICBkdWVEYXRlTXNnID0gXCIoT3ZlcmR1ZSkgXCIgKyBkdWVEYXRlTXNnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tWaWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZHVlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGFza1ZpZXcucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXctZHVlLWRhdGVcIikudGV4dENvbnRlbnQgPSBkdWVEYXRlTXNnO1xyXG5cclxuICAgIGxldCBjYXRlZ29yaWVzID0gdGFza1ZpZXcucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXctY2F0ZWdvcmllc1wiKTtcclxuICAgIGNhdGVnb3JpZXMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgaWYgKHRhc2suY2F0ZWdvcmllcy5sZW5ndGggIT09IDApe1xyXG4gICAgICB0YXNrLmNhdGVnb3JpZXMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBsZXQgc3BhbiA9IGMuc3BhbihlbGVtLnZhbHVlLCBcImNhdGVnb3J5LWxhYmVsXCIpO1xyXG4gICAgICAgIGNhdGVnb3JpZXMuYXBwZW5kKHNwYW4pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhdGVnb3JpZXMuYXBwZW5kKGMucGFyYWdyYXBoKFwiTm8gY2F0ZWdvcmllcyBzZXQuXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjLnRvYXN0KFwiVGFzayB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLCAzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVGFzayB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAvLyByZW1vdmUgdGhlIGZvcm0gYWZ0ZXIgd2UndmUgZmluaXNoZWQgdXNpbmcgaXQuXHJcbiAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1mb3JtXCIpLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9oYW5kbGVBZGRUYXNrKCkge1xyXG4gICAgbGV0IHRhc2sgPSBUb2RvTGlzdEVsZW1lbnQuX3BhcnNlRm9ybUZpZWxkcygpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stc3VibWl0XCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhZGQtdGFzay1mb3JtIGlucHV0W2lkXj10YXNrLV0sICNhZGQtdGFzay1mb3JtIHRleHRhcmVhXCIpXHJcbiAgICAgICAgLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIFRvZG9MaXN0RWxlbWVudC5hZGRUYXNrVG9WaWV3KHRhc2ssIFwiI3Rhc2tzLWFjdGl2ZVwiKTtcclxuICAgIFxyXG4gICAgVG9kb0xpc3RFbGVtZW50LmNvbm5lY3Rpb24uYWRkKHRhc2spO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2F0ZWdvcnktbGlua3MgPiAqXCIpLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIHNpZGViYXIudXBkYXRlQ2F0ZWdvcnlTaWRlYmFyTGlzdGluZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9wYXJzZUZvcm1GaWVsZHMoKSB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrKCk7XHJcbiAgICB0YXNrLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgdGFzay5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICB0YXNrLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlRGF0ZVwiKS52YWx1ZTtcclxuICAgIGlmICh0YXNrLmR1ZURhdGUgIT09IFwiXCIpIHtcclxuICAgICAgdGFzay5kdWVEYXRlID0gcGFyc2VJU08odGFzay5kdWVEYXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY2F0ZWdvcmllc1wiKS52YWx1ZTtcclxuICAgIGlmIChjYXRlZ29yaWVzICE9PSBcIlwiKSB7XHJcbiAgICAgIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGNhdGVnb3JpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3JpZXMgPSAoWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldKVxyXG4gICAgdGFzay5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgX2Nsb3NlRm9ybShlKSB7XHJcbiAgICBsZXQgZWxlbSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIHdoaWxlICghZWxlbS5pZC5pbmNsdWRlcyhcInRhc2stZm9ybVwiKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpZCA9IGVsZW0uaWQ7XHJcbiAgICBlbGVtLnJlbW92ZSgpO1xyXG4gICAgLy8gZGlzcGxheSB0aGUgYnV0dG9uIGFnYWluIGlmIHRoZSBmb3JtIGJlaW5nIGNsb3NlZCBpcyB0aGUgYWRkLXRhc2stZm9ybS5cclxuICAgIGlmIChpZCA9PT0gXCJhZGQtdGFzay1mb3JtXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWFzay1mb3JtLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE9cclxuICAgIC8vIGRpc3BsYXkgdGhlIHRhc2sgYWdhaW4gdG9vLlxyXG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tYWN0aXZlLXRhc2stZGlzYWJsZS1kaXNwbGF5XCIpXHJcbiAgICAgIC8vICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tYWN0aXZlLXRhc2stZGlzYWJsZS1kaXNwbGF5XCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0YXNrcyB0byB1bmRlcm5lYXRoIGEgZ2l2ZW4gcGFyZW50IGNvbnRhaW5lci5cclxuICAgKiBAcGFyYW0gdGFzayAtIFRoZSB0YXNrIG9iamVjdCB0byBnaXZlLlxyXG4gICAqIEBwYXJhbSBwYXJlbnRTZWxlY3RvciB7c3RyaW5nfSAtIFJ1bGUgdG8gc2VsZWN0IGEgY29udGFpbmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRUYXNrVG9WaWV3KHRhc2ssIHBhcmVudFNlbGVjdG9yKSB7XHJcbiAgICBcclxuICAgIGxldCB0YXNrVmlldyA9IGMuZGl2KFwidGFza1wiKTtcclxuXHJcbiAgICBsZXQgdGFza0luZm9ybWF0aW9uQXJlYSA9IGMuZGl2KFwidGFzay1pbmZvcm1hdGlvblwiKTtcclxuICAgIGxldCB0YXNrRHJhZ0FyZWEgPSBjLmRpdihcInRhc2stbW92ZVwiKTtcclxuICAgIGxldCB0YXNrQ29udHJvbEFyZWEgPSBjLmRpdihcInRhc2stY29udHJvbHNcIik7XHJcblxyXG4gICAgLy8gSW5mb3JtYXRpb24gU2VjdGlvbiBCZWdpblxyXG4gICAgdGFza1ZpZXcuaWQgPSBcInRhc2stXCIgKyB0YXNrLmlkO1xyXG4gICAgbGV0IGhlYWRlciA9IGMuaGVhZGluZyh0YXNrLnRpdGxlLCAyLCBcInRhc2stdmlldy10aXRsZVwiKTtcclxuICAgIGxldCBjcmVhdGVEYXRlID0gYy5wYXJhZ3JhcGgoZm9ybWF0KHRhc2suaWQsIFwiJ0FkZGVkJyBNTS9kZC95eXl5XCIpLCBcInRhc2stdmlldy1jcmVhdGUtZGF0ZVwiKTsgLy9jLnBhcmFncmFwaCgpO1xyXG5cclxuICAgIGxldCBkdWVEYXRlO1xyXG4gICAgbGV0IGR1ZURhdGVNc2c7XHJcbiAgICBpZiAodGFzay5kdWVEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgIGR1ZURhdGVNc2cgPSBcIk5vIER1ZSBEYXRlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHlwZW9mIHRhc2suZHVlRGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0YXNrLmR1ZURhdGUgPSBwYXJzZUlTTyh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGR1ZURhdGVNc2cgPSBcIkR1ZSBcIiArIGZvcm1hdCh0YXNrLmR1ZURhdGUsICdQJyk7XHJcbiAgICAgIGlmICghaXNTYW1lRGF5KCh0YXNrLmR1ZURhdGUpLCBuZXcgRGF0ZSgpKSAmJiBpc1Bhc3QodGFzay5kdWVEYXRlKSkge1xyXG4gICAgICAgIHRhc2tWaWV3LmNsYXNzTGlzdC5hZGQoXCJvdmVyZHVlXCIpO1xyXG4gICAgICAgIGR1ZURhdGVNc2cgPSBcIihPdmVyZHVlKSBcIiArIGR1ZURhdGVNc2c7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza1ZpZXcuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJkdWVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkdWVEYXRlID0gYy5wYXJhZ3JhcGgoZHVlRGF0ZU1zZywgXCJ0YXNrLXZpZXctZHVlLWRhdGVcIik7IC8vZm9ybWF0KHRhc2suZHVlRGF0ZSwgXCInRHVlJyBNTS9kZC95eXl5XCIpLCBcInRhc2stdmlldy1kdWUtZGF0ZVwiKTtcclxuXHJcbiAgICAvLyBsZXQgcHJpb3JpdHlTdGFycyA9IFwiXCI7XHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IFRvZG9MaXN0RWxlbWVudC5wW3Rhc2sucHJpb3JpdHldOyBpKyspIHtcclxuICAgICAgLy8gICBwcmlvcml0eVN0YXJzICs9IFwi4piFXCI7XHJcbiAgICAgIC8vIH1cclxuICAgIGxldCBwcmlvcml0eSA9IGMucGFyYWdyYXBoKFwiXCIsIFwidGFzay12aWV3LXByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGMucGFyYWdyYXBoKHRhc2suZGVzY3JpcHRpb24sIFwidGFzay12aWV3LWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBjLmRpdihcInRhc2stdmlldy1jYXRlZ29yaWVzXCIpO1xyXG4gICAgaWYgKHRhc2suY2F0ZWdvcmllcy5sZW5ndGggIT09IDApe1xyXG4gICAgICB0YXNrLmNhdGVnb3JpZXMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBsZXQgc3BhbiA9IGMuc3BhbihlbGVtLnZhbHVlLCBcImNhdGVnb3J5LWxhYmVsXCIpO1xyXG4gICAgICAgIGNhdGVnb3JpZXMuYXBwZW5kKHNwYW4pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhdGVnb3JpZXMuYXBwZW5kKGMucGFyYWdyYXBoKFwiTm8gY2F0ZWdvcmllcyBzZXQuXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rhc2tJbmZvcm1hdGlvbkFyZWEuYXBwZW5kKGhlYWRlciwgZHVlRGF0ZSwgY2F0ZWdvcmllcywgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBjcmVhdGVEYXRlKTtcclxuXHJcbiAgICBsZXQgZ2VuZXJhbEluZm8gPSBjLmRpdihcImdlbmVyYWwtaW5mb1wiKTtcclxuICAgIGxldCBleHBhbmRlZEluZm8gPSBjLmRpdihcImV4cGFuZGVkLWluZm9cIiwgXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGMuYnV0dG9uKFwiXCIsIFwiZXhwYW5kLXRhc2stYnV0dG9uXCIpO1xyXG4gICAgbGV0IGV4cGFuZEljb24gPSBjLmZhSWNvbihcImZhc1wiLCBcImZhLWNoZXZyb24tZG93blwiKTtcclxuXHJcblxyXG4gICAgZ2VuZXJhbEluZm8uYXBwZW5kKGhlYWRlciwgZHVlRGF0ZSk7XHJcbiAgICBleHBhbmRlZEluZm8uYXBwZW5kKGRlc2NyaXB0aW9uLCBjYXRlZ29yaWVzLCBwcmlvcml0eSwgY3JlYXRlRGF0ZSk7XHJcbiAgICBleHBhbmRCdXR0b24uYXBwZW5kKGV4cGFuZEljb24pO1xyXG4gICAgXHJcbiAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwb2ludC1kb3duXCIpO1xyXG4gICAgICBsZXQgdGFzayA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgd2hpbGUgKCF0YXNrLmlkLmluY2x1ZGVzKFwidGFzay1cIikpIHtcclxuICAgICAgICB0YXNrID0gdGFzay5wYXJlbnROb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIHRhc2sucXVlcnlTZWxlY3RvcihcIi5leHBhbmRlZC1pbmZvXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0YXNrSW5mb3JtYXRpb25BcmVhLmFwcGVuZChnZW5lcmFsSW5mbywgZXhwYW5kZWRJbmZvLCBleHBhbmRCdXR0b24pO1xyXG4gICAgLy8gSW5mb3JtYXRpb24gU2VjdGlvbiBFbmRcclxuXHJcbiAgICAvLyBDb250cm9scyBTZWN0aW9uIEJlZ2luXHJcblxyXG4gICAgbGV0IGZpbmlzaEJ1dHRvbiA9IGMuYnV0dG9uKFwiXCIsIFwidGFzay12aWV3LWZpbmlzaC1idXR0b25cIik7XHJcbiAgICBsZXQgZmluaXNoSWNvbiA9IGMuZmFJY29uKFwiZmFzXCIsIFwiZmEtY2hlY2stc3F1YXJlXCIpO1xyXG4gICAgZmluaXNoQnV0dG9uLmFwcGVuZChmaW5pc2hJY29uLCBcIkZpbmlzaFwiKTtcclxuICAgIFxyXG4gICAgbGV0IGVkaXRCdXR0b24gPSBjLmJ1dHRvbihcIlwiLCBcInRhc2stdmlldy1lZGl0LWJ1dHRvblwiKTtcclxuICAgIGxldCBlZGl0SWNvbiA9IGMuZmFJY29uKFwiZmFzXCIsIFwiZmEtZWRpdFwiKTtcclxuICAgIGVkaXRCdXR0b24uYXBwZW5kKGVkaXRJY29uLCBcIkVkaXRcIik7XHJcblxyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGMuYnV0dG9uKFwiXCIsIFwidGFzay12aWV3LWRlbGV0ZS1idXR0b25cIik7XHJcbiAgICBsZXQgZGVsZXRlSWNvbiA9IGMuZmFJY29uKFwiZmFzXCIsIFwiZmEtdHJhc2gtYWx0XCIpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZChkZWxldGVJY29uLCBcIkRlbGV0ZVwiKTtcclxuXHJcbiAgICB0YXNrQ29udHJvbEFyZWEuYXBwZW5kKGZpbmlzaEJ1dHRvbiwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAvLyBDb250cm9scyBTZWN0aW9uIEVuZFxyXG5cclxuICAgIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVG9kb0xpc3RFbGVtZW50Ll9jb21wbGV0ZVRhc2spO1xyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVG9kb0xpc3RFbGVtZW50Ll9kaXNwbGF5RWRpdFRhc2tGb3JtKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVG9kb0xpc3RFbGVtZW50Ll9kZWxldGVUYXNrKTtcclxuXHJcbiAgICBsZXQgZHJhZ0J1dHRvbiA9IGMuYnV0dG9uKFwiXCIsIFwidGFzay12aWV3LWRyYWctYnV0dG9uXCIpO1xyXG4gICAgbGV0IGRyYWdJY29uID0gYy5mYUljb24oXCJmYXNcIiwgXCJmYS1ncmlwLXZlcnRpY2FsXCIpO1xyXG4gICAgZHJhZ0J1dHRvbi5hcHBlbmQoZHJhZ0ljb24pO1xyXG5cclxuICAgIHRhc2tEcmFnQXJlYS5hcHBlbmQoZHJhZ0J1dHRvbik7XHJcblxyXG4gICAgdGFza1ZpZXcuYXBwZW5kKHRhc2tEcmFnQXJlYSwgdGFza0luZm9ybWF0aW9uQXJlYSwgdGFza0NvbnRyb2xBcmVhKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudFNlbGVjdG9yKS5hcHBlbmQodGFza1ZpZXcpO1xyXG5cclxuICAgIGRyYWdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICAgIHRhc2tWaWV3LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkcmFnQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgICAgdGFza1ZpZXcucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza1ZpZXcuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcclxuICAgIFRvZG9MaXN0RWxlbWVudC5fYXBwbHlEcmFnQ2FwYWJpbGl0aWVzKCk7XHJcbiAgICBcclxuICAgIGxldCBidXR0b25zU2VsZWN0b3IgPSBcIi50YXNrLW1vdmUgPiBidXR0b24sIC50YXNrLWNvbnRyb2xzID4gYnV0dG9uXCI7XHJcbiAgICAvLyBEZWZhdWx0IHN0YXRlLCBhbGwgYnV0dG9ucyBhcmUgbG93IG9wYWNpdHkuXHJcbiAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yQWxsKGJ1dHRvbnNTZWxlY3RvcikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImxvdy1vcGFjaXR5XCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEFwcGx5IGhvdmVyIGNhcGFiaWxpdGllcywgYW5kIHRoYXQncyB3aGVuIGJ1dHRvbnMgYXJlIHNob3duLlxyXG4gICAgdGFza1ZpZXcub25tb3VzZW92ZXIgPSAoZSkgPT4ge1xyXG4gICAgICBsZXQgdGFza1ZpZXcgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIHdoaWxlICghdGFza1ZpZXcuaWQuaW5jbHVkZXMoXCJ0YXNrLVwiKSkge1xyXG4gICAgICAgIHRhc2tWaWV3ID0gdGFza1ZpZXcucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yQWxsKGJ1dHRvbnNTZWxlY3RvcikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibG93LW9wYWNpdHlcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGFza1ZpZXcub25tb3VzZW91dCA9IChlKSA9PiB7XHJcbiAgICAgIGxldCB0YXNrVmlldyA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgd2hpbGUgKCF0YXNrVmlldy5pZC5pbmNsdWRlcyhcInRhc2stXCIpKSB7XHJcbiAgICAgICAgdGFza1ZpZXcgPSB0YXNrVmlldy5wYXJlbnROb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3JBbGwoYnV0dG9uc1NlbGVjdG9yKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJsb3ctb3BhY2l0eVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIF9hcHBseURyYWdDYXBhYmlsaXRpZXMoKSB7XHJcbiAgICBsZXQgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtYWN0aXZlXCIpO1xyXG5cclxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaChkcmFnZ2FibGUgPT4ge1xyXG4gICAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgICAvLyBkcmFnb3ZlcjogZmlyZWQgd2hlbiBhbiBlbGVtZW50IG9yIHRleHQgc2VsZWN0aW9uXHJcbiAgICAgIC8vIGlzIGJlaW5nIGRyYWdnZWQgb3ZlciBhIHZhbGlkIGRyb3AgdGFyZ2V0IFxyXG4gICAgICAvLyB1c2UgZS5wcmV2ZW50RGVmYXVsdCgpIC0tIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciB0aGF0IGlzIFxyXG4gICAgICAvLyBub3QgZXhwbGljaXRseSBoYW5kbGVkLCB3aGljaCwgaW4gdGhpcyBjYXNlLCBpcyBkcmFnZ2luZy5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0RHJhZ0FmdGVyRWxlbWVudChlLmNsaWVudFkpO1xyXG4gICAgICBjb25zdCBhY3RpdmVEcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnaW5nXCIpO1xyXG4gICAgICBcclxuICAgICAgLy8gaWYgYWZ0ZXJFbGVtZW50IGlzIG51bGwsIHdlJ3JlIGF0IHRoZSBib3R0b20gZm8gdGhlIGxpc3RcclxuICAgICAgaWYgKGFmdGVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYWN0aXZlRHJhZ2dhYmxlKTsgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGVsc2Ugb3VyIG1vdXNlIGlzIGhvdmVyaW5nIGFib3ZlIGFuIGVsZW1lbnQsIHNvIGluc2VydCBiZWZvcmUgaXQuXHJcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShhY3RpdmVEcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQobW91c2VZKSB7XHJcbiAgICAgIC8vIGdldCBhbGwgZWxlbWVudHMgbm90IGJlaW5nIGRyYWdnZWQuXHJcbiAgICAgIGNvbnN0IGluYWN0aXZlRHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oY29udGFpbmVyLlxyXG4gICAgICAgICAgcXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGU6bm90KC5kcmFnZ2luZylcIikpO1xyXG5cclxuICAgICAgLy8gcmVkdWNlKCkgY2FsbCwgd2hpY2ggd2lsbCBmaW5kIHVzIHRoZSBlbGVtZW50IHRoYXQgaXMgXHJcbiAgICAgIC8vIGFmdGVyIHRoZSBtb3VzZSBjdXJzb3IgYmFzZWQgb24gdGhlIHkgcG9zaXRpb24gd2UgcGFzcyBpbi5cclxuICAgICAgLy8gd2UganVzdCBuZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIG9mZnNldCBvZiB0aGUgY3Vyc29yXHJcbiAgICAgIC8vIGFnYWluc3QgdGhlIGVsZW1lbnQgYWZ0ZXIgaXQuXHJcbiAgICAgIHJldHVybiBpbmFjdGl2ZURyYWdnYWJsZXMucmVkdWNlKChjbG9zZXN0RWxlbSwgZWxlbSkgPT4ge1xyXG4gICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdDpcclxuICAgICAgICAvLyByZXR1cm5zIGEgRE9NUmVjdCBvYmplY3QgcHJvdmlkaW5nIGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gYWJvdXQgdGhlIHNpemUgb2YgYW4gZWxlbWVudCBhbmQgaXRzIHBvc2l0aW9uIHJlbGF0aXZlXHJcbiAgICAgICAgLy8gdG8gdGhlIHZpZXdwb3J0LlxyXG4gICAgICAgIC8vIHdlIGdldCB0aGUgc2l6ZSBvZiB0aGUgdGFzayAod2lkdGggKyBoZWlnaHQpXHJcbiAgICAgICAgLy8gYW5kIHRoZW4gaXRzIHBvc2l0aW9uIHJlbCB0byB0aGUgdmlld3BvcnQgKHRvcCBhbmQgbGVmdClcclxuICAgICAgICBjb25zdCBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyIG9mIGJveCB0byBvdXIgbW91c2UuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbW91c2VZIC0gYm94LnRvcCAtIChib3guaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvZmZzZXQpO1xyXG4gICAgICAgIGlmIChvZmZzZXQgPiBjbG9zZXN0RWxlbS5vZmZzZXQgJiYgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgLy8gcmV0dXJuIGEgbmV3ICdjbG9zZXN0RWxlbScgaWYgdGhpcyBlbGVtIG9mZnNldCBpcyBcclxuICAgICAgICAgIC8vIGdyZWF0ZXIgdGhhbiB0aGUgb3RoZXIgKGl0J3MgY2xvc2VyIHRoYW4gYW55XHJcbiAgICAgICAgICAvLyBvdGhlciBlbGVtZW50IGluIHRoZSBhcnJheSkgYW5kIHRoZSBvZmZzZXRcclxuICAgICAgICAgIC8vIGlzIGxlc3MgdGhhbiAwICh0aGUgbW91c2UgaXMgYWJvdmUgdGhlIGVsZW1lbnQpXHJcbiAgICAgICAgICByZXR1cm4ge29mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBlbGVtfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGNsb3Nlc3RFbGVtOyAvLyBtYWludGFpbiBjbG9zZXN0RWxlbSBhcyBjbG9zZXN0LlxyXG4gICAgICAgIH1cclxuICAgICAgIH0sIHtvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWX0pLmVsZW1lbnQ7XHJcbiAgICAgIC8vIG9mZnNldCBpcyBpbmZpbml0eSBzbyB0aGF0IHdlIGhhdmUgYW4gZWxlbWVudCB0aGF0IGNhbiBiZSByZXR1cm5lZFxyXG4gICAgICAvLyBldmVyeSBzaW5nbGUgZWxlbWVudCBpcyBnb2luZyB0byBiZSBjbG9zZXIgdGhhbiB0aGUgSU5GSU5JVFkuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2NvbXBsZXRlVGFzayhlKSB7XHJcbiAgICBsZXQgdGFza1ZpZXcgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICB3aGlsZSAoIXRhc2tWaWV3LmlkLmluY2x1ZGVzKFwidGFzay1cIikpIHtcclxuICAgICAgdGFza1ZpZXcgPSB0YXNrVmlldy5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpZCA9ICt0YXNrVmlldy5pZC5zcGxpdChcInRhc2stXCIpWzFdO1xyXG5cclxuICAgIC8vIE1hcmsgdGhlIHRhc2sgYXMgY29tcGxldGVkXHJcbiAgICBsZXQgdGFzayA9IFRvZG9MaXN0RWxlbWVudC5jb25uZWN0aW9uLmdldEl0ZW1CeUlkKGlkKTtcclxuICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgc3RvcmFnZSBhcnJheS5cclxuICAgIFRvZG9MaXN0RWxlbWVudC5jb25uZWN0aW9uLnVwZGF0ZSh0YXNrKTtcclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIHRoZSBmaW5pc2ggYnV0dG9uIGZyb20gdGFza3ZpZXdcclxuICAgIC8vIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3LWZpbmlzaC1idXR0b25cIikucmVtb3ZlKCk7XHJcbiAgICB0YXNrVmlldy5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfZGVsZXRlVGFzayhlKSB7XHJcbiAgICBsZXQgdGFza1ZpZXcgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICB3aGlsZSAoIXRhc2tWaWV3LmlkLmluY2x1ZGVzKFwidGFzay1cIikpIHtcclxuICAgICAgdGFza1ZpZXcgPSB0YXNrVmlldy5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXNrSWQgPSArdGFza1ZpZXcuaWQuc3BsaXQoXCJ0YXNrLVwiKVsxXTtcclxuICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrVmlldy5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlldy10aXRsZVwiKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGUpID0+IHtcclxuICAgICAgLy8gcmVtb3ZlIHRoZSB2aWV3XHJcbiAgICAgIHRhc2tWaWV3LnJlbW92ZSgpO1xyXG4gICAgICAvLyByZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgc3RvcmFnZS5cclxuICAgICAgY29ubmVjdGlvbi5yZW1vdmUodGFza0lkKTtcclxuXHJcbiAgICAgIGMudG9hc3QoXCJUYXNrIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiLCAzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVtb3ZlUHJvbXB0ID0gYy5jb25maXJtTW9kYWwoXHJcbiAgICAgICAgXCJhZGQtdGFza3MtZGVsZXRlLWRpYWxvZ1wiLFxyXG4gICAgICAgIFwiRGVsZXRlIFRhc2tcIixcclxuICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3Rhc2tUaXRsZS50cmltKCl9P2AsXHJcbiAgICAgICAgXCJEZWxldGVcIixcclxuICAgICAgICBcIkNhbmNlbFwiLFxyXG4gICAgICAgIHJlbW92ZVRhc2ssXHJcbiAgICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuYXBwZW5kKHJlbW92ZVByb21wdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmlsdGVyVGFza3MoZmlsdGVyTmFtZSwgdHlwZSkge1xyXG4gICAgbGV0IGl0ZW1zO1xyXG4gICAgbGV0IGNvbmRpdGlvbjtcclxuXHJcbiAgICBpZiAoZmlsdGVyTmFtZSAhPT0gXCJjb21wbGV0ZWRcIikge1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwiYXR0cmlidXRlXCI6XHJcbiAgICAgICAgaWYgKGZpbHRlck5hbWUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IChlbGVtKSA9PiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyTmFtZSA9PT0gXCJub2RhdGVcIikge1xyXG4gICAgICAgICAgY29uZGl0aW9uID0gKGVsZW0pID0+IChlbGVtLmR1ZURhdGUgPT09IFwiXCIpOyBcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlck5hbWUgPT09IFwiY29tcGxldGVkXCIpIHtcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IChlbGVtKSA9PiAoZWxlbS5jb21wbGV0ZWQgPT09IHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICBpZiAoZmlsdGVyTmFtZSA9PT0gXCJ0b2RheVwiKSB7XHJcbiAgICAgICAgICBjb25kaXRpb24gPSAoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGVsZW0uZHVlRGF0ZSAhPT0gXCJcIiAmJiBpc1RvZGF5KHBhcnNlSVNPKGVsZW0uZHVlRGF0ZSkpKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lID09PSBcIndlZWtcIikge1xyXG4gICAgICAgICAgY29uZGl0aW9uID0gKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW0uZHVlRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGNvbXBhcmVBc2MobmV4dFN1bmRheSh0b2RheSksIHBhcnNlSVNPKGVsZW0uZHVlRGF0ZSkpID09PSAxKVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlck5hbWUgPT09IFwibW9udGhcIikge1xyXG4gICAgICAgICAgY29uZGl0aW9uID0gKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW0uZHVlRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9udGgobmV3IERhdGUoKSkgPT09IGdldE1vbnRoKHBhcnNlSVNPKGVsZW0uZHVlRGF0ZSkpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxyXG4gICAgICAgIGNvbmRpdGlvbiA9IChlbGVtKSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBjYXQgb2YgZWxlbS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmlsdGVyTmFtZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVyTmFtZSAhPT0gXCJjb21wbGV0ZWRcIikge1xyXG4gICAgICBpdGVtcyA9IFRvZG9MaXN0RWxlbWVudC5jb25uZWN0aW9uLmdldEFsbEl0ZW1zKClcclxuICAgICAgLmZpbHRlcihlbGVtID0+IGVsZW0uY29tcGxldGVkID09PSBmYWxzZSlcclxuICAgICAgLmZpbHRlcihjb25kaXRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbXMgPSBUb2RvTGlzdEVsZW1lbnQuY29ubmVjdGlvbi5nZXRBbGxJdGVtcygpLmZpbHRlcihjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAgIC8vIGNvbnNvbGUudHJhY2UoKTtcclxuICAgIFRvZG9MaXN0RWxlbWVudC51cGRhdGVUYXNrVmlldyhmaWx0ZXJOYW1lLCBpdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIHRhc2sgdmlldyB3aXRoIGdpdmVuIHRhc2tzLCBhbmQgc2hvdyB0aGUgZmlsdGVyIGFzIHRoZSBoZWFkZXIgbmFtZS5cclxuICAgKi9cclxuICBzdGF0aWMgdXBkYXRlVGFza1ZpZXcoZmlsdGVyTmFtZSwgdGFza3MpIHtcclxuICAgIGxldCBwYXJlbnRDb250YWluZXIgPSBcIiN0YXNrcy1hY3RpdmVcIjtcclxuXHJcbiAgICAvLyByZW1vdmUgYWxsIHRhc2sgdmlld3MgZnJvbSB0aGUgdmlldy5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7cGFyZW50Q29udGFpbmVyfSA+IC50YXNrYCkuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nXCIpO1xyXG4gICAgICBlbGVtLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvLyB1cGRhdGUgdGhlIHZpZXcuLi5cclxuICAgIC8vIHdpdGggdGhlIG5hbWUgb2YgdGhlIGZpbHRlciwgdW5sZXNzIGl0J3MgYSBjYXRlZ29yeS5cclxuICAgIGxldCBkaXNwbGF5TGFiZWw7XHJcbiAgICBpZiAoZmlsdGVyTmFtZSBpbiBzaWRlYmFyLnNpZGViYXJMaW5rcykge1xyXG4gICAgICBkaXNwbGF5TGFiZWwgPSBzaWRlYmFyLnNpZGViYXJMaW5rc1tmaWx0ZXJOYW1lXS5kaXNwbGF5TGFiZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwbGF5TGFiZWwgPSBmaWx0ZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFyZW50Q29udGFpbmVyfSA+IC50YXNrLXNlY3Rpb24taGVhZGVyYClcclxuICAgICAgICAudGV4dENvbnRlbnQgPSBkaXNwbGF5TGFiZWw7XHJcbiAgICAvLyBhbmQgZm9yIHRoZSBuZXcgdGFza3MuXHJcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgIFRvZG9MaXN0RWxlbWVudC5hZGRUYXNrVG9WaWV3KHRhc2ssIHBhcmVudENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICAvLyBkb24ndCBsZXQgdXNlcnMgYWRkIGZvciBjb21wbGV0ZWQgdGFza3Mgc2VjdGlvbi5cclxuICAgIGlmIChmaWx0ZXJOYW1lID09PSBcImNvbXBsZXRlZFwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtYWRkXCIpLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1hZGRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgY29ubmVjdGlvbiBmcm9tIFwiLi9Ub2RvTGlzdFN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC5qc1wiO1xyXG5pbXBvcnQge1RvZG9MaXN0RWxlbWVudH0gZnJvbSBcIi4vVG9kb0xpc3RFbGVtZW50LmpzXCI7XHJcblxyXG5jbGFzcyBUb2RvTGlzdFNpZGViYXIge1xyXG4gIFxyXG4gICNtcWw7XHJcbiAgI2M7XHJcbiAgI3NpZGViYXJCRztcclxuICAjc2lkZWJhckNvbnRhaW5lcjtcclxuICAjc2lkZWJhckNvbnRlbnQ7XHJcbiAgI3NpZGViYXJDYXRlZ29yeUNvbnRhaW5lcjtcclxuICBzaWRlYmFyTGlua3MgPSB7XHJcbiAgICBhbGw6IHtcclxuICAgICAgZGlzcGxheUxhYmVsOiBcIkFsbFwiLFxyXG4gICAgICB0eXBlOiBcImF0dHJpYnV0ZVwiXHJcbiAgICB9LCBcclxuICAgIHRvZGF5OiB7XHJcbiAgICAgIGRpc3BsYXlMYWJlbDogXCJUb2RheVwiLFxyXG4gICAgICB0eXBlOiBcImRhdGVcIlxyXG4gICAgfSwgXHJcbiAgICB3ZWVrOiB7XHJcbiAgICAgIGRpc3BsYXlMYWJlbDogXCJUaGlzIFdlZWtcIixcclxuICAgICAgdHlwZTogXCJkYXRlXCJcclxuICAgIH0sXHJcbiAgICBtb250aDoge1xyXG4gICAgICBkaXNwbGF5TGFiZWw6IFwiVGhpcyBNb250aFwiLFxyXG4gICAgICB0eXBlOiBcImRhdGVcIlxyXG4gICAgfSxcclxuICAgIG5vZGF0ZToge1xyXG4gICAgICBkaXNwbGF5TGFiZWw6IFwiTm8gRHVlIERhdGVcIixcclxuICAgICAgdHlwZTogXCJhdHRyaWJ1dGVcIlxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgIGRpc3BsYXlMYWJlbDogXCJCeSBDYXRlZ29yeVwiLFxyXG4gICAgICB0eXBlOiBcImNhdGVnb3J5XCJcclxuICAgIH0sXHJcbiAgICBjb21wbGV0ZWQ6IHtcclxuICAgICAgZGlzcGxheUxhYmVsOiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgICB0eXBlOiBcImF0dHJpYnV0ZVwiXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuI2MgPSBuZXcgQ29tcG9uZW50KCk7XHJcblxyXG4gICAgdGhpcy4jc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgdGhpcy4jc2lkZWJhckNvbnRlbnQuaWQgPSBcInNpZGViYXItbmF2XCI7XHJcblxyXG4gICAgdGhpcy4jc2lkZWJhckJHID0gdGhpcy4jYy5kaXYoXCJzaWRlYmFyLXdyYXBwZXJcIik7XHJcbiAgICAvLyB0aGlzLiNzaWRlYmFyQkcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI2hpZGVTaWRlQmFyKTtcclxuICAgIHRoaXMuI3NpZGViYXJDb250YWluZXIgPSB0aGlzLiNjLmRpdihcInNpZGViYXJcIik7XHJcblxyXG4gICAgdGhpcy4jc2lkZWJhckJHLmFwcGVuZCh0aGlzLiNzaWRlYmFyQ29udGFpbmVyKTtcclxuICAgIHRoaXMuI3NpZGViYXJDb250YWluZXIuYXBwZW5kKHRoaXMuI3NpZGViYXJDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLiNsb2FkU2lkZUJhcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1xbCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7dmFsdWV9cHgpYCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbXFsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI21xbDtcclxuICB9XHJcblxyXG4gICNsb2FkU2lkZUJhcigpIHtcclxuICAgIGxldCBzaWRlQmFyTGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGxpbmsgaW4gdGhpcy5zaWRlYmFyTGlua3MpIHtcclxuICAgICAgbGV0IGxpbmtVbDtcclxuICAgICAgbGV0IGxpbmtJZDtcclxuICAgICAgbGV0IGxpbmtCdXR0b247XHJcblxyXG4gICAgICBsaW5rVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxpbmtCdXR0b24gPSB0aGlzLiNjLmJ1dHRvbih0aGlzLnNpZGViYXJMaW5rc1tsaW5rXS5kaXNwbGF5TGFiZWwpO1xyXG4gICAgICBsaW5rSWQgPSBgbmF2LWxpbmstJHtsaW5rfWA7XHJcbiAgICAgIFxyXG4gICAgICBsaW5rVWwuaWQgPSBsaW5rSWQ7XHJcbiAgICAgIGxpbmtVbC5jbGFzc0xpc3QuYWRkKFwidGFzay10eXBlLW5hdi1saW5rXCIpO1xyXG5cclxuXHJcbiAgICAgIGlmIChsaW5rICE9PSBcImNhdGVnb3J5XCIpIHsgLy8gc2tpcCBjYXRlZ29yeSBoYW5kbGVyIGFkZGl0aW9uLCB3aWxsIGJlIGRvbmUgZWxzZXdoZXJlLlxyXG4gICAgICAgIGxpbmtVbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdGVkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWJhci1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgIFRvZG9MaXN0RWxlbWVudC5maWx0ZXJUYXNrcyhsaW5rLCB0aGlzLnNpZGViYXJMaW5rc1tsaW5rXS50eXBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGluayA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgIGxpbmtVbC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1zZWxlY3RlZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGlua1VsLmFwcGVuZChsaW5rQnV0dG9uKTtcclxuICBcclxuICAgICAgc2lkZUJhckxpbmtzQ29udGFpbmVyLmFwcGVuZChsaW5rVWwpO1xyXG5cclxuICAgICAgLy8gc2F2ZSBjYXRlZ29yeSBpZCBlbGVtZW50IHJlZmVyZW5jZSwgc28gdGhhdCB3ZSBjYW4gdXBkYXRlIGl0cyBjYXRlZ29yaWVzIGxhdGVyLlxyXG4gICAgICBpZiAobGluayA9PT0gXCJjYXRlZ29yeVwiKSB7XHJcbiAgICAgICAgdGhpcy4jc2lkZWJhckNhdGVnb3J5Q29udGFpbmVyID0gbGlua1VsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0aGlzLiNzaWRlYmFyQ29udGVudC5hcHBlbmQoc2lkZUJhckxpbmtzQ29udGFpbmVyKTtcclxuICBcclxuICAgIHRoaXMudXBkYXRlQ2F0ZWdvcnlTaWRlYmFyTGlzdGluZygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2F0ZWdvcnlTaWRlYmFyTGlzdGluZygpIHtcclxuICAgIHRoaXMuI3NpZGViYXJDYXRlZ29yeUNvbnRhaW5lci5hcHBlbmQodGhpcy4jZ2V0Q2F0ZWdvcmllc0FzTGlua3MoKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcXVlcnlQYWdlV2lkdGgoZSkge1xyXG4gICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNpZGViYXI6IFNpZGViYXIgdG9nZ2xpbmcgZnJvbSBxdWVyeSBwYWdlLi4uXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGUtc2lkZWJhclwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXdyYXBwZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInNpZGViYXItYWN0aXZlLXdyYXBwZXItYmdcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpdCBiaWdnZXIgdGhhbiB0aGUgcXVlcnkgcnVsZS5cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLXNpZGViYXJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9nZ2xlU2lkZWJhcihlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNpZGViYXI6IFNpZGViYXIgdG9nZ2xpbmcuLi5cIik7XHJcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgIGxldCBzaWRlYmFyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci13cmFwcGVyXCIpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlYmFyXCIpO1xyXG4gICAgaWYgKCFzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGUtc2lkZWJhclwiKSkge1xyXG4gICAgICBzaWRlYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1hY3RpdmUtd3JhcHBlci1iZ1wiKTtcclxuICAgICAgc2lkZWJhcldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG9MaXN0U2lkZWJhci50b2dnbGVTaWRlYmFyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWFjdGl2ZS13cmFwcGVyLWJnXCIpO1xyXG4gICAgICBzaWRlYmFyV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVG9kb0xpc3RTaWRlYmFyLnRvZ2dsZVNpZGViYXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgdGhlIGNhdGVnb3JpZXMgbGlzdGVkIGZvciBlYWNoIHRhc2ssIGFuZCB0aGVuIHJldHVybiBhIG5hdmJhciBlbGVtIHdpdGggXHJcbiAgICogdGhlIGNhdGVnb3JpZXMgYXMgbGlzdCBlbGVtZW50cy5cclxuICAgKiBJZGVhbGx5LCBydW4gdGhpcyBmdW5jdGlvbiBlYWNoIHRpbWUgeW91IHN1Ym1pdCBvciB1cGRhdGUgYSB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIGxpbmtzIC0gQW4gYXJyYXkgb2YgbGlua3MgcGVydGFpbmluZyB0byBhbGwgcmVsZXZhbnQgY2F0ZWdvcmllcywgXHJcbiAgICogYW5kIHRoZSBjb3VudCBvZiB0YXNrcyBpbiBlYWNoIGNhdGVnb3J5LiBBZGQgdGhpcyBhZnRlciB0aGUgY2F0ZWdvcnlcclxuICAgKiBsaW5rLlxyXG4gICAqL1xyXG4gICNnZXRDYXRlZ29yaWVzQXNMaW5rcygpIHtcclxuICAgIGxldCBjYXRlZ29yaWVzID0gY29ubmVjdGlvbi5nZXRBbGxJdGVtcygpLnJlZHVjZSgoY2F0cywgdGFzaykgPT4ge1xyXG4gICAgICAvLyBndWFyZCBjbGF1c2Ugc2luY2UgY29udGludWUgZG9lc24ndCB3b3JrOyBhZnRlciBhbGwsIGl0IGlzIGEgZnVuY3Rpb24sIG5vdCBhIGxvb3AgYmxvY2suXHJcbiAgICAgIGlmICh0YXNrLmNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhdHM7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRhc2tDYXRlZ29yaWVzID0gdGFzay5jYXRlZ29yaWVzLm1hcChlbGVtID0+IGVsZW0udmFsdWUpO1xyXG4gICAgICAvLyBuZWVkIHRvIGNvbnZlcnQgdGFzay5jYXRlZ29yaWVzIGludG8gYW4gYXJyYXkuXHJcbiAgICAgIGZvciAobGV0IGNhdCBvZiB0YXNrQ2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNhdCA9IGNhdC5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoY2F0IGluIGNhdHMpIHtcclxuICAgICAgICAgIGNhdHNbY2F0XSArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYXRzW2NhdF0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gY2F0cztcclxuICAgIH0sIHt9KTtcclxuICBcclxuICAgIGxldCBjYXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjYXRDb250YWluZXIuaWQgPSBcImNhdGVnb3J5LWxpbmtzXCI7XHJcbiAgXHJcbiAgICBmb3IgKGxldCBjYXQgaW4gY2F0ZWdvcmllcykge1xyXG4gICAgICBsZXQgY2F0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsZXQgY2F0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGNhdExpbmsudGV4dENvbnRlbnQgPSBjYXQucmVwbGFjZShcIi1cIiwgJyAnKTtcclxuICAgICAgY2F0TGluay50ZXh0Q29udGVudCArPSBgICgke2NhdGVnb3JpZXNbY2F0XX0pYDtcclxuICBcclxuICAgICAgLy8gQWRkIGZpbHRlciB0YXNrcyBjYWxsYmFjayBvdmVyIGhlcmUuXHJcbiAgICAgIGNhdExpbmsuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LW5hdi1saW5rXCIpO1xyXG4gICAgICBjYXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY3VycmVudFNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgVG9kb0xpc3RFbGVtZW50LmZpbHRlclRhc2tzKGNhdCwgXCJjYXRlZ29yeVwiKVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY2F0TGlzdEl0ZW0uYXBwZW5kKGNhdExpbmspO1xyXG4gICAgICBjYXRDb250YWluZXIuYXBwZW5kKGNhdExpc3RJdGVtKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjYXRDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXRTaWRlYmFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3NpZGViYXJCRztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNpZGViYXIgPSBuZXcgVG9kb0xpc3RTaWRlYmFyKCk7XHJcblxyXG5leHBvcnQge3NpZGViYXIsIFRvZG9MaXN0U2lkZWJhcn07IiwiaW1wb3J0IHtnZXRVbml4VGltZSwgcGFyc2VJU099IGZyb20gXCJkYXRlLWZuc1wiOyAgXHJcblxyXG4vKipcclxuICogRXN0YWJsaXNoZXMgYSBjb25uZWN0aW9uIHRvIGxvY2FsIHN0b3JhZ2UgYW5kIHB1c2hlcy9wdWxscyBkYXRhIHRvIGxvY2FsIHN0b3JhZ2UuXHJcbiAqL1xyXG5cclxuLy8gU2luZ2xldG9uIFBhdHRlcm4gaW4gSlMgUmVmXHJcbi8vIGh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMtc2luZ2xldG9uL1xyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSBcInRvZG8tbGlzdC10YXNrc1wiO1xyXG5cclxuY29uc3QgX3Rhc2tzID0gW107XHJcblxyXG5jbGFzcyBUb2RvTGlzdFN0b3JhZ2Uge1xyXG4gIFxyXG4gICNzdG9yYWdlO1xyXG4gICNTVE9SQUdFX0tFWTtcclxuXHJcbiAgY29uc3RydWN0b3IoU1RPUkFHRV9LRVkpIHtcclxuICAgIHRoaXMuI1NUT1JBR0VfS0VZID0gU1RPUkFHRV9LRVk7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSkge1xyXG4gICAgICB0aGlzLiNzdG9yYWdlID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiNzdG9yYWdlID0gdGhpcy4jcmVzdG9yZUZyb21TdG9yYWdlKCk7XHJcbiAgICAgIHRoaXMuc29ydEJ5RHVlRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFkZCguLi5pdGVtcykge1xyXG4gICAgdGhpcy4jc3RvcmFnZS5wdXNoKC4uLml0ZW1zKTtcclxuXHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB0aGlzLiNzYXZlVG9TdG9yYWdlKCk7XHJcbiAgICAvLyBEaWQgeW91IGtub3c/IHRoaXMgdXBkYXRlcyBlYWNoIHRpbWUsIGFuZCBhc3NpZ25pbmcgdGhhdCB0byBhIGhhbmRsZXJcclxuICAgIC8vIHVuZm9ydHVuYXRlbHkgdGhlIGhhbmRsZXIgd2lsbCBub3QgcmVjb2duaXplIHRoZSB1cGRhdGUsIHNvIHdlIGhhdmVcclxuICAgIC8vIHRvIGRvIGl0IG1hbnVhbGx5IGVhY2ggdGltZS5cclxuICAgIC8vIFRPRE9cclxuICAgIC8vIEFuIGludGVyZXN0aW5nIHRlc3RcclxuICAgIC8vIFNldCBhIGNvbmRpdGlvbmFsIHRoYXQgd2lsbCBvbmx5IHNhdmUgb25iZWZvcmV1bmxvYWQgaWYgdGhlIHN0b3JhZ2VcclxuICAgIC8vIGxlbmd0aCBpcyBvbmUuXHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWQpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuI3N0b3JhZ2UuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLiNzdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB0aGlzLiNzYXZlVG9TdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxJdGVtcygpIHtcclxuICAgIGlmICh0aGlzLiNzdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzdG9yYWdlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQnlJZChpZCkge1xyXG4gICAgbGV0IGl0ZW0gPSB0aGlzLiNzdG9yYWdlLmZpbmQoZWxlbSA9PiBlbGVtLmlkID09PSAraWQpO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGl0ZW0pIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuI3N0b3JhZ2UuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICB0aGlzLiNzdG9yYWdlW2luZGV4XSA9IGl0ZW07XHJcblxyXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdGhpcy4jc2F2ZVRvU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgI3NhdmVUb1N0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkodGhpcy4jc3RvcmFnZSkpO1xyXG4gIH1cclxuXHJcbiAgI3Jlc3RvcmVGcm9tU3RvcmFnZSgpIHtcclxuICAgIGxldCBqc29uU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jU1RPUkFHRV9LRVkpO1xyXG4gICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcclxuICAgIC8vIE5vdGU6IEpTT04gaXMgcmVjdXJzaXZlOyBob3dldmVyLCB0aGUgdGFnaWZ5IGxpYnJhcnkgXHJcbiAgICAvLyBlc2NhcGVzIHF1b3Rlcywgd2hpY2ggaXMgaW5jb3JyZWN0IEpTT04gZm9ybWF0IChsZWF2ZSBxdW90ZXMgdW50b3VjaGVkKS5cclxuICAgIC8vIGZvciB0aGF0IHJlYXNvbiwgd2UgaGF2ZSB0byBtYW51YWxseSBydW4gSlNPTi5wYXJzZSB3aGVuIHJlc3RvcmluZ1xyXG4gICAgLy8gZnJvbSBzdG9yYWdlLlxyXG4gICAgLy8gTmV2ZXIgbWluZCwgd2UganVzdCBjYXRjaCB0aGF0IGJlZm9yZSBpbiB0aGUgVG9kb0xpc3RFbGVtZW50IGNsYXNzLlxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICB0cnkge1xyXG4gICAgLy8gICAgIGFycmF5W2ldLmNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGFycmF5W2ldLmNhdGVnb3JpZXMpO1xyXG4gICAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIHNvcnRCeUR1ZURhdGUoKSB7ICBcclxuXHJcbiAgICB0aGlzLiNzdG9yYWdlLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuZHVlRGF0ZSA9PT0gXCJcIiAmJiBiLmR1ZURhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICBpZiAoYS50aXRsZSA+IGIudGl0bGUpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhLmR1ZURhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gMTsgLy8gc29ydCBiIGJlZm9yZSBhXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGIuZHVlRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiAtMTsgLy8gc29ydCBhIGJlZm9yZSBiXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGxldCBhTXMgPSBnZXRVbml4VGltZShwYXJzZUlTTyhhLmR1ZURhdGUpKTtcclxuICAgICAgbGV0IGJNcyA9IGdldFVuaXhUaW1lKHBhcnNlSVNPKGIuZHVlRGF0ZSkpO1xyXG5cclxuICAgICAgaWYgKGFNcyA+IGJNcykge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICB9IGVsc2UgaWYgKGFNcyA8IGJNcykge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgICAgfSBlbHNlIHsgLy8gYm90aCBhcmUgdGhlIHNhbWUgZGF0ZVxyXG4gICAgICAgIGlmIChhLnRpdGxlID4gYi50aXRsZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy4jc3RvcmFnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgVG9kb0xpc3RTdG9yYWdlKFNUT1JBR0VfS0VZKTtcclxuXHJcblxyXG4vLyAndGhpcycgd2Fzbid0IGdldHRpbmcgdXBkYXRlZCEhXHJcbi8vIChCZWNhdXNlIGVhY2ggdGltZSB0aGUgYXJyYXkgdXBkYXRlcyB5b3UgaGF2ZSB0byBhc3NpZ24gYSBuZXcgZXZlbnQgbGlzdGVuZXIuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGlvbjtcclxuIiwiLyoqXHJcbiAqIENvbXBvbmVudCBjbGFzcy4gQ29udGFpbnMgdmFyaW91cyBET00gZWxlbWVudHMuXHJcbiAqIEF1dGhvcjogZGF0cmlub25cclxuICogVmVyc2lvbjogMS4xXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDYwMHB4KScpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBiYXNpYyBIVE1MIHNrZWxldG9uIGZvciB0aGUgd2ViIHBhZ2UsIGdlbmVyYXRpbmcgYSBoZWFkZXIsXHJcbiAgICogbWFpbiwgYW5kIHN0aWNreSBmb290ZXIuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSBoZWFkZXJUaXRsZSAtIFdoYXQgdGhlIHdlYiBwYWdlIGlzIGNhbGxlZC4gXHJcbiAgICogQHBhcmFtIHtib29sfSBlbXB0eUhlYWRlciAtIFNob3VsZCB0aGUgaGVhZGVyIHVzZSBhIGRlZmF1bHQgc3RydWN0dXJlP1xyXG4gICAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSBsb29rcyBsaWtlIFsgTG9nbyB8IHwgfCB8IE5hdmlnYXRpb24gTGlua3NdXHJcbiAgICogQHJldHVybnMgLSBBbiBhcnJheSBjb250YWluaW5nIHJlZmVyZW5jZXMgdG8gdGhlIGdlbmVyYXRlZCBoZWFkZXIsIG1haW4sIGFuZCBmb290ZXIuXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZVN0cnVjdHVyZShoZWFkZXJUaXRsZSwgZW1wdHlIZWFkZXIgPSBmYWxzZSwgY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSB0aGlzLmRpdihcImNvbnRlbnRcIik7XHJcbiAgICBsZXQgaGVhZGVyO1xyXG4gICAgaWYgKGVtcHR5SGVhZGVyKSB7XHJcbiAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIgPSB0aGlzLmhlYWRlcihoZWFkZXJUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZm9vdGVyKGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbik7XHJcbiAgICBib2R5LmFwcGVuZChtYWluV3JhcHBlciwgZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gW2hlYWRlciwgbWFpbiwgZm9vdGVyXTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG4gICAgXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGhlYWRlcih0aXRsZSkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBsZXQgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYmFyc1wiLCBcIm5vLWRpc3BsYXlcIik7XHJcblxyXG4gICAgdGhpcy5tcWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpdCBiaWdnZXIgdGhhbiB0aGUgcXVlcnkgcnVsZS5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pbi1vdXRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVudSBwcmVzc2VkLlwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICAvLyBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgdGl0bGVFbGVtLmlkID0gXCJwYWdlLXRpdGxlXCI7XHJcbiAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIFxyXG4gICAgdGl0bGVFbGVtLmluc2VydEJlZm9yZShtZW51QnV0dG9uLCB0aXRsZUVsZW0uZmlyc3RDaGlsZCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlRWxlbSk7XHJcbiAgICBcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBuYXZiYXIoLi4ubGlua3MpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIG5hdi5pZCA9IFwibmF2YmFyXCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmlkID0gXCJuYXZiYXItYnV0dG9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgIGNvbnN0IGxpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGNvbnN0IGxpbmtBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XHJcbiAgICAgIFxyXG4gICAgICBsaW5rQW5jaG9yLmlkID0gYG5hdmxpbmstJHtsaW5rLnJlcGxhY2UoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgIGxpbmtBbmNob3IudGV4dENvbnRlbnQgPSBsaW5rO1xyXG4gICAgICBsaW5rQW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG5cclxuICAgICAgbGlua0J1dHRvbi5hcHBlbmQobGlua0FuY2hvcik7XHJcbiAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kKGxpbmtCdXR0b24pO1xyXG5cclxuXHJcblxyXG4gICAgICAvLyBUb28gc3BlY2lmaWMuXHJcbiAgICAgIC8vIGxpbmtBbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIC8vICAgbGV0IGN1cnJlbnRTZWN0aW9uSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gPiBzZWN0aW9uOm5vdCgubm8tZGlzcGxheSlcIikuaWQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgLy8gICBsZXQgY2hvc2VuU2VjdGlvbklkID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAvLyAgIGlmIChjdXJyZW50U2VjdGlvbklkICE9PSBjaG9zZW5TZWN0aW9uSWQpIHtcclxuICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRTZWN0aW9uSWR9YCkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjaG9zZW5TZWN0aW9uSWR9YCkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIC8vICAgfVxyXG5cclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2LmFwcGVuZChsaW5rQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuXHJcbiAgYmFubmVyKHRleHQsIGltZykge1xyXG4gICAgbGV0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgICBcclxuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9IFwiYmFubmVyXCI7XHJcbiAgICBiYW5uZXIuaWQgPSBcImJhbm5lci1pbWFnZVwiO1xyXG4gICAgY2FwdGlvbi5pZCA9IFwiYmFubmVyLWNhcHRpb25cIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ30pYDtcclxuXHJcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kKGJhbm5lciwgY2FwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluaykge1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGBDcmVhdGVkIGluICR7Y3JlYXRlTW9udGh9IDIwMjEuIE9kaW4gUHJvamVjdCB4IERhbiBULmA7XHJcbiAgICBsZXQgZ2l0aHViRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiZm9vdGVyLWdpdGh1Yi1pY29uXCIpO1xyXG4gICAgbGV0IGdoSWNvbiA9IHRoaXMuZmFJY29uKFwiZmFiXCIsIFwiZmEtZ2l0aHViLXNxdWFyZVwiLCBcImljb25cIik7XHJcblxyXG4gICAgZ2l0aHViRWxlbS5hcHBlbmQoZ2hJY29uKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnaXRodWJMaW5rKTtcclxuICAgIGdpdGh1YkVsZW0uc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgZ2l0aHViRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcC5hcHBlbmQoZ2l0aHViRWxlbSk7XHJcbiAgICBmb290ZXIuYXBwZW5kKHApO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGxhcmdlciwgZW1ib2xkZW5lZCwgdGV4dCxcclxuICAgKiBzaW1pbGFyIHRvIGEgcHVsbCBxdW90ZSBpbiBhIG1hZ2F6aW5lLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gVGV4dCB0byBpbmNsdWRlIGluIHRoZSBibG9jayBxdW90ZVxyXG4gICAqL1xyXG4gIHB1bGxxdW90ZShtc2cpIHtcclxuICAgIGxldCBwdWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xyXG4gICAgcHVsbC50ZXh0Q29udGVudCA9IG1zZztcclxuXHJcbiAgICBwdWxsLmNsYXNzTGlzdC5hZGQoXCJwdWxsLXF1b3RlXCIpO1xyXG5cclxuICAgIHJldHVybiBwdWxsO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbihpZCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGV4dCBoZWFkaW5nIGVsZW1lbnQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0IC0gVGhlIGxhYmVsIGZvciB0aGUgaGVhZGVyLlxyXG4gICAqIEBwYXJhbSB7Kn0gbGV2ZWwgLSBUaGUgbGV2ZWwgb2YgaGVhZGVyLlxyXG4gICAqL1xyXG4gIGhlYWRpbmcodGV4dCwgbGV2ZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGxldmVsIDwgMSB8fCBsZXZlbCA+IDYpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJIZWFkaW5nIGxldmVscyBjYW4gb25seSBiZSBiZXR3ZWVuIDEgdG8gNiFcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bGV2ZWx9YCk7XHJcblxyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgcGFyYWdyYXBoKHRleHQsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG4gIH1cclxuXHJcbiAgaW1nKHVybCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcblxyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxuXHJcbiAgZGl2KC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICBidXR0b24obGFiZWwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG5cclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGJhc2ljIHRhYmxlIHdpdGggc2luZ2xlLWNlbGwgY29sdW1ucyBhbmQgcm93cywgYmFzZWQgb24gdGhlIGltcG9ydGVkIGZpbGUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtjc3Z9IGRhdGEgLSBEYXRhIHRvIHR1cm4gaW50byBhIHRhYmxlLiBQbGVhc2UgdXNlIHdlYnBhY2sgdG8gaW1wb3J0IC5jc3YgZmlsZXMuXHJcbiAgICovXHJcbiAgdGFibGUoaWQgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0YWJsZS5pZCA9IGlkO1xyXG4gICAgXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHRhYmxlIGhlYWRlciByb3cuXHJcbiAgICBsZXQgdGFibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICBsZXQgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgY29sIG9mIE9iamVjdC5rZXlzKGRhdGFbMF0pKSB7XHJcbiAgICAgIGxldCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICBjb2xDZWxsLnRleHRDb250ZW50ID0gY29sO1xyXG5cclxuICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kKGNvbENlbGwpO1xyXG4gICAgfVxyXG4gICAgdGFibGVIZWFkZXIuYXBwZW5kKHRhYmxlSGVhZGVyUm93KTtcclxuICAgIFxyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAvLyBHZW5lcmF0ZSB0YWJsZSByb3dzLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIGRhdGFbaV0pIHtcclxuICAgICAgICBsZXQgdGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGNlbGwudGV4dENvbnRlbnQgPSBkYXRhW2ldW3Byb3BdO1xyXG4gICAgICAgIHRyb3cuYXBwZW5kKHRjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFibGVCb2R5LmFwcGVuZCh0cm93KTsgICAgICBcclxuICAgIH1cclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUJvZHkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGFibGU7XHJcbiAgfVxyXG5cclxuICBmYUljb24oY2F0ZWdvcnksIG5hbWUsIC4uLmNsYXNzTmFtZSl7XHJcbiAgICBsZXQgZmFzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKGNhdGVnb3J5LCBuYW1lKTtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgZmFzSWNvbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhc0ljb247XHJcbiAgfVxyXG5cclxuICBzcGFuKHRleHRDb250ZW50ID0gbnVsbCwgLi4uY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG5cclxuICBmb3JtSW5wdXQobGFiZWxUZXh0LCB0eXBlLCBpbnB1dElkLCBuYW1lKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dC5pZCA9IGlucHV0SWQ7XHJcbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcclxuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIGlucHV0XTtcclxuICB9XHJcblxyXG4gIGRyb3Bkb3duKGxhYmVsVGV4dCwgbmFtZSwgaW5wdXRJZCwgLi4udmFsdWVzKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xyXG5cclxuICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZXMpIHtcclxuICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgZW50cnkudmFsdWUgPSB2YWw7XHJcbiAgICAgIGlmIChpc05hTih2YWwpICYmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSkge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsWzBdLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmQoZW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHNlbGVjdF07XHJcbiAgfVxyXG5cclxuICB0ZXh0QXJlYShsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xyXG5cclxuICAgIGxldCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRhLmlkID0gaW5wdXRJZDtcclxuICAgIHRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIFtsYWJlbCwgdGFdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29uZmlybSBtb2RhbC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IGNsYXNzTmFtZSAtIENsYXNzZXMgdGhlIG1vZGFsIHNob3VsZCBiZWxvbmcgdG8uXHJcbiAgICogQHBhcmFtIHsqfSB0aXRsZSAtIFRoZSB0aXRsZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIGFwcGVhcmluZyBvbiB0aGUgbW9kYWwuXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIE9LIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQnV0dG9uTGFiZWwgLSBUZXh0IGZvciB0aGUgY2FuY2VsIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0geyp9IHBvc2l0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgT0sgaXMgcHJlc3NlZC5cclxuICAgKiBAcGFyYW0geyp9IG5lZ2F0aXZlQ2FsbGJhY2sgLSBGdW5jdGlvbiB0byBydW4gaWYgY2FuY2VsIGlzIHByZXNzZWQuICdudWxsJyBieVxyXG4gICAqIGRlZmF1bHQsIHdoaWNoIHRoZW4ganVzdCBjbG9zZXMgdGhlIG1vZGFsLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIC0gUmV0dXJucyB0aGUgZ2VuZXJhdGVkIG1vZGFsIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgY29uZmlybU1vZGFsKGNsYXNzTmFtZSwgdGl0bGUsIG1lc3NhZ2UsIHBvc2l0aXZlQnV0dG9uTGFiZWwsXHJcbiAgICBuZWdhdGl2ZUJ1dHRvbkxhYmVsLCBwb3NpdGl2ZUNhbGxiYWNrLCBuZWdhdGl2ZUNhbGxiYWNrID0gbnVsbCkge1xyXG4gICAgICBsZXQgbW9kYWxXcmFwcGVyID0gdGhpcy5kaXYoKTtcclxuICAgICAgbW9kYWxXcmFwcGVyLmlkID0gXCJwcm9tcHQtd3JhcHBlclwiO1xyXG4gICAgICBsZXQgbW9kYWwgPSB0aGlzLmRpdihjbGFzc05hbWUpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgdGl0bGVIZWFkZXIgPSB0aGlzLmhlYWRpbmcodGl0bGUsIDEsIFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gICAgICBjb25zdCBtZXNzYWdlUGFyYWdyYXBoID0gdGhpcy5wYXJhZ3JhcGgobWVzc2FnZSwgXCJtb2RhbC1kaWFsb2dcIik7XHJcbiAgICAgIGNvbnN0IHBvc2l0aXZlQnV0dG9uID0gdGhpcy5idXR0b24ocG9zaXRpdmVCdXR0b25MYWJlbCwgXCJtb2RhbC1jb25maXJtXCIpO1xyXG4gICAgICBjb25zdCBuZWdhdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKG5lZ2F0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY2FuY2VsXCIpO1xyXG5cclxuICAgICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IHRoaXMuZGl2KFwibW9kYWwtYnV0dG9uLWFyZWFcIik7XHJcblxyXG4gICAgICBpZiAobmVnYXRpdmVDYWxsYmFjayA9PT0gbnVsbCkge1xyXG4gICAgICAgIG5lZ2F0aXZlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5lZ2F0aXZlIHByZXNzZWQuXCIpO1xyXG4gICAgICAgICAgbW9kYWxXcmFwcGVyLnJlbW92ZSgpOyAgXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvc2l0aXZlQ2FsbGJhY2spO1xyXG4gICAgICBwb3NpdGl2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBwb3NpdGl2ZUNhbGxiYWNrKGUpO1xyXG4gICAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgfSlcclxuICAgICAgbmVnYXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lZ2F0aXZlQ2FsbGJhY2spO1xyXG5cclxuICAgICAgYnV0dG9uU2VjdGlvbi5hcHBlbmQocG9zaXRpdmVCdXR0b24sIG5lZ2F0aXZlQnV0dG9uKTtcclxuICAgICAgbW9kYWwuYXBwZW5kKHRpdGxlSGVhZGVyLCBtZXNzYWdlUGFyYWdyYXBoLCBidXR0b25TZWN0aW9uKTtcclxuICAgICAgbW9kYWxXcmFwcGVyLmFwcGVuZChtb2RhbCk7XHJcblxyXG4gICAgICAvLyBzdHlsaW5nIG1vdmVkIHRvIC5jc3MgcGFnZS5cclxuXHJcbiAgICAgIHJldHVybiBtb2RhbFdyYXBwZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBhIGJyaWVmLCB1bm9idHJ1c2l2ZSBwb3AtdXAgbWVzc2FnZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXHJcbiAgICogQHBhcmFtIHsqfSB0ZXh0Q29udGVudCAtIFRoZSB0ZXh0IHRoZSBtZXNzYWdlIHNob3VsZCBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7Kn0gZHVyYXRpb24gLSBUaGUgZHVyYXRpb24gb2YgdGhlIG1lc3NhZ2UgaW4gc2Vjb25kcy5cclxuICAgKi9cclxuICB0b2FzdCh0ZXh0Q29udGVudCwgZHVyYXRpb24pIHtcclxuICAgIGxldCB0b2FzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcclxuICAgIHRvYXN0Qm94LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKTtcclxuICAgIHRvYXN0TWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgdG9hc3RNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1tZXNzYWdlXCIpO1xyXG5cclxuICAgIHRvYXN0Qm94LmFwcGVuZCh0b2FzdE1lc3NhZ2UpO1xyXG5cclxuICAgIGxldCB0b2FzdEJveENzcyA9IFwicG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwdmg7XCI7XHJcbiAgICB0b2FzdEJveENzcyArPSBcIndpZHRoOiAxMDB2dztcIlxyXG4gICAgdG9hc3RCb3hDc3MgKz0gYGFuaW1hdGlvbjogZmFkZS1pbi1vdXQgJHtkdXJhdGlvbn1zO2A7XHJcbiAgICB0b2FzdEJveENzcyArPSBcInotaW5kZXg6IDk5OTk7XCJcclxuXHJcbiAgICBsZXQgdG9hc3RNZXNzYWdlQ3NzID0gXCJtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDMwMHB4OyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIlxyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9IFwidGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogNXB4O1wiXHJcbiAgICB0b2FzdE1lc3NhZ2VDc3MgKz0gXCJjb2xvcjogd2hpdGU7XCJcclxuICAgIFxyXG4gICAgdG9hc3RCb3guc3R5bGUuY3NzVGV4dCA9IHRvYXN0Qm94Q3NzO1xyXG4gICAgdG9hc3RNZXNzYWdlLnN0eWxlLmNzc1RleHQgPSB0b2FzdE1lc3NhZ2VDc3M7XHJcblxyXG4gICAgdG9hc3RCb3guYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIHRvYXN0Qm94LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodG9hc3RCb3gpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBmdW5jdGlvbiBQcmlvcml0eSgpIHtcclxuLy8gICB0aGlzLkNSSVRJQ0FMID0gNDtcclxuLy8gICB0aGlzLkhJR0ggPSAzO1xyXG4vLyAgIHRoaXMuTUVESVVNID0gMjtcclxuLy8gICB0aGlzLkxPVyA9IDE7XHJcbi8vICAgdGhpcy5OT05FID0gMDtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IHtQcmlvcml0eSBhcyBkZWZhdWx0fTtcclxuXHJcbmNvbnN0IHByaW9yaXR5ID0ge1xyXG4gIE5PTkU6IDAsXHJcbiAgTE9XOiAxLFxyXG4gIE1FRElVTTogMixcclxuICBISUdIOiAzLFxyXG4gIENSSVRJQ0FMOiA0LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByaW9yaXR5OyIsImltcG9ydCBwcmlvcml0eSBmcm9tIFwiLi9wcmlvcml0eS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gIFxyXG4gIGlkO1xyXG4gIHRpdGxlO1xyXG4gIHByaW9yaXR5O1xyXG4gIGRlc2NyaXB0aW9uO1xyXG4gIGNhdGVnb3JpZXM7XHJcbiAgZHVlRGF0ZTtcclxuICBjb21wbGV0ZWQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcclxuICAgIHRoaXMudGl0bGUgPSBcIlwiO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRhc2tJbmZvKCkge1xyXG4gICAgZm9yIChsZXQgcHJvcCBpbiBUYXNrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXNbcHJvcF0pO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9Ub2RvTGlzdEVsZW1lbnQuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=