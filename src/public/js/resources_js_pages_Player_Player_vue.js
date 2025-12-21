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
      tournaments: []
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
              _this2.tournaments = data.data;
              return _context.a(2, true);
            case 2:
              _context.p = 2;
              _t = _context.v;
              return _context.a(2, false);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    joinTournament: function joinTournament(id) {
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
                url: '/tournament/' + id + '/join'
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
              });
            case 1:
              _yield$axios2 = _context2.v;
              data = _yield$axios2.data;
              _this3.tournaments.find(function (tournament) {
                return tournament.id === id;
              }).participant = true;
              return _context2.a(2, true);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              return _context2.a(2, false);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    leaveTournament: function leaveTournament(id) {
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
                url: '/tournament/' + id + '/leave'
                // headers:{
                //     Authorization:'Bearer '+localStorage.getItem('_token'),
                // },
              });
            case 1:
              _yield$axios3 = _context3.v;
              data = _yield$axios3.data;
              _this4.tournaments.find(function (tournament) {
                return tournament.id === id;
              }).participant = false;
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
  key: 0
};
var _hoisted_2 = {
  "class": "tournament"
};
var _hoisted_3 = {
  "class": "background"
};
var _hoisted_4 = {
  "class": "title"
};
var _hoisted_5 = {
  "class": "descr"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  key: 1,
  "class": "butt",
  style: {
    "text-align": "center"
  }
};
var _hoisted_8 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.tournaments ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.tournaments, function (tournament) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Стек: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.stack) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.small_blind) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.big_blind) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.ante) + ")", 1 /* TEXT */), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Buy-in: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.buy_in) + "₽", 1 /* TEXT */), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Re-Entry: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.re_entry) + "₽", 1 /* TEXT */), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add-on: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.add_on) + "₽", 1 /* TEXT */), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Структура турнира:", -1 /* CACHED */)), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ➡️Уровни: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.levels_start) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.levels_end) + " мин", 1 /* TEXT */), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ➡️Поздняя регистрация: до " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tournament.late_registration) + " ", 1 /* TEXT */), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* CACHED */))]), !tournament.participant ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      onClick: function onClick($event) {
        return $options.joinTournament(tournament.id);
      },
      "class": "butt"
    }, "Записаться", 8 /* PROPS */, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), tournament.participant ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, "Вы записаны, ждем вас на игру!")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), tournament.participant ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      onClick: function onClick($event) {
        return $options.leaveTournament(tournament.id);
      },
      "class": "butt"
    }, "Отменить запись", 8 /* PROPS */, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3BhZ2VzX1BsYXllcl9QbGF5ZXJfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUIwRDtBQUN4QjtBQUM4QjtBQUNIO0FBRTdELGlFQUFlO0VBQ1hJLFVBQVUsRUFBRTtJQUFFRCxVQUFVLEVBQVZBLHlFQUFVO0lBQUVELGVBQWUsRUFBZkEsdUVBQWU7SUFBRUYsWUFBWSxFQUFaQSxvRUFBWUE7RUFBQSxDQUFDO0VBQ3hESyxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBQSxFQUFjO0lBQ2QsT0FBTztNQUNIQyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxRQUFRLEVBQUU7SUFDZDtFQUNKLENBQUM7RUFDREMsT0FBTyxFQUFDO0lBQ0pDLG1CQUFtQixXQUFuQkEsbUJBQW1CQSxDQUFBLEVBQUU7TUFDakIsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsRUFBRSxDQUFDQyx5QkFBd0IsR0FBSSxJQUFHO0lBQ3hEO0VBQ0osQ0FBQztFQUNEQyxRQUFRLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNEZCxnREFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CZSxZQUFZLFdBQVpBLFlBQVlBLENBQUEsRUFBRztNQUFBLElBQUFDLGdCQUFBO01BQ1gsUUFBQUEsZ0JBQUEsR0FBT0MsTUFBTSxDQUFDQyxRQUFPLGNBQUFGLGdCQUFBLGNBQUFBLGdCQUFBLEdBQUssTUFBTTtJQUNwQyxDQUFDO0lBQ0RHLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO01BQ0gsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEI7RUFBQSxFQUNIO0VBQ0RDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxHQUFHO0VBQzdCO0FBQ0osQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzZDO0FBRTFDLGlFQUFlO0VBQ1hwQixJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBQSxFQUFjO0lBQ2QsT0FBTztNQUNIc0IsT0FBTyxFQUFDO0lBQ1o7RUFDSixDQUFDO0VBQ0RMLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHLENBRVYsQ0FBQztFQUNEZCxPQUFPLEVBQUFPLGFBQUEsQ0FBQUEsYUFBQSxLQUNBVyxnREFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDRSxJQUFJLFdBQUpBLElBQUlBLENBQUEsRUFBRztNQUNILElBQUksQ0FBQ2xCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLENBQUNDLHlCQUF3QixHQUFJLEtBQUk7SUFDekQsQ0FBQztJQUNEZ0IsZUFBZSxXQUFmQSxlQUFlQSxDQUFBLEVBQUU7TUFBQSxJQUFBQyxLQUFBO01BQ2IsSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDWCxJQUFJLENBQUNZLFdBQVcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsTUFBTSxFQUFLO1FBQ3BESixLQUFJLENBQUNwQixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsRUFBRSxDQUFDQyx5QkFBd0IsR0FBSSxLQUFJO01BQ3pELENBQUM7SUFDTDtFQUFBLEVBQ0g7RUFDREMsUUFBUSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDRGQsZ0RBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQm1CLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO01BQ0gsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEIsQ0FBQztJQUNEYyxPQUFNLFdBQU5BLE9BQU1BLENBQUEsRUFBSztNQUNQLE9BQU8sSUFBSSxDQUFDekIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsQ0FBQ0MseUJBQXdCO0lBQ3hEO0VBQUE7QUFFUixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlDO0FBRTFDLGlFQUFlO0VBQ1hSLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQWM7SUFDZCxPQUFPO01BQ0grQixXQUFXLEVBQUM7SUFDaEI7RUFDSixDQUFDO0VBQ0RkLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQVEsS0FBQTtJQUNOLElBQUksQ0FBQ08sYUFBYSxDQUFDLENBQUMsQ0FBQ0osSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUNsQyxJQUFJQSxNQUFNLEVBQUU7UUFDUkosS0FBSSxDQUFDcEIsTUFBTSxDQUFDQyxLQUFLLENBQUMyQixNQUFLLEdBQUksSUFBRztRQUM5QlIsS0FBSSxDQUFDUyxPQUFPLENBQUNDLElBQUksQ0FBQztVQUFFQyxJQUFJLEVBQUU7UUFBUyxDQUFDO01BQ3hDO0lBQ0osQ0FBQztFQUNMLENBQUM7RUFDRGpDLE9BQU8sRUFBRTtJQUVDNkIsYUFBWSxXQUFaQSxhQUFZQSxDQUFBLEVBQUk7TUFBQSxJQUFBSyxNQUFBO01BQUEsT0FBQUMsaUJBQUEsY0FBQUMsWUFBQSxHQUFBQyxDQUFBLFVBQUFDLFFBQUE7UUFBQSxJQUFBQyxZQUFBLEVBQUExQyxJQUFBLEVBQUEyQyxFQUFBO1FBQUEsT0FBQUosWUFBQSxHQUFBSyxDQUFBLFdBQUFDLFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxDQUFBLEdBQUFELFFBQUEsQ0FBQUUsQ0FBQTtZQUFBO2NBQUFGLFFBQUEsQ0FBQUMsQ0FBQTtjQUFBRCxRQUFBLENBQUFFLENBQUE7Y0FBQSxPQUVTQyxLQUFLLENBQUM7Z0JBQ3pCQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsR0FBRyxFQUFFO2dCQUNMO2dCQUNBO2dCQUNBO2NBQ0osQ0FBQyxDQUFDO1lBQUE7Y0FBQVIsWUFBQSxHQUFBRyxRQUFBLENBQUFNLENBQUE7Y0FOTW5ELElBQUcsR0FBQTBDLFlBQUEsQ0FBSDFDLElBQUc7Y0FPWHFDLE1BQUksQ0FBQ04sV0FBVSxHQUFJL0IsSUFBSSxDQUFDQSxJQUFHO2NBQUEsT0FBQTZDLFFBQUEsQ0FBQU8sQ0FBQSxJQUVwQixJQUFJO1lBQUE7Y0FBQVAsUUFBQSxDQUFBQyxDQUFBO2NBQUFILEVBQUEsR0FBQUUsUUFBQSxDQUFBTSxDQUFBO2NBQUEsT0FBQU4sUUFBQSxDQUFBTyxDQUFBLElBRUosS0FBSztVQUFBO1FBQUEsR0FBQVgsT0FBQTtNQUFBO0lBRXBCLENBQUM7SUFFS1ksY0FBYyxXQUFkQSxjQUFjQSxDQUFDQyxFQUFFLEVBQUM7TUFBQSxJQUFBQyxNQUFBO01BQUEsT0FBQWpCLGlCQUFBLGNBQUFDLFlBQUEsR0FBQUMsQ0FBQSxVQUFBZ0IsU0FBQTtRQUFBLElBQUFDLGFBQUEsRUFBQXpELElBQUEsRUFBQTBELEdBQUE7UUFBQSxPQUFBbkIsWUFBQSxHQUFBSyxDQUFBLFdBQUFlLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBYixDQUFBLEdBQUFhLFNBQUEsQ0FBQVosQ0FBQTtZQUFBO2NBQUFZLFNBQUEsQ0FBQWIsQ0FBQTtjQUFBYSxTQUFBLENBQUFaLENBQUE7Y0FBQSxPQUVPQyxLQUFLLENBQUM7Z0JBQ3pCQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsR0FBRyxFQUFFLGNBQWMsR0FBQ0ksRUFBRSxHQUFDO2dCQUN2QjtnQkFDQTtnQkFDQTtjQUNKLENBQUMsQ0FBQztZQUFBO2NBQUFHLGFBQUEsR0FBQUUsU0FBQSxDQUFBUixDQUFBO2NBTk1uRCxJQUFHLEdBQUF5RCxhQUFBLENBQUh6RCxJQUFHO2NBT1h1RCxNQUFJLENBQUN4QixXQUFXLENBQUM2QixJQUFJLENBQUMsVUFBQUMsVUFBUztnQkFBQSxPQUFLQSxVQUFVLENBQUNQLEVBQUMsS0FBTUEsRUFBRTtjQUFBLEVBQUMsQ0FBQ1EsV0FBVSxHQUFJLElBQUc7Y0FBQSxPQUFBSCxTQUFBLENBQUFQLENBQUEsSUFFcEUsSUFBSTtZQUFBO2NBQUFPLFNBQUEsQ0FBQWIsQ0FBQTtjQUFBWSxHQUFBLEdBQUFDLFNBQUEsQ0FBQVIsQ0FBQTtjQUFBLE9BQUFRLFNBQUEsQ0FBQVAsQ0FBQSxJQUVKLEtBQUs7VUFBQTtRQUFBLEdBQUFJLFFBQUE7TUFBQTtJQUVwQixDQUFDO0lBRUtPLGVBQWUsV0FBZkEsZUFBZUEsQ0FBQ1QsRUFBRSxFQUFDO01BQUEsSUFBQVUsTUFBQTtNQUFBLE9BQUExQixpQkFBQSxjQUFBQyxZQUFBLEdBQUFDLENBQUEsVUFBQXlCLFNBQUE7UUFBQSxJQUFBQyxhQUFBLEVBQUFsRSxJQUFBLEVBQUFtRSxHQUFBO1FBQUEsT0FBQTVCLFlBQUEsR0FBQUssQ0FBQSxXQUFBd0IsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUF0QixDQUFBLEdBQUFzQixTQUFBLENBQUFyQixDQUFBO1lBQUE7Y0FBQXFCLFNBQUEsQ0FBQXRCLENBQUE7Y0FBQXNCLFNBQUEsQ0FBQXJCLENBQUE7Y0FBQSxPQUVNQyxLQUFLLENBQUM7Z0JBQ3pCQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsR0FBRyxFQUFFLGNBQWMsR0FBQ0ksRUFBRSxHQUFDO2dCQUN2QjtnQkFDQTtnQkFDQTtjQUNKLENBQUMsQ0FBQztZQUFBO2NBQUFZLGFBQUEsR0FBQUUsU0FBQSxDQUFBakIsQ0FBQTtjQU5NbkQsSUFBRyxHQUFBa0UsYUFBQSxDQUFIbEUsSUFBRztjQU9YZ0UsTUFBSSxDQUFDakMsV0FBVyxDQUFDNkIsSUFBSSxDQUFDLFVBQUFDLFVBQVM7Z0JBQUEsT0FBS0EsVUFBVSxDQUFDUCxFQUFDLEtBQU1BLEVBQUU7Y0FBQSxFQUFDLENBQUNRLFdBQVUsR0FBSSxLQUFJO2NBQUEsT0FBQU0sU0FBQSxDQUFBaEIsQ0FBQSxJQUVyRSxJQUFJO1lBQUE7Y0FBQWdCLFNBQUEsQ0FBQXRCLENBQUE7Y0FBQXFCLEdBQUEsR0FBQUMsU0FBQSxDQUFBakIsQ0FBQTtjQUFBLE9BQUFpQixTQUFBLENBQUFoQixDQUFBLElBRUosS0FBSztVQUFBO1FBQUEsR0FBQWEsUUFBQTtNQUFBO0lBRXBCO0VBRUosQ0FBQztFQUNEeEQsUUFBUSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDRGQsZ0RBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQm1CLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO01BQ0gsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEIsQ0FBQztJQUNEYyxPQUFNLFdBQU5BLE9BQU1BLENBQUEsRUFBSztNQUNQLE9BQU8sSUFBSSxDQUFDekIsTUFBTSxDQUFDQyxLQUFLLENBQUNBLEtBQUssQ0FBQytELGtCQUFrQixDQUFDdkMsT0FBTTtJQUM1RDtFQUFBO0FBRVIsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztFRnpHSSxTQUFNO0FBQU87O0VBQ1QsU0FBTTtBQUFjOzs7RUFHcEIsU0FBTTtBQUFhOztFQUVuQixTQUFNO0FBQWM7O0VBQ3BCLFNBQU07QUFBb0I7Ozs7cUtBUm5Dd0MsZ0RBQUEsQ0FBa0JDLDBCQUFBLEdBQ2xCQyx1REFBQSxDQVVNLE9BVk5DLFVBVU0sR0FURkQsdURBQUEsQ0FFTSxPQUZORSxVQUVNLEdBREZGLHVEQUFBLENBQWlEO0lBQTVDLFNBQU0sZUFBZTtJQUFRRyxHQUFHLEVBQUVDLFFBQUEsQ0FBQTdELElBQUksQ0FBQ0s7eUNBRWhEb0QsdURBQUEsQ0FBcUUsT0FBckVLLFVBQXFFLEVBQUFDLG9EQUFBLENBQTFDRixRQUFBLENBQUE3RCxJQUFJLENBQUNnRSxVQUFVLElBQUUsR0FBQyxHQUFBRCxvREFBQSxDQUFFRixRQUFBLENBQUE3RCxJQUFJLENBQUNpRSxTQUFTLGtCLDBCQUM3RFIsdURBQUEsQ0FBb0Q7SUFBL0MsU0FBTTtFQUFtQixHQUFDLGlCQUFlLHFCQUM5Q0EsdURBQUEsQ0FBb0QsT0FBcERTLFVBQW9ELEVBQUFILG9EQUFBLENBQXhCRixRQUFBLENBQUE3RCxJQUFJLENBQUNZLFdBQVcsa0JBQzVDNkMsdURBQUEsQ0FBb0csT0FBcEdVLFVBQW9HLEdBQXBFVix1REFBQSxDQUE4RDtJQUFyRFcsT0FBSyxFQUFBQyxNQUFBLFFBQUFBLE1BQUE7TUFBQSxPQUFFUixRQUFBLENBQUF4RSxtQkFBQSxJQUFBd0UsUUFBQSxDQUFBeEUsbUJBQUEsQ0FBQWlGLEtBQUEsQ0FBQVQsUUFBQSxFQUFBVSxTQUFBLENBQW1CO0lBQUE7S0FBRSxrQkFBZ0IsRSxHQUVyRmhCLGdEQUFBLENBQWFpQixxQkFBQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDVlosU0FBTTs7O0VBQ0YsU0FBTTtBQUFROztFQUNWLFNBQU07QUFBTTs7U0FGWVgsUUFBQSxDQUFBOUMsT0FBTyxJLGtEQUE1QzBELHVEQUFBLENBUU0sT0FSTmYsVUFRTSxHQVBGRCx1REFBQSxDQU1NLE9BTk5FLFVBTU0sR0FMRkYsdURBQUEsQ0FJTSxPQUpOaUIsVUFJTSxHLDBCQUhGakIsdURBQUEsQ0FBK0Y7SUFBekZrQixLQUF1RCxFQUF2RDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQXVELEdBQUMsNEJBQTBCLHFCLG9EQUN4RmxCLHVEQUFBLENBQXFEOzthQUFyQ0ksUUFBQSxDQUFBN0QsSUFBSSxDQUFDWSxXQUFXLEdBQUFnRSxNQUFBO0lBQUE7SUFBRXZELElBQUksRUFBQztpRkFBdkJ3QyxRQUFBLENBQUE3RCxJQUFJLENBQUNZLFdBQVcsRSxHQUNoQzZDLHVEQUFBLENBQWdGO0lBQXhFLFNBQU0sc0JBQXNCO0lBQUVXLE9BQUssRUFBQUMsTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRVIsUUFBQSxDQUFBcEQsZUFBQSxJQUFBb0QsUUFBQSxDQUFBcEQsZUFBQSxDQUFBNkQsS0FBQSxDQUFBVCxRQUFBLEVBQUFVLFNBQUEsQ0FBZTtJQUFBO0tBQUUsV0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNKeEMsU0FBTTtBQUFZOztFQUNoRCxTQUFNO0FBQVk7O0VBQ2QsU0FBTTtBQUFPOztFQUdmLFNBQU07QUFBTzs7OztFQVdtQixTQUFNLE1BQU07RUFBQ0ksS0FBMEIsRUFBMUI7SUFBQTtFQUFBOzs7O1NBakJqREUsSUFBQSxDQUFBN0QsV0FBVyxJLGtEQUF0QnlELHVEQUFBLENBcUJNLE9BQUFmLFVBQUEsSSxzREFwQkZlLHVEQUFBLENBbUJNSyx5Q0FBQSxRQUFBQywrQ0FBQSxDQW5Cb0JGLElBQUEsQ0FBQTdELFdBQVcsWUFBekI4QixVQUFVOzZEQUF0QjJCLHVEQUFBLENBbUJNLE9BbkJOZCxVQW1CTSxHQWxCRkYsdURBQUEsQ0FpQk0sT0FqQk5pQixVQWlCTSxHQWhCRmpCLHVEQUFBLENBRU0sT0FGTkssVUFFTSxFQUFBQyxvREFBQSxDQURDakIsVUFBVSxDQUFDa0MsS0FBSyxrQkFFdkJ2Qix1REFBQSxDQVNJLEtBVEpTLFVBU0ksRyxxREFUYSxTQUNQLEdBQUFILG9EQUFBLENBQUdqQixVQUFVLENBQUNtQyxLQUFLLElBQUcsSUFBRSxHQUFBbEIsb0RBQUEsQ0FBR2pCLFVBQVUsQ0FBQ29DLFdBQVcsSUFBRyxHQUFDLEdBQUFuQixvREFBQSxDQUFHakIsVUFBVSxDQUFDcUMsU0FBUyxJQUFHLEdBQUMsR0FBQXBCLG9EQUFBLENBQUdqQixVQUFVLENBQUNzQyxJQUFJLElBQUcsR0FBQyxpQiwwQkFBQTNCLHVEQUFBLENBQUkscUMscURBQUEsV0FDeEcsR0FBQU0sb0RBQUEsQ0FBR2pCLFVBQVUsQ0FBQ3VDLE1BQU0sSUFBRyxHQUFDLGlCLDBCQUFBNUIsdURBQUEsQ0FBSSxxQyxxREFBQSxhQUMxQixHQUFBTSxvREFBQSxDQUFHakIsVUFBVSxDQUFDd0MsUUFBUSxJQUFHLEdBQUMsaUIsMEJBQUE3Qix1REFBQSxDQUFJLHFDLHFEQUFBLFdBQ2hDLEdBQUFNLG9EQUFBLENBQUdqQixVQUFVLENBQUN5QyxNQUFNLElBQUcsR0FBQyxpQiwwQkFBQTlCLHVEQUFBLENBQUkscUMsMEJBQ3BDQSx1REFBQSxDQUFJLHFDLCtFQUFBLHFCQUNjLHFCLDBCQUFBQSx1REFBQSxDQUFJLHFDLHFEQUFBLGFBQ1osR0FBQU0sb0RBQUEsQ0FBR2pCLFVBQVUsQ0FBQzBDLFlBQVksSUFBRyxLQUFHLEdBQUF6QixvREFBQSxDQUFHakIsVUFBVSxDQUFDMkMsVUFBVSxJQUFHLE1BQUksaUIsMEJBQUFoQyx1REFBQSxDQUFJLHFDLHFEQUFBLDZCQUNuRCxHQUFBTSxvREFBQSxDQUFHakIsVUFBVSxDQUFDNEMsaUJBQWlCLElBQUcsR0FBQyxpQiwwQkFBQWpDLHVEQUFBLENBQUksb0MsSUFFZlgsVUFBVSxDQUFDQyxXQUFXLEksa0RBQTVFMEIsdURBQUEsQ0FBOEc7O01BQXJHTCxPQUFLLFdBQUxBLE9BQUtBLENBQUFRLE1BQUE7UUFBQSxPQUFFZixRQUFBLENBQUF2QixjQUFjLENBQUNRLFVBQVUsQ0FBQ1AsRUFBRTtNQUFBO01BQWtDLFNBQU07T0FBTyxZQUFVLGlCQUFBNEIsVUFBQSxLLHVFQUMxRnJCLFVBQVUsQ0FBQ0MsV0FBVyxJLGtEQUFqQzBCLHVEQUFBLENBQStHLE9BQS9Ha0IsVUFBK0csRUFBcEMsZ0NBQThCLEssdUVBQ25EN0MsVUFBVSxDQUFDQyxXQUFXLEksa0RBQTVFMEIsdURBQUEsQ0FBbUg7O01BQTFHTCxPQUFLLFdBQUxBLE9BQUtBLENBQUFRLE1BQUE7UUFBQSxPQUFFZixRQUFBLENBQUFiLGVBQWUsQ0FBQ0YsVUFBVSxDQUFDUCxFQUFFO01BQUE7TUFBaUMsU0FBTTtPQUFPLGlCQUFlLGlCQUFBcUQsVUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMUg7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLCtFQUErRSx5QkFBeUIsd0JBQXdCLG9CQUFvQixHQUFHLDZCQUE2QixxQkFBcUIsMEJBQTBCLEdBQUcsU0FBUyxxQkFBcUIsNEJBQTRCLGlDQUFpQyx5QkFBeUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLGtCQUFrQixhQUFhLHNCQUFzQixPQUFPLFVBQVUscUJBQXFCLDJCQUEyQixnRUFBZ0UsOEJBQThCLHdCQUF3QixXQUFXLHlCQUF5QixxQ0FBcUMsNkJBQTZCLGtDQUFrQyx3Q0FBd0MsaUNBQWlDLDBCQUEwQiw0QkFBNEIsOEJBQThCLGlDQUFpQyxHQUFHLDBCQUEwQixrQ0FBa0Msd0JBQXdCLGdDQUFnQyxpQ0FBaUMsNkJBQTZCLDZCQUE2QixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyx5QkFBeUIsNEJBQTRCLEdBQUcsR0FBRyxHQUFHLFNBQVMsOEhBQThILE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssTUFBTSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssZ05BQWdOLGFBQWEsZUFBZSwyU0FBMlMseUJBQXlCLFlBQVksd0JBQXdCLDZCQUE2QixzQkFBc0IsMkNBQTJDLFdBQVcsc0JBQXNCLGFBQWEscUJBQXFCLDBFQUEwRSx1RkFBdUYsaUNBQWlDLDJFQUEyRSwrRkFBK0YsZ0JBQWdCLFdBQVcsc0JBQXNCLG9FQUFvRSxtQ0FBbUMsZUFBZSwyQkFBMkIsc0ZBQXNGLFdBQVcsT0FBTyxpREFBaUQseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyxZQUFZLHFCQUFxQiwwQkFBMEIsR0FBRyxTQUFTLDRCQUE0QixpQ0FBaUMseUJBQXlCLDBCQUEwQixvQkFBb0IsOEJBQThCLG1CQUFtQixrQkFBa0IsYUFBYSxzQkFBc0IsY0FBYywyQkFBMkIsZ0VBQWdFLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLHFDQUFxQyw2QkFBNkIsa0NBQWtDLHdDQUF3QyxpQ0FBaUMsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsaUNBQWlDLFdBQVcsaUJBQWlCLGtDQUFrQyx3QkFBd0IsZ0NBQWdDLGlDQUFpQyw2QkFBNkIsNkJBQTZCLFdBQVcsZ0JBQWdCLDJCQUEyQixXQUFXLGdCQUFnQiw0QkFBNEIsYUFBYSxPQUFPLEdBQUcsb0NBQW9DO0FBQ3hrSjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMkQ7QUFDbEcsWUFBeVk7O0FBRXpZOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG9WQUFPOzs7O0FBSXhCLGlFQUFlLG9WQUFPLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZ0M7QUFDVjtBQUNMOztBQUVwRCxDQUF1RjtBQUN2RixpQ0FBaUMscUdBQWUsQ0FBQywyRUFBTSxhQUFhLDZFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQWNmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmtNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F6SDtBQUN0QjtBQUNMOztBQUU3RCxDQUFzRjs7QUFFQztBQUN2RixpQ0FBaUMscUdBQWUsQ0FBQyxvRkFBTSxhQUFhLGtHQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQWNmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5KO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBdUY7QUFDdkYsaUNBQWlDLHFHQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsRUFjZjs7O0FBR0QsaUVBQWUsVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI0TSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvUGxheWVyL1RvdXJuYW1lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWU/M2JhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlPzZjNjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlPzg2ZjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1BsYXllci9QbGF5ZXIudnVlP2M4OTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvQ2hhbmdlTmFtZU1vZGFsLnZ1ZT8wNDY4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWU/OTgwMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9QbGF5ZXIvVG91cm5hbWVudC52dWU/MzFlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9QbGF5ZXIvVG91cm5hbWVudC52dWU/NTM1NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPENoYW5nZU5hbWVNb2RhbC8+XG4gICAgPGRpdiBjbGFzcz1cImJveGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJfZ3VhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbGF5ZXJfYXZhdGFyXCIgdi1iaW5kOnNyYz1cInVzZXIucGljXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyX25hbWVcIj57e3VzZXIuZmlyc3RfbmFtZX19IHt7dXNlci5sYXN0X25hbWV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVibGljX25hbWVfdGl0bGVcIj7QmNCz0YDQvtCy0L7QuSDQvdC40LrQvdC10LnQvDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyX2xvZ2luXCI+e3t1c2VyLnB1YmxpY19uYW1lfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYW5nZV9uYW1lX2J1dHRvblwiPjxidXR0b24gQGNsaWNrPVwib3BlbkNoYW5nZU5hbWVNb2RhbFwiPtCY0LfQvNC10L3QuNGC0Ywg0L3QuNC60L3QtdC50Lw8L2J1dHRvbj48L2Rpdj5cblxuICAgICAgICA8VG91cm5hbWVudC8+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ291dEJ1dHRvbi52dWVcIjtcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBDaGFuZ2VOYW1lTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFuZ2VOYW1lTW9kYWwudnVlJztcbmltcG9ydCBUb3VybmFtZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyL1RvdXJuYW1lbnQudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgVG91cm5hbWVudCwgQ2hhbmdlTmFtZU1vZGFsLCBMb2dvdXRCdXR0b259LFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ2luOiBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBvcGVuQ2hhbmdlTmFtZU1vZGFsKCl7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51aS5fbW9kYWxfY2hhbmdlX3BsYXllcl9uYW1lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDp7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2F1dGgnLCBbJ1VzZXInXSksXG4gICAgICAgIFRlbGVncmFtRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuVGVsZWdyYW0gPz8gXCJudWxsXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Vc2VyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIucGljKVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzZWF0LXdpbmRvdyBtb2RhbFwiIHYtaWY9XCJ2aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7IGRpc3BsYXk6IGJsb2NrO1wiPtCf0YPQsdC70LjRh9C90L7QtSDQuNC80Y8g0LTQu9GPINGA0LXQudGC0LjQvdCz0LA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJ1c2VyLnB1YmxpY19uYW1lXCIgbmFtZT1cInB1YmxpY19uYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBwcmltYXJ5IHNlYXRfYnRuXCIgQGNsaWNrPVwic3RvcmVQdWJsaWNOYW1lXCI+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3JlZGl0czowLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoJ2F1dGgnLCBbJ1VwZGF0ZU5hbWUnXSksXG4gICAgICAgICAgICBzZWF0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnVpLl9tb2RhbF9jaGFuZ2VfcGxheWVyX25hbWUgPSBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3JlUHVibGljTmFtZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlTmFtZSh0aGlzLnVzZXIucHVibGljX25hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS51aS5fbW9kYWxfY2hhbmdlX3BsYXllcl9uYW1lID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycygnYXV0aCcsIFsnVXNlciddKSxcbiAgICAgICAgICAgIHVzZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVXNlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudWkuX21vZGFsX2NoYW5nZV9wbGF5ZXJfbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uc2VsZWN0ZWRfY3JlZGl0c3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5zZWF0X2J0bntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0byAwO1xufVxuLm1vZGFse1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAzMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIC53aW5kb3d7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyOTI5MzEsICMxODE3MUQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODE3MUM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEI0ODU1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFREIyNTg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWR7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHl7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cInRvdXJuYW1lbnRzXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJ0b3VybmFtZW50IGluIHRvdXJuYW1lbnRzXCIgY2xhc3M9XCJ0b3VybmFtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB0b3VybmFtZW50LnRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjclwiPlxuICAgICAgICAgICAgICAgICAgICDQodGC0LXQujoge3sgdG91cm5hbWVudC5zdGFjayB9fSAoe3sgdG91cm5hbWVudC5zbWFsbF9ibGluZCB9fS97eyB0b3VybmFtZW50LmJpZ19ibGluZCB9fS97eyB0b3VybmFtZW50LmFudGUgfX0pPGJyPlxuICAgICAgICAgICAgICAgICAgICBCdXktaW46IHt7IHRvdXJuYW1lbnQuYnV5X2luIH194oK9PGJyPlxuICAgICAgICAgICAgICAgICAgICBSZS1FbnRyeToge3sgdG91cm5hbWVudC5yZV9lbnRyeSB9feKCvTxicj5cbiAgICAgICAgICAgICAgICAgICAgQWRkLW9uOiB7eyB0b3VybmFtZW50LmFkZF9vbiB9feKCvTxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICDQodGC0YDRg9C60YLRg9GA0LAg0YLRg9GA0L3QuNGA0LA6PGJyPlxuICAgICAgICAgICAgICAgICAgICDinqHvuI/Qo9GA0L7QstC90Lg6IHt7IHRvdXJuYW1lbnQubGV2ZWxzX3N0YXJ0IH19IC0ge3sgdG91cm5hbWVudC5sZXZlbHNfZW5kIH19INC80LjQvTxicj5cbiAgICAgICAgICAgICAgICAgICAg4p6h77iP0J/QvtC30LTQvdGP0Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjRjzog0LTQviB7eyB0b3VybmFtZW50LmxhdGVfcmVnaXN0cmF0aW9uIH19IDxicj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJqb2luVG91cm5hbWVudCh0b3VybmFtZW50LmlkKVwiIHYtaWY9XCIhdG91cm5hbWVudC5wYXJ0aWNpcGFudFwiIGNsYXNzPVwiYnV0dFwiPtCX0LDQv9C40YHQsNGC0YzRgdGPPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidG91cm5hbWVudC5wYXJ0aWNpcGFudFwiIGNsYXNzPVwiYnV0dFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+0JLRiyDQt9Cw0L/QuNGB0LDQvdGLLCDQttC00LXQvCDQstCw0YEg0L3QsCDQuNCz0YDRgyE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImxlYXZlVG91cm5hbWVudCh0b3VybmFtZW50LmlkKVwiIHYtaWY9XCJ0b3VybmFtZW50LnBhcnRpY2lwYW50XCIgY2xhc3M9XCJidXR0XCI+0J7RgtC80LXQvdC40YLRjCDQt9Cw0L/QuNGB0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvdXJuYW1lbnRzOltdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS5sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3BsYXllcicgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgICAgIGFzeW5jIGdldFRvdXJuYW1lbnQgKCl7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3RvdXJuYW1lbnQvZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIEF1dGhvcml6YXRpb246J0JlYXJlciAnK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdfdG9rZW4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdXJuYW1lbnRzID0gZGF0YS5kYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFzeW5jIGpvaW5Ub3VybmFtZW50KGlkKXtcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvdG91cm5hbWVudC8nK2lkKycvam9pbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBBdXRob3JpemF0aW9uOidCZWFyZXIgJytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX3Rva2VuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50cy5maW5kKHRvdXJuYW1lbnQgPT4gdG91cm5hbWVudC5pZCA9PT0gaWQpLnBhcnRpY2lwYW50ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhc3luYyBsZWF2ZVRvdXJuYW1lbnQoaWQpe1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy90b3VybmFtZW50LycraWQrJy9sZWF2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBBdXRob3JpemF0aW9uOidCZWFyZXIgJytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX3Rva2VuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50cy5maW5kKHRvdXJuYW1lbnQgPT4gdG91cm5hbWVudC5pZCA9PT0gaWQpLnBhcnRpY2lwYW50ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKCdhdXRoJywgWydVc2VyJ10pLFxuICAgICAgICAgICAgdXNlcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Vc2VyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpc2libGUgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5zdGF0ZS5fY2hhbmdlX25hbWVfbW9kYWwudmlzaWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zZWxlY3RlZF9jcmVkaXRzW2RhdGEtdi0xZTNhNjhiY117XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zZWF0X2J0bltkYXRhLXYtMWUzYTY4YmNde1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG59XFxuLm1vZGFse1xcbiZbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDMwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5OTk7XFxuICAgIH1cXG4ud2luZG93e1xcbiZbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjkyOTMxLCAjMTgxNzFEKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgfVxcbmlucHV0W2RhdGEtdi0xZTNhNjhiY117XFxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTgxNzFDO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QjQ4NTU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYnV0dG9uW2RhdGEtdi0xZTNhNjhiY117XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VEQjI1ODtcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaGVhZFtkYXRhLXYtMWUzYTY4YmNde1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG59XFxuLmJvZHlbZGF0YS12LTFlM2E2OGJjXXtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG59XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9jb21wb25lbnRzL0NoYW5nZU5hbWVNb2RhbC52dWVcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpREE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtBQzFEQTtJRDJESSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLE1BQU07SUFDTixlQUFBO0lBOUNBO0FBK0NBO0FDckVKO1FEc0VRLGdCQUFnQjtRQUNoQixxREFBcUQ7UUFDckQsbUJBQW1CO1FBQ25CLGFBQUE7UUE1Q0E7QUE2Q0E7WUFDSSxzQkFBc0I7WUFDdEIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTtZQUNmLGtCQUFrQjtBQUN0QjtBQUNBO1lBQ0ksbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxjQUFjO0FBQ2xCO0FBQ0E7WUFDSSxZQUFZO0FBQ2hCO0FBQ0E7WUFDSSxhQUFhO0FBRWpCO0FBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNlYXQtd2luZG93IG1vZGFsXFxcIiB2LWlmPVxcXCJ2aXNpYmxlXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndpbmRvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7IGRpc3BsYXk6IGJsb2NrO1xcXCI+0J/Rg9Cx0LvQuNGH0L3QvtC1INC40LzRjyDQtNC70Y8g0YDQtdC50YLQuNC90LPQsDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcInVzZXIucHVibGljX25hbWVcXFwiIG5hbWU9XFxcInB1YmxpY19uYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIHByaW1hcnkgc2VhdF9idG5cXFwiIEBjbGljaz1cXFwic3RvcmVQdWJsaWNOYW1lXFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xcblxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY3JlZGl0czowLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcblxcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKCdhdXRoJywgWydVcGRhdGVOYW1lJ10pLFxcbiAgICAgICAgICAgIHNlYXQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnVpLl9tb2RhbF9jaGFuZ2VfcGxheWVyX25hbWUgPSBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc3RvcmVQdWJsaWNOYW1lKCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlTmFtZSh0aGlzLnVzZXIucHVibGljX25hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudWkuX21vZGFsX2NoYW5nZV9wbGF5ZXJfbmFtZSA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycygnYXV0aCcsIFsnVXNlciddKSxcXG4gICAgICAgICAgICB1c2VyKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Vc2VyO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmlzaWJsZSAoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51aS5fbW9kYWxfY2hhbmdlX3BsYXllcl9uYW1lXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uc2VsZWN0ZWRfY3JlZGl0c3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnNlYXRfYnRue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG59XFxuLm1vZGFse1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMzA7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDk5OTk5OTtcXG4gICAgLndpbmRvd3tcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjkyOTMxLCAjMTgxNzFEKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgaW5wdXR7XFxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTgxNzFDO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QjQ4NTU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRURCMjU4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgICAgICAuaGVhZHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuYm9keXtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbjwvc3R5bGU+XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWUzYTY4YmMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2MjIxN2I2XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcGxpY2F0aW9uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvanMvcGFnZXMvUGxheWVyL1BsYXllci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNTYyMjE3YjZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1NjIyMTdiNicsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzU2MjIxN2I2JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2MjIxN2I2XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzU2MjIxN2I2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZTNhNjhiYyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQ2hhbmdlTmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlM2E2OGJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcGxpY2F0aW9uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMWUzYTY4YmNcIl0sWydfX2ZpbGUnLFwicmVzb3VyY2VzL2pzL3BhZ2VzL2NvbXBvbmVudHMvQ2hhbmdlTmFtZU1vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxZTNhNjhiY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzFlM2E2OGJjJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMWUzYTY4YmMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWUzYTY4YmMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMWUzYTY4YmMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NoYW5nZU5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DaGFuZ2VOYW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ub3VybmFtZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjgyNTgwN1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RvdXJuYW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RvdXJuYW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcGxpY2F0aW9uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJyZXNvdXJjZXMvanMvcGFnZXMvY29tcG9uZW50cy9QbGF5ZXIvVG91cm5hbWVudC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNzY4MjU4MDdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3NjgyNTgwNycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzc2ODI1ODA3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub3VybmFtZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjgyNTgwN1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc3NjgyNTgwNycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vVG91cm5hbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ub3VybmFtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIkxvZ291dEJ1dHRvbiIsIm1hcEdldHRlcnMiLCJDaGFuZ2VOYW1lTW9kYWwiLCJUb3VybmFtZW50IiwiY29tcG9uZW50cyIsImRhdGEiLCJsb2dpbiIsInBhc3N3b3JkIiwibWV0aG9kcyIsIm9wZW5DaGFuZ2VOYW1lTW9kYWwiLCIkc3RvcmUiLCJzdGF0ZSIsInVpIiwiX21vZGFsX2NoYW5nZV9wbGF5ZXJfbmFtZSIsImNvbXB1dGVkIiwiX29iamVjdFNwcmVhZCIsIlRlbGVncmFtRGF0YSIsIl93aW5kb3ckVGVsZWdyYW0iLCJ3aW5kb3ciLCJUZWxlZ3JhbSIsInVzZXIiLCJVc2VyIiwibW91bnRlZCIsImNvbnNvbGUiLCJsb2ciLCJwaWMiLCJtYXBBY3Rpb25zIiwiY3JlZGl0cyIsInNlYXQiLCJzdG9yZVB1YmxpY05hbWUiLCJfdGhpcyIsIlVwZGF0ZU5hbWUiLCJwdWJsaWNfbmFtZSIsInRoZW4iLCJyZXN1bHQiLCJ2aXNpYmxlIiwidG91cm5hbWVudHMiLCJnZXRUb3VybmFtZW50IiwibG9hZGVkIiwiJHJvdXRlciIsInB1c2giLCJuYW1lIiwiX3RoaXMyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3IiLCJtIiwiX2NhbGxlZSIsIl95aWVsZCRheGlvcyIsIl90IiwidyIsIl9jb250ZXh0IiwicCIsIm4iLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInYiLCJhIiwiam9pblRvdXJuYW1lbnQiLCJpZCIsIl90aGlzMyIsIl9jYWxsZWUyIiwiX3lpZWxkJGF4aW9zMiIsIl90MiIsIl9jb250ZXh0MiIsImZpbmQiLCJ0b3VybmFtZW50IiwicGFydGljaXBhbnQiLCJsZWF2ZVRvdXJuYW1lbnQiLCJfdGhpczQiLCJfY2FsbGVlMyIsIl95aWVsZCRheGlvczMiLCJfdDMiLCJfY29udGV4dDMiLCJfY2hhbmdlX25hbWVfbW9kYWwiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0NoYW5nZU5hbWVNb2RhbCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsInNyYyIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfNCIsIl90b0Rpc3BsYXlTdHJpbmciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJvbkNsaWNrIiwiX2NhY2hlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY29tcG9uZW50X1RvdXJuYW1lbnQiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMyIsInN0eWxlIiwiJGV2ZW50IiwiX2N0eCIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwidGl0bGUiLCJzdGFjayIsInNtYWxsX2JsaW5kIiwiYmlnX2JsaW5kIiwiYW50ZSIsImJ1eV9pbiIsInJlX2VudHJ5IiwiYWRkX29uIiwibGV2ZWxzX3N0YXJ0IiwibGV2ZWxzX2VuZCIsImxhdGVfcmVnaXN0cmF0aW9uIiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiXSwic291cmNlUm9vdCI6IiJ9