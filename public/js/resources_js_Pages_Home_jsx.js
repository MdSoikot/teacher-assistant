"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_jsx"],{

/***/ "./resources/js/Pages/Home.jsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Shared_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/Navbar */ "./resources/js/Pages/Shared/Navbar.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Shared_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
}

/***/ }),

/***/ "./resources/js/Pages/Shared/Navbar.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Shared/Navbar.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Navbar = function Navbar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex justify-between nav-main items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "font-montserrat-600 text-lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
        className: "ml-6",
        children: "Teaching Assist"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "font-montserrat-600 text-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
        className: "mr-6",
        children: "About"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
        className: "mr-6",
        href: route('login'),
        children: "Sign In"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
        className: "mr-6",
        children: "Sign Up"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
        className: "mr-6",
        children: "Logout"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ })

}]);