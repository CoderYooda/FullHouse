"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      login: null,
      email: null,
      password: null,
      passwordConfirmation: null
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['Register'])), {}, {
    registerAction: function registerAction() {
      var _this = this;
      this.Register({
        login: this.login,
        email: this.email,
        password: this.password,
        password_confirmation: this.password
      }).then(function (result) {
        if (result) {
          _this.$router.push('/');
        }
      });
    },
    loginAction: function loginAction() {
      this.$router.push({
        path: 'login'
      });
    }
  }),
  mounted: function mounted() {
    if (this.$store.state.auth._authenticated) {
      this.$router.push({
        path: 'play'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "login",
    placeholder: "Логин",
    onInput: _cache[0] || (_cache[0] = function (event) {
      return _ctx.login = event.target.value;
    })
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "email",
    placeholder: "Email",
    onInput: _cache[1] || (_cache[1] = function (event) {
      return _ctx.email = event.target.value;
    })
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "password",
    placeholder: "Пароль",
    onInput: _cache[2] || (_cache[2] = function (event) {
      return _ctx.password = event.target.value;
    })
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "passwordConfirmation",
    placeholder: "Подтверждение",
    onInput: _cache[3] || (_cache[3] = function (event) {
      return _ctx.passwordConfirmation = event.target.value;
    })
  }, null, 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.registerAction && $options.registerAction.apply($options, arguments);
    })
  }, "Зарегистрироваться"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.loginAction && $options.loginAction.apply($options, arguments);
    })
  }, "Вход")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_593630de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=593630de */ "./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_593630de__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Auth/Register.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_593630de__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_593630de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=593630de */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3BhZ2VzX0F1dGhfUmVnaXN0ZXJfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTRDO0FBRTVDLGlFQUFlO0VBQ1hFLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQWM7SUFDZCxPQUFPO01BQ0hDLEtBQUssRUFBRSxJQUFJO01BQ1hDLEtBQUssRUFBRSxJQUFJO01BQ1hDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLG9CQUFvQixFQUFFO0lBQzFCO0VBQ0osQ0FBQztFQUNEQyxPQUFPLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNBUixnREFBVSxDQUFDLE1BQU0sRUFBRSxDQUNsQixVQUFTLENBQ1osQ0FBQztJQUNGUyxjQUFjLFdBQWRBLGNBQWNBLENBQUEsRUFBRTtNQUFBLElBQUFDLEtBQUE7TUFDWixJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUNWUixLQUFLLEVBQUMsSUFBSSxDQUFDQSxLQUFLO1FBQ2hCQyxLQUFLLEVBQUMsSUFBSSxDQUFDQSxLQUFLO1FBQ2hCQyxRQUFRLEVBQUMsSUFBSSxDQUFDQSxRQUFRO1FBQ3RCTyxxQkFBcUIsRUFBQyxJQUFJLENBQUNQO01BQy9CLENBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO1FBQ2hCLElBQUlBLE1BQU0sRUFBRTtVQUNSSixLQUFJLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLEdBQUc7UUFDekI7TUFDSixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxXQUFXLFdBQVhBLFdBQVdBLENBQUEsRUFBRTtNQUNULElBQUksQ0FBQ0YsT0FBTyxDQUFDQyxJQUFJLENBQUM7UUFBRUUsSUFBSSxFQUFFO01BQVEsQ0FBQztJQUN2QztFQUFBLEVBQ0g7RUFDREMsT0FBTyxXQUFQQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsY0FBYyxFQUFDO01BQ3RDLElBQUksQ0FBQ1IsT0FBTyxDQUFDQyxJQUFJLENBQUM7UUFBRUUsSUFBSSxFQUFFO01BQU8sQ0FBQztJQUN0QztFQUNKO0FBQ0osQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztxS0E3Q0dNLHVEQUFBLENBQXFGO0lBQTlFQyxJQUFJLEVBQUMsT0FBTztJQUFDQyxXQUFXLEVBQUMsT0FBTztJQUFFQyxPQUFLLEVBQUFDLE1BQUEsUUFBQUEsTUFBQSxNQUFFLFVBQUFDLEtBQUs7TUFBQSxPQUFJQyxJQUFBLENBQUEzQixLQUFLLEdBQUcwQixLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztJQUFBO3FDQUNuRlIsdURBQUEsQ0FBcUY7SUFBOUVDLElBQUksRUFBQyxPQUFPO0lBQUNDLFdBQVcsRUFBQyxPQUFPO0lBQUVDLE9BQUssRUFBQUMsTUFBQSxRQUFBQSxNQUFBLE1BQUUsVUFBQUMsS0FBSztNQUFBLE9BQUlDLElBQUEsQ0FBQTFCLEtBQUssR0FBR3lCLEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO0lBQUE7cUNBQ25GUix1REFBQSxDQUE0RjtJQUFyRkMsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsV0FBVyxFQUFDLFFBQVE7SUFBRUMsT0FBSyxFQUFBQyxNQUFBLFFBQUFBLE1BQUEsTUFBRSxVQUFBQyxLQUFLO01BQUEsT0FBSUMsSUFBQSxDQUFBekIsUUFBUSxHQUFHd0IsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7SUFBQTtxQ0FDMUZSLHVEQUFBLENBQTJIO0lBQXBIQyxJQUFJLEVBQUMsc0JBQXNCO0lBQUNDLFdBQVcsRUFBQyxlQUFlO0lBQUVDLE9BQUssRUFBQUMsTUFBQSxRQUFBQSxNQUFBLE1BQUUsVUFBQUMsS0FBSztNQUFBLE9BQUlDLElBQUEsQ0FBQXhCLG9CQUFvQixHQUFHdUIsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7SUFBQTtxQ0FDekhSLHVEQUFBLENBQXlFO0lBQWpFUyxJQUFJLEVBQUMsUUFBUTtJQUFFQyxPQUFLLEVBQUFOLE1BQUEsUUFBQUEsTUFBQTtNQUFBLE9BQUVPLFFBQUEsQ0FBQTFCLGNBQUEsSUFBQTBCLFFBQUEsQ0FBQTFCLGNBQUEsQ0FBQTJCLEtBQUEsQ0FBQUQsUUFBQSxFQUFBRSxTQUFBLENBQWM7SUFBQTtLQUFFLG9CQUFrQixHQUNoRWIsdURBQUEsQ0FBeUM7SUFBdENjLElBQUksRUFBQyxHQUFHO0lBQUVKLE9BQUssRUFBQU4sTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRU8sUUFBQSxDQUFBbEIsV0FBQSxJQUFBa0IsUUFBQSxDQUFBbEIsV0FBQSxDQUFBbUIsS0FBQSxDQUFBRCxRQUFBLEVBQUFFLFNBQUEsQ0FBVztJQUFBO0tBQUUsTUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDVjtBQUNMOztBQUV0RCxDQUF1RjtBQUN2RixpQ0FBaUMscUdBQWUsQ0FBQyw2RUFBTSxhQUFhLCtFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQWNmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7QUN4Qm9NLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQXV0aC9SZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0F1dGgvUmVnaXN0ZXIudnVlPzdlZjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0F1dGgvUmVnaXN0ZXIudnVlPzE5YWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0F1dGgvUmVnaXN0ZXIudnVlPzdmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxpbnB1dCBuYW1lPVwibG9naW5cIiBwbGFjZWhvbGRlcj1cItCb0L7Qs9C40L1cIiBAaW5wdXQ9XCJldmVudCA9PiBsb2dpbiA9IGV2ZW50LnRhcmdldC52YWx1ZVwiPlxuICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgQGlucHV0PVwiZXZlbnQgPT4gZW1haWwgPSBldmVudC50YXJnZXQudmFsdWVcIj5cbiAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiBAaW5wdXQ9XCJldmVudCA9PiBwYXNzd29yZCA9IGV2ZW50LnRhcmdldC52YWx1ZVwiPlxuICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRDb25maXJtYXRpb25cIiBwbGFjZWhvbGRlcj1cItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIgQGlucHV0PVwiZXZlbnQgPT4gcGFzc3dvcmRDb25maXJtYXRpb24gPSBldmVudC50YXJnZXQudmFsdWVcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2s9XCJyZWdpc3RlckFjdGlvblwiPtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvYnV0dG9uPlxuICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrPVwibG9naW5BY3Rpb25cIj7QktGF0L7QtDwvYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gXCJ2dWV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2dpbjogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogbnVsbCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGgnLCBbXG4gICAgICAgICAgICAnUmVnaXN0ZXInXG4gICAgICAgIF0pLFxuICAgICAgICByZWdpc3RlckFjdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5SZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgbG9naW46dGhpcy5sb2dpbixcbiAgICAgICAgICAgICAgICBlbWFpbDp0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOnRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOnRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBsb2dpbkFjdGlvbigpe1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiAnbG9naW4nIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLl9hdXRoZW50aWNhdGVkKXtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogJ3BsYXknIH0pXG4gICAgICAgIH1cbiAgICB9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTkzNjMwZGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcGxpY2F0aW9uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvanMvcGFnZXMvQXV0aC9SZWdpc3Rlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNTkzNjMwZGVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1OTM2MzBkZScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzU5MzYzMGRlJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTkzNjMwZGVcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNTkzNjMwZGUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTM2MzBkZVwiIl0sIm5hbWVzIjpbIm1hcEFjdGlvbnMiLCJtYXBHZXR0ZXJzIiwiZGF0YSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybWF0aW9uIiwibWV0aG9kcyIsIl9vYmplY3RTcHJlYWQiLCJyZWdpc3RlckFjdGlvbiIsIl90aGlzIiwiUmVnaXN0ZXIiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJ0aGVuIiwicmVzdWx0IiwiJHJvdXRlciIsInB1c2giLCJsb2dpbkFjdGlvbiIsInBhdGgiLCJtb3VudGVkIiwiJHN0b3JlIiwic3RhdGUiLCJhdXRoIiwiX2F1dGhlbnRpY2F0ZWQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25JbnB1dCIsIl9jYWNoZSIsImV2ZW50IiwiX2N0eCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsIm9uQ2xpY2siLCIkb3B0aW9ucyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=