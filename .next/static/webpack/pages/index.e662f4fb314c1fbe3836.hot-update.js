webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.jsx\");\n\n\nvar _jsxFileName = \"/Users/jameshudson/code/udemy/react/section-23-nextjs-meetups-project/pages/index.jsx\",\n    _this = undefined;\n\n\nvar DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: 'First Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n  address: '123 City Center, Munich, Germany',\n  description: 'This is the description'\n}, {\n  id: 'm2',\n  title: 'Second Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n  address: '456 City Center, Munich, Germany',\n  description: 'This is the description'\n}, {\n  id: 'm3',\n  title: 'Third Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n  address: '789 City Center, Munich, Germany',\n  description: 'This is the description'\n}];\n\nvar HomePage = function HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n}; // add this for data fetching when pre-rendering\n// calls getStaticProps BEFORE it calls the component function\n// this code is executed in the build process (which means it could be outdated once new info is added --> would need to reuild/redploy every time new data is added)\n// 'revalidate' prop solves this problem ^. W revalidate set to some number, this pg will not just be generated during the process, but also be generated every couple of seconds on the server if there are requests for this page. The re-generated pages would replace the pre-generated pages, and ensure that the data is never older than 10 seconds (or whatever number you set revalidate to)\n// this code will NEVER execute on the user's machine\n// cache data until the page is revalidated\n\n\n_c = HomePage;\n// ALTERNATIVE TO getStaticProps() --> getServerSideProps()\n// This function will NOT run during the build process, but instead always on the server after deployment\n// this code will only run on the server, never the client side\n// only use this if you need to get access to the request object OR if you have data the changes multiple times every second\n// export async function getServerSideProps(context) {\n//   const req = context.req\n//   const res = context.res\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS\n//     }\n//   }\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsT0FBSyxFQUFFLHdIQUhUO0FBSUVDLFNBQU8sRUFBRSxrQ0FKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQURvQixFQVFwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZUFGVDtBQUdFQyxPQUFLLEVBQUUsd0hBSFQ7QUFJRUMsU0FBTyxFQUFFLGtDQUpYO0FBS0VDLGFBQVcsRUFBRTtBQUxmLENBUm9CLEVBZXBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLE9BQUssRUFBRSx3SEFIVDtBQUlFQyxTQUFPLEVBQUUsa0NBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0Fmb0IsQ0FBdEI7O0FBd0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQUpELEMsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQVhNRixRO0FBaUNOO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCdcblxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbiAge1xuICAgIGlkOiAnbTEnLFxuICAgIHRpdGxlOiAnRmlyc3QgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICcxMjMgQ2l0eSBDZW50ZXIsIE11bmljaCwgR2VybWFueScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBkZXNjcmlwdGlvbicsXG4gIH0sXG4gIHtcbiAgICBpZDogJ20yJyxcbiAgICB0aXRsZTogJ1NlY29uZCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXG4gICAgYWRkcmVzczogJzQ1NiBDaXR5IENlbnRlciwgTXVuaWNoLCBHZXJtYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGRlc2NyaXB0aW9uJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTMnLFxuICAgIHRpdGxlOiAnVGhpcmQgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICc3ODkgQ2l0eSBDZW50ZXIsIE11bmljaCwgR2VybWFueScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBkZXNjcmlwdGlvbicsXG4gIH0sXG5dXG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxuICApXG59XG5cbi8vIGFkZCB0aGlzIGZvciBkYXRhIGZldGNoaW5nIHdoZW4gcHJlLXJlbmRlcmluZ1xuLy8gY2FsbHMgZ2V0U3RhdGljUHJvcHMgQkVGT1JFIGl0IGNhbGxzIHRoZSBjb21wb25lbnQgZnVuY3Rpb25cbi8vIHRoaXMgY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgYnVpbGQgcHJvY2VzcyAod2hpY2ggbWVhbnMgaXQgY291bGQgYmUgb3V0ZGF0ZWQgb25jZSBuZXcgaW5mbyBpcyBhZGRlZCAtLT4gd291bGQgbmVlZCB0byByZXVpbGQvcmVkcGxveSBldmVyeSB0aW1lIG5ldyBkYXRhIGlzIGFkZGVkKVxuLy8gJ3JldmFsaWRhdGUnIHByb3Agc29sdmVzIHRoaXMgcHJvYmxlbSBeLiBXIHJldmFsaWRhdGUgc2V0IHRvIHNvbWUgbnVtYmVyLCB0aGlzIHBnIHdpbGwgbm90IGp1c3QgYmUgZ2VuZXJhdGVkIGR1cmluZyB0aGUgcHJvY2VzcywgYnV0IGFsc28gYmUgZ2VuZXJhdGVkIGV2ZXJ5IGNvdXBsZSBvZiBzZWNvbmRzIG9uIHRoZSBzZXJ2ZXIgaWYgdGhlcmUgYXJlIHJlcXVlc3RzIGZvciB0aGlzIHBhZ2UuIFRoZSByZS1nZW5lcmF0ZWQgcGFnZXMgd291bGQgcmVwbGFjZSB0aGUgcHJlLWdlbmVyYXRlZCBwYWdlcywgYW5kIGVuc3VyZSB0aGF0IHRoZSBkYXRhIGlzIG5ldmVyIG9sZGVyIHRoYW4gMTAgc2Vjb25kcyAob3Igd2hhdGV2ZXIgbnVtYmVyIHlvdSBzZXQgcmV2YWxpZGF0ZSB0bylcbi8vIHRoaXMgY29kZSB3aWxsIE5FVkVSIGV4ZWN1dGUgb24gdGhlIHVzZXIncyBtYWNoaW5lXG4vLyBjYWNoZSBkYXRhIHVudGlsIHRoZSBwYWdlIGlzIHJldmFsaWRhdGVkXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2phbWVzaHVkc29uMDM1NzpYM081NnRrQzBMeWp4R0xIQGNsdXN0ZXIwLnJkdWg2NncubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG5cbiAgLy8gdXNlIG1lZXR1cHNDb2xsZWN0aW9uIHRvIGZpbmQgYWxsIHRoZSBkb2N1bWVudHMgaW4gdGhhdCBjb2xsZWN0aW9uXG4gIC8vIGNvbnZlcnQgdG8gYW4gYXJyYXkgdG8gZ2V0IGFycmF5IG9mIGRvY3VtZW50cyAobGlrZSBvdXIgZHVtbXkgZGF0YSlcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMFxuICB9XG59XG5cblxuXG4vLyBBTFRFUk5BVElWRSBUTyBnZXRTdGF0aWNQcm9wcygpIC0tPiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKVxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIE5PVCBydW4gZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzLCBidXQgaW5zdGVhZCBhbHdheXMgb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50XG4vLyB0aGlzIGNvZGUgd2lsbCBvbmx5IHJ1biBvbiB0aGUgc2VydmVyLCBuZXZlciB0aGUgY2xpZW50IHNpZGVcbi8vIG9ubHkgdXNlIHRoaXMgaWYgeW91IG5lZWQgdG8gZ2V0IGFjY2VzcyB0byB0aGUgcmVxdWVzdCBvYmplY3QgT1IgaWYgeW91IGhhdmUgZGF0YSB0aGUgY2hhbmdlcyBtdWx0aXBsZSB0aW1lcyBldmVyeSBzZWNvbmRcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzXG4gIFxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4gIFxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})