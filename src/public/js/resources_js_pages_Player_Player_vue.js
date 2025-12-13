"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Player_Player_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Player/Player.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Player/Player.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_LogoutButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/LogoutButton.vue */ "./resources/js/pages/components/LogoutButton.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_ChangeNameModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChangeNameModal.vue */ "./resources/js/pages/components/ChangeNameModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ChangeNameModal: _components_ChangeNameModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LogoutButton: _components_LogoutButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      login: null,
      password: null
    };
  },
  methods: {
    openChangeNameModal: function openChangeNameModal() {
      this.$store.state.state._change_name_modal.visible = true;
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('auth', ['User'])), {}, {
    TelegramData: function TelegramData() {
      var _window$Telegram;
      return (_window$Telegram = window.Telegram) !== null && _window$Telegram !== void 0 ? _window$Telegram : "null";
    },
    user: function user() {
      return this.User;
    }
  }),
  mounted: function mounted() {
    console.log(this.user.pic);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
      credits: 0
    };
  },
  mounted: function mounted() {},
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['UpdateName'])), {}, {
    seat: function seat() {
      this.$store.state.state._change_name_modal.visible = false;
    },
    storePublicName: function storePublicName() {
      var _this = this;
      this.UpdateName(this.user.public_name).then(function (result) {
        _this.$store.state.state._change_name_modal.visible = false;
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['User'])), {}, {
    user: function user() {
      return this.User;
    },
    visible: function visible() {
      return this.$store.state.state._change_name_modal.visible;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Player/Player.vue?vue&type=template&id=562217b6":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Player/Player.vue?vue&type=template&id=562217b6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "avatar_guard"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = {
  "class": "player_name"
};
var _hoisted_4 = {
  "class": "player_login"
};
var _hoisted_5 = {
  "class": "change_name_button"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChangeNameModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChangeNameModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChangeNameModal), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "player_avatar",
    src: $options.user.pic
  }, null, 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.last_name), 1 /* TEXT */), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "public_name_title"
  }, "Игровой никнейм", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.public_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.openChangeNameModal && $options.openChangeNameModal.apply($options, arguments);
    })
  }, "Изменить никнейм")])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "seat-window modal"
};
var _hoisted_2 = {
  "class": "window"
};
var _hoisted_3 = {
  "class": "body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Публичное имя для рейтинга", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.user.public_name = $event;
    }),
    name: "public_name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $options.user.public_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn primary seat_btn",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.storePublicName && $options.storePublicName.apply($options, arguments);
    })
  }, "Сохранить")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.selected_credits[data-v-1e3a68bc]{\n    text-align: center;\n    font-weight: bold;\n    padding: 10px;\n}\n.seat_btn[data-v-1e3a68bc]{\n    display: block;\n    margin: 10px auto 0;\n}\n.modal{\n&[data-v-1e3a68bc]{\n    background: #00000030;\n    backdrop-filter: blur(2px);\n    position: absolute;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    z-index: 999999;\n    }\n.window{\n&[data-v-1e3a68bc]{\n        overflow: hidden;\n        background: linear-gradient(180deg, #292931, #18171D);\n        border-radius: 20px;\n        padding: 20px;\n        }\ninput[data-v-1e3a68bc]{\n            margin: 20px auto 20px;\n            display: block;\n            background: #18171C;\n            border: 1px solid #4B4855;\n            border-radius: 4px;\n            color: #fff;\n            padding: 10px;\n            font-size: 20px;\n            text-align: center;\n}\nbutton[data-v-1e3a68bc]{\n            background: #EDB258;\n            border: 0;\n            padding: 5px 10px;\n            border-radius: 4px;\n            margin: 0 auto;\n            display: block;\n}\n.head[data-v-1e3a68bc]{\n            height: 20px;\n}\n.body[data-v-1e3a68bc]{\n            padding: 10px;\n}\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/components/ChangeNameModal.vue","<no source>"],"names":[],"mappings":";AAiDA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;AC1DA;ID2DI,qBAAqB;IACrB,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,MAAM;IACN,eAAA;IA9CA;AA+CA;ACrEJ;QDsEQ,gBAAgB;QAChB,qDAAqD;QACrD,mBAAmB;QACnB,aAAA;QA5CA;AA6CA;YACI,sBAAsB;YACtB,cAAc;YACd,mBAAmB;YACnB,yBAAyB;YACzB,kBAAkB;YAClB,WAAW;YACX,aAAa;YACb,eAAe;YACf,kBAAkB;AACtB;AACA;YACI,mBAAmB;YACnB,SAAS;YACT,iBAAiB;YACjB,kBAAkB;YAClB,cAAc;YACd,cAAc;AAClB;AACA;YACI,YAAY;AAChB;AACA;YACI,aAAa;AAEjB;AACJ;AACJ","sourcesContent":["<template>\n    <div class=\"seat-window modal\" v-if=\"visible\">\n        <div class=\"window\">\n            <div class=\"body\">\n                <span>Публичное имя для рейтинга</span>\n                <input v-model=\"user.public_name\" name=\"public_name\">\n                <button class=\"btn primary seat_btn\" @click=\"storePublicName\">Сохранить</button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\nimport { mapActions, mapGetters } from 'vuex';\n\n    export default {\n        data: function () {\n            return {\n                credits:0,\n            }\n        },\n        mounted() {\n\n        },\n        methods: {\n            ...mapActions('auth', ['UpdateName']),\n            seat() {\n                this.$store.state.state._change_name_modal.visible = false\n            },\n            storePublicName(){\n                this.UpdateName(this.user.public_name).then((result) => {\n                    this.$store.state.state._change_name_modal.visible = false\n                })\n            }\n        },\n        computed: {\n            ...mapGetters('auth', ['User']),\n            user() {\n                return this.User;\n            },\n            visible () {\n                return this.$store.state.state._change_name_modal.visible\n            }\n        }\n    }\n</script>\n\n<style scoped>\n.selected_credits{\n    text-align: center;\n    font-weight: bold;\n    padding: 10px;\n}\n.seat_btn{\n    display: block;\n    margin: 10px auto 0;\n}\n.modal{\n    background: #00000030;\n    backdrop-filter: blur(2px);\n    position: absolute;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    z-index: 999999;\n    .window{\n        overflow: hidden;\n        background: linear-gradient(180deg, #292931, #18171D);\n        border-radius: 20px;\n        padding: 20px;\n        input{\n            margin: 20px auto 20px;\n            display: block;\n            background: #18171C;\n            border: 1px solid #4B4855;\n            border-radius: 4px;\n            color: #fff;\n            padding: 10px;\n            font-size: 20px;\n            text-align: center;\n        }\n        button{\n            background: #EDB258;\n            border: 0;\n            padding: 5px 10px;\n            border-radius: 4px;\n            margin: 0 auto;\n            display: block;\n        }\n        .head{\n            height: 20px;\n        }\n        .body{\n            padding: 10px;\n\n        }\n    }\n}\n</style>\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/Player/Player.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Player/Player.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player_vue_vue_type_template_id_562217b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.vue?vue&type=template&id=562217b6 */ "./resources/js/pages/Player/Player.vue?vue&type=template&id=562217b6");
/* harmony import */ var _Player_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.vue?vue&type=script&lang=js */ "./resources/js/pages/Player/Player.vue?vue&type=script&lang=js");
/* harmony import */ var _application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Player_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Player_vue_vue_type_template_id_562217b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Player/Player.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Player/Player.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Player/Player.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Player_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Player_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Player.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Player/Player.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Player/Player.vue?vue&type=template&id=562217b6":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Player/Player.vue?vue&type=template&id=562217b6 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Player_vue_vue_type_template_id_562217b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Player_vue_vue_type_template_id_562217b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Player.vue?vue&type=template&id=562217b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Player/Player.vue?vue&type=template&id=562217b6");


/***/ }),

/***/ "./resources/js/pages/components/ChangeNameModal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/components/ChangeNameModal.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangeNameModal_vue_vue_type_template_id_1e3a68bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true */ "./resources/js/pages/components/ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true");
/* harmony import */ var _ChangeNameModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangeNameModal.vue?vue&type=script&lang=js */ "./resources/js/pages/components/ChangeNameModal.vue?vue&type=script&lang=js");
/* harmony import */ var _ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css */ "./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css");
/* harmony import */ var _application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ChangeNameModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ChangeNameModal_vue_vue_type_template_id_1e3a68bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1e3a68bc"],['__file',"resources/js/pages/components/ChangeNameModal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/components/ChangeNameModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/components/ChangeNameModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangeNameModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/pages/components/ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/components/ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_template_id_1e3a68bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_template_id_1e3a68bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=template&id=1e3a68bc&scoped=true");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3BhZ2VzX1BsYXllcl9QbGF5ZXJfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZMEQ7QUFDeEI7QUFDOEI7QUFFaEUsaUVBQWU7RUFDWEcsVUFBVSxFQUFFO0lBQUVELGVBQWUsRUFBZkEsdUVBQWU7SUFBRUYsWUFBWSxFQUFaQSxvRUFBWUE7RUFBQSxDQUFDO0VBQzVDSSxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBQSxFQUFjO0lBQ2QsT0FBTztNQUNIQyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxRQUFRLEVBQUU7SUFDZDtFQUNKLENBQUM7RUFDREMsT0FBTyxFQUFDO0lBQ0pDLG1CQUFtQixXQUFuQkEsbUJBQW1CQSxDQUFBLEVBQUU7TUFDakIsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0EsS0FBSyxDQUFDQyxrQkFBa0IsQ0FBQ0MsT0FBTSxHQUFJLElBQUc7SUFDNUQ7RUFDSixDQUFDO0VBQ0RDLFFBQVEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0RiLGdEQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0JjLFlBQVksV0FBWkEsWUFBWUEsQ0FBQSxFQUFHO01BQUEsSUFBQUMsZ0JBQUE7TUFDWCxRQUFBQSxnQkFBQSxHQUFPQyxNQUFNLENBQUNDLFFBQU8sY0FBQUYsZ0JBQUEsY0FBQUEsZ0JBQUEsR0FBSyxNQUFNO0lBQ3BDLENBQUM7SUFDREcsSUFBSSxXQUFKQSxJQUFJQSxDQUFBLEVBQUc7TUFDSCxPQUFPLElBQUksQ0FBQ0MsSUFBSTtJQUNwQjtFQUFBLEVBQ0g7RUFDREMsT0FBTyxXQUFQQSxPQUFPQSxDQUFBLEVBQUc7SUFDTkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSixJQUFJLENBQUNLLEdBQUc7RUFDN0I7QUFDSixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCNkM7QUFFMUMsaUVBQWU7RUFDWHBCLElBQUksRUFB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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXpIO0FBQ3RCO0FBQ0w7O0FBRTdELENBQXNGOztBQUVDO0FBQ3ZGLGlDQUFpQyxxR0FBZSxDQUFDLG9GQUFNLGFBQWEsa0dBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBY2Y7OztBQUdELGlFQUFlLFc7Ozs7Ozs7Ozs7Ozs7OztBQzFCMk0sQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9QbGF5ZXIvUGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWU/ZTQyNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlPzM2MTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlPzg2ZjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlP2M4OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvQ2hhbmdlTmFtZU1vZGFsLnZ1ZT8wNDY4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWU/OTgwMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPENoYW5nZU5hbWVNb2RhbC8+XG48ZGl2IGNsYXNzPVwiYXZhdGFyX2d1YXJkXCI+XG4gICAgPGltZyBjbGFzcz1cInBsYXllcl9hdmF0YXJcIiB2LWJpbmQ6c3JjPVwidXNlci5waWNcIj5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXJfbmFtZVwiPnt7dXNlci5maXJzdF9uYW1lfX0ge3t1c2VyLmxhc3RfbmFtZX19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInB1YmxpY19uYW1lX3RpdGxlXCI+0JjQs9GA0L7QstC+0Lkg0L3QuNC60L3QtdC50Lw8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyX2xvZ2luXCI+e3t1c2VyLnB1YmxpY19uYW1lfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhbmdlX25hbWVfYnV0dG9uXCI+PGJ1dHRvbiBAY2xpY2s9XCJvcGVuQ2hhbmdlTmFtZU1vZGFsXCI+0JjQt9C80LXQvdC40YLRjCDQvdC40LrQvdC10LnQvDwvYnV0dG9uPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9nb3V0QnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IENoYW5nZU5hbWVNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBDaGFuZ2VOYW1lTW9kYWwsIExvZ291dEJ1dHRvbn0sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9naW46IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIG9wZW5DaGFuZ2VOYW1lTW9kYWwoKXtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnN0YXRlLl9jaGFuZ2VfbmFtZV9tb2RhbC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDp7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2F1dGgnLCBbJ1VzZXInXSksXG4gICAgICAgIFRlbGVncmFtRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuVGVsZWdyYW0gPz8gXCJudWxsXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Vc2VyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIucGljKVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzZWF0LXdpbmRvdyBtb2RhbFwiIHYtaWY9XCJ2aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+0J/Rg9Cx0LvQuNGH0L3QvtC1INC40LzRjyDQtNC70Y8g0YDQtdC50YLQuNC90LPQsDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInVzZXIucHVibGljX25hbWVcIiBuYW1lPVwicHVibGljX25hbWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHByaW1hcnkgc2VhdF9idG5cIiBAY2xpY2s9XCJzdG9yZVB1YmxpY05hbWVcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjcmVkaXRzOjAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucygnYXV0aCcsIFsnVXBkYXRlTmFtZSddKSxcbiAgICAgICAgICAgIHNlYXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUuc3RhdGUuX2NoYW5nZV9uYW1lX21vZGFsLnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3JlUHVibGljTmFtZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlTmFtZSh0aGlzLnVzZXIucHVibGljX25hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS5zdGF0ZS5fY2hhbmdlX25hbWVfbW9kYWwudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoJ2F1dGgnLCBbJ1VzZXInXSksXG4gICAgICAgICAgICB1c2VyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlVzZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZSAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnN0YXRlLl9jaGFuZ2VfbmFtZV9tb2RhbC52aXNpYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zZWxlY3RlZF9jcmVkaXRze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlYXRfYnRue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XG59XG4ubW9kYWx7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDMwO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgLndpbmRvd3tcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI5MjkzMSwgIzE4MTcxRCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4MTcxQztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QjQ4NTU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VEQjI1ODtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zZWxlY3RlZF9jcmVkaXRzW2RhdGEtdi0xZTNhNjhiY117XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zZWF0X2J0bltkYXRhLXYtMWUzYTY4YmNde1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG59XFxuLm1vZGFse1xcbiZbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDMwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5OTk7XFxuICAgIH1cXG4ud2luZG93e1xcbiZbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjkyOTMxLCAjMTgxNzFEKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgfVxcbmlucHV0W2RhdGEtdi0xZTNhNjhiY117XFxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTgxNzFDO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QjQ4NTU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYnV0dG9uW2RhdGEtdi0xZTNhNjhiY117XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VEQjI1ODtcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaGVhZFtkYXRhLXYtMWUzYTY4YmNde1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG59XFxuLmJvZHlbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG59XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWVcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpREE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtBQzFEQTtJRDJESSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLE1BQU07SUFDTixlQUFBO0lBOUNBO0FBK0NBO0FDckVKO1FEc0VRLGdCQUFnQjtRQUNoQixxREFBcUQ7UUFDckQsbUJBQW1CO1FBQ25CLGFBQUE7UUE1Q0E7QUE2Q0E7WUFDSSxzQkFBc0I7WUFDdEIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTtZQUNmLGtCQUFrQjtBQUN0QjtBQUNBO1lBQ0ksbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxjQUFjO0FBQ2xCO0FBQ0E7WUFDSSxZQUFZO0FBQ2hCO0FBQ0E7WUFDSSxhQUFhO0FBRWpCO0FBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNlYXQtd2luZG93IG1vZGFsXFxcIiB2LWlmPVxcXCJ2aXNpYmxlXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndpbmRvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPtCf0YPQsdC70LjRh9C90L7QtSDQuNC80Y8g0LTQu9GPINGA0LXQudGC0LjQvdCz0LA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJ1c2VyLnB1YmxpY19uYW1lXFxcIiBuYW1lPVxcXCJwdWJsaWNfbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBwcmltYXJ5IHNlYXRfYnRuXFxcIiBAY2xpY2s9XFxcInN0b3JlUHVibGljTmFtZVxcXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNyZWRpdHM6MCxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG5cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucygnYXV0aCcsIFsnVXBkYXRlTmFtZSddKSxcXG4gICAgICAgICAgICBzZWF0KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS5zdGF0ZS5fY2hhbmdlX25hbWVfbW9kYWwudmlzaWJsZSA9IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzdG9yZVB1YmxpY05hbWUoKXtcXG4gICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVOYW1lKHRoaXMudXNlci5wdWJsaWNfbmFtZSkudGhlbigocmVzdWx0KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS5zdGF0ZS5fY2hhbmdlX25hbWVfbW9kYWwudmlzaWJsZSA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycygnYXV0aCcsIFsnVXNlciddKSxcXG4gICAgICAgICAgICB1c2VyKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Vc2VyO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmlzaWJsZSAoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5zdGF0ZS5fY2hhbmdlX25hbWVfbW9kYWwudmlzaWJsZVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLnNlbGVjdGVkX2NyZWRpdHN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zZWF0X2J0bntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XFxufVxcbi5tb2RhbHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDMwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5OTk7XFxuICAgIC53aW5kb3d7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI5MjkzMSwgIzE4MTcxRCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4MTcxQztcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEI0ODU1O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VEQjI1ODtcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmhlYWR7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvZHl7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG48L3N0eWxlPlxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZTNhNjhiYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1BsYXllci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTYyMjE3YjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwbGljYXRpb24vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInJlc291cmNlcy9qcy9wYWdlcy9QbGF5ZXIvUGxheWVyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1NjIyMTdiNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzU2MjIxN2I2JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNTYyMjE3YjYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BsYXllci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTYyMjE3YjZcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNTYyMjE3YjYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlM2E2OGJjJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWUzYTY4YmMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwbGljYXRpb24vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0xZTNhNjhiY1wiXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjFlM2E2OGJjXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWUzYTY4YmMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCcxZTNhNjhiYycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZTNhNjhiYyZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcxZTNhNjhiYycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJMb2dvdXRCdXR0b24iLCJtYXBHZXR0ZXJzIiwiQ2hhbmdlTmFtZU1vZGFsIiwiY29tcG9uZW50cyIsImRhdGEiLCJsb2dpbiIsInBhc3N3b3JkIiwibWV0aG9kcyIsIm9wZW5DaGFuZ2VOYW1lTW9kYWwiLCIkc3RvcmUiLCJzdGF0ZSIsIl9jaGFuZ2VfbmFtZV9tb2RhbCIsInZpc2libGUiLCJjb21wdXRlZCIsIl9vYmplY3RTcHJlYWQiLCJUZWxlZ3JhbURhdGEiLCJfd2luZG93JFRlbGVncmFtIiwid2luZG93IiwiVGVsZWdyYW0iLCJ1c2VyIiwiVXNlciIsIm1vdW50ZWQiLCJjb25zb2xlIiwibG9nIiwicGljIiwibWFwQWN0aW9ucyIsImNyZWRpdHMiLCJzZWF0Iiwic3RvcmVQdWJsaWNOYW1lIiwiX3RoaXMiLCJVcGRhdGVOYW1lIiwicHVibGljX25hbWUiLCJ0aGVuIiwicmVzdWx0IiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9DaGFuZ2VOYW1lTW9kYWwiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMSIsInNyYyIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfMyIsIl90b0Rpc3BsYXlTdHJpbmciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJvbkNsaWNrIiwiX2NhY2hlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMiIsIiRldmVudCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9