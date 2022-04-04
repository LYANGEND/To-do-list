/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addTask.js":
/*!****************************!*\
  !*** ./modules/addTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./modules/localStorage.js\");\n\n\nconst addTask = (text) => {\n  let tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromLocalStorage)();\n  tasks = tasks.sort((v1, v2) => v1.index - v2.index);\n  let index;\n  if (tasks.length === 0) index = 1;\n  else index = tasks[tasks.length - 1].index + 1;\n  const obj = { index, description: text, completed: false };\n  tasks.push(obj);\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setTaskIntoLocalStorage)(tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://to-do-list/./modules/addTask.js?");

/***/ }),

/***/ "./modules/completedTasks.js":
/*!***********************************!*\
  !*** ./modules/completedTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./modules/localStorage.js\");\n\n\nlet globalTasks;\nconst completedTask = () => {\n  globalTasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromLocalStorage)();\n  const completedTasks = globalTasks.filter((t) => t.completed);\n  const splicedIndex = (f) => {\n    globalTasks.splice(globalTasks.findIndex((e) => e.index === f.index), 1);\n  };\n  completedTasks.forEach(splicedIndex);\n\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setTaskIntoLocalStorage)(globalTasks);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completedTask);\n\n//# sourceURL=webpack://to-do-list/./modules/completedTasks.js?");

/***/ }),

/***/ "./modules/displayTasks.js":
/*!*********************************!*\
  !*** ./modules/displayTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./modules/localStorage.js\");\n\n\nconst getTasks = () => {\n  const tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromLocalStorage)();\n  const sortedTasks = tasks.sort((v1, v2) => v1.index - v2.index);\n  return sortedTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasks);\n\n//# sourceURL=webpack://to-do-list/./modules/displayTasks.js?");

/***/ }),

/***/ "./modules/localStorage.js":
/*!*********************************!*\
  !*** ./modules/localStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTaskFromLocalStorage\": () => (/* binding */ getTaskFromLocalStorage),\n/* harmony export */   \"setTaskIntoLocalStorage\": () => (/* binding */ setTaskIntoLocalStorage)\n/* harmony export */ });\nconst getTaskFromLocalStorage = () => {\n  if (JSON.parse(localStorage.getItem('tasks')) === null || localStorage.getItem('tasks') === '[]') {\n    return [];\n  }\n  return JSON.parse(localStorage.getItem('tasks'));\n};\n\nconst setTaskIntoLocalStorage = (tasks) => {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/localStorage.js?");

/***/ }),

/***/ "./modules/removeTask.js":
/*!*******************************!*\
  !*** ./modules/removeTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./modules/localStorage.js\");\n\n\nconst removeTask = (e) => {\n  const tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromLocalStorage)();\n  const selectedID = parseInt(e.id, 10);\n\n  for (let i = 0; i < tasks.length; i += 1) {\n    if (tasks[i].index === selectedID) {\n      tasks.splice(i, 1);\n      break;\n    }\n  }\n  tasks.forEach((task, index) => { task.index = index + 1; });\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setTaskIntoLocalStorage)(tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://to-do-list/./modules/removeTask.js?");

/***/ }),

/***/ "./modules/updateCheckbox.js":
/*!***********************************!*\
  !*** ./modules/updateCheckbox.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./modules/localStorage.js\");\n\n\nconst updateCheckbox = (e) => {\n  const id = parseInt(e.target.parentNode.children[1].id, 10);\n\n  const tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromLocalStorage)();\n  for (let i = 0; i < tasks.length; i += 1) {\n    if (tasks[i].index === id) { tasks[i].completed = e.target.checked; }\n  }\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setTaskIntoLocalStorage)(tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCheckbox);\n\n//# sourceURL=webpack://to-do-list/./modules/updateCheckbox.js?");

/***/ }),

/***/ "./modules/updateTask.js":
/*!*******************************!*\
  !*** ./modules/updateTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./modules/localStorage.js\");\n\n\nconst updateTask = (e) => {\n  const tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromLocalStorage)();\n  const selectedID = parseInt(e.id, 10);\n\n  for (let i = 0; i < tasks.length; i += 1) {\n    if (tasks[i].index === selectedID) {\n      tasks[i].description = e.value;\n      break;\n    }\n  }\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setTaskIntoLocalStorage)(tasks);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTask);\n\n//# sourceURL=webpack://to-do-list/./modules/updateTask.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  font-family: Lato, sans-serif, \\\"Helvetica Neue\\\", Arial, Helvetica;\\n}\\n\\nbody {\\n  background-color: rgb(92, 91, 91);\\n}\\n\\n.main {\\n  width: 65%;\\n  margin: 10% auto;\\n  background-color: white;\\n  border: 1px solid white;\\n  box-shadow: 5px 5px 5px grey;\\n}\\n\\n.container {\\n  padding-left: 2%;\\n}\\n\\n.container h2 {\\n  padding: 2% 0%;\\n  margin: 0;\\n  font-size: 1.3rem;\\n}\\n\\n.container input {\\n  border: none;\\n  padding: 2% 1%;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n.checkbox {\\n  width: 5%;\\n  transform: scale(1.5);\\n  border-radius: 0;\\n  padding: 2% 1%;\\n}\\n\\n.task-list {\\n  display: flex;\\n  gap: 2%;\\n  text-align: center;\\n  align-items: center;\\n}\\n\\n.task {\\n  width: 90%;\\n}\\n\\n.footer input {\\n  width: 100%;\\n  color: grey;\\n  border: none;\\n  padding: 3% 1%;\\n  font-size: 1rem;\\n}\\n\\n.strike {\\n  text-decoration: line-through;\\n}\\n\\n.heading {\\n  display: grid;\\n  grid-template-columns: 60% 40%;\\n  text-align: left;\\n  align-items: center;\\n}\\n\\n.fa {\\n  width: 2%;\\n  text-align: right;\\n  padding-right: 2%;\\n  color: grey;\\n}\\n\\n.heading .fa {\\n  width: 100%;\\n  padding-right: 3%;\\n}\\n\\n.invisible {\\n  display: none;\\n}\\n\\n.visible {\\n  display: block;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/addTask.js */ \"./modules/addTask.js\");\n/* harmony import */ var _modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/displayTasks.js */ \"./modules/displayTasks.js\");\n/* harmony import */ var _modules_removeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/removeTask.js */ \"./modules/removeTask.js\");\n/* harmony import */ var _modules_updateTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/updateTask.js */ \"./modules/updateTask.js\");\n/* harmony import */ var _modules_completedTasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/completedTasks.js */ \"./modules/completedTasks.js\");\n/* harmony import */ var _modules_updateCheckbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/updateCheckbox.js */ \"./modules/updateCheckbox.js\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/localStorage.js */ \"./modules/localStorage.js\");\n\n\n\n\n\n\n\n\n\nconst newTask = document.getElementById('add-task');\nconst showTasks = document.getElementById('show-tasks');\nconst completedTaskButton = document.getElementById('completed-task');\nif (localStorage.getItem('tasks') === null || localStorage.getItem('tasks') === '[]') {\n  (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.setTaskIntoLocalStorage)([]);\n}\n\nconst checkboxClickHandler = (e) => {\n  if (e.target.checked === true) {\n    e.target.parentNode.children[1].classList.add('strike');\n  } else {\n    e.target.parentNode.children[1].classList.remove('strike');\n  }\n  (0,_modules_updateCheckbox_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(e);\n};\nconst optionClickHandler = (e) => {\n  const input = e.target.parentNode.children[1];\n  const ellipsis = e.target.parentNode.children[2];\n  const trash = e.target.parentNode.children[3];\n\n  if (e.target.className.indexOf('visible') > -1) {\n    trash.classList.remove('invisible');\n\n    e.target.parentNode.style.backgroundColor = '#ffffe0';\n    input.style.backgroundColor = '#ffffe0';\n    // e.target.classList.add('invisible');\n  } else if (e.target.className.indexOf('task') > -1) {\n    ellipsis.classList.remove('invisible');\n    trash.classList.add('invisible');\n    e.target.parentNode.style.backgroundColor = '';\n    input.style.backgroundColor = '';\n  } else if (e.target.checked === true) {\n    ellipsis.classList.remove('invisible');\n    trash.classList.add('invisible');\n    e.target.parentNode.style.backgroundColor = '';\n    input.style.backgroundColor = '';\n  }\n};\n\nconst updateTaskHandler = (e) => {\n  (0,_modules_updateTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e.target);\n};\nconst refreshTaskList = () => {\n  const sortedTasks = (0,_modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  showTasks.innerHTML = '';\n  for (let i = 0; i < sortedTasks.length; i += 1) {\n    let str = '';\n    let strike = '';\n    if (sortedTasks[i].completed === true) {\n      str = 'checked';\n      strike = 'strike';\n    }\n    showTasks.innerHTML += `<div class=\"task-list\">\n          <input type=\"checkbox\" class=\"checkbox\" ${str} ><input type=\"text\" class=\"task ${strike}\" id=\"${sortedTasks[i].index}\" value=\"${sortedTasks[i].description}\" ><i class=\"fa fa-ellipsis-v visible\" ></i><i class=\"fa fa-trash invisible\"></i>\n\n        </div>\n        <hr>`;\n  }\n\n  const checkboxes = document.querySelectorAll('.checkbox');\n  const optionIcon = document.getElementsByClassName('fa-ellipsis-v');\n  const trashIcon = document.getElementsByClassName('fa-trash');\n  const inputElem = document.getElementsByClassName('task');\n  for (let i = 0; i < checkboxes.length; i += 1) {\n    checkboxes[i].addEventListener('change', (e) => {\n      checkboxClickHandler(e);\n      optionClickHandler(e);\n    });\n    optionIcon[i].addEventListener('click', (e) => {\n      optionClickHandler(e);\n    });\n\n    trashIcon[i].addEventListener('click', (e) => {\n      /* eslint-disable-next-line no-use-before-define */\n      removeTaskHandler(e);\n    });\n    inputElem[i].addEventListener('click', (e) => {\n      optionClickHandler(e);\n    });\n    inputElem[i].addEventListener('keypress', (e) => {\n      if (e.key === 'Enter') {\n        console.log('Yes');\n        inputElem[i].value = e.target.value;\n        e.target.style.backgroundColor = '';\n        e.target.parentNode.style.backgroundColor = '';\n        e.target.classList.remove('focus-visible');\n      }\n    });\n    inputElem[i].addEventListener('blur', (e) => {\n      updateTaskHandler(e);\n    });\n  }\n};\nconst removeTaskHandler = (e) => {\n  const trashIcon = e.target;\n  (0,_modules_removeTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(trashIcon.parentNode.children[1]);\n  refreshTaskList();\n};\n\nnewTask.addEventListener('keyup', (e) => {\n  e.stopImmediatePropagation(); e.target.parentNode.style.backgroundColor = '';\n  if (e.keyCode === 13) {\n    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.value);\n    e.target.value = '';\n    refreshTaskList();\n  }\n});\n\ncompletedTaskButton.addEventListener('click', (e) => {\n  e.stopImmediatePropagation();\n  (0,_modules_completedTasks_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  refreshTaskList();\n});\n\nwindow.onload = () => {\n  refreshTaskList();\n};\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;