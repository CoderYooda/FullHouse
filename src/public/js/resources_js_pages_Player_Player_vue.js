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
/* harmony import */ var _components_Player_Tournament_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player/Tournament.vue */ "./resources/js/pages/components/Player/Tournament.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Tournament: _components_Player_Tournament_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
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
      this.$store.state.ui._modal_change_player_name = true;
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
      this.$store.state.ui._modal_change_player_name = false;
    },
    storePublicName: function storePublicName() {
      var _this = this;
      this.UpdateName(this.user.public_name).then(function (result) {
        _this.$store.state.ui._modal_change_player_name = false;
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['User'])), {}, {
    user: function user() {
      return this.User;
    },
    visible: function visible() {
      return this.$store.state.ui._modal_change_player_name;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/Player/Tournament.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/Player/Tournament.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tournament: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.getTournament().then(function (result) {
      if (result) {
        _this.$store.state.loaded = true;
        _this.$router.push({
          name: 'player'
        });
      }
    });
  },
  methods: {
    getTournament: function getTournament() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios({
                method: 'POST',
                url: '/tournament/get'
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
              });
            case 1:
              _yield$axios = _context.v;
              data = _yield$axios.data;
              _this2.tournament = data.data;
              return _context.a(2, true);
            case 2:
              _context.p = 2;
              _t = _context.v;
              return _context.a(2, false);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    joinTournament: function joinTournament() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios2, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios({
                method: 'POST',
                url: '/tournament/join'
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
              });
            case 1:
              _yield$axios2 = _context2.v;
              data = _yield$axios2.data;
              _this3.tournament.participant = true;
              return _context2.a(2, true);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              return _context2.a(2, false);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    leaveTournament: function leaveTournament() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios3, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios({
                method: 'POST',
                url: '/tournament/leave'
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
              });
            case 1:
              _yield$axios3 = _context3.v;
              data = _yield$axios3.data;
              _this4.tournament.participant = false;
              return _context3.a(2, true);
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              return _context3.a(2, false);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    }
  },
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
  "class": "boxed"
};
var _hoisted_2 = {
  "class": "avatar_guard"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "player_name"
};
var _hoisted_5 = {
  "class": "player_login"
};
var _hoisted_6 = {
  "class": "change_name_button"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChangeNameModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChangeNameModal");
  var _component_Tournament = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tournament");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChangeNameModal), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "player_avatar",
    src: $options.user.pic
  }, null, 8 /* PROPS */, _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.last_name), 1 /* TEXT */), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "public_name_title"
  }, "Игровой никнейм", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.user.public_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.openChangeNameModal && $options.openChangeNameModal.apply($options, arguments);
    })
  }, "Изменить никнейм")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tournament)])], 64 /* STABLE_FRAGMENT */);
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
  return $options.visible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    style: {
      "text-align": "center",
      "width": "100%",
      "display": "block"
    }
  }, "Публичное имя для рейтинга", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/Player/Tournament.vue?vue&type=template&id=76825807":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/Player/Tournament.vue?vue&type=template&id=76825807 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "tournament"
};
var _hoisted_2 = {
  "class": "background"
};
var _hoisted_3 = {
  "class": "title"
};
var _hoisted_4 = {
  "class": "descr"
};
var _hoisted_5 = {
  key: 1,
  "class": "butt",
  style: {
    "text-align": "center"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.tournament ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.tournament.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.tournament.description), 1 /* TEXT */), !_ctx.tournament.participant ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.joinTournament && $options.joinTournament.apply($options, arguments);
    }),
    "class": "butt"
  }, "Записаться")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.tournament.participant ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, "Вы записаны, ждем вас на игру!")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.tournament.participant ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.leaveTournament && $options.leaveTournament.apply($options, arguments);
    }),
    "class": "butt"
  }, "Отменить запись")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.selected_credits[data-v-1e3a68bc]{\n    text-align: center;\n    font-weight: bold;\n    padding: 10px;\n}\n.seat_btn[data-v-1e3a68bc]{\n    display: block;\n    margin: 10px auto 0;\n}\n.modal{\n&[data-v-1e3a68bc]{\n    background: #00000030;\n    backdrop-filter: blur(2px);\n    position: absolute;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    z-index: 999999;\n    }\n.window{\n&[data-v-1e3a68bc]{\n        overflow: hidden;\n        background: linear-gradient(180deg, #292931, #18171D);\n        border-radius: 20px;\n        padding: 20px;\n        }\ninput[data-v-1e3a68bc]{\n            margin: 20px auto 20px;\n            display: block;\n            background: #18171C;\n            border: 1px solid #4B4855;\n            border-radius: 4px;\n            color: #fff;\n            padding: 10px;\n            font-size: 20px;\n            text-align: center;\n}\nbutton[data-v-1e3a68bc]{\n            background: #EDB258;\n            border: 0;\n            padding: 5px 10px;\n            border-radius: 4px;\n            margin: 0 auto;\n            display: block;\n}\n.head[data-v-1e3a68bc]{\n            height: 20px;\n}\n.body[data-v-1e3a68bc]{\n            padding: 10px;\n}\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/components/ChangeNameModal.vue","<no source>"],"names":[],"mappings":";AAiDA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;AC1DA;ID2DI,qBAAqB;IACrB,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,MAAM;IACN,eAAA;IA9CA;AA+CA;ACrEJ;QDsEQ,gBAAgB;QAChB,qDAAqD;QACrD,mBAAmB;QACnB,aAAA;QA5CA;AA6CA;YACI,sBAAsB;YACtB,cAAc;YACd,mBAAmB;YACnB,yBAAyB;YACzB,kBAAkB;YAClB,WAAW;YACX,aAAa;YACb,eAAe;YACf,kBAAkB;AACtB;AACA;YACI,mBAAmB;YACnB,SAAS;YACT,iBAAiB;YACjB,kBAAkB;YAClB,cAAc;YACd,cAAc;AAClB;AACA;YACI,YAAY;AAChB;AACA;YACI,aAAa;AAEjB;AACJ;AACJ","sourcesContent":["<template>\n    <div class=\"seat-window modal\" v-if=\"visible\">\n        <div class=\"window\">\n            <div class=\"body\">\n                <span style=\"text-align: center;width: 100%; display: block;\">Публичное имя для рейтинга</span>\n                <input v-model=\"user.public_name\" name=\"public_name\">\n                <button class=\"btn primary seat_btn\" @click=\"storePublicName\">Сохранить</button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\nimport { mapActions, mapGetters } from 'vuex';\n\n    export default {\n        data: function () {\n            return {\n                credits:0,\n            }\n        },\n        mounted() {\n\n        },\n        methods: {\n            ...mapActions('auth', ['UpdateName']),\n            seat() {\n                this.$store.state.ui._modal_change_player_name = false\n            },\n            storePublicName(){\n                this.UpdateName(this.user.public_name).then((result) => {\n                    this.$store.state.ui._modal_change_player_name = false\n                })\n            }\n        },\n        computed: {\n            ...mapGetters('auth', ['User']),\n            user() {\n                return this.User;\n            },\n            visible () {\n                return this.$store.state.ui._modal_change_player_name\n            }\n        }\n    }\n</script>\n\n<style scoped>\n.selected_credits{\n    text-align: center;\n    font-weight: bold;\n    padding: 10px;\n}\n.seat_btn{\n    display: block;\n    margin: 10px auto 0;\n}\n.modal{\n    background: #00000030;\n    backdrop-filter: blur(2px);\n    position: absolute;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    z-index: 999999;\n    .window{\n        overflow: hidden;\n        background: linear-gradient(180deg, #292931, #18171D);\n        border-radius: 20px;\n        padding: 20px;\n        input{\n            margin: 20px auto 20px;\n            display: block;\n            background: #18171C;\n            border: 1px solid #4B4855;\n            border-radius: 4px;\n            color: #fff;\n            padding: 10px;\n            font-size: 20px;\n            text-align: center;\n        }\n        button{\n            background: #EDB258;\n            border: 0;\n            padding: 5px 10px;\n            border-radius: 4px;\n            margin: 0 auto;\n            display: block;\n        }\n        .head{\n            height: 20px;\n        }\n        .body{\n            padding: 10px;\n\n        }\n    }\n}\n</style>\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangeNameModal_vue_vue_type_style_index_0_id_1e3a68bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/ChangeNameModal.vue?vue&type=style&index=0&id=1e3a68bc&scoped=true&lang=css");


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


/***/ }),

/***/ "./resources/js/pages/components/Player/Tournament.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/components/Player/Tournament.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tournament_vue_vue_type_template_id_76825807__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tournament.vue?vue&type=template&id=76825807 */ "./resources/js/pages/components/Player/Tournament.vue?vue&type=template&id=76825807");
/* harmony import */ var _Tournament_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tournament.vue?vue&type=script&lang=js */ "./resources/js/pages/components/Player/Tournament.vue?vue&type=script&lang=js");
/* harmony import */ var _application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_application_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tournament_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tournament_vue_vue_type_template_id_76825807__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/components/Player/Tournament.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/components/Player/Tournament.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/components/Player/Tournament.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tournament_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tournament_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tournament.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/Player/Tournament.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/components/Player/Tournament.vue?vue&type=template&id=76825807":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/components/Player/Tournament.vue?vue&type=template&id=76825807 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tournament_vue_vue_type_template_id_76825807__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tournament_vue_vue_type_template_id_76825807__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tournament.vue?vue&type=template&id=76825807 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/components/Player/Tournament.vue?vue&type=template&id=76825807");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3BhZ2VzX1BsYXllcl9QbGF5ZXJfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUIwRDtBQUN4QjtBQUM4QjtBQUNIO0FBRTdELGlFQUFlO0VBQ1hJLFVBQVUsRUFBRTtJQUFFRCxVQUFVLEVBQVZBLHlFQUFVO0lBQUVELGVBQWUsRUFBZkEsdUVBQWU7SUFBRUYsWUFBWSxFQUFaQSxvRUFBWUE7RUFBQSxDQUFDO0VBQ3hESyxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBQSxFQUFjO0lBQ2QsT0FBTztNQUNIQyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxRQUFRLEVBQUU7SUFDZDtFQUNKLENBQUM7RUFDREMsT0FBTyxFQUFDO0lBQ0pDLG1CQUFtQixXQUFuQkEsbUJBQW1CQSxDQUFBLEVBQUU7TUFDakIsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsRUFBRSxDQUFDQyx5QkFBd0IsR0FBSSxJQUFHO0lBQ3hEO0VBQ0osQ0FBQztFQUNEQyxRQUFRLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNEZCxnREFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CZSxZQUFZLFdBQVpBLFlBQVlBLENBQUEsRUFBRztNQUFBLElBQUFDLGdCQUFBO01BQ1gsUUFBQUEsZ0JBQUEsR0FBT0MsTUFBTSxDQUFDQyxRQUFPLGNBQUFGLGdCQUFBLGNBQUFBLGdCQUFBLEdBQUssTUFBTTtJQUNwQyxDQUFDO0lBQ0RHLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO01BQ0gsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEI7RUFBQSxFQUNIO0VBQ0RDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxHQUFHO0VBQzdCO0FBQ0osQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzZDO0FBRTFDLGlF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RixpQ0FBaUMscUdBQWUsQ0FBQywyRUFBTSxhQUFhLDZFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQWNmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmtNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F6SDtBQUN0QjtBQUNMOztBQUU3RCxDQUFzRjs7QUFFQztBQUN2RixpQ0FBaUMscUdBQWUsQ0FBQyxvRkFBTSxhQUFhLGtHQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQWNmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5KO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBdUY7QUFDdkYsaUNBQWlDLHFHQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsRUFjZjs7O0FBR0QsaUVBQWUsVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI0TSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvUGxheWVyL1RvdXJuYW1lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWU/M2JhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlPzZjNjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlPzg2ZjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlP2M4OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvQ2hhbmdlTmFtZU1vZGFsLnZ1ZT8wNDY4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWU/OTgwMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9QbGF5ZXIvVG91cm5hbWVudC52dWU/MzFlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9QbGF5ZXIvVG91cm5hbWVudC52dWU/NTM1NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPENoYW5nZU5hbWVNb2RhbC8+XG4gICAgPGRpdiBjbGFzcz1cImJveGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJfZ3VhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbGF5ZXJfYXZhdGFyXCIgdi1iaW5kOnNyYz1cInVzZXIucGljXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyX25hbWVcIj57e3VzZXIuZmlyc3RfbmFtZX19IHt7dXNlci5sYXN0X25hbWV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVibGljX25hbWVfdGl0bGVcIj7QmNCz0YDQvtCy0L7QuSDQvdC40LrQvdC10LnQvDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyX2xvZ2luXCI+e3t1c2VyLnB1YmxpY19uYW1lfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYW5nZV9uYW1lX2J1dHRvblwiPjxidXR0b24gQGNsaWNrPVwib3BlbkNoYW5nZU5hbWVNb2RhbFwiPtCY0LfQvNC10L3QuNGC0Ywg0L3QuNC60L3QtdC50Lw8L2J1dHRvbj48L2Rpdj5cblxuICAgICAgICA8VG91cm5hbWVudC8+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ291dEJ1dHRvbi52dWVcIjtcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBDaGFuZ2VOYW1lTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlJztcbmltcG9ydCBUb3VybmFtZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1RvdXJuYW1lbnQudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgVG91cm5hbWVudCwgQ2hhbmdlTmFtZU1vZGFsLCBMb2dvdXRCdXR0b259LFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ2luOiBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBvcGVuQ2hhbmdlTmFtZU1vZGFsKCl7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51aS5fbW9kYWxfY2hhbmdlX3BsYXllcl9uYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDp7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2F1dGgnLCBbJ1VzZXInXSksXG4gICAgICAgIFRlbGVncmFtRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuVGVsZWdyYW0gPz8gXCJudWxsXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Vc2VyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIucGljKVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzZWF0LXdpbmRvdyBtb2RhbFwiIHYtaWY9XCJ2aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7IGRpc3BsYXk6IGJsb2NrO1wiPtCf0YPQsdC70LjRh9C90L7QtSDQuNC80Y8g0LTQu9GPINGA0LXQudGC0LjQvdCz0LA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJ1c2VyLnB1YmxpY19uYW1lXCIgbmFtZT1cInB1YmxpY19uYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwcmltYXJ5IHNlYXRfYnRuXCIgQGNsaWNrPVwic3RvcmVQdWJsaWNOYW1lXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3JlZGl0czowLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGgnLCBbJ1VwZGF0ZU5hbWUnXSksXG4gICAgICAgICAgICBzZWF0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnVpLl9tb2RhbF9jaGFuZ2VfcGxheWVyX25hbWUgPSBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3JlUHVibGljTmFtZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlTmFtZSh0aGlzLnVzZXIucHVibGljX25hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51aS5fbW9kYWxfY2hhbmdlX3BsYXllcl9uYW1lID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycygnYXV0aCcsIFsnVXNlciddKSxcbiAgICAgICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVXNlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudWkuX21vZGFsX2NoYW5nZV9wbGF5ZXJfbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uc2VsZWN0ZWRfY3JlZGl0c3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5zZWF0X2J0bntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0byAwO1xufVxuLm1vZGFse1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAzMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIC53aW5kb3d7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyOTI5MzEsICMxODE3MUQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODE3MUM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEI0ODU1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFREIyNTg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWR7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cInRvdXJuYW1lbnRcIiBjbGFzcz1cInRvdXJuYW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7IHRvdXJuYW1lbnQudGl0bGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjclwiPlxuICAgICAgICAgICAgICAgIHt7IHRvdXJuYW1lbnQuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiam9pblRvdXJuYW1lbnRcIiB2LWlmPVwiIXRvdXJuYW1lbnQucGFydGljaXBhbnRcIiBjbGFzcz1cImJ1dHRcIj7Ql9Cw0L/QuNGB0LDRgtGM0YHRjzwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwidG91cm5hbWVudC5wYXJ0aWNpcGFudFwiIGNsYXNzPVwiYnV0dFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+0JLRiyDQt9Cw0L/QuNGB0LDQvdGLLCDQttC00LXQvCDQstCw0YEg0L3QsCDQuNCz0YDRgyE8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibGVhdmVUb3VybmFtZW50XCIgdi1pZj1cInRvdXJuYW1lbnQucGFydGljaXBhbnRcIiBjbGFzcz1cImJ1dHRcIj7QntGC0LzQtdC90LjRgtGMINC30LDQv9C40YHRjDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50Om51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAncGxheWVyJyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAgICAgYXN5bmMgZ2V0VG91cm5hbWVudCAoKXtcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvdG91cm5hbWVudC9nZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgQXV0aG9yaXphdGlvbjonQmVhcmVyICcrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ190b2tlbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudCA9IGRhdGEuZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhc3luYyBqb2luVG91cm5hbWVudCgpe1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy90b3VybmFtZW50L2pvaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgQXV0aG9yaXphdGlvbjonQmVhcmVyICcrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ190b2tlbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC5wYXJ0aWNpcGFudCA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXN5bmMgbGVhdmVUb3VybmFtZW50KCl7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3RvdXJuYW1lbnQvbGVhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgQXV0aG9yaXphdGlvbjonQmVhcmVyICcrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ190b2tlbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC5wYXJ0aWNpcGFudCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycygnYXV0aCcsIFsnVXNlciddKSxcbiAgICAgICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVXNlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuc3RhdGUuX2NoYW5nZV9uYW1lX21vZGFsLnZpc2libGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2VsZWN0ZWRfY3JlZGl0c1tkYXRhLXYtMWUzYTY4YmNde1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uc2VhdF9idG5bZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XFxufVxcbi5tb2RhbHtcXG4mW2RhdGEtdi0xZTNhNjhiY117XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAzMDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogOTk5OTk5O1xcbiAgICB9XFxuLndpbmRvd3tcXG4mW2RhdGEtdi0xZTNhNjhiY117XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI5MjkzMSwgIzE4MTcxRCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIH1cXG5pbnB1dFtkYXRhLXYtMWUzYTY4YmNde1xcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4MTcxQztcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEI0ODU1O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmJ1dHRvbltkYXRhLXYtMWUzYTY4YmNde1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFREIyNTg7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmhlYWRbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5ib2R5W2RhdGEtdi0xZTNhNjhiY117XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG59XFxufVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaURBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7QUMxREE7SUQyREkscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFNO0lBQ04sZUFBQTtJQTlDQTtBQStDQTtBQ3JFSjtRRHNFUSxnQkFBZ0I7UUFDaEIscURBQXFEO1FBQ3JELG1CQUFtQjtRQUNuQixhQUFBO1FBNUNBO0FBNkNBO1lBQ0ksc0JBQXNCO1lBQ3RCLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7WUFDZixrQkFBa0I7QUFDdEI7QUFDQTtZQUNJLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsY0FBYztBQUNsQjtBQUNBO1lBQ0ksWUFBWTtBQUNoQjtBQUNBO1lBQ0ksYUFBYTtBQUVqQjtBQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWF0LXdpbmRvdyBtb2RhbFxcXCIgdi1pZj1cXFwidmlzaWJsZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aW5kb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyO3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBibG9jaztcXFwiPtCf0YPQsdC70LjRh9C90L7QtSDQuNC80Y8g0LTQu9GPINGA0LXQudGC0LjQvdCz0LA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJ1c2VyLnB1YmxpY19uYW1lXFxcIiBuYW1lPVxcXCJwdWJsaWNfbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBwcmltYXJ5IHNlYXRfYnRuXFxcIiBAY2xpY2s9XFxcInN0b3JlUHVibGljTmFtZVxcXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNyZWRpdHM6MCxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG5cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucygnYXV0aCcsIFsnVXBkYXRlTmFtZSddKSxcXG4gICAgICAgICAgICBzZWF0KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51aS5fbW9kYWxfY2hhbmdlX3BsYXllcl9uYW1lID0gZmFsc2VcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHN0b3JlUHVibGljTmFtZSgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZU5hbWUodGhpcy51c2VyLnB1YmxpY19uYW1lKS50aGVuKChyZXN1bHQpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnVpLl9tb2RhbF9jaGFuZ2VfcGxheWVyX25hbWUgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoJ2F1dGgnLCBbJ1VzZXInXSksXFxuICAgICAgICAgICAgdXNlcigpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVXNlcjtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZpc2libGUgKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudWkuX21vZGFsX2NoYW5nZV9wbGF5ZXJfbmFtZVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLnNlbGVjdGVkX2NyZWRpdHN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zZWF0X2J0bntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XFxufVxcbi5tb2RhbHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDMwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5OTk7XFxuICAgIC53aW5kb3d7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI5MjkzMSwgIzE4MTcxRCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE4MTcxQztcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEI0ODU1O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VEQjI1ODtcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmhlYWR7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvZHl7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG48L3N0eWxlPlxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlM2E2OGJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjIyMTdiNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHBsaWNhdGlvbi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjU2MjIxN2I2XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTYyMjE3YjYnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc1NjIyMTdiNicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjIyMTdiNlwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc1NjIyMTdiNicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWUzYTY4YmMmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZTNhNjhiYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHBsaWNhdGlvbi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTFlM2E2OGJjXCJdLFsnX19maWxlJyxcInJlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMWUzYTY4YmNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxZTNhNjhiYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzFlM2E2OGJjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlM2E2OGJjJnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzFlM2E2OGJjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVG91cm5hbWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY4MjU4MDdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ub3VybmFtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub3VybmFtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHBsaWNhdGlvbi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvUGxheWVyL1RvdXJuYW1lbnQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjc2ODI1ODA3XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNzY4MjU4MDcnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc3NjgyNTgwNycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVG91cm5hbWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY4MjU4MDdcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNzY4MjU4MDcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RvdXJuYW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vVG91cm5hbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJMb2dvdXRCdXR0b24iLCJtYXBHZXR0ZXJzIiwiQ2hhbmdlTmFtZU1vZGFsIiwiVG91cm5hbWVudCIsImNvbXBvbmVudHMiLCJkYXRhIiwibG9naW4iLCJwYXNzd29yZCIsIm1ldGhvZHMiLCJvcGVuQ2hhbmdlTmFtZU1vZGFsIiwiJHN0b3JlIiwic3RhdGUiLCJ1aSIsIl9tb2RhbF9jaGFuZ2VfcGxheWVyX25hbWUiLCJjb21wdXRlZCIsIl9vYmplY3RTcHJlYWQiLCJUZWxlZ3JhbURhdGEiLCJfd2luZG93JFRlbGVncmFtIiwid2luZG93IiwiVGVsZWdyYW0iLCJ1c2VyIiwiVXNlciIsIm1vdW50ZWQiLCJjb25zb2xlIiwibG9nIiwicGljIiwibWFwQWN0aW9ucyIsImNyZWRpdHMiLCJzZWF0Iiwic3RvcmVQdWJsaWNOYW1lIiwiX3RoaXMiLCJVcGRhdGVOYW1lIiwicHVibGljX25hbWUiLCJ0aGVuIiwicmVzdWx0IiwidmlzaWJsZSIsInRvdXJuYW1lbnQiLCJnZXRUb3VybmFtZW50IiwibG9hZGVkIiwiJHJvdXRlciIsInB1c2giLCJuYW1lIiwiX3RoaXMyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3IiLCJtIiwiX2NhbGxlZSIsIl95aWVsZCRheGlvcyIsIl90IiwidyIsIl9jb250ZXh0IiwicCIsIm4iLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInYiLCJhIiwiam9pblRvdXJuYW1lbnQiLCJfdGhpczMiLCJfY2FsbGVlMiIsIl95aWVsZCRheGlvczIiLCJfdDIiLCJfY29udGV4dDIiLCJwYXJ0aWNpcGFudCIsImxlYXZlVG91cm5hbWVudCIsIl90aGlzNCIsIl9jYWxsZWUzIiwiX3lpZWxkJGF4aW9zMyIsIl90MyIsIl9jb250ZXh0MyIsIl9jaGFuZ2VfbmFtZV9tb2RhbCIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfQ2hhbmdlTmFtZU1vZGFsIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwic3JjIiwiJG9wdGlvbnMiLCJfaG9pc3RlZF80IiwiX3RvRGlzcGxheVN0cmluZyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJfaG9pc3RlZF81IiwiX2hvaXN0ZWRfNiIsIm9uQ2xpY2siLCJfY2FjaGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jb21wb25lbnRfVG91cm5hbWVudCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8zIiwic3R5bGUiLCIkZXZlbnQiLCJfY3R4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=