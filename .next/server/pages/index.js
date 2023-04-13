module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.jsx":
/*!*******************************************!*\
  !*** ./components/meetups/MeetupItem.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ \"./components/meetups/MeetupItem.module.css\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/jameshudson/code/udemy/react/section-23-nextjs-meetups-project/components/meetups/MeetupItem.jsx\";\n\n\n\n\nfunction MeetupItem(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  function showDetailsHandler() {\n    console.log(router.push(`/${props.id}`));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: props.image,\n          alt: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: props.address\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: showDetailsHandler,\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qc3g/OWZhNCJdLCJuYW1lcyI6WyJNZWV0dXBJdGVtIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93RGV0YWlsc0hhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImlkIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWFnZSIsInRpdGxlIiwiY29udGVudCIsImFkZHJlc3MiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0Msa0JBQVQsR0FBOEI7QUFDNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNLLElBQVAsQ0FBYSxJQUFHTixLQUFLLENBQUNPLEVBQUcsRUFBekIsQ0FBWjtBQUNEOztBQUVELHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2REFBTyxDQUFDQyxJQUF2QjtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRCw2REFBTyxDQUFDRSxLQUF4QjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFVixLQUFLLENBQUNVLEtBQWhCO0FBQXVCLGFBQUcsRUFBRVYsS0FBSyxDQUFDVztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSCw2REFBTyxDQUFDSSxPQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtaLEtBQUssQ0FBQ1c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBVVgsS0FBSyxDQUFDYTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBUUU7QUFBSyxpQkFBUyxFQUFFTCw2REFBTyxDQUFDTSxPQUF4QjtBQUFBLCtCQUNFO0FBQVEsaUJBQU8sRUFBRVgsa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7QUFFY0oseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCdcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwSXRlbS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBNZWV0dXBJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIFxuICBmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKSB7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnB1c2goYC8ke3Byb3BzLmlkfWApKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.jsx\n");

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"MeetupItem_item__3siMU\",\n\t\"image\": \"MeetupItem_image__13rAP\",\n\t\"content\": \"MeetupItem_content__3uEkT\",\n\t\"actions\": \"MeetupItem_actions__LvT9B\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzPzFiMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIk1lZXR1cEl0ZW1faXRlbV9fM3NpTVVcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cEl0ZW1faW1hZ2VfXzEzckFQXCIsXG5cdFwiY29udGVudFwiOiBcIk1lZXR1cEl0ZW1fY29udGVudF9fM3VFa1RcIixcblx0XCJhY3Rpb25zXCI6IFwiTWVldHVwSXRlbV9hY3Rpb25zX19MdlQ5QlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupList.jsx":
/*!*******************************************!*\
  !*** ./components/meetups/MeetupList.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ \"./components/meetups/MeetupItem.jsx\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ \"./components/meetups/MeetupList.module.css\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jameshudson/code/udemy/react/section-23-nextjs-meetups-project/components/meetups/MeetupList.jsx\";\n\n\n\nfunction MeetupList(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      id: meetup.id,\n      image: meetup.image,\n      title: meetup.title,\n      address: meetup.address\n    }, meetup.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qc3g/NzJiYSJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwibGlzdCIsIm1lZXR1cHMiLCJtYXAiLCJtZWV0dXAiLCJpZCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsY0FDR0YsS0FBSyxDQUFDRyxPQUFOLENBQWNDLEdBQWQsQ0FBbUJDLE1BQUQsaUJBQ2pCLHFFQUFDLG1EQUFEO0FBRUUsUUFBRSxFQUFFQSxNQUFNLENBQUNDLEVBRmI7QUFHRSxXQUFLLEVBQUVELE1BQU0sQ0FBQ0UsS0FIaEI7QUFJRSxXQUFLLEVBQUVGLE1BQU0sQ0FBQ0csS0FKaEI7QUFLRSxhQUFPLEVBQUVILE1BQU0sQ0FBQ0k7QUFMbEIsT0FDT0osTUFBTSxDQUFDQyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUVjUCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4vTWVldHVwSXRlbSdcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwTGlzdC5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXG4gICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cbiAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XG4gICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.jsx\n");

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"MeetupList_list__1iafn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzPzlhMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcIk1lZXR1cExpc3RfbGlzdF9fMWlhZm5cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.module.css\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jameshudson/code/udemy/react/section-23-nextjs-meetups-project/components/ui/Card.js\";\n\n\nfunction Card(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanM/OTVlYSJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2FyZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLHNCQUFPO0FBQUssYUFBUyxFQUFFQyx1REFBTyxDQUFDQyxJQUF4QjtBQUFBLGNBQStCRixLQUFLLENBQUNHO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjSixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__3KSLO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz8yNGQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.jsx\");\n\n\nvar _jsxFileName = \"/Users/jameshudson/code/udemy/react/section-23-nextjs-meetups-project/pages/index.jsx\";\n\n\n\n\nconst HomePage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"React Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Browse a huge list of highly active React meetups.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n}; // add this for data fetching when pre-rendering\n// calls getStaticProps BEFORE it calls the component function\n// this code is executed in the build process (which means it could be outdated once new info is added --> would need to reuild/redploy every time new data is added)\n// 'revalidate' prop solves this problem ^. W revalidate set to some number, this pg will not just be generated during the process, but also be generated every couple of seconds on the server if there are requests for this page. The re-generated pages would replace the pre-generated pages, and ensure that the data is never older than 10 seconds (or whatever number you set revalidate to)\n// this code will NEVER execute on the user's machine\n// cache data until the page is revalidated\n\n\nasync function getStaticProps() {\n  // fetch data from an API\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups'); // use meetupsCollection to find all the documents in that collection\n  // convert to an array to get array of documents (like our dummy data)\n\n  const meetups = await meetupsCollection.find().toArray();\n  client.close();\n  return {\n    props: {\n      // need to use .map() to transform every meetup (specifically the id)\n      meetups: meetups.map(meetup => ({\n        title: meetup.title,\n        address: meetup.address,\n        image: meetup.image,\n        id: meetup._id.toString()\n      }))\n    },\n    revalidate: 10\n  };\n} // ALTERNATIVE TO getStaticProps() --> getServerSideProps()\n// This function will NOT run during the build process, but instead always on the server after deployment\n// this code will only run on the server, never the client side\n// only use this if you need to get access to the request object OR if you have data the changes multiple times every second\n// export async function getServerSideProps(context) {\n//   const req = context.req\n//   const res = context.res\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS\n//     }\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwibWFwIiwibWVldHVwIiwidGl0bGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBU0QsQ0FWRCxDLENBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFTyxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsaUhBQXBCLENBQXJCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCLENBSnFDLENBTXJDO0FBQ0E7O0FBQ0EsUUFBTVAsT0FBTyxHQUFHLE1BQU1NLGlCQUFpQixDQUFDRSxJQUFsQixHQUF5QkMsT0FBekIsRUFBdEI7QUFFQVAsUUFBTSxDQUFDUSxLQUFQO0FBRUEsU0FBTztBQUNMWCxTQUFLLEVBQUU7QUFDTDtBQUNBQyxhQUFPLEVBQUVBLE9BQU8sQ0FBQ1csR0FBUixDQUFZQyxNQUFNLEtBQUs7QUFDOUJDLGFBQUssRUFBRUQsTUFBTSxDQUFDQyxLQURnQjtBQUU5QkMsZUFBTyxFQUFFRixNQUFNLENBQUNFLE9BRmM7QUFHOUJDLGFBQUssRUFBRUgsTUFBTSxDQUFDRyxLQUhnQjtBQUk5QkMsVUFBRSxFQUFFSixNQUFNLENBQUNLLEdBQVAsQ0FBV0MsUUFBWDtBQUowQixPQUFMLENBQWxCO0FBRkosS0FERjtBQVVMQyxjQUFVLEVBQUU7QUFWUCxHQUFQO0FBWUQsQyxDQUlEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVyQix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnXG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdCcm93c2UgYSBodWdlIGxpc3Qgb2YgaGlnaGx5IGFjdGl2ZSBSZWFjdCBtZWV0dXBzLicvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGFkZCB0aGlzIGZvciBkYXRhIGZldGNoaW5nIHdoZW4gcHJlLXJlbmRlcmluZ1xuLy8gY2FsbHMgZ2V0U3RhdGljUHJvcHMgQkVGT1JFIGl0IGNhbGxzIHRoZSBjb21wb25lbnQgZnVuY3Rpb25cbi8vIHRoaXMgY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgYnVpbGQgcHJvY2VzcyAod2hpY2ggbWVhbnMgaXQgY291bGQgYmUgb3V0ZGF0ZWQgb25jZSBuZXcgaW5mbyBpcyBhZGRlZCAtLT4gd291bGQgbmVlZCB0byByZXVpbGQvcmVkcGxveSBldmVyeSB0aW1lIG5ldyBkYXRhIGlzIGFkZGVkKVxuLy8gJ3JldmFsaWRhdGUnIHByb3Agc29sdmVzIHRoaXMgcHJvYmxlbSBeLiBXIHJldmFsaWRhdGUgc2V0IHRvIHNvbWUgbnVtYmVyLCB0aGlzIHBnIHdpbGwgbm90IGp1c3QgYmUgZ2VuZXJhdGVkIGR1cmluZyB0aGUgcHJvY2VzcywgYnV0IGFsc28gYmUgZ2VuZXJhdGVkIGV2ZXJ5IGNvdXBsZSBvZiBzZWNvbmRzIG9uIHRoZSBzZXJ2ZXIgaWYgdGhlcmUgYXJlIHJlcXVlc3RzIGZvciB0aGlzIHBhZ2UuIFRoZSByZS1nZW5lcmF0ZWQgcGFnZXMgd291bGQgcmVwbGFjZSB0aGUgcHJlLWdlbmVyYXRlZCBwYWdlcywgYW5kIGVuc3VyZSB0aGF0IHRoZSBkYXRhIGlzIG5ldmVyIG9sZGVyIHRoYW4gMTAgc2Vjb25kcyAob3Igd2hhdGV2ZXIgbnVtYmVyIHlvdSBzZXQgcmV2YWxpZGF0ZSB0bylcbi8vIHRoaXMgY29kZSB3aWxsIE5FVkVSIGV4ZWN1dGUgb24gdGhlIHVzZXIncyBtYWNoaW5lXG4vLyBjYWNoZSBkYXRhIHVudGlsIHRoZSBwYWdlIGlzIHJldmFsaWRhdGVkXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2phbWVzaHVkc29uMDM1NzpYM081NnRrQzBMeWp4R0xIQGNsdXN0ZXIwLnJkdWg2NncubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG5cbiAgLy8gdXNlIG1lZXR1cHNDb2xsZWN0aW9uIHRvIGZpbmQgYWxsIHRoZSBkb2N1bWVudHMgaW4gdGhhdCBjb2xsZWN0aW9uXG4gIC8vIGNvbnZlcnQgdG8gYW4gYXJyYXkgdG8gZ2V0IGFycmF5IG9mIGRvY3VtZW50cyAobGlrZSBvdXIgZHVtbXkgZGF0YSlcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcblxuICBjbGllbnQuY2xvc2UoKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC8vIG5lZWQgdG8gdXNlIC5tYXAoKSB0byB0cmFuc2Zvcm0gZXZlcnkgbWVldHVwIChzcGVjaWZpY2FsbHkgdGhlIGlkKVxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwXG4gIH1cbn1cblxuXG5cbi8vIEFMVEVSTkFUSVZFIFRPIGdldFN0YXRpY1Byb3BzKCkgLS0+IGdldFNlcnZlclNpZGVQcm9wcygpXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgTk9UIHJ1biBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MsIGJ1dCBpbnN0ZWFkIGFsd2F5cyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcbi8vIHRoaXMgY29kZSB3aWxsIG9ubHkgcnVuIG9uIHRoZSBzZXJ2ZXIsIG5ldmVyIHRoZSBjbGllbnQgc2lkZVxuLy8gb25seSB1c2UgdGhpcyBpZiB5b3UgbmVlZCB0byBnZXQgYWNjZXNzIHRvIHRoZSByZXF1ZXN0IG9iamVjdCBPUiBpZiB5b3UgaGF2ZSBkYXRhIHRoZSBjaGFuZ2VzIG11bHRpcGxlIHRpbWVzIGV2ZXJ5IHNlY29uZFxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXFcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXNcbiAgXG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcbiAgXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });