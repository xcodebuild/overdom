/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./helper/code-box/index.tsx":
/*!***********************************!*\
  !*** ./helper/code-box/index.tsx ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Codebox
/* harmony export */ });
/* harmony import */ var overdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! overdom */ "../overdom/dist/overdom.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./helper/code-box/index.less");
var _class, _descriptor, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





function htmlDecode(input) {
  var e = document.createElement('textarea');
  e.innerHTML = input; // handle case of empty input

  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

var Codebox = (_class = (_temp = /*#__PURE__*/function (_Component) {
  _inherits(Codebox, _Component);

  var _super = _createSuper(Codebox);

  function Codebox(props) {
    var _this;

    _classCallCheck(this, Codebox);

    _this = _super.call(this, props);

    _initializerDefineProperty(_assertThisInitialized(_this), "code", _descriptor, _assertThisInitialized(_this));

    _this.code = props.code;
    return _this;
  }

  _createClass(Codebox, [{
    key: "onMount",
    value: function onMount() {
      // @ts-ignore
      this.code = Prism.highlight(htmlDecode(this.code), Prism.languages.javascript);
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.props.component;
      return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "codebox"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("pre", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", {
        dangerouslySetInnerHTML: {
          __html: this.code
        }
      }))), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "demo"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(Component, null)));
    }
  }]);

  return Codebox;
}(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "code", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);


/***/ }),

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Header
/* harmony export */ });
/* harmony import */ var overdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! overdom */ "../overdom/dist/overdom.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Logo = /*#__PURE__*/function () {
  function Logo() {
    _classCallCheck(this, Logo);
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
        className: "logo"
      });
    }
  }]);

  return Logo;
}();

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("header", {
        id: "header"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(Logo, null));
    }
  }]);

  return Header;
}();



/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.tsx");
/* harmony import */ var overdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! overdom */ "../overdom/dist/overdom.esm.js");
/* harmony import */ var _doc_get_started_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc/get-started.md */ "./src/doc/get-started.md");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return (0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        className: "page-container"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)(_components_header__WEBPACK_IMPORTED_MODULE_1__.default, null), (0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        className: "sidebar"
      }), (0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        className: "content"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)(_doc_get_started_md__WEBPACK_IMPORTED_MODULE_3__.default, null))));
    }
  }]);

  return App;
}();

(0,overdom__WEBPACK_IMPORTED_MODULE_2__.render)((0,overdom__WEBPACK_IMPORTED_MODULE_2__.h)(App, null), document.getElementById('app'));

/***/ }),

/***/ "../overdom/dist/overdom.esm.js":
/*!**************************************!*\
  !*** ../overdom/dist/overdom.esm.js ***!
  \**************************************/
/*! namespace exports */
/*! export $if [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $map [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export autorun [provided] [no usage info] [missing usage info prevents renaming] */
/*! export computed [provided] [no usage info] [missing usage info prevents renaming] */
/*! export h [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reactive [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$if": () => /* binding */ $if,
/* harmony export */   "$map": () => /* binding */ $map,
/* harmony export */   "Component": () => /* binding */ Component,
/* harmony export */   "autorun": () => /* binding */ autorun,
/* harmony export */   "computed": () => /* binding */ computed,
/* harmony export */   "h": () => /* binding */ h,
/* harmony export */   "reactive": () => /* binding */ reactive,
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var tasks = /*#__PURE__*/new Set();
var deferTasks = /*#__PURE__*/new Set();
var timer = null;

function schedule(task, defer) {
  if (defer === void 0) {
    defer = false;
  }

  if (defer) {
    deferTasks.add(task);
  } else {
    tasks.add(task);
  }

  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      var taskItems = Array.from(tasks.values());
      tasks.clear();
      var deferItems = Array.from(deferTasks.values());
      deferTasks.clear();
      taskItems.concat(deferItems).forEach(function (taskItem) {
        taskItem();
      });
    }, 0);
  }
}

function insert(array, index, item) {
  array.splice(index, 0, item);
}

var _a, _b, _c, _d, _e;

var RefSymbol = /*#__PURE__*/Symbol('ref');

function isRef(r) {
  return r && r[RefSymbol] === true;
}

var hideRefMode = false;

function wrapFnHideRefMode(fn) {
  return function () {
    var temp = hideRefMode;
    hideRefMode = true;
    var r = fn.apply(void 0, arguments);
    hideRefMode = temp;
    return r;
  };
}

function runInRefMode(cb) {
  var temp = hideRefMode;
  hideRefMode = false;
  var r = cb();
  hideRefMode = temp;
  return r;
}

function runInHideRefMode(cb) {
  var temp = hideRefMode;
  hideRefMode = true;
  var r = cb();
  hideRefMode = temp;
  return r;
}

var proxyObjMap = /*#__PURE__*/new WeakMap();

var DepsManager = /*#__PURE__*/function () {
  function DepsManager() {
    this._collecting = [];
    this._deps = new WeakMap();
  }

  var _proto = DepsManager.prototype;

  _proto._addDep = function _addDep(target, trigger) {
    if (!this._deps.has(target)) {
      this._deps.set(target, new Set());
    }

    this._deps.get(target).add(trigger);
  };

  _proto._getDeps = function _getDeps(target) {
    var _this$_deps$get;

    return Array.from(((_this$_deps$get = this._deps.get(target)) == null ? void 0 : _this$_deps$get.values()) || []);
  };

  _proto.beginCollect = function beginCollect(ref) {
    this._collecting.push(ref);
  };

  _proto.endCollect = function endCollect() {
    this._collecting.pop();
  };

  _proto.track = function track(target) {
    if (this._collecting.length > 0) {
      this._addDep(target, this._collecting[this._collecting.length - 1]);
    }
  };

  _proto.trigger = function trigger(target) {
    var deps = this._getDeps(target);

    deps.forEach(function (dep) {
      return dep.trigger();
    });
  };

  return DepsManager;
}();

var depsManager = /*#__PURE__*/new DepsManager();

var AutorunRefImpl = /*#__PURE__*/function () {
  function AutorunRefImpl(_fn) {
    this._fn = _fn;
    this[_a] = true;
    this.value = null;

    this._run();
  }

  var _proto2 = AutorunRefImpl.prototype;

  _proto2._run = function _run() {
    var _this = this;

    depsManager.beginCollect(this); // @ts-ignore

    wrapFnHideRefMode(this._fn).call(this, function (fn) {
      // no track fn
      depsManager.endCollect();
      fn();
      depsManager.beginCollect(_this);
    });
    depsManager.endCollect();
  };

  _proto2.trigger = function trigger() {
    this._run();
  };

  return AutorunRefImpl;
}();

_a = RefSymbol;

function createAutorun(fn) {
  return new AutorunRefImpl(fn);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(_value) {
    this._value = _value;
    this[_b] = true;
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      depsManager.track(this);
      return this._value;
    },
    set: function set(val) {
      if (this._value !== val) {
        this._value = val;
        depsManager.trigger(this);
      }
    }
  }]);

  return RefImpl;
}();

_b = RefSymbol;

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter) {
    this[_c] = true;
    this.inited = false;
    this._compute = getter;
  }

  var _proto3 = ComputedRefImpl.prototype;

  _proto3._recompute = function _recompute() {
    depsManager.beginCollect(this);
    this._value = this._compute();
    depsManager.endCollect();
  };

  _proto3.trigger = function trigger() {
    var lastValue = this._value;

    this._recompute();

    if (this._value !== lastValue) {
      depsManager.trigger(this);
    }
  };

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      if (!this.inited) {
        this._recompute();

        this.inited = true;
      }

      depsManager.track(this);
      return this._value;
    }
  }]);

  return ComputedRefImpl;
}();

_c = RefSymbol;
var ProxyRefSymbol = /*#__PURE__*/Symbol('proxy-ref');

function isProxyRef(target) {
  return target && target[ProxyRefSymbol] === true;
}

var proxyMap = /*#__PURE__*/new WeakMap();

function createReactive(obj, allReactive) {
  if (allReactive === void 0) {
    allReactive = false;
  }

  var ref = new ProxyRefImpl(obj, allReactive);
  return ref.value;
}

var META_TYPE;

(function (META_TYPE) {
  META_TYPE[META_TYPE["reactive"] = 0] = "reactive";
  META_TYPE[META_TYPE["computed"] = 1] = "computed";
  META_TYPE[META_TYPE["autorun"] = 2] = "autorun";
})(META_TYPE || (META_TYPE = {}));

var metasMap = /*#__PURE__*/new WeakMap();

function addMeta(prototype, key, type) {
  if (!metasMap.has(prototype)) {
    metasMap.set(prototype, new Map());
  }

  var metas = metasMap.get(prototype);
  metas.set(key, type);
}

function getMetaKeys(prototype) {
  return metasMap.get(prototype);
}

function reactiveComponent(component, props) {
  var ins = new component(props || {});
  var comp = createReactive(ins);
  return comp;
}
/**
 * @reactive decorate
 */


function reactive(prototype, key) {
  addMeta(prototype, key, META_TYPE.reactive);
}
/**
 * @computed decorate
 */


function computed(prototype, key) {
  addMeta(prototype, key, META_TYPE.computed);
}
/**
 * @computed decorate
 */


function autorun(prototype, key) {
  addMeta(prototype, key, META_TYPE.autorun);
}

var ProxyRefImpl = /*#__PURE__*/function () {
  function ProxyRefImpl(_obj, _allReactive) {
    if (_allReactive === void 0) {
      _allReactive = false;
    }

    this._obj = _obj;
    this._allReactive = _allReactive;
    this[_d] = true;
    this[_e] = true;
    this._metaKeys = getMetaKeys(Object.getPrototypeOf(_obj));
    this._proxy = this._initProxy(_obj);

    this._initAutorun();
  }

  var _proto4 = ProxyRefImpl.prototype;

  _proto4._initAutorun = function _initAutorun() {
    var _this2 = this;

    if (!this._metaKeys) {
      return;
    }

    this._metaKeys.forEach(function (value, key) {
      if (value === META_TYPE.autorun) {
        createAutorun(_this2._obj[key].bind(_this2._proxy));
      }
    });
  };

  _proto4._initProxy = function _initProxy(obj) {
    var _this3 = this;

    var that = this;

    if (proxyMap.has(obj)) {
      return proxyMap.get(obj);
    }

    var refMap = new Map();
    var proxy = new Proxy(obj, {
      get: function get(_, key) {
        depsManager.track(that);

        if (Array.isArray(obj)) {
          if (key === 'length') return obj.length;
          if (key === 'map') return function map(cb, thisArg) {
            return obj.map(function (_item, _index) {
              return cb(proxy[_index], _index);
            }, thisArg);
          };
          if (['push', 'pop', 'shift', 'unshift', 'splice'].indexOf(key) !== -1) return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (key === 'pop') {
              var len = obj.length;
              refMap["delete"](len - 1);
            } else if (key === 'splice') {
              var index = args[0];
              var count = args[1];
              var inserts = args.slice(2);
              var insertsLen = inserts.length;
              var _len2 = obj.length;

              for (var i = 0; i < _len2; i++) {
                if (i >= index && i < index + count) {
                  refMap["delete"]('' + i);
                } else if (i >= index + count) {
                  refMap.set('' + (i - count + insertsLen), refMap.get('' + i));
                  refMap["delete"]('' + i);
                }
              }
            }

            obj[key].apply(obj, args);
            depsManager.trigger(that);
          };
        }

        if (key === Symbol.species) {
          return this;
        }

        var ref = getRef(key);

        if (isProxyRef(ref)) {
          return ref.value;
        }

        if (hideRefMode && isRef(ref)) {
          return ref.value;
        }

        return getRef(key);
      },
      set: function set(_, key, value) {
        var ref = getRef(key);

        if (isRef(ref)) {
          // if origin ref is not proxyRef
          // but value is a object
          if (value && _typeof(value) === 'object' && ref[ProxyRefSymbol] !== true) {
            refMap.set(key, new ProxyRefImpl(value, true));
            return true;
          }

          ref.value = value;
        } else {
          that._obj[key] = value;
        }

        return true;
      }
    });

    var getRef = function getRef(key) {
      var _this3$_metaKeys;

      if (refMap.has(key)) {
        return refMap.get(key);
      }

      var prototype = Object.getPrototypeOf(_this3._obj);

      if (!_this3._metaKeys && !_this3._allReactive) {
        return _this3._obj[key];
      }

      var meta = (_this3$_metaKeys = _this3._metaKeys) == null ? void 0 : _this3$_metaKeys.get(key);
      var result;

      if (_this3._allReactive || meta === META_TYPE.reactive) {
        var value = obj[key];

        if (isRef(value)) {
          result = value;
        } else if (value !== null && _typeof(value) === 'object') {
          // reactive object
          result = new ProxyRefImpl(createReactive(value, _this3._allReactive), true);
        } else if (value === 'function') {
          result = new RefImpl(wrapFnHideRefMode(value.bind(_this3._proxy)));
        } else {
          // ref
          result = new RefImpl(value);
        }
      } else if (meta === META_TYPE.computed) {
        var getter = Object.getOwnPropertyDescriptor(prototype, key).get;
        result = new ComputedRefImpl(wrapFnHideRefMode(getter.bind(_this3._proxy)));
      }

      if (result) {
        refMap.set(key, result);
        return result;
      }

      var r = _this3._obj[key];

      if (typeof r === 'function') {
        return r.bind(_this3._proxy);
      }

      return r;
    };

    proxyMap.set(obj, proxy);
    proxyObjMap.set(proxy, obj);
    return proxy;
  };

  _createClass(ProxyRefImpl, [{
    key: "value",
    get: function get() {
      depsManager.track(this);
      return this._proxy;
    },
    set: function set(newVal) {
      var _this4 = this;

      Object.keys(newVal).forEach(function (key) {
        _this4._proxy[key] = newVal[key];
      });
      depsManager.trigger(this);
    }
  }]);

  return ProxyRefImpl;
}();

_d = RefSymbol, _e = ProxyRefSymbol;

var Fragment = /*#__PURE__*/function () {
  function Fragment() {
    this.fragment = document.createDocumentFragment();
    this.childNodes = [];
    this.components = [];
  }

  Fragment.isFragment = function isFragment(obj) {
    if (!obj) {
      return;
    }

    var constructor = obj.constructor;
    return constructor === Fragment || constructor === FragmentList;
  };

  var _proto = Fragment.prototype;

  _proto.appendChild = function appendChild(child) {
    var node = child;
    this.fragment.appendChild(node);
    this.childNodes.push(node);
  };

  _proto.appendToContainer = function appendToContainer(container, containerFragment) {
    this.container = container;
    this.createEmpty();
    container.appendChild(this.fragment);

    if (this.components.length > 0) {
      if (containerFragment !== null) {
        containerFragment.components = this.components.concat(containerFragment.components);
      } else {
        // render, trigger onMount
        this.onMount();
      }
    }
  };

  _proto.onMount = function onMount() {
    var _this = this;

    schedule(function () {
      runInHideRefMode(function () {
        _this.components.forEach(function (comp) {
          comp.onMount && comp.onMount();
        });
      });
    }, true);
  };

  _proto.onDestory = function onDestory() {
    var _this2 = this;

    schedule(function () {
      runInHideRefMode(function () {
        _this2.components.forEach(function (comp) {
          comp.onDestory && comp.onDestory();
        });
      });
    }, true);
  };

  _proto.replaceWith = function replaceWith(fragment) {
    var _this3 = this;

    fragment.container = this.container;
    schedule(function () {
      var range = _this3.createRange();

      range.deleteContents();
      range.insertNode(fragment.fragment);
      range.detach();
    });
    this.onDestory();
    fragment.onMount();
  };

  _proto.createEmpty = function createEmpty() {
    if (this.childNodes.length === 0) {
      this.appendChild(document.createComment('empty'));
    }
  };

  _proto.insertBeforeToContainer = function insertBeforeToContainer(container, beforeNode) {
    var _this4 = this;

    if (this.container) {
      // has a container already
      // remove self from current container first
      schedule(function () {
        _this4.fragment = document.createDocumentFragment();

        _this4.childNodes.forEach(function (node) {
          _this4.container.removeChild(node);

          _this4.fragment.appendChild(node);
        });
      });
    }

    this.container = container;
    this.createEmpty();
    schedule(function () {
      container.insertBefore(_this4.fragment, beforeNode);
    });
  };

  _proto.createRange = function createRange() {
    var parent = this.childNodes[0].parentNode;
    var range = document.createRange();
    var startPos = Array.prototype.indexOf.call(parent == null ? void 0 : parent.childNodes, this.childNodes[0]);
    range.setStart(parent, startPos);
    range.setEnd(parent, startPos + this.childNodes.length);
    return range;
  };

  _proto.getFirstNode = function getFirstNode() {
    return this.childNodes[0];
  };

  return Fragment;
}();

var FragmentList = /*#__PURE__*/function (_Fragment) {
  _inheritsLoose(FragmentList, _Fragment);

  function FragmentList() {
    var _this5;

    _this5 = _Fragment.apply(this, arguments) || this;
    _this5.childFragments = [];
    return _this5;
  }

  var _proto2 = FragmentList.prototype;

  _proto2.appendFragment = function appendFragment(child, key) {
    child.appendToContainer(this.fragment, this);
    this.childFragments.push(child);
    child.key = key;
  };

  _proto2.insert = function insert$1(index, fragment, newKey) {
    var _this$childFragments$;

    fragment.key = newKey;
    fragment.insertBeforeToContainer(this.container, ((_this$childFragments$ = this.childFragments[index]) == null ? void 0 : _this$childFragments$.getFirstNode()) || null);
    insert(this.childFragments, index, fragment);
  };

  _proto2.removeWithKeys = function removeWithKeys(keys) {
    var _this6 = this;

    this.childFragments.forEach(function (child, index) {
      if (keys.indexOf(child.key) === -1) {
        return;
      }

      var fragment = child;
      schedule(function () {
        var range = fragment.createRange();
        range.deleteContents();
        range.detach();
      });

      _this6.childFragments.splice(index, 1);
    });
  };

  _proto2.move = function move(fromIndex, toIndex) {
    var insertBefore = this.childFragments[toIndex];
    var insertBeforeNode = insertBefore == null ? void 0 : insertBefore.getFirstNode();
    var target = this.childFragments[fromIndex];
    target.insertBeforeToContainer(this.container, insertBeforeNode);
    insert(this.childFragments, toIndex, target);
    var deleteIndex = fromIndex;

    if (toIndex < fromIndex) {
      deleteIndex += 1;
    }

    this.childFragments.splice(deleteIndex, 1);
  };

  return FragmentList;
}(Fragment);

function directive(func) {
  // @ts-ignore
  func.__isdirective__ = true;
  return func;
}

function isDirective(val) {
  return (val == null ? void 0 : val.__isdirective__) === true;
}

function $if(cond, yes, no) {
  return directive(function () {
    var lastResult;
    var inited = false;
    var lastFragment;
    createAutorun(function () {
      var newResult = cond();

      if (!inited) {
        lastResult = newResult;
        lastFragment = lastResult ? yes() : no();
        inited = true;
        return;
      }

      var newFragment = newResult ? yes() : no();
      lastFragment.replaceWith(newFragment);
      lastFragment = newFragment;
      lastResult = newResult;
    });
    return lastFragment;
  });
}

function createReactiveItem(value, index) {
  return createReactive({
    value: value,
    index: index
  }, true);
}

function $map(rawList, mapFunc, keyFunc) {
  var list = rawList;
  var listData = list;
  var lastReactiveItems = listData.map(function (item, index) {
    return createReactiveItem(item, index);
  });
  var fragmentList = new FragmentList();

  var mapFuncWrap = function mapFuncWrap(item) {
    var fragment;
    runInRefMode(function () {
      fragment = mapFunc(item);
      fragment.reactiveItem = item;
    });
    return fragment;
  };

  var keyFuncWrap = wrapFnHideRefMode(function (item) {
    var r = keyFunc(item);

    if (typeof r !== 'string' && typeof r !== 'number') {
      console.trace('key of $map should return string or number, but got ' + r, keyFunc.toString());
    }

    return r;
  });
  var lastFragments = listData.map(function (_, index) {
    return mapFuncWrap(lastReactiveItems[index]);
  });
  var lastKeys = listData.map(function (_, index) {
    return keyFuncWrap(lastReactiveItems[index]);
  });
  lastFragments.forEach(function (frag, index) {
    fragmentList.appendFragment(frag, lastKeys[index]);
  });
  var inited = false;
  createAutorun(function (notrack) {
    if (!inited) {
      // @ts-ignore
      inited = list.length;
      inited = true;
      return;
    }

    var newList = list;
    notrack(function () {
      var newKeys = newList.map(function (item, index) {
        return keyFuncWrap(createReactiveItem(item, index));
      });
      var lastKeys = fragmentList.childFragments.map(function (item) {
        return item.key;
      }); // diff and patch from keys

      newKeys.forEach(function (key, index) {
        var lastKeys = fragmentList.childFragments.map(function (item) {
          return item.key;
        });
        var lastIndex = lastKeys.indexOf(key);

        if (lastIndex === -1) {
          // insert
          // can not find in old list, mean insert
          // insert to current index
          var reactiveItem = createReactiveItem(newList[index], index);
          var fragment = mapFuncWrap(reactiveItem);
          fragmentList.insert(index, fragment, key);
        } else if (lastIndex !== index) {
          // move
          var fromIndex = lastIndex;
          var toIndex = index;
          fragmentList.move(fromIndex, toIndex);
        }
      });
      var removed = lastKeys.filter(function (key) {
        return newKeys.indexOf(key) === -1;
      });
      fragmentList.removeWithKeys(removed); // apply new reactiveIndex

      fragmentList.childFragments.forEach(function (child, index) {
        return child.reactiveItem.index = index;
      });
    });
  });
  return fragmentList;
}

function buildComponent(comp, props) {
  if (props === void 0) {
    props = {};
  }

  var component = reactiveComponent(comp, props);
  var fragment;
  runInRefMode(function () {
    fragment = component.render();
    fragment.components.push(component);
  });
  return fragment;
}

var Component = /*#__PURE__*/function () {
  function Component(props) {
    this.props = createReactive(props);
  }

  var _proto = Component.prototype;

  _proto.render = function render() {
    return null;
  };

  _proto.onMount = function onMount() {};

  _proto.onDestory = function onDestory() {};

  return Component;
}();

function setAttr(node, key, value) {
  if (key === 'value') {
    // @ts-ignore
    node.value = value;
    return;
  } else if (key === 'class') {
    console.error('should be className, but got class');
    return;
  } else if (key === 'className') {
    key = 'class';
  } else if (key === 'dangerouslySetInnerHTML') {
    var html = value.__html;

    if (isRef(html)) {
      createAutorun(function () {
        var newValue = html.value;
        schedule(function () {
          // @ts-ignore
          node.innerHTML = newValue;
        });
      });
    } else {
      node.innerHTML = html;
    }

    return;
  } else if (key === 'ref') {
    // value should be a (ref) => void
    value(node);
    return;
  }

  node.setAttribute(key, value);
}

function bindAttr(node, key, value) {
  var lastValue = value.value;
  var isEvent = /^on[A-Z]/.test(key);
  var eventName = isEvent ? key.replace(/^on/, '').toLocaleLowerCase() : '';
  var lastValueEventHandler = isEvent ? wrapFnHideRefMode(lastValue) : function () {};
  schedule(function () {
    if (isEvent) {
      node.addEventListener(eventName, lastValueEventHandler);
      return;
    }

    setAttr(node, key, lastValue);
  });
  createAutorun(function () {
    var newValue = value.value;
    schedule(function () {
      if (isEvent) {
        node.removeEventListener(eventName, lastValueEventHandler);
        lastValueEventHandler = wrapFnHideRefMode(lastValueEventHandler);
        node.addEventListener(eventName, lastValueEventHandler);
        return;
      }

      setAttr(node, key, newValue);
    });
    lastValue = newValue;
  });
}

function h(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var fragment = new Fragment();

  if (typeof type === 'string') {
    var tag = document.createElement(type);

    if (props) {
      Object.keys(props).forEach(function (key) {
        var value = props[key];

        if (typeof value === 'function' && /^on[A-Z]/.test(key)) {
          tag.addEventListener(key.replace(/^on/, '').toLocaleLowerCase(), wrapFnHideRefMode(value));
          return;
        } else if (isRef(value)) {
          bindAttr(tag, key, value);
          return;
        }

        setAttr(tag, key, value);
      });
    }

    if (children) {
      children.forEach(function (child) {
        if (typeof child === 'string' || typeof child === 'number') {
          tag.appendChild(document.createTextNode(child));
        } else if (isRef(child)) {
          var reactiveVal = child;
          var val = reactiveVal.value; // textnode

          var textNode = document.createTextNode('' + val);
          createAutorun(function () {
            var newValue = reactiveVal.value;
            schedule(function () {
              textNode.nodeValue = newValue;
            });
          });
          tag.appendChild(textNode);
        } else if (isDirective(child)) {
          var directive = child;

          var _fragment = directive();

          _fragment.appendToContainer(tag, _fragment);
        } else if (Fragment.isFragment(child)) {
          child.appendToContainer(tag, fragment);
        } else {
          tag.appendChild(child);
        }
      });
    }

    fragment.appendChild(tag);
  } else if (typeof type === 'function') {
    // component
    return buildComponent(type, _extends({}, props, {
      children: children
    }));
  } else if (isRef(type)) {
    // reactive component
    var comp = type;
    var frag;
    createAutorun(function (notrack) {
      if (!frag) {
        var component = comp.value;
        notrack(function () {
          frag = buildComponent(component, _extends({}, props, {
            children: children
          }));
        });
      } else {
        var newFrag = buildComponent(comp.value, _extends({}, props, {
          children: children
        }));
        frag.replaceWith(newFrag);
        frag = newFrag;
      }
    });
    return frag;
  }

  return fragment;
}

function render(fragment, container) {
  fragment.appendToContainer(container, null);
}



/***/ }),

/***/ "./src/doc/get-started.md":
/*!********************************!*\
  !*** ./src/doc/get-started.md ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Demo
/* harmony export */ });
/* harmony import */ var overdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! overdom */ "../overdom/dist/overdom.esm.js");
/* harmony import */ var _home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/code-box */ "./helper/code-box/index.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Demo = /*#__PURE__*/function (_Component) {
  _inherits(Demo, _Component);

  var _super = _createSuper(Demo);

  function Demo() {
    _classCallCheck(this, Demo);

    return _super.apply(this, arguments);
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
        id: "getting-started"
      }, "Getting Started"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "hello-world"
      }, "Hello world"), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          module.exports = /*#__PURE__*/function (_Component2) {
            _inherits(Hello, _Component2);

            var _super2 = _createSuper(Hello);

            function Hello() {
              _classCallCheck(this, Hello);

              return _super2.apply(this, arguments);
            }

            _createClass(Hello, [{
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Hello World");
              }
            }]);

            return Hello;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20Hello%20extends%20Component%20%7B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3BHello%20World%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "state"
      }, "State"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "We can use ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@reactive"), " to make attribute reactive"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Use in ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX")), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Mutate it to update in callbacks")), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class, _descriptor, _temp;

          module.exports = (_class = (_temp = /*#__PURE__*/function (_Component3) {
            _inherits(CounterApp, _Component3);

            var _super3 = _createSuper(CounterApp);

            function CounterApp() {
              var _this;

              _classCallCheck(this, CounterApp);

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this = _super3.call.apply(_super3, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this), "count", _descriptor, _assertThisInitialized(_this));

              return _this;
            }

            _createClass(CounterApp, [{
              key: "inc",
              value: function inc() {
                this.count++;
              }
            }, {
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", this.count, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")));
              }
            }]);

            return CounterApp;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20extends%20Component%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20Counter%3A%20%7Bthis.count%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "computed"
      }, "Computed"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@computed get x()"), " to create computed"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "computed result is same with reactive but readonly")), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        id: "example"
      }, "Example"), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class3, _descriptor2, _temp2;

          module.exports = (_class3 = (_temp2 = /*#__PURE__*/function (_Component4) {
            _inherits(CounterApp, _Component4);

            var _super4 = _createSuper(CounterApp);

            function CounterApp() {
              var _this2;

              _classCallCheck(this, CounterApp);

              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              _this2 = _super4.call.apply(_super4, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this2), "count", _descriptor2, _assertThisInitialized(_this2));

              return _this2;
            }

            _createClass(CounterApp, [{
              key: "inc",
              value: function inc() {
                this.count++;
              }
            }, {
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, " Counter: ", this.count, " "), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, " Double: ", this.doubleCount, " "), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")));
              }
            }, {
              key: "doubleCount",
              get: function get() {
                return this.count * 2;
              }
            }]);

            return CounterApp;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          }), _applyDecoratedDescriptor(_class3.prototype, "doubleCount", [overdom__WEBPACK_IMPORTED_MODULE_0__.computed], Object.getOwnPropertyDescriptor(_class3.prototype, "doubleCount"), _class3.prototype)), _class3);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20extends%20Component%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20%40computed%20get%20doubleCount()%20%7B%0A%20%20%20%20%20%20%20%20return%20this.count%20*%202%3B%0A%20%20%20%20%7D%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Counter%3A%20%7Bthis.count%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Double%3A%20%7Bthis.doubleCount%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "component"
      }, "Component"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Class with extends ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "Component"), " is a component"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "this.props"), " is props reactive object")), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class5, _descriptor3, _temp3;

          var Display = /*#__PURE__*/function (_Component5) {
            _inherits(Display, _Component5);

            var _super5 = _createSuper(Display);

            function Display() {
              _classCallCheck(this, Display);

              return _super5.apply(this, arguments);
            }

            _createClass(Display, [{
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "I will display count from ", '<Display/>', ": ", this.props.count);
              }
            }]);

            return Display;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component);

          module.exports = (_class5 = (_temp3 = /*#__PURE__*/function (_Component6) {
            _inherits(CounterApp, _Component6);

            var _super6 = _createSuper(CounterApp);

            function CounterApp() {
              var _this3;

              _classCallCheck(this, CounterApp);

              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              _this3 = _super6.call.apply(_super6, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this3), "count", _descriptor3, _assertThisInitialized(_this3));

              return _this3;
            }

            _createClass(CounterApp, [{
              key: "inc",
              value: function inc() {
                this.count++;
              }
            }, {
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(Display, {
                  count: this.count
                }), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")));
              }
            }]);

            return CounterApp;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp3), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class5);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("class%20Display%20extends%20Component%20%7B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bp%26gt%3BI%20will%20display%20count%20from%20%7B%26%23039%3B%26lt%3BDisplay%2F%26gt%3B%26%23039%3B%7D%3A%20%7Bthis.props.count%7D%26lt%3B%2Fp%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aexport%20default%20class%20CounterApp%20extends%20Component%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3BDisplay%20count%3D%7Bthis.count%7D%2F%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "logic"
      }, "Logic"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        id: "if"
      }, "$if"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Use ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "$if"), " to do a switch logic in ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX"), "."), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class7, _descriptor4, _temp4;

          module.exports = (_class7 = (_temp4 = /*#__PURE__*/function (_Component7) {
            _inherits(CounterApp, _Component7);

            var _super7 = _createSuper(CounterApp);

            function CounterApp() {
              var _this4;

              _classCallCheck(this, CounterApp);

              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }

              _this4 = _super7.call.apply(_super7, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this4), "count", _descriptor4, _assertThisInitialized(_this4));

              return _this4;
            }

            _createClass(CounterApp, [{
              key: "inc",
              value: function inc() {
                this.count++;
              }
            }, {
              key: "render",
              value: function render() {
                var _this5 = this;

                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", this.count, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "count >= 3 :", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$if)( // cond
                function () {
                  return _this5.count >= 3;
                }, // yes
                function () {
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "YES ", _this5.count);
                }, // NO
                function () {
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "NO ", _this5.count);
                })));
              }
            }]);

            return CounterApp;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp4), (_descriptor4 = _applyDecoratedDescriptor(_class7.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class7);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20extends%20Component%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20Counter%3A%20%7Bthis.count%7D%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3Bcount%20%26gt%3B%3D%203%20%3A%20%0A%20%20%20%20%20%20%20%20%7B%24if(%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20cond%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20this.count%20%26gt%3B%3D%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20yes%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BYES%20%7Bthis.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20NO%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BNO%20%7Bthis.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        id: "map"
      }, "$map"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Use ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "$map"), " for a list map"), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class9, _descriptor5, _temp5;

          var count = 0;
          module.exports = (_class9 = (_temp5 = /*#__PURE__*/function (_Component8) {
            _inherits(App, _Component8);

            var _super8 = _createSuper(App);

            function App() {
              var _this6;

              _classCallCheck(this, App);

              for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
              }

              _this6 = _super8.call.apply(_super8, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this6), "list", _descriptor5, _assertThisInitialized(_this6));

              return _this6;
            }

            _createClass(App, [{
              key: "addTodo",
              value: function addTodo() {
                // use array.push/splice/shift/unshift to mutate
                this.list.push('new todo' + count++);
              }
            }, {
              key: "render",
              value: function render() {
                var _this7 = this;

                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.addTodo
                }, "ADD TODO"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$map)(this.list, // array
                function (item) {
                  // map
                  // item.value mean item
                  // item.index mean index
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "[", item.index, "] ", item.value, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                    onClick: function onClick() {
                      return _this7.list.splice(item.index, 1);
                    }
                  }, "REMOVE"));
                }, function (item) {
                  // key map, alternative to <li key> in React
                  // must be string or number, and keep unique in list
                  return item.value;
                }));
              }
            }]);

            return App;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp5), (_descriptor5 = _applyDecoratedDescriptor(_class9.prototype, "list", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return ['test' + count++];
            }
          })), _class9);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("let%20count%20%3D%200%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20%40reactive%20list%20%3D%20%5B%26%23039%3Btest%26%23039%3B%20%2B%20count%20%2B%2B%5D%3B%0A%0A%20%20addTodo()%20%7B%0A%20%20%20%20%20%20%2F%2F%20use%20array.push%2Fsplice%2Fshift%2Funshift%20to%20mutate%0A%20%20%20%20%20%20this.list.push(%26%23039%3Bnew%20todo%26%23039%3B%20%2B%20count%20%2B%2B)%3B%0A%20%20%7D%0A%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20%26lt%3Bul%26gt%3B%0A%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.addTodo%7D%26gt%3BADD%20TODO%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%7B%24map(%0A%20%20%20%20%20%20%20%20%20%20this.list%2C%20%20%2F%2F%20array%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20map%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.value%20mean%20item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.index%20mean%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7Bitem.index%7D%5D%20%7Bitem.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.list.splice(item.index%2C%201)%7D%26gt%3BREMOVE%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20key%20map%2C%20alternative%20to%20%26lt%3Bli%20key%26gt%3B%20in%20React%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20must%20be%20string%20or%20number%2C%20and%20keep%20unique%20in%20list%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20item.value%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%26lt%3B%2Ful%26gt%3B%3B%0A%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "todo-example"
      }, "Todo Example"), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class11, _descriptor6, _descriptor7, _temp6;

          var count = 0;
          module.exports = (_class11 = (_temp6 = /*#__PURE__*/function (_Component9) {
            _inherits(App, _Component9);

            var _super9 = _createSuper(App);

            function App() {
              var _this8;

              _classCallCheck(this, App);

              for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
              }

              _this8 = _super9.call.apply(_super9, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this8), "list", _descriptor6, _assertThisInitialized(_this8));

              _initializerDefineProperty(_assertThisInitialized(_this8), "input", _descriptor7, _assertThisInitialized(_this8));

              return _this8;
            }

            _createClass(App, [{
              key: "addTodo",
              value: function addTodo() {
                // use array.push/splice/shift/unshift to mutate
                this.list.push({
                  id: count++,
                  text: this.input,
                  completed: false
                });
                this.input = '';
              }
            }, {
              key: "handleSwap",
              value: function handleSwap(index) {
                // use splice to swap items
                // reactive array can not track native swap
                var temp = [this.list[index], this.list[index + 1]];
                this.list.splice(index, 2, temp[1], temp[0]);
              }
            }, {
              key: "render",
              value: function render() {
                var _this9 = this;

                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
                  value: this.input,
                  onInput: function onInput(e) {
                    return _this9.input = e.target.value;
                  }
                }), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.addTodo
                }, "ADD TODO"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$map)(this.list, // array
                function (item) {
                  // map
                  // item.value mean item
                  // item.index mean index
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "[", item.index, "] ", item.value.text, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                    onClick: function onClick() {
                      return _this9.list.splice(item.index, 1);
                    }
                  }, "REMOVE"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$if)(function () {
                    return item.index < _this9.list.length - 1;
                  }, function () {
                    return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                      onClick: function onClick() {
                        return _this9.handleSwap(item.index);
                      }
                    }, "SWAP NEXT");
                  }, function () {
                    return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "[THE LAST]");
                  }));
                }, function (item) {
                  // key map, alternative to <li key> in React
                  // must be string or number, and keep unique in list
                  return item.value.id;
                }));
              }
            }]);

            return App;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp6), (_descriptor6 = _applyDecoratedDescriptor(_class11.prototype, "list", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return [{
                id: count++,
                text: 'todo',
                completed: false
              }];
            }
          }), _descriptor7 = _applyDecoratedDescriptor(_class11.prototype, "input", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return '';
            }
          })), _class11);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("let%20count%20%3D%200%3B%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20%40reactive%20list%20%3D%20%5B%7B%0A%20%20%20%20id%3A%20count%2B%2B%2C%0A%20%20%20%20text%3A%20%26%23039%3Btodo%26%23039%3B%2C%0A%20%20%20%20completed%3A%20false%2C%0A%20%20%7D%5D%3B%0A%20%20%40reactive%20input%20%3D%20%26%23039%3B%26%23039%3B%3B%0A%0A%20%20addTodo()%20%7B%0A%20%20%20%20%20%20%2F%2F%20use%20array.push%2Fsplice%2Fshift%2Funshift%20to%20mutate%0A%20%20%20%20%20%20this.list.push(%7B%0A%20%20%20%20%20%20%20%20id%3A%20count%2B%2B%2C%0A%20%20%20%20%20%20%20%20text%3A%20this.input%2C%0A%20%20%20%20%20%20%20%20completed%3A%20false%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20this.input%20%3D%20%26%23039%3B%26%23039%3B%3B%0A%20%20%7D%0A%0A%20%20handleSwap(index)%20%7B%0A%20%20%20%20%2F%2F%20use%20splice%20to%20swap%20items%0A%20%20%20%20%2F%2F%20reactive%20array%20can%20not%20track%20native%20swap%0A%20%20%20%20const%20temp%20%3D%20%5Bthis.list%5Bindex%5D%2C%20this.list%5Bindex%20%2B%201%5D%5D%3B%0A%20%20%20%20this.list.splice(index%2C%202%2C%20temp%5B1%5D%2C%20temp%5B0%5D)%3B%0A%20%20%7D%0A%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20%26lt%3Bul%26gt%3B%0A%20%20%20%20%20%20%26lt%3Binput%20value%3D%7Bthis.input%7D%20onInput%3D%7B(e)%20%3D%26gt%3B%20this.input%20%3D%20e.target.value%7D%26gt%3B%26lt%3B%2Finput%26gt%3B%0A%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.addTodo%7D%26gt%3BADD%20TODO%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%7B%24map(%0A%20%20%20%20%20%20%20%20%20%20this.list%2C%20%20%2F%2F%20array%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20map%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.value%20mean%20item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.index%20mean%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7Bitem.index%7D%5D%20%7Bitem.value.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.list.splice(item.index%2C%201)%7D%26gt%3BREMOVE%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%24if(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20item.index%20%26lt%3B%20this.list.length%20-%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.handleSwap(item.index)%7D%26gt%3BSWAP%20NEXT%26lt%3B%2Fbutton%26gt%3B%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bspan%26gt%3B%5BTHE%20LAST%5D%26lt%3B%2Fspan%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20key%20map%2C%20alternative%20to%20%26lt%3Bli%20key%26gt%3B%20in%20React%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20must%20be%20string%20or%20number%2C%20and%20keep%20unique%20in%20list%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20item.value.id%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%26lt%3B%2Ful%26gt%3B%3B%0A%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "lifecycle"
      }, "LifeCycle"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "onMount()"), " will be called after component's DOM is append to document"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "onDestory()"), " will be called after component's DOM is removed from document")), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class13, _descriptor8, _temp7;

          var ComponentOne = /*#__PURE__*/function (_Component10) {
            _inherits(ComponentOne, _Component10);

            var _super10 = _createSuper(ComponentOne);

            function ComponentOne() {
              _classCallCheck(this, ComponentOne);

              return _super10.apply(this, arguments);
            }

            _createClass(ComponentOne, [{
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "ONE");
              }
            }, {
              key: "onMount",
              value: function onMount() {
                console.log('mount one');
              }
            }, {
              key: "onDestory",
              value: function onDestory() {
                console.log('one destoryed');
              }
            }]);

            return ComponentOne;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component);

          var ComponentTwo = /*#__PURE__*/function (_Component11) {
            _inherits(ComponentTwo, _Component11);

            var _super11 = _createSuper(ComponentTwo);

            function ComponentTwo() {
              _classCallCheck(this, ComponentTwo);

              return _super11.apply(this, arguments);
            }

            _createClass(ComponentTwo, [{
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "TWO");
              }
            }, {
              key: "onMount",
              value: function onMount() {
                console.log('mount two');
              }
            }, {
              key: "onDestory",
              value: function onDestory() {
                console.log('two destoryed');
              }
            }]);

            return ComponentTwo;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component);

          module.exports = (_class13 = (_temp7 = /*#__PURE__*/function (_Component12) {
            _inherits(App, _Component12);

            var _super12 = _createSuper(App);

            function App() {
              var _this10;

              _classCallCheck(this, App);

              for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
              }

              _this10 = _super12.call.apply(_super12, [this].concat(args));

              _initializerDefineProperty(_assertThisInitialized(_this10), "isComponentOne", _descriptor8, _assertThisInitialized(_this10));

              return _this10;
            }

            _createClass(App, [{
              key: "handleClick",
              value: function handleClick() {
                this.isComponentOne = !this.isComponentOne;
              }
            }, {
              key: "render",
              value: function render() {
                var Comp = this.component;
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.handleClick
                }, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(Comp, null));
              }
            }, {
              key: "component",
              get: function get() {
                return this.isComponentOne ? ComponentOne : ComponentTwo;
              }
            }]);

            return App;
          }(overdom__WEBPACK_IMPORTED_MODULE_0__.Component), _temp7), (_descriptor8 = _applyDecoratedDescriptor(_class13.prototype, "isComponentOne", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return true;
            }
          }), _applyDecoratedDescriptor(_class13.prototype, "component", [overdom__WEBPACK_IMPORTED_MODULE_0__.computed], Object.getOwnPropertyDescriptor(_class13.prototype, "component"), _class13.prototype)), _class13);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("class%20ComponentOne%20extends%20Component%20%7B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3BONE%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%20%20%20%20onMount()%20%7B%0A%20%20%20%20%20%20%20%20console.log(%26%23039%3Bmount%20one%26%23039%3B)%3B%0A%20%20%20%20%7D%0A%20%20%20%20onDestory()%20%7B%0A%20%20%20%20%20%20%20%20console.log(%26%23039%3Bone%20destoryed%26%23039%3B)%3B%0A%20%20%20%20%7D%0A%7D%0Aclass%20ComponentTwo%20extends%20Component%20%7B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3BTWO%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%20%20%20%20onMount()%20%7B%0A%20%20%20%20%20%20%20%20console.log(%26%23039%3Bmount%20two%26%23039%3B)%3B%0A%20%20%20%20%7D%0A%20%20%20%20onDestory()%20%7B%0A%20%20%20%20%20%20%20%20console.log(%26%23039%3Btwo%20destoryed%26%23039%3B)%3B%0A%20%20%20%20%7D%0A%7D%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20%20%20%40reactive%20isComponentOne%20%3D%20true%3B%0A%20%20%20%20%40computed%20get%20component()%20%7B%0A%20%20%20%20%20%20return%20this.isComponentOne%20%3F%20ComponentOne%3A%20ComponentTwo%3B%0A%20%20%20%20%7D%0A%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20this.isComponentOne%20%3D%20!this.isComponentOne%3B%0A%20%20%20%20%7D%0A%20%20%20%20render%20()%20%7B%0A%20%20%20%20%20%20const%20Comp%20%3D%20this.component%3B%0A%20%20%20%20%20%20return%20%26lt%3Bbutton%20onClick%3D%7Bthis.handleClick%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3BComp%20%2F%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fbutton%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "playground"
      }, "PlayGround"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Play online with ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        href: "https://codesandbox.io/s/naughty-hill-ugkgj?file=/src/index.tsx"
      }, "CodeSandbox")));
    }
  }]);

  return Demo;
}(overdom__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/classnames/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_exports__ */
/*! CommonJS bailout: module.exports is used directly at 41:38-52 */
/*! CommonJS bailout: module.exports is used directly at 43:2-16 */
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./helper/code-box/index.less":
/*!************************************!*\
  !*** ./helper/code-box/index.less ***!
  \************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.tsx");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi9oZWxwZXIvY29kZS1ib3gvaW5kZXgudHN4Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2JhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL3JlYWN0aXZlLnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uLi9zcmMvZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9kb2MvZ2V0LXN0YXJ0ZWQubWQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4Lmxlc3M/OTZjNSIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJodG1sRGVjb2RlIiwiaW5wdXQiLCJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIm5vZGVWYWx1ZSIsIkNvZGVib3giLCJwcm9wcyIsImNvZGUiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJfX2h0bWwiLCJyZWFjdGl2ZSIsIkxvZ28iLCJIZWFkZXIiLCJBcHAiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tzIiwiZGVmZXJUYXNrcyIsInRpbWVyIiwic2NoZWR1bGUiLCJ0YXNrIiwiZGVmZXIiLCJzZXRUaW1lb3V0IiwidGFza0l0ZW1zIiwiQXJyYXkiLCJkZWZlckl0ZW1zIiwidGFza0l0ZW0iLCJpbnNlcnQiLCJhcnJheSIsImluZGV4IiwiaXRlbSIsIlJlZlN5bWJvbCIsIlN5bWJvbCIsImlzUmVmIiwiciIsImhpZGVSZWZNb2RlIiwid3JhcEZuSGlkZVJlZk1vZGUiLCJmbiIsInRlbXAiLCJydW5JblJlZk1vZGUiLCJjYiIsInJ1bkluSGlkZVJlZk1vZGUiLCJwcm94eU9iak1hcCIsIkRlcHNNYW5hZ2VyIiwiX2FkZERlcCIsIl9nZXREZXBzIiwiYmVnaW5Db2xsZWN0IiwiZW5kQ29sbGVjdCIsInRyYWNrIiwidHJpZ2dlciIsImRlcHMiLCJkZXAiLCJkZXBzTWFuYWdlciIsIkF1dG9ydW5SZWZJbXBsIiwiX3J1biIsImNyZWF0ZUF1dG9ydW4iLCJSZWZJbXBsIiwidmFsIiwiQ29tcHV0ZWRSZWZJbXBsIiwiX3JlY29tcHV0ZSIsImxhc3RWYWx1ZSIsIlByb3h5UmVmU3ltYm9sIiwidGFyZ2V0IiwicHJveHlNYXAiLCJjcmVhdGVSZWFjdGl2ZSIsIm9iaiIsImFsbFJlYWN0aXZlIiwicmVmIiwiTUVUQV9UWVBFIiwibWV0YXNNYXAiLCJtZXRhcyIsInJlYWN0aXZlQ29tcG9uZW50IiwiaW5zIiwiY29tcCIsInByb3RvdHlwZSIsImtleSIsImFkZE1ldGEiLCJjb21wdXRlZCIsImF1dG9ydW4iLCJQcm94eVJlZkltcGwiLCJfYWxsUmVhY3RpdmUiLCJnZXRNZXRhS2V5cyIsIk9iamVjdCIsIl9pbml0QXV0b3J1biIsInZhbHVlIiwiX2luaXRQcm94eSIsInRoYXQiLCJyZWZNYXAiLCJwcm94eSIsImdldCIsImFyZ3MiLCJsZW4iLCJjb3VudCIsImluc2VydHMiLCJpbnNlcnRzTGVuIiwiaSIsImdldFJlZiIsImlzUHJveHlSZWYiLCJzZXQiLCJtZXRhIiwicmVzdWx0IiwiZ2V0dGVyIiwibmV3VmFsIiwiRnJhZ21lbnQiLCJjb25zdHJ1Y3RvciIsImFwcGVuZENoaWxkIiwibm9kZSIsImFwcGVuZFRvQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY29udGFpbmVyRnJhZ21lbnQiLCJvbk1vdW50Iiwib25EZXN0b3J5IiwicmVwbGFjZVdpdGgiLCJmcmFnbWVudCIsInJhbmdlIiwiY3JlYXRlRW1wdHkiLCJpbnNlcnRCZWZvcmVUb0NvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwicGFyZW50Iiwic3RhcnRQb3MiLCJnZXRGaXJzdE5vZGUiLCJGcmFnbWVudExpc3QiLCJhcHBlbmRGcmFnbWVudCIsImNoaWxkIiwicmVtb3ZlV2l0aEtleXMiLCJrZXlzIiwibW92ZSIsImluc2VydEJlZm9yZSIsImluc2VydEJlZm9yZU5vZGUiLCJkZWxldGVJbmRleCIsInRvSW5kZXgiLCJkaXJlY3RpdmUiLCJmdW5jIiwiaXNEaXJlY3RpdmUiLCIkaWYiLCJjb25kIiwieWVzIiwibm8iLCJpbml0ZWQiLCJuZXdSZXN1bHQiLCJsYXN0UmVzdWx0IiwibGFzdEZyYWdtZW50IiwibmV3RnJhZ21lbnQiLCIkbWFwIiwicmF3TGlzdCIsIm1hcEZ1bmMiLCJrZXlGdW5jIiwibGlzdCIsImxpc3REYXRhIiwibGFzdFJlYWN0aXZlSXRlbXMiLCJjcmVhdGVSZWFjdGl2ZUl0ZW0iLCJmcmFnbWVudExpc3QiLCJtYXBGdW5jV3JhcCIsImtleUZ1bmNXcmFwIiwiY29uc29sZSIsImxhc3RGcmFnbWVudHMiLCJsYXN0S2V5cyIsIm5ld0xpc3QiLCJub3RyYWNrIiwibmV3S2V5cyIsImxhc3RJbmRleCIsInJlYWN0aXZlSXRlbSIsImZyb21JbmRleCIsInJlbW92ZWQiLCJodG1sIiwibmV3VmFsdWUiLCJpc0V2ZW50IiwiZXZlbnROYW1lIiwibGFzdFZhbHVlRXZlbnRIYW5kbGVyIiwic2V0QXR0ciIsImgiLCJ0eXBlIiwiY2hpbGRyZW4iLCJ0YWciLCJiaW5kQXR0ciIsInJlYWN0aXZlVmFsIiwidGV4dE5vZGUiLCJidWlsZENvbXBvbmVudCIsImZyYWciLCJuZXdGcmFnIiwiRGVtbyIsIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbmMiLCJkb3VibGVDb3VudCIsIkRpc3BsYXkiLCJwdXNoIiwiYWRkVG9kbyIsInNwbGljZSIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsImhhbmRsZVN3YXAiLCJDb21wb25lbnRPbmUiLCJsb2ciLCJDb21wb25lbnRUd28iLCJpc0NvbXBvbmVudE9uZSIsIkNvbXAiLCJoYW5kbGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQ3RCLE1BQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVI7QUFDQUYsR0FBQyxDQUFDRyxTQUFGLEdBQWNKLEtBQWQsQ0FGc0IsQ0FHdEI7O0FBQ0EsU0FBT0MsQ0FBQyxDQUFDSSxVQUFGLENBQWFDLE1BQWIsS0FBd0IsQ0FBeEIsR0FBNEIsRUFBNUIsR0FBaUNMLENBQUMs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Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCBoLCBhdXRvcnVuLCBDb21wb25lbnQgfSBmcm9tIFwib3ZlcmRvbVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuZnVuY3Rpb24gaHRtbERlY29kZShpbnB1dCl7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGUuaW5uZXJIVE1MID0gaW5wdXQ7XG4gICAgLy8gaGFuZGxlIGNhc2Ugb2YgZW1wdHkgaW5wdXRcbiAgICByZXR1cm4gZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVib3ggZXh0ZW5kcyBDb21wb25lbnQ8e1xuICAgIGNvbXBvbmVudDogRnVuY3Rpb24sXG4gICAgY29kZTogc3RyaW5nLFxufT4ge1xuICAgIEByZWFjdGl2ZSBjb2RlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuY29kZSA9IHByb3BzLmNvZGU7XG4gICAgfVxuXG4gICAgb25Nb3VudCgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvZGUgPSBQcmlzbS5oaWdobGlnaHQoaHRtbERlY29kZSh0aGlzLmNvZGUpLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvZGVib3hcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHByZT48Y29kZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5jb2RlfX0+PC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtb1wiPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGgsXG59IGZyb20gJ292ZXJkb20nO1xuXG5jbGFzcyBMb2dvIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCIgXG4gICAgICAgID5cbiAgICAgICAgPC9pbWc+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICB9O1xufVxuIiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHJlbmRlciwgIGgsIHJlYWN0aXZlIH0gZnJvbSAnb3ZlcmRvbSc7XG5cbmltcG9ydCBEb2NHZXRTdGFydGVkIGZyb20gJy4vZG9jL2dldC1zdGFydGVkLm1kJztcblxuY2xhc3MgQXBwIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RG9jR2V0U3RhcnRlZC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJjb25zdCB0YXNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcbmNvbnN0IGRlZmVyVGFza3M6IFNldDxGdW5jdGlvbj4gPSBuZXcgU2V0KCk7XG5cbmxldCB0aW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlKHRhc2s6IEZ1bmN0aW9uLCBkZWZlciA9IGZhbHNlKSB7XG4gIGlmIChkZWZlcikge1xuICAgIGRlZmVyVGFza3MuYWRkKHRhc2spO1xuICB9IGVsc2Uge1xuICAgIHRhc2tzLmFkZCh0YXNrKTtcbiAgfVxuICBpZiAoIXRpbWVyKSB7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGNvbnN0IHRhc2tJdGVtcyA9IEFycmF5LmZyb20odGFza3MudmFsdWVzKCkpO1xuICAgICAgdGFza3MuY2xlYXIoKTtcbiAgICAgIGNvbnN0IGRlZmVySXRlbXMgPSBBcnJheS5mcm9tKGRlZmVyVGFza3MudmFsdWVzKCkpO1xuICAgICAgZGVmZXJUYXNrcy5jbGVhcigpO1xuICAgICAgdGFza0l0ZW1zLmNvbmNhdChkZWZlckl0ZW1zKS5mb3JFYWNoKHRhc2tJdGVtID0+IHtcbiAgICAgICAgdGFza0l0ZW0oKTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5zZXJ0PFQ+KGFycmF5OiBBcnJheTxUPiwgaW5kZXg6IG51bWJlciwgaXRlbTogVCkge1xuICBhcnJheS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmFuZ2VGcm9tTm9kZXMobm9kZXM6IE5vZGVbXSkge1xuICBjb25zdCBwYXJlbnQgPSBub2Rlc1swXS5wYXJlbnROb2RlO1xuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIGNvbnN0IHN0YXJ0UG9zID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQ/LmNoaWxkTm9kZXMsIG5vZGVzWzBdKTtcbiAgcmFuZ2Uuc2V0U3RhcnQocGFyZW50ISwgc3RhcnRQb3MpO1xuICByYW5nZS5zZXRFbmQocGFyZW50ISwgc3RhcnRQb3MgKyBub2Rlcy5sZW5ndGgpO1xuICByZXR1cm4gcmFuZ2U7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2gnO1xuXG5jb25zdCBSZWZTeW1ib2wgPSBTeW1ib2woJ3JlZicpO1xuY29uc3QgSW50ZXJuYWxSYXdTeW1ib2wgPSBTeW1ib2woJ2ludGVybmFsX3JhdycpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWY8VD4ocjogUmVmPFQ+IHwgdW5rbm93bik6IHIgaXMgUmVmPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmKHI6IGFueSk6IHIgaXMgUmVmIHtcbiAgcmV0dXJuIHIgJiYgKHIgYXMgUmVmKVtSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWY8VD4ocmVmOiBUKTogVCBleHRlbmRzIFJlZjxpbmZlciBWPiA/IFYgOiBUIHtcbiAgcmV0dXJuIGlzUmVmKHJlZikgPyAocmVmLnZhbHVlIGFzIGFueSkgOiByZWY7XG59XG5cbnR5cGUgS2V5ID0gc3RyaW5nIHwgc3ltYm9sIHwgbnVtYmVyO1xuXG5sZXQgaGlkZVJlZk1vZGUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBGbkhpZGVSZWZNb2RlPFQgZXh0ZW5kcyBGdW5jdGlvbj4oZm46IFQpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgIGxldCB0ZW1wID0gaGlkZVJlZk1vZGU7XG4gICAgaGlkZVJlZk1vZGUgPSB0cnVlO1xuICAgIGNvbnN0IHIgPSBmbiguLi5hcmdzKTtcbiAgICBoaWRlUmVmTW9kZSA9IHRlbXA7XG4gICAgcmV0dXJuIHI7XG4gIH0gYXMgdW5rbm93bikgYXMgVDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcnVuSW5SZWZNb2RlKGNiOiBGdW5jdGlvbikge1xuICBsZXQgdGVtcCA9IGhpZGVSZWZNb2RlO1xuICBoaWRlUmVmTW9kZSA9IGZhbHNlO1xuICBjb25zdCByID0gY2IoKTtcbiAgaGlkZVJlZk1vZGUgPSB0ZW1wO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkluSGlkZVJlZk1vZGUoY2I6IEZ1bmN0aW9uKSB7XG4gIGxldCB0ZW1wID0gaGlkZVJlZk1vZGU7XG4gIGhpZGVSZWZNb2RlID0gdHJ1ZTtcbiAgY29uc3QgciA9IGNiKCk7XG4gIGhpZGVSZWZNb2RlID0gdGVtcDtcbiAgcmV0dXJuIHI7XG59XG5cbmNvbnN0IHByb3h5T2JqTWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBPYmplY3Q+KCk7XG5cbmNsYXNzIERlcHNNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY29sbGVjdGluZzogVHJpZ2dlcmFibGVSZWZbXSA9IFtdO1xuICBwcml2YXRlIF9kZXBzID0gbmV3IFdlYWtNYXA8UmVmLCBTZXQ8VHJpZ2dlcmFibGVSZWY+PigpO1xuXG4gIHByaXZhdGUgX2FkZERlcCh0YXJnZXQ6IFJlZiwgdHJpZ2dlcjogVHJpZ2dlcmFibGVSZWYpIHtcbiAgICBpZiAoIXRoaXMuX2RlcHMuaGFzKHRhcmdldCkpIHtcbiAgICAgIHRoaXMuX2RlcHMuc2V0KHRhcmdldCwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgdGhpcy5fZGVwcy5nZXQodGFyZ2V0KSEuYWRkKHRyaWdnZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGVwcyh0YXJnZXQ6IFJlZikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2RlcHMuZ2V0KHRhcmdldCk/LnZhbHVlcygpIHx8IFtdKTtcbiAgfVxuXG4gIGJlZ2luQ29sbGVjdChyZWY6IFRyaWdnZXJhYmxlUmVmKSB7XG4gICAgdGhpcy5fY29sbGVjdGluZy5wdXNoKHJlZik7XG4gIH1cblxuICBlbmRDb2xsZWN0KCkge1xuICAgIHRoaXMuX2NvbGxlY3RpbmcucG9wKCk7XG4gIH1cblxuICB0cmFjayh0YXJnZXQ6IFJlZikge1xuICAgIGlmICh0aGlzLl9jb2xsZWN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FkZERlcCh0YXJnZXQsIHRoaXMuX2NvbGxlY3RpbmdbdGhpcy5fY29sbGVjdGluZy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlcih0YXJnZXQ6IFJlZikge1xuICAgIGNvbnN0IGRlcHMgPSB0aGlzLl9nZXREZXBzKHRhcmdldCk7XG4gICAgZGVwcy5mb3JFYWNoKGRlcCA9PiBkZXAudHJpZ2dlcigpKTtcbiAgfVxufVxuXG5jb25zdCBkZXBzTWFuYWdlciA9IG5ldyBEZXBzTWFuYWdlcigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlZjxUID0gYW55PiB7XG4gIFtSZWZTeW1ib2xdOiBib29sZWFuO1xuICB2YWx1ZTogVDtcbn1cblxuaW50ZXJmYWNlIFRyaWdnZXJhYmxlUmVmPFQgPSBhbnk+IHtcbiAgW1JlZlN5bWJvbF06IGJvb2xlYW47XG4gIHZhbHVlOiBUO1xuICB0cmlnZ2VyOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmF3KHJlZjogUmVmKSB7XG4gIGlmIChpc1Byb3h5UmVmKHJlZikpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHJlZltJbnRlcm5hbFJhd1N5bWJvbF07XG4gIH1cbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmVmLl92YWx1ZTtcbn1cblxuZXhwb3J0IHR5cGUgTm9UcmFja0ZuID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG5jbGFzcyBBdXRvcnVuUmVmSW1wbCB7XG4gIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZuOiAobm90cmFja0ZuOiBOb1RyYWNrRm4pID0+IHZvaWQpIHtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3J1bigpIHtcbiAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBGbkhpZGVSZWZNb2RlKHRoaXMuX2ZuKS5jYWxsKHRoaXMsIChmbjogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgLy8gbm8gdHJhY2sgZm5cbiAgICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgICAgIGZuKCk7XG4gICAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgfSk7XG4gICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0b3J1bihmbjogKG5vdHJhY2tGbjogTm9UcmFja0ZuKSA9PiB2b2lkKSB7XG4gIHJldHVybiBuZXcgQXV0b3J1blJlZkltcGwoZm4pO1xufVxuXG5jbGFzcyBSZWZJbXBsPFQgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92YWx1ZTogVCkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbDogVCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIENvbXB1dGVkUmVmSW1wbDxUID0gYW55PiB7XG4gIHB1YmxpYyBbUmVmU3ltYm9sXSA9IHRydWU7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlITogVDtcbiAgcHJpdmF0ZSBfY29tcHV0ZTogKCkgPT4gVDtcblxuICBjb25zdHJ1Y3RvcihnZXR0ZXI6ICgpID0+IFQpIHtcbiAgICB0aGlzLl9jb21wdXRlID0gZ2V0dGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVjb21wdXRlKCkge1xuICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2NvbXB1dGUoKTtcbiAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5fcmVjb21wdXRlKCk7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgbGV0IGxhc3RWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuX3JlY29tcHV0ZSgpO1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBQcm94eVJlZlN5bWJvbCA9IFN5bWJvbCgncHJveHktcmVmJyk7XG5cbmZ1bmN0aW9uIGlzUHJveHlSZWYodGFyZ2V0OiB1bmtub3duKSB7XG4gIHJldHVybiB0YXJnZXQgJiYgKHRhcmdldCBhcyBQcm94eVJlZkltcGw8YW55PilbUHJveHlSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5jb25zdCBwcm94eU1hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgT2JqZWN0PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KG9iajogVCwgYWxsUmVhY3RpdmUgPSBmYWxzZSk6IFQge1xuICBjb25zdCByZWYgPSBuZXcgUHJveHlSZWZJbXBsKG9iaiwgYWxsUmVhY3RpdmUpO1xuICByZXR1cm4gcmVmLnZhbHVlO1xufVxuXG5lbnVtIE1FVEFfVFlQRSB7XG4gIHJlYWN0aXZlLFxuICBjb21wdXRlZCxcbiAgYXV0b3J1bixcbn07XG5cbi8vIG1hcCBPYmplY3QucHJvdG90eXBlIHRvIGl0cyByZWFjdGl2ZSBrZXlzXG5sZXQgbWV0YXNNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE1hcDxLZXksIE1FVEFfVFlQRT4+KCk7XG5cbmZ1bmN0aW9uIGFkZE1ldGEocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5LCB0eXBlOiBNRVRBX1RZUEUpIHtcbiAgaWYgKCFtZXRhc01hcC5oYXMocHJvdG90eXBlKSkge1xuICAgIG1ldGFzTWFwLnNldChwcm90b3R5cGUsIG5ldyBNYXAoKSk7XG4gIH1cbiAgY29uc3QgbWV0YXMgPSBtZXRhc01hcC5nZXQocHJvdG90eXBlKTtcbiAgbWV0YXMhLnNldChrZXksIHR5cGUpO1xufVxuXG5mdW5jdGlvbiBnZXRNZXRhS2V5cyhwcm90b3R5cGU6IE9iamVjdCkge1xuICByZXR1cm4gbWV0YXNNYXAuZ2V0KHByb3RvdHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZUNvbXBvbmVudChjb21wb25lbnQ6IGFueSwgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIGNvbnN0IGlucyA9IG5ldyBjb21wb25lbnQocHJvcHMgfHwge30pO1xuICBjb25zdCBjb21wID0gY3JlYXRlUmVhY3RpdmUoaW5zKSBhcyBhbnkgYXMgQ29tcG9uZW50PGFueT47XG4gIHJldHVybiBjb21wO1xufVxuXG4vKipcbiAqIEByZWFjdGl2ZSBkZWNvcmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhY3RpdmUocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5yZWFjdGl2ZSk7XG59XG5cbi8qKlxuICogQGNvbXB1dGVkIGRlY29yYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZChwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLmNvbXB1dGVkKTtcbn1cblxuLyoqXG4gKiBAY29tcHV0ZWQgZGVjb3JhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9ydW4ocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5hdXRvcnVuKTtcbn1cblxuY2xhc3MgUHJveHlSZWZJbXBsPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHVibGljIFtQcm94eVJlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIHByaXZhdGUgX3Byb3h5OiBUO1xuICBwcml2YXRlIF9tZXRhS2V5cz86IE1hcDxLZXksIE1FVEFfVFlQRT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqOiBULCBwcml2YXRlIF9hbGxSZWFjdGl2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fbWV0YUtleXMgPSBnZXRNZXRhS2V5cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoX29iaikpO1xuICAgIHRoaXMuX3Byb3h5ID0gdGhpcy5faW5pdFByb3h5KF9vYmopO1xuICAgIHRoaXMuX2luaXRBdXRvcnVuKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0QXV0b3J1bigpIHtcbiAgICBpZiAoIXRoaXMuX21ldGFLZXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21ldGFLZXlzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gTUVUQV9UWVBFLmF1dG9ydW4pIHtcbiAgICAgICAgY3JlYXRlQXV0b3J1bigoKHRoaXMuX29iaiBhcyBhbnkpW2tleV0uYmluZCh0aGlzLl9wcm94eSkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRQcm94eShvYmo6IFQpOiBUIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAocHJveHlNYXAuaGFzKG9iaikpIHtcbiAgICAgIHJldHVybiBwcm94eU1hcC5nZXQob2JqKSBhcyBUO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZk1hcCA9IG5ldyBNYXA8S2V5LCBSZWY+KCk7XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldChfLCBrZXkpIHtcbiAgICAgICAgZGVwc01hbmFnZXIudHJhY2sodGhhdCk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdsZW5ndGgnKSByZXR1cm4gb2JqLmxlbmd0aDtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnbWFwJylcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBtYXAoXG4gICAgICAgICAgICAgIGNiOiAoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiBhbnksXG4gICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqLm1hcCgoX2l0ZW06IGFueSwgX2luZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoKHByb3h5IGFzIGFueSlbX2luZGV4XSwgX2luZGV4KTtcbiAgICAgICAgICAgICAgfSwgdGhpc0FyZyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3NwbGljZSddLmluZGV4T2YoXG4gICAgICAgICAgICAgIGtleSBhcyBzdHJpbmdcbiAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwb3AnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKGxlbiAtIDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3NwbGljZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydHMgPSBhcmdzLnNsaWNlKDIpIGFzIGFueVtdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0c0xlbiA9IGluc2VydHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpID49IGluZGV4ICYmIGkgPCBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+PSBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5zZXQoJycgKyAoaSAtIGNvdW50ICsgaW5zZXJ0c0xlbiksIHJlZk1hcC5nZXQoJycgKyBpKSEpO1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKCcnICsgaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9ialtrZXkgYXMgYW55XSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGF0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSBTeW1ib2wuc3BlY2llcykge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZiA9IGdldFJlZihrZXkpO1xuICAgICAgICBpZiAoaXNQcm94eVJlZihyZWYpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlkZVJlZk1vZGUgJiYgaXNSZWYocmVmKSkge1xuICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFJlZihrZXkpO1xuICAgICAgfSxcbiAgICAgIHNldChfLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IGdldFJlZihrZXkpO1xuICAgICAgICBpZiAoaXNSZWYocmVmKSkge1xuICAgICAgICAgIC8vIGlmIG9yaWdpbiByZWYgaXMgbm90IHByb3h5UmVmXG4gICAgICAgICAgLy8gYnV0IHZhbHVlIGlzIGEgb2JqZWN0XG4gICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgKHJlZiBhcyBQcm94eVJlZkltcGwpW1Byb3h5UmVmU3ltYm9sXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmVmTWFwLnNldChrZXksIG5ldyBQcm94eVJlZkltcGwodmFsdWUsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAodGhhdC5fb2JqIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldFJlZiA9IChrZXk6IEtleSk6IFJlZiA9PiB7XG4gICAgICBpZiAocmVmTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiByZWZNYXAuZ2V0KGtleSkhO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuX29iaik7XG4gICAgICBpZiAoIXRoaXMuX21ldGFLZXlzICYmICF0aGlzLl9hbGxSZWFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX29iaiBhcyBhbnkpW2tleV07XG4gICAgICB9XG4gICAgICBjb25zdCBtZXRhID0gdGhpcy5fbWV0YUtleXM/LmdldChrZXkpO1xuICAgICAgbGV0IHJlc3VsdCE6IFJlZjtcblxuICAgICAgaWYgKHRoaXMuX2FsbFJlYWN0aXZlIHx8IG1ldGEgPT09IE1FVEFfVFlQRS5yZWFjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChvYmogYXMgYW55KVtrZXldO1xuICAgICAgICBpZiAoaXNSZWYodmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIHJlYWN0aXZlIG9iamVjdFxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBQcm94eVJlZkltcGwoY3JlYXRlUmVhY3RpdmUodmFsdWUsIHRoaXMuX2FsbFJlYWN0aXZlKSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZS5iaW5kKHRoaXMuX3Byb3h5KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlZlxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZWZJbXBsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtZXRhID09PSBNRVRBX1RZUEUuY29tcHV0ZWQpIHtcbiAgICAgICAgY29uc3QgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSkhLmdldCE7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBDb21wdXRlZFJlZkltcGwod3JhcEZuSGlkZVJlZk1vZGUoZ2V0dGVyLmJpbmQodGhpcy5fcHJveHkpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVmTWFwLnNldChrZXksIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gKHRoaXMgYXMgYW55KS5fb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHIuYmluZCh0aGlzLl9wcm94eSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBwcm94eU1hcC5zZXQob2JqLCBwcm94eSk7XG4gICAgcHJveHlPYmpNYXAuc2V0KHByb3h5LCBvYmopO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fcHJveHk7XG4gIH1cblxuICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgT2JqZWN0LmtleXMobmV3VmFsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAodGhpcy5fcHJveHkgYXMgYW55KVtrZXldID0gKG5ld1ZhbCBhcyBhbnkpW2tleV07XG4gICAgfSk7XG4gICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKGZuOiAoKSA9PiB2b2lkKSB7XG4gIHdyYXBGbkhpZGVSZWZNb2RlKGZuKSgpO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVJdGVtIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaW5zZXJ0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2gnO1xuaW1wb3J0IHsgcnVuSW5IaWRlUmVmTW9kZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnQge1xuICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29udGFpbmVyPzogTm9kZTtcbiAgY2hpbGROb2RlczogTm9kZVtdID0gW107XG4gIGtleT86IG51bWJlciB8IHN0cmluZztcbiAgcmVhY3RpdmVJdGVtPzogUmVhY3RpdmVJdGVtPGFueT47XG5cbiAgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBbXTtcblxuICBzdGF0aWMgaXNGcmFnbWVudChvYmo6IHVua25vd24pIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IChvYmogYXMgT2JqZWN0KS5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT09IEZyYWdtZW50IHx8IGNvbnN0cnVjdG9yID09PSBGcmFnbWVudExpc3Q7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZDogTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZCBhcyBOb2RlO1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUsIGNvbnRhaW5lckZyYWdtZW50OiBGcmFnbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICAgIGlmICh0aGlzLmNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGNvbnRhaW5lckZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRhaW5lckZyYWdtZW50LmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuY29uY2F0KGNvbnRhaW5lckZyYWdtZW50LmNvbXBvbmVudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVuZGVyLCB0cmlnZ2VyIG9uTW91bnRcbiAgICAgICAgdGhpcy5vbk1vdW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCgpIHtcbiAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICBydW5JbkhpZGVSZWZNb2RlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgICAgY29tcC5vbk1vdW50ICYmIGNvbXAub25Nb3VudCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgb25EZXN0b3J5KCkge1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHJ1bkluSGlkZVJlZk1vZGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IHtcbiAgICAgICAgICBjb21wLm9uRGVzdG9yeSAmJiBjb21wLm9uRGVzdG9yeSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgcmVwbGFjZVdpdGgoZnJhZ21lbnQ6IEZyYWdtZW50KSB7XG4gICAgZnJhZ21lbnQuY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmNyZWF0ZVJhbmdlKCk7XG4gICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZShmcmFnbWVudC5mcmFnbWVudCk7XG4gICAgICByYW5nZS5kZXRhY2goKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uRGVzdG9yeSgpO1xuICAgIGZyYWdtZW50Lm9uTW91bnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVtcHR5KCkge1xuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VtcHR5JykpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZVRvQ29udGFpbmVyKGNvbnRhaW5lcjogTm9kZSwgYmVmb3JlTm9kZTogTm9kZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIC8vIGhhcyBhIGNvbnRhaW5lciBhbHJlYWR5XG4gICAgICAvLyByZW1vdmUgc2VsZiBmcm9tIGN1cnJlbnQgY29udGFpbmVyIGZpcnN0XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmZyYWdtZW50LCBiZWZvcmVOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJhbmdlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuY2hpbGROb2Rlc1swXS5wYXJlbnROb2RlITtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKFxuICAgICAgcGFyZW50Py5jaGlsZE5vZGVzLFxuICAgICAgdGhpcy5jaGlsZE5vZGVzWzBdXG4gICAgKTtcbiAgICByYW5nZS5zZXRTdGFydChwYXJlbnQsIHN0YXJ0UG9zKTtcbiAgICByYW5nZS5zZXRFbmQocGFyZW50LCBzdGFydFBvcyArIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfVxuXG4gIGdldEZpcnN0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudExpc3QgZXh0ZW5kcyBGcmFnbWVudCB7XG4gIGNoaWxkRnJhZ21lbnRzOiBGcmFnbWVudFtdID0gW107XG5cbiAgYXBwZW5kRnJhZ21lbnQoY2hpbGQ6IEZyYWdtZW50LCBrZXk6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNoaWxkLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZnJhZ21lbnQsIHRoaXMpO1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMucHVzaChjaGlsZCk7XG4gICAgY2hpbGQua2V5ID0ga2V5O1xuICB9XG5cbiAgaW5zZXJ0KGluZGV4OiBudW1iZXIsIGZyYWdtZW50OiBGcmFnbWVudCwgbmV3S2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBmcmFnbWVudC5rZXkgPSBuZXdLZXk7XG4gICAgZnJhZ21lbnQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIoXG4gICAgICB0aGlzLmNvbnRhaW5lciEsXG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzW2luZGV4XT8uZ2V0Rmlyc3ROb2RlKCkgfHwgbnVsbFxuICAgICk7XG4gICAgaW5zZXJ0KHRoaXMuY2hpbGRGcmFnbWVudHMsIGluZGV4LCBmcmFnbWVudCk7XG4gIH1cblxuICByZW1vdmVXaXRoS2V5cyhrZXlzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoY2hpbGQua2V5ISkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gY2hpbGQ7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gZnJhZ21lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICAgICAgcmFuZ2UuZGV0YWNoKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGluc2VydEJlZm9yZSA9IHRoaXMuY2hpbGRGcmFnbWVudHNbdG9JbmRleF07XG5cbiAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTogTm9kZSB8IG51bGwgPSBpbnNlcnRCZWZvcmU/LmdldEZpcnN0Tm9kZSgpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jaGlsZEZyYWdtZW50c1tmcm9tSW5kZXhdITtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIodGhpcy5jb250YWluZXIhLCBpbnNlcnRCZWZvcmVOb2RlKTtcblxuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCB0b0luZGV4LCB0YXJnZXQpO1xuICAgIGxldCBkZWxldGVJbmRleCA9IGZyb21JbmRleDtcbiAgICBpZiAodG9JbmRleCA8IGZyb21JbmRleCkge1xuICAgICAgZGVsZXRlSW5kZXggKz0gMTtcbiAgICB9XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGcmFnbWVudCwgRnJhZ21lbnRMaXN0IH0gZnJvbSAnLi9mcmFnbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVBdXRvcnVuLCBjcmVhdGVSZWFjdGl2ZSwgUmVmLCBydW5JblJlZk1vZGUsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmU8VCBleHRlbmRzICgpID0+IEZyYWdtZW50PihmdW5jOiBUKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgZnVuYy5fX2lzZGlyZWN0aXZlX18gPSB0cnVlO1xuICByZXR1cm4gZnVuYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0aXZlKHZhbDogYW55KSB7XG4gIHJldHVybiB2YWw/Ll9faXNkaXJlY3RpdmVfXyA9PT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRpZihcbiAgY29uZDogKCkgPT4gYm9vbGVhbixcbiAgeWVzOiAoKSA9PiBGcmFnbWVudCxcbiAgbm86ICgpID0+IEZyYWdtZW50XG4pIHtcbiAgcmV0dXJuIGRpcmVjdGl2ZSgoKSA9PiB7XG4gICAgbGV0IGxhc3RSZXN1bHQ6IGJvb2xlYW47XG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0RnJhZ21lbnQ6IEZyYWdtZW50O1xuXG4gICAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgICBjb25zdCBuZXdSZXN1bHQgPSBjb25kKCk7XG4gICAgICBpZiAoIWluaXRlZCkge1xuICAgICAgICBsYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgICAgICBsYXN0RnJhZ21lbnQgPSBsYXN0UmVzdWx0ISA/IHllcygpIDogbm8oKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdGcmFnbWVudCA9IG5ld1Jlc3VsdCA/IHllcygpIDogbm8oKTtcbiAgICAgIGxhc3RGcmFnbWVudC5yZXBsYWNlV2l0aChuZXdGcmFnbWVudCk7XG4gICAgICBsYXN0RnJhZ21lbnQgPSBuZXdGcmFnbWVudDtcbiAgICAgIGxhc3RSZXN1bHQgPSBuZXdSZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdEZyYWdtZW50ITtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlSXRlbTxUPih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikge1xuICByZXR1cm4gY3JlYXRlUmVhY3RpdmUoe1xuICAgIHZhbHVlLFxuICAgIGluZGV4LFxuICB9LCB0cnVlKTtcbn1cblxuZXhwb3J0IHR5cGUgUmVhY3RpdmVJdGVtPFQ+ID0ge1xuICB2YWx1ZTogVDtcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiAkbWFwPFQ+KFxuICByYXdMaXN0OiBUW10sXG4gIG1hcEZ1bmM6IChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IEZyYWdtZW50LFxuICBrZXlGdW5jOiAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiBzdHJpbmcgfCBudW1iZXJcbikge1xuICBjb25zdCBsaXN0ID0gKHJhd0xpc3QgYXMgYW55KSBhcyBSZWY7XG4gIGNvbnN0IGxpc3REYXRhID0gKGxpc3QgYXMgYW55KSBhcyBUW107XG5cbiAgbGV0IGxhc3RSZWFjdGl2ZUl0ZW1zID0gbGlzdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZUl0ZW0oaXRlbSwgaW5kZXgpO1xuICB9KTtcblxuICBjb25zdCBmcmFnbWVudExpc3QgPSBuZXcgRnJhZ21lbnRMaXN0KCk7XG5cbiAgY29uc3QgbWFwRnVuY1dyYXAgPSAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgbGV0IGZyYWdtZW50OiBGcmFnbWVudDtcbiAgICBydW5JblJlZk1vZGUoKCkgPT4ge1xuICAgICAgZnJhZ21lbnQgPSBtYXBGdW5jKGl0ZW0pO1xuICAgICAgZnJhZ21lbnQucmVhY3RpdmVJdGVtID0gaXRlbTtcbiAgICB9KVxuICAgIHJldHVybiBmcmFnbWVudCE7XG4gIH07XG5cbiAgY29uc3Qga2V5RnVuY1dyYXAgPSB3cmFwRm5IaWRlUmVmTW9kZSgoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgY29uc3QgciA9IGtleUZ1bmMoaXRlbSk7XG4gICAgaWYgKHR5cGVvZiByICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoXG4gICAgICAgICdrZXkgb2YgJG1hcCBzaG91bGQgcmV0dXJuIHN0cmluZyBvciBudW1iZXIsIGJ1dCBnb3QgJyArIHIsXG4gICAgICAgIGtleUZ1bmMudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH0pO1xuXG4gIGxldCBsYXN0RnJhZ21lbnRzID0gbGlzdERhdGEubWFwKChfLCBpbmRleCkgPT5cbiAgICBtYXBGdW5jV3JhcChsYXN0UmVhY3RpdmVJdGVtc1tpbmRleF0pXG4gICk7XG4gIGxldCBsYXN0S2V5cyA9IGxpc3REYXRhLm1hcCgoXywgaW5kZXgpID0+XG4gICAga2V5RnVuY1dyYXAobGFzdFJlYWN0aXZlSXRlbXNbaW5kZXhdKVxuICApO1xuXG4gIGxhc3RGcmFnbWVudHMuZm9yRWFjaCgoZnJhZywgaW5kZXgpID0+IHtcbiAgICBmcmFnbWVudExpc3QuYXBwZW5kRnJhZ21lbnQoZnJhZywgbGFzdEtleXNbaW5kZXhdKTtcbiAgfSk7XG5cbiAgbGV0IGluaXRlZCA9IGZhbHNlO1xuXG4gIGNyZWF0ZUF1dG9ydW4obm90cmFjayA9PiB7XG4gICAgaWYgKCFpbml0ZWQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRlZCA9IGxpc3QubGVuZ3RoO1xuICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ID0gKGxpc3QgYXMgdW5rbm93bikgYXMgYW55W107XG5cbiAgICBub3RyYWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0tleXMgPSBuZXdMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgIGtleUZ1bmNXcmFwKGNyZWF0ZVJlYWN0aXZlSXRlbShpdGVtLCBpbmRleCkpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsYXN0S2V5cyA9IGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5tYXAoaXRlbSA9PiBpdGVtLmtleSEpO1xuXG4gICAgICAvLyBkaWZmIGFuZCBwYXRjaCBmcm9tIGtleXNcbiAgICAgIG5ld0tleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0S2V5cyA9IGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5tYXAoaXRlbSA9PiBpdGVtLmtleSEpO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsYXN0S2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgLy8gaW5zZXJ0XG4gICAgICAgICAgLy8gY2FuIG5vdCBmaW5kIGluIG9sZCBsaXN0LCBtZWFuIGluc2VydFxuICAgICAgICAgIC8vIGluc2VydCB0byBjdXJyZW50IGluZGV4XG4gICAgICAgICAgY29uc3QgcmVhY3RpdmVJdGVtID0gY3JlYXRlUmVhY3RpdmVJdGVtKG5ld0xpc3RbaW5kZXhdLCBpbmRleCk7XG5cbiAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IG1hcEZ1bmNXcmFwKHJlYWN0aXZlSXRlbSk7XG5cbiAgICAgICAgICBmcmFnbWVudExpc3QuaW5zZXJ0KGluZGV4LCBmcmFnbWVudCwga2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgLy8gbW92ZVxuXG4gICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleDtcblxuICAgICAgICAgIGZyYWdtZW50TGlzdC5tb3ZlKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZW1vdmVkID0gbGFzdEtleXMuZmlsdGVyKGtleSA9PiBuZXdLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpO1xuICAgICAgZnJhZ21lbnRMaXN0LnJlbW92ZVdpdGhLZXlzKHJlbW92ZWQpO1xuXG4gICAgICAvLyBhcHBseSBuZXcgcmVhY3RpdmVJbmRleFxuICAgICAgZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLmZvckVhY2goXG4gICAgICAgIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQhLnJlYWN0aXZlSXRlbSEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50TGlzdDtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlQXV0b3J1biwgY3JlYXRlUmVhY3RpdmUsIGlzUmVmLCByZWFjdGl2ZUNvbXBvbmVudCwgUmVmLCBydW5JblJlZk1vZGUsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudChcbiAgY29tcDogKHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4gRnJhZ21lbnQsXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cbikge1xuICBjb25zdCBjb21wb25lbnQgPSByZWFjdGl2ZUNvbXBvbmVudChjb21wIGFzIGFueSwgcHJvcHMpO1xuICBsZXQgZnJhZ21lbnQ6IEZyYWdtZW50O1xuICBydW5JblJlZk1vZGUoKCkgPT4ge1xuICAgIGZyYWdtZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgIGZyYWdtZW50LmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50ITtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxUID0gYW55PiB7XG4gIHByb3BzOiBUO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVCkge1xuICAgIHRoaXMucHJvcHMgPSBjcmVhdGVSZWFjdGl2ZShwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsIGFzIHVua25vd24gYXMgRnJhZ21lbnQ7XG4gIH1cbiAgb25Nb3VudCgpIHt9XG4gIG9uRGVzdG9yeSgpIHt9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHIobm9kZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICBjb25zb2xlLmVycm9yKCdzaG91bGQgYmUgY2xhc3NOYW1lLCBidXQgZ290IGNsYXNzJyk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBrZXkgPSAnY2xhc3MnO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSB2YWx1ZS5fX2h0bWw7XG4gICAgaWYgKGlzUmVmKGh0bWwpKSB7XG4gICAgICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBodG1sLnZhbHVlO1xuICAgICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlZicpIHtcbiAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYSAocmVmKSA9PiB2b2lkXG4gICAgdmFsdWUobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBiaW5kQXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBSZWY8YW55Pikge1xuICBsZXQgbGFzdFZhbHVlID0gdmFsdWUudmFsdWU7XG5cbiAgY29uc3QgaXNFdmVudCA9IC9eb25bQS1aXS8udGVzdChrZXkpO1xuICBjb25zdCBldmVudE5hbWUgPSBpc0V2ZW50ID8ga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpIDogJyc7XG4gIGxldCBsYXN0VmFsdWVFdmVudEhhbmRsZXIgPSBpc0V2ZW50ID8gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlKSA6ICgpID0+IHt9O1xuXG4gIHNjaGVkdWxlKCgpID0+IHtcbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QXR0cihub2RlLCBrZXksIGxhc3RWYWx1ZSk7XG4gIH0pO1xuXG4gIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbGFzdFZhbHVlRXZlbnRIYW5kbGVyID0gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0QXR0cihub2RlLCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9KTtcbiAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoKFxuICB0eXBlOiBzdHJpbmcgfCBGdW5jdGlvbixcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gIC4uLmNoaWxkcmVuOiBzdHJpbmdbXVxuKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50KCk7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChwcm9wcykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIC9eb25bQS1aXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICBiaW5kQXR0cih0YWcsIGtleSwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlVmFsID0gY2hpbGQgYXMgUmVmPGFueT47XG4gICAgICAgICAgY29uc3QgdmFsID0gcmVhY3RpdmVWYWwudmFsdWU7XG5cbiAgICAgICAgICAvLyB0ZXh0bm9kZVxuICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycgKyB2YWwpO1xuICAgICAgICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSByZWFjdGl2ZVZhbC52YWx1ZTtcbiAgICAgICAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGV4dE5vZGUubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGlyZWN0aXZlKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGNoaWxkIGFzICgpID0+IEZyYWdtZW50O1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZGlyZWN0aXZlKCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIodGFnLCBmcmFnbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoRnJhZ21lbnQuaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAoY2hpbGQgYXMgRnJhZ21lbnQpLmFwcGVuZFRvQ29udGFpbmVyKHRhZywgZnJhZ21lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gY29tcG9uZW50XG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzUmVmKHR5cGUpKSB7XG4gICAgLy8gcmVhY3RpdmUgY29tcG9uZW50XG4gICAgY29uc3QgY29tcCA9IHR5cGUgYXMgUmVmO1xuICAgIGxldCBmcmFnOiBGcmFnbWVudDtcbiAgICBjcmVhdGVBdXRvcnVuKChub3RyYWNrKSA9PiB7XG4gICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcC52YWx1ZTtcbiAgICAgICAgbm90cmFjaygoKSA9PiB7XG4gICAgICAgICAgZnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXBvbmVudCwge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3RnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXAudmFsdWUsIHtcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICAgICAgICBmcmFnLnJlcGxhY2VXaXRoKG5ld0ZyYWcpO1xuICAgICAgICBmcmFnID0gbmV3RnJhZztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZyE7XG4gIH1cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGZyYWdtZW50OiBGcmFnbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIsIG51bGwpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBKU1gge1xuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XG4gICAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgaW1wb3J0IHsgaCwgcmVhY3RpdmUsIGNvbXB1dGVkLCBhdXRvcnVuLCAkaWYsICRtYXAsIENvbXBvbmVudCB9IGZyb20gJ292ZXJkb20nO1xuICAgIGltcG9ydCBDb2RlQm94IGZyb20gJy9ob21lL3J1bm5lci93b3JrL292ZXJkb20vb3ZlcmRvbS9wYWNrYWdlcy9vdmVyZG9tLXNpdGUvaGVscGVyL2NvZGUtYm94J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj48aDEgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuPGgyIGlkPVwiaGVsbG8td29ybGRcIj5IZWxsbyB3b3JsZDwvaDI+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIZWxsbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5IZWxsbyBXb3JsZDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBIZWxsbyUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JIZWxsbyUyMFdvcmxkJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzdGF0ZVwiPlN0YXRlPC9oMj5cbjxwPldlIGNhbiB1c2UgPGNvZGU+QHJlYWN0aXZlPC9jb2RlPiB0byBtYWtlIGF0dHJpYnV0ZSByZWFjdGl2ZTwvcD5cbjx1bD5cbjxsaT5Vc2UgaW4gPGNvZGU+SlNYPC9jb2RlPjwvbGk+XG48bGk+TXV0YXRlIGl0IHRvIHVwZGF0ZSBpbiBjYWxsYmFja3M8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjBleHRlbmRzJTIwQ29tcG9uZW50JTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCdGhpcy5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcHV0ZWRcIj5Db21wdXRlZDwvaDI+XG48dWw+XG48bGk+PGNvZGU+QGNvbXB1dGVkIGdldCB4KCk8L2NvZGU+IHRvIGNyZWF0ZSBjb21wdXRlZDwvbGk+XG48bGk+Y29tcHV0ZWQgcmVzdWx0IGlzIHNhbWUgd2l0aCByZWFjdGl2ZSBidXQgcmVhZG9ubHk8L2xpPlxuPC91bD5cbjxoMyBpZD1cImV4YW1wbGVcIj5FeGFtcGxlPC9oMz5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgQGNvbXB1dGVkIGdldCBkb3VibGVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQgKiAyO1xuICAgIH1cbiAgICBpbmMoKSB7XG4gICAgICAgIHRoaXMuY291bnQgKys7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxwPiBDb3VudGVyOiB7dGhpcy5jb3VudH0gPC9wPlxuICAgICAgICAgICAgPHA+IERvdWJsZToge3RoaXMuZG91YmxlQ291bnR9IDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5pbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMCU0MGNvbXB1dGVkJTIwZ2V0JTIwZG91YmxlQ291bnQoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHRoaXMuY291bnQlMjAqJTIwMiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTIwQ291bnRlciUzQSUyMCU3QnRoaXMuY291bnQlN0QlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTIwRG91YmxlJTNBJTIwJTdCdGhpcy5kb3VibGVDb3VudCU3RCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wb25lbnRcIj5Db21wb25lbnQ8L2gyPlxuPHVsPlxuPGxpPkNsYXNzIHdpdGggZXh0ZW5kcyA8Y29kZT5Db21wb25lbnQ8L2NvZGU+IGlzIGEgY29tcG9uZW50PC9saT5cbjxsaT48Y29kZT50aGlzLnByb3BzPC9jb2RlPiBpcyBwcm9wcyByZWFjdGl2ZSBvYmplY3Q8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8cD5JIHdpbGwgZGlzcGxheSBjb3VudCBmcm9tIHsnPERpc3BsYXkvPid9OiB7dGhpcy5wcm9wcy5jb3VudH08L3A+O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxEaXNwbGF5IGNvdW50PXt0aGlzLmNvdW50fS8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJjbGFzcyUyMERpc3BsYXklMjBleHRlbmRzJTIwQ29tcG9uZW50JTIwJTdCJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnAlMjZndCUzQkklMjB3aWxsJTIwZGlzcGxheSUyMGNvdW50JTIwZnJvbSUyMCU3QiUyNiUyMzAzOSUzQiUyNmx0JTNCRGlzcGxheSUyRiUyNmd0JTNCJTI2JTIzMDM5JTNCJTdEJTNBJTIwJTdCdGhpcy5wcm9wcy5jb3VudCU3RCUyNmx0JTNCJTJGcCUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCRGlzcGxheSUyMGNvdW50JTNEJTdCdGhpcy5jb3VudCU3RCUyRiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJsb2dpY1wiPkxvZ2ljPC9oMj5cbjxoMyBpZD1cImlmXCI+JGlmPC9oMz5cbjxwPlVzZSA8Y29kZT4kaWY8L2NvZGU+IHRvIGRvIGEgc3dpdGNoIGxvZ2ljIGluIDxjb2RlPkpTWDwvY29kZT4uPC9wPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ291bnRlckFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHJlYWN0aXZlIGNvdW50ID0gMDtcblxuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5jb3VudCA+PSAzIDogXG4gICAgICAgIHskaWYoXG4gICAgICAgICAgICAvLyBjb25kXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNvdW50ID49IDMsXG4gICAgICAgICAgICAvLyB5ZXNcbiAgICAgICAgICAgICgpID0+IDxkaXY+WUVTIHt0aGlzLmNvdW50fTwvZGl2PixcbiAgICAgICAgICAgIC8vIE5PXG4gICAgICAgICAgICAoKSA9PiA8ZGl2Pk5PIHt0aGlzLmNvdW50fTwvZGl2PixcbiAgICAgICAgKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0Jjb3VudCUyMCUyNmd0JTNCJTNEJTIwMyUyMCUzQSUyMCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyNGlmKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGNvbmQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5jb3VudCUyMCUyNmd0JTNCJTNEJTIwMyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMHllcyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQmRpdiUyNmd0JTNCWUVTJTIwJTdCdGhpcy5jb3VudCU3RCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBOTyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQmRpdiUyNmd0JTNCTk8lMjAlN0J0aGlzLmNvdW50JTdEJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgzIGlkPVwibWFwXCI+JG1hcDwvaDM+XG48cD5Vc2UgPGNvZGU+JG1hcDwvY29kZT4gZm9yIGEgbGlzdCBtYXA8L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBAcmVhY3RpdmUgbGlzdCA9IFsndGVzdCcgKyBjb3VudCArK107XG5cbiAgYWRkVG9kbygpIHtcbiAgICAgIC8vIHVzZSBhcnJheS5wdXNoL3NwbGljZS9zaGlmdC91bnNoaWZ0IHRvIG11dGF0ZVxuICAgICAgdGhpcy5saXN0LnB1c2goJ25ldyB0b2RvJyArIGNvdW50ICsrKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDx1bD5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRUb2RvfT5BREQgVE9ETzwvYnV0dG9uPlxuICAgICAgeyRtYXAoXG4gICAgICAgICAgdGhpcy5saXN0LCAgLy8gYXJyYXlcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgICAgICAgLy8gaXRlbS52YWx1ZSBtZWFuIGl0ZW1cbiAgICAgICAgICAgICAgLy8gaXRlbS5pbmRleCBtZWFuIGluZGV4XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgW3tpdGVtLmluZGV4fV0ge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAvLyBrZXkgbWFwLCBhbHRlcm5hdGl2ZSB0byA8bGkga2V5PiBpbiBSZWFjdFxuICAgICAgICAgICAgICAvLyBtdXN0IGJlIHN0cmluZyBvciBudW1iZXIsIGFuZCBrZWVwIHVuaXF1ZSBpbiBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICl9XG4gICAgPC91bD47XG4gIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImxldCUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUwQWV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMEFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGxpc3QlMjAlM0QlMjAlNUIlMjYlMjMwMzklM0J0ZXN0JTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIlNUQlM0IlMEElMEElMjAlMjBhZGRUb2RvKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBhcnJheS5wdXNoJTJGc3BsaWNlJTJGc2hpZnQlMkZ1bnNoaWZ0JTIwdG8lMjBtdXRhdGUlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QucHVzaCglMjYlMjMwMzklM0JuZXclMjB0b2RvJTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIpJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmFkZFRvZG8lN0QlMjZndCUzQkFERCUyMFRPRE8lMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0bWFwKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdCUyQyUyMCUyMCUyRiUyRiUyMGFycmF5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtYXAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLnZhbHVlJTIwbWVhbiUyMGl0ZW0lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLmluZGV4JTIwbWVhbiUyMGluZGV4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QiU3Qml0ZW0uaW5kZXglN0QlNUQlMjAlN0JpdGVtLnZhbHVlJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCKCklMjAlM0QlMjZndCUzQiUyMHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCUyQyUyMDEpJTdEJTI2Z3QlM0JSRU1PVkUlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwa2V5JTIwbWFwJTJDJTIwYWx0ZXJuYXRpdmUlMjB0byUyMCUyNmx0JTNCbGklMjBrZXklMjZndCUzQiUyMGluJTIwUmVhY3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtdXN0JTIwYmUlMjBzdHJpbmclMjBvciUyMG51bWJlciUyQyUyMGFuZCUyMGtlZXAlMjB1bmlxdWUlMjBpbiUyMGxpc3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBpdGVtLnZhbHVlJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGdWwlMjZndCUzQiUzQiUwQSUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJ0b2RvLWV4YW1wbGVcIj5Ub2RvIEV4YW1wbGU8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIEByZWFjdGl2ZSBsaXN0ID0gW3tcbiAgICBpZDogY291bnQrKyxcbiAgICB0ZXh0OiAndG9kbycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfV07XG4gIEByZWFjdGl2ZSBpbnB1dCA9ICcnO1xuXG4gIGFkZFRvZG8oKSB7XG4gICAgICAvLyB1c2UgYXJyYXkucHVzaC9zcGxpY2Uvc2hpZnQvdW5zaGlmdCB0byBtdXRhdGVcbiAgICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgICAgaWQ6IGNvdW50KyssXG4gICAgICAgIHRleHQ6IHRoaXMuaW5wdXQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgfVxuXG4gIGhhbmRsZVN3YXAoaW5kZXgpIHtcbiAgICAvLyB1c2Ugc3BsaWNlIHRvIHN3YXAgaXRlbXNcbiAgICAvLyByZWFjdGl2ZSBhcnJheSBjYW4gbm90IHRyYWNrIG5hdGl2ZSBzd2FwXG4gICAgY29uc3QgdGVtcCA9IFt0aGlzLmxpc3RbaW5kZXhdLCB0aGlzLmxpc3RbaW5kZXggKyAxXV07XG4gICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMiwgdGVtcFsxXSwgdGVtcFswXSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8dWw+XG4gICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuaW5wdXR9IG9uSW5wdXQ9eyhlKSA9PiB0aGlzLmlucHV0ID0gZS50YXJnZXQudmFsdWV9PjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICAgIHskbWFwKFxuICAgICAgICAgIHRoaXMubGlzdCwgIC8vIGFycmF5XG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAgIC8vIGl0ZW0uaW5kZXggbWVhbiBpbmRleFxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlLnRleHR9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgeyRpZihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5pbmRleCA8IHRoaXMubGlzdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3dhcChpdGVtLmluZGV4KX0+U1dBUCBORVhUPC9idXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8c3Bhbj5bVEhFIExBU1RdPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBhbmQga2VlcCB1bmlxdWUgaW4gbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS5pZDtcbiAgICAgICAgICB9XG4gICAgICApfVxuICAgIDwvdWw+O1xuICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJsZXQlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBBcHAlMjBleHRlbmRzJTIwQ29tcG9uZW50JTIwJTdCJTBBJTIwJTIwJTQwcmVhY3RpdmUlMjBsaXN0JTIwJTNEJTIwJTVCJTdCJTBBJTIwJTIwJTIwJTIwaWQlM0ElMjBjb3VudCUyQiUyQiUyQyUwQSUyMCUyMCUyMCUyMHRleHQlM0ElMjAlMjYlMjMwMzklM0J0b2RvJTI2JTIzMDM5JTNCJTJDJTBBJTIwJTIwJTIwJTIwY29tcGxldGVkJTNBJTIwZmFsc2UlMkMlMEElMjAlMjAlN0QlNUQlM0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGlucHV0JTIwJTNEJTIwJTI2JTIzMDM5JTNCJTI2JTIzMDM5JTNCJTNCJTBBJTBBJTIwJTIwYWRkVG9kbygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwYXJyYXkucHVzaCUyRnNwbGljZSUyRnNoaWZ0JTJGdW5zaGlmdCUyMHRvJTIwbXV0YXRlJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5saXN0LnB1c2goJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaWQlM0ElMjBjb3VudCUyQiUyQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRleHQlM0ElMjB0aGlzLmlucHV0JTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY29tcGxldGVkJTNBJTIwZmFsc2UlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlN0QpJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5pbnB1dCUyMCUzRCUyMCUyNiUyMzAzOSUzQiUyNiUyMzAzOSUzQiUzQiUwQSUyMCUyMCU3RCUwQSUwQSUyMCUyMGhhbmRsZVN3YXAoaW5kZXgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwc3BsaWNlJTIwdG8lMjBzd2FwJTIwaXRlbXMlMEElMjAlMjAlMjAlMjAlMkYlMkYlMjByZWFjdGl2ZSUyMGFycmF5JTIwY2FuJTIwbm90JTIwdHJhY2slMjBuYXRpdmUlMjBzd2FwJTBBJTIwJTIwJTIwJTIwY29uc3QlMjB0ZW1wJTIwJTNEJTIwJTVCdGhpcy5saXN0JTVCaW5kZXglNUQlMkMlMjB0aGlzLmxpc3QlNUJpbmRleCUyMCUyQiUyMDElNUQlNUQlM0IlMEElMjAlMjAlMjAlMjB0aGlzLmxpc3Quc3BsaWNlKGluZGV4JTJDJTIwMiUyQyUyMHRlbXAlNUIxJTVEJTJDJTIwdGVtcCU1QjAlNUQpJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmlucHV0JTIwdmFsdWUlM0QlN0J0aGlzLmlucHV0JTdEJTIwb25JbnB1dCUzRCU3QihlKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5pbnB1dCUyMCUzRCUyMGUudGFyZ2V0LnZhbHVlJTdEJTI2Z3QlM0IlMjZsdCUzQiUyRmlucHV0JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmFkZFRvZG8lN0QlMjZndCUzQkFERCUyMFRPRE8lMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0bWFwKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdCUyQyUyMCUyMCUyRiUyRiUyMGFycmF5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtYXAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLnZhbHVlJTIwbWVhbiUyMGl0ZW0lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLmluZGV4JTIwbWVhbiUyMGluZGV4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QiU3Qml0ZW0uaW5kZXglN0QlNUQlMjAlN0JpdGVtLnZhbHVlLnRleHQlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0IoKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5saXN0LnNwbGljZShpdGVtLmluZGV4JTJDJTIwMSklN0QlMjZndCUzQlJFTU9WRSUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRpZiglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwaXRlbS5pbmRleCUyMCUyNmx0JTNCJTIwdGhpcy5saXN0Lmxlbmd0aCUyMC0lMjAxJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QigpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmhhbmRsZVN3YXAoaXRlbS5pbmRleCklN0QlMjZndCUzQlNXQVAlMjBORVhUJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQnNwYW4lMjZndCUzQiU1QlRIRSUyMExBU1QlNUQlMjZsdCUzQiUyRnNwYW4lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBrZXklMjBtYXAlMkMlMjBhbHRlcm5hdGl2ZSUyMHRvJTIwJTI2bHQlM0JsaSUyMGtleSUyNmd0JTNCJTIwaW4lMjBSZWFjdCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG11c3QlMjBiZSUyMHN0cmluZyUyMG9yJTIwbnVtYmVyJTJDJTIwYW5kJTIwa2VlcCUyMHVuaXF1ZSUyMGluJTIwbGlzdCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMGl0ZW0udmFsdWUuaWQlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjApJTdEJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZ1bCUyNmd0JTNCJTNCJTBBJTIwJTIwJTdEJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImxpZmVjeWNsZVwiPkxpZmVDeWNsZTwvaDI+XG48dWw+XG48bGk+PGNvZGU+b25Nb3VudCgpPC9jb2RlPiB3aWxsIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQmIzM5O3MgRE9NIGlzIGFwcGVuZCB0byBkb2N1bWVudDwvbGk+XG48bGk+PGNvZGU+b25EZXN0b3J5KCk8L2NvZGU+IHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCYjMzk7cyBET00gaXMgcmVtb3ZlZCBmcm9tIGRvY3VtZW50PC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgQ29tcG9uZW50T25lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2Pk9ORTwvZGl2PjtcbiAgICB9XG4gICAgb25Nb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdW50IG9uZScpO1xuICAgIH1cbiAgICBvbkRlc3RvcnkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbmUgZGVzdG9yeWVkJyk7XG4gICAgfVxufVxuY2xhc3MgQ29tcG9uZW50VHdvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlRXTzwvZGl2PjtcbiAgICB9XG4gICAgb25Nb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdW50IHR3bycpO1xuICAgIH1cbiAgICBvbkRlc3RvcnkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0d28gZGVzdG9yeWVkJyk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEByZWFjdGl2ZSBpc0NvbXBvbmVudE9uZSA9IHRydWU7XG4gICAgQGNvbXB1dGVkIGdldCBjb21wb25lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0NvbXBvbmVudE9uZSA/IENvbXBvbmVudE9uZTogQ29tcG9uZW50VHdvO1xuICAgIH1cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRPbmUgPSAhdGhpcy5pc0NvbXBvbmVudE9uZTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgIGNvbnN0IENvbXAgPSB0aGlzLmNvbXBvbmVudDtcbiAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICA8Q29tcCAvPlxuICAgICAgPC9idXR0b24+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImNsYXNzJTIwQ29tcG9uZW50T25lJTIwZXh0ZW5kcyUyMENvbXBvbmVudCUyMCU3QiUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQk9ORSUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBvbk1vdW50KCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb25zb2xlLmxvZyglMjYlMjMwMzklM0Jtb3VudCUyMG9uZSUyNiUyMzAzOSUzQiklM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBvbkRlc3RvcnkoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvbnNvbGUubG9nKCUyNiUyMzAzOSUzQm9uZSUyMGRlc3RvcnllZCUyNiUyMzAzOSUzQiklM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0QlMEFjbGFzcyUyMENvbXBvbmVudFR3byUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JUV08lMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwb25Nb3VudCgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY29uc29sZS5sb2coJTI2JTIzMDM5JTNCbW91bnQlMjB0d28lMjYlMjMwMzklM0IpJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwb25EZXN0b3J5KCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb25zb2xlLmxvZyglMjYlMjMwMzklM0J0d28lMjBkZXN0b3J5ZWQlMjYlMjMwMzklM0IpJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQXBwJTIwZXh0ZW5kcyUyMENvbXBvbmVudCUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwaXNDb21wb25lbnRPbmUlMjAlM0QlMjB0cnVlJTNCJTBBJTIwJTIwJTIwJTIwJTQwY29tcHV0ZWQlMjBnZXQlMjBjb21wb25lbnQoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHRoaXMuaXNDb21wb25lbnRPbmUlMjAlM0YlMjBDb21wb25lbnRPbmUlM0ElMjBDb21wb25lbnRUd28lM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBoYW5kbGVDbGljaygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5pc0NvbXBvbmVudE9uZSUyMCUzRCUyMCF0aGlzLmlzQ29tcG9uZW50T25lJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjBjb25zdCUyMENvbXAlMjAlM0QlMjB0aGlzLmNvbXBvbmVudCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuaGFuZGxlQ2xpY2slN0QlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCQ29tcCUyMCUyRiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJwbGF5Z3JvdW5kXCI+UGxheUdyb3VuZDwvaDI+XG48cD5QbGF5IG9ubGluZSB3aXRoIDxhIGhyZWY9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbmF1Z2h0eS1oaWxsLXVna2dqP2ZpbGU9L3NyYy9pbmRleC50c3hcIj5Db2RlU2FuZGJveDwvYT48L3A+XG48L2Rpdj47XG4gICAgICAgIH1cbiAgICB9IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=