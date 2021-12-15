"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Login_jsx"],{

/***/ "./resources/js/Icons/Logo.jsx":
/*!*************************************!*\
  !*** ./resources/js/Icons/Logo.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Logo = function Logo(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: width,
    height: height,
    viewBox: "0 0 53 57",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M36.3693 19.4904C33.9261 24.5722 28.7297 28.08 22.7141 28.08C14.351 28.08 7.57132 21.3004 7.57132 12.9373C7.57132 7.45808 10.4814 2.65855 14.8404 0C6.3926 1.58396 0 8.99844 0 17.906C0 27.9679 8.15675 36.1246 18.2186 36.1246C27.7467 36.1246 35.5664 28.8104 36.3693 19.4904Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M43.7708 42.0109C39.3658 45.5307 33.1625 46.4385 27.7418 43.8302C20.2057 40.2041 17.036 31.1553 20.6622 23.6192C23.0379 18.6818 27.7413 15.6187 32.8219 15.113C24.5227 12.8775 15.5474 16.787 11.6851 24.8137C7.32243 33.8806 11.1359 44.7674 20.2028 49.1301C28.7885 53.2613 39.0062 50.061 43.7708 42.0109Z",
      fill: "white"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.jsx":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/TextInput */ "./resources/js/Shared/TextInput.jsx");
/* harmony import */ var _Icons_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Icons/Logo */ "./resources/js/Icons/Logo.jsx");
/* harmony import */ var _Shared_SingleSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Shared/SingleSelect */ "./resources/js/Shared/SingleSelect.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Login = function Login() {
  var errors = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.usePage)().props.errors;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      teacher = _useState2[0],
      setTeacher = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      student = _useState4[0],
      setStudent = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      sending = _useState6[0],
      setSending = _useState6[1];

  console.log('err', errors);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    email: '',
    password: '',
    remember: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      values = _useState8[0],
      setValues = _useState8[1];

  var handleChange = function handleChange(e) {
    var key = e.target.name;
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(function (oldValues) {
      return _objectSpread(_objectSpread({}, oldValues), {}, _defineProperty({}, key, value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post(route('login.attempt'), values, {
      onFinish: function onFinish() {
        return setSending(false);
      }
    });
  };

  var userTypes = [{
    key: '',
    value: 'Select One'
  }, {
    key: 'admin',
    value: 'Admin'
  }, {
    key: 'student',
    value: 'Student'
  }, {
    key: 'teacher',
    value: 'Teacher'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "flex",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "signup-leftside",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "53",
          height: "53"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "font-inter-400 logoname",
          children: "Teacher Assistant"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "signup-leftside__block font-inter-400",
        children: "Education is our passport to the future, for tommorow belongs to the people who prepare for it today.."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "signup-rightside",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "signup-rightside__label font-inter-700",
          children: "Login Individual Account!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "signup-rightside__sublabel font-inter-400",
          children: "For the purpose of Access your account, your details are required."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("form", {
          method: "post",
          onSubmit: handleSubmit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "font-inter-400 signup-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Shared_SingleSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: "role",
              name: "role",
              label: "User Type",
              onChange: handleChange,
              inputClass: "textinput-input",
              optionValues: userTypes
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
              id: "email",
              name: "email",
              label: "Email",
              type: "email",
              onChange: handleChange,
              inputClass: "textinput-input",
              placeholder: "Your Email",
              value: values === null || values === void 0 ? void 0 : values.email,
              errors: errors === null || errors === void 0 ? void 0 : errors.email
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
              id: "password",
              name: "password",
              label: "Password",
              type: "password",
              onChange: handleChange,
              inputClass: "textinput-input",
              placeholder: "Your Password",
              value: values === null || values === void 0 ? void 0 : values.password,
              errors: errors === null || errors === void 0 ? void 0 : errors.password
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
              className: "flex items-center mt-6 select-none",
              htmlFor: "remember",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                name: "remember",
                id: "remember",
                className: "mr-1 login-rememberme-input",
                type: "checkbox",
                checked: values.remember,
                onChange: handleChange
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "login-remeverme font-inter-normal",
                children: "Remember Me"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: "btn-signup",
                type: "submit",
                children: "Sign In"
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/js/Shared/SingleSelect.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Shared/SingleSelect.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var SingleSelect = function SingleSelect(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      labelClass = _ref.labelClass,
      inputClass = _ref.inputClass,
      optionValues = _ref.optionValues,
      onChange = _ref.onChange,
      value = _ref.value;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      htmlFor: name,
      className: labelClass,
      children: [label, ":"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
        name: name,
        id: id,
        className: inputClass,
        value: value,
        onChange: onChange,
        children: optionValues.map(function (_ref2) {
          var key = _ref2.key,
              value = _ref2.value;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: key,
            children: value
          }, key);
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleSelect);

/***/ }),

/***/ "./resources/js/Shared/TextInput.jsx":
/*!*******************************************!*\
  !*** ./resources/js/Shared/TextInput.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var TextInput = function TextInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      inputLabelClass = _ref.inputLabelClass,
      inputClass = _ref.inputClass,
      type = _ref.type,
      value = _ref.value,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      htmlFor: name,
      className: inputLabelClass,
      children: [label, ":"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: name,
        name: name,
        type: type,
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        className: inputClass
      })
    }), errors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: errors
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ })

}]);