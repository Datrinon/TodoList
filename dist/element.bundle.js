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
    taskView.querySelector(".task-view-priority").textContent = task.priority;
    taskView.querySelector(".task-view-description").textContent = task.description;

    taskView.querySelector(".task-view-due-date").textContent =
        TodoListElement._getDateTextForTask(task, taskView);

    let categories = taskView.querySelector(".task-view-categories");
    TodoListElement._addCategoryViewToTaskView(categories, task);

    c.toast("Task updated successfully", 3);
    console.log("Task updated successfully.");
    // remove the form after we've finished using it.
    taskView.querySelector("#edit-task-form").remove();
  }

  static _addCategoryViewToTaskView(categoryDiv, task) {
    categoryDiv.textContent = "";
    if (task.categories.length !== 0){
      task.categories.forEach(elem => {
        let span = c.span(elem.value, "category-label");
        categoryDiv.append(span);
      });
    } else {
      categoryDiv.append(c.paragraph("No categories set."));
    }
  }

  /**
   * Takes a given task's date and uses it to create text for an element.
   * Will mark as overdue if the date is past the current day, or mark 
   * no due date if the task does not have a due date, hence it needing a 
   * reference to the task view.
   * 
   * @returns date
   */
  static _getDateTextForTask(task, taskView) {
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
    return dueDateMsg;
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

    let dueDate = c.paragraph("", "task-view-due-date");
    
    dueDate.textContent = TodoListElement._getDateTextForTask(task, taskView);

    let priority = c.paragraph("", "task-view-priority");
    priority.textContent = task.priority;

    let description = c.paragraph(task.description, "task-view-description");
    let categories = c.div("task-view-categories");
    TodoListElement._addCategoryViewToTaskView(categories, task);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLGlFQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxrRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixvRUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0Isc0VBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047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QUMyQjtBQUM2QjtBQUN6RTtBQUNNLENBQUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7O0FDM2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmM7QUFDckM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL0B5YWlyZW8vdGFnaWZ5L2Rpc3QvdGFnaWZ5Lm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldE1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRVbml4VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbmV4dERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbmV4dFN1bmRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL1RvZG9MaXN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9Ub2RvTGlzdFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvVG9kb0xpc3RTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGFnaWZ5ICh2IDQuNy4yKSAtIHRhZ3MgaW5wdXQgY29tcG9uZW50XG4gKiBCeSBZYWlyIEV2ZW4tT3JcbiAqIERvbid0IHNlbGwgdGhpcyBjb2RlLiAoYylcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS95YWlyRU8vdGFnaWZ5XG4gKi9cblxuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5UYWdpZnk9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlLGkpe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09aSx0fWZ1bmN0aW9uIGUodCxlKXt2YXIgaT1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihzPXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLGkucHVzaC5hcHBseShpLHMpfXJldHVybiBpfWZ1bmN0aW9uIGkoaSl7Zm9yKHZhciBzPTE7czxhcmd1bWVudHMubGVuZ3RoO3MrKyl7dmFyIGE9bnVsbCE9YXJndW1lbnRzW3NdP2FyZ3VtZW50c1tzXTp7fTtzJTI/ZShPYmplY3QoYSksITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QoaSxlLGFbZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGksT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYSkpOmUoT2JqZWN0KGEpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSx0KSl9KSl9cmV0dXJuIGl9Y29uc3Qgcz0odCxlLGkscyk9Pih0PVwiXCIrdCxlPVwiXCIrZSxzJiYodD10LnRyaW0oKSxlPWUudHJpbSgpKSxpP3Q9PWU6dC50b0xvd2VyQ2FzZSgpPT1lLnRvTG93ZXJDYXNlKCkpO2Z1bmN0aW9uIGEodCxlKXt2YXIgaSxzPXt9O2ZvcihpIGluIHQpZS5pbmRleE9mKGkpPDAmJihzW2ldPXRbaV0pO3JldHVybiBzfWZ1bmN0aW9uIG4odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5yZXBsYWNlKC9cXCYjP1swLTlhLXpdKzsvZ2ksKGZ1bmN0aW9uKHQpe3JldHVybiBlLmlubmVySFRNTD10LGUuaW5uZXJUZXh0fSkpfWZ1bmN0aW9uIG8odCxlKXtmb3IoZT1lfHxcInByZXZpb3VzXCI7dD10W2UrXCJTaWJsaW5nXCJdOylpZigzPT10Lm5vZGVUeXBlKXJldHVybiB0fWZ1bmN0aW9uIHIodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLnJlcGxhY2UoLz4vZyxcIiZndDtcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKS5yZXBsYWNlKC9gfCcvZyxcIiYjMDM5O1wiKTp0fWZ1bmN0aW9uIGwodCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNwbGl0KFwiIFwiKVsxXS5zbGljZSgwLC0xKTtyZXR1cm4gdD09PU9iamVjdCh0KSYmXCJBcnJheVwiIT1lJiZcIkZ1bmN0aW9uXCIhPWUmJlwiUmVnRXhwXCIhPWUmJlwiSFRNTFVua25vd25FbGVtZW50XCIhPWV9ZnVuY3Rpb24gZCh0LGUsaSl7ZnVuY3Rpb24gcyh0LGUpe2Zvcih2YXIgaSBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkoaSkpe2lmKGwoZVtpXSkpe2wodFtpXSk/cyh0W2ldLGVbaV0pOnRbaV09T2JqZWN0LmFzc2lnbih7fSxlW2ldKTtjb250aW51ZX1pZihBcnJheS5pc0FycmF5KGVbaV0pKXt0W2ldPU9iamVjdC5hc3NpZ24oW10sZVtpXSk7Y29udGludWV9dFtpXT1lW2ldfX1yZXR1cm4gdCBpbnN0YW5jZW9mIE9iamVjdHx8KHQ9e30pLHModCxlKSxpJiZzKHQsaSksdH1mdW5jdGlvbiBoKHQpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLm5vcm1hbGl6ZT9cInN0cmluZ1wiPT10eXBlb2YgdD90Lm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLFwiXCIpOnZvaWQgMDp0fXZhciBnPSgpPT4vKD89LipjaHJvbWUpKD89LiphbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7dmFyIHA9e2RlbGltaXRlcnM6XCIsXCIscGF0dGVybjpudWxsLHRhZ1RleHRQcm9wOlwidmFsdWVcIixtYXhUYWdzOjEvMCxjYWxsYmFja3M6e30sYWRkVGFnT25CbHVyOiEwLGR1cGxpY2F0ZXM6ITEsd2hpdGVsaXN0OltdLGJsYWNrbGlzdDpbXSxlbmZvcmNlV2hpdGVsaXN0OiExLHVzZXJJbnB1dDohMCxrZWVwSW52YWxpZFRhZ3M6ITEsbWl4VGFnc0FsbG93ZWRBZnRlcjovLHxcXC58XFw6fFxccy8sbWl4VGFnc0ludGVycG9sYXRvcjpbXCJbW1wiLFwiXV1cIl0sYmFja3NwYWNlOiEwLHNraXBJbnZhbGlkOiExLHBhc3RlQXNUYWdzOiEwLGVkaXRUYWdzOntjbGlja3M6MixrZWVwSW52YWxpZDohMH0sdHJhbnNmb3JtVGFnOigpPT57fSx0cmltOiEwLGExMXk6e2ZvY3VzYWJsZVRhZ3M6ITF9LG1peE1vZGU6e2luc2VydEFmdGVyVGFnOlwiwqBcIn0sYXV0b0NvbXBsZXRlOntlbmFibGVkOiEwLHJpZ2h0S2V5OiExfSxjbGFzc05hbWVzOntuYW1lc3BhY2U6XCJ0YWdpZnlcIixtaXhNb2RlOlwidGFnaWZ5LS1taXhcIixzZWxlY3RNb2RlOlwidGFnaWZ5LS1zZWxlY3RcIixpbnB1dDpcInRhZ2lmeV9faW5wdXRcIixmb2N1czpcInRhZ2lmeS0tZm9jdXNcIix0YWc6XCJ0YWdpZnlfX3RhZ1wiLHRhZ05vQW5pbWF0aW9uOlwidGFnaWZ5LS1ub0FuaW1cIix0YWdJbnZhbGlkOlwidGFnaWZ5LS1pbnZhbGlkXCIsdGFnTm90QWxsb3dlZDpcInRhZ2lmeS0tbm90QWxsb3dlZFwiLGlucHV0SW52YWxpZDpcInRhZ2lmeV9faW5wdXQtLWludmFsaWRcIix0YWdYOlwidGFnaWZ5X190YWdfX3JlbW92ZUJ0blwiLHRhZ1RleHQ6XCJ0YWdpZnlfX3RhZy10ZXh0XCIsZHJvcGRvd246XCJ0YWdpZnlfX2Ryb3Bkb3duXCIsZHJvcGRvd25XcmFwcGVyOlwidGFnaWZ5X19kcm9wZG93bl9fd3JhcHBlclwiLGRyb3Bkb3duSXRlbTpcInRhZ2lmeV9fZHJvcGRvd25fX2l0ZW1cIixkcm9wZG93bkl0ZW1BY3RpdmU6XCJ0YWdpZnlfX2Ryb3Bkb3duX19pdGVtLS1hY3RpdmVcIixkcm9wZG93bkluaXRhbDpcInRhZ2lmeV9fZHJvcGRvd24tLWluaXRpYWxcIixzY29wZUxvYWRpbmc6XCJ0YWdpZnktLWxvYWRpbmdcIix0YWdMb2FkaW5nOlwidGFnaWZ5X190YWctLWxvYWRpbmdcIix0YWdFZGl0aW5nOlwidGFnaWZ5X190YWctLWVkaXRhYmxlXCIsdGFnRmxhc2g6XCJ0YWdpZnlfX3RhZy0tZmxhc2hcIix0YWdIaWRlOlwidGFnaWZ5X190YWctLWhpZGVcIixoYXNNYXhUYWdzOlwidGFnaWZ5LS1oYXNNYXhUYWdzXCIsaGFzTm9UYWdzOlwidGFnaWZ5LS1ub1RhZ3NcIixlbXB0eTpcInRhZ2lmeS0tZW1wdHlcIn0sZHJvcGRvd246e2NsYXNzbmFtZTpcIlwiLGVuYWJsZWQ6MixtYXhJdGVtczoxMCxzZWFyY2hLZXlzOltcInZhbHVlXCIsXCJzZWFyY2hCeVwiXSxmdXp6eVNlYXJjaDohMCxjYXNlU2Vuc2l0aXZlOiExLGFjY2VudGVkU2VhcmNoOiEwLGhpZ2hsaWdodEZpcnN0OiExLGNsb3NlT25TZWxlY3Q6ITAsY2xlYXJPblNlbGVjdDohMCxwb3NpdGlvbjpcImFsbFwiLGFwcGVuZFRhcmdldDpudWxsfSxob29rczp7YmVmb3JlUmVtb3ZlVGFnOigpPT5Qcm9taXNlLnJlc29sdmUoKSxiZWZvcmVQYXN0ZTooKT0+UHJvbWlzZS5yZXNvbHZlKCksc3VnZ2VzdGlvbkNsaWNrOigpPT5Qcm9taXNlLnJlc29sdmUoKX19O2Z1bmN0aW9uIGMoKXt0aGlzLmRyb3Bkb3duPXt9O2ZvcihsZXQgdCBpbiB0aGlzLl9kcm9wZG93bil0aGlzLmRyb3Bkb3duW3RdPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuX2Ryb3Bkb3duW3RdP3RoaXMuX2Ryb3Bkb3duW3RdLmJpbmQodGhpcyk6dGhpcy5fZHJvcGRvd25bdF07dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5lbmFibGVkPj0wJiZ0aGlzLmRyb3Bkb3duLmluaXQoKX12YXIgdSxtPXtpbml0KCl7dGhpcy5ET00uZHJvcGRvd249dGhpcy5wYXJzZVRlbXBsYXRlKFwiZHJvcGRvd25cIixbdGhpcy5zZXR0aW5nc10pLHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQ9dGhpcy5ET00uZHJvcGRvd24ucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25XcmFwcGVyU2VsZWN0b3IpfSxzaG93KHQpe3ZhciBlLGksYSxuPXRoaXMuc2V0dGluZ3Msbz1cIm1peFwiPT1uLm1vZGUmJiFuLmVuZm9yY2VXaGl0ZWxpc3Qscj0hbi53aGl0ZWxpc3R8fCFuLndoaXRlbGlzdC5sZW5ndGgsZD1cIm1hbnVhbFwiPT1uLmRyb3Bkb3duLnBvc2l0aW9uO2lmKHQ9dm9pZCAwPT09dD90aGlzLnN0YXRlLmlucHV0VGV4dDp0LCghcnx8b3x8bi50ZW1wbGF0ZXMuZHJvcGRvd25JdGVtTm9NYXRjaCkmJiExIT09bi5kcm9wZG93bi5lbmFibGUmJiF0aGlzLnN0YXRlLmlzTG9hZGluZyl7aWYoY2xlYXJUaW1lb3V0KHRoaXMuZHJvcGRvd25IaWRlX19iaW5kRXZlbnRzVGltZW91dCksdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXM9dGhpcy5kcm9wZG93bi5maWx0ZXJMaXN0SXRlbXModCksdCYmIXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aCYmKHRoaXMudHJpZ2dlcihcImRyb3Bkb3duOm5vTWF0Y2hcIix0KSxuLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW1Ob01hdGNoJiYoYT1uLnRlbXBsYXRlcy5kcm9wZG93bkl0ZW1Ob01hdGNoLmNhbGwodGhpcyx7dmFsdWU6dH0pKSksIWEpe2lmKHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zLmxlbmd0aCl0JiZvJiYhdGhpcy5zdGF0ZS5lZGl0aW5nLnNjb3BlJiYhcyh0aGlzLnN1Z2dlc3RlZExpc3RJdGVtc1swXS52YWx1ZSx0KSYmdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMudW5zaGlmdCh7dmFsdWU6dH0pO2Vsc2V7aWYoIXR8fCFvfHx0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUpcmV0dXJuIHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzKSx2b2lkIHRoaXMuZHJvcGRvd24uaGlkZSgpO3RoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zPVt7dmFsdWU6dH1dfWk9XCJcIisobChlPXRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zWzBdKT9lLnZhbHVlOmUpLG4uYXV0b0NvbXBsZXRlJiZpJiYwPT1pLmluZGV4T2YodCkmJnRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzLGUpfXRoaXMuZHJvcGRvd24uZmlsbChhKSxuLmRyb3Bkb3duLmhpZ2hsaWdodEZpcnN0JiZ0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbih0aGlzLkRPTS5kcm9wZG93bi5jb250ZW50LmNoaWxkcmVuWzBdKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGV8fHNldFRpbWVvdXQodGhpcy5kcm9wZG93bi5ldmVudHMuYmluZGluZy5iaW5kKHRoaXMpKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnZpc2libGU9dHx8ITAsdGhpcy5zdGF0ZS5kcm9wZG93bi5xdWVyeT10LHRoaXMuc2V0U3RhdGVTZWxlY3Rpb24oKSxkfHxzZXRUaW1lb3V0KCgoKT0+e3RoaXMuZHJvcGRvd24ucG9zaXRpb24oKSx0aGlzLmRyb3Bkb3duLnJlbmRlcigpfSkpLHNldFRpbWVvdXQoKCgpPT57dGhpcy50cmlnZ2VyKFwiZHJvcGRvd246c2hvd1wiLHRoaXMuRE9NLmRyb3Bkb3duKX0pKX19LGhpZGUodCl7dmFyIGU9dGhpcy5ET00saT1lLnNjb3BlLHM9ZS5kcm9wZG93bixhPVwibWFudWFsXCI9PXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ucG9zaXRpb24mJiF0O2lmKHMmJmRvY3VtZW50LmJvZHkuY29udGFpbnMocykmJiFhKXJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuZHJvcGRvd24ucG9zaXRpb24pLHRoaXMuZHJvcGRvd24uZXZlbnRzLmJpbmRpbmcuY2FsbCh0aGlzLCExKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhMSkscy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHMpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlPSExfSksMTAwKSx0aGlzLnN0YXRlLmRyb3Bkb3duLnF1ZXJ5PXRoaXMuc3RhdGUuZGRJdGVtRGF0YT10aGlzLnN0YXRlLmRkSXRlbUVsbT10aGlzLnN0YXRlLnNlbGVjdGlvbj1udWxsLHRoaXMuc3RhdGUudGFnJiZ0aGlzLnN0YXRlLnRhZy52YWx1ZS5sZW5ndGgmJih0aGlzLnN0YXRlLmZsYWdnZWRUYWdzW3RoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXRdPXRoaXMuc3RhdGUudGFnKSx0aGlzLnRyaWdnZXIoXCJkcm9wZG93bjpoaWRlXCIscyksdGhpc30sdG9nZ2xlKHQpe3RoaXMuZHJvcGRvd25bdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiYhdD9cImhpZGVcIjpcInNob3dcIl0oKX0scmVuZGVyKCl7dmFyIHQsZSxpLHM9KHQ9dGhpcy5ET00uZHJvcGRvd24sKGk9dC5jbG9uZU5vZGUoITApKS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246Zml4ZWQ7IHRvcDotOTk5OXB4OyBvcGFjaXR5OjBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGkpLGU9aS5jbGllbnRIZWlnaHQsaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpLGUpLGE9dGhpcy5zZXR0aW5ncztyZXR1cm4gdGhpcy5ET00uc2NvcGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuRE9NLmRyb3Bkb3duKXx8KHRoaXMuRE9NLmRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoYS5jbGFzc05hbWVzLmRyb3Bkb3duSW5pdGFsKSx0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKHMpLGEuZHJvcGRvd24uYXBwZW5kVGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuRE9NLmRyb3Bkb3duKSxzZXRUaW1lb3V0KCgoKT0+dGhpcy5ET00uZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShhLmNsYXNzTmFtZXMuZHJvcGRvd25Jbml0YWwpKSkpLHRoaXN9LGZpbGwodCl7dmFyIGU7dD1cInN0cmluZ1wiPT10eXBlb2YgdD90OnRoaXMuZHJvcGRvd24uY3JlYXRlTGlzdEhUTUwodHx8dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMpLHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnQuaW5uZXJIVE1MPShlPXQpP2UucmVwbGFjZSgvXFw+W1xcclxcbiBdK1xcPC9nLFwiPjxcIikucmVwbGFjZSgvKDwuKj8+KXxcXHMrL2csKCh0LGUpPT5lfHxcIiBcIikpOlwiXCJ9LHJlZmlsdGVyKHQpe3Q9dHx8dGhpcy5zdGF0ZS5kcm9wZG93bi5xdWVyeXx8XCJcIix0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcz10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcyh0KSx0aGlzLmRyb3Bkb3duLmZpbGwoKSx0aGlzLnN1Z2dlc3RlZExpc3RJdGVtcy5sZW5ndGh8fHRoaXMuZHJvcGRvd24uaGlkZSgpLHRoaXMudHJpZ2dlcihcImRyb3Bkb3duOnVwZGF0ZWRcIix0aGlzLkRPTS5kcm9wZG93bil9LHBvc2l0aW9uKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MuZHJvcGRvd247aWYoXCJtYW51YWxcIiE9ZS5wb3NpdGlvbil7dmFyIGkscyxhLG4sbyxyLGw9dGhpcy5ET00uZHJvcGRvd24sZD1lLnBsYWNlQWJvdmUsaD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGc9TWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofHwwLHdpbmRvdy5pbm5lcldpZHRofHwwKT40ODA/ZS5wb3NpdGlvbjpcImFsbFwiLHA9dGhpcy5ET01bXCJpbnB1dFwiPT1nP1wiaW5wdXRcIjpcInNjb3BlXCJdO3Q9dHx8bC5jbGllbnRIZWlnaHQsdGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiYoXCJ0ZXh0XCI9PWc/KGE9KGk9dGhpcy5nZXRDYXJldEdsb2JhbFBvc2l0aW9uKCkpLmJvdHRvbSxzPWkudG9wLG49aS5sZWZ0LG89XCJhdXRvXCIpOihyPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLGk9MDt0OyllKz10Lm9mZnNldExlZnR8fDAsaSs9dC5vZmZzZXRUb3B8fDAsdD10LnBhcmVudE5vZGU7cmV0dXJue2xlZnQ6ZSx0b3A6aX19KHRoaXMuc2V0dGluZ3MuZHJvcGRvd24uYXBwZW5kVGFyZ2V0KSxzPShpPXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLnRvcC1yLnRvcCxhPWkuYm90dG9tLTEtci50b3Asbj1pLmxlZnQtci5sZWZ0LG89aS53aWR0aCtcInB4XCIpLHM9TWF0aC5mbG9vcihzKSxhPU1hdGguY2VpbChhKSxkPXZvaWQgMD09PWQ/aC1pLmJvdHRvbTx0OmQsbC5zdHlsZS5jc3NUZXh0PVwibGVmdDpcIisobit3aW5kb3cucGFnZVhPZmZzZXQpK1wicHg7IHdpZHRoOlwiK28rXCI7XCIrKGQ/XCJ0b3A6IFwiKyhzK3dpbmRvdy5wYWdlWU9mZnNldCkrXCJweFwiOlwidG9wOiBcIisoYSt3aW5kb3cucGFnZVlPZmZzZXQpK1wicHhcIiksbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZW1lbnRcIixkP1widG9wXCI6XCJib3R0b21cIiksbC5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLGcpKX19LGV2ZW50czp7YmluZGluZyh0PSEwKXt2YXIgZT10aGlzLmRyb3Bkb3duLmV2ZW50cy5jYWxsYmFja3MsaT10aGlzLmxpc3RlbmVycy5kcm9wZG93bj10aGlzLmxpc3RlbmVycy5kcm9wZG93bnx8e3Bvc2l0aW9uOnRoaXMuZHJvcGRvd24ucG9zaXRpb24uYmluZCh0aGlzKSxvbktleURvd246ZS5vbktleURvd24uYmluZCh0aGlzKSxvbk1vdXNlT3ZlcjplLm9uTW91c2VPdmVyLmJpbmQodGhpcyksb25Nb3VzZUxlYXZlOmUub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksb25DbGljazplLm9uQ2xpY2suYmluZCh0aGlzKSxvblNjcm9sbDplLm9uU2Nyb2xsLmJpbmQodGhpcyl9LHM9dD9cImFkZEV2ZW50TGlzdGVuZXJcIjpcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjtcIm1hbnVhbFwiIT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLnBvc2l0aW9uJiYod2luZG93W3NdKFwicmVzaXplXCIsaS5wb3NpdGlvbiksd2luZG93W3NdKFwia2V5ZG93blwiLGkub25LZXlEb3duKSksdGhpcy5ET00uZHJvcGRvd25bc10oXCJtb3VzZW92ZXJcIixpLm9uTW91c2VPdmVyKSx0aGlzLkRPTS5kcm9wZG93bltzXShcIm1vdXNlbGVhdmVcIixpLm9uTW91c2VMZWF2ZSksdGhpcy5ET00uZHJvcGRvd25bc10oXCJtb3VzZWRvd25cIixpLm9uQ2xpY2spLHRoaXMuRE9NLmRyb3Bkb3duLmNvbnRlbnRbc10oXCJzY3JvbGxcIixpLm9uU2Nyb2xsKX0sY2FsbGJhY2tzOntvbktleURvd24odCl7dmFyIGU9dGhpcy5ET00uZHJvcGRvd24ucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtQWN0aXZlU2VsZWN0b3IpLGk9dGhpcy5kcm9wZG93bi5nZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZShlKTtzd2l0Y2godC5rZXkpe2Nhc2VcIkFycm93RG93blwiOmNhc2VcIkFycm93VXBcIjpjYXNlXCJEb3duXCI6Y2FzZVwiVXBcIjp2YXIgczt0LnByZXZlbnREZWZhdWx0KCksZSYmKGU9ZVsoXCJBcnJvd1VwXCI9PXQua2V5fHxcIlVwXCI9PXQua2V5P1wicHJldmlvdXNcIjpcIm5leHRcIikrXCJFbGVtZW50U2libGluZ1wiXSksZXx8KHM9dGhpcy5ET00uZHJvcGRvd24uY29udGVudC5jaGlsZHJlbixlPXNbXCJBcnJvd1VwXCI9PXQua2V5fHxcIlVwXCI9PXQua2V5P3MubGVuZ3RoLTE6MF0pLGk9dGhpcy5kcm9wZG93bi5nZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZShlKSx0aGlzLmRyb3Bkb3duLmhpZ2hsaWdodE9wdGlvbihlLCEwKTticmVhaztjYXNlXCJFc2NhcGVcIjpjYXNlXCJFc2NcIjp0aGlzLmRyb3Bkb3duLmhpZGUoKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6aWYodGhpcy5zdGF0ZS5hY3Rpb25zLkFycm93TGVmdClyZXR1cm47Y2FzZVwiVGFiXCI6aWYoXCJtaXhcIiE9dGhpcy5zZXR0aW5ncy5tb2RlJiZlJiYhdGhpcy5zZXR0aW5ncy5hdXRvQ29tcGxldGUucmlnaHRLZXkmJiF0aGlzLnN0YXRlLmVkaXRpbmcpe3QucHJldmVudERlZmF1bHQoKTt2YXIgYT10aGlzLmRyb3Bkb3duLmdldE1hcHBlZFZhbHVlKGkpO3JldHVybiB0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zZXQuY2FsbCh0aGlzLGEpLCExfXJldHVybiEwO2Nhc2VcIkVudGVyXCI6dC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuc2V0dGluZ3MuaG9va3Muc3VnZ2VzdGlvbkNsaWNrKHQse3RhZ2lmeTp0aGlzLHRhZ0RhdGE6aSxzdWdnZXN0aW9uRWxtOmV9KS50aGVuKCgoKT0+e2lmKGUpcmV0dXJuIHRoaXMuZHJvcGRvd24uc2VsZWN0T3B0aW9uKGUpO3RoaXMuZHJvcGRvd24uaGlkZSgpLFwibWl4XCIhPXRoaXMuc2V0dGluZ3MubW9kZSYmdGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRUZXh0LnRyaW0oKSwhMCl9KSkuY2F0Y2goKHQ9PnQpKTticmVhaztjYXNlXCJCYWNrc3BhY2VcIjp7aWYoXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlfHx0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUpcmV0dXJuO2xldCB0PXRoaXMuc3RhdGUuaW5wdXRUZXh0LnRyaW0oKTtcIlwiIT10JiY4MjAzIT10LmNoYXJDb2RlQXQoMCl8fCghMD09PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlP3RoaXMucmVtb3ZlVGFncygpOlwiZWRpdFwiPT10aGlzLnNldHRpbmdzLmJhY2tzcGFjZSYmc2V0VGltZW91dCh0aGlzLmVkaXRUYWcuYmluZCh0aGlzKSwwKSl9fX0sb25Nb3VzZU92ZXIodCl7dmFyIGU9dC50YXJnZXQuY2xvc2VzdCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtU2VsZWN0b3IpO2UmJnRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0T3B0aW9uKGUpfSxvbk1vdXNlTGVhdmUodCl7dGhpcy5kcm9wZG93bi5oaWdobGlnaHRPcHRpb24oKX0sb25DbGljayh0KXtpZigwPT10LmJ1dHRvbiYmdC50YXJnZXQhPXRoaXMuRE9NLmRyb3Bkb3duJiZ0LnRhcmdldCE9dGhpcy5ET00uZHJvcGRvd24uY29udGVudCl7dmFyIGU9dC50YXJnZXQuY2xvc2VzdCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZHJvcGRvd25JdGVtU2VsZWN0b3IpLGk9dGhpcy5kcm9wZG93bi5nZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZShlKTt0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uPSEwLHNldFRpbWVvdXQoKCgpPT50aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uPSExKSw1MCksdGhpcy5zZXR0aW5ncy5ob29rcy5zdWdnZXN0aW9uQ2xpY2sodCx7dGFnaWZ5OnRoaXMsdGFnRGF0YTppLHN1Z2dlc3Rpb25FbG06ZX0pLnRoZW4oKCgpPT57ZT90aGlzLmRyb3Bkb3duLnNlbGVjdE9wdGlvbihlKTp0aGlzLmRyb3Bkb3duLmhpZGUoKX0pKS5jYXRjaCgodD0+dCkpfX0sb25TY3JvbGwodCl7dmFyIGU9dC50YXJnZXQsaT1lLnNjcm9sbFRvcC8oZS5zY3JvbGxIZWlnaHQtZS5wYXJlbnROb2RlLmNsaWVudEhlaWdodCkqMTAwO3RoaXMudHJpZ2dlcihcImRyb3Bkb3duOnNjcm9sbFwiLHtwZXJjZW50YWdlOk1hdGgucm91bmQoaSl9KX19fSxnZXRTdWdnZXN0aW9uRGF0YUJ5Tm9kZSh0KXt2YXIgZT10Pyt0LmdldEF0dHJpYnV0ZShcInRhZ2lmeVN1Z2dlc3Rpb25JZHhcIik6LTE7cmV0dXJuIHRoaXMuc3VnZ2VzdGVkTGlzdEl0ZW1zW2VdfHxudWxsfSxoaWdobGlnaHRPcHRpb24odCxlKXt2YXIgaSxzPXRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5kcm9wZG93bkl0ZW1BY3RpdmU7aWYodGhpcy5zdGF0ZS5kZEl0ZW1FbG0mJih0aGlzLnN0YXRlLmRkSXRlbUVsbS5jbGFzc0xpc3QucmVtb3ZlKHMpLHRoaXMuc3RhdGUuZGRJdGVtRWxtLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIikpLCF0KXJldHVybiB0aGlzLnN0YXRlLmRkSXRlbURhdGE9bnVsbCx0aGlzLnN0YXRlLmRkSXRlbUVsbT1udWxsLHZvaWQgdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpO2k9dGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXNbdGhpcy5nZXROb2RlSW5kZXgodCldLHRoaXMuc3RhdGUuZGRJdGVtRGF0YT1pLHRoaXMuc3RhdGUuZGRJdGVtRWxtPXQsdC5jbGFzc0xpc3QuYWRkKHMpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCEwKSxlJiYodC5wYXJlbnROb2RlLnNjcm9sbFRvcD10LmNsaWVudEhlaWdodCt0Lm9mZnNldFRvcC10LnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KSx0aGlzLnNldHRpbmdzLmF1dG9Db21wbGV0ZSYmKHRoaXMuaW5wdXQuYXV0b2NvbXBsZXRlLnN1Z2dlc3QuY2FsbCh0aGlzLGkpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKSl9LHNlbGVjdE9wdGlvbih0KXt2YXIgZSxpPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24scz1pLmNsZWFyT25TZWxlY3QsYT1pLmNsb3NlT25TZWxlY3Q7aWYoIXQpcmV0dXJuIGU9dGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRUZXh0LCEwKSx2b2lkKGEmJnRoaXMuZHJvcGRvd24uaGlkZSgpKTt2YXIgbj10LmdldEF0dHJpYnV0ZShcInRhZ2lmeVN1Z2dlc3Rpb25JZHhcIiksbz10aGlzLnN1Z2dlc3RlZExpc3RJdGVtc1srbl07dGhpcy50cmlnZ2VyKFwiZHJvcGRvd246c2VsZWN0XCIse2RhdGE6byxlbG06dH0pLG4mJm8/KHRoaXMuc3RhdGUuZWRpdGluZz90aGlzLm9uRWRpdFRhZ0RvbmUobnVsbCxkKHtfX2lzVmFsaWQ6ITB9LG8pKTplPXRoaXNbXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP1wiYWRkTWl4VGFnc1wiOlwiYWRkVGFnc1wiXShbb10scyksdGhpcy5ET00uaW5wdXQucGFyZW50Tm9kZSYmKHNldFRpbWVvdXQoKCgpPT57dGhpcy5ET00uaW5wdXQuZm9jdXMoKSx0aGlzLnRvZ2dsZUZvY3VzQ2xhc3MoITApLHRoaXMucGxhY2VDYXJldEFmdGVyTm9kZShlKX0pKSxhP3NldFRpbWVvdXQodGhpcy5kcm9wZG93bi5oaWRlLmJpbmQodGhpcykpOnRoaXMuZHJvcGRvd24ucmVmaWx0ZXIoKSkpOnRoaXMuZHJvcGRvd24uaGlkZSgpfSxzZWxlY3RBbGwoKXtyZXR1cm4gdGhpcy5zdWdnZXN0ZWRMaXN0SXRlbXMubGVuZ3RoPTAsdGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy5hZGRUYWdzKHRoaXMuZHJvcGRvd24uZmlsdGVyTGlzdEl0ZW1zKFwiXCIpLCEwKSx0aGlzfSxmaWx0ZXJMaXN0SXRlbXModCxlKXt2YXIgaSxzLGEsbixvLHI9dGhpcy5zZXR0aW5ncyxkPXIuZHJvcGRvd24sZz0oZT1lfHx7fSx0PVwic2VsZWN0XCI9PXIubW9kZSYmdGhpcy52YWx1ZS5sZW5ndGgmJnRoaXMudmFsdWVbMF1bci50YWdUZXh0UHJvcF09PXQ/XCJcIjp0LFtdKSxwPXIud2hpdGVsaXN0LGM9ZC5tYXhJdGVtc3x8MS8wLHU9ZC5zZWFyY2hLZXlzLG09MDtpZighdHx8IXUubGVuZ3RoKXJldHVybihyLmR1cGxpY2F0ZXM/cDpwLmZpbHRlcigodD0+IXRoaXMuaXNUYWdEdXBsaWNhdGUobCh0KT90LnZhbHVlOnQpKSkpLnNsaWNlKDAsYyk7ZnVuY3Rpb24gdih0LGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmV2ZXJ5KChlPT50LmluY2x1ZGVzKGUudG9Mb3dlckNhc2UoKSkpKX1mb3Iobz1kLmNhc2VTZW5zaXRpdmU/XCJcIit0OihcIlwiK3QpLnRvTG93ZXJDYXNlKCk7bTxwLmxlbmd0aDttKyspe2k9cFttXWluc3RhbmNlb2YgT2JqZWN0P3BbbV06e3ZhbHVlOnBbbV19O2xldCB0PSFPYmplY3Qua2V5cyhpKS5zb21lKCh0PT51LmluY2x1ZGVzKHQpKSk/W1widmFsdWVcIl06dTtpZihkLmZ1enp5U2VhcmNoJiYhZS5leGFjdD8oYT10LnJlZHVjZSgoKHQsZSk9PnQrXCIgXCIrKGlbZV18fFwiXCIpKSxcIlwiKS50b0xvd2VyQ2FzZSgpLGQuYWNjZW50ZWRTZWFyY2gmJihhPWgoYSksbz1oKG8pKSxzPXYoYSxvKSk6cz10LnNvbWUoKHQ9Pnt2YXIgcz1cIlwiKyhpW3RdfHxcIlwiKTtyZXR1cm4gZC5hY2NlbnRlZFNlYXJjaCYmKHM9aChzKSxvPWgobykpLGQuY2FzZVNlbnNpdGl2ZXx8KHM9cy50b0xvd2VyQ2FzZSgpKSxlLmV4YWN0P3M9PW86MD09cy5pbmRleE9mKG8pfSkpLG49IXIuZHVwbGljYXRlcyYmdGhpcy5pc1RhZ0R1cGxpY2F0ZShsKGkpP2kudmFsdWU6aSkscyYmIW4mJmMtLSYmZy5wdXNoKGkpLDA9PWMpYnJlYWt9cmV0dXJuIGd9LGdldE1hcHBlZFZhbHVlKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MuZHJvcGRvd24ubWFwVmFsdWVUbztyZXR1cm4gZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UodCk6dFtlXXx8dC52YWx1ZTp0LnZhbHVlfSxjcmVhdGVMaXN0SFRNTCh0KXtyZXR1cm4gZChbXSx0KS5tYXAoKCh0LGUpPT57XCJzdHJpbmdcIiE9dHlwZW9mIHQmJlwibnVtYmVyXCIhPXR5cGVvZiB0fHwodD17dmFsdWU6dH0pO3ZhciBpPXRoaXMuZHJvcGRvd24uZ2V0TWFwcGVkVmFsdWUodCk7dC52YWx1ZT1pJiZcInN0cmluZ1wiPT10eXBlb2YgaT9yKGkpOmk7dmFyIHM9dGhpcy5zZXR0aW5ncy50ZW1wbGF0ZXMuZHJvcGRvd25JdGVtLmFwcGx5KHRoaXMsW3QsdGhpc10pO3JldHVybiBzPXMucmVwbGFjZSgvXFxzKnRhZ2lmeVN1Z2dlc3Rpb25JZHg9KFtcIiddKSguKj8pXFwxL2dpbSxcIlwiKS5yZXBsYWNlKFwiPlwiLGAgdGFnaWZ5U3VnZ2VzdGlvbklkeD1cIiR7ZX1cIj5gKX0pKS5qb2luKFwiXCIpfX0sdj17ZW1wdHk6XCJlbXB0eVwiLGV4Y2VlZDpcIm51bWJlciBvZiB0YWdzIGV4Y2VlZGVkXCIscGF0dGVybjpcInBhdHRlcm4gbWlzbWF0Y2hcIixkdXBsaWNhdGU6XCJhbHJlYWR5IGV4aXN0c1wiLG5vdEFsbG93ZWQ6XCJub3QgYWxsb3dlZFwifSxmPXt3cmFwcGVyOih0LGUpPT5gPHRhZ3MgY2xhc3M9XCIke2UuY2xhc3NOYW1lcy5uYW1lc3BhY2V9ICR7ZS5tb2RlP2Ake2UuY2xhc3NOYW1lc1tlLm1vZGUrXCJNb2RlXCJdfWA6XCJcIn0gJHt0LmNsYXNzTmFtZX1cIlxcbiAgICAgICAgICAgICAgICAgICAgJHtlLnJlYWRvbmx5P1wicmVhZG9ubHlcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgJHtlLmRpc2FibGVkP1wiZGlzYWJsZWRcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgJHtlLnJlcXVpcmVkP1wicmVxdWlyZWRcIjpcIlwifVxcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiPlxcbiAgICAgICAgICAgIDxzcGFuICR7IWUucmVhZG9ubHkmJmUudXNlcklucHV0P1wiY29udGVudGVkaXRhYmxlXCI6XCJcIn0gdGFiSW5kZXg9XCIwXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7ZS5wbGFjZWhvbGRlcnx8XCImIzgyMDM7XCJ9XCIgYXJpYS1wbGFjZWhvbGRlcj1cIiR7ZS5wbGFjZWhvbGRlcnx8XCJcIn1cIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7ZS5jbGFzc05hbWVzLmlucHV0fVwiXFxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcXG4gICAgICAgICAgICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJib3RoXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1tdWx0aWxpbmU9XCIke1wibWl4XCI9PWUubW9kZX1cIj48L3NwYW4+XFxuICAgICAgICA8L3RhZ3M+YCx0YWcodCxlKXt2YXIgaT10aGlzLnNldHRpbmdzO3JldHVybmA8dGFnIHRpdGxlPVwiJHt0LnRpdGxlfHx0LnZhbHVlfVwiXFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ZWRpdGFibGU9J2ZhbHNlJ1xcbiAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz0nZmFsc2UnXFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIiR7aS5hMTF5LmZvY3VzYWJsZVRhZ3M/MDotMX1cIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke2kuY2xhc3NOYW1lcy50YWd9ICR7dC5jbGFzc3x8XCJcIn1cIlxcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldEF0dHJpYnV0ZXModCl9PlxcbiAgICAgICAgICAgIDx4IHRpdGxlPScnIGNsYXNzPVwiJHtpLmNsYXNzTmFtZXMudGFnWH1cIiByb2xlPSdidXR0b24nIGFyaWEtbGFiZWw9J3JlbW92ZSB0YWcnPjwveD5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7aS5jbGFzc05hbWVzLnRhZ1RleHR9XCI+JHt0W2kudGFnVGV4dFByb3BdfHx0LnZhbHVlfTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvdGFnPmB9LGRyb3Bkb3duKHQpe3ZhciBlPXQuZHJvcGRvd24saT1cIm1hbnVhbFwiPT1lLnBvc2l0aW9uLHM9YCR7dC5jbGFzc05hbWVzLmRyb3Bkb3dufWA7cmV0dXJuYDxkaXYgY2xhc3M9XCIke2k/XCJcIjpzfSAke2UuY2xhc3NuYW1lfVwiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3QuY2xhc3NOYW1lcy5kcm9wZG93bldyYXBwZXJ9XCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PmB9LGRyb3Bkb3duSXRlbSh0LGUpe3JldHVybmA8ZGl2ICR7dGhpcy5nZXRBdHRyaWJ1dGVzKHQpfVxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9JyR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLmRyb3Bkb3duSXRlbX0gJHt0LmNsYXNzP3QuY2xhc3M6XCJcIn0nXFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm9wdGlvblwiPiR7dC52YWx1ZX08L2Rpdj5gfSxkcm9wZG93bkl0ZW1Ob01hdGNoOm51bGx9O3ZhciBUPXtjdXN0b21CaW5kaW5nKCl7dGhpcy5jdXN0b21FdmVudHNMaXN0LmZvckVhY2goKHQ9Pnt0aGlzLm9uKHQsdGhpcy5zZXR0aW5ncy5jYWxsYmFja3NbdF0pfSkpfSxiaW5kaW5nKHQ9ITApe3ZhciBlLGk9dGhpcy5ldmVudHMuY2FsbGJhY2tzLHM9dD9cImFkZEV2ZW50TGlzdGVuZXJcIjpcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjtpZighdGhpcy5zdGF0ZS5tYWluRXZlbnRzfHwhdClmb3IodmFyIGEgaW4gdGhpcy5zdGF0ZS5tYWluRXZlbnRzPXQsdCYmIXRoaXMubGlzdGVuZXJzLm1haW4mJih0aGlzLmV2ZW50cy5iaW5kR2xvYmFsLmNhbGwodGhpcyksdGhpcy5zZXR0aW5ncy5pc0pRdWVyeVBsdWdpbiYmalF1ZXJ5KHRoaXMuRE9NLm9yaWdpbmFsSW5wdXQpLm9uKFwidGFnaWZ5LnJlbW92ZUFsbFRhZ3NcIix0aGlzLnJlbW92ZUFsbFRhZ3MuYmluZCh0aGlzKSkpLGU9dGhpcy5saXN0ZW5lcnMubWFpbj10aGlzLmxpc3RlbmVycy5tYWlufHx7Zm9jdXM6W1wiaW5wdXRcIixpLm9uRm9jdXNCbHVyLmJpbmQodGhpcyldLGtleWRvd246W1wiaW5wdXRcIixpLm9uS2V5ZG93bi5iaW5kKHRoaXMpXSxjbGljazpbXCJzY29wZVwiLGkub25DbGlja1Njb3BlLmJpbmQodGhpcyldLGRibGNsaWNrOltcInNjb3BlXCIsaS5vbkRvdWJsZUNsaWNrU2NvcGUuYmluZCh0aGlzKV0scGFzdGU6W1wiaW5wdXRcIixpLm9uUGFzdGUuYmluZCh0aGlzKV19KXRoaXMuRE9NW2VbYV1bMF1dW3NdKGEsZVthXVsxXSl9LGJpbmRHbG9iYWwodCl7dmFyIGUsaT10aGlzLmV2ZW50cy5jYWxsYmFja3Mscz10P1wicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOlwiYWRkRXZlbnRMaXN0ZW5lclwiO2lmKHR8fCF0aGlzLmxpc3RlbmVycy5nbG9iYWwpZm9yKGUgb2YodGhpcy5saXN0ZW5lcnMuZ2xvYmFsPXRoaXMubGlzdGVuZXJzJiZ0aGlzLmxpc3RlbmVycy5nbG9iYWx8fFt7dHlwZTp0aGlzLmlzSUU/XCJrZXlkb3duXCI6XCJpbnB1dFwiLHRhcmdldDp0aGlzLkRPTS5pbnB1dCxjYjppW3RoaXMuaXNJRT9cIm9uSW5wdXRJRVwiOlwib25JbnB1dFwiXS5iaW5kKHRoaXMpfSx7dHlwZTpcImtleWRvd25cIix0YXJnZXQ6d2luZG93LGNiOmkub25XaW5kb3dLZXlEb3duLmJpbmQodGhpcyl9LHt0eXBlOlwiYmx1clwiLHRhcmdldDp0aGlzLkRPTS5pbnB1dCxjYjppLm9uRm9jdXNCbHVyLmJpbmQodGhpcyl9XSx0aGlzLmxpc3RlbmVycy5nbG9iYWwpKWUudGFyZ2V0W3NdKGUudHlwZSxlLmNiKX0sdW5iaW5kR2xvYmFsKCl7dGhpcy5ldmVudHMuYmluZEdsb2JhbC5jYWxsKHRoaXMsITApfSxjYWxsYmFja3M6e29uRm9jdXNCbHVyKHQpe3ZhciBlPXQudGFyZ2V0P3RoaXMudHJpbSh0LnRhcmdldC50ZXh0Q29udGVudCk6XCJcIixpPXRoaXMuc2V0dGluZ3Mscz10LnR5cGUsYT1pLmRyb3Bkb3duLmVuYWJsZWQ+PTAsbj17cmVsYXRlZFRhcmdldDp0LnJlbGF0ZWRUYXJnZXR9LG89dGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbiYmKGF8fCFpLmRyb3Bkb3duLmNsb3NlT25TZWxlY3QpLHI9dGhpcy5zdGF0ZS5hY3Rpb25zLmFkZE5ldyYmYSxsPXQucmVsYXRlZFRhcmdldCYmdC5yZWxhdGVkVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhpLmNsYXNzTmFtZXMudGFnKSYmdGhpcy5ET00uc2NvcGUuY29udGFpbnModC5yZWxhdGVkVGFyZ2V0KTtpZihcImJsdXJcIj09cyl7aWYodC5yZWxhdGVkVGFyZ2V0PT09dGhpcy5ET00uc2NvcGUpcmV0dXJuIHRoaXMuZHJvcGRvd24uaGlkZSgpLHZvaWQgdGhpcy5ET00uaW5wdXQuZm9jdXMoKTt0aGlzLnBvc3RVcGRhdGUoKSx0aGlzLnRyaWdnZXJDaGFuZ2VFdmVudCgpfWlmKCFvJiYhcilpZih0aGlzLnN0YXRlLmhhc0ZvY3VzPVwiZm9jdXNcIj09cyYmK25ldyBEYXRlLHRoaXMudG9nZ2xlRm9jdXNDbGFzcyh0aGlzLnN0YXRlLmhhc0ZvY3VzKSxcIm1peFwiIT1pLm1vZGUpe2lmKFwiZm9jdXNcIj09cylyZXR1cm4gdGhpcy50cmlnZ2VyKFwiZm9jdXNcIixuKSx2b2lkKDAhPT1pLmRyb3Bkb3duLmVuYWJsZWQmJmkudXNlcklucHV0fHx0aGlzLmRyb3Bkb3duLnNob3coKSk7XCJibHVyXCI9PXMmJih0aGlzLnRyaWdnZXIoXCJibHVyXCIsbiksdGhpcy5sb2FkaW5nKCExKSxcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJmwmJihlPVwiXCIpLChcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJmU/IXRoaXMudmFsdWUubGVuZ3RofHx0aGlzLnZhbHVlWzBdLnZhbHVlIT1lOmUmJiF0aGlzLnN0YXRlLmFjdGlvbnMuc2VsZWN0T3B0aW9uJiZpLmFkZFRhZ09uQmx1cikmJnRoaXMuYWRkVGFncyhlLCEwKSxcInNlbGVjdFwiIT10aGlzLnNldHRpbmdzLm1vZGV8fGV8fHRoaXMucmVtb3ZlVGFncygpKSx0aGlzLkRPTS5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSx0aGlzLmRyb3Bkb3duLmhpZGUoKX1lbHNlXCJmb2N1c1wiPT1zP3RoaXMudHJpZ2dlcihcImZvY3VzXCIsbik6XCJibHVyXCI9PXQudHlwZSYmKHRoaXMudHJpZ2dlcihcImJsdXJcIixuKSx0aGlzLmxvYWRpbmcoITEpLHRoaXMuZHJvcGRvd24uaGlkZSgpLHRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT12b2lkIDAsdGhpcy5zZXRTdGF0ZVNlbGVjdGlvbigpKX0sb25XaW5kb3dLZXlEb3duKHQpe3ZhciBlLGk9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpZihpLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnKSYmdGhpcy5ET00uc2NvcGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpc3dpdGNoKGU9aS5uZXh0RWxlbWVudFNpYmxpbmcsdC5rZXkpe2Nhc2VcIkJhY2tzcGFjZVwiOnRoaXMucmVtb3ZlVGFncyhpKSwoZXx8dGhpcy5ET00uaW5wdXQpLmZvY3VzKCk7YnJlYWs7Y2FzZVwiRW50ZXJcIjpzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDAsaSl9fSxvbktleWRvd24odCl7XCJzZWxlY3RcIj09dGhpcy5zZXR0aW5ncy5tb2RlJiZ0aGlzLnNldHRpbmdzLmVuZm9yY2VXaGl0ZWxpc3QmJnRoaXMudmFsdWUubGVuZ3RoJiZ0LnByZXZlbnREZWZhdWx0KCk7dmFyIGU9dGhpcy50cmltKHQudGFyZ2V0LnRleHRDb250ZW50KTtpZih0aGlzLnRyaWdnZXIoXCJrZXlkb3duXCIse29yaWdpbmFsRXZlbnQ6dGhpcy5jbG9uZUV2ZW50KHQpfSksXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlKXtzd2l0Y2godC5rZXkpe2Nhc2VcIkxlZnRcIjpjYXNlXCJBcnJvd0xlZnRcIjp0aGlzLnN0YXRlLmFjdGlvbnMuQXJyb3dMZWZ0PSEwO2JyZWFrO2Nhc2VcIkRlbGV0ZVwiOmNhc2VcIkJhY2tzcGFjZVwiOmlmKHRoaXMuc3RhdGUuZWRpdGluZylyZXR1cm47dmFyIGkscyxhLHI9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCksbD1cIkRlbGV0ZVwiPT10LmtleSYmci5hbmNob3JPZmZzZXQ9PShyLmFuY2hvck5vZGUubGVuZ3RofHwwKSxkPTE9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZXx8IXIuYW5jaG9yT2Zmc2V0JiZyLmFuY2hvck5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyxoPW4odGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MKSxwPXRoaXMuZ2V0VGFnRWxtcygpO2lmKFwiZWRpdFwiPT10aGlzLnNldHRpbmdzLmJhY2tzcGFjZSYmZClyZXR1cm4gaT0xPT1yLmFuY2hvck5vZGUubm9kZVR5cGU/bnVsbDpyLmFuY2hvck5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyxzZXRUaW1lb3V0KHRoaXMuZWRpdFRhZy5iaW5kKHRoaXMpLDAsaSksdm9pZCB0LnByZXZlbnREZWZhdWx0KCk7aWYoZygpJiZkKXJldHVybiBhPW8oZCksZC5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKXx8ZC5yZW1vdmUoKSx0aGlzLkRPTS5pbnB1dC5mb2N1cygpLHZvaWQgc2V0VGltZW91dCgoKCk9Pnt0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUoYSksdGhpcy5ET00uaW5wdXQuY2xpY2soKX0pKTtpZihcIkJSXCI9PXIuYW5jaG9yTm9kZS5ub2RlTmFtZSlyZXR1cm47aWYoKGx8fGQpJiYxPT1yLmFuY2hvck5vZGUubm9kZVR5cGU/cz0wPT1yLmFuY2hvck9mZnNldD9sP3BbMF06bnVsbDpwW3IuYW5jaG9yT2Zmc2V0LTFdOmw/cz1yLmFuY2hvck5vZGUubmV4dEVsZW1lbnRTaWJsaW5nOmQmJihzPWQpLDM9PXIuYW5jaG9yTm9kZS5ub2RlVHlwZSYmIXIuYW5jaG9yTm9kZS5ub2RlVmFsdWUmJnIuYW5jaG9yTm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nJiZ0LnByZXZlbnREZWZhdWx0KCksKGR8fGwpJiYhdGhpcy5zZXR0aW5ncy5iYWNrc3BhY2UpcmV0dXJuIHZvaWQgdC5wcmV2ZW50RGVmYXVsdCgpO2lmKFwiUmFuZ2VcIiE9ci50eXBlJiYhci5hbmNob3JPZmZzZXQmJnIuYW5jaG9yTm9kZT09dGhpcy5ET00uaW5wdXQmJlwiRGVsZXRlXCIhPXQua2V5KXJldHVybiB2b2lkIHQucHJldmVudERlZmF1bHQoKTtpZihcIlJhbmdlXCIhPXIudHlwZSYmcyYmcy5oYXNBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSlyZXR1cm4gdm9pZCB0aGlzLnBsYWNlQ2FyZXRBZnRlck5vZGUobyhzKSk7Y2xlYXJUaW1lb3V0KHUpLHU9c2V0VGltZW91dCgoKCk9Pnt2YXIgdD1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKSxlPW4odGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MKSxpPSFsJiZ0LmFuY2hvck5vZGUucHJldmlvdXNFbGVtZW50U2libGluZztpZighZygpJiZlLmxlbmd0aD49aC5sZW5ndGgmJmkmJiFpLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpJiYodGhpcy5yZW1vdmVUYWdzKGkpLHRoaXMuZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCksMj09dGhpcy5ET00uaW5wdXQuY2hpbGRyZW4ubGVuZ3RoJiZcIkJSXCI9PXRoaXMuRE9NLmlucHV0LmNoaWxkcmVuWzFdLnRhZ05hbWUpKXJldHVybiB0aGlzLkRPTS5pbnB1dC5pbm5lckhUTUw9XCJcIix0aGlzLnZhbHVlLmxlbmd0aD0wLCEwO3RoaXMudmFsdWU9W10ubWFwLmNhbGwocCwoKHQsZSk9Pnt2YXIgaT10aGlzLnRhZ0RhdGEodCk7aWYodC5wYXJlbnROb2RlfHxpLnJlYWRvbmx5KXJldHVybiBpO3RoaXMudHJpZ2dlcihcInJlbW92ZVwiLHt0YWc6dCxpbmRleDplLGRhdGE6aX0pfSkpLmZpbHRlcigodD0+dCkpfSksMjApfXJldHVybiEwfXN3aXRjaCh0LmtleSl7Y2FzZVwiQmFja3NwYWNlXCI6XCJzZWxlY3RcIj09dGhpcy5zZXR0aW5ncy5tb2RlJiZ0aGlzLnNldHRpbmdzLmVuZm9yY2VXaGl0ZWxpc3Q/dGhpcy5yZW1vdmVUYWdzKCk6dGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlJiZcIm1hbnVhbFwiIT10aGlzLnNldHRpbmdzLmRyb3Bkb3duLnBvc2l0aW9ufHxcIlwiIT1lJiY4MjAzIT1lLmNoYXJDb2RlQXQoMCl8fCghMD09PXRoaXMuc2V0dGluZ3MuYmFja3NwYWNlP3RoaXMucmVtb3ZlVGFncygpOlwiZWRpdFwiPT10aGlzLnNldHRpbmdzLmJhY2tzcGFjZSYmc2V0VGltZW91dCh0aGlzLmVkaXRUYWcuYmluZCh0aGlzKSwwKSk7YnJlYWs7Y2FzZVwiRXNjXCI6Y2FzZVwiRXNjYXBlXCI6aWYodGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlKXJldHVybjt0LnRhcmdldC5ibHVyKCk7YnJlYWs7Y2FzZVwiRG93blwiOmNhc2VcIkFycm93RG93blwiOnRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZXx8dGhpcy5kcm9wZG93bi5zaG93KCk7YnJlYWs7Y2FzZVwiQXJyb3dSaWdodFwiOntsZXQgdD10aGlzLnN0YXRlLmlucHV0U3VnZ2VzdGlvbnx8dGhpcy5zdGF0ZS5kZEl0ZW1EYXRhO2lmKHQmJnRoaXMuc2V0dGluZ3MuYXV0b0NvbXBsZXRlLnJpZ2h0S2V5KXJldHVybiB2b2lkIHRoaXMuYWRkVGFncyhbdF0sITApO2JyZWFrfWNhc2VcIlRhYlwiOntsZXQgaT1cInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGU7aWYoIWV8fGkpcmV0dXJuITA7dC5wcmV2ZW50RGVmYXVsdCgpfWNhc2VcIkVudGVyXCI6aWYodGhpcy5zdGF0ZS5kcm9wZG93bi52aXNpYmxlfHwyMjk9PXQua2V5Q29kZSlyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpLHNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbnx8dGhpcy5hZGRUYWdzKGUsITApfSkpfX0sb25JbnB1dCh0KXtpZihcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGUpcmV0dXJuIHRoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbk1peFRhZ3NJbnB1dC5jYWxsKHRoaXMsdCk7dmFyIGU9dGhpcy5pbnB1dC5ub3JtYWxpemUuY2FsbCh0aGlzKSxpPWUubGVuZ3RoPj10aGlzLnNldHRpbmdzLmRyb3Bkb3duLmVuYWJsZWQscz17dmFsdWU6ZSxpbnB1dEVsbTp0aGlzLkRPTS5pbnB1dH07cy5pc1ZhbGlkPXRoaXMudmFsaWRhdGVUYWcoe3ZhbHVlOmV9KSx0aGlzLnN0YXRlLmlucHV0VGV4dCE9ZSYmKHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyxlLCExKSwtMSE9ZS5zZWFyY2godGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXJzKT90aGlzLmFkZFRhZ3MoZSkmJnRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyk6dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5lbmFibGVkPj0wJiZ0aGlzLmRyb3Bkb3duW2k/XCJzaG93XCI6XCJoaWRlXCJdKGUpLHRoaXMudHJpZ2dlcihcImlucHV0XCIscykpfSxvbk1peFRhZ3NJbnB1dCh0KXt2YXIgZSxpLHMsYSxuLG8scixsLGg9dGhpcy5zZXR0aW5ncyxwPXRoaXMudmFsdWUubGVuZ3RoLGM9dGhpcy5nZXRUYWdFbG1zKCksdT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT13aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSx2PVtdLm1hcC5jYWxsKGMsKHQ9PnRoaXMudGFnRGF0YSh0KS52YWx1ZSkpO2lmKFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCI9PXQuaW5wdXRUeXBlJiZnKCkmJnRoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbktleWRvd24uY2FsbCh0aGlzLHt0YXJnZXQ6dC50YXJnZXQsa2V5OlwiQmFja3NwYWNlXCJ9KSx0aGlzLnZhbHVlLnNsaWNlKCkuZm9yRWFjaCgodD0+e3QucmVhZG9ubHkmJiF2LmluY2x1ZGVzKHQudmFsdWUpJiZ1LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGFnRWxlbSh0KSl9KSksdS5jaGlsZE5vZGVzLmxlbmd0aCYmKG0uaW5zZXJ0Tm9kZSh1KSx0aGlzLnNldFJhbmdlQXRTdGFydEVuZCghMSx1Lmxhc3RDaGlsZCkpLGMubGVuZ3RoIT1wKXJldHVybiB0aGlzLnZhbHVlPVtdLm1hcC5jYWxsKHRoaXMuZ2V0VGFnRWxtcygpLCh0PT50aGlzLnRhZ0RhdGEodCkpKSx2b2lkIHRoaXMudXBkYXRlKHt3aXRob3V0Q2hhbmdlRXZlbnQ6ITB9KTtpZih0aGlzLmhhc01heFRhZ3MoKSlyZXR1cm4hMDtpZih3aW5kb3cuZ2V0U2VsZWN0aW9uJiYobz13aW5kb3cuZ2V0U2VsZWN0aW9uKCkpLnJhbmdlQ291bnQ+MCYmMz09by5hbmNob3JOb2RlLm5vZGVUeXBlKXtpZigobT1vLmdldFJhbmdlQXQoMCkuY2xvbmVSYW5nZSgpKS5jb2xsYXBzZSghMCksbS5zZXRTdGFydChvLmZvY3VzTm9kZSwwKSxzPShlPW0udG9TdHJpbmcoKS5zbGljZSgwLG0uZW5kT2Zmc2V0KSkuc3BsaXQoaC5wYXR0ZXJuKS5sZW5ndGgtMSwoaT1lLm1hdGNoKGgucGF0dGVybikpJiYoYT1lLnNsaWNlKGUubGFzdEluZGV4T2YoaVtpLmxlbmd0aC0xXSkpKSxhKXtpZih0aGlzLnN0YXRlLmFjdGlvbnMuQXJyb3dMZWZ0PSExLHRoaXMuc3RhdGUudGFnPXtwcmVmaXg6YS5tYXRjaChoLnBhdHRlcm4pWzBdLHZhbHVlOmEucmVwbGFjZShoLnBhdHRlcm4sXCJcIil9LHRoaXMuc3RhdGUudGFnLmJhc2VPZmZzZXQ9by5iYXNlT2Zmc2V0LXRoaXMuc3RhdGUudGFnLnZhbHVlLmxlbmd0aCxsPXRoaXMuc3RhdGUudGFnLnZhbHVlLm1hdGNoKGguZGVsaW1pdGVycykpcmV0dXJuIHRoaXMuc3RhdGUudGFnLnZhbHVlPXRoaXMuc3RhdGUudGFnLnZhbHVlLnJlcGxhY2UoaC5kZWxpbWl0ZXJzLFwiXCIpLHRoaXMuc3RhdGUudGFnLmRlbGltaXRlcnM9bFswXSx0aGlzLmFkZFRhZ3ModGhpcy5zdGF0ZS50YWcudmFsdWUsaC5kcm9wZG93bi5jbGVhck9uU2VsZWN0KSx2b2lkIHRoaXMuZHJvcGRvd24uaGlkZSgpO249dGhpcy5zdGF0ZS50YWcudmFsdWUubGVuZ3RoPj1oLmRyb3Bkb3duLmVuYWJsZWQ7dHJ5e3I9KHI9dGhpcy5zdGF0ZS5mbGFnZ2VkVGFnc1t0aGlzLnN0YXRlLnRhZy5iYXNlT2Zmc2V0XSkucHJlZml4PT10aGlzLnN0YXRlLnRhZy5wcmVmaXgmJnIudmFsdWVbMF09PXRoaXMuc3RhdGUudGFnLnZhbHVlWzBdLHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF0mJiF0aGlzLnN0YXRlLnRhZy52YWx1ZSYmZGVsZXRlIHRoaXMuc3RhdGUuZmxhZ2dlZFRhZ3NbdGhpcy5zdGF0ZS50YWcuYmFzZU9mZnNldF19Y2F0Y2godCl7fShyfHxzPHRoaXMuc3RhdGUubWl4TW9kZS5tYXRjaGVkUGF0dGVybkNvdW50KSYmKG49ITEpfWVsc2UgdGhpcy5zdGF0ZS5mbGFnZ2VkVGFncz17fTt0aGlzLnN0YXRlLm1peE1vZGUubWF0Y2hlZFBhdHRlcm5Db3VudD1zfXNldFRpbWVvdXQoKCgpPT57dGhpcy51cGRhdGUoe3dpdGhvdXRDaGFuZ2VFdmVudDohMH0pLHRoaXMudHJpZ2dlcihcImlucHV0XCIsZCh7fSx0aGlzLnN0YXRlLnRhZyx7dGV4dENvbnRlbnQ6dGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnR9KSksdGhpcy5zdGF0ZS50YWcmJnRoaXMuZHJvcGRvd25bbj9cInNob3dcIjpcImhpZGVcIl0odGhpcy5zdGF0ZS50YWcudmFsdWUpfSksMTApfSxvbklucHV0SUUodCl7dmFyIGU9dGhpcztzZXRUaW1lb3V0KChmdW5jdGlvbigpe2UuZXZlbnRzLmNhbGxiYWNrcy5vbklucHV0LmNhbGwoZSx0KX0pKX0sb25DbGlja1Njb3BlKHQpe3ZhciBlPXRoaXMuc2V0dGluZ3MsaT10LnRhcmdldC5jbG9zZXN0KFwiLlwiK2UuY2xhc3NOYW1lcy50YWcpLHM9K25ldyBEYXRlLXRoaXMuc3RhdGUuaGFzRm9jdXM7aWYodC50YXJnZXQhPXRoaXMuRE9NLnNjb3BlKXtpZighdC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGUuY2xhc3NOYW1lcy50YWdYKSlyZXR1cm4gaT8odGhpcy50cmlnZ2VyKFwiY2xpY2tcIix7dGFnOmksaW5kZXg6dGhpcy5nZXROb2RlSW5kZXgoaSksZGF0YTp0aGlzLnRhZ0RhdGEoaSksb3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQodCl9KSx2b2lkKDEhPT1lLmVkaXRUYWdzJiYxIT09ZS5lZGl0VGFncy5jbGlja3N8fHRoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbkRvdWJsZUNsaWNrU2NvcGUuY2FsbCh0aGlzLHQpKSk6dm9pZCh0LnRhcmdldD09dGhpcy5ET00uaW5wdXQmJihcIm1peFwiPT1lLm1vZGUmJnRoaXMuZml4RmlyZWZveExhc3RUYWdOb0NhcmV0KCkscz41MDApP3RoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZT90aGlzLmRyb3Bkb3duLmhpZGUoKTowPT09ZS5kcm9wZG93bi5lbmFibGVkJiZcIm1peFwiIT1lLm1vZGUmJnRoaXMuZHJvcGRvd24uc2hvdygpOlwic2VsZWN0XCI9PWUubW9kZSYmIXRoaXMuc3RhdGUuZHJvcGRvd24udmlzaWJsZSYmdGhpcy5kcm9wZG93bi5zaG93KCkpO3RoaXMucmVtb3ZlVGFncyh0LnRhcmdldC5wYXJlbnROb2RlKX1lbHNlIHRoaXMuc3RhdGUuaGFzRm9jdXN8fHRoaXMuRE9NLmlucHV0LmZvY3VzKCl9LG9uUGFzdGUodCl7dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlLGkscz10aGlzLnNldHRpbmdzO2lmKFwic2VsZWN0XCI9PXMubW9kZSYmcy5lbmZvcmNlV2hpdGVsaXN0fHwhcy51c2VySW5wdXQpcmV0dXJuITE7cy5yZWFkb25seXx8KGU9dC5jbGlwYm9hcmREYXRhfHx3aW5kb3cuY2xpcGJvYXJkRGF0YSxpPWUuZ2V0RGF0YShcIlRleHRcIikscy5ob29rcy5iZWZvcmVQYXN0ZSh0LHt0YWdpZnk6dGhpcyxwYXN0ZWRUZXh0OmksY2xpcGJvYXJkRGF0YTplfSkudGhlbigoZT0+e3ZvaWQgMD09PWUmJihlPWkpLGUmJih0aGlzLmluamVjdEF0Q2FyZXQoZSx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSksXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP3RoaXMuZXZlbnRzLmNhbGxiYWNrcy5vbk1peFRhZ3NJbnB1dC5jYWxsKHRoaXMsdCk6dGhpcy5zZXR0aW5ncy5wYXN0ZUFzVGFncz90aGlzLmFkZFRhZ3MoZSwhMCk6dGhpcy5zdGF0ZS5pbnB1dFRleHQ9ZSl9KSkuY2F0Y2goKHQ9PnQpKSl9LG9uRWRpdFRhZ0lucHV0KHQsZSl7dmFyIGk9dC5jbG9zZXN0KFwiLlwiK3RoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWcpLHM9dGhpcy5nZXROb2RlSW5kZXgoaSksYT10aGlzLnRhZ0RhdGEoaSksbj10aGlzLmlucHV0Lm5vcm1hbGl6ZS5jYWxsKHRoaXMsdCksbz1pLmlubmVySFRNTCE9aS5fX3RhZ2lmeVRhZ0RhdGEuX19vcmlnaW5hbEhUTUwscj10aGlzLnZhbGlkYXRlVGFnKHtbdGhpcy5zZXR0aW5ncy50YWdUZXh0UHJvcF06bn0pO298fCEwIT09dC5vcmlnaW5hbElzVmFsaWR8fChyPSEwKSxpLmNsYXNzTGlzdC50b2dnbGUodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0ludmFsaWQsITAhPT1yKSxhLl9faXNWYWxpZD1yLGkudGl0bGU9ITA9PT1yP2EudGl0bGV8fGEudmFsdWU6cixuLmxlbmd0aD49dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5lbmFibGVkJiYodGhpcy5zdGF0ZS5lZGl0aW5nJiYodGhpcy5zdGF0ZS5lZGl0aW5nLnZhbHVlPW4pLHRoaXMuZHJvcGRvd24uc2hvdyhuKSksdGhpcy50cmlnZ2VyKFwiZWRpdDppbnB1dFwiLHt0YWc6aSxpbmRleDpzLGRhdGE6ZCh7fSx0aGlzLnZhbHVlW3NdLHtuZXdWYWx1ZTpufSksb3JpZ2luYWxFdmVudDp0aGlzLmNsb25lRXZlbnQoZSl9KX0sb25FZGl0VGFnRm9jdXModCl7dGhpcy5zdGF0ZS5lZGl0aW5nPXtzY29wZTp0LGlucHV0OnQucXVlcnlTZWxlY3RvcihcIltjb250ZW50ZWRpdGFibGVdXCIpfX0sb25FZGl0VGFnQmx1cih0KXtpZih0aGlzLnN0YXRlLmhhc0ZvY3VzfHx0aGlzLnRvZ2dsZUZvY3VzQ2xhc3MoKSx0aGlzLkRPTS5zY29wZS5jb250YWlucyh0KSl7dmFyIGUsaSxzPXRoaXMuc2V0dGluZ3MsYT10LmNsb3Nlc3QoXCIuXCIrcy5jbGFzc05hbWVzLnRhZyksbj10aGlzLmlucHV0Lm5vcm1hbGl6ZS5jYWxsKHRoaXMsdCksbz10aGlzLnRhZ0RhdGEoYSkuX19vcmlnaW5hbERhdGEscj1hLmlubmVySFRNTCE9YS5fX3RhZ2lmeVRhZ0RhdGEuX19vcmlnaW5hbEhUTUwsbD10aGlzLnZhbGlkYXRlVGFnKHtbcy50YWdUZXh0UHJvcF06bn0pO2lmKG4paWYocil7aWYoZT10aGlzLmhhc01heFRhZ3MoKSxpPXRoaXMuZ2V0V2hpdGVsaXN0SXRlbShuKXx8ZCh7fSxvLHtbcy50YWdUZXh0UHJvcF06bix2YWx1ZTpuLF9faXNWYWxpZDpsfSkscy50cmFuc2Zvcm1UYWcuY2FsbCh0aGlzLGksbyksITAhPT0obD0hZSYmdGhpcy52YWxpZGF0ZVRhZyh7W3MudGFnVGV4dFByb3BdOmlbcy50YWdUZXh0UHJvcF19KSkpe2lmKHRoaXMudHJpZ2dlcihcImludmFsaWRcIix7ZGF0YTppLHRhZzphLG1lc3NhZ2U6bH0pLHMuZWRpdFRhZ3Mua2VlcEludmFsaWQpcmV0dXJuO3Mua2VlcEludmFsaWRUYWdzP2kuX19pc1ZhbGlkPWw6aT1vfWVsc2Ugcy5rZWVwSW52YWxpZFRhZ3MmJihkZWxldGUgaS50aXRsZSxkZWxldGUgaVtcImFyaWEtaW52YWxpZFwiXSxkZWxldGUgaS5jbGFzcyk7dGhpcy5vbkVkaXRUYWdEb25lKGEsaSl9ZWxzZSB0aGlzLm9uRWRpdFRhZ0RvbmUoYSxvKTtlbHNlIHRoaXMub25FZGl0VGFnRG9uZShhKX19LG9uRWRpdFRhZ2tleWRvd24odCxlKXtzd2l0Y2godGhpcy50cmlnZ2VyKFwiZWRpdDprZXlkb3duXCIse29yaWdpbmFsRXZlbnQ6dGhpcy5jbG9uZUV2ZW50KHQpfSksdC5rZXkpe2Nhc2VcIkVzY1wiOmNhc2VcIkVzY2FwZVwiOmUuaW5uZXJIVE1MPWUuX190YWdpZnlUYWdEYXRhLl9fb3JpZ2luYWxIVE1MO2Nhc2VcIkVudGVyXCI6Y2FzZVwiVGFiXCI6dC5wcmV2ZW50RGVmYXVsdCgpLHQudGFyZ2V0LmJsdXIoKX19LG9uRG91YmxlQ2xpY2tTY29wZSh0KXt2YXIgZSxpLHM9dC50YXJnZXQuY2xvc2VzdChcIi5cIit0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnKSxhPXRoaXMuc2V0dGluZ3M7cyYmYS51c2VySW5wdXQmJihlPXMuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdFZGl0aW5nKSxpPXMuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIiksXCJzZWxlY3RcIj09YS5tb2RlfHxhLnJlYWRvbmx5fHxlfHxpfHwhdGhpcy5zZXR0aW5ncy5lZGl0VGFnc3x8dGhpcy5lZGl0VGFnKHMpLHRoaXMudG9nZ2xlRm9jdXNDbGFzcyghMCksdGhpcy50cmlnZ2VyKFwiZGJsY2xpY2tcIix7dGFnOnMsaW5kZXg6dGhpcy5nZXROb2RlSW5kZXgocyksZGF0YTp0aGlzLnRhZ0RhdGEocyl9KSl9fX07ZnVuY3Rpb24gdyh0LGUpe3JldHVybiB0P3QucHJldmlvdXNFbGVtZW50U2libGluZyYmdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcInRhZ2lmeVwiKT8oY29uc29sZS53YXJuKFwiVGFnaWZ5OiBcIixcImlucHV0IGVsZW1lbnQgaXMgYWxyZWFkeSBUYWdpZmllZFwiLHQpLHRoaXMpOihkKHRoaXMsZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7ZnVuY3Rpb24gaSh0LGkscyl7cyYmaS5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKChpPT5lW3QrXCJFdmVudExpc3RlbmVyXCJdLmNhbGwoZSxpLHMpKSl9cmV0dXJue29mZih0LGUpe3JldHVybiBpKFwicmVtb3ZlXCIsdCxlKSx0aGlzfSxvbih0LGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZpKFwiYWRkXCIsdCxlKSx0aGlzfSx0cmlnZ2VyKGkscyxhKXt2YXIgbjtpZihhPWF8fHtjbG9uZURhdGE6ITB9LGkpaWYodC5zZXR0aW5ncy5pc0pRdWVyeVBsdWdpbilcInJlbW92ZVwiPT1pJiYoaT1cInJlbW92ZVRhZ1wiKSxqUXVlcnkodC5ET00ub3JpZ2luYWxJbnB1dCkudHJpZ2dlckhhbmRsZXIoaSxbc10pO2Vsc2V7dHJ5e3ZhciBvPVwib2JqZWN0XCI9PXR5cGVvZiBzP3M6e3ZhbHVlOnN9O2lmKChvPWEuY2xvbmVEYXRhP2Qoe30sbyk6bykudGFnaWZ5PXRoaXMscyBpbnN0YW5jZW9mIE9iamVjdClmb3IodmFyIHIgaW4gcylzW3JdaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKG9bcl09c1tyXSk7bj1uZXcgQ3VzdG9tRXZlbnQoaSx7ZGV0YWlsOm99KX1jYXRjaCh0KXtjb25zb2xlLndhcm4odCl9ZS5kaXNwYXRjaEV2ZW50KG4pfX19fSh0aGlzKSksdGhpcy5pc0ZpcmVmb3g9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEluc3RhbGxUcmlnZ2VyLHRoaXMuaXNJRT13aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRNb2RlLHRoaXMuYXBwbHlTZXR0aW5ncyh0LGV8fHt9KSx0aGlzLnN0YXRlPXtpbnB1dFRleHQ6XCJcIixlZGl0aW5nOiExLGFjdGlvbnM6e30sbWl4TW9kZTp7fSxkcm9wZG93bjp7fSxmbGFnZ2VkVGFnczp7fX0sdGhpcy52YWx1ZT1bXSx0aGlzLmxpc3RlbmVycz17fSx0aGlzLkRPTT17fSx0aGlzLmJ1aWxkKHQpLGMuY2FsbCh0aGlzKSx0aGlzLmdldENTU1ZhcnMoKSx0aGlzLmxvYWRPcmlnaW5hbFZhbHVlcygpLHRoaXMuZXZlbnRzLmN1c3RvbUJpbmRpbmcuY2FsbCh0aGlzKSx0aGlzLmV2ZW50cy5iaW5kaW5nLmNhbGwodGhpcyksdm9pZCh0LmF1dG9mb2N1cyYmdGhpcy5ET00uaW5wdXQuZm9jdXMoKSkpOihjb25zb2xlLndhcm4oXCJUYWdpZnk6IFwiLFwiaW5wdXQgZWxlbWVudCBub3QgZm91bmRcIix0KSx0aGlzKX1yZXR1cm4gdy5wcm90b3R5cGU9e19kcm9wZG93bjptLGN1c3RvbUV2ZW50c0xpc3Q6W1wiY2hhbmdlXCIsXCJhZGRcIixcInJlbW92ZVwiLFwiaW52YWxpZFwiLFwiaW5wdXRcIixcImNsaWNrXCIsXCJrZXlkb3duXCIsXCJmb2N1c1wiLFwiYmx1clwiLFwiZWRpdDppbnB1dFwiLFwiZWRpdDpiZWZvcmVVcGRhdGVcIixcImVkaXQ6dXBkYXRlZFwiLFwiZWRpdDpzdGFydFwiLFwiZWRpdDprZXlkb3duXCIsXCJkcm9wZG93bjpzaG93XCIsXCJkcm9wZG93bjpoaWRlXCIsXCJkcm9wZG93bjpzZWxlY3RcIixcImRyb3Bkb3duOnVwZGF0ZWRcIixcImRyb3Bkb3duOm5vTWF0Y2hcIixcImRyb3Bkb3duOnNjcm9sbFwiXSxkYXRhUHJvcHM6W1wiX19pc1ZhbGlkXCIsXCJfX3JlbW92ZWRcIixcIl9fb3JpZ2luYWxEYXRhXCIsXCJfX29yaWdpbmFsSFRNTFwiLFwiX190YWdJZFwiXSx0cmltKHQpe3JldHVybiB0aGlzLnNldHRpbmdzLnRyaW0mJnQmJlwic3RyaW5nXCI9PXR5cGVvZiB0P3QudHJpbSgpOnR9LHBhcnNlSFRNTDpmdW5jdGlvbih0KXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQudHJpbSgpLFwidGV4dC9odG1sXCIpLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGR9LHRlbXBsYXRlczpmLHBhcnNlVGVtcGxhdGUodCxlKXtyZXR1cm4gdD10aGlzLnNldHRpbmdzLnRlbXBsYXRlc1t0XXx8dCx0aGlzLnBhcnNlSFRNTCh0LmFwcGx5KHRoaXMsZSkpfSxzZXQgd2hpdGVsaXN0KHQpe3RoaXMuc2V0dGluZ3Mud2hpdGVsaXN0PXQmJkFycmF5LmlzQXJyYXkodCk/dDpbXX0sZ2V0IHdoaXRlbGlzdCgpe3JldHVybiB0aGlzLnNldHRpbmdzLndoaXRlbGlzdH0sYXBwbHlTZXR0aW5ncyh0LGUpe3AudGVtcGxhdGVzPXRoaXMudGVtcGxhdGVzO3ZhciBzPXRoaXMuc2V0dGluZ3M9ZCh7fSxwLGUpO3MuZGlzYWJsZWQ9dC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSxzLnJlYWRvbmx5PXQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikscy5wbGFjZWhvbGRlcj10LmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpfHxzLnBsYWNlaG9sZGVyfHxcIlwiLHMucmVxdWlyZWQ9dC5oYXNBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKTtmb3IobGV0IHQgaW4gcy5jbGFzc05hbWVzKU9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLmNsYXNzTmFtZXMsdCtcIlNlbGVjdG9yXCIse2dldCgpe3JldHVyblwiLlwiK3RoaXNbdF0uc3BsaXQoXCIgXCIpWzBdfX0pO2lmKHRoaXMuaXNJRSYmKHMuYXV0b0NvbXBsZXRlPSExKSxbXCJ3aGl0ZWxpc3RcIixcImJsYWNrbGlzdFwiXS5mb3JFYWNoKChlPT57dmFyIGk9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2UpO2kmJihpPWkuc3BsaXQocy5kZWxpbWl0ZXJzKSlpbnN0YW5jZW9mIEFycmF5JiYoc1tlXT1pKX0pKSxcImF1dG9Db21wbGV0ZVwiaW4gZSYmIWwoZS5hdXRvQ29tcGxldGUpJiYocy5hdXRvQ29tcGxldGU9cC5hdXRvQ29tcGxldGUscy5hdXRvQ29tcGxldGUuZW5hYmxlZD1lLmF1dG9Db21wbGV0ZSksXCJtaXhcIj09cy5tb2RlJiYocy5hdXRvQ29tcGxldGUucmlnaHRLZXk9ITAscy5kZWxpbWl0ZXJzPWUuZGVsaW1pdGVyc3x8bnVsbCxzLnRhZ1RleHRQcm9wJiYhcy5kcm9wZG93bi5zZWFyY2hLZXlzLmluY2x1ZGVzKHMudGFnVGV4dFByb3ApJiZzLmRyb3Bkb3duLnNlYXJjaEtleXMucHVzaChzLnRhZ1RleHRQcm9wKSksdC5wYXR0ZXJuKXRyeXtzLnBhdHRlcm49bmV3IFJlZ0V4cCh0LnBhdHRlcm4pfWNhdGNoKHQpe31pZih0aGlzLnNldHRpbmdzLmRlbGltaXRlcnMpdHJ5e3MuZGVsaW1pdGVycz1uZXcgUmVnRXhwKHRoaXMuc2V0dGluZ3MuZGVsaW1pdGVycyxcImdcIil9Y2F0Y2godCl7fXRoaXMuVEVYVFM9aShpKHt9LHYpLHMudGV4dHN8fHt9KSxcInNlbGVjdFwiIT1zLm1vZGUmJnMudXNlcklucHV0fHwocy5kcm9wZG93bi5lbmFibGVkPTApLHMuZHJvcGRvd24uYXBwZW5kVGFyZ2V0PWUuZHJvcGRvd24mJmUuZHJvcGRvd24uYXBwZW5kVGFyZ2V0P2UuZHJvcGRvd24uYXBwZW5kVGFyZ2V0OmRvY3VtZW50LmJvZHl9LGdldEF0dHJpYnV0ZXModCl7dmFyIGUsaT10aGlzLmdldEN1c3RvbUF0dHJpYnV0ZXModCkscz1cIlwiO2ZvcihlIGluIGkpcys9XCIgXCIrZSsodm9pZCAwIT09dFtlXT9gPVwiJHtpW2VdfVwiYDpcIlwiKTtyZXR1cm4gc30sZ2V0Q3VzdG9tQXR0cmlidXRlcyh0KXtpZighbCh0KSlyZXR1cm5cIlwiO3ZhciBlLGk9e307Zm9yKGUgaW4gdClcIl9fXCIhPWUuc2xpY2UoMCwyKSYmXCJjbGFzc1wiIT1lJiZ0Lmhhc093blByb3BlcnR5KGUpJiZ2b2lkIDAhPT10W2VdJiYoaVtlXT1yKHRbZV0pKTtyZXR1cm4gaX0sc2V0U3RhdGVTZWxlY3Rpb24oKXt2YXIgdD13aW5kb3cuZ2V0U2VsZWN0aW9uKCksZT17YW5jaG9yT2Zmc2V0OnQuYW5jaG9yT2Zmc2V0LGFuY2hvck5vZGU6dC5hbmNob3JOb2RlLHJhbmdlOnQuZ2V0UmFuZ2VBdCYmdC5yYW5nZUNvdW50JiZ0LmdldFJhbmdlQXQoMCl9O3JldHVybiB0aGlzLnN0YXRlLnNlbGVjdGlvbj1lLGV9LGdldENhcmV0R2xvYmFsUG9zaXRpb24oKXtjb25zdCB0PWRvY3VtZW50LmdldFNlbGVjdGlvbigpO2lmKHQucmFuZ2VDb3VudCl7Y29uc3QgZT10LmdldFJhbmdlQXQoMCksaT1lLnN0YXJ0Q29udGFpbmVyLHM9ZS5zdGFydE9mZnNldDtsZXQgYSxuO2lmKHM+MClyZXR1cm4gbj1kb2N1bWVudC5jcmVhdGVSYW5nZSgpLG4uc2V0U3RhcnQoaSxzLTEpLG4uc2V0RW5kKGkscyksYT1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHtsZWZ0OmEucmlnaHQsdG9wOmEudG9wLGJvdHRvbTphLmJvdHRvbX07aWYoaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpcmV0dXJuIGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9cmV0dXJue2xlZnQ6LTk5OTksdG9wOi05OTk5fX0sZ2V0Q1NTVmFycygpe3ZhciB0PWdldENvbXB1dGVkU3R5bGUodGhpcy5ET00uc2NvcGUsbnVsbCk7dmFyIGU7dGhpcy5DU1NWYXJzPXt0YWdIaWRlVHJhbnNpdGlvbjooKHt2YWx1ZTp0LHVuaXQ6ZX0pPT5cInNcIj09ZT8xZTMqdDp0KShmdW5jdGlvbih0KXtpZighdClyZXR1cm57fTt2YXIgZT0odD10LnRyaW0oKS5zcGxpdChcIiBcIilbMF0pLnNwbGl0KC9cXGQrL2cpLmZpbHRlcigodD0+dCkpLnBvcCgpLnRyaW0oKTtyZXR1cm57dmFsdWU6K3Quc3BsaXQoZSkuZmlsdGVyKCh0PT50KSlbMF0udHJpbSgpLHVuaXQ6ZX19KChlPVwidGFnLWhpZGUtdHJhbnNpdGlvblwiLHQuZ2V0UHJvcGVydHlWYWx1ZShcIi0tXCIrZSkpKSl9fSxidWlsZCh0KXt2YXIgZT10aGlzLkRPTTt0aGlzLnNldHRpbmdzLm1peE1vZGUuaW50ZWdyYXRlZD8oZS5vcmlnaW5hbElucHV0PW51bGwsZS5zY29wZT10LGUuaW5wdXQ9dCk6KGUub3JpZ2luYWxJbnB1dD10LGUuc2NvcGU9dGhpcy5wYXJzZVRlbXBsYXRlKFwid3JhcHBlclwiLFt0LHRoaXMuc2V0dGluZ3NdKSxlLmlucHV0PWUuc2NvcGUucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuaW5wdXRTZWxlY3RvciksdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLnNjb3BlLHQpKX0sZGVzdHJveSgpe3RoaXMuZXZlbnRzLnVuYmluZEdsb2JhbC5jYWxsKHRoaXMpLHRoaXMuRE9NLnNjb3BlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ET00uc2NvcGUpLHRoaXMuZHJvcGRvd24uaGlkZSghMCksY2xlYXJUaW1lb3V0KHRoaXMuZHJvcGRvd25IaWRlX19iaW5kRXZlbnRzVGltZW91dCl9LGxvYWRPcmlnaW5hbFZhbHVlcyh0KXt2YXIgZSxpPXRoaXMuc2V0dGluZ3M7aWYodm9pZCAwPT09dCYmKHQ9aS5taXhNb2RlLmludGVncmF0ZWQ/dGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnQ6dGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZSksdGhpcy5yZW1vdmVBbGxUYWdzKHt3aXRob3V0Q2hhbmdlRXZlbnQ6ITB9KSx0KWlmKFwibWl4XCI9PWkubW9kZSl0aGlzLnBhcnNlTWl4VGFncyh0LnRyaW0oKSksKGU9dGhpcy5ET00uaW5wdXQubGFzdENoaWxkKSYmXCJCUlwiPT1lLnRhZ05hbWV8fHRoaXMuRE9NLmlucHV0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFwiPGJyPlwiKTtlbHNle3RyeXtKU09OLnBhcnNlKHQpaW5zdGFuY2VvZiBBcnJheSYmKHQ9SlNPTi5wYXJzZSh0KSl9Y2F0Y2godCl7fXRoaXMuYWRkVGFncyh0KS5mb3JFYWNoKCh0PT50JiZ0LmNsYXNzTGlzdC5hZGQoaS5jbGFzc05hbWVzLnRhZ05vQW5pbWF0aW9uKSkpfWVsc2UgdGhpcy5wb3N0VXBkYXRlKCk7dGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkPWkubWl4TW9kZS5pbnRlZ3JhdGVkP1wiXCI6dGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZSx0aGlzLnN0YXRlLmxvYWRlZE9yaWdpbmFsVmFsdWVzPSEwfSxjbG9uZUV2ZW50KHQpe3ZhciBlPXt9O2Zvcih2YXIgaSBpbiB0KWVbaV09dFtpXTtyZXR1cm4gZX0sbG9hZGluZyh0KXtyZXR1cm4gdGhpcy5zdGF0ZS5pc0xvYWRpbmc9dCx0aGlzLkRPTS5zY29wZS5jbGFzc0xpc3RbdD9cImFkZFwiOlwicmVtb3ZlXCJdKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5zY29wZUxvYWRpbmcpLHRoaXN9LHRhZ0xvYWRpbmcodCxlKXtyZXR1cm4gdCYmdC5jbGFzc0xpc3RbZT9cImFkZFwiOlwicmVtb3ZlXCJdKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdMb2FkaW5nKSx0aGlzfSx0b2dnbGVDbGFzcyh0LGUpe1wic3RyaW5nXCI9PXR5cGVvZiB0JiZ0aGlzLkRPTS5zY29wZS5jbGFzc0xpc3QudG9nZ2xlKHQsZSl9LHRvZ2dsZUZvY3VzQ2xhc3ModCl7dGhpcy50b2dnbGVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMuZm9jdXMsISF0KX0sdHJpZ2dlckNoYW5nZUV2ZW50OmZ1bmN0aW9uKCl7aWYoIXRoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnRlZ3JhdGVkKXt2YXIgdD10aGlzLkRPTS5vcmlnaW5hbElucHV0LGU9dGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkIT09dC52YWx1ZSxpPW5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSk7ZSYmKHRoaXMuc3RhdGUubGFzdE9yaWdpbmFsVmFsdWVSZXBvcnRlZD10LnZhbHVlLGkuc2ltdWxhdGVkPSEwLHQuX3ZhbHVlVHJhY2tlciYmdC5fdmFsdWVUcmFja2VyLnNldFZhbHVlKE1hdGgucmFuZG9tKCkpLHQuZGlzcGF0Y2hFdmVudChpKSx0aGlzLnRyaWdnZXIoXCJjaGFuZ2VcIix0aGlzLnN0YXRlLmxhc3RPcmlnaW5hbFZhbHVlUmVwb3J0ZWQpLHQudmFsdWU9dGhpcy5zdGF0ZS5sYXN0T3JpZ2luYWxWYWx1ZVJlcG9ydGVkKX19LGV2ZW50czpULGZpeEZpcmVmb3hMYXN0VGFnTm9DYXJldCgpe30scGxhY2VDYXJldEFmdGVyTm9kZSh0KXtpZih0JiZ0LnBhcmVudE5vZGUpe3ZhciBlPXQubmV4dFNpYmxpbmcsaT13aW5kb3cuZ2V0U2VsZWN0aW9uKCkscz1pLmdldFJhbmdlQXQoMCk7aS5yYW5nZUNvdW50JiYocy5zZXRTdGFydEJlZm9yZShlfHx0KSxzLnNldEVuZEJlZm9yZShlfHx0KSxpLnJlbW92ZUFsbFJhbmdlcygpLGkuYWRkUmFuZ2UocykpfX0saW5zZXJ0QWZ0ZXJUYWcodCxlKXtpZihlPWV8fHRoaXMuc2V0dGluZ3MubWl4TW9kZS5pbnNlcnRBZnRlclRhZyx0JiZ0LnBhcmVudE5vZGUmJmUpcmV0dXJuIGU9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZSk6ZSx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdC5uZXh0U2libGluZyksZX0sZWRpdFRhZyh0LGUpe3Q9dHx8dGhpcy5nZXRMYXN0VGFnKCksZT1lfHx7fSx0aGlzLmRyb3Bkb3duLmhpZGUoKTt2YXIgaT10aGlzLnNldHRpbmdzO2Z1bmN0aW9uIHMoKXtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKGkuY2xhc3NOYW1lcy50YWdUZXh0U2VsZWN0b3IpfXZhciBhPXMoKSxuPXRoaXMuZ2V0Tm9kZUluZGV4KHQpLG89dGhpcy50YWdEYXRhKHQpLHI9dGhpcy5ldmVudHMuY2FsbGJhY2tzLGw9dGhpcyxoPSEwO2lmKGEpe2lmKCEobyBpbnN0YW5jZW9mIE9iamVjdCYmXCJlZGl0YWJsZVwiaW4gbyl8fG8uZWRpdGFibGUpcmV0dXJuIGEuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsITApLHQuY2xhc3NMaXN0LmFkZChpLmNsYXNzTmFtZXMudGFnRWRpdGluZyksdGhpcy50YWdEYXRhKHQse19fb3JpZ2luYWxEYXRhOmQoe30sbyksX19vcmlnaW5hbEhUTUw6dC5pbm5lckhUTUx9KSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHIub25FZGl0VGFnRm9jdXMuYmluZCh0aGlzLHQpKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKGZ1bmN0aW9uKCl7c2V0VGltZW91dCgoKCk9PnIub25FZGl0VGFnQmx1ci5jYWxsKGwscygpKSkpfSkpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsci5vbkVkaXRUYWdJbnB1dC5iaW5kKHRoaXMsYSkpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZT0+ci5vbkVkaXRUYWdrZXlkb3duLmNhbGwodGhpcyxlLHQpKSksYS5mb2N1cygpLHRoaXMuc2V0UmFuZ2VBdFN0YXJ0RW5kKCExLGEpLGUuc2tpcFZhbGlkYXRpb258fChoPXRoaXMuZWRpdFRhZ1RvZ2dsZVZhbGlkaXR5KHQpKSxhLm9yaWdpbmFsSXNWYWxpZD1oLHRoaXMudHJpZ2dlcihcImVkaXQ6c3RhcnRcIix7dGFnOnQsaW5kZXg6bixkYXRhOm8saXNWYWxpZDpofSksdGhpc31lbHNlIGNvbnNvbGUud2FybihcIkNhbm5vdCBmaW5kIGVsZW1lbnQgaW4gVGFnIHRlbXBsYXRlOiAuXCIsaS5jbGFzc05hbWVzLnRhZ1RleHRTZWxlY3Rvcil9LGVkaXRUYWdUb2dnbGVWYWxpZGl0eSh0LGUpe3ZhciBpO2lmKGU9ZXx8dGhpcy50YWdEYXRhKHQpKXJldHVybihpPSEoXCJfX2lzVmFsaWRcImluIGUpfHwhMD09PWUuX19pc1ZhbGlkKXx8dGhpcy5yZW1vdmVUYWdzRnJvbVZhbHVlKHQpLHRoaXMudXBkYXRlKCksdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkLCFpKSxlLl9faXNWYWxpZDtjb25zb2xlLndhcm4oXCJ0YWcgaGFzIG5vIGRhdGE6IFwiLHQsZSl9LG9uRWRpdFRhZ0RvbmUodCxlKXtlPWV8fHt9O3ZhciBpPXt0YWc6dD10fHx0aGlzLnN0YXRlLmVkaXRpbmcuc2NvcGUsaW5kZXg6dGhpcy5nZXROb2RlSW5kZXgodCkscHJldmlvdXNEYXRhOnRoaXMudGFnRGF0YSh0KSxkYXRhOmV9O3RoaXMudHJpZ2dlcihcImVkaXQ6YmVmb3JlVXBkYXRlXCIsaSx7Y2xvbmVEYXRhOiExfSksdGhpcy5zdGF0ZS5lZGl0aW5nPSExLGRlbGV0ZSBlLl9fb3JpZ2luYWxEYXRhLGRlbGV0ZSBlLl9fb3JpZ2luYWxIVE1MLHQmJmVbdGhpcy5zZXR0aW5ncy50YWdUZXh0UHJvcF0/KHQ9dGhpcy5yZXBsYWNlVGFnKHQsZSksdGhpcy5lZGl0VGFnVG9nZ2xlVmFsaWRpdHkodCxlKSx0aGlzLnNldHRpbmdzLmExMXkuZm9jdXNhYmxlVGFncyYmdC5mb2N1cygpKTp0JiZ0aGlzLnJlbW92ZVRhZ3ModCksdGhpcy50cmlnZ2VyKFwiZWRpdDp1cGRhdGVkXCIsaSksdGhpcy5kcm9wZG93bi5oaWRlKCksdGhpcy5zZXR0aW5ncy5rZWVwSW52YWxpZFRhZ3MmJnRoaXMucmVDaGVja0ludmFsaWRUYWdzKCl9LHJlcGxhY2VUYWcodCxlKXtlJiZlLnZhbHVlfHwoZT10Ll9fdGFnaWZ5VGFnRGF0YSksZS5fX2lzVmFsaWQmJjEhPWUuX19pc1ZhbGlkJiZkKGUsdGhpcy5nZXRJbnZhbGlkVGFnQXR0cnMoZSxlLl9faXNWYWxpZCkpO3ZhciBpPXRoaXMuY3JlYXRlVGFnRWxlbShlKTtyZXR1cm4gdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpLHQpLHRoaXMudXBkYXRlVmFsdWVCeURPTVRhZ3MoKSxpfSx1cGRhdGVWYWx1ZUJ5RE9NVGFncygpe3RoaXMudmFsdWUubGVuZ3RoPTAsW10uZm9yRWFjaC5jYWxsKHRoaXMuZ2V0VGFnRWxtcygpLCh0PT57dC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQuc3BsaXQoXCIgXCIpWzBdKXx8dGhpcy52YWx1ZS5wdXNoKHRoaXMudGFnRGF0YSh0KSl9KSksdGhpcy51cGRhdGUoKX0sc2V0UmFuZ2VBdFN0YXJ0RW5kKHQsZSl7dD1cIm51bWJlclwiPT10eXBlb2YgdD90OiEhdCxlPShlPWV8fHRoaXMuRE9NLmlucHV0KS5sYXN0Q2hpbGR8fGU7dmFyIGk9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7dHJ5e2kucmFuZ2VDb3VudD49MSYmW1wiU3RhcnRcIixcIkVuZFwiXS5mb3JFYWNoKChzPT5pLmdldFJhbmdlQXQoMClbXCJzZXRcIitzXShlLHR8fGUubGVuZ3RoKSkpfWNhdGNoKHQpe2NvbnNvbGUud2FybihcIlRhZ2lmeTogXCIsdCl9fSxpbmplY3RBdENhcmV0KHQsZSl7aWYoZT1lfHx0aGlzLnN0YXRlLnNlbGVjdGlvbi5yYW5nZSlyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpLGUuZGVsZXRlQ29udGVudHMoKSxlLmluc2VydE5vZGUodCksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoITEsdCksdGhpcy51cGRhdGVWYWx1ZUJ5RE9NVGFncygpLHRoaXMudXBkYXRlKCksdGhpc30saW5wdXQ6e3NldCh0PVwiXCIsZT0hMCl7dmFyIGk9dGhpcy5zZXR0aW5ncy5kcm9wZG93bi5jbG9zZU9uU2VsZWN0O3RoaXMuc3RhdGUuaW5wdXRUZXh0PXQsZSYmKHRoaXMuRE9NLmlucHV0LmlubmVySFRNTD1yKFwiXCIrdCkpLCF0JiZpJiZ0aGlzLmRyb3Bkb3duLmhpZGUuYmluZCh0aGlzKSx0aGlzLmlucHV0LmF1dG9jb21wbGV0ZS5zdWdnZXN0LmNhbGwodGhpcyksdGhpcy5pbnB1dC52YWxpZGF0ZS5jYWxsKHRoaXMpfSx2YWxpZGF0ZSgpe3ZhciB0PSF0aGlzLnN0YXRlLmlucHV0VGV4dHx8ITA9PT10aGlzLnZhbGlkYXRlVGFnKHt2YWx1ZTp0aGlzLnN0YXRlLmlucHV0VGV4dH0pO3JldHVybiB0aGlzLkRPTS5pbnB1dC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy5pbnB1dEludmFsaWQsIXQpLHR9LG5vcm1hbGl6ZSh0KXt2YXIgZT10fHx0aGlzLkRPTS5pbnB1dCxpPVtdO2UuY2hpbGROb2Rlcy5mb3JFYWNoKCh0PT4zPT10Lm5vZGVUeXBlJiZpLnB1c2godC5ub2RlVmFsdWUpKSksaT1pLmpvaW4oXCJcXG5cIik7dHJ5e2k9aS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZyx0aGlzLnNldHRpbmdzLmRlbGltaXRlcnMuc291cmNlLmNoYXJBdCgwKSl9Y2F0Y2godCl7fXJldHVybiBpPWkucmVwbGFjZSgvXFxzL2csXCIgXCIpLHRoaXMuc2V0dGluZ3MudHJpbSYmKGk9aS5yZXBsYWNlKC9eXFxzKy8sXCJcIikpLGl9LGF1dG9jb21wbGV0ZTp7c3VnZ2VzdCh0KXtpZih0aGlzLnNldHRpbmdzLmF1dG9Db21wbGV0ZS5lbmFibGVkKXtcInN0cmluZ1wiPT10eXBlb2YodD10fHx7fSkmJih0PXt2YWx1ZTp0fSk7dmFyIGU9dC52YWx1ZT9cIlwiK3QudmFsdWU6XCJcIixpPWUuc3Vic3RyKDAsdGhpcy5zdGF0ZS5pbnB1dFRleHQubGVuZ3RoKS50b0xvd2VyQ2FzZSgpLHM9ZS5zdWJzdHJpbmcodGhpcy5zdGF0ZS5pbnB1dFRleHQubGVuZ3RoKTtlJiZ0aGlzLnN0YXRlLmlucHV0VGV4dCYmaT09dGhpcy5zdGF0ZS5pbnB1dFRleHQudG9Mb3dlckNhc2UoKT8odGhpcy5ET00uaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdWdnZXN0XCIscyksdGhpcy5zdGF0ZS5pbnB1dFN1Z2dlc3Rpb249dCk6KHRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3VnZ2VzdFwiKSxkZWxldGUgdGhpcy5zdGF0ZS5pbnB1dFN1Z2dlc3Rpb24pfX0sc2V0KHQpe3ZhciBlPXRoaXMuRE9NLmlucHV0LmdldEF0dHJpYnV0ZShcImRhdGEtc3VnZ2VzdFwiKSxpPXR8fChlP3RoaXMuc3RhdGUuaW5wdXRUZXh0K2U6bnVsbCk7cmV0dXJuISFpJiYoXCJtaXhcIj09dGhpcy5zZXR0aW5ncy5tb2RlP3RoaXMucmVwbGFjZVRleHRXaXRoTm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnN0YXRlLnRhZy5wcmVmaXgraSkpOih0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMsaSksdGhpcy5zZXRSYW5nZUF0U3RhcnRFbmQoKSksdGhpcy5pbnB1dC5hdXRvY29tcGxldGUuc3VnZ2VzdC5jYWxsKHRoaXMpLHRoaXMuZHJvcGRvd24uaGlkZSgpLCEwKX19fSxnZXRUYWdJZHgodCl7cmV0dXJuIHRoaXMudmFsdWUuZmluZEluZGV4KChlPT5lLl9fdGFnSWQ9PSh0fHx7fSkuX190YWdJZCkpfSxnZXROb2RlSW5kZXgodCl7dmFyIGU9MDtpZih0KWZvcig7dD10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7KWUrKztyZXR1cm4gZX0sZ2V0VGFnRWxtcyguLi50KXt2YXIgZT1cIi5cIitbLi4udGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZy5zcGxpdChcIiBcIiksLi4udF0uam9pbihcIi5cIik7cmV0dXJuW10uc2xpY2UuY2FsbCh0aGlzLkRPTS5zY29wZS5xdWVyeVNlbGVjdG9yQWxsKGUpKX0sZ2V0TGFzdFRhZygpe3ZhciB0PXRoaXMuRE9NLnNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ1NlbGVjdG9yfTpub3QoLiR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ0hpZGV9KTpub3QoW3JlYWRvbmx5XSlgKTtyZXR1cm4gdFt0Lmxlbmd0aC0xXX0sdGFnRGF0YToodCxlLGkpPT50PyhlJiYodC5fX3RhZ2lmeVRhZ0RhdGE9aT9lOmQoe30sdC5fX3RhZ2lmeVRhZ0RhdGF8fHt9LGUpKSx0Ll9fdGFnaWZ5VGFnRGF0YSk6KGNvbnNvbGUud2FybihcInRhZyBlbG1lbnQgZG9lc24ndCBleGlzdFwiLHQsZSksZSksaXNUYWdEdXBsaWNhdGUodCxlKXt2YXIgaT10aGlzLnNldHRpbmdzO3JldHVyblwic2VsZWN0XCIhPWkubW9kZSYmdGhpcy52YWx1ZS5yZWR1Y2UoKChhLG4pPT5zKHRoaXMudHJpbShcIlwiK3QpLG4udmFsdWUsZXx8aS5kcm9wZG93bi5jYXNlU2Vuc2l0aXZlKT9hKzE6YSksMCl9LGdldFRhZ0luZGV4QnlWYWx1ZSh0KXt2YXIgZT1bXTtyZXR1cm4gdGhpcy5nZXRUYWdFbG1zKCkuZm9yRWFjaCgoKGksYSk9PntzKHRoaXMudHJpbShpLnRleHRDb250ZW50KSx0LHRoaXMuc2V0dGluZ3MuZHJvcGRvd24uY2FzZVNlbnNpdGl2ZSkmJmUucHVzaChhKX0pKSxlfSxnZXRUYWdFbG1CeVZhbHVlKHQpe3ZhciBlPXRoaXMuZ2V0VGFnSW5kZXhCeVZhbHVlKHQpWzBdO3JldHVybiB0aGlzLmdldFRhZ0VsbXMoKVtlXX0sZmxhc2hUYWcodCl7dCYmKHQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMudGFnRmxhc2gpLHNldFRpbWVvdXQoKCgpPT57dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdGbGFzaCl9KSwxMDApKX0saXNUYWdCbGFja2xpc3RlZCh0KXtyZXR1cm4gdD10aGlzLnRyaW0odC50b0xvd2VyQ2FzZSgpKSx0aGlzLnNldHRpbmdzLmJsYWNrbGlzdC5maWx0ZXIoKGU9PihcIlwiK2UpLnRvTG93ZXJDYXNlKCk9PXQpKS5sZW5ndGh9LGlzVGFnV2hpdGVsaXN0ZWQodCl7cmV0dXJuISF0aGlzLmdldFdoaXRlbGlzdEl0ZW0odCl9LGdldFdoaXRlbGlzdEl0ZW0odCxlLGkpe2U9ZXx8XCJ2YWx1ZVwiO3ZhciBhLG49dGhpcy5zZXR0aW5ncztyZXR1cm4oaT1pfHxuLndoaXRlbGlzdCkuc29tZSgoaT0+e3ZhciBvPVwic3RyaW5nXCI9PXR5cGVvZiBpP2k6aVtlXXx8aS52YWx1ZTtpZihzKG8sdCxuLmRyb3Bkb3duLmNhc2VTZW5zaXRpdmUsbi50cmltKSlyZXR1cm4gYT1cInN0cmluZ1wiPT10eXBlb2YgaT97dmFsdWU6aX06aSwhMH0pKSxhfHxcInZhbHVlXCIhPWV8fFwidmFsdWVcIj09bi50YWdUZXh0UHJvcHx8KGE9dGhpcy5nZXRXaGl0ZWxpc3RJdGVtKHQsbi50YWdUZXh0UHJvcCxpKSksYX0sdmFsaWRhdGVUYWcodCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPVwidmFsdWVcImluIHQ/XCJ2YWx1ZVwiOmUudGFnVGV4dFByb3Ascz10aGlzLnRyaW0odFtpXStcIlwiKTtyZXR1cm4odFtpXStcIlwiKS50cmltKCk/ZS5wYXR0ZXJuJiZlLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHAmJiFlLnBhdHRlcm4udGVzdChzKT90aGlzLlRFWFRTLnBhdHRlcm46IWUuZHVwbGljYXRlcyYmdGhpcy5pc1RhZ0R1cGxpY2F0ZShzLHRoaXMuc3RhdGUuZWRpdGluZyk/dGhpcy5URVhUUy5kdXBsaWNhdGU6dGhpcy5pc1RhZ0JsYWNrbGlzdGVkKHMpfHxlLmVuZm9yY2VXaGl0ZWxpc3QmJiF0aGlzLmlzVGFnV2hpdGVsaXN0ZWQocyk/dGhpcy5URVhUUy5ub3RBbGxvd2VkOiFlLnZhbGlkYXRlfHxlLnZhbGlkYXRlKHQpOnRoaXMuVEVYVFMuZW1wdHl9LGdldEludmFsaWRUYWdBdHRycyh0LGUpe3JldHVybntcImFyaWEtaW52YWxpZFwiOiEwLGNsYXNzOmAke3QuY2xhc3N8fFwiXCJ9ICR7dGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWR9YC50cmltKCksdGl0bGU6ZX19LGhhc01heFRhZ3MoKXtyZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg+PXRoaXMuc2V0dGluZ3MubWF4VGFncyYmdGhpcy5URVhUUy5leGNlZWR9LHNldFJlYWRvbmx5KHQsZSl7dmFyIGk9dGhpcy5zZXR0aW5ncztkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKSxpW2V8fFwicmVhZG9ubHlcIl09dCx0aGlzLkRPTS5zY29wZVsodD9cInNldFwiOlwicmVtb3ZlXCIpK1wiQXR0cmlidXRlXCJdKGV8fFwicmVhZG9ubHlcIiwhMCksXCJtaXhcIj09aS5tb2RlJiYodGhpcy5ET00uaW5wdXQuY29udGVudEVkaXRhYmxlPSF0KX0sc2V0RGlzYWJsZWQodCl7dGhpcy5zZXRSZWFkb25seSh0LFwiZGlzYWJsZWRcIil9LG5vcm1hbGl6ZVRhZ3ModCl7dmFyIGU9dGhpcy5zZXR0aW5ncyxpPWUud2hpdGVsaXN0LHM9ZS5kZWxpbWl0ZXJzLGE9ZS5tb2RlLG49ZS50YWdUZXh0UHJvcDtlLmVuZm9yY2VXaGl0ZWxpc3Q7dmFyIG89W10scj0hIWkmJmlbMF1pbnN0YW5jZW9mIE9iamVjdCxsPXQgaW5zdGFuY2VvZiBBcnJheSxkPXQ9Pih0K1wiXCIpLnNwbGl0KHMpLmZpbHRlcigodD0+dCkpLm1hcCgodD0+KHtbbl06dGhpcy50cmltKHQpLHZhbHVlOnRoaXMudHJpbSh0KX0pKSk7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQmJih0PXQudG9TdHJpbmcoKSksXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKCF0LnRyaW0oKSlyZXR1cm5bXTt0PWQodCl9ZWxzZSBsJiYodD1bXS5jb25jYXQoLi4udC5tYXAoKHQ9PnQudmFsdWU/dDpkKHQpKSkpKTtyZXR1cm4gciYmKHQuZm9yRWFjaCgodD0+e3ZhciBlPW8ubWFwKCh0PT50LnZhbHVlKSksaT10aGlzLmRyb3Bkb3duLmZpbHRlckxpc3RJdGVtcy5jYWxsKHRoaXMsdFtuXSx7ZXhhY3Q6ITB9KTt0aGlzLnNldHRpbmdzLmR1cGxpY2F0ZXN8fChpPWkuZmlsdGVyKCh0PT4hZS5pbmNsdWRlcyh0LnZhbHVlKSkpKTt2YXIgcz1pLmxlbmd0aD4xP3RoaXMuZ2V0V2hpdGVsaXN0SXRlbSh0W25dLG4saSk6aVswXTtzJiZzIGluc3RhbmNlb2YgT2JqZWN0P28ucHVzaChzKTpcIm1peFwiIT1hJiYobnVsbD09dC52YWx1ZSYmKHQudmFsdWU9dFtuXSksby5wdXNoKHQpKX0pKSx0PW8pLHR9LHBhcnNlTWl4VGFncyh0KXt2YXIgZT10aGlzLnNldHRpbmdzLGk9ZS5taXhUYWdzSW50ZXJwb2xhdG9yLHM9ZS5kdXBsaWNhdGVzLGE9ZS50cmFuc2Zvcm1UYWcsbj1lLmVuZm9yY2VXaGl0ZWxpc3Qsbz1lLm1heFRhZ3Mscj1lLnRhZ1RleHRQcm9wLGw9W107cmV0dXJuIHQ9dC5zcGxpdChpWzBdKS5tYXAoKCh0LGUpPT57dmFyIGQsaCxnLHA9dC5zcGxpdChpWzFdKSxjPXBbMF0sdT1sLmxlbmd0aD09bzt0cnl7aWYoYz09K2MpdGhyb3cgRXJyb3I7aD1KU09OLnBhcnNlKGMpfWNhdGNoKHQpe2g9dGhpcy5ub3JtYWxpemVUYWdzKGMpWzBdfHx7dmFsdWU6Y319aWYodXx8IShwLmxlbmd0aD4xKXx8biYmIXRoaXMuaXNUYWdXaGl0ZWxpc3RlZChoLnZhbHVlKXx8IXMmJnRoaXMuaXNUYWdEdXBsaWNhdGUoaC52YWx1ZSkpe2lmKHQpcmV0dXJuIGU/aVswXSt0OnR9ZWxzZSBhLmNhbGwodGhpcyxoKSxoW2Q9aFtyXT9yOlwidmFsdWVcIl09dGhpcy50cmltKGhbZF0pLGc9dGhpcy5jcmVhdGVUYWdFbGVtKGgpLGwucHVzaChoKSxnLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZ05vQW5pbWF0aW9uKSxwWzBdPWcub3V0ZXJIVE1MLHRoaXMudmFsdWUucHVzaChoKTtyZXR1cm4gcC5qb2luKFwiXCIpfSkpLmpvaW4oXCJcIiksdGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPXQsdGhpcy5ET00uaW5wdXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuRE9NLmlucHV0Lm5vcm1hbGl6ZSgpLHRoaXMuZ2V0VGFnRWxtcygpLmZvckVhY2goKCh0LGUpPT50aGlzLnRhZ0RhdGEodCxsW2VdKSkpLHRoaXMudXBkYXRlKHt3aXRob3V0Q2hhbmdlRXZlbnQ6ITB9KSx0fSxyZXBsYWNlVGV4dFdpdGhOb2RlKHQsZSl7aWYodGhpcy5zdGF0ZS50YWd8fGUpe2U9ZXx8dGhpcy5zdGF0ZS50YWcucHJlZml4K3RoaXMuc3RhdGUudGFnLnZhbHVlO3ZhciBpLHMsYT13aW5kb3cuZ2V0U2VsZWN0aW9uKCksbj1hLmFuY2hvck5vZGUsbz10aGlzLnN0YXRlLnRhZy5kZWxpbWl0ZXJzP3RoaXMuc3RhdGUudGFnLmRlbGltaXRlcnMubGVuZ3RoOjA7cmV0dXJuIG4uc3BsaXRUZXh0KGEuYW5jaG9yT2Zmc2V0LW8pLGk9bi5ub2RlVmFsdWUubGFzdEluZGV4T2YoZSkscz1uLnNwbGl0VGV4dChpKSx0JiZuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHQscyksITB9fSxzZWxlY3RUYWcodCxlKXt2YXIgaT10aGlzLnNldHRpbmdzO2lmKCFpLmVuZm9yY2VXaGl0ZWxpc3R8fHRoaXMuaXNUYWdXaGl0ZWxpc3RlZChlLnZhbHVlKSl7dGhpcy5pbnB1dC5zZXQuY2FsbCh0aGlzLGVbaS50YWdUZXh0UHJvcHx8XCJ2YWx1ZVwiXSwhMCksdGhpcy5zdGF0ZS5hY3Rpb25zLnNlbGVjdE9wdGlvbiYmc2V0VGltZW91dCh0aGlzLnNldFJhbmdlQXRTdGFydEVuZC5iaW5kKHRoaXMpKTt2YXIgcz10aGlzLmdldExhc3RUYWcoKTtyZXR1cm4gcz90aGlzLnJlcGxhY2VUYWcocyxlKTp0aGlzLmFwcGVuZFRhZyh0KSxpLmVuZm9yY2VXaGl0ZWxpc3QmJnRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKSx0aGlzLnZhbHVlWzBdPWUsdGhpcy50cmlnZ2VyKFwiYWRkXCIse3RhZzp0LGRhdGE6ZX0pLHRoaXMudXBkYXRlKCksW3RdfX0sYWRkRW1wdHlUYWcodCl7dmFyIGU9ZCh7dmFsdWU6XCJcIn0sdHx8e30pLGk9dGhpcy5jcmVhdGVUYWdFbGVtKGUpO3RoaXMudGFnRGF0YShpLGUpLHRoaXMuYXBwZW5kVGFnKGkpLHRoaXMuZWRpdFRhZyhpLHtza2lwVmFsaWRhdGlvbjohMH0pfSxhZGRUYWdzKHQsZSxpPXRoaXMuc2V0dGluZ3Muc2tpcEludmFsaWQpe3ZhciBzPVtdLGE9dGhpcy5zZXR0aW5ncyxuPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gdCYmMCE9dC5sZW5ndGg/KHQ9dGhpcy5ub3JtYWxpemVUYWdzKHQpLFwibWl4XCI9PWEubW9kZT90aGlzLmFkZE1peFRhZ3ModCk6KFwic2VsZWN0XCI9PWEubW9kZSYmKGU9ITEpLHRoaXMuRE9NLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLHQuZm9yRWFjaCgodD0+e3ZhciBlLG89e30scj1PYmplY3QuYXNzaWduKHt9LHQse3ZhbHVlOnQudmFsdWUrXCJcIn0pO2lmKCh0PU9iamVjdC5hc3NpZ24oe30scikpLl9faXNWYWxpZD10aGlzLmhhc01heFRhZ3MoKXx8dGhpcy52YWxpZGF0ZVRhZyh0KSxhLnRyYW5zZm9ybVRhZy5jYWxsKHRoaXMsdCksITAhPT10Ll9faXNWYWxpZCl7aWYoaSlyZXR1cm47ZChvLHRoaXMuZ2V0SW52YWxpZFRhZ0F0dHJzKHQsdC5fX2lzVmFsaWQpLHtfX3ByZUludmFsaWREYXRhOnJ9KSx0Ll9faXNWYWxpZD09dGhpcy5URVhUUy5kdXBsaWNhdGUmJnRoaXMuZmxhc2hUYWcodGhpcy5nZXRUYWdFbG1CeVZhbHVlKHQudmFsdWUpKX1pZih0LnJlYWRvbmx5JiYob1tcImFyaWEtcmVhZG9ubHlcIl09ITApLGU9dGhpcy5jcmVhdGVUYWdFbGVtKHQsbykscy5wdXNoKGUpLFwic2VsZWN0XCI9PWEubW9kZSlyZXR1cm4gdGhpcy5zZWxlY3RUYWcoZSx0KTtuLmFwcGVuZENoaWxkKGUpLHQuX19pc1ZhbGlkJiYhMD09PXQuX19pc1ZhbGlkPyh0aGlzLnZhbHVlLnB1c2godCksdGhpcy50cmlnZ2VyKFwiYWRkXCIse3RhZzplLGluZGV4OnRoaXMudmFsdWUubGVuZ3RoLTEsZGF0YTp0fSkpOih0aGlzLnRyaWdnZXIoXCJpbnZhbGlkXCIse2RhdGE6dCxpbmRleDp0aGlzLnZhbHVlLmxlbmd0aCx0YWc6ZSxtZXNzYWdlOnQuX19pc1ZhbGlkfSksYS5rZWVwSW52YWxpZFRhZ3N8fHNldFRpbWVvdXQoKCgpPT50aGlzLnJlbW92ZVRhZ3MoZSwhMCkpLDFlMykpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKX0pKSx0aGlzLmFwcGVuZFRhZyhuKSx0aGlzLnVwZGF0ZSgpLHQubGVuZ3RoJiZlJiZ0aGlzLmlucHV0LnNldC5jYWxsKHRoaXMpLHRoaXMuZHJvcGRvd24ucmVmaWx0ZXIoKSxzKSk6KFwic2VsZWN0XCI9PWEubW9kZSYmdGhpcy5yZW1vdmVBbGxUYWdzKCkscyl9LGFkZE1peFRhZ3ModCl7aWYoKHQ9dGhpcy5ub3JtYWxpemVUYWdzKHQpKVswXS5wcmVmaXh8fHRoaXMuc3RhdGUudGFnKXJldHVybiB0aGlzLnByZWZpeGVkVGV4dFRvVGFnKHRbMF0pO1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1be3ZhbHVlOnR9XSk7dmFyIGU9ISF0aGlzLnN0YXRlLnNlbGVjdGlvbixpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gdC5mb3JFYWNoKCh0PT57dmFyIGU9dGhpcy5jcmVhdGVUYWdFbGVtKHQpO2kuYXBwZW5kQ2hpbGQoZSksdGhpcy5pbnNlcnRBZnRlclRhZyhlKX0pKSxlP3RoaXMuaW5qZWN0QXRDYXJldChpKToodGhpcy5ET00uaW5wdXQuZm9jdXMoKSwoZT10aGlzLnNldFN0YXRlU2VsZWN0aW9uKCkpLnJhbmdlLnNldFN0YXJ0KHRoaXMuRE9NLmlucHV0LGUucmFuZ2UuZW5kT2Zmc2V0KSxlLnJhbmdlLnNldEVuZCh0aGlzLkRPTS5pbnB1dCxlLnJhbmdlLmVuZE9mZnNldCksdGhpcy5ET00uaW5wdXQuYXBwZW5kQ2hpbGQoaSksdGhpcy51cGRhdGVWYWx1ZUJ5RE9NVGFncygpLHRoaXMudXBkYXRlKCkpLGl9LHByZWZpeGVkVGV4dFRvVGFnKHQpe3ZhciBlLGk9dGhpcy5zZXR0aW5ncyxzPXRoaXMuc3RhdGUudGFnLmRlbGltaXRlcnM7aWYoaS50cmFuc2Zvcm1UYWcuY2FsbCh0aGlzLHQpLHQucHJlZml4PXQucHJlZml4fHx0aGlzLnN0YXRlLnRhZz90aGlzLnN0YXRlLnRhZy5wcmVmaXg6KGkucGF0dGVybi5zb3VyY2V8fGkucGF0dGVybilbMF0sZT10aGlzLmNyZWF0ZVRhZ0VsZW0odCksdGhpcy5yZXBsYWNlVGV4dFdpdGhOb2RlKGUpfHx0aGlzLkRPTS5pbnB1dC5hcHBlbmRDaGlsZChlKSxzZXRUaW1lb3V0KCgoKT0+ZS5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb0FuaW1hdGlvbikpLDMwMCksdGhpcy52YWx1ZS5wdXNoKHQpLHRoaXMudXBkYXRlKCksIXMpe3ZhciBhPXRoaXMuaW5zZXJ0QWZ0ZXJUYWcoZSl8fGU7dGhpcy5wbGFjZUNhcmV0QWZ0ZXJOb2RlKGEpfXJldHVybiB0aGlzLnN0YXRlLnRhZz1udWxsLHRoaXMudHJpZ2dlcihcImFkZFwiLGQoe30se3RhZzplfSx7ZGF0YTp0fSkpLGV9LGFwcGVuZFRhZyh0KXt2YXIgZT10aGlzLkRPTSxpPWUuc2NvcGUubGFzdEVsZW1lbnRDaGlsZDtpPT09ZS5pbnB1dD9lLnNjb3BlLmluc2VydEJlZm9yZSh0LGkpOmUuc2NvcGUuYXBwZW5kQ2hpbGQodCl9LGNyZWF0ZVRhZ0VsZW0odCxlKXt0Ll9fdGFnSWQ9KFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCh0PT4odF5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSYxNT4+dC80KS50b1N0cmluZygxNikpKTt2YXIgcyxhPWQoe30sdCxpKHt2YWx1ZTpyKHQudmFsdWUrXCJcIil9LGUpKTtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9ZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKHQsTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSk7ZT1pLm5leHROb2RlKCk7KWUudGV4dENvbnRlbnQudHJpbSgpfHxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9KHM9dGhpcy5wYXJzZVRlbXBsYXRlKFwidGFnXCIsW2FdKSksdGhpcy50YWdEYXRhKHMsdCksc30scmVDaGVja0ludmFsaWRUYWdzKCl7dmFyIHQ9dGhpcy5zZXR0aW5nczt0aGlzLmdldFRhZ0VsbXModC5jbGFzc05hbWVzLnRhZ05vdEFsbG93ZWQpLmZvckVhY2goKCh0LGUpPT57dmFyIGk9dGhpcy50YWdEYXRhKHQpLHM9dGhpcy5oYXNNYXhUYWdzKCksYT10aGlzLnZhbGlkYXRlVGFnKGkpO2lmKCEwPT09YSYmIXMpcmV0dXJuIGk9aS5fX3ByZUludmFsaWREYXRhP2kuX19wcmVJbnZhbGlkRGF0YTp7dmFsdWU6aS52YWx1ZX0sdGhpcy5yZXBsYWNlVGFnKHQsaSk7dC50aXRsZT1zfHxhfSkpfSxyZW1vdmVUYWdzKHQsZSxpKXt2YXIgczt0PXQmJnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9bdF06dCBpbnN0YW5jZW9mIEFycmF5P3Q6dD9bdF06W3RoaXMuZ2V0TGFzdFRhZygpXSxzPXQucmVkdWNlKCgodCxlKT0+KGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT10aGlzLmdldFRhZ0VsbUJ5VmFsdWUoZSkpLGUmJnRoaXMudGFnRGF0YShlKSYmdC5wdXNoKHtub2RlOmUsaWR4OnRoaXMuZ2V0VGFnSWR4KHRoaXMudGFnRGF0YShlKSksZGF0YTp0aGlzLnRhZ0RhdGEoZSx7X19yZW1vdmVkOiEwfSl9KSx0KSksW10pLGk9XCJudW1iZXJcIj09dHlwZW9mIGk/aTp0aGlzLkNTU1ZhcnMudGFnSGlkZVRyYW5zaXRpb24sXCJzZWxlY3RcIj09dGhpcy5zZXR0aW5ncy5tb2RlJiYoaT0wLHRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcykpLDE9PXMubGVuZ3RoJiZzWzBdLm5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdOb3RBbGxvd2VkKSYmKGU9ITApLHMubGVuZ3RoJiZ0aGlzLnNldHRpbmdzLmhvb2tzLmJlZm9yZVJlbW92ZVRhZyhzLHt0YWdpZnk6dGhpc30pLnRoZW4oKCgpPT57ZnVuY3Rpb24gdCh0KXt0Lm5vZGUucGFyZW50Tm9kZSYmKHQubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQubm9kZSksZT90aGlzLnNldHRpbmdzLmtlZXBJbnZhbGlkVGFncyYmdGhpcy50cmlnZ2VyKFwicmVtb3ZlXCIse3RhZzp0Lm5vZGUsaW5kZXg6dC5pZHh9KToodGhpcy50cmlnZ2VyKFwicmVtb3ZlXCIse3RhZzp0Lm5vZGUsaW5kZXg6dC5pZHgsZGF0YTp0LmRhdGF9KSx0aGlzLmRyb3Bkb3duLnJlZmlsdGVyKCksdGhpcy5kcm9wZG93bi5wb3NpdGlvbigpLHRoaXMuRE9NLmlucHV0Lm5vcm1hbGl6ZSgpLHRoaXMuc2V0dGluZ3Mua2VlcEludmFsaWRUYWdzJiZ0aGlzLnJlQ2hlY2tJbnZhbGlkVGFncygpKSl9aSYmaT4xMCYmMT09cy5sZW5ndGg/ZnVuY3Rpb24oZSl7ZS5ub2RlLnN0eWxlLndpZHRoPXBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZS5ub2RlKS53aWR0aCkrXCJweFwiLGRvY3VtZW50LmJvZHkuY2xpZW50VG9wLGUubm9kZS5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuY2xhc3NOYW1lcy50YWdIaWRlKSxzZXRUaW1lb3V0KHQuYmluZCh0aGlzKSxpLGUpfS5jYWxsKHRoaXMsc1swXSk6cy5mb3JFYWNoKHQuYmluZCh0aGlzKSksZXx8KHRoaXMucmVtb3ZlVGFnc0Zyb21WYWx1ZShzLm1hcCgodD0+dC5ub2RlKSkpLHRoaXMudXBkYXRlKCksXCJzZWxlY3RcIj09dGhpcy5zZXR0aW5ncy5tb2RlJiZ0aGlzLkRPTS5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwhMCkpfSkpLmNhdGNoKCh0PT57fSkpfSxyZW1vdmVUYWdzRnJvbURPTSgpe1tdLnNsaWNlLmNhbGwodGhpcy5nZXRUYWdFbG1zKCkpLmZvckVhY2goKHQ9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSkpfSxyZW1vdmVUYWdzRnJvbVZhbHVlKHQpeyh0PUFycmF5LmlzQXJyYXkodCk/dDpbdF0pLmZvckVhY2goKHQ9Pnt2YXIgZT10aGlzLnRhZ0RhdGEodCksaT10aGlzLmdldFRhZ0lkeChlKTtpPi0xJiZ0aGlzLnZhbHVlLnNwbGljZShpLDEpfSkpfSxyZW1vdmVBbGxUYWdzKHQpe3Q9dHx8e30sdGhpcy52YWx1ZT1bXSxcIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5ET00uaW5wdXQuaW5uZXJIVE1MPVwiXCI6dGhpcy5yZW1vdmVUYWdzRnJvbURPTSgpLHRoaXMuZHJvcGRvd24ucG9zaXRpb24oKSxcInNlbGVjdFwiPT10aGlzLnNldHRpbmdzLm1vZGUmJnRoaXMuaW5wdXQuc2V0LmNhbGwodGhpcyksdGhpcy51cGRhdGUodCl9LHBvc3RVcGRhdGUoKXt2YXIgdD10aGlzLnNldHRpbmdzLmNsYXNzTmFtZXMsZT1cIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5zZXR0aW5ncy5taXhNb2RlLmludGVncmF0ZWQ/dGhpcy5ET00uaW5wdXQudGV4dENvbnRlbnQ6dGhpcy5ET00ub3JpZ2luYWxJbnB1dC52YWx1ZTp0aGlzLnZhbHVlLmxlbmd0aDt0aGlzLnRvZ2dsZUNsYXNzKHQuaGFzTWF4VGFncyx0aGlzLnZhbHVlLmxlbmd0aD49dGhpcy5zZXR0aW5ncy5tYXhUYWdzKSx0aGlzLnRvZ2dsZUNsYXNzKHQuaGFzTm9UYWdzLCF0aGlzLnZhbHVlLmxlbmd0aCksdGhpcy50b2dnbGVDbGFzcyh0LmVtcHR5LCFlKX0sdXBkYXRlKHQpe3ZhciBlPXRoaXMuRE9NLm9yaWdpbmFsSW5wdXQ7dGhpcy5zZXR0aW5ncy5taXhNb2RlLmludGVncmF0ZWR8fChlLnZhbHVlPXRoaXMuZ2V0SW5wdXRWYWx1ZSgpKSx0aGlzLnBvc3RVcGRhdGUoKSwhKHR8fHt9KS53aXRob3V0Q2hhbmdlRXZlbnQmJnRoaXMuc3RhdGUubG9hZGVkT3JpZ2luYWxWYWx1ZXMmJnRoaXMudHJpZ2dlckNoYW5nZUV2ZW50KCl9LGdldElucHV0VmFsdWUoKXt2YXIgdD10aGlzLmdldENsZWFuVmFsdWUoKTtyZXR1cm5cIm1peFwiPT10aGlzLnNldHRpbmdzLm1vZGU/dGhpcy5nZXRNaXhlZFRhZ3NBc1N0cmluZyh0KTp0Lmxlbmd0aD90aGlzLnNldHRpbmdzLm9yaWdpbmFsSW5wdXRWYWx1ZUZvcm1hdD90aGlzLnNldHRpbmdzLm9yaWdpbmFsSW5wdXRWYWx1ZUZvcm1hdCh0KTpKU09OLnN0cmluZ2lmeSh0KTpcIlwifSxnZXRDbGVhblZhbHVlKHQpe3JldHVybiBlPXR8fHRoaXMudmFsdWUsaT10aGlzLmRhdGFQcm9wcyxlJiZBcnJheS5pc0FycmF5KGUpJiZlLm1hcCgodD0+YSh0LGkpKSk7dmFyIGUsaX0sZ2V0TWl4ZWRUYWdzQXNTdHJpbmcoKXt2YXIgdD1cIlwiLGU9dGhpcyxpPXRoaXMuc2V0dGluZ3MubWl4VGFnc0ludGVycG9sYXRvcjtyZXR1cm4gdGhpcy5ET00uaW5wdXQuY2hpbGROb2Rlcy5mb3JFYWNoKChzPT57aWYoMT09cy5ub2RlVHlwZSl7Y29uc3Qgbj1lLnRhZ0RhdGEocyk7aWYocy5jbGFzc0xpc3QuY29udGFpbnMoZS5zZXR0aW5ncy5jbGFzc05hbWVzLnRhZykmJm4pe2lmKG4uX19yZW1vdmVkKXJldHVybjtyZXR1cm4gdm9pZCh0Kz1pWzBdK0pTT04uc3RyaW5naWZ5KGEobixlLmRhdGFQcm9wcykpK2lbMV0pfVwiQlJcIiE9cy50YWdOYW1lfHxzLnBhcmVudE5vZGUhPWUuRE9NLmlucHV0JiYxIT1zLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGg/XCJESVZcIiE9cy50YWdOYW1lJiZcIlBcIiE9cy50YWdOYW1lfHwodCs9XCJcXHJcXG5cIiwhcy5jaGlsZHJlbi5sZW5ndGgmJnMudGV4dENvbnRlbnQmJih0Kz1zLnRleHRDb250ZW50KSk6dCs9XCJcXHJcXG5cIn1lbHNlIHQrPXMudGV4dENvbnRlbnR9KSksdH19LHcucHJvdG90eXBlLnJlbW92ZVRhZz13LnByb3RvdHlwZS5yZW1vdmVUYWdzLHd9KSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGhlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHswfDF8MnwzfDR8NXw2fSB0aGUgZGF5IG9mIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHdlZWsgaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgcmV0dXJuIGRheTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldE1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRNb250aChuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIG1vbnRoO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB0aW1lc3RhbXBcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIHRpbWVzdGFtcCBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1LjEyMzpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldFRpbWUobmV3IERhdGUoMjAxMiwgMSwgMjksIDExLCA0NSwgNSwgMTIzKSlcbiAqIC8vPT4gMTMzMDUxNTkwNTEyM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHJldHVybiB0aW1lc3RhbXA7XG59IiwiaW1wb3J0IGdldFRpbWUgZnJvbSBcIi4uL2dldFRpbWUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFVuaXhUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgc2Vjb25kcyB0aW1lc3RhbXAgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHNlY29uZHMgdGltZXN0YW1wIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgdGltZXN0YW1wXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSB0aW1lc3RhbXAgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNSBDRVQ6XG4gKiBjb25zdCByZXN1bHQgPSBnZXRVbml4VGltZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1LCA1KSlcbiAqIC8vPT4gMTMzMDUxMjMwNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXhUaW1lKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZ2V0VGltZShkaXJ0eURhdGUpIC8gMTAwMCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiB2YXIgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsYW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxuZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX2RpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG5cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldERheSBmcm9tIFwiLi4vZ2V0RGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBuZXh0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBXaGVuIGlzIHRoZSBuZXh0IGRheSBvZiB0aGUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFdoZW4gaXMgdGhlIG5leHQgZGF5IG9mIHRoZSB3ZWVrPyAwLTYgdGhlIGRheSBvZiB0aGUgd2VlaywgMCByZXByZXNlbnRzIFN1bmRheS5cbiAqXG4gKiBAcGFyYW0ge0RhdGUgfCBudW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXl9IGRheSAtIGRheSBvZiB0aGUgd2Vla1xuICogQHJldHVybnMge0RhdGV9IC0gdGhlIGRhdGUgaXMgdGhlIG5leHQgZGF5IG9mIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGVuIGlzIHRoZSBuZXh0IE1vbmRheSBhZnRlciBNYXIsIDIwLCAyMDIwP1xuICogY29uc3QgcmVzdWx0ID0gbmV4dERheShuZXcgRGF0ZSgyMDIwLCAyLCAyMCksIDEpXG4gKiAvLz0+IE1vbiBNYXIgMjMgMjAyMCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGVuIGlzIHRoZSBuZXh0IFR1ZXNkYXkgYWZ0ZXIgTWFyLCAyMSwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IG5leHREYXkobmV3IERhdGUoMjAyMCwgMiwgMjEpLCAyKVxuICogLy89PiBUdWUgTWFyIDI0IDIwMjAgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXh0RGF5KGRhdGUsIGRheSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlbHRhID0gZGF5IC0gZ2V0RGF5KGRhdGUpO1xuICBpZiAoZGVsdGEgPD0gMCkgZGVsdGEgKz0gNztcbiAgcmV0dXJuIGFkZERheXMoZGF0ZSwgZGVsdGEpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgbmV4dERheSBmcm9tIFwiLi4vbmV4dERheS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIG5leHRTdW5kYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFdoZW4gaXMgdGhlIG5leHQgU3VuZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogV2hlbiBpcyB0aGUgbmV4dCBTdW5kYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlIHwgbnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gc3RhcnQgY291bnRpbmcgZnJvbVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXh0IFN1bmRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoZW4gaXMgdGhlIG5leHQgU3VuZGF5IGFmdGVyIE1hciwgMjIsIDIwMjA/XG4gKiBjb25zdCByZXN1bHQgPSBuZXh0U3VuZGF5KG5ldyBEYXRlKDIwMjAsIDIsIDIyKSlcbiAqIC8vPT4gU3VuIE1hciAyOSAyMDIwIDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV4dFN1bmRheShkYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gbmV4dERheSh0b0RhdGUoZGF0ZSksIDApO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMDtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG52YXIgREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA9IDI7XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoaXNOYU4oZGF0ZSkgfHwgIWRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSB8fCB0aW1lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gbnVsbDtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdICYmIHBhcnNlSW50KGNhcHR1cmVzWzFdKTtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSAmJiBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgVGFnaWZ5IGZyb20gJ0B5YWlyZW8vdGFnaWZ5JztcclxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0LCBpc1Bhc3QsXHJcbiAgaXNTYW1lRGF5LCBuZXh0U3VuZGF5LCBnZXRNb250aCxcclxuICBmb3JtYXRSZWxhdGl2ZSwgcGFyc2VJU08sIHN1YkRheXMsIGlzVG9kYXl9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50LmpzXCI7XHJcbmltcG9ydCB7VGFza30gZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5pbXBvcnQgcHJpb3JpdHkgZnJvbSBcIi4vcHJpb3JpdHkuanNcIjtcclxuaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSBcIi4vVG9kb0xpc3RTdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7c2lkZWJhciwgVG9kb0xpc3RTaWRlYmFyfSBmcm9tIFwiLi9Ub2RvTGlzdFNpZGViYXIuanNcIjtcclxuY29uc3QgYyA9IG5ldyBDb21wb25lbnQoKTtcclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIGNvbnRhaW5pbmcgR1VJIGVsZW1lbnRzIHRoYXQgd291bGQgYmUgdXNlZCBpbnNpZGUgb2YgYSBUby1EbyBMaXN0IEFwcC5cclxuICogU3VjaCBHVUkgZWxlbWVudHMgaGF2ZSB0aGVpciBmdW5jdGlvbmFsaXRpZXMgaW5jb3Jwb3JhdGVkIGhlcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xyXG4gIHN0YXRpYyBwID0gcHJpb3JpdHk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGFuIGFkZCBidXR0b24sIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSB0YXNrcy5cclxuICAgKi9cclxuICBzdGF0aWMgYWRkVGFza0J1dHRvbigpe1xyXG4gICAgY29uc3QgYWRkVGFzayA9IGMuYnV0dG9uKFwiXCIpO1xyXG4gICAgYWRkVGFzay5pZCA9IFwiZGlzcGxheS1hc2stZm9ybS1idXR0b25cIjtcclxuICAgIGFkZFRhc2suYXBwZW5kKGMuZmFJY29uKFwiZmFzXCIsIFwiZmEtcGx1c1wiKSk7XHJcbiAgICBhZGRUYXNrLmFwcGVuZChjLnNwYW4oXCJDbGljayBoZXJlIHRvIGFkZCB0YXNrLi4uXCIpKTtcclxuXHJcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1mb3JtXCIpO1xyXG4gICAgICBpZiAoZWRpdEZvcm0gIT09IG51bGwpIHtcclxuICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kKFRvZG9MaXN0RWxlbWVudC5hZGRUYXNrRm9ybSgpKTtcclxuXHJcbiAgICAgIGxldCBjYXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jYXRlZ29yaWVzXCIpO1xyXG4gICAgICBuZXcgVGFnaWZ5KGNhdElucHV0KTtcclxuXHJcbiAgICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYWRkVGFzaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBmaWVsZHMgZm9yIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSB0YXNrIGF0dHJpYnV0ZXMuXHJcbiAgICogQHBhcmFtIHt9IGZvcm0gLSBUaGUgZm9ybSB0byBhZGQgZmllbGRzIG9uLlxyXG4gICAqIEByZXR1cm4gZm9ybSA9IFRoZSBmb3JtIHdpdGggZmllbGRzIG5vdyBhZGRlZCBvbnRvIGl0LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBfZ2VuZXJhdGVUYXNrRm9ybUZpZWxkcyhmb3JtLCBleGlzdGluZ1Rhc2tJZCA9IG51bGwpIHtcclxuICAgIGxldCBPS0J1dHRvbklkO1xyXG4gICAgaWYgKGV4aXN0aW5nVGFza0lkICE9IG51bGwpIHtcclxuICAgICAgT0tCdXR0b25JZCA9IFwiI3VwZGF0ZS10YXNrLXN1Ym1pdFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT0tCdXR0b25JZCA9IFwiI2FkZC10YXNrLXN1Ym1pdFwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcCA9IHByaW9yaXR5OyAvLyBjYWxsaW5nIHByaW9yaXR5IGJ5IGl0c2VsZiB3YXMgdW5kZWZpbmVkIGVhcmxpZXIuIFxyXG4gICAgLy8gTWF5YmUgc29tZXRoaW5nIHRvIGRvIHdpdGggZXhwb3J0IGJlaGF2aW9yIGFuZCBsZXhpY2FsIGVudmlyb25tZW50P1xyXG4gICAgLy8gQWZ0ZXIgdXNpbmcgY29ubmVjdGlvbiBpbiBpbmRleCwgaXQgc2VlbXMgdGhhdCBpdCBoYXMgdG8gZG8gd2l0aCB0aGUgZmFjdFxyXG4gICAgLy8gaXMgaW4gYSBjbGFzcz9cclxuXHJcbiAgICBsZXQgdGl0bGVGaWVsZCA9IGMuZm9ybUlucHV0KFwiVGl0bGVcIiwgXCJ0ZXh0XCIsIFwidGFzay10aXRsZVwiLCBcInRpdGxlXCIpO1xyXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBoZXJlIGZvciB0aXRsZVxyXG4gICAgdGl0bGVGaWVsZFsxXS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gXCJcIiB8fCBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE9LQnV0dG9uSWQpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoT0tCdXR0b25JZCkucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwcmlvcml0eUZpZWxkID0gYy5kcm9wZG93bihcIlByaW9yaXR5XCIsIFwicHJpb3JpdHlcIiwgXCJ0YXNrLXByaW9yaXR5XCIsIC4uLk9iamVjdC5rZXlzKHApKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkZpZWxkID0gYy50ZXh0QXJlYShcIkRlc2NyaXB0aW9uXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgbGV0IGNhdGVnb3J5RmllbGQgPSBjLmZvcm1JbnB1dChcIkNhdGVnb3J5XCIsIFwidGV4dFwiLCBcInRhc2stY2F0ZWdvcmllc1wiLCBcImNhdGVnb3JpZXNcIik7XHJcbiAgICBsZXQgZHVlRGF0ZUZpZWxkID0gYy5mb3JtSW5wdXQoXCJEdWUgRGF0ZVwiLCBcImRhdGVcIiwgXCJ0YXNrLWR1ZURhdGVcIiwgXCJkdWVEYXRlXCIpO1xyXG4gICAgXHJcbiAgICBsZXQgYWxsRmllbGRzID0gW3RpdGxlRmllbGQsIHByaW9yaXR5RmllbGQsIGRlc2NyaXB0aW9uRmllbGQsXHJcbiAgICAgICAgZHVlRGF0ZUZpZWxkLCBjYXRlZ29yeUZpZWxkXTtcclxuXHJcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBhbGxGaWVsZHMpIHtcclxuICAgICAgbGV0IGRpdiA9IGMuZGl2KGBjb250YWluZXItJHtmaWVsZFsxXS5pZH1gKTtcclxuICAgICAgZGl2LmFwcGVuZChmaWVsZFswXSwgZmllbGRbMV0pO1xyXG4gICAgICAvLyBhZGQgbGFiZWwgYW5kIHRoZSBpbnB1dCBlbGVtZW50IG9mIGVhY2ggZmllbGQuXHJcbiAgICAgIGZvcm0uYXBwZW5kKGRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nVGFza0lkICE9PSBudWxsKSB7XHJcbiAgICAgIGxldCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7ZXhpc3RpbmdUYXNrSWR9YCk7XHJcbiAgICAgIGxldCB0YXNrID0gY29ubmVjdGlvbi5nZXRJdGVtQnlJZChleGlzdGluZ1Rhc2tJZCk7XHJcbiAgICAgIHRpdGxlRmllbGRbMV0udmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAvL3ByaW9yaXR5RmllbGRbMV0udmFsdWUgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInByaW9yaXR5XCJdID4gb3B0aW9uJykuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBpZiAoZWxlbS52YWx1ZSA9PT0gdGFzay5wcmlvcml0eSkge1xyXG4gICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGlmICh0eXBlb2YgdGFzay5jYXRlZ29yaWVzID09PSBcInN0cmluZ1wiICYmIHRhc2suY2F0ZWdvcmllcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgLy8gICBjYXRlZ29yeUZpZWxkWzFdLnZhbHVlID0gSlNPTi5wYXJzZSh0YXNrLmNhdGVnb3JpZXMpOyAgXHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgY2F0ZWdvcnlGaWVsZFsxXS52YWx1ZSA9IHRhc2suY2F0ZWdvcmllcztcclxuICAgICAgLy8gfVxyXG4gICAgICBjYXRlZ29yeUZpZWxkWzFdLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGFzay5jYXRlZ29yaWVzKTtcclxuICAgICAgZGVzY3JpcHRpb25GaWVsZFsxXS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgIGR1ZURhdGVGaWVsZFsxXS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2dlbmVyYXRlVGFza0Zvcm1CdXR0b25zKGZvcm0sIGV4aXN0aW5nVGFza0lkID0gbnVsbCkge1xyXG4gICAgbGV0IG9rQnV0dG9uO1xyXG4gICAgbGV0IGNhbmNlbEJ1dHRvbjtcclxuICAgIGxldCBidXR0b25TZWN0aW9uO1xyXG5cclxuICAgIGJ1dHRvblNlY3Rpb24gPSBjLmRpdihcImZvcm0tYnV0dG9uc1wiKTtcclxuXHJcbiAgICBva0J1dHRvbiA9IGMuYnV0dG9uKFwiQWRkXCIsIFwiZm9ybS1idXR0b25cIik7XHJcbiAgICBjYW5jZWxCdXR0b24gPSBjLmJ1dHRvbihcIkNsb3NlXCIsIFwiZm9ybS1idXR0b25cIik7XHJcblxyXG4gICAgb2tCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIG9rQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xyXG4gICAgb2tCdXR0b24uc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xyXG5cclxuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBUb2RvTGlzdEVsZW1lbnQuX2Nsb3NlRm9ybSk7XHJcblxyXG4gICAgY2FuY2VsQnV0dG9uLmlkID0gXCJhZGQtdGFzay1jYW5jZWxcIjtcclxuICAgIGlmIChleGlzdGluZ1Rhc2tJZCA9PT0gbnVsbCkge1xyXG4gICAgICBva0J1dHRvbi5pZCA9IFwiYWRkLXRhc2stc3VibWl0XCI7XHJcbiAgICAgIFxyXG4gICAgICBva0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVG9kb0xpc3RFbGVtZW50Ll9oYW5kbGVBZGRUYXNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9rQnV0dG9uLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcclxuICAgICAgb2tCdXR0b24uaWQgPSBcInVwZGF0ZS10YXNrLXN1Ym1pdFwiO1xyXG4gICAgICBva0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgVG9kb0xpc3RFbGVtZW50Ll9oYW5kbGVVcGRhdGVUYXNrKGV4aXN0aW5nVGFza0lkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kKG9rQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xyXG4gICAgZm9ybS5hcHBlbmQoYnV0dG9uU2VjdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2Rpc3BsYXlFZGl0VGFza0Zvcm0oZSkge1xyXG4gICAgbGV0IHRhc2tWaWV3ID0gZS5jdXJyZW50VGFyZ2V0OyBcclxuICAgIHdoaWxlKCF0YXNrVmlldy5pZC5pbmNsdWRlcyhcInRhc2stXCIpKSB7XHJcbiAgICAgIHRhc2tWaWV3ID0gdGFza1ZpZXcucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3AgdXAgYW4gZWRpdCBmb3JtIHRoYXQgbG9va3MgbGlrZSB0aGUgYWRkdGFzayBmb3JtLlxyXG4gICAgbGV0IGV4aXN0aW5nVGFza0lkID0gK3Rhc2tWaWV3LmlkLnNwbGl0KFwidGFzay1cIilbMV07XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBcImVkaXQtdGFzay1mb3JtXCI7XHJcblxyXG4gICAgLy8gaWYgYWRkIGZvcm0gb3BlbiBjbG9zZSB0aGF0IGZvcm0gdXAuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktYXNrLWZvcm0tYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgbGV0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWZvcm1cIik7XHJcbiAgICBpZiAoYWRkRm9ybSAhPSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBhZGQgZm9ybS4uLlwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1mb3JtXCIpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gSGFkIHRvIGltcGxlbWVudCB0aGlzIHNpbmNlIHRoZSBhcHBlbmQgY2FsbFxyXG4gICAgLy8gZG9lc24ndCBzZWVtIHRvIGJlIGFibGUgdG8gcmVtb3ZlXHJcbiAgICAvLyBhIGR1cGxpY2F0ZSBmb3JtLi4uIChlZGl0IGZvcm0gb3BlbiBvbiB0d28gcG9zdHMpXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybS5pZH1gKSAhPT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtLmlkfWApLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0gPSBUb2RvTGlzdEVsZW1lbnQuX2dlbmVyYXRlVGFza0Zvcm1GaWVsZHMoZm9ybSwgZXhpc3RpbmdUYXNrSWQpO1xyXG4gICAgZm9ybSA9IFRvZG9MaXN0RWxlbWVudC5fZ2VuZXJhdGVUYXNrRm9ybUJ1dHRvbnMoZm9ybSwgZXhpc3RpbmdUYXNrSWQpO1xyXG5cclxuICAgIHRhc2tWaWV3LmFwcGVuZChmb3JtKTtcclxuICAgIC8vIFRPRE9cclxuICAgIC8vIGFuZCB0aGVuIGRpc2FibGUgdGhlIHZpZXcgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICAvLyB0YXNrVmlldy5jbGFzc0xpc3QuYWRkKFwiZm9ybS1hY3RpdmUtdGFzay1uby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIGxldCBjYXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jYXRlZ29yaWVzXCIpO1xyXG4gICAgbmV3IFRhZ2lmeShjYXRJbnB1dCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBnZW5lcmljIGFkZCBmb3JtIGZvciBhIFRhc2suXHJcbiAgICogQHJldHVybnMgZm9ybSAtIGZvcm0gZWxlbWVudCB3aXRoIFRhc2sgYXR0cmlidXRlcy5cclxuICAgKi9cclxuICBzdGF0aWMgYWRkVGFza0Zvcm0oKSB7XHJcbiAgICAvLyBFbnVtZXJhdGUgdGhyb3VnaCB0aGUgcHJvcGVydGllcyBvZiBhIFRhc2sgb2JqZWN0LCBhbmQgdGhlbiB1c2UgdGhhdFxyXG4gICAgLy8gdG8gY3JlYXRlIGlucHV0cyBiYXNlZCBvbiB0aGUgdHlwZS5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLmlkID0gXCJhZGQtdGFzay1mb3JtXCI7XHJcblxyXG4gICAgZm9ybSA9IFRvZG9MaXN0RWxlbWVudC5fZ2VuZXJhdGVUYXNrRm9ybUZpZWxkcyhmb3JtKTtcclxuICAgIGZvcm0gPSBUb2RvTGlzdEVsZW1lbnQuX2dlbmVyYXRlVGFza0Zvcm1CdXR0b25zKGZvcm0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfaGFuZGxlVXBkYXRlVGFzayh0YXNrSWQpIHtcclxuICAgIGxldCB0YXNrID0gVG9kb0xpc3RFbGVtZW50Ll9wYXJzZUZvcm1GaWVsZHMoKTtcclxuICAgIHRhc2suaWQgPSB0YXNrSWQ7XHJcblxyXG4gICAgY29ubmVjdGlvbi51cGRhdGUodGFzayk7XHJcbiAgICBUb2RvTGlzdEVsZW1lbnQuX3VwZGF0ZVRhc2tPblZpZXcodGFzayk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYXRlZ29yeS1saW5rcyA+ICpcIikuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgc2lkZWJhci51cGRhdGVDYXRlZ29yeVNpZGViYXJMaXN0aW5nKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX3VwZGF0ZVRhc2tPblZpZXcodGFzaykge1xyXG4gICAgbGV0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrLmlkfWApO1xyXG5cclxuICAgIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3LXRpdGxlXCIpLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuICAgIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3LXByaW9yaXR5XCIpLnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgIHRhc2tWaWV3LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3LWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlldy1kdWUtZGF0ZVwiKS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgVG9kb0xpc3RFbGVtZW50Ll9nZXREYXRlVGV4dEZvclRhc2sodGFzaywgdGFza1ZpZXcpO1xyXG5cclxuICAgIGxldCBjYXRlZ29yaWVzID0gdGFza1ZpZXcucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXctY2F0ZWdvcmllc1wiKTtcclxuICAgIFRvZG9MaXN0RWxlbWVudC5fYWRkQ2F0ZWdvcnlWaWV3VG9UYXNrVmlldyhjYXRlZ29yaWVzLCB0YXNrKTtcclxuXHJcbiAgICBjLnRvYXN0KFwiVGFzayB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLCAzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVGFzayB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgICAvLyByZW1vdmUgdGhlIGZvcm0gYWZ0ZXIgd2UndmUgZmluaXNoZWQgdXNpbmcgaXQuXHJcbiAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1mb3JtXCIpLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9hZGRDYXRlZ29yeVZpZXdUb1Rhc2tWaWV3KGNhdGVnb3J5RGl2LCB0YXNrKSB7XHJcbiAgICBjYXRlZ29yeURpdi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBpZiAodGFzay5jYXRlZ29yaWVzLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgIHRhc2suY2F0ZWdvcmllcy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgIGxldCBzcGFuID0gYy5zcGFuKGVsZW0udmFsdWUsIFwiY2F0ZWdvcnktbGFiZWxcIik7XHJcbiAgICAgICAgY2F0ZWdvcnlEaXYuYXBwZW5kKHNwYW4pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhdGVnb3J5RGl2LmFwcGVuZChjLnBhcmFncmFwaChcIk5vIGNhdGVnb3JpZXMgc2V0LlwiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYWtlcyBhIGdpdmVuIHRhc2sncyBkYXRlIGFuZCB1c2VzIGl0IHRvIGNyZWF0ZSB0ZXh0IGZvciBhbiBlbGVtZW50LlxyXG4gICAqIFdpbGwgbWFyayBhcyBvdmVyZHVlIGlmIHRoZSBkYXRlIGlzIHBhc3QgdGhlIGN1cnJlbnQgZGF5LCBvciBtYXJrIFxyXG4gICAqIG5vIGR1ZSBkYXRlIGlmIHRoZSB0YXNrIGRvZXMgbm90IGhhdmUgYSBkdWUgZGF0ZSwgaGVuY2UgaXQgbmVlZGluZyBhIFxyXG4gICAqIHJlZmVyZW5jZSB0byB0aGUgdGFzayB2aWV3LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIGRhdGVcclxuICAgKi9cclxuICBzdGF0aWMgX2dldERhdGVUZXh0Rm9yVGFzayh0YXNrLCB0YXNrVmlldykge1xyXG4gICAgbGV0IGR1ZURhdGVNc2c7XHJcbiAgICBpZiAodGFzay5kdWVEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgIGR1ZURhdGVNc2cgPSBcIk5vIER1ZSBEYXRlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHlwZW9mIHRhc2suZHVlRGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0YXNrLmR1ZURhdGUgPSBwYXJzZUlTTyh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGR1ZURhdGVNc2cgPSBcIkR1ZSBcIiArIGZvcm1hdCh0YXNrLmR1ZURhdGUsICdQJyk7XHJcbiAgICAgIGlmICghaXNTYW1lRGF5KCh0YXNrLmR1ZURhdGUpLCBuZXcgRGF0ZSgpKSAmJiBpc1Bhc3QodGFzay5kdWVEYXRlKSkge1xyXG4gICAgICAgIHRhc2tWaWV3LmNsYXNzTGlzdC5hZGQoXCJvdmVyZHVlXCIpO1xyXG4gICAgICAgIGR1ZURhdGVNc2cgPSBcIihPdmVyZHVlKSBcIiArIGR1ZURhdGVNc2c7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza1ZpZXcuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJkdWVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkdWVEYXRlTXNnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9oYW5kbGVBZGRUYXNrKCkge1xyXG4gICAgbGV0IHRhc2sgPSBUb2RvTGlzdEVsZW1lbnQuX3BhcnNlRm9ybUZpZWxkcygpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stc3VibWl0XCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhZGQtdGFzay1mb3JtIGlucHV0W2lkXj10YXNrLV0sICNhZGQtdGFzay1mb3JtIHRleHRhcmVhXCIpXHJcbiAgICAgICAgLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIFRvZG9MaXN0RWxlbWVudC5hZGRUYXNrVG9WaWV3KHRhc2ssIFwiI3Rhc2tzLWFjdGl2ZVwiKTtcclxuICAgIFxyXG4gICAgVG9kb0xpc3RFbGVtZW50LmNvbm5lY3Rpb24uYWRkKHRhc2spO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2F0ZWdvcnktbGlua3MgPiAqXCIpLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIHNpZGViYXIudXBkYXRlQ2F0ZWdvcnlTaWRlYmFyTGlzdGluZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9wYXJzZUZvcm1GaWVsZHMoKSB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrKCk7XHJcbiAgICB0YXNrLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgdGFzay5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICB0YXNrLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlRGF0ZVwiKS52YWx1ZTtcclxuICAgIGlmICh0YXNrLmR1ZURhdGUgIT09IFwiXCIpIHtcclxuICAgICAgdGFzay5kdWVEYXRlID0gcGFyc2VJU08odGFzay5kdWVEYXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY2F0ZWdvcmllc1wiKS52YWx1ZTtcclxuICAgIGlmIChjYXRlZ29yaWVzICE9PSBcIlwiKSB7XHJcbiAgICAgIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGNhdGVnb3JpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3JpZXMgPSAoWy4uLm5ldyBTZXQoY2F0ZWdvcmllcyldKVxyXG4gICAgdGFzay5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgX2Nsb3NlRm9ybShlKSB7XHJcbiAgICBsZXQgZWxlbSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIHdoaWxlICghZWxlbS5pZC5pbmNsdWRlcyhcInRhc2stZm9ybVwiKSkge1xyXG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpZCA9IGVsZW0uaWQ7XHJcbiAgICBlbGVtLnJlbW92ZSgpO1xyXG4gICAgLy8gZGlzcGxheSB0aGUgYnV0dG9uIGFnYWluIGlmIHRoZSBmb3JtIGJlaW5nIGNsb3NlZCBpcyB0aGUgYWRkLXRhc2stZm9ybS5cclxuICAgIGlmIChpZCA9PT0gXCJhZGQtdGFzay1mb3JtXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWFzay1mb3JtLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGFza3MgdG8gdW5kZXJuZWF0aCBhIGdpdmVuIHBhcmVudCBjb250YWluZXIuXHJcbiAgICogQHBhcmFtIHRhc2sgLSBUaGUgdGFzayBvYmplY3QgdG8gZ2l2ZS5cclxuICAgKiBAcGFyYW0gcGFyZW50U2VsZWN0b3Ige3N0cmluZ30gLSBSdWxlIHRvIHNlbGVjdCBhIGNvbnRhaW5lci5cclxuICAgKi9cclxuICBzdGF0aWMgYWRkVGFza1RvVmlldyh0YXNrLCBwYXJlbnRTZWxlY3Rvcikge1xyXG4gICAgXHJcbiAgICBsZXQgdGFza1ZpZXcgPSBjLmRpdihcInRhc2tcIik7XHJcblxyXG4gICAgbGV0IHRhc2tJbmZvcm1hdGlvbkFyZWEgPSBjLmRpdihcInRhc2staW5mb3JtYXRpb25cIik7XHJcbiAgICBsZXQgdGFza0RyYWdBcmVhID0gYy5kaXYoXCJ0YXNrLW1vdmVcIik7XHJcbiAgICBsZXQgdGFza0NvbnRyb2xBcmVhID0gYy5kaXYoXCJ0YXNrLWNvbnRyb2xzXCIpO1xyXG5cclxuICAgIC8vIEluZm9ybWF0aW9uIFNlY3Rpb24gQmVnaW5cclxuICAgIHRhc2tWaWV3LmlkID0gXCJ0YXNrLVwiICsgdGFzay5pZDtcclxuICAgIGxldCBoZWFkZXIgPSBjLmhlYWRpbmcodGFzay50aXRsZSwgMiwgXCJ0YXNrLXZpZXctdGl0bGVcIik7XHJcbiAgICBsZXQgY3JlYXRlRGF0ZSA9IGMucGFyYWdyYXBoKGZvcm1hdCh0YXNrLmlkLCBcIidBZGRlZCcgTU0vZGQveXl5eVwiKSwgXCJ0YXNrLXZpZXctY3JlYXRlLWRhdGVcIik7IC8vYy5wYXJhZ3JhcGgoKTtcclxuXHJcbiAgICBsZXQgZHVlRGF0ZSA9IGMucGFyYWdyYXBoKFwiXCIsIFwidGFzay12aWV3LWR1ZS1kYXRlXCIpO1xyXG4gICAgXHJcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gVG9kb0xpc3RFbGVtZW50Ll9nZXREYXRlVGV4dEZvclRhc2sodGFzaywgdGFza1ZpZXcpO1xyXG5cclxuICAgIGxldCBwcmlvcml0eSA9IGMucGFyYWdyYXBoKFwiXCIsIFwidGFzay12aWV3LXByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGMucGFyYWdyYXBoKHRhc2suZGVzY3JpcHRpb24sIFwidGFzay12aWV3LWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBjLmRpdihcInRhc2stdmlldy1jYXRlZ29yaWVzXCIpO1xyXG4gICAgVG9kb0xpc3RFbGVtZW50Ll9hZGRDYXRlZ29yeVZpZXdUb1Rhc2tWaWV3KGNhdGVnb3JpZXMsIHRhc2spO1xyXG5cclxuICAgIGxldCBnZW5lcmFsSW5mbyA9IGMuZGl2KFwiZ2VuZXJhbC1pbmZvXCIpO1xyXG4gICAgbGV0IGV4cGFuZGVkSW5mbyA9IGMuZGl2KFwiZXhwYW5kZWQtaW5mb1wiLCBcIm5vLWRpc3BsYXlcIik7XHJcbiAgICBsZXQgZXhwYW5kQnV0dG9uID0gYy5idXR0b24oXCJcIiwgXCJleHBhbmQtdGFzay1idXR0b25cIik7XHJcbiAgICBsZXQgZXhwYW5kSWNvbiA9IGMuZmFJY29uKFwiZmFzXCIsIFwiZmEtY2hldnJvbi1kb3duXCIpO1xyXG5cclxuICAgIGdlbmVyYWxJbmZvLmFwcGVuZChoZWFkZXIsIGR1ZURhdGUpO1xyXG4gICAgZXhwYW5kZWRJbmZvLmFwcGVuZChkZXNjcmlwdGlvbiwgY2F0ZWdvcmllcywgcHJpb3JpdHksIGNyZWF0ZURhdGUpO1xyXG4gICAgZXhwYW5kQnV0dG9uLmFwcGVuZChleHBhbmRJY29uKTtcclxuICAgIFxyXG4gICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwicG9pbnQtZG93blwiKTtcclxuICAgICAgbGV0IHRhc2sgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIHdoaWxlICghdGFzay5pZC5pbmNsdWRlcyhcInRhc2stXCIpKSB7XHJcbiAgICAgICAgdGFzayA9IHRhc2sucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kZWQtaW5mb1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tZGlzcGxheVwiKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGFza0luZm9ybWF0aW9uQXJlYS5hcHBlbmQoZ2VuZXJhbEluZm8sIGV4cGFuZGVkSW5mbywgZXhwYW5kQnV0dG9uKTtcclxuICAgIC8vIEluZm9ybWF0aW9uIFNlY3Rpb24gRW5kXHJcblxyXG4gICAgLy8gQ29udHJvbHMgU2VjdGlvbiBCZWdpblxyXG5cclxuICAgIGxldCBmaW5pc2hCdXR0b24gPSBjLmJ1dHRvbihcIlwiLCBcInRhc2stdmlldy1maW5pc2gtYnV0dG9uXCIpO1xyXG4gICAgbGV0IGZpbmlzaEljb24gPSBjLmZhSWNvbihcImZhc1wiLCBcImZhLWNoZWNrLXNxdWFyZVwiKTtcclxuICAgIGZpbmlzaEJ1dHRvbi5hcHBlbmQoZmluaXNoSWNvbiwgXCJGaW5pc2hcIik7XHJcbiAgICBcclxuICAgIGxldCBlZGl0QnV0dG9uID0gYy5idXR0b24oXCJcIiwgXCJ0YXNrLXZpZXctZWRpdC1idXR0b25cIik7XHJcbiAgICBsZXQgZWRpdEljb24gPSBjLmZhSWNvbihcImZhc1wiLCBcImZhLWVkaXRcIik7XHJcbiAgICBlZGl0QnV0dG9uLmFwcGVuZChlZGl0SWNvbiwgXCJFZGl0XCIpO1xyXG5cclxuICAgIGxldCBkZWxldGVCdXR0b24gPSBjLmJ1dHRvbihcIlwiLCBcInRhc2stdmlldy1kZWxldGUtYnV0dG9uXCIpO1xyXG4gICAgbGV0IGRlbGV0ZUljb24gPSBjLmZhSWNvbihcImZhc1wiLCBcImZhLXRyYXNoLWFsdFwiKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlSWNvbiwgXCJEZWxldGVcIik7XHJcblxyXG4gICAgdGFza0NvbnRyb2xBcmVhLmFwcGVuZChmaW5pc2hCdXR0b24sIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gQ29udHJvbHMgU2VjdGlvbiBFbmRcclxuXHJcbiAgICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG9MaXN0RWxlbWVudC5fY29tcGxldGVUYXNrKTtcclxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG9MaXN0RWxlbWVudC5fZGlzcGxheUVkaXRUYXNrRm9ybSk7XHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG9MaXN0RWxlbWVudC5fZGVsZXRlVGFzayk7XHJcblxyXG4gICAgbGV0IGRyYWdCdXR0b24gPSBjLmJ1dHRvbihcIlwiLCBcInRhc2stdmlldy1kcmFnLWJ1dHRvblwiKTtcclxuICAgIGxldCBkcmFnSWNvbiA9IGMuZmFJY29uKFwiZmFzXCIsIFwiZmEtZ3JpcC12ZXJ0aWNhbFwiKTtcclxuICAgIGRyYWdCdXR0b24uYXBwZW5kKGRyYWdJY29uKTtcclxuXHJcbiAgICB0YXNrRHJhZ0FyZWEuYXBwZW5kKGRyYWdCdXR0b24pO1xyXG5cclxuICAgIHRhc2tWaWV3LmFwcGVuZCh0YXNrRHJhZ0FyZWEsIHRhc2tJbmZvcm1hdGlvbkFyZWEsIHRhc2tDb250cm9sQXJlYSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3RvcikuYXBwZW5kKHRhc2tWaWV3KTtcclxuXHJcbiAgICBkcmFnQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICB0YXNrVmlldy5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZHJhZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICAgIHRhc2tWaWV3LnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhc2tWaWV3LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XHJcbiAgICBUb2RvTGlzdEVsZW1lbnQuX2FwcGx5RHJhZ0NhcGFiaWxpdGllcygpO1xyXG4gICAgXHJcbiAgICBsZXQgYnV0dG9uc1NlbGVjdG9yID0gXCIudGFzay1tb3ZlID4gYnV0dG9uLCAudGFzay1jb250cm9scyA+IGJ1dHRvblwiO1xyXG4gICAgLy8gRGVmYXVsdCBzdGF0ZSwgYWxsIGJ1dHRvbnMgYXJlIGxvdyBvcGFjaXR5LlxyXG4gICAgdGFza1ZpZXcucXVlcnlTZWxlY3RvckFsbChidXR0b25zU2VsZWN0b3IpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJsb3ctb3BhY2l0eVwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBBcHBseSBob3ZlciBjYXBhYmlsaXRpZXMsIGFuZCB0aGF0J3Mgd2hlbiBidXR0b25zIGFyZSBzaG93bi5cclxuICAgIHRhc2tWaWV3Lm9ubW91c2VvdmVyID0gKGUpID0+IHtcclxuICAgICAgbGV0IHRhc2tWaWV3ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICB3aGlsZSAoIXRhc2tWaWV3LmlkLmluY2x1ZGVzKFwidGFzay1cIikpIHtcclxuICAgICAgICB0YXNrVmlldyA9IHRhc2tWaWV3LnBhcmVudE5vZGU7XHJcbiAgICAgIH1cclxuICAgICAgdGFza1ZpZXcucXVlcnlTZWxlY3RvckFsbChidXR0b25zU2VsZWN0b3IpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImxvdy1vcGFjaXR5XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRhc2tWaWV3Lm9ubW91c2VvdXQgPSAoZSkgPT4ge1xyXG4gICAgICBsZXQgdGFza1ZpZXcgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIHdoaWxlICghdGFza1ZpZXcuaWQuaW5jbHVkZXMoXCJ0YXNrLVwiKSkge1xyXG4gICAgICAgIHRhc2tWaWV3ID0gdGFza1ZpZXcucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICB0YXNrVmlldy5xdWVyeVNlbGVjdG9yQWxsKGJ1dHRvbnNTZWxlY3RvcikuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwibG93LW9wYWNpdHlcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBfYXBwbHlEcmFnQ2FwYWJpbGl0aWVzKCkge1xyXG4gICAgbGV0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZVwiKTtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goZHJhZ2dhYmxlID0+IHtcclxuICAgICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcclxuICAgICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgLy8gZHJhZ292ZXI6IGZpcmVkIHdoZW4gYW4gZWxlbWVudCBvciB0ZXh0IHNlbGVjdGlvblxyXG4gICAgICAvLyBpcyBiZWluZyBkcmFnZ2VkIG92ZXIgYSB2YWxpZCBkcm9wIHRhcmdldCBcclxuICAgICAgLy8gdXNlIGUucHJldmVudERlZmF1bHQoKSAtLSBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgdGhhdCBpcyBcclxuICAgICAgLy8gbm90IGV4cGxpY2l0bHkgaGFuZGxlZCwgd2hpY2gsIGluIHRoaXMgY2FzZSwgaXMgZHJhZ2dpbmcuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGFmdGVyRWxlbWVudCA9IGdldERyYWdBZnRlckVsZW1lbnQoZS5jbGllbnRZKTtcclxuICAgICAgY29uc3QgYWN0aXZlRHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2luZ1wiKTtcclxuICAgICAgXHJcbiAgICAgIC8vIGlmIGFmdGVyRWxlbWVudCBpcyBudWxsLCB3ZSdyZSBhdCB0aGUgYm90dG9tIGZvIHRoZSBsaXN0XHJcbiAgICAgIGlmIChhZnRlckVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGFjdGl2ZURyYWdnYWJsZSk7IFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlbHNlIG91ciBtb3VzZSBpcyBob3ZlcmluZyBhYm92ZSBhbiBlbGVtZW50LCBzbyBpbnNlcnQgYmVmb3JlIGl0LlxyXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoYWN0aXZlRHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KG1vdXNlWSkge1xyXG4gICAgICAvLyBnZXQgYWxsIGVsZW1lbnRzIG5vdCBiZWluZyBkcmFnZ2VkLlxyXG4gICAgICBjb25zdCBpbmFjdGl2ZURyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGNvbnRhaW5lci5cclxuICAgICAgICAgIHF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpXCIpKTtcclxuXHJcbiAgICAgIC8vIHJlZHVjZSgpIGNhbGwsIHdoaWNoIHdpbGwgZmluZCB1cyB0aGUgZWxlbWVudCB0aGF0IGlzIFxyXG4gICAgICAvLyBhZnRlciB0aGUgbW91c2UgY3Vyc29yIGJhc2VkIG9uIHRoZSB5IHBvc2l0aW9uIHdlIHBhc3MgaW4uXHJcbiAgICAgIC8vIHdlIGp1c3QgbmVlZCB0byBmaWd1cmUgb3V0IHRoZSBvZmZzZXQgb2YgdGhlIGN1cnNvclxyXG4gICAgICAvLyBhZ2FpbnN0IHRoZSBlbGVtZW50IGFmdGVyIGl0LlxyXG4gICAgICByZXR1cm4gaW5hY3RpdmVEcmFnZ2FibGVzLnJlZHVjZSgoY2xvc2VzdEVsZW0sIGVsZW0pID0+IHtcclxuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6XHJcbiAgICAgICAgLy8gcmV0dXJucyBhIERPTVJlY3Qgb2JqZWN0IHByb3ZpZGluZyBpbmZvcm1hdGlvblxyXG4gICAgICAgIC8vIGFib3V0IHRoZSBzaXplIG9mIGFuIGVsZW1lbnQgYW5kIGl0cyBwb3NpdGlvbiByZWxhdGl2ZVxyXG4gICAgICAgIC8vIHRvIHRoZSB2aWV3cG9ydC5cclxuICAgICAgICAvLyB3ZSBnZXQgdGhlIHNpemUgb2YgdGhlIHRhc2sgKHdpZHRoICsgaGVpZ2h0KVxyXG4gICAgICAgIC8vIGFuZCB0aGVuIGl0cyBwb3NpdGlvbiByZWwgdG8gdGhlIHZpZXdwb3J0ICh0b3AgYW5kIGxlZnQpXHJcbiAgICAgICAgY29uc3QgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBib3ggdG8gb3VyIG1vdXNlLlxyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IG1vdXNlWSAtIGJveC50b3AgLSAoYm94LmhlaWdodCAvIDIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob2Zmc2V0KTtcclxuICAgICAgICBpZiAob2Zmc2V0ID4gY2xvc2VzdEVsZW0ub2Zmc2V0ICYmIG9mZnNldCA8IDApIHtcclxuICAgICAgICAgIC8vIHJldHVybiBhIG5ldyAnY2xvc2VzdEVsZW0nIGlmIHRoaXMgZWxlbSBvZmZzZXQgaXMgXHJcbiAgICAgICAgICAvLyBncmVhdGVyIHRoYW4gdGhlIG90aGVyIChpdCdzIGNsb3NlciB0aGFuIGFueVxyXG4gICAgICAgICAgLy8gb3RoZXIgZWxlbWVudCBpbiB0aGUgYXJyYXkpIGFuZCB0aGUgb2Zmc2V0XHJcbiAgICAgICAgICAvLyBpcyBsZXNzIHRoYW4gMCAodGhlIG1vdXNlIGlzIGFib3ZlIHRoZSBlbGVtZW50KVxyXG4gICAgICAgICAgcmV0dXJuIHtvZmZzZXQ6IG9mZnNldCwgZWxlbWVudDogZWxlbX07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBjbG9zZXN0RWxlbTsgLy8gbWFpbnRhaW4gY2xvc2VzdEVsZW0gYXMgY2xvc2VzdC5cclxuICAgICAgICB9XHJcbiAgICAgICB9LCB7b2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFl9KS5lbGVtZW50O1xyXG4gICAgICAvLyBvZmZzZXQgaXMgaW5maW5pdHkgc28gdGhhdCB3ZSBoYXZlIGFuIGVsZW1lbnQgdGhhdCBjYW4gYmUgcmV0dXJuZWRcclxuICAgICAgLy8gZXZlcnkgc2luZ2xlIGVsZW1lbnQgaXMgZ29pbmcgdG8gYmUgY2xvc2VyIHRoYW4gdGhlIElORklOSVRZLlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9jb21wbGV0ZVRhc2soZSkge1xyXG4gICAgbGV0IHRhc2tWaWV3ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgd2hpbGUgKCF0YXNrVmlldy5pZC5pbmNsdWRlcyhcInRhc2stXCIpKSB7XHJcbiAgICAgIHRhc2tWaWV3ID0gdGFza1ZpZXcucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWQgPSArdGFza1ZpZXcuaWQuc3BsaXQoXCJ0YXNrLVwiKVsxXTtcclxuXHJcbiAgICAvLyBNYXJrIHRoZSB0YXNrIGFzIGNvbXBsZXRlZFxyXG4gICAgbGV0IHRhc2sgPSBUb2RvTGlzdEVsZW1lbnQuY29ubmVjdGlvbi5nZXRJdGVtQnlJZChpZCk7XHJcbiAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAvLyB1cGRhdGUgdGhlIHN0b3JhZ2UgYXJyYXkuXHJcbiAgICBUb2RvTGlzdEVsZW1lbnQuY29ubmVjdGlvbi51cGRhdGUodGFzayk7XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSB0aGUgZmluaXNoIGJ1dHRvbiBmcm9tIHRhc2t2aWV3XHJcbiAgICAvLyB0YXNrVmlldy5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlldy1maW5pc2gtYnV0dG9uXCIpLnJlbW92ZSgpO1xyXG4gICAgdGFza1ZpZXcucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2RlbGV0ZVRhc2soZSkge1xyXG4gICAgbGV0IHRhc2tWaWV3ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgd2hpbGUgKCF0YXNrVmlldy5pZC5pbmNsdWRlcyhcInRhc2stXCIpKSB7XHJcbiAgICAgIHRhc2tWaWV3ID0gdGFza1ZpZXcucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFza0lkID0gK3Rhc2tWaWV3LmlkLnNwbGl0KFwidGFzay1cIilbMV07XHJcbiAgICBsZXQgdGFza1RpdGxlID0gdGFza1ZpZXcucXVlcnlTZWxlY3RvcihcIi50YXNrLXZpZXctdGl0bGVcIikudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChlKSA9PiB7XHJcbiAgICAgIC8vIHJlbW92ZSB0aGUgdmlld1xyXG4gICAgICB0YXNrVmlldy5yZW1vdmUoKTtcclxuICAgICAgLy8gcmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIHN0b3JhZ2UuXHJcbiAgICAgIGNvbm5lY3Rpb24ucmVtb3ZlKHRhc2tJZCk7XHJcblxyXG4gICAgICBjLnRvYXN0KFwiVGFzayBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIiwgMyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlbW92ZVByb21wdCA9IGMuY29uZmlybU1vZGFsKFxyXG4gICAgICAgIFwiYWRkLXRhc2tzLWRlbGV0ZS1kaWFsb2dcIixcclxuICAgICAgICBcIkRlbGV0ZSBUYXNrXCIsXHJcbiAgICAgICAgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHt0YXNrVGl0bGUudHJpbSgpfT9gLFxyXG4gICAgICAgIFwiRGVsZXRlXCIsXHJcbiAgICAgICAgXCJDYW5jZWxcIixcclxuICAgICAgICByZW1vdmVUYXNrLFxyXG4gICAgICAgIG51bGxcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmFwcGVuZChyZW1vdmVQcm9tcHQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbHRlclRhc2tzKGZpbHRlck5hbWUsIHR5cGUpIHtcclxuICAgIGxldCBpdGVtcztcclxuICAgIGxldCBjb25kaXRpb247XHJcblxyXG4gICAgaWYgKGZpbHRlck5hbWUgIT09IFwiY29tcGxldGVkXCIpIHtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImF0dHJpYnV0ZVwiOlxyXG4gICAgICAgIGlmIChmaWx0ZXJOYW1lID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICBjb25kaXRpb24gPSAoZWxlbSkgPT4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlck5hbWUgPT09IFwibm9kYXRlXCIpIHtcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IChlbGVtKSA9PiAoZWxlbS5kdWVEYXRlID09PSBcIlwiKTsgXHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lID09PSBcImNvbXBsZXRlZFwiKSB7XHJcbiAgICAgICAgICBjb25kaXRpb24gPSAoZWxlbSkgPT4gKGVsZW0uY29tcGxldGVkID09PSB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgaWYgKGZpbHRlck5hbWUgPT09IFwidG9kYXlcIikge1xyXG4gICAgICAgICAgY29uZGl0aW9uID0gKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbGVtLmR1ZURhdGUgIT09IFwiXCIgJiYgaXNUb2RheShwYXJzZUlTTyhlbGVtLmR1ZURhdGUpKSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyTmFtZSA9PT0gXCJ3ZWVrXCIpIHtcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLmR1ZURhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChjb21wYXJlQXNjKG5leHRTdW5kYXkodG9kYXkpLCBwYXJzZUlTTyhlbGVtLmR1ZURhdGUpKSA9PT0gMSlcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLmR1ZURhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldE1vbnRoKG5ldyBEYXRlKCkpID09PSBnZXRNb250aChwYXJzZUlTTyhlbGVtLmR1ZURhdGUpKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY2F0ZWdvcnlcIjpcclxuICAgICAgICBjb25kaXRpb24gPSAoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgY2F0IG9mIGVsZW0uY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBpZiAoY2F0LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZpbHRlck5hbWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbHRlck5hbWUgIT09IFwiY29tcGxldGVkXCIpIHtcclxuICAgICAgaXRlbXMgPSBUb2RvTGlzdEVsZW1lbnQuY29ubmVjdGlvbi5nZXRBbGxJdGVtcygpXHJcbiAgICAgIC5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpXHJcbiAgICAgIC5maWx0ZXIoY29uZGl0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1zID0gVG9kb0xpc3RFbGVtZW50LmNvbm5lY3Rpb24uZ2V0QWxsSXRlbXMoKS5maWx0ZXIoY29uZGl0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtcyk7XHJcbiAgICAvLyBjb25zb2xlLnRyYWNlKCk7XHJcbiAgICBUb2RvTGlzdEVsZW1lbnQudXBkYXRlVGFza1ZpZXcoZmlsdGVyTmFtZSwgaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSB0YXNrIHZpZXcgd2l0aCBnaXZlbiB0YXNrcywgYW5kIHNob3cgdGhlIGZpbHRlciBhcyB0aGUgaGVhZGVyIG5hbWUuXHJcbiAgICovXHJcbiAgc3RhdGljIHVwZGF0ZVRhc2tWaWV3KGZpbHRlck5hbWUsIHRhc2tzKSB7XHJcbiAgICBsZXQgcGFyZW50Q29udGFpbmVyID0gXCIjdGFza3MtYWN0aXZlXCI7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGFsbCB0YXNrIHZpZXdzIGZyb20gdGhlIHZpZXcuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3BhcmVudENvbnRhaW5lcn0gPiAudGFza2ApLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZ1wiKTtcclxuICAgICAgZWxlbS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgLy8gdXBkYXRlIHRoZSB2aWV3Li4uXHJcbiAgICAvLyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBmaWx0ZXIsIHVubGVzcyBpdCdzIGEgY2F0ZWdvcnkuXHJcbiAgICBsZXQgZGlzcGxheUxhYmVsO1xyXG4gICAgaWYgKGZpbHRlck5hbWUgaW4gc2lkZWJhci5zaWRlYmFyTGlua3MpIHtcclxuICAgICAgZGlzcGxheUxhYmVsID0gc2lkZWJhci5zaWRlYmFyTGlua3NbZmlsdGVyTmFtZV0uZGlzcGxheUxhYmVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGxheUxhYmVsID0gZmlsdGVyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhcmVudENvbnRhaW5lcn0gPiAudGFzay1zZWN0aW9uLWhlYWRlcmApXHJcbiAgICAgICAgLnRleHRDb250ZW50ID0gZGlzcGxheUxhYmVsO1xyXG4gICAgLy8gYW5kIGZvciB0aGUgbmV3IHRhc2tzLlxyXG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xyXG4gICAgICBUb2RvTGlzdEVsZW1lbnQuYWRkVGFza1RvVmlldyh0YXNrLCBwYXJlbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgLy8gZG9uJ3QgbGV0IHVzZXJzIGFkZCBmb3IgY29tcGxldGVkIHRhc2tzIHNlY3Rpb24uXHJcbiAgICBpZiAoZmlsdGVyTmFtZSA9PT0gXCJjb21wbGV0ZWRcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWFkZFwiKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtYWRkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSBcIi4vVG9kb0xpc3RTdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQuanNcIjtcclxuaW1wb3J0IHtUb2RvTGlzdEVsZW1lbnR9IGZyb20gXCIuL1RvZG9MaXN0RWxlbWVudC5qc1wiO1xyXG5cclxuY2xhc3MgVG9kb0xpc3RTaWRlYmFyIHtcclxuICBcclxuICAjbXFsO1xyXG4gICNjO1xyXG4gICNzaWRlYmFyQkc7XHJcbiAgI3NpZGViYXJDb250YWluZXI7XHJcbiAgI3NpZGViYXJDb250ZW50O1xyXG4gICNzaWRlYmFyQ2F0ZWdvcnlDb250YWluZXI7XHJcbiAgc2lkZWJhckxpbmtzID0ge1xyXG4gICAgYWxsOiB7XHJcbiAgICAgIGRpc3BsYXlMYWJlbDogXCJBbGxcIixcclxuICAgICAgdHlwZTogXCJhdHRyaWJ1dGVcIlxyXG4gICAgfSwgXHJcbiAgICB0b2RheToge1xyXG4gICAgICBkaXNwbGF5TGFiZWw6IFwiVG9kYXlcIixcclxuICAgICAgdHlwZTogXCJkYXRlXCJcclxuICAgIH0sIFxyXG4gICAgd2Vlazoge1xyXG4gICAgICBkaXNwbGF5TGFiZWw6IFwiVGhpcyBXZWVrXCIsXHJcbiAgICAgIHR5cGU6IFwiZGF0ZVwiXHJcbiAgICB9LFxyXG4gICAgbW9udGg6IHtcclxuICAgICAgZGlzcGxheUxhYmVsOiBcIlRoaXMgTW9udGhcIixcclxuICAgICAgdHlwZTogXCJkYXRlXCJcclxuICAgIH0sXHJcbiAgICBub2RhdGU6IHtcclxuICAgICAgZGlzcGxheUxhYmVsOiBcIk5vIER1ZSBEYXRlXCIsXHJcbiAgICAgIHR5cGU6IFwiYXR0cmlidXRlXCJcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICBkaXNwbGF5TGFiZWw6IFwiQnkgQ2F0ZWdvcnlcIixcclxuICAgICAgdHlwZTogXCJjYXRlZ29yeVwiXHJcbiAgICB9LFxyXG4gICAgY29tcGxldGVkOiB7XHJcbiAgICAgIGRpc3BsYXlMYWJlbDogXCJDb21wbGV0ZWRcIixcclxuICAgICAgdHlwZTogXCJhdHRyaWJ1dGVcIlxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiNjID0gbmV3IENvbXBvbmVudCgpO1xyXG5cclxuICAgIHRoaXMuI3NpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIHRoaXMuI3NpZGViYXJDb250ZW50LmlkID0gXCJzaWRlYmFyLW5hdlwiO1xyXG5cclxuICAgIHRoaXMuI3NpZGViYXJCRyA9IHRoaXMuI2MuZGl2KFwic2lkZWJhci13cmFwcGVyXCIpO1xyXG4gICAgLy8gdGhpcy4jc2lkZWJhckJHLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNoaWRlU2lkZUJhcik7XHJcbiAgICB0aGlzLiNzaWRlYmFyQ29udGFpbmVyID0gdGhpcy4jYy5kaXYoXCJzaWRlYmFyXCIpO1xyXG5cclxuICAgIHRoaXMuI3NpZGViYXJCRy5hcHBlbmQodGhpcy4jc2lkZWJhckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLiNzaWRlYmFyQ29udGFpbmVyLmFwcGVuZCh0aGlzLiNzaWRlYmFyQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy4jbG9hZFNpZGVCYXIoKTtcclxuICB9XHJcblxyXG4gIHNldCBtcWwodmFsdWUpIHtcclxuICAgIHRoaXMuI21xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3ZhbHVlfXB4KWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1xbCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNtcWw7XHJcbiAgfVxyXG5cclxuICAjbG9hZFNpZGVCYXIoKSB7XHJcbiAgICBsZXQgc2lkZUJhckxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBsaW5rIGluIHRoaXMuc2lkZWJhckxpbmtzKSB7XHJcbiAgICAgIGxldCBsaW5rVWw7XHJcbiAgICAgIGxldCBsaW5rSWQ7XHJcbiAgICAgIGxldCBsaW5rQnV0dG9uO1xyXG5cclxuICAgICAgbGlua1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBsaW5rQnV0dG9uID0gdGhpcy4jYy5idXR0b24odGhpcy5zaWRlYmFyTGlua3NbbGlua10uZGlzcGxheUxhYmVsKTtcclxuICAgICAgbGlua0lkID0gYG5hdi1saW5rLSR7bGlua31gO1xyXG4gICAgICBcclxuICAgICAgbGlua1VsLmlkID0gbGlua0lkO1xyXG4gICAgICBsaW5rVWwuY2xhc3NMaXN0LmFkZChcInRhc2stdHlwZS1uYXYtbGlua1wiKTtcclxuXHJcblxyXG4gICAgICBpZiAobGluayAhPT0gXCJjYXRlZ29yeVwiKSB7IC8vIHNraXAgY2F0ZWdvcnkgaGFuZGxlciBhZGRpdGlvbiwgd2lsbCBiZSBkb25lIGVsc2V3aGVyZS5cclxuICAgICAgICBsaW5rVWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBsZXQgY3VycmVudFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcInNpZGViYXItc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICBUb2RvTGlzdEVsZW1lbnQuZmlsdGVyVGFza3MobGluaywgdGhpcy5zaWRlYmFyTGlua3NbbGlua10udHlwZSlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmsgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICBsaW5rVWwuY2xhc3NMaXN0LmFkZChcInNpZGViYXItc2VsZWN0ZWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpbmtVbC5hcHBlbmQobGlua0J1dHRvbik7XHJcbiAgXHJcbiAgICAgIHNpZGVCYXJMaW5rc0NvbnRhaW5lci5hcHBlbmQobGlua1VsKTtcclxuXHJcbiAgICAgIC8vIHNhdmUgY2F0ZWdvcnkgaWQgZWxlbWVudCByZWZlcmVuY2UsIHNvIHRoYXQgd2UgY2FuIHVwZGF0ZSBpdHMgY2F0ZWdvcmllcyBsYXRlci5cclxuICAgICAgaWYgKGxpbmsgPT09IFwiY2F0ZWdvcnlcIikge1xyXG4gICAgICAgIHRoaXMuI3NpZGViYXJDYXRlZ29yeUNvbnRhaW5lciA9IGxpbmtVbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdGhpcy4jc2lkZWJhckNvbnRlbnQuYXBwZW5kKHNpZGVCYXJMaW5rc0NvbnRhaW5lcik7XHJcbiAgXHJcbiAgICB0aGlzLnVwZGF0ZUNhdGVnb3J5U2lkZWJhckxpc3RpbmcoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNhdGVnb3J5U2lkZWJhckxpc3RpbmcoKSB7XHJcbiAgICB0aGlzLiNzaWRlYmFyQ2F0ZWdvcnlDb250YWluZXIuYXBwZW5kKHRoaXMuI2dldENhdGVnb3JpZXNBc0xpbmtzKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHF1ZXJ5UGFnZVdpZHRoKGUpIHtcclxuICAgIGlmIChlLm1hdGNoZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTaWRlYmFyOiBTaWRlYmFyIHRvZ2dsaW5nIGZyb20gcXVlcnkgcGFnZS4uLlwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlLXNpZGViYXJcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci13cmFwcGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWFjdGl2ZS13cmFwcGVyLWJnXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaXQgYmlnZ2VyIHRoYW4gdGhlIHF1ZXJ5IHJ1bGUuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1zaWRlYmFyXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvZ2dsZVNpZGViYXIoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJTaWRlYmFyOiBTaWRlYmFyIHRvZ2dsaW5nLi4uXCIpO1xyXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcbiAgICBsZXQgc2lkZWJhcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItd3JhcHBlclwiKTtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZWJhclwiKTtcclxuICAgIGlmICghc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLXNpZGViYXJcIikpIHtcclxuICAgICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYWN0aXZlLXdyYXBwZXItYmdcIik7XHJcbiAgICAgIHNpZGViYXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBUb2RvTGlzdFNpZGViYXIudG9nZ2xlU2lkZWJhcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWJhci1hY3RpdmUtd3JhcHBlci1iZ1wiKTtcclxuICAgICAgc2lkZWJhcldyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFRvZG9MaXN0U2lkZWJhci50b2dnbGVTaWRlYmFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHRoZSBjYXRlZ29yaWVzIGxpc3RlZCBmb3IgZWFjaCB0YXNrLCBhbmQgdGhlbiByZXR1cm4gYSBuYXZiYXIgZWxlbSB3aXRoIFxyXG4gICAqIHRoZSBjYXRlZ29yaWVzIGFzIGxpc3QgZWxlbWVudHMuXHJcbiAgICogSWRlYWxseSwgcnVuIHRoaXMgZnVuY3Rpb24gZWFjaCB0aW1lIHlvdSBzdWJtaXQgb3IgdXBkYXRlIGEgdGFzay5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyBsaW5rcyAtIEFuIGFycmF5IG9mIGxpbmtzIHBlcnRhaW5pbmcgdG8gYWxsIHJlbGV2YW50IGNhdGVnb3JpZXMsIFxyXG4gICAqIGFuZCB0aGUgY291bnQgb2YgdGFza3MgaW4gZWFjaCBjYXRlZ29yeS4gQWRkIHRoaXMgYWZ0ZXIgdGhlIGNhdGVnb3J5XHJcbiAgICogbGluay5cclxuICAgKi9cclxuICAjZ2V0Q2F0ZWdvcmllc0FzTGlua3MoKSB7XHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IGNvbm5lY3Rpb24uZ2V0QWxsSXRlbXMoKS5yZWR1Y2UoKGNhdHMsIHRhc2spID0+IHtcclxuICAgICAgLy8gZ3VhcmQgY2xhdXNlIHNpbmNlIGNvbnRpbnVlIGRvZXNuJ3Qgd29yazsgYWZ0ZXIgYWxsLCBpdCBpcyBhIGZ1bmN0aW9uLCBub3QgYSBsb29wIGJsb2NrLlxyXG4gICAgICBpZiAodGFzay5jYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjYXRzO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0YXNrQ2F0ZWdvcmllcyA9IHRhc2suY2F0ZWdvcmllcy5tYXAoZWxlbSA9PiBlbGVtLnZhbHVlKTtcclxuICAgICAgLy8gbmVlZCB0byBjb252ZXJ0IHRhc2suY2F0ZWdvcmllcyBpbnRvIGFuIGFycmF5LlxyXG4gICAgICBmb3IgKGxldCBjYXQgb2YgdGFza0NhdGVnb3JpZXMpIHtcclxuICAgICAgICBjYXQgPSBjYXQucmVwbGFjZShcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGNhdCBpbiBjYXRzKSB7XHJcbiAgICAgICAgICBjYXRzW2NhdF0gKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2F0c1tjYXRdID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGNhdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgXHJcbiAgICBsZXQgY2F0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY2F0Q29udGFpbmVyLmlkID0gXCJjYXRlZ29yeS1saW5rc1wiO1xyXG4gIFxyXG4gICAgZm9yIChsZXQgY2F0IGluIGNhdGVnb3JpZXMpIHtcclxuICAgICAgbGV0IGNhdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGV0IGNhdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBjYXRMaW5rLnRleHRDb250ZW50ID0gY2F0LnJlcGxhY2UoXCItXCIsICcgJyk7XHJcbiAgICAgIGNhdExpbmsudGV4dENvbnRlbnQgKz0gYCAoJHtjYXRlZ29yaWVzW2NhdF19KWA7XHJcbiAgXHJcbiAgICAgIC8vIEFkZCBmaWx0ZXIgdGFza3MgY2FsbGJhY2sgb3ZlciBoZXJlLlxyXG4gICAgICBjYXRMaW5rLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1uYXYtbGlua1wiKTtcclxuICAgICAgY2F0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBsZXQgY3VycmVudFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWJhci1zZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIFRvZG9MaXN0RWxlbWVudC5maWx0ZXJUYXNrcyhjYXQsIFwiY2F0ZWdvcnlcIilcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNhdExpc3RJdGVtLmFwcGVuZChjYXRMaW5rKTtcclxuICAgICAgY2F0Q29udGFpbmVyLmFwcGVuZChjYXRMaXN0SXRlbSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gY2F0Q29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lkZWJhcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNzaWRlYmFyQkc7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzaWRlYmFyID0gbmV3IFRvZG9MaXN0U2lkZWJhcigpO1xyXG5cclxuZXhwb3J0IHtzaWRlYmFyLCBUb2RvTGlzdFNpZGViYXJ9OyIsImltcG9ydCB7Z2V0VW5peFRpbWUsIHBhcnNlSVNPfSBmcm9tIFwiZGF0ZS1mbnNcIjsgIFxyXG5cclxuLyoqXHJcbiAqIEVzdGFibGlzaGVzIGEgY29ubmVjdGlvbiB0byBsb2NhbCBzdG9yYWdlIGFuZCBwdXNoZXMvcHVsbHMgZGF0YSB0byBsb2NhbCBzdG9yYWdlLlxyXG4gKi9cclxuXHJcbi8vIFNpbmdsZXRvbiBQYXR0ZXJuIGluIEpTIFJlZlxyXG4vLyBodHRwczovL3d3dy5zaXRlcG9pbnQuY29tL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLXNpbmdsZXRvbi9cclxuXHJcbmNvbnN0IFNUT1JBR0VfS0VZID0gXCJ0b2RvLWxpc3QtdGFza3NcIjtcclxuXHJcbmNvbnN0IF90YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgVG9kb0xpc3RTdG9yYWdlIHtcclxuICBcclxuICAjc3RvcmFnZTtcclxuICAjU1RPUkFHRV9LRVk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFNUT1JBR0VfS0VZKSB7XHJcbiAgICB0aGlzLiNTVE9SQUdFX0tFWSA9IFNUT1JBR0VfS0VZO1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkpIHtcclxuICAgICAgdGhpcy4jc3RvcmFnZSA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jc3RvcmFnZSA9IHRoaXMuI3Jlc3RvcmVGcm9tU3RvcmFnZSgpO1xyXG4gICAgICB0aGlzLnNvcnRCeUR1ZURhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBhZGQoLi4uaXRlbXMpIHtcclxuICAgIHRoaXMuI3N0b3JhZ2UucHVzaCguLi5pdGVtcyk7XHJcblxyXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdGhpcy4jc2F2ZVRvU3RvcmFnZSgpO1xyXG4gICAgLy8gRGlkIHlvdSBrbm93PyB0aGlzIHVwZGF0ZXMgZWFjaCB0aW1lLCBhbmQgYXNzaWduaW5nIHRoYXQgdG8gYSBoYW5kbGVyXHJcbiAgICAvLyB1bmZvcnR1bmF0ZWx5IHRoZSBoYW5kbGVyIHdpbGwgbm90IHJlY29nbml6ZSB0aGUgdXBkYXRlLCBzbyB3ZSBoYXZlXHJcbiAgICAvLyB0byBkbyBpdCBtYW51YWxseSBlYWNoIHRpbWUuXHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyBBbiBpbnRlcmVzdGluZyB0ZXN0XHJcbiAgICAvLyBTZXQgYSBjb25kaXRpb25hbCB0aGF0IHdpbGwgb25seSBzYXZlIG9uYmVmb3JldW5sb2FkIGlmIHRoZSBzdG9yYWdlXHJcbiAgICAvLyBsZW5ndGggaXMgb25lLlxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLiNzdG9yYWdlLmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGlkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy4jc3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdGhpcy4jc2F2ZVRvU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsSXRlbXMoKSB7XHJcbiAgICBpZiAodGhpcy4jc3RvcmFnZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc3RvcmFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbUJ5SWQoaWQpIHtcclxuICAgIGxldCBpdGVtID0gdGhpcy4jc3RvcmFnZS5maW5kKGVsZW0gPT4gZWxlbS5pZCA9PT0gK2lkKTtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShpdGVtKSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLiNzdG9yYWdlLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgdGhpcy4jc3RvcmFnZVtpbmRleF0gPSBpdGVtO1xyXG5cclxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHRoaXMuI3NhdmVUb1N0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gICNzYXZlVG9TdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHRoaXMuI3N0b3JhZ2UpKTtcclxuICB9XHJcblxyXG4gICNyZXN0b3JlRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICBsZXQganNvblN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI1NUT1JBR0VfS0VZKTtcclxuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XHJcbiAgICAvLyBOb3RlOiBKU09OIGlzIHJlY3Vyc2l2ZTsgaG93ZXZlciwgdGhlIHRhZ2lmeSBsaWJyYXJ5IFxyXG4gICAgLy8gZXNjYXBlcyBxdW90ZXMsIHdoaWNoIGlzIGluY29ycmVjdCBKU09OIGZvcm1hdCAobGVhdmUgcXVvdGVzIHVudG91Y2hlZCkuXHJcbiAgICAvLyBmb3IgdGhhdCByZWFzb24sIHdlIGhhdmUgdG8gbWFudWFsbHkgcnVuIEpTT04ucGFyc2Ugd2hlbiByZXN0b3JpbmdcclxuICAgIC8vIGZyb20gc3RvcmFnZS5cclxuICAgIC8vIE5ldmVyIG1pbmQsIHdlIGp1c3QgY2F0Y2ggdGhhdCBiZWZvcmUgaW4gdGhlIFRvZG9MaXN0RWxlbWVudCBjbGFzcy5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgdHJ5IHtcclxuICAgIC8vICAgICBhcnJheVtpXS5jYXRlZ29yaWVzID0gSlNPTi5wYXJzZShhcnJheVtpXS5jYXRlZ29yaWVzKTtcclxuICAgIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBzb3J0QnlEdWVEYXRlKCkgeyAgXHJcblxyXG4gICAgdGhpcy4jc3RvcmFnZS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGlmIChhLmR1ZURhdGUgPT09IFwiXCIgJiYgYi5kdWVEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgaWYgKGEudGl0bGUgPiBiLnRpdGxlKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYS5kdWVEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7IC8vIHNvcnQgYiBiZWZvcmUgYVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChiLmR1ZURhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gLTE7IC8vIHNvcnQgYSBiZWZvcmUgYlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBsZXQgYU1zID0gZ2V0VW5peFRpbWUocGFyc2VJU08oYS5kdWVEYXRlKSk7XHJcbiAgICAgIGxldCBiTXMgPSBnZXRVbml4VGltZShwYXJzZUlTTyhiLmR1ZURhdGUpKTtcclxuXHJcbiAgICAgIGlmIChhTXMgPiBiTXMpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgfSBlbHNlIGlmIChhTXMgPCBiTXMpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH0gZWxzZSB7IC8vIGJvdGggYXJlIHRoZSBzYW1lIGRhdGVcclxuICAgICAgICBpZiAoYS50aXRsZSA+IGIudGl0bGUpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuI3N0b3JhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0gbmV3IFRvZG9MaXN0U3RvcmFnZShTVE9SQUdFX0tFWSk7XHJcblxyXG5cclxuLy8gJ3RoaXMnIHdhc24ndCBnZXR0aW5nIHVwZGF0ZWQhIVxyXG4vLyAoQmVjYXVzZSBlYWNoIHRpbWUgdGhlIGFycmF5IHVwZGF0ZXMgeW91IGhhdmUgdG8gYXNzaWduIGEgbmV3IGV2ZW50IGxpc3RlbmVyLilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb247XHJcbiIsIi8qKlxyXG4gKiBDb21wb25lbnQgY2xhc3MuIENvbnRhaW5zIHZhcmlvdXMgRE9NIGVsZW1lbnRzLlxyXG4gKiBBdXRob3I6IGRhdHJpbm9uXHJcbiAqIFZlcnNpb246IDEuMVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIFxyXG4gIG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MDBweCknKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgYmFzaWMgSFRNTCBza2VsZXRvbiBmb3IgdGhlIHdlYiBwYWdlLCBnZW5lcmF0aW5nIGEgaGVhZGVyLFxyXG4gICAqIG1haW4sIGFuZCBzdGlja3kgZm9vdGVyLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Kn0gaGVhZGVyVGl0bGUgLSBXaGF0IHRoZSB3ZWIgcGFnZSBpcyBjYWxsZWQuIFxyXG4gICAqIEBwYXJhbSB7Ym9vbH0gZW1wdHlIZWFkZXIgLSBTaG91bGQgdGhlIGhlYWRlciB1c2UgYSBkZWZhdWx0IHN0cnVjdHVyZT9cclxuICAgKiBUaGUgZGVmYXVsdCBzdHJ1Y3R1cmUgbG9va3MgbGlrZSBbIExvZ28gfCB8IHwgfCBOYXZpZ2F0aW9uIExpbmtzXVxyXG4gICAqIEByZXR1cm5zIC0gQW4gYXJyYXkgY29udGFpbmluZyByZWZlcmVuY2VzIHRvIHRoZSBnZW5lcmF0ZWQgaGVhZGVyLCBtYWluLCBhbmQgZm9vdGVyLlxyXG4gICAqL1xyXG4gIGluaXRpYWxpemVTdHJ1Y3R1cmUoaGVhZGVyVGl0bGUsIGVtcHR5SGVhZGVyID0gZmFsc2UsIGNyZWF0ZU1vbnRoLCBnaXRodWJMaW5rKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gdGhpcy5kaXYoXCJjb250ZW50XCIpO1xyXG4gICAgbGV0IGhlYWRlcjtcclxuICAgIGlmIChlbXB0eUhlYWRlcikge1xyXG4gICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyID0gdGhpcy5oZWFkZXIoaGVhZGVyVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBjb25zdCBmb290ZXIgPSB0aGlzLmZvb3RlcihjcmVhdGVNb250aCwgZ2l0aHViTGluayk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICAgIG1haW5XcmFwcGVyLmFwcGVuZChoZWFkZXIsIG1haW4pO1xyXG4gICAgYm9keS5hcHBlbmQobWFpbldyYXBwZXIsIGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIFtoZWFkZXIsIG1haW4sIGZvb3Rlcl07XHJcbiAgfVxyXG5cclxuICBjb250ZW50KCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICAgIFxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIodGl0bGUpIHtcclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgbGV0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWJhcnNcIiwgXCJuby1kaXNwbGF5XCIpO1xyXG5cclxuICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaXQgYmlnZ2VyIHRoYW4gdGhlIHF1ZXJ5IHJ1bGUuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tb3V0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgcHJlc3NlZC5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNsaWRlLWluLW91dFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgLy8gaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nfSlgO1xyXG5cclxuICAgIHRpdGxlRWxlbS5pZCA9IFwicGFnZS10aXRsZVwiO1xyXG4gICAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBcclxuICAgIHRpdGxlRWxlbS5pbnNlcnRCZWZvcmUobWVudUJ1dHRvbiwgdGl0bGVFbGVtLmZpcnN0Q2hpbGQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZUVsZW0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgbmF2YmFyKC4uLmxpbmtzKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBuYXYuaWQgPSBcIm5hdmJhclwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5pZCA9IFwibmF2YmFyLWJ1dHRvbnMtY29udGFpbmVyXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICBjb25zdCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBjb25zdCBsaW5rQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xyXG4gICAgICBcclxuICAgICAgbGlua0FuY2hvci5pZCA9IGBuYXZsaW5rLSR7bGluay5yZXBsYWNlKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgICBsaW5rQW5jaG9yLnRleHRDb250ZW50ID0gbGluaztcclxuICAgICAgbGlua0FuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuXHJcbiAgICAgIGxpbmtCdXR0b24uYXBwZW5kKGxpbmtBbmNob3IpO1xyXG4gICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChsaW5rQnV0dG9uKTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gVG9vIHNwZWNpZmljLlxyXG4gICAgICAvLyBsaW5rQW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAvLyAgIGxldCBjdXJyZW50U2VjdGlvbklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gc2VjdGlvbjpub3QoLm5vLWRpc3BsYXkpXCIpLmlkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIC8vICAgbGV0IGNob3NlblNlY3Rpb25JZCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gICBpZiAoY3VycmVudFNlY3Rpb25JZCAhPT0gY2hvc2VuU2VjdGlvbklkKSB7XHJcbiAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50U2VjdGlvbklkfWApLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2hvc2VuU2VjdGlvbklkfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xyXG4gICAgICAvLyAgIH1cclxuXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdi5hcHBlbmQobGlua0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcblxyXG4gIGJhbm5lcih0ZXh0LCBpbWcpIHtcclxuICAgIGxldCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gICAgXHJcbiAgICBiYW5uZXJDb250YWluZXIuaWQgPSBcImJhbm5lclwiO1xyXG4gICAgYmFubmVyLmlkID0gXCJiYW5uZXItaW1hZ2VcIjtcclxuICAgIGNhcHRpb24uaWQgPSBcImJhbm5lci1jYXB0aW9uXCI7XHJcblxyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XHJcblxyXG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgYmFubmVyQ29udGFpbmVyLmFwcGVuZChiYW5uZXIsIGNhcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBiYW5uZXJDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoY3JlYXRlTW9udGgsIGdpdGh1YkxpbmspIHtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgbGV0IHRleHQgPSBgQ3JlYXRlZCBpbiAke2NyZWF0ZU1vbnRofSAyMDIxLiBPZGluIFByb2plY3QgeCBEYW4gVC5gO1xyXG4gICAgbGV0IGdpdGh1YkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxldCBnaEljb24gPSB0aGlzLmZhSWNvbihcImZhYlwiLCBcImZhLWdpdGh1Yi1zcXVhcmVcIiwgXCJpY29uXCIpO1xyXG5cclxuICAgIGdpdGh1YkVsZW0uYXBwZW5kKGdoSWNvbik7XHJcbiAgICBnaXRodWJFbGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItZ2l0aHViLWljb25cIik7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZ2l0aHViTGluayk7XHJcbiAgICBnaXRodWJFbGVtLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgIGdpdGh1YkVsZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHAuYXBwZW5kKGdpdGh1YkVsZW0pO1xyXG4gICAgZm9vdGVyLmFwcGVuZChwKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBsYXJnZXIsIGVtYm9sZGVuZWQsIHRleHQsXHJcbiAgICogc2ltaWxhciB0byBhIHB1bGwgcXVvdGUgaW4gYSBtYWdhemluZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0gbXNnIHtzdHJpbmd9IFRleHQgdG8gaW5jbHVkZSBpbiB0aGUgYmxvY2sgcXVvdGVcclxuICAgKi9cclxuICBwdWxscXVvdGUobXNnKSB7XHJcbiAgICBsZXQgcHVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcclxuICAgIHB1bGwudGV4dENvbnRlbnQgPSBtc2c7XHJcblxyXG4gICAgcHVsbC5jbGFzc0xpc3QuYWRkKFwicHVsbC1xdW90ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gcHVsbDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24oaWQpIHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBlbGVtZW50LmlkID0gaWQ7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRleHQgaGVhZGluZyBlbGVtZW50LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dCAtIFRoZSBsYWJlbCBmb3IgdGhlIGhlYWRlci5cclxuICAgKiBAcGFyYW0geyp9IGxldmVsIC0gVGhlIGxldmVsIG9mIGhlYWRlci5cclxuICAgKi9cclxuICBoZWFkaW5nKHRleHQsIGxldmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGlmIChsZXZlbCA8IDEgfHwgbGV2ZWwgPiA2KSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiSGVhZGluZyBsZXZlbHMgY2FuIG9ubHkgYmUgYmV0d2VlbiAxIHRvIDYhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke2xldmVsfWApO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcblxyXG4gIHBhcmFncmFwaCh0ZXh0LCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGltZyh1cmwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG5cclxuICAgIHJldHVybiBpbWFnZTtcclxuICB9XHJcblxyXG4gIGRpdiguLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uKGxhYmVsLCAuLi5jbGFzc05hbWUpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcclxuXHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZXMgYSBiYXNpYyB0YWJsZSB3aXRoIHNpbmdsZS1jZWxsIGNvbHVtbnMgYW5kIHJvd3MsIGJhc2VkIG9uIHRoZSBpbXBvcnRlZCBmaWxlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Y3N2fSBkYXRhIC0gRGF0YSB0byB0dXJuIGludG8gYSB0YWJsZS4gUGxlYXNlIHVzZSB3ZWJwYWNrIHRvIGltcG9ydCAuY3N2IGZpbGVzLlxyXG4gICAqL1xyXG4gIHRhYmxlKGlkID0gXCJcIiwgZGF0YSkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgdGFibGUuaWQgPSBpZDtcclxuICAgIFxyXG4gICAgLy8gR2VuZXJhdGUgYSB0YWJsZSBoZWFkZXIgcm93LlxyXG4gICAgbGV0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgbGV0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGNvbCBvZiBPYmplY3Qua2V5cyhkYXRhWzBdKSkge1xyXG4gICAgICBsZXQgY29sQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgY29sQ2VsbC50ZXh0Q29udGVudCA9IGNvbDtcclxuXHJcbiAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZChjb2xDZWxsKTtcclxuICAgIH1cclxuICAgIHRhYmxlSGVhZGVyLmFwcGVuZCh0YWJsZUhlYWRlclJvdyk7XHJcbiAgICBcclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgLy8gR2VuZXJhdGUgdGFibGUgcm93cy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBkYXRhW2ldKSB7XHJcbiAgICAgICAgbGV0IHRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRjZWxsLnRleHRDb250ZW50ID0gZGF0YVtpXVtwcm9wXTtcclxuICAgICAgICB0cm93LmFwcGVuZCh0Y2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYmxlQm9keS5hcHBlbmQodHJvdyk7ICAgICAgXHJcbiAgICB9XHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVCb2R5KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgZmFJY29uKGNhdGVnb3J5LCBuYW1lLCAuLi5jbGFzc05hbWUpe1xyXG4gICAgbGV0IGZhc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZChjYXRlZ29yeSwgbmFtZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGZhc0ljb24uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYXNJY29uO1xyXG4gIH1cclxuXHJcbiAgc3Bhbih0ZXh0Q29udGVudCA9IG51bGwsIC4uLmNsYXNzTmFtZSkge1xyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGlmIChjbGFzc05hbWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuXHJcbiAgZm9ybUlucHV0KGxhYmVsVGV4dCwgdHlwZSwgaW5wdXRJZCwgbmFtZSkge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuaWQgPSBpbnB1dElkO1xyXG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBpbnB1dF07XHJcbiAgfVxyXG5cclxuICBkcm9wZG93bihsYWJlbFRleHQsIG5hbWUsIGlucHV0SWQsIC4uLnZhbHVlcykge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0SWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcblxyXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dElkKTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIGVudHJ5LnZhbHVlID0gdmFsO1xyXG4gICAgICBpZiAoaXNOYU4odmFsKSAmJiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikpIHtcclxuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHZhbFswXS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3QuYXBwZW5kKGVudHJ5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW2xhYmVsLCBzZWxlY3RdO1xyXG4gIH1cclxuXHJcbiAgdGV4dEFyZWEobGFiZWxUZXh0LCBuYW1lLCBpbnB1dElkKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRJZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuXHJcbiAgICBsZXQgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0YS5pZCA9IGlucHV0SWQ7XHJcbiAgICB0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG5cclxuICAgIHJldHVybiBbbGFiZWwsIHRhXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbmZpcm0gbW9kYWwuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSBjbGFzc05hbWUgLSBDbGFzc2VzIHRoZSBtb2RhbCBzaG91bGQgYmVsb25nIHRvLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGl0bGUgLSBUaGUgdGl0bGUgYXBwZWFyaW5nIG9uIHRoZSBtb2RhbC5cclxuICAgKiBAcGFyYW0geyp9IG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSBhcHBlYXJpbmcgb24gdGhlIG1vZGFsLlxyXG4gICAqIEBwYXJhbSB7Kn0gcG9zaXRpdmVCdXR0b25MYWJlbCAtIFRleHQgZm9yIHRoZSBPSyBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUJ1dHRvbkxhYmVsIC0gVGV4dCBmb3IgdGhlIGNhbmNlbCBidXR0b24uXHJcbiAgICogQHBhcmFtIHsqfSBwb3NpdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIE9LIGlzIHByZXNzZWQuXHJcbiAgICogQHBhcmFtIHsqfSBuZWdhdGl2ZUNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gcnVuIGlmIGNhbmNlbCBpcyBwcmVzc2VkLiAnbnVsbCcgYnlcclxuICAgKiBkZWZhdWx0LCB3aGljaCB0aGVuIGp1c3QgY2xvc2VzIHRoZSBtb2RhbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyAtIFJldHVybnMgdGhlIGdlbmVyYXRlZCBtb2RhbCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbmZpcm1Nb2RhbChjbGFzc05hbWUsIHRpdGxlLCBtZXNzYWdlLCBwb3NpdGl2ZUJ1dHRvbkxhYmVsLFxyXG4gICAgbmVnYXRpdmVCdXR0b25MYWJlbCwgcG9zaXRpdmVDYWxsYmFjaywgbmVnYXRpdmVDYWxsYmFjayA9IG51bGwpIHtcclxuICAgICAgbGV0IG1vZGFsV3JhcHBlciA9IHRoaXMuZGl2KCk7XHJcbiAgICAgIG1vZGFsV3JhcHBlci5pZCA9IFwicHJvbXB0LXdyYXBwZXJcIjtcclxuICAgICAgbGV0IG1vZGFsID0gdGhpcy5kaXYoY2xhc3NOYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gdGhpcy5oZWFkaW5nKHRpdGxlLCAxLCBcIm1vZGFsLWhlYWRlclwiKTtcclxuICAgICAgY29uc3QgbWVzc2FnZVBhcmFncmFwaCA9IHRoaXMucGFyYWdyYXBoKG1lc3NhZ2UsIFwibW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgICBjb25zdCBwb3NpdGl2ZUJ1dHRvbiA9IHRoaXMuYnV0dG9uKHBvc2l0aXZlQnV0dG9uTGFiZWwsIFwibW9kYWwtY29uZmlybVwiKTtcclxuICAgICAgY29uc3QgbmVnYXRpdmVCdXR0b24gPSB0aGlzLmJ1dHRvbihuZWdhdGl2ZUJ1dHRvbkxhYmVsLCBcIm1vZGFsLWNhbmNlbFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSB0aGlzLmRpdihcIm1vZGFsLWJ1dHRvbi1hcmVhXCIpO1xyXG5cclxuICAgICAgaWYgKG5lZ2F0aXZlQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgICBuZWdhdGl2ZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJOZWdhdGl2ZSBwcmVzc2VkLlwiKTtcclxuICAgICAgICAgIG1vZGFsV3JhcHBlci5yZW1vdmUoKTsgIFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHBvc2l0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3NpdGl2ZUNhbGxiYWNrKTtcclxuICAgICAgcG9zaXRpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgcG9zaXRpdmVDYWxsYmFjayhlKTtcclxuICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIG5lZ2F0aXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWdhdGl2ZUNhbGxiYWNrKTtcclxuXHJcbiAgICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kKHBvc2l0aXZlQnV0dG9uLCBuZWdhdGl2ZUJ1dHRvbik7XHJcbiAgICAgIG1vZGFsLmFwcGVuZCh0aXRsZUhlYWRlciwgbWVzc2FnZVBhcmFncmFwaCwgYnV0dG9uU2VjdGlvbik7XHJcbiAgICAgIG1vZGFsV3JhcHBlci5hcHBlbmQobW9kYWwpO1xyXG5cclxuICAgICAgLy8gc3R5bGluZyBtb3ZlZCB0byAuY3NzIHBhZ2UuXHJcblxyXG4gICAgICByZXR1cm4gbW9kYWxXcmFwcGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgYSBicmllZiwgdW5vYnRydXNpdmUgcG9wLXVwIG1lc3NhZ2UgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gICAqIEBwYXJhbSB7Kn0gdGV4dENvbnRlbnQgLSBUaGUgdGV4dCB0aGUgbWVzc2FnZSBzaG91bGQgZGlzcGxheS5cclxuICAgKiBAcGFyYW0geyp9IGR1cmF0aW9uIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBtZXNzYWdlIGluIHNlY29uZHMuXHJcbiAgICovXHJcbiAgdG9hc3QodGV4dENvbnRlbnQsIGR1cmF0aW9uKSB7XHJcbiAgICBsZXQgdG9hc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRvYXN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XHJcbiAgICB0b2FzdEJveC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIik7XHJcbiAgICB0b2FzdE1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHRvYXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidG9hc3QtbWVzc2FnZVwiKTtcclxuXHJcbiAgICB0b2FzdEJveC5hcHBlbmQodG9hc3RNZXNzYWdlKTtcclxuXHJcbiAgICBsZXQgdG9hc3RCb3hDc3MgPSBcInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHZoO1wiO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ3aWR0aDogMTAwdnc7XCJcclxuICAgIHRvYXN0Qm94Q3NzICs9IGBhbmltYXRpb246IGZhZGUtaW4tb3V0ICR7ZHVyYXRpb259cztgO1xyXG4gICAgdG9hc3RCb3hDc3MgKz0gXCJ6LWluZGV4OiA5OTk5O1wiXHJcblxyXG4gICAgbGV0IHRvYXN0TWVzc2FnZUNzcyA9IFwibWFyZ2luOiAwIGF1dG87IHdpZHRoOiAzMDBweDsgZGlzcGxheTogYmxvY2s7IGJhY2tncm91bmQtY29sb3I6IGdyZXk7XCJcclxuICAgIHRvYXN0TWVzc2FnZUNzcyArPSBcInRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDVweDtcIlxyXG4gICAgdG9hc3RNZXNzYWdlQ3NzICs9IFwiY29sb3I6IHdoaXRlO1wiXHJcbiAgICBcclxuICAgIHRvYXN0Qm94LnN0eWxlLmNzc1RleHQgPSB0b2FzdEJveENzcztcclxuICAgIHRvYXN0TWVzc2FnZS5zdHlsZS5jc3NUZXh0ID0gdG9hc3RNZXNzYWdlQ3NzO1xyXG5cclxuICAgIHRvYXN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICB0b2FzdEJveC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvYXN0Qm94KTtcclxuICB9XHJcbn1cclxuIiwiLy8gZnVuY3Rpb24gUHJpb3JpdHkoKSB7XHJcbi8vICAgdGhpcy5DUklUSUNBTCA9IDQ7XHJcbi8vICAgdGhpcy5ISUdIID0gMztcclxuLy8gICB0aGlzLk1FRElVTSA9IDI7XHJcbi8vICAgdGhpcy5MT1cgPSAxO1xyXG4vLyAgIHRoaXMuTk9ORSA9IDA7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7UHJpb3JpdHkgYXMgZGVmYXVsdH07XHJcblxyXG5jb25zdCBwcmlvcml0eSA9IHtcclxuICBOT05FOiAwLFxyXG4gIExPVzogMSxcclxuICBNRURJVU06IDIsXHJcbiAgSElHSDogMyxcclxuICBDUklUSUNBTDogNCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwcmlvcml0eTsiLCJpbXBvcnQgcHJpb3JpdHkgZnJvbSBcIi4vcHJpb3JpdHkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICBcclxuICBpZDtcclxuICB0aXRsZTtcclxuICBwcmlvcml0eTtcclxuICBkZXNjcmlwdGlvbjtcclxuICBjYXRlZ29yaWVzO1xyXG4gIGR1ZURhdGU7XHJcbiAgY29tcGxldGVkO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XHJcbiAgICB0aGlzLnRpdGxlID0gXCJcIjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlUYXNrSW5mbygpIHtcclxuICAgIGZvciAobGV0IHByb3AgaW4gVGFzaykge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzW3Byb3BdKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvVG9kb0xpc3RFbGVtZW50LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9