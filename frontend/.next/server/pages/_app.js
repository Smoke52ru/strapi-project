(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": () => (/* binding */ getStrapiURL),
/* harmony export */   "fetchAPI": () => (/* binding */ fetchAPI)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": () => (/* binding */ getStrapiMedia)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.js");

function getStrapiMedia(media) {
  const {
    url
  } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;
  return imageUrl;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": () => (/* binding */ GlobalContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\NoobS\\Desktop\\strapi-project\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Store Strapi Global object in context



const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    global
  } = pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_5__.getStrapiMedia)(global.attributes.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GlobalContext.Provider, {
      value: global.attributes,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.fetchAPI)("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*"
      }
    }
  }); // Pass the data to our page via props

  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalRes.data
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUpxQyxDQVlyQzs7QUFDQSx5Q0FBWUYsUUFBWjtBQUFzQmpCLElBQUFBLFNBQVMsRUFBRTtBQUFFZSxNQUFBQSxNQUFNLEVBQUVHLFNBQVMsQ0FBQ2hFO0FBQXBCO0FBQWpDO0FBQ0QsQ0FkRDs7QUFnQkEsaUVBQWU0RCxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVoREE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcclxuXHJcbi8qKlxyXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBVUkxcclxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSBcIlwiKSB7XHJcbiAgcmV0dXJuIGAke1xyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxyXG4gIH0ke3BhdGh9YFxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG5cclxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxyXG5cclxuICAvLyBIYW5kbGUgcmVzcG9uc2VcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4gZGF0YVxyXG59XHJcbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuL2FwaVwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcclxuICBjb25zdCB7IHVybCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzXHJcbiAgY29uc3QgaW1hZ2VVcmwgPSB1cmwuc3RhcnRzV2l0aChcIi9cIikgPyBnZXRTdHJhcGlVUkwodXJsKSA6IHVybFxyXG4gIHJldHVybiBpbWFnZVVybFxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcclxuXHJcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgaHJlZj17Z2V0U3RyYXBpTWVkaWEoZ2xvYmFsLmF0dHJpYnV0ZXMuZmF2aWNvbil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Z2xvYmFsLmF0dHJpYnV0ZXN9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBnZXRJbml0aWFsUHJvcHMgZGlzYWJsZXMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24gZm9yIHBhZ2VzIHRoYXQgZG9uJ3RcclxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cclxuLy8gSG9wZWZ1bGx5IHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBnZXRTdGF0aWNQcm9wcyBvbmNlIHRoaXMgaXNzdWUgaXMgZml4ZWQ6XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9kaXNjdXNzaW9ucy8xMDk0OVxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgLy8gQ2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxyXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcclxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xyXG4gICAgcG9wdWxhdGU6IHtcclxuICAgICAgZmF2aWNvbjogXCIqXCIsXHJcbiAgICAgIGRlZmF1bHRTZW86IHtcclxuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInFzIiwiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwidXJsIiwiYXR0cmlidXRlcyIsImltYWdlVXJsIiwic3RhcnRzV2l0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIkhlYWQiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsIk15QXBwIiwiZ2xvYmFsIiwiZmF2aWNvbiIsImFwcFByb3BzIiwiZ2xvYmFsUmVzIiwicG9wdWxhdGUiLCJkZWZhdWx0U2VvIl0sInNvdXJjZVJvb3QiOiIifQ==