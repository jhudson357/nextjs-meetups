webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.jsx\");\n\n\nvar _jsxFileName = \"/Users/jameshudson/code/udemy/react/section-23-nextjs-meetups-project/pages/index.jsx\",\n    _this = undefined;\n\n\nvar DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: 'First Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n  address: '123 City Center, Munich, Germany',\n  description: 'This is the description'\n}, {\n  id: 'm2',\n  title: 'Second Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n  address: '456 City Center, Munich, Germany',\n  description: 'This is the description'\n}, {\n  id: 'm3',\n  title: 'Third Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n  address: '789 City Center, Munich, Germany',\n  description: 'This is the description'\n}];\n\nvar HomePage = function HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n}; // add this for data fetching when pre-rendering\n// calls getStaticProps BEFORE it calls the component function\n// this code is executed in the build process (which means it could be outdated once new info is added --> would need to reuild/redploy every time new data is added)\n// 'revalidate' prop solves this problem ^. W revalidate set to some number, this pg will not just be generated during the process, but also be generated every couple of seconds on the server if there are requests for this page. The re-generated pages would replace the pre-generated pages, and ensure that the data is never older than 10 seconds (or whatever number you set revalidate to)\n// this code will NEVER execute on the user's machine\n// export async function getStaticProps() {\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS\n//     },\n//     revalidate: 10\n//   }\n// }\n// ALTERNATIVE TO getStaticProps() --> getServerSideProps()\n// This function will NOT run during the build process, but instead always on the server after deployment\n// this code will only run on the server, never the client side\n// only use this if you need to get access to the request object OR if you have data the changes multiple times every second\n// export async function getServerSideProps(context) {\n//   const req = context.req\n//   const res = context.res\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS\n//     }\n//   }\n// }\n\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsY0FGVDtBQUdFQyxPQUFLLEVBQUUsd0hBSFQ7QUFJRUMsU0FBTyxFQUFFLGtDQUpYO0FBS0VDLGFBQVcsRUFBRTtBQUxmLENBRG9CLEVBUXBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxlQUZUO0FBR0VDLE9BQUssRUFBRSx3SEFIVDtBQUlFQyxTQUFPLEVBQUUsa0NBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FSb0IsRUFlcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsT0FBSyxFQUFFLHdIQUhUO0FBSUVDLFNBQU8sRUFBRSxrQ0FKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQWZvQixDQUF0Qjs7QUF3QkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLHNCQUNFLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBSkQsQyxDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0F2Q01GLFE7QUF5Q1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnXG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogJ20xJyxcbiAgICB0aXRsZTogJ0ZpcnN0IE1lZXR1cCcsXG4gICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcbiAgICBhZGRyZXNzOiAnMTIzIENpdHkgQ2VudGVyLCBNdW5pY2gsIEdlcm1hbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24nLFxuICB9LFxuICB7XG4gICAgaWQ6ICdtMicsXG4gICAgdGl0bGU6ICdTZWNvbmQgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICc0NTYgQ2l0eSBDZW50ZXIsIE11bmljaCwgR2VybWFueScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBkZXNjcmlwdGlvbicsXG4gIH0sXG4gIHtcbiAgICBpZDogJ20zJyxcbiAgICB0aXRsZTogJ1RoaXJkIE1lZXR1cCcsXG4gICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcbiAgICBhZGRyZXNzOiAnNzg5IENpdHkgQ2VudGVyLCBNdW5pY2gsIEdlcm1hbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24nLFxuICB9LFxuXVxuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz5cbiAgKVxufVxuXG4vLyBhZGQgdGhpcyBmb3IgZGF0YSBmZXRjaGluZyB3aGVuIHByZS1yZW5kZXJpbmdcbi8vIGNhbGxzIGdldFN0YXRpY1Byb3BzIEJFRk9SRSBpdCBjYWxscyB0aGUgY29tcG9uZW50IGZ1bmN0aW9uXG4vLyB0aGlzIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIGJ1aWxkIHByb2Nlc3MgKHdoaWNoIG1lYW5zIGl0IGNvdWxkIGJlIG91dGRhdGVkIG9uY2UgbmV3IGluZm8gaXMgYWRkZWQgLS0+IHdvdWxkIG5lZWQgdG8gcmV1aWxkL3JlZHBsb3kgZXZlcnkgdGltZSBuZXcgZGF0YSBpcyBhZGRlZClcbi8vICdyZXZhbGlkYXRlJyBwcm9wIHNvbHZlcyB0aGlzIHByb2JsZW0gXi4gVyByZXZhbGlkYXRlIHNldCB0byBzb21lIG51bWJlciwgdGhpcyBwZyB3aWxsIG5vdCBqdXN0IGJlIGdlbmVyYXRlZCBkdXJpbmcgdGhlIHByb2Nlc3MsIGJ1dCBhbHNvIGJlIGdlbmVyYXRlZCBldmVyeSBjb3VwbGUgb2Ygc2Vjb25kcyBvbiB0aGUgc2VydmVyIGlmIHRoZXJlIGFyZSByZXF1ZXN0cyBmb3IgdGhpcyBwYWdlLiBUaGUgcmUtZ2VuZXJhdGVkIHBhZ2VzIHdvdWxkIHJlcGxhY2UgdGhlIHByZS1nZW5lcmF0ZWQgcGFnZXMsIGFuZCBlbnN1cmUgdGhhdCB0aGUgZGF0YSBpcyBuZXZlciBvbGRlciB0aGFuIDEwIHNlY29uZHMgKG9yIHdoYXRldmVyIG51bWJlciB5b3Ugc2V0IHJldmFsaWRhdGUgdG8pXG4vLyB0aGlzIGNvZGUgd2lsbCBORVZFUiBleGVjdXRlIG9uIHRoZSB1c2VyJ3MgbWFjaGluZVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcbi8vICAgICB9LFxuLy8gICAgIHJldmFsaWRhdGU6IDEwXG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vIEFMVEVSTkFUSVZFIFRPIGdldFN0YXRpY1Byb3BzKCkgLS0+IGdldFNlcnZlclNpZGVQcm9wcygpXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgTk9UIHJ1biBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MsIGJ1dCBpbnN0ZWFkIGFsd2F5cyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcbi8vIHRoaXMgY29kZSB3aWxsIG9ubHkgcnVuIG9uIHRoZSBzZXJ2ZXIsIG5ldmVyIHRoZSBjbGllbnQgc2lkZVxuLy8gb25seSB1c2UgdGhpcyBpZiB5b3UgbmVlZCB0byBnZXQgYWNjZXNzIHRvIHRoZSByZXF1ZXN0IG9iamVjdCBPUiBpZiB5b3UgaGF2ZSBkYXRhIHRoZSBjaGFuZ2VzIG11bHRpcGxlIHRpbWVzIGV2ZXJ5IHNlY29uZFxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXFcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXNcbiAgXG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcbiAgXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})