"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Login.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Login.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Utils_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/Cards */ "./resources/js/Utils/Cards.js");
/* harmony import */ var _components_LogoutButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LogoutButton.vue */ "./resources/js/pages/components/LogoutButton.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LogoutButton: _components_LogoutButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      login: null,
      password: null
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['Login', 'Register'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('Auth', ['Authenticated'])), {}, {
    loginAction: function loginAction() {
      var _this = this;
      this.Login({
        login: this.login,
        password: this.password
      }).then(function (result) {
        if (result) {
          _this.$router.push('/');
        }
      });
    },
    registerAction: function registerAction() {
      this.$router.push({
        path: 'register'
      });
    }
  }),
  computed: {
    TelegramData: function TelegramData() {
      var _window$Telegram;
      return (_window$Telegram = window.Telegram) !== null && _window$Telegram !== void 0 ? _window$Telegram : "null";
    }
  },
  mounted: function mounted() {
    console.log(123);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Login.vue?vue&type=template&id=ba36952a":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Login.vue?vue&type=template&id=ba36952a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "overflow": "scroll",
    "background": "antiquewhite"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LogoutButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LogoutButton");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "login",
    onInput: _cache[0] || (_cache[0] = function (event) {
      return _ctx.login = event.target.value;
    })
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "password",
    onInput: _cache[1] || (_cache[1] = function (event) {
      return _ctx.password = event.target.value;
    })
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LogoutButton), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.loginAction && $options.loginAction.apply($options, arguments);
    })
  }, "Войти"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.registerAction && $options.registerAction.apply($options, arguments);
    })
  }, "Регистрация"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_1, "        " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.TelegramData) + "\n    ", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/pages/Auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_ba36952a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ba36952a */ "./resources/js/pages/Auth/Login.vue?vue&type=template&id=ba36952a");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/pages/Auth/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_ba36952a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Auth/Login.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Auth/Login.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Auth/Login.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Auth/Login.vue?vue&type=template&id=ba36952a":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Auth/Login.vue?vue&type=template&id=ba36952a ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ba36952a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ba36952a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=ba36952a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Login.vue?vue&type=template&id=ba36952a");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLGFBQVcsR0FDL0NkLHVEQUFBLENBRU0sT0FGTmdCLFVBRU0sRUFGa0QsVUFDcEQsR0FBQUMsb0RBQUEsQ0FBR0wsUUFBQSxDQUFBcEIsWUFBWSxJQUFHLFFBQ3RCLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSOEQ7QUFDVjtBQUNMOztBQUVuRCxDQUF1RjtBQUN2RixpQ0FBaUMscUdBQWUsQ0FBQywwRUFBTSxhQUFhLDRFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQWNmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmlNLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQXV0aC9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0F1dGgvTG9naW4udnVlPzlhMDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0F1dGgvTG9naW4udnVlP2I0MDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0F1dGgvTG9naW4udnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IG5hbWU9XCJsb2dpblwiIEBpbnB1dD1cImV2ZW50ID0+IGxvZ2luID0gZXZlbnQudGFyZ2V0LnZhbHVlXCI+XG48aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgQGlucHV0PVwiZXZlbnQgPT4gcGFzc3dvcmQgPSBldmVudC50YXJnZXQudmFsdWVcIj5cbiAgICA8TG9nb3V0QnV0dG9uLz5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2s9XCJsb2dpbkFjdGlvblwiPtCS0L7QudGC0Lg8L2J1dHRvbj5cbiAgICA8YSBocmVmPVwiI1wiIEBjbGljaz1cInJlZ2lzdGVyQWN0aW9uXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYT5cbiAgICA8cHJlIHN0eWxlPVwib3ZlcmZsb3c6IHNjcm9sbDtiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XCI+XG4gICAgICAgIHt7IFRlbGVncmFtRGF0YSB9fVxuICAgIDwvcHJlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiLi4vLi4vVXRpbHMvQ2FyZHNcIjtcbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9nb3V0QnV0dG9uLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge0xvZ291dEJ1dHRvbn0sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9naW46IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGgnLCBbJ0xvZ2luJywgJ1JlZ2lzdGVyJ10pLFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdBdXRoJywgWydBdXRoZW50aWNhdGVkJ10pLFxuXG4gICAgICAgIGxvZ2luQWN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLkxvZ2luKHtcbiAgICAgICAgICAgICAgICBsb2dpbjp0aGlzLmxvZ2luLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOnRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWdpc3RlckFjdGlvbigpe1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiAncmVnaXN0ZXInIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOntcbiAgICAgICAgVGVsZWdyYW1EYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5UZWxlZ3JhbSA/PyBcIm51bGxcIjtcbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coMTIzKVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTM2OTUyYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwbGljYXRpb24vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy9qcy9wYWdlcy9BdXRoL0xvZ2luLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJiYTM2OTUyYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2JhMzY5NTJhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnYmEzNjk1MmEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYTM2OTUyYVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCdiYTM2OTUyYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMzY5NTJhXCIiXSwibmFtZXMiOlsibWFwQWN0aW9ucyIsIm1hcEdldHRlcnMiLCJDYXJkcyIsIkxvZ291dEJ1dHRvbiIsImNvbXBvbmVudHMiLCJkYXRhIiwibG9naW4iLCJwYXNzd29yZCIsIm1ldGhvZHMiLCJfb2JqZWN0U3ByZWFkIiwibG9naW5BY3Rpb24iLCJfdGhpcyIsIkxvZ2luIiwidGhlbiIsInJlc3VsdCIsIiRyb3V0ZXIiLCJwdXNoIiwicmVnaXN0ZXJBY3Rpb24iLCJwYXRoIiwiY29tcHV0ZWQiLCJUZWxlZ3JhbURhdGEiLCJfd2luZG93JFRlbGVncmFtIiwid2luZG93IiwiVGVsZWdyYW0iLCJtb3VudGVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIm5hbWUiLCJvbklucHV0IiwiX2NhY2hlIiwiZXZlbnQiLCJfY3R4IiwidGFyZ2V0IiwidmFsdWUiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0xvZ291dEJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiJG9wdGlvbnMiLCJhcHBseSIsImFyZ3VtZW50cyIsImhyZWYiLCJfaG9pc3RlZF8xIiwiX3RvRGlzcGxheVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=