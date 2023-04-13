webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.jsx":
false,

/***/ "./components/meetups/MeetupDetail.module.css":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/meetups/MeetupDetail.module.css":
false,

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
false,

/***/ "./node_modules/react/cjs/react.development.js":
false,

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/react/jsx-dev-runtime.js":
false,

/***/ "./pages/[meetupId]/index.jsx":
/*!************************************!*\
  !*** ./pages/[meetupId]/index.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// import Head from 'next/head'\n// import { MongoClient, ObjectId } from 'mongodb'\n// import MeetupDetail from \"../../components/meetups/MeetupDetail\"\n// const MeetupDetailsPage = (props) => {\n//   return (\n//     <>\n//       <Head>\n//         <title>{props.meetupData.title}</title>\n//         <meta name='description' content={props.meetupData.description}/>\n//       </Head>\n//       <MeetupDetail \n//         image={props.meetupData.image}\n//         title={props.meetupData.title}\n//         address={props.meetupData.address}\n//         description={props.meetupData.description}\n//       />\n//     </>\n//   )\n// }\n// // because this a dynamic page, we also need to export getStaticPaths (would not have to do this if we were using getServerSideProps, only if using getStaticProps on dynamic page)\n// export async function getStaticPaths() {\n//   const client = await MongoClient.connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority')\n//   const db = client.db()\n//   const meetupsCollection = db.collection('meetups')\n//   // find all documents in meetupsCollection (first argument), but each documnet object will only contain the _id\n//   const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()\n//   client.close()\n//   return {\n//     // fallback key tells NextJS whether your paths array contains all supported parameter values or just some of them (false = all, true = not all paths are pre-generated so if user goes to one (i.e. m4), then the server will pre-generate the missing ones dynamically when requests for them are coming in)\n//     fallback: false,\n//     paths: meetups.map(meetup => ({\n//       params: { meetupId: meetup._id.toString() },\n//     }))\n//   }\n// }\n// export async function getStaticProps(context) {\n//   // fetch data for a single meetup\n//   const meetupId = context.params\n//   console.log('HIIIII', meetupId.meetupId)\n//   const client = await MongoClient.connect('mongodb+srv://jameshudson0357:X3O56tkC0LyjxGLH@cluster0.rduh66w.mongodb.net/meetups?retryWrites=true&w=majority')\n//   const db = client.db()\n//   const meetupsCollection = db.collection('meetups')\n//   // get a single meetup's data\n//   // pass in some data to filter for that specific meetup (meetupId pulled from params)\n//   const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })\n//   // console.log('bye', meetupsCollection)\n//   // console.log('hi', selectedMeetup)\n//   client.close()\n//   return {\n//     props: {\n//       meetupData: {\n//         id: selectedMeetup._id.toString(),\n//         title: selectedMeetup.title,\n//         address: selectedMeetup.address,\n//         image: selectedMeetup.image,\n//         description: selectedMeetup.description,\n//       },\n//     },\n//   }\n// }\n// export default MeetupDetailsPage\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc3g/OGVjYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYidcblxuLy8gaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiXG5cbi8vIGNvbnN0IE1lZXR1cERldGFpbHNQYWdlID0gKHByb3BzKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxIZWFkPlxuLy8gICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cbi8vICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259Lz5cbi8vICAgICAgIDwvSGVhZD5cbi8vICAgICAgIDxNZWV0dXBEZXRhaWwgXG4vLyAgICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxuLy8gICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cbi8vICAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuLy8gICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cbi8vICAgICAgIC8+XG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuLy8gLy8gYmVjYXVzZSB0aGlzIGEgZHluYW1pYyBwYWdlLCB3ZSBhbHNvIG5lZWQgdG8gZXhwb3J0IGdldFN0YXRpY1BhdGhzICh3b3VsZCBub3QgaGF2ZSB0byBkbyB0aGlzIGlmIHdlIHdlcmUgdXNpbmcgZ2V0U2VydmVyU2lkZVByb3BzLCBvbmx5IGlmIHVzaW5nIGdldFN0YXRpY1Byb3BzIG9uIGR5bmFtaWMgcGFnZSlcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9qYW1lc2h1ZHNvbjAzNTc6WDNPNTZ0a0MwTHlqeEdMSEBjbHVzdGVyMC5yZHVoNjZ3Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jylcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxuLy8gICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxuXG4vLyAgIC8vIGZpbmQgYWxsIGRvY3VtZW50cyBpbiBtZWV0dXBzQ29sbGVjdGlvbiAoZmlyc3QgYXJndW1lbnQpLCBidXQgZWFjaCBkb2N1bW5ldCBvYmplY3Qgd2lsbCBvbmx5IGNvbnRhaW4gdGhlIF9pZFxuLy8gICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwge19pZDogMX0pLnRvQXJyYXkoKVxuXG4vLyAgIGNsaWVudC5jbG9zZSgpXG4gIFxuLy8gICByZXR1cm4ge1xuLy8gICAgIC8vIGZhbGxiYWNrIGtleSB0ZWxscyBOZXh0SlMgd2hldGhlciB5b3VyIHBhdGhzIGFycmF5IGNvbnRhaW5zIGFsbCBzdXBwb3J0ZWQgcGFyYW1ldGVyIHZhbHVlcyBvciBqdXN0IHNvbWUgb2YgdGhlbSAoZmFsc2UgPSBhbGwsIHRydWUgPSBub3QgYWxsIHBhdGhzIGFyZSBwcmUtZ2VuZXJhdGVkIHNvIGlmIHVzZXIgZ29lcyB0byBvbmUgKGkuZS4gbTQpLCB0aGVuIHRoZSBzZXJ2ZXIgd2lsbCBwcmUtZ2VuZXJhdGUgdGhlIG1pc3Npbmcgb25lcyBkeW5hbWljYWxseSB3aGVuIHJlcXVlc3RzIGZvciB0aGVtIGFyZSBjb21pbmcgaW4pXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlLFxuLy8gICAgIHBhdGhzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcbi8vICAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXG4vLyAgICAgfSkpXG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbi8vICAgLy8gZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXG4gIFxuLy8gICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zXG4vLyAgIGNvbnNvbGUubG9nKCdISUlJSUknLCBtZWV0dXBJZC5tZWV0dXBJZClcblxuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2phbWVzaHVkc29uMDM1NzpYM081NnRrQzBMeWp4R0xIQGNsdXN0ZXIwLnJkdWg2NncubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuLy8gICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4vLyAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG5cbi8vICAgLy8gZ2V0IGEgc2luZ2xlIG1lZXR1cCdzIGRhdGFcbi8vICAgLy8gcGFzcyBpbiBzb21lIGRhdGEgdG8gZmlsdGVyIGZvciB0aGF0IHNwZWNpZmljIG1lZXR1cCAobWVldHVwSWQgcHVsbGVkIGZyb20gcGFyYW1zKVxuLy8gICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSB9KVxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKCdieWUnLCBtZWV0dXBzQ29sbGVjdGlvbilcbi8vICAgLy8gY29uc29sZS5sb2coJ2hpJywgc2VsZWN0ZWRNZWV0dXApXG5cbi8vICAgY2xpZW50LmNsb3NlKClcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBEYXRhOiB7XG4vLyAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcbi8vICAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxuLy8gICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxuLy8gICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcbi8vICAgICAgIH0sXG4vLyAgICAgfSxcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzUGFnZVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.jsx\n");

/***/ })

})