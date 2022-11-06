/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createProjectDiv": () => (/* binding */ createProjectDiv)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const createButton = document.getElementById("createButton");

createButton.addEventListener("click", () => {
    (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProjectObject)();
}); 
function createProjectDiv() {
    // div creations
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i] = document.createElement("div");
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Title'] = document.createElement("div");
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Description'] = document.createElement("div");
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_DueDate'] = document.createElement("div");
    // div id naming
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i].id = "projectDiv_" + _project__WEBPACK_IMPORTED_MODULE_0__.i;
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Title']
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Description']
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_DueDate']
    // div appendChild
    document.getElementById("content").appendChild(window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i])
    document.getElementById("projectDiv_" + _project__WEBPACK_IMPORTED_MODULE_0__.i).appendChild(window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Title'])
    document.getElementById("projectDiv_" + _project__WEBPACK_IMPORTED_MODULE_0__.i).appendChild(window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Description'])
    document.getElementById("projectDiv_" + _project__WEBPACK_IMPORTED_MODULE_0__.i).appendChild(window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_DueDate'])
    // div innerHTML
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Title'].innerHTML = _project__WEBPACK_IMPORTED_MODULE_0__.existingProjects[_project__WEBPACK_IMPORTED_MODULE_0__.i].title
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_Description'].innerHTML = _project__WEBPACK_IMPORTED_MODULE_0__.existingProjects[_project__WEBPACK_IMPORTED_MODULE_0__.i].description
    window['projectDiv_' + _project__WEBPACK_IMPORTED_MODULE_0__.i + '_DueDate'].innerHTML = _project__WEBPACK_IMPORTED_MODULE_0__.existingProjects[_project__WEBPACK_IMPORTED_MODULE_0__.i].dueDate
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectObject": () => (/* binding */ createProjectObject),
/* harmony export */   "existingProjects": () => (/* binding */ existingProjects),
/* harmony export */   "i": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");


const existingProjects = [];
let i = 1;

existingProjects[0] = {
    title: "Lord of the Rings",
    description: "by J.R.R. Tolkein",
    dueDate: "pretty old",
}
console.log(existingProjects[0])

function createProjectObject() {
    existingProjects[i] = { 
        title: prompt("what is the title of this project? "),
        description: prompt("Please Give a brief description of the project: "),
        dueDate: prompt("what is the due date :"),
    }
    ;(0,_domStuff__WEBPACK_IMPORTED_MODULE_0__.createProjectDiv)()
    console.log(existingProjects.length)
    console.log(existingProjects[i])
    return i++;
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFtQjtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLDJCQUEyQix1Q0FBQztBQUM1QiwyQkFBMkIsdUNBQUM7QUFDNUIsMkJBQTJCLHVDQUFDO0FBQzVCLDJCQUEyQix1Q0FBQztBQUM1QjtBQUNBLDJCQUEyQix1Q0FBQyx1QkFBdUIsdUNBQUM7QUFDcEQsMkJBQTJCLHVDQUFDO0FBQzVCLDJCQUEyQix1Q0FBQztBQUM1QiwyQkFBMkIsdUNBQUM7QUFDNUI7QUFDQSwwRUFBMEUsdUNBQUM7QUFDM0UsNENBQTRDLHVDQUFDLHFDQUFxQyx1Q0FBQztBQUNuRiw0Q0FBNEMsdUNBQUMscUNBQXFDLHVDQUFDO0FBQ25GLDRDQUE0Qyx1Q0FBQyxxQ0FBcUMsdUNBQUM7QUFDbkY7QUFDQSwyQkFBMkIsdUNBQUMseUJBQXlCLHNEQUFnQixDQUFDLHVDQUFDO0FBQ3ZFLDJCQUEyQix1Q0FBQywrQkFBK0Isc0RBQWdCLENBQUMsdUNBQUM7QUFDN0UsMkJBQTJCLHVDQUFDLDJCQUEyQixzREFBZ0IsQ0FBQyx1Q0FBQztBQUN6RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4aXN0aW5nUHJvamVjdHMsIGksIGNyZWF0ZVByb2plY3RPYmplY3QgfSBmcm9tICcuL3Byb2plY3QnXHJcblxyXG5jb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJ1dHRvblwiKTtcclxuXHJcbmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdE9iamVjdCgpO1xyXG59KTsgXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYoKSB7XHJcbiAgICAvLyBkaXYgY3JlYXRpb25zXHJcbiAgICB3aW5kb3dbJ3Byb2plY3REaXZfJyArIGldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmRvd1sncHJvamVjdERpdl8nICsgaSArICdfVGl0bGUnXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aW5kb3dbJ3Byb2plY3REaXZfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJ10gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2luZG93Wydwcm9qZWN0RGl2XycgKyBpICsgJ19EdWVEYXRlJ10gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gZGl2IGlkIG5hbWluZ1xyXG4gICAgd2luZG93Wydwcm9qZWN0RGl2XycgKyBpXS5pZCA9IFwicHJvamVjdERpdl9cIiArIGk7XHJcbiAgICB3aW5kb3dbJ3Byb2plY3REaXZfJyArIGkgKyAnX1RpdGxlJ11cclxuICAgIHdpbmRvd1sncHJvamVjdERpdl8nICsgaSArICdfRGVzY3JpcHRpb24nXVxyXG4gICAgd2luZG93Wydwcm9qZWN0RGl2XycgKyBpICsgJ19EdWVEYXRlJ11cclxuICAgIC8vIGRpdiBhcHBlbmRDaGlsZFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHdpbmRvd1sncHJvamVjdERpdl8nICsgaV0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REaXZfXCIgKyBpKS5hcHBlbmRDaGlsZCh3aW5kb3dbJ3Byb2plY3REaXZfJyArIGkgKyAnX1RpdGxlJ10pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REaXZfXCIgKyBpKS5hcHBlbmRDaGlsZCh3aW5kb3dbJ3Byb2plY3REaXZfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJ10pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REaXZfXCIgKyBpKS5hcHBlbmRDaGlsZCh3aW5kb3dbJ3Byb2plY3REaXZfJyArIGkgKyAnX0R1ZURhdGUnXSlcclxuICAgIC8vIGRpdiBpbm5lckhUTUxcclxuICAgIHdpbmRvd1sncHJvamVjdERpdl8nICsgaSArICdfVGl0bGUnXS5pbm5lckhUTUwgPSBleGlzdGluZ1Byb2plY3RzW2ldLnRpdGxlXHJcbiAgICB3aW5kb3dbJ3Byb2plY3REaXZfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJ10uaW5uZXJIVE1MID0gZXhpc3RpbmdQcm9qZWN0c1tpXS5kZXNjcmlwdGlvblxyXG4gICAgd2luZG93Wydwcm9qZWN0RGl2XycgKyBpICsgJ19EdWVEYXRlJ10uaW5uZXJIVE1MID0gZXhpc3RpbmdQcm9qZWN0c1tpXS5kdWVEYXRlXHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQnV0dG9uLCBjcmVhdGVQcm9qZWN0RGl2fSIsImltcG9ydCB7Y3JlYXRlQnV0dG9uLCBjcmVhdGVQcm9qZWN0RGl2fSBmcm9tICcuL2RvbVN0dWZmJ1xyXG5cclxuY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IFtdO1xyXG5sZXQgaSA9IDE7XHJcblxyXG5leGlzdGluZ1Byb2plY3RzWzBdID0ge1xyXG4gICAgdGl0bGU6IFwiTG9yZCBvZiB0aGUgUmluZ3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcImJ5IEouUi5SLiBUb2xrZWluXCIsXHJcbiAgICBkdWVEYXRlOiBcInByZXR0eSBvbGRcIixcclxufVxyXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3RzWzBdKVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdE9iamVjdCgpIHtcclxuICAgIGV4aXN0aW5nUHJvamVjdHNbaV0gPSB7IFxyXG4gICAgICAgIHRpdGxlOiBwcm9tcHQoXCJ3aGF0IGlzIHRoZSB0aXRsZSBvZiB0aGlzIHByb2plY3Q/IFwiKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcHJvbXB0KFwiUGxlYXNlIEdpdmUgYSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdDogXCIpLFxyXG4gICAgICAgIGR1ZURhdGU6IHByb21wdChcIndoYXQgaXMgdGhlIGR1ZSBkYXRlIDpcIiksXHJcbiAgICB9XHJcbiAgICBjcmVhdGVQcm9qZWN0RGl2KClcclxuICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHMubGVuZ3RoKVxyXG4gICAgY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0c1tpXSlcclxuICAgIHJldHVybiBpKys7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGV4aXN0aW5nUHJvamVjdHMsIGksIGNyZWF0ZVByb2plY3RPYmplY3QgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2RvbVN0dWZmJztcclxuaW1wb3J0IHsgfSBmcm9tICcuL3Byb2plY3QnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
