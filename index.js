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
      _this.components.forEach(function (comp) {
        comp.onMount && comp.onMount();
      });
    }, true);
  };

  _proto.onDestory = function onDestory() {
    var _this2 = this;

    schedule(function () {
      _this2.components.forEach(function (comp) {
        comp.onDestory && comp.onDestory();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi9oZWxwZXIvY29kZS1ib3gvaW5kZXgudHN4Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2JhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uLi9zcmMvcmVhY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9kb2MvZ2V0LXN0YXJ0ZWQubWQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4Lmxlc3M/OTZjNSIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJodG1sRGVjb2RlIiwiaW5wdXQiLCJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIm5vZGVWYWx1ZSIsIkNvZGVib3giLCJwcm9wcyIsImNvZGUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJfX2h0bWwiLCJyZWFjdGl2ZSIsIkxvZ28iLCJIZWFkZXIiLCJBcHAiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tzIiwiZGVmZXJUYXNrcyIsInRpbWVyIiwic2NoZWR1bGUiLCJ0YXNrIiwiZGVmZXIiLCJzZXRUaW1lb3V0IiwidGFza0l0ZW1zIiwiQXJyYXkiLCJkZWZlckl0ZW1zIiwidGFza0l0ZW0iLCJpbnNlcnQiLCJhcnJheSIsImluZGV4IiwiaXRlbSIsIkZyYWdtZW50IiwiY29uc3RydWN0b3IiLCJvYmoiLCJhcHBlbmRDaGlsZCIsIm5vZGUiLCJhcHBlbmRUb0NvbnRhaW5lciIsImNvbnRhaW5lciIsImNvbnRhaW5lckZyYWdtZW50Iiwib25Nb3VudCIsImNvbXAiLCJvbkRlc3RvcnkiLCJyZXBsYWNlV2l0aCIsImZyYWdtZW50IiwicmFuZ2UiLCJjcmVhdGVFbXB0eSIsImluc2VydEJlZm9yZVRvQ29udGFpbmVyIiwiY3JlYXRlUmFuZ2UiLCJwYXJlbnQiLCJzdGFydFBvcyIsImdldEZpcnN0Tm9kZSIsIkZyYWdtZW50TGlzdCIsImFwcGVuZEZyYWdtZW50IiwiY2hpbGQiLCJyZW1vdmVXaXRoS2V5cyIsImtleXMiLCJtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsInRhcmdldCIsImRlbGV0ZUluZGV4IiwidG9JbmRleCIsIlJlZlN5bWJvbCIsIlN5bWJvbCIsImlzUmVmIiwiciIsImhpZGVSZWZNb2RlIiwid3JhcEZuSGlkZVJlZk1vZGUiLCJmbiIsInRlbXAiLCJydW5JblJlZk1vZGUiLCJjYiIsInByb3h5T2JqTWFwIiwiRGVwc01hbmFnZXIiLCJfYWRkRGVwIiwiX2dldERlcHMiLCJiZWdpbkNvbGxlY3QiLCJlbmRDb2xsZWN0IiwidHJhY2siLCJ0cmlnZ2VyIiwiZGVwcyIsImRlcCIsImRlcHNNYW5hZ2VyIiwiQXV0b3J1blJlZkltcGwiLCJfcnVuIiwiY3JlYXRlQXV0b3J1biIsIlJlZkltcGwiLCJ2YWwiLCJDb21wdXRlZFJlZkltcGwiLCJfcmVjb21wdXRlIiwibGFzdFZhbHVlIiwiUHJveHlSZWZTeW1ib2wiLCJwcm94eU1hcCIsImNyZWF0ZVJlYWN0aXZlIiwiYWxsUmVhY3RpdmUiLCJyZWYiLCJNRVRBX1RZUEUiLCJtZXRhc01hcCIsIm1ldGFzIiwicmVhY3RpdmVDb21wb25lbnQiLCJpbnMiLCJwcm90b3R5cGUiLCJrZXkiLCJhZGRNZXRhIiwiY29tcHV0ZWQiLCJhdXRvcnVuIiwiUHJveHlSZWZJbXBsIiwiX2FsbFJlYWN0aXZlIiwiZ2V0TWV0YUtleXMiLCJPYmplY3QiLCJfaW5pdEF1dG9ydW4iLCJ2YWx1ZSIsIl9pbml0UHJveHkiLCJ0aGF0IiwicmVmTWFwIiwicHJveHkiLCJnZXQiLCJhcmdzIiwibGVuIiwiY291bnQiLCJpbnNlcnRzIiwiaW5zZXJ0c0xlbiIsImkiLCJnZXRSZWYiLCJpc1Byb3h5UmVmIiwic2V0IiwibWV0YSIsInJlc3VsdCIsImdldHRlciIsIm5ld1ZhbCIsImRpcmVjdGl2ZSIsImZ1bmMiLCJpc0RpcmVjdGl2ZSIsIiRpZiIsImNvbmQiLCJ5ZXMiLCJubyIsImluaXRlZCIsIm5ld1Jlc3VsdCIsImxhc3RSZXN1bHQiLCJsYXN0RnJhZ21lbnQiLCJuZXdGcmFnbWVudCIsIiRtYXAiLCJyYXdMaXN0IiwibWFwRnVuYyIsImtleUZ1bmMiLCJsaXN0IiwibGlzdERhdGEiLCJsYXN0UmVhY3RpdmVJdGVtcyIsImNyZWF0ZVJlYWN0aXZlSXRlbSIsImZyYWdtZW50TGlzdCIsIm1hcEZ1bmNXcmFwIiwia2V5RnVuY1dyYXAiLCJjb25zb2xlIiwibGFzdEZyYWdtZW50cyIsImxhc3RLZXlzIiwibmV3TGlzdCIsIm5vdHJhY2siLCJuZXdLZXlzIiwibGFzdEluZGV4IiwicmVhY3RpdmVJdGVtIiwiZnJvbUluZGV4IiwicmVtb3ZlZCIsImh0bWwiLCJuZXdWYWx1ZSIsImlzRXZlbnQiLCJldmVudE5hbWUiLCJsYXN0VmFsdWVFdmVudEhhbmRsZXIiLCJzZXRBdHRyIiwiaCIsInR5cGUiLCJjaGlsZHJlbiIsInRhZyIsImJpbmRBdHRyIiwicmVhY3RpdmVWYWwiLCJ0ZXh0Tm9kZSIsImJ1aWxkQ29tcG9uZW50IiwiZnJhZyIsIm5ld0ZyYWciLCJEZW1vIiwibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImluYyIsImRvdWJsZUNvdW50IiwiRGlzcGxheSIsInB1c2giLCJhZGRUb2RvIiwic3BsaWNlIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwiaGFuZGxlU3dhcCIsIkNvbXBvbmVudE9uZSIsImxvZyIsIkNvbXBvbmVudFR3byIsImlzQ29tcG9uZW50T25lIiwiQ29tcCIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFDdEIsTUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBUjtBQUNBRixHQUFDLENBQUNHLFNBQUYsR0FBY0osS0FBZCxDQUZzQixDQUd0Qjs7QUFDQSxTQUFPQyxDQUFDLENBQUNJLFVBQUYsQ0FBYUMsTUFBYixLQUF3QixDQUF4QixHQUE0QixFQUE1QixHQUFpQ0wsQ0FBQyxDQUFDSSxVQUFGLENBQWEsQ0FBYixFQUFnQkUsU0FBeEQ7QUFDRDs7SUFFa0JDLE87Ozs7O0FBTWpCLG1CQUFZ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RUFBQztBQUFQLHNCQWpWRyxFQWtWbkIsMkVBQW9CO0FBQUcsWUFBSSxFQUFDO0FBQVIsdUJBQXBCLENBbFZtQixDQUFQO0FBb1ZIOzs7O0VBdFY2QmhMLDhDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEVBQUUsVUFBVSxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsa0dBQUM7QUFDSixFQUFFLE1BQU0sRUFFTjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIGgsIGF1dG9ydW4sIENvbXBvbmVudCB9IGZyb20gXCJvdmVyZG9tXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuXG5mdW5jdGlvbiBodG1sRGVjb2RlKGlucHV0KXtcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZS5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICAvLyBoYW5kbGUgY2FzZSBvZiBlbXB0eSBpbnB1dFxuICAgIHJldHVybiBlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWJveCBleHRlbmRzIENvbXBvbmVudDx7XG4gICAgY29tcG9uZW50OiBGdW5jdGlvbixcbiAgICBjb2RlOiBzdHJpbmcsXG59PiB7XG4gICAgQHJlYWN0aXZlIGNvZGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5jb2RlID0gcHJvcHMuY29kZTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudDtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29kZWJveFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cHJlPjxjb2RlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLmNvZGV9fT48L2NvZGU+PC9wcmU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vXCI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgaCxcbn0gZnJvbSAnb3ZlcmRvbSc7XG5cbmNsYXNzIExvZ28ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIiBcbiAgICAgICAgPlxuICAgICAgICA8L2ltZz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIH07XG59XG4iLCJpbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgcmVuZGVyLCAgaCwgcmVhY3RpdmUgfSBmcm9tICdvdmVyZG9tJztcblxuaW1wb3J0IERvY0dldFN0YXJ0ZWQgZnJvbSAnLi9kb2MvZ2V0LXN0YXJ0ZWQubWQnO1xuXG5jbGFzcyBBcHAge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxEb2NHZXRTdGFydGVkLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImNvbnN0IHRhc2tzOiBTZXQ8RnVuY3Rpb24+ID0gbmV3IFNldCgpO1xuY29uc3QgZGVmZXJUYXNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcblxubGV0IHRpbWVyOiBOb2RlSlMuVGltZW91dCB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGUodGFzazogRnVuY3Rpb24sIGRlZmVyID0gZmFsc2UpIHtcbiAgaWYgKGRlZmVyKSB7XG4gICAgZGVmZXJUYXNrcy5hZGQodGFzayk7XG4gIH0gZWxzZSB7XG4gICAgdGFza3MuYWRkKHRhc2spO1xuICB9XG4gIGlmICghdGltZXIpIHtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgY29uc3QgdGFza0l0ZW1zID0gQXJyYXkuZnJvbSh0YXNrcy52YWx1ZXMoKSk7XG4gICAgICB0YXNrcy5jbGVhcigpO1xuICAgICAgY29uc3QgZGVmZXJJdGVtcyA9IEFycmF5LmZyb20oZGVmZXJUYXNrcy52YWx1ZXMoKSk7XG4gICAgICBkZWZlclRhc2tzLmNsZWFyKCk7XG4gICAgICB0YXNrSXRlbXMuY29uY2F0KGRlZmVySXRlbXMpLmZvckVhY2godGFza0l0ZW0gPT4ge1xuICAgICAgICB0YXNrSXRlbSgpO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpbnNlcnQ8VD4oYXJyYXk6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyLCBpdGVtOiBUKSB7XG4gIGFycmF5LnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5nZUZyb21Ob2Rlcyhub2RlczogTm9kZVtdKSB7XG4gIGNvbnN0IHBhcmVudCA9IG5vZGVzWzBdLnBhcmVudE5vZGU7XG4gIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudD8uY2hpbGROb2Rlcywgbm9kZXNbMF0pO1xuICByYW5nZS5zZXRTdGFydChwYXJlbnQhLCBzdGFydFBvcyk7XG4gIHJhbmdlLnNldEVuZChwYXJlbnQhLCBzdGFydFBvcyArIG5vZGVzLmxlbmd0aCk7XG4gIHJldHVybiByYW5nZTtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IFJlYWN0aXZlSXRlbSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IGluc2VydCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9oJztcblxuZXhwb3J0IGNsYXNzIEZyYWdtZW50IHtcbiAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnRhaW5lcj86IE5vZGU7XG4gIGNoaWxkTm9kZXM6IE5vZGVbXSA9IFtdO1xuICBrZXk/OiBudW1iZXIgfCBzdHJpbmc7XG4gIHJlYWN0aXZlSXRlbT86IFJlYWN0aXZlSXRlbTxhbnk+O1xuXG4gIGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gW107XG5cbiAgc3RhdGljIGlzRnJhZ21lbnQob2JqOiB1bmtub3duKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSAob2JqIGFzIE9iamVjdCkuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yID09PSBGcmFnbWVudCB8fCBjb25zdHJ1Y3RvciA9PT0gRnJhZ21lbnRMaXN0O1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQ6IE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gY2hpbGQgYXMgTm9kZTtcbiAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKG5vZGUpO1xuICB9XG5cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyOiBOb2RlLCBjb250YWluZXJGcmFnbWVudDogRnJhZ21lbnQgfCBudWxsKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jcmVhdGVFbXB0eSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcbiAgICBpZiAodGhpcy5jb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChjb250YWluZXJGcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXJGcmFnbWVudC5jb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzLmNvbmNhdChjb250YWluZXJGcmFnbWVudC5jb21wb25lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbmRlciwgdHJpZ2dlciBvbk1vdW50XG4gICAgICAgIHRoaXMub25Nb3VudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQoKSB7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgIGNvbXAub25Nb3VudCAmJiBjb21wLm9uTW91bnQoKTtcbiAgICAgIH0pO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgb25EZXN0b3J5KCkge1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgICBjb21wLm9uRGVzdG9yeSAmJiBjb21wLm9uRGVzdG9yeSgpO1xuICAgICAgfSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICByZXBsYWNlV2l0aChmcmFnbWVudDogRnJhZ21lbnQpIHtcbiAgICBmcmFnbWVudC5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWdtZW50LmZyYWdtZW50KTtcbiAgICAgIHJhbmdlLmRldGFjaCgpO1xuICAgIH0pO1xuICAgIHRoaXMub25EZXN0b3J5KCk7XG4gICAgZnJhZ21lbnQub25Nb3VudCgpO1xuICB9XG5cbiAgY3JlYXRlRW1wdHkoKSB7XG4gICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW1wdHknKSk7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0QmVmb3JlVG9Db250YWluZXIoY29udGFpbmVyOiBOb2RlLCBiZWZvcmVOb2RlOiBOb2RlIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgLy8gaGFzIGEgY29udGFpbmVyIGFscmVhZHlcbiAgICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gY3VycmVudCBjb250YWluZXIgZmlyc3RcbiAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgdGhpcy5mcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIhLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuY3JlYXRlRW1wdHkoKTtcbiAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZnJhZ21lbnQsIGJlZm9yZU5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUmFuZ2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5jaGlsZE5vZGVzWzBdLnBhcmVudE5vZGUhO1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBjb25zdCBzdGFydFBvcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoXG4gICAgICBwYXJlbnQ/LmNoaWxkTm9kZXMsXG4gICAgICB0aGlzLmNoaWxkTm9kZXNbMF1cbiAgICApO1xuICAgIHJhbmdlLnNldFN0YXJ0KHBhcmVudCwgc3RhcnRQb3MpO1xuICAgIHJhbmdlLnNldEVuZChwYXJlbnQsIHN0YXJ0UG9zICsgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9XG5cbiAgZ2V0Rmlyc3ROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZyYWdtZW50TGlzdCBleHRlbmRzIEZyYWdtZW50IHtcbiAgY2hpbGRGcmFnbWVudHM6IEZyYWdtZW50W10gPSBbXTtcblxuICBhcHBlbmRGcmFnbWVudChjaGlsZDogRnJhZ21lbnQsIGtleTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY2hpbGQuYXBwZW5kVG9Db250YWluZXIodGhpcy5mcmFnbWVudCwgdGhpcyk7XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5wdXNoKGNoaWxkKTtcbiAgICBjaGlsZC5rZXkgPSBrZXk7XG4gIH1cblxuICBpbnNlcnQoaW5kZXg6IG51bWJlciwgZnJhZ21lbnQ6IEZyYWdtZW50LCBuZXdLZXk6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGZyYWdtZW50LmtleSA9IG5ld0tleTtcbiAgICBmcmFnbWVudC5pbnNlcnRCZWZvcmVUb0NvbnRhaW5lcihcbiAgICAgIHRoaXMuY29udGFpbmVyISxcbiAgICAgIHRoaXMuY2hpbGRGcmFnbWVudHNbaW5kZXhdPy5nZXRGaXJzdE5vZGUoKSB8fCBudWxsXG4gICAgKTtcbiAgICBpbnNlcnQodGhpcy5jaGlsZEZyYWdtZW50cywgaW5kZXgsIGZyYWdtZW50KTtcbiAgfVxuXG4gIHJlbW92ZVdpdGhLZXlzKGtleXM6IChudW1iZXIgfCBzdHJpbmcpW10pIHtcbiAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihjaGlsZC5rZXkhKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZnJhZ21lbnQgPSBjaGlsZDtcbiAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBmcmFnbWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgICAgICByYW5nZS5kZXRhY2goKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaGlsZEZyYWdtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZShmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgaW5zZXJ0QmVmb3JlID0gdGhpcy5jaGlsZEZyYWdtZW50c1t0b0luZGV4XTtcblxuICAgIGxldCBpbnNlcnRCZWZvcmVOb2RlOiBOb2RlIHwgbnVsbCA9IGluc2VydEJlZm9yZT8uZ2V0Rmlyc3ROb2RlKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNoaWxkRnJhZ21lbnRzW2Zyb21JbmRleF0hO1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmVUb0NvbnRhaW5lcih0aGlzLmNvbnRhaW5lciEsIGluc2VydEJlZm9yZU5vZGUpO1xuXG4gICAgaW5zZXJ0KHRoaXMuY2hpbGRGcmFnbWVudHMsIHRvSW5kZXgsIHRhcmdldCk7XG4gICAgbGV0IGRlbGV0ZUluZGV4ID0gZnJvbUluZGV4O1xuICAgIGlmICh0b0luZGV4IDwgZnJvbUluZGV4KSB7XG4gICAgICBkZWxldGVJbmRleCArPSAxO1xuICAgIH1cbiAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnNwbGljZShkZWxldGVJbmRleCwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vaCc7XG5cbmNvbnN0IFJlZlN5bWJvbCA9IFN5bWJvbCgncmVmJyk7XG5jb25zdCBJbnRlcm5hbFJhd1N5bWJvbCA9IFN5bWJvbCgnaW50ZXJuYWxfcmF3Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZjxUPihyOiBSZWY8VD4gfCB1bmtub3duKTogciBpcyBSZWY8VD47XG5leHBvcnQgZnVuY3Rpb24gaXNSZWYocjogYW55KTogciBpcyBSZWYge1xuICByZXR1cm4gciAmJiAociBhcyBSZWYpW1JlZlN5bWJvbF0gPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZjxUPihyZWY6IFQpOiBUIGV4dGVuZHMgUmVmPGluZmVyIFY+ID8gViA6IFQge1xuICByZXR1cm4gaXNSZWYocmVmKSA/IChyZWYudmFsdWUgYXMgYW55KSA6IHJlZjtcbn1cblxudHlwZSBLZXkgPSBzdHJpbmcgfCBzeW1ib2wgfCBudW1iZXI7XG5cbmxldCBoaWRlUmVmTW9kZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcEZuSGlkZVJlZk1vZGU8VCBleHRlbmRzIEZ1bmN0aW9uPihmbjogVCkge1xuICByZXR1cm4gKGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgbGV0IHRlbXAgPSBoaWRlUmVmTW9kZTtcbiAgICBoaWRlUmVmTW9kZSA9IHRydWU7XG4gICAgY29uc3QgciA9IGZuKC4uLmFyZ3MpO1xuICAgIGhpZGVSZWZNb2RlID0gdGVtcDtcbiAgICByZXR1cm4gcjtcbiAgfSBhcyB1bmtub3duKSBhcyBUO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBydW5JblJlZk1vZGUoY2I6IEZ1bmN0aW9uKSB7XG4gIGxldCB0ZW1wID0gaGlkZVJlZk1vZGU7XG4gIGhpZGVSZWZNb2RlID0gZmFsc2U7XG4gIGNvbnN0IHIgPSBjYigpO1xuICBoaWRlUmVmTW9kZSA9IHRlbXA7XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuSW5IaWRlUmVmTW9kZShjYjogRnVuY3Rpb24pIHtcbiAgbGV0IHRlbXAgPSBoaWRlUmVmTW9kZTtcbiAgaGlkZVJlZk1vZGUgPSB0cnVlO1xuICBjb25zdCByID0gY2IoKTtcbiAgaGlkZVJlZk1vZGUgPSB0ZW1wO1xuICByZXR1cm4gcjtcbn1cblxuY29uc3QgcHJveHlPYmpNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE9iamVjdD4oKTtcblxuY2xhc3MgRGVwc01hbmFnZXIge1xuICBwcml2YXRlIF9jb2xsZWN0aW5nOiBUcmlnZ2VyYWJsZVJlZltdID0gW107XG4gIHByaXZhdGUgX2RlcHMgPSBuZXcgV2Vha01hcDxSZWYsIFNldDxUcmlnZ2VyYWJsZVJlZj4+KCk7XG5cbiAgcHJpdmF0ZSBfYWRkRGVwKHRhcmdldDogUmVmLCB0cmlnZ2VyOiBUcmlnZ2VyYWJsZVJlZikge1xuICAgIGlmICghdGhpcy5fZGVwcy5oYXModGFyZ2V0KSkge1xuICAgICAgdGhpcy5fZGVwcy5zZXQodGFyZ2V0LCBuZXcgU2V0KCkpO1xuICAgIH1cbiAgICB0aGlzLl9kZXBzLmdldCh0YXJnZXQpIS5hZGQodHJpZ2dlcik7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXBzKHRhcmdldDogUmVmKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fZGVwcy5nZXQodGFyZ2V0KT8udmFsdWVzKCkgfHwgW10pO1xuICB9XG5cbiAgYmVnaW5Db2xsZWN0KHJlZjogVHJpZ2dlcmFibGVSZWYpIHtcbiAgICB0aGlzLl9jb2xsZWN0aW5nLnB1c2gocmVmKTtcbiAgfVxuXG4gIGVuZENvbGxlY3QoKSB7XG4gICAgdGhpcy5fY29sbGVjdGluZy5wb3AoKTtcbiAgfVxuXG4gIHRyYWNrKHRhcmdldDogUmVmKSB7XG4gICAgaWYgKHRoaXMuX2NvbGxlY3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWRkRGVwKHRhcmdldCwgdGhpcy5fY29sbGVjdGluZ1t0aGlzLl9jb2xsZWN0aW5nLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyKHRhcmdldDogUmVmKSB7XG4gICAgY29uc3QgZGVwcyA9IHRoaXMuX2dldERlcHModGFyZ2V0KTtcbiAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC50cmlnZ2VyKCkpO1xuICB9XG59XG5cbmNvbnN0IGRlcHNNYW5hZ2VyID0gbmV3IERlcHNNYW5hZ2VyKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVmPFQgPSBhbnk+IHtcbiAgW1JlZlN5bWJvbF06IGJvb2xlYW47XG4gIHZhbHVlOiBUO1xufVxuXG5pbnRlcmZhY2UgVHJpZ2dlcmFibGVSZWY8VCA9IGFueT4ge1xuICBbUmVmU3ltYm9sXTogYm9vbGVhbjtcbiAgdmFsdWU6IFQ7XG4gIHRyaWdnZXI6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYXcocmVmOiBSZWYpIHtcbiAgaWYgKGlzUHJveHlSZWYocmVmKSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gcmVmW0ludGVybmFsUmF3U3ltYm9sXTtcbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZWYuX3ZhbHVlO1xufVxuXG5leHBvcnQgdHlwZSBOb1RyYWNrRm4gPSAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQ7XG5cbmNsYXNzIEF1dG9ydW5SZWZJbXBsIHtcbiAgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICB2YWx1ZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm46IChub3RyYWNrRm46IE5vVHJhY2tGbikgPT4gdm9pZCkge1xuICAgIHRoaXMuX3J1bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcnVuKCkge1xuICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcEZuSGlkZVJlZk1vZGUodGhpcy5fZm4pLmNhbGwodGhpcywgKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAvLyBubyB0cmFjayBmblxuICAgICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICAgICAgZm4oKTtcbiAgICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICB9KTtcbiAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuX3J1bigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdXRvcnVuKGZuOiAobm90cmFja0ZuOiBOb1RyYWNrRm4pID0+IHZvaWQpIHtcbiAgcmV0dXJuIG5ldyBBdXRvcnVuUmVmSW1wbChmbik7XG59XG5cbmNsYXNzIFJlZkltcGw8VCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZhbHVlOiBUKSB7fVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsOiBUKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQ29tcHV0ZWRSZWZJbXBsPFQgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWUhOiBUO1xuICBwcml2YXRlIF9jb21wdXRlOiAoKSA9PiBUO1xuXG4gIGNvbnN0cnVjdG9yKGdldHRlcjogKCkgPT4gVCkge1xuICAgIHRoaXMuX2NvbXB1dGUgPSBnZXR0ZXI7XG4gIH1cblxuICBwcml2YXRlIF9yZWNvbXB1dGUoKSB7XG4gICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fY29tcHV0ZSgpO1xuICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLl9yZWNvbXB1dGUoKTtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICBsZXQgbGFzdFZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgdGhpcy5fcmVjb21wdXRlKCk7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBsYXN0VmFsdWUpIHtcbiAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFByb3h5UmVmU3ltYm9sID0gU3ltYm9sKCdwcm94eS1yZWYnKTtcblxuZnVuY3Rpb24gaXNQcm94eVJlZih0YXJnZXQ6IHVua25vd24pIHtcbiAgcmV0dXJuIHRhcmdldCAmJiAodGFyZ2V0IGFzIFByb3h5UmVmSW1wbDxhbnk+KVtQcm94eVJlZlN5bWJvbF0gPT09IHRydWU7XG59XG5cbmNvbnN0IHByb3h5TWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBPYmplY3Q+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4ob2JqOiBULCBhbGxSZWFjdGl2ZSA9IGZhbHNlKTogVCB7XG4gIGNvbnN0IHJlZiA9IG5ldyBQcm94eVJlZkltcGwob2JqLCBhbGxSZWFjdGl2ZSk7XG4gIHJldHVybiByZWYudmFsdWU7XG59XG5cbmVudW0gTUVUQV9UWVBFIHtcbiAgcmVhY3RpdmUsXG4gIGNvbXB1dGVkLFxuICBhdXRvcnVuLFxufTtcblxuLy8gbWFwIE9iamVjdC5wcm90b3R5cGUgdG8gaXRzIHJlYWN0aXZlIGtleXNcbmxldCBtZXRhc01hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgTWFwPEtleSwgTUVUQV9UWVBFPj4oKTtcblxuZnVuY3Rpb24gYWRkTWV0YShwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXksIHR5cGU6IE1FVEFfVFlQRSkge1xuICBpZiAoIW1ldGFzTWFwLmhhcyhwcm90b3R5cGUpKSB7XG4gICAgbWV0YXNNYXAuc2V0KHByb3RvdHlwZSwgbmV3IE1hcCgpKTtcbiAgfVxuICBjb25zdCBtZXRhcyA9IG1ldGFzTWFwLmdldChwcm90b3R5cGUpO1xuICBtZXRhcyEuc2V0KGtleSwgdHlwZSk7XG59XG5cbmZ1bmN0aW9uIGdldE1ldGFLZXlzKHByb3RvdHlwZTogT2JqZWN0KSB7XG4gIHJldHVybiBtZXRhc01hcC5nZXQocHJvdG90eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWN0aXZlQ29tcG9uZW50KGNvbXBvbmVudDogYW55LCBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgY29uc3QgaW5zID0gbmV3IGNvbXBvbmVudChwcm9wcyB8fCB7fSk7XG4gIGNvbnN0IGNvbXAgPSBjcmVhdGVSZWFjdGl2ZShpbnMpIGFzIGFueSBhcyBDb21wb25lbnQ8YW55PjtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbi8qKlxuICogQHJlYWN0aXZlIGRlY29yYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZShwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLnJlYWN0aXZlKTtcbn1cblxuLyoqXG4gKiBAY29tcHV0ZWQgZGVjb3JhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHByb3RvdHlwZTogT2JqZWN0LCBrZXk6IEtleSkge1xuICBhZGRNZXRhKHByb3RvdHlwZSwga2V5LCBNRVRBX1RZUEUuY29tcHV0ZWQpO1xufVxuXG4vKipcbiAqIEBjb21wdXRlZCBkZWNvcmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0b3J1bihwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLmF1dG9ydW4pO1xufVxuXG5jbGFzcyBQcm94eVJlZkltcGw8VCBleHRlbmRzIG9iamVjdCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICBwdWJsaWMgW1Byb3h5UmVmU3ltYm9sXSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfcHJveHk6IFQ7XG4gIHByaXZhdGUgX21ldGFLZXlzPzogTWFwPEtleSwgTUVUQV9UWVBFPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmo6IFQsIHByaXZhdGUgX2FsbFJlYWN0aXZlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9tZXRhS2V5cyA9IGdldE1ldGFLZXlzKE9iamVjdC5nZXRQcm90b3R5cGVPZihfb2JqKSk7XG4gICAgdGhpcy5fcHJveHkgPSB0aGlzLl9pbml0UHJveHkoX29iaik7XG4gICAgdGhpcy5faW5pdEF1dG9ydW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRBdXRvcnVuKCkge1xuICAgIGlmICghdGhpcy5fbWV0YUtleXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWV0YUtleXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSBNRVRBX1RZUEUuYXV0b3J1bikge1xuICAgICAgICBjcmVhdGVBdXRvcnVuKCgodGhpcy5fb2JqIGFzIGFueSlba2V5XS5iaW5kKHRoaXMuX3Byb3h5KSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFByb3h5KG9iajogVCk6IFQge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmIChwcm94eU1hcC5oYXMob2JqKSkge1xuICAgICAgcmV0dXJuIHByb3h5TWFwLmdldChvYmopIGFzIFQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVmTWFwID0gbmV3IE1hcDxLZXksIFJlZj4oKTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0KF8sIGtleSkge1xuICAgICAgICBkZXBzTWFuYWdlci50cmFjayh0aGF0KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2xlbmd0aCcpIHJldHVybiBvYmoubGVuZ3RoO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdtYXAnKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1hcChcbiAgICAgICAgICAgICAgY2I6IChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IGFueSxcbiAgICAgICAgICAgICAgdGhpc0FyZz86IGFueVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmoubWFwKChfaXRlbTogYW55LCBfaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYigocHJveHkgYXMgYW55KVtfaW5kZXhdLCBfaW5kZXgpO1xuICAgICAgICAgICAgICB9LCB0aGlzQXJnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBbJ3B1c2gnLCAncG9wJywgJ3NoaWZ0JywgJ3Vuc2hpZnQnLCAnc3BsaWNlJ10uaW5kZXhPZihcbiAgICAgICAgICAgICAga2V5IGFzIHN0cmluZ1xuICAgICAgICAgICAgKSAhPT0gLTFcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3BvcCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvYmoubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUobGVuIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3BsaWNlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0cyA9IGFyZ3Muc2xpY2UoMikgYXMgYW55W107XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRzTGVuID0gaW5zZXJ0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvYmoubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gaW5kZXggJiYgaSA8IGluZGV4ICsgY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTWFwLmRlbGV0ZSgnJyArIGkpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID49IGluZGV4ICsgY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTWFwLnNldCgnJyArIChpIC0gY291bnQgKyBpbnNlcnRzTGVuKSwgcmVmTWFwLmdldCgnJyArIGkpISk7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb2JqW2tleSBhcyBhbnldKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoYXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IFN5bWJvbC5zcGVjaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVmID0gZ2V0UmVmKGtleSk7XG4gICAgICAgIGlmIChpc1Byb3h5UmVmKHJlZikpIHtcbiAgICAgICAgICByZXR1cm4gcmVmLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaWRlUmVmTW9kZSAmJiBpc1JlZihyZWYpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0UmVmKGtleSk7XG4gICAgICB9LFxuICAgICAgc2V0KF8sIGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVmID0gZ2V0UmVmKGtleSk7XG4gICAgICAgIGlmIChpc1JlZihyZWYpKSB7XG4gICAgICAgICAgLy8gaWYgb3JpZ2luIHJlZiBpcyBub3QgcHJveHlSZWZcbiAgICAgICAgICAvLyBidXQgdmFsdWUgaXMgYSBvYmplY3RcbiAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAocmVmIGFzIFByb3h5UmVmSW1wbClbUHJveHlSZWZTeW1ib2xdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZWZNYXAuc2V0KGtleSwgbmV3IFByb3h5UmVmSW1wbCh2YWx1ZSwgdHJ1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICh0aGF0Ll9vYmogYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0UmVmID0gKGtleTogS2V5KTogUmVmID0+IHtcbiAgICAgIGlmIChyZWZNYXAuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHJlZk1hcC5nZXQoa2V5KSE7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5fb2JqKTtcbiAgICAgIGlmICghdGhpcy5fbWV0YUtleXMgJiYgIXRoaXMuX2FsbFJlYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fb2JqIGFzIGFueSlba2V5XTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9tZXRhS2V5cz8uZ2V0KGtleSk7XG4gICAgICBsZXQgcmVzdWx0ITogUmVmO1xuXG4gICAgICBpZiAodGhpcy5fYWxsUmVhY3RpdmUgfHwgbWV0YSA9PT0gTUVUQV9UWVBFLnJlYWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKG9iaiBhcyBhbnkpW2tleV07XG4gICAgICAgIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gcmVhY3RpdmUgb2JqZWN0XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFByb3h5UmVmSW1wbChjcmVhdGVSZWFjdGl2ZSh2YWx1ZSwgdGhpcy5fYWxsUmVhY3RpdmUpLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZWZJbXBsKHdyYXBGbkhpZGVSZWZNb2RlKHZhbHVlLmJpbmQodGhpcy5fcHJveHkpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVmXG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFJlZkltcGwodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1ldGEgPT09IE1FVEFfVFlQRS5jb21wdXRlZCkge1xuICAgICAgICBjb25zdCBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwga2V5KSEuZ2V0ITtcbiAgICAgICAgcmVzdWx0ID0gbmV3IENvbXB1dGVkUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZShnZXR0ZXIuYmluZCh0aGlzLl9wcm94eSkpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZWZNYXAuc2V0KGtleSwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHIgPSAodGhpcyBhcyBhbnkpLl9vYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gci5iaW5kKHRoaXMuX3Byb3h5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHByb3h5TWFwLnNldChvYmosIHByb3h5KTtcbiAgICBwcm94eU9iak1hcC5zZXQocHJveHksIG9iaik7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICBPYmplY3Qua2V5cyhuZXdWYWwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICh0aGlzLl9wcm94eSBhcyBhbnkpW2tleV0gPSAobmV3VmFsIGFzIGFueSlba2V5XTtcbiAgICB9KTtcbiAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm46ICgpID0+IHZvaWQpIHtcbiAgd3JhcEZuSGlkZVJlZk1vZGUoZm4pKCk7XG59XG4iLCJpbXBvcnQgeyBGcmFnbWVudCwgRnJhZ21lbnRMaXN0IH0gZnJvbSAnLi9mcmFnbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVBdXRvcnVuLCBjcmVhdGVSZWFjdGl2ZSwgUmVmLCBydW5JblJlZk1vZGUsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmU8VCBleHRlbmRzICgpID0+IEZyYWdtZW50PihmdW5jOiBUKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgZnVuYy5fX2lzZGlyZWN0aXZlX18gPSB0cnVlO1xuICByZXR1cm4gZnVuYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0aXZlKHZhbDogYW55KSB7XG4gIHJldHVybiB2YWw/Ll9faXNkaXJlY3RpdmVfXyA9PT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRpZihcbiAgY29uZDogKCkgPT4gYm9vbGVhbixcbiAgeWVzOiAoKSA9PiBGcmFnbWVudCxcbiAgbm86ICgpID0+IEZyYWdtZW50XG4pIHtcbiAgcmV0dXJuIGRpcmVjdGl2ZSgoKSA9PiB7XG4gICAgbGV0IGxhc3RSZXN1bHQ6IGJvb2xlYW47XG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0RnJhZ21lbnQ6IEZyYWdtZW50O1xuXG4gICAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgICBjb25zdCBuZXdSZXN1bHQgPSBjb25kKCk7XG4gICAgICBpZiAoIWluaXRlZCkge1xuICAgICAgICBsYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgICAgICBsYXN0RnJhZ21lbnQgPSBsYXN0UmVzdWx0ISA/IHllcygpIDogbm8oKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdGcmFnbWVudCA9IG5ld1Jlc3VsdCA/IHllcygpIDogbm8oKTtcbiAgICAgIGxhc3RGcmFnbWVudC5yZXBsYWNlV2l0aChuZXdGcmFnbWVudCk7XG4gICAgICBsYXN0RnJhZ21lbnQgPSBuZXdGcmFnbWVudDtcbiAgICAgIGxhc3RSZXN1bHQgPSBuZXdSZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdEZyYWdtZW50ITtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlSXRlbTxUPih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikge1xuICByZXR1cm4gY3JlYXRlUmVhY3RpdmUoe1xuICAgIHZhbHVlLFxuICAgIGluZGV4LFxuICB9LCB0cnVlKTtcbn1cblxuZXhwb3J0IHR5cGUgUmVhY3RpdmVJdGVtPFQ+ID0ge1xuICB2YWx1ZTogVDtcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiAkbWFwPFQ+KFxuICByYXdMaXN0OiBUW10sXG4gIG1hcEZ1bmM6IChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IEZyYWdtZW50LFxuICBrZXlGdW5jOiAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiBzdHJpbmcgfCBudW1iZXJcbikge1xuICBjb25zdCBsaXN0ID0gKHJhd0xpc3QgYXMgYW55KSBhcyBSZWY7XG4gIGNvbnN0IGxpc3REYXRhID0gKGxpc3QgYXMgYW55KSBhcyBUW107XG5cbiAgbGV0IGxhc3RSZWFjdGl2ZUl0ZW1zID0gbGlzdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZUl0ZW0oaXRlbSwgaW5kZXgpO1xuICB9KTtcblxuICBjb25zdCBmcmFnbWVudExpc3QgPSBuZXcgRnJhZ21lbnRMaXN0KCk7XG5cbiAgY29uc3QgbWFwRnVuY1dyYXAgPSAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgbGV0IGZyYWdtZW50OiBGcmFnbWVudDtcbiAgICBydW5JblJlZk1vZGUoKCkgPT4ge1xuICAgICAgZnJhZ21lbnQgPSBtYXBGdW5jKGl0ZW0pO1xuICAgICAgZnJhZ21lbnQucmVhY3RpdmVJdGVtID0gaXRlbTtcbiAgICB9KVxuICAgIHJldHVybiBmcmFnbWVudCE7XG4gIH07XG5cbiAgY29uc3Qga2V5RnVuY1dyYXAgPSB3cmFwRm5IaWRlUmVmTW9kZSgoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgY29uc3QgciA9IGtleUZ1bmMoaXRlbSk7XG4gICAgaWYgKHR5cGVvZiByICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoXG4gICAgICAgICdrZXkgb2YgJG1hcCBzaG91bGQgcmV0dXJuIHN0cmluZyBvciBudW1iZXIsIGJ1dCBnb3QgJyArIHIsXG4gICAgICAgIGtleUZ1bmMudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH0pO1xuXG4gIGxldCBsYXN0RnJhZ21lbnRzID0gbGlzdERhdGEubWFwKChfLCBpbmRleCkgPT5cbiAgICBtYXBGdW5jV3JhcChsYXN0UmVhY3RpdmVJdGVtc1tpbmRleF0pXG4gICk7XG4gIGxldCBsYXN0S2V5cyA9IGxpc3REYXRhLm1hcCgoXywgaW5kZXgpID0+XG4gICAga2V5RnVuY1dyYXAobGFzdFJlYWN0aXZlSXRlbXNbaW5kZXhdKVxuICApO1xuXG4gIGxhc3RGcmFnbWVudHMuZm9yRWFjaCgoZnJhZywgaW5kZXgpID0+IHtcbiAgICBmcmFnbWVudExpc3QuYXBwZW5kRnJhZ21lbnQoZnJhZywgbGFzdEtleXNbaW5kZXhdKTtcbiAgfSk7XG5cbiAgbGV0IGluaXRlZCA9IGZhbHNlO1xuXG4gIGNyZWF0ZUF1dG9ydW4obm90cmFjayA9PiB7XG4gICAgaWYgKCFpbml0ZWQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRlZCA9IGxpc3QubGVuZ3RoO1xuICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ID0gKGxpc3QgYXMgdW5rbm93bikgYXMgYW55W107XG5cbiAgICBub3RyYWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0tleXMgPSBuZXdMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgIGtleUZ1bmNXcmFwKGNyZWF0ZVJlYWN0aXZlSXRlbShpdGVtLCBpbmRleCkpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsYXN0S2V5cyA9IGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5tYXAoaXRlbSA9PiBpdGVtLmtleSEpO1xuXG4gICAgICAvLyBkaWZmIGFuZCBwYXRjaCBmcm9tIGtleXNcbiAgICAgIG5ld0tleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0S2V5cyA9IGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5tYXAoaXRlbSA9PiBpdGVtLmtleSEpO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsYXN0S2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgLy8gaW5zZXJ0XG4gICAgICAgICAgLy8gY2FuIG5vdCBmaW5kIGluIG9sZCBsaXN0LCBtZWFuIGluc2VydFxuICAgICAgICAgIC8vIGluc2VydCB0byBjdXJyZW50IGluZGV4XG4gICAgICAgICAgY29uc3QgcmVhY3RpdmVJdGVtID0gY3JlYXRlUmVhY3RpdmVJdGVtKG5ld0xpc3RbaW5kZXhdLCBpbmRleCk7XG5cbiAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IG1hcEZ1bmNXcmFwKHJlYWN0aXZlSXRlbSk7XG5cbiAgICAgICAgICBmcmFnbWVudExpc3QuaW5zZXJ0KGluZGV4LCBmcmFnbWVudCwga2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgLy8gbW92ZVxuXG4gICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleDtcblxuICAgICAgICAgIGZyYWdtZW50TGlzdC5tb3ZlKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZW1vdmVkID0gbGFzdEtleXMuZmlsdGVyKGtleSA9PiBuZXdLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpO1xuICAgICAgZnJhZ21lbnRMaXN0LnJlbW92ZVdpdGhLZXlzKHJlbW92ZWQpO1xuXG4gICAgICAvLyBhcHBseSBuZXcgcmVhY3RpdmVJbmRleFxuICAgICAgZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLmZvckVhY2goXG4gICAgICAgIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQhLnJlYWN0aXZlSXRlbSEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50TGlzdDtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlQXV0b3J1biwgY3JlYXRlUmVhY3RpdmUsIGlzUmVmLCByZWFjdGl2ZUNvbXBvbmVudCwgUmVmLCBydW5JblJlZk1vZGUsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudChcbiAgY29tcDogKHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4gRnJhZ21lbnQsXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cbikge1xuICBjb25zdCBjb21wb25lbnQgPSByZWFjdGl2ZUNvbXBvbmVudChjb21wIGFzIGFueSwgcHJvcHMpO1xuICBsZXQgZnJhZ21lbnQ6IEZyYWdtZW50O1xuICBydW5JblJlZk1vZGUoKCkgPT4ge1xuICAgIGZyYWdtZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgIGZyYWdtZW50LmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50ITtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxUID0gYW55PiB7XG4gIHByb3BzOiBUO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVCkge1xuICAgIHRoaXMucHJvcHMgPSBjcmVhdGVSZWFjdGl2ZShwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsIGFzIHVua25vd24gYXMgRnJhZ21lbnQ7XG4gIH1cbiAgb25Nb3VudCgpIHt9XG4gIG9uRGVzdG9yeSgpIHt9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHIobm9kZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICBjb25zb2xlLmVycm9yKCdzaG91bGQgYmUgY2xhc3NOYW1lLCBidXQgZ290IGNsYXNzJyk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBrZXkgPSAnY2xhc3MnO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSB2YWx1ZS5fX2h0bWw7XG4gICAgaWYgKGlzUmVmKGh0bWwpKSB7XG4gICAgICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBodG1sLnZhbHVlO1xuICAgICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlZicpIHtcbiAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYSAocmVmKSA9PiB2b2lkXG4gICAgdmFsdWUobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBiaW5kQXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBSZWY8YW55Pikge1xuICBsZXQgbGFzdFZhbHVlID0gdmFsdWUudmFsdWU7XG5cbiAgY29uc3QgaXNFdmVudCA9IC9eb25bQS1aXS8udGVzdChrZXkpO1xuICBjb25zdCBldmVudE5hbWUgPSBpc0V2ZW50ID8ga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpIDogJyc7XG4gIGxldCBsYXN0VmFsdWVFdmVudEhhbmRsZXIgPSBpc0V2ZW50ID8gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlKSA6ICgpID0+IHt9O1xuXG4gIHNjaGVkdWxlKCgpID0+IHtcbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QXR0cihub2RlLCBrZXksIGxhc3RWYWx1ZSk7XG4gIH0pO1xuXG4gIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbGFzdFZhbHVlRXZlbnRIYW5kbGVyID0gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0QXR0cihub2RlLCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9KTtcbiAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoKFxuICB0eXBlOiBzdHJpbmcgfCBGdW5jdGlvbixcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gIC4uLmNoaWxkcmVuOiBzdHJpbmdbXVxuKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50KCk7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChwcm9wcykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIC9eb25bQS1aXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICBiaW5kQXR0cih0YWcsIGtleSwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlVmFsID0gY2hpbGQgYXMgUmVmPGFueT47XG4gICAgICAgICAgY29uc3QgdmFsID0gcmVhY3RpdmVWYWwudmFsdWU7XG5cbiAgICAgICAgICAvLyB0ZXh0bm9kZVxuICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycgKyB2YWwpO1xuICAgICAgICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSByZWFjdGl2ZVZhbC52YWx1ZTtcbiAgICAgICAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGV4dE5vZGUubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGlyZWN0aXZlKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGNoaWxkIGFzICgpID0+IEZyYWdtZW50O1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZGlyZWN0aXZlKCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIodGFnLCBmcmFnbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoRnJhZ21lbnQuaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAoY2hpbGQgYXMgRnJhZ21lbnQpLmFwcGVuZFRvQ29udGFpbmVyKHRhZywgZnJhZ21lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gY29tcG9uZW50XG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzUmVmKHR5cGUpKSB7XG4gICAgLy8gcmVhY3RpdmUgY29tcG9uZW50XG4gICAgY29uc3QgY29tcCA9IHR5cGUgYXMgUmVmO1xuICAgIGxldCBmcmFnOiBGcmFnbWVudDtcbiAgICBjcmVhdGVBdXRvcnVuKChub3RyYWNrKSA9PiB7XG4gICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcC52YWx1ZTtcbiAgICAgICAgbm90cmFjaygoKSA9PiB7XG4gICAgICAgICAgZnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXBvbmVudCwge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3RnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXAudmFsdWUsIHtcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICAgICAgICBmcmFnLnJlcGxhY2VXaXRoKG5ld0ZyYWcpO1xuICAgICAgICBmcmFnID0gbmV3RnJhZztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZyE7XG4gIH1cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGZyYWdtZW50OiBGcmFnbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIsIG51bGwpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBKU1gge1xuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XG4gICAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgaW1wb3J0IHsgaCwgcmVhY3RpdmUsIGNvbXB1dGVkLCBhdXRvcnVuLCAkaWYsICRtYXAsIENvbXBvbmVudCB9IGZyb20gJ292ZXJkb20nO1xuICAgIGltcG9ydCBDb2RlQm94IGZyb20gJy9ob21lL3J1bm5lci93b3JrL292ZXJkb20vb3ZlcmRvbS9wYWNrYWdlcy9vdmVyZG9tLXNpdGUvaGVscGVyL2NvZGUtYm94J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj48aDEgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuPGgyIGlkPVwiaGVsbG8td29ybGRcIj5IZWxsbyB3b3JsZDwvaDI+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIZWxsbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5IZWxsbyBXb3JsZDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBIZWxsbyUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JIZWxsbyUyMFdvcmxkJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzdGF0ZVwiPlN0YXRlPC9oMj5cbjxwPldlIGNhbiB1c2UgPGNvZGU+QHJlYWN0aXZlPC9jb2RlPiB0byBtYWtlIGF0dHJpYnV0ZSByZWFjdGl2ZTwvcD5cbjx1bD5cbjxsaT5Vc2UgaW4gPGNvZGU+SlNYPC9jb2RlPjwvbGk+XG48bGk+TXV0YXRlIGl0IHRvIHVwZGF0ZSBpbiBjYWxsYmFja3M8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjBleHRlbmRzJTIwQ29tcG9uZW50JTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCdGhpcy5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcHV0ZWRcIj5Db21wdXRlZDwvaDI+XG48dWw+XG48bGk+PGNvZGU+QGNvbXB1dGVkIGdldCB4KCk8L2NvZGU+IHRvIGNyZWF0ZSBjb21wdXRlZDwvbGk+XG48bGk+Y29tcHV0ZWQgcmVzdWx0IGlzIHNhbWUgd2l0aCByZWFjdGl2ZSBidXQgcmVhZG9ubHk8L2xpPlxuPC91bD5cbjxoMyBpZD1cImV4YW1wbGVcIj5FeGFtcGxlPC9oMz5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgQGNvbXB1dGVkIGdldCBkb3VibGVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQgKiAyO1xuICAgIH1cbiAgICBpbmMoKSB7XG4gICAgICAgIHRoaXMuY291bnQgKys7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxwPiBDb3VudGVyOiB7dGhpcy5jb3VudH0gPC9wPlxuICAgICAgICAgICAgPHA+IERvdWJsZToge3RoaXMuZG91YmxlQ291bnR9IDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5pbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMCU0MGNvbXB1dGVkJTIwZ2V0JTIwZG91YmxlQ291bnQoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHRoaXMuY291bnQlMjAqJTIwMiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTIwQ291bnRlciUzQSUyMCU3QnRoaXMuY291bnQlN0QlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTIwRG91YmxlJTNBJTIwJTdCdGhpcy5kb3VibGVDb3VudCU3RCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wb25lbnRcIj5Db21wb25lbnQ8L2gyPlxuPHVsPlxuPGxpPkNsYXNzIHdpdGggZXh0ZW5kcyA8Y29kZT5Db21wb25lbnQ8L2NvZGU+IGlzIGEgY29tcG9uZW50PC9saT5cbjxsaT48Y29kZT50aGlzLnByb3BzPC9jb2RlPiBpcyBwcm9wcyByZWFjdGl2ZSBvYmplY3Q8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8cD5JIHdpbGwgZGlzcGxheSBjb3VudCBmcm9tIHsnPERpc3BsYXkvPid9OiB7dGhpcy5wcm9wcy5jb3VudH08L3A+O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxEaXNwbGF5IGNvdW50PXt0aGlzLmNvdW50fS8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJjbGFzcyUyMERpc3BsYXklMjBleHRlbmRzJTIwQ29tcG9uZW50JTIwJTdCJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnAlMjZndCUzQkklMjB3aWxsJTIwZGlzcGxheSUyMGNvdW50JTIwZnJvbSUyMCU3QiUyNiUyMzAzOSUzQiUyNmx0JTNCRGlzcGxheSUyRiUyNmd0JTNCJTI2JTIzMDM5JTNCJTdEJTNBJTIwJTdCdGhpcy5wcm9wcy5jb3VudCU3RCUyNmx0JTNCJTJGcCUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCRGlzcGxheSUyMGNvdW50JTNEJTdCdGhpcy5jb3VudCU3RCUyRiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJsb2dpY1wiPkxvZ2ljPC9oMj5cbjxoMyBpZD1cImlmXCI+JGlmPC9oMz5cbjxwPlVzZSA8Y29kZT4kaWY8L2NvZGU+IHRvIGRvIGEgc3dpdGNoIGxvZ2ljIGluIDxjb2RlPkpTWDwvY29kZT4uPC9wPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ291bnRlckFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHJlYWN0aXZlIGNvdW50ID0gMDtcblxuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5jb3VudCA+PSAzIDogXG4gICAgICAgIHskaWYoXG4gICAgICAgICAgICAvLyBjb25kXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNvdW50ID49IDMsXG4gICAgICAgICAgICAvLyB5ZXNcbiAgICAgICAgICAgICgpID0+IDxkaXY+WUVTIHt0aGlzLmNvdW50fTwvZGl2PixcbiAgICAgICAgICAgIC8vIE5PXG4gICAgICAgICAgICAoKSA9PiA8ZGl2Pk5PIHt0aGlzLmNvdW50fTwvZGl2PixcbiAgICAgICAgKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0Jjb3VudCUyMCUyNmd0JTNCJTNEJTIwMyUyMCUzQSUyMCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyNGlmKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGNvbmQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5jb3VudCUyMCUyNmd0JTNCJTNEJTIwMyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMHllcyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQmRpdiUyNmd0JTNCWUVTJTIwJTdCdGhpcy5jb3VudCU3RCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBOTyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQmRpdiUyNmd0JTNCTk8lMjAlN0J0aGlzLmNvdW50JTdEJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgzIGlkPVwibWFwXCI+JG1hcDwvaDM+XG48cD5Vc2UgPGNvZGU+JG1hcDwvY29kZT4gZm9yIGEgbGlzdCBtYXA8L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBAcmVhY3RpdmUgbGlzdCA9IFsndGVzdCcgKyBjb3VudCArK107XG5cbiAgYWRkVG9kbygpIHtcbiAgICAgIC8vIHVzZSBhcnJheS5wdXNoL3NwbGljZS9zaGlmdC91bnNoaWZ0IHRvIG11dGF0ZVxuICAgICAgdGhpcy5saXN0LnB1c2goJ25ldyB0b2RvJyArIGNvdW50ICsrKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDx1bD5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRUb2RvfT5BREQgVE9ETzwvYnV0dG9uPlxuICAgICAgeyRtYXAoXG4gICAgICAgICAgdGhpcy5saXN0LCAgLy8gYXJyYXlcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgICAgICAgLy8gaXRlbS52YWx1ZSBtZWFuIGl0ZW1cbiAgICAgICAgICAgICAgLy8gaXRlbS5pbmRleCBtZWFuIGluZGV4XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgW3tpdGVtLmluZGV4fV0ge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAvLyBrZXkgbWFwLCBhbHRlcm5hdGl2ZSB0byA8bGkga2V5PiBpbiBSZWFjdFxuICAgICAgICAgICAgICAvLyBtdXN0IGJlIHN0cmluZyBvciBudW1iZXIsIGFuZCBrZWVwIHVuaXF1ZSBpbiBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICl9XG4gICAgPC91bD47XG4gIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImxldCUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUwQWV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMEFwcCUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGxpc3QlMjAlM0QlMjAlNUIlMjYlMjMwMzklM0J0ZXN0JTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIlNUQlM0IlMEElMEElMjAlMjBhZGRUb2RvKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBhcnJheS5wdXNoJTJGc3BsaWNlJTJGc2hpZnQlMkZ1bnNoaWZ0JTIwdG8lMjBtdXRhdGUlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QucHVzaCglMjYlMjMwMzklM0JuZXclMjB0b2RvJTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIpJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmFkZFRvZG8lN0QlMjZndCUzQkFERCUyMFRPRE8lMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0bWFwKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdCUyQyUyMCUyMCUyRiUyRiUyMGFycmF5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtYXAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLnZhbHVlJTIwbWVhbiUyMGl0ZW0lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLmluZGV4JTIwbWVhbiUyMGluZGV4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QiU3Qml0ZW0uaW5kZXglN0QlNUQlMjAlN0JpdGVtLnZhbHVlJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCKCklMjAlM0QlMjZndCUzQiUyMHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCUyQyUyMDEpJTdEJTI2Z3QlM0JSRU1PVkUlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwa2V5JTIwbWFwJTJDJTIwYWx0ZXJuYXRpdmUlMjB0byUyMCUyNmx0JTNCbGklMjBrZXklMjZndCUzQiUyMGluJTIwUmVhY3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtdXN0JTIwYmUlMjBzdHJpbmclMjBvciUyMG51bWJlciUyQyUyMGFuZCUyMGtlZXAlMjB1bmlxdWUlMjBpbiUyMGxpc3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBpdGVtLnZhbHVlJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGdWwlMjZndCUzQiUzQiUwQSUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJ0b2RvLWV4YW1wbGVcIj5Ub2RvIEV4YW1wbGU8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIEByZWFjdGl2ZSBsaXN0ID0gW3tcbiAgICBpZDogY291bnQrKyxcbiAgICB0ZXh0OiAndG9kbycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfV07XG4gIEByZWFjdGl2ZSBpbnB1dCA9ICcnO1xuXG4gIGFkZFRvZG8oKSB7XG4gICAgICAvLyB1c2UgYXJyYXkucHVzaC9zcGxpY2Uvc2hpZnQvdW5zaGlmdCB0byBtdXRhdGVcbiAgICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgICAgaWQ6IGNvdW50KyssXG4gICAgICAgIHRleHQ6IHRoaXMuaW5wdXQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgfVxuXG4gIGhhbmRsZVN3YXAoaW5kZXgpIHtcbiAgICAvLyB1c2Ugc3BsaWNlIHRvIHN3YXAgaXRlbXNcbiAgICAvLyByZWFjdGl2ZSBhcnJheSBjYW4gbm90IHRyYWNrIG5hdGl2ZSBzd2FwXG4gICAgY29uc3QgdGVtcCA9IFt0aGlzLmxpc3RbaW5kZXhdLCB0aGlzLmxpc3RbaW5kZXggKyAxXV07XG4gICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMiwgdGVtcFsxXSwgdGVtcFswXSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8dWw+XG4gICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuaW5wdXR9IG9uSW5wdXQ9eyhlKSA9PiB0aGlzLmlucHV0ID0gZS50YXJnZXQudmFsdWV9PjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICAgIHskbWFwKFxuICAgICAgICAgIHRoaXMubGlzdCwgIC8vIGFycmF5XG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAgIC8vIGl0ZW0uaW5kZXggbWVhbiBpbmRleFxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlLnRleHR9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgeyRpZihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5pbmRleCA8IHRoaXMubGlzdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3dhcChpdGVtLmluZGV4KX0+U1dBUCBORVhUPC9idXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8c3Bhbj5bVEhFIExBU1RdPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBhbmQga2VlcCB1bmlxdWUgaW4gbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS5pZDtcbiAgICAgICAgICB9XG4gICAgICApfVxuICAgIDwvdWw+O1xuICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJsZXQlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBBcHAlMjBleHRlbmRzJTIwQ29tcG9uZW50JTIwJTdCJTBBJTIwJTIwJTQwcmVhY3RpdmUlMjBsaXN0JTIwJTNEJTIwJTVCJTdCJTBBJTIwJTIwJTIwJTIwaWQlM0ElMjBjb3VudCUyQiUyQiUyQyUwQSUyMCUyMCUyMCUyMHRleHQlM0ElMjAlMjYlMjMwMzklM0J0b2RvJTI2JTIzMDM5JTNCJTJDJTBBJTIwJTIwJTIwJTIwY29tcGxldGVkJTNBJTIwZmFsc2UlMkMlMEElMjAlMjAlN0QlNUQlM0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGlucHV0JTIwJTNEJTIwJTI2JTIzMDM5JTNCJTI2JTIzMDM5JTNCJTNCJTBBJTBBJTIwJTIwYWRkVG9kbygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwYXJyYXkucHVzaCUyRnNwbGljZSUyRnNoaWZ0JTJGdW5zaGlmdCUyMHRvJTIwbXV0YXRlJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5saXN0LnB1c2goJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaWQlM0ElMjBjb3VudCUyQiUyQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRleHQlM0ElMjB0aGlzLmlucHV0JTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY29tcGxldGVkJTNBJTIwZmFsc2UlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlN0QpJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5pbnB1dCUyMCUzRCUyMCUyNiUyMzAzOSUzQiUyNiUyMzAzOSUzQiUzQiUwQSUyMCUyMCU3RCUwQSUwQSUyMCUyMGhhbmRsZVN3YXAoaW5kZXgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwc3BsaWNlJTIwdG8lMjBzd2FwJTIwaXRlbXMlMEElMjAlMjAlMjAlMjAlMkYlMkYlMjByZWFjdGl2ZSUyMGFycmF5JTIwY2FuJTIwbm90JTIwdHJhY2slMjBuYXRpdmUlMjBzd2FwJTBBJTIwJTIwJTIwJTIwY29uc3QlMjB0ZW1wJTIwJTNEJTIwJTVCdGhpcy5saXN0JTVCaW5kZXglNUQlMkMlMjB0aGlzLmxpc3QlNUJpbmRleCUyMCUyQiUyMDElNUQlNUQlM0IlMEElMjAlMjAlMjAlMjB0aGlzLmxpc3Quc3BsaWNlKGluZGV4JTJDJTIwMiUyQyUyMHRlbXAlNUIxJTVEJTJDJTIwdGVtcCU1QjAlNUQpJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmlucHV0JTIwdmFsdWUlM0QlN0J0aGlzLmlucHV0JTdEJTIwb25JbnB1dCUzRCU3QihlKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5pbnB1dCUyMCUzRCUyMGUudGFyZ2V0LnZhbHVlJTdEJTI2Z3QlM0IlMjZsdCUzQiUyRmlucHV0JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmFkZFRvZG8lN0QlMjZndCUzQkFERCUyMFRPRE8lMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0bWFwKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdCUyQyUyMCUyMCUyRiUyRiUyMGFycmF5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtYXAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLnZhbHVlJTIwbWVhbiUyMGl0ZW0lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLmluZGV4JTIwbWVhbiUyMGluZGV4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QiU3Qml0ZW0uaW5kZXglN0QlNUQlMjAlN0JpdGVtLnZhbHVlLnRleHQlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0IoKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5saXN0LnNwbGljZShpdGVtLmluZGV4JTJDJTIwMSklN0QlMjZndCUzQlJFTU9WRSUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRpZiglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwaXRlbS5pbmRleCUyMCUyNmx0JTNCJTIwdGhpcy5saXN0Lmxlbmd0aCUyMC0lMjAxJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QigpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmhhbmRsZVN3YXAoaXRlbS5pbmRleCklN0QlMjZndCUzQlNXQVAlMjBORVhUJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQnNwYW4lMjZndCUzQiU1QlRIRSUyMExBU1QlNUQlMjZsdCUzQiUyRnNwYW4lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBrZXklMjBtYXAlMkMlMjBhbHRlcm5hdGl2ZSUyMHRvJTIwJTI2bHQlM0JsaSUyMGtleSUyNmd0JTNCJTIwaW4lMjBSZWFjdCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG11c3QlMjBiZSUyMHN0cmluZyUyMG9yJTIwbnVtYmVyJTJDJTIwYW5kJTIwa2VlcCUyMHVuaXF1ZSUyMGluJTIwbGlzdCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMGl0ZW0udmFsdWUuaWQlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjApJTdEJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZ1bCUyNmd0JTNCJTNCJTBBJTIwJTIwJTdEJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImxpZmVjeWNsZVwiPkxpZmVDeWNsZTwvaDI+XG48dWw+XG48bGk+PGNvZGU+b25Nb3VudCgpPC9jb2RlPiB3aWxsIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQmIzM5O3MgRE9NIGlzIGFwcGVuZCB0byBkb2N1bWVudDwvbGk+XG48bGk+PGNvZGU+b25EZXN0b3J5KCk8L2NvZGU+IHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCYjMzk7cyBET00gaXMgcmVtb3ZlZCBmcm9tIGRvY3VtZW50PC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgQ29tcG9uZW50T25lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2Pk9ORTwvZGl2PjtcbiAgICB9XG4gICAgb25Nb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdW50IG9uZScpO1xuICAgIH1cbiAgICBvbkRlc3RvcnkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbmUgZGVzdG9yeWVkJyk7XG4gICAgfVxufVxuY2xhc3MgQ29tcG9uZW50VHdvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlRXTzwvZGl2PjtcbiAgICB9XG4gICAgb25Nb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdW50IHR3bycpO1xuICAgIH1cbiAgICBvbkRlc3RvcnkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0d28gZGVzdG9yeWVkJyk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEByZWFjdGl2ZSBpc0NvbXBvbmVudE9uZSA9IHRydWU7XG4gICAgQGNvbXB1dGVkIGdldCBjb21wb25lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0NvbXBvbmVudE9uZSA/IENvbXBvbmVudE9uZTogQ29tcG9uZW50VHdvO1xuICAgIH1cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRPbmUgPSAhdGhpcy5pc0NvbXBvbmVudE9uZTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgIGNvbnN0IENvbXAgPSB0aGlzLmNvbXBvbmVudDtcbiAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICA8Q29tcCAvPlxuICAgICAgPC9idXR0b24+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImNsYXNzJTIwQ29tcG9uZW50T25lJTIwZXh0ZW5kcyUyMENvbXBvbmVudCUyMCU3QiUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQk9ORSUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBvbk1vdW50KCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb25zb2xlLmxvZyglMjYlMjMwMzklM0Jtb3VudCUyMG9uZSUyNiUyMzAzOSUzQiklM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBvbkRlc3RvcnkoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvbnNvbGUubG9nKCUyNiUyMzAzOSUzQm9uZSUyMGRlc3RvcnllZCUyNiUyMzAzOSUzQiklM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0QlMEFjbGFzcyUyMENvbXBvbmVudFR3byUyMGV4dGVuZHMlMjBDb21wb25lbnQlMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JUV08lMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwb25Nb3VudCgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY29uc29sZS5sb2coJTI2JTIzMDM5JTNCbW91bnQlMjB0d28lMjYlMjMwMzklM0IpJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwb25EZXN0b3J5KCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb25zb2xlLmxvZyglMjYlMjMwMzklM0J0d28lMjBkZXN0b3J5ZWQlMjYlMjMwMzklM0IpJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQXBwJTIwZXh0ZW5kcyUyMENvbXBvbmVudCUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwaXNDb21wb25lbnRPbmUlMjAlM0QlMjB0cnVlJTNCJTBBJTIwJTIwJTIwJTIwJTQwY29tcHV0ZWQlMjBnZXQlMjBjb21wb25lbnQoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHRoaXMuaXNDb21wb25lbnRPbmUlMjAlM0YlMjBDb21wb25lbnRPbmUlM0ElMjBDb21wb25lbnRUd28lM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBoYW5kbGVDbGljaygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5pc0NvbXBvbmVudE9uZSUyMCUzRCUyMCF0aGlzLmlzQ29tcG9uZW50T25lJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjBjb25zdCUyMENvbXAlMjAlM0QlMjB0aGlzLmNvbXBvbmVudCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuaGFuZGxlQ2xpY2slN0QlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCQ29tcCUyMCUyRiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJwbGF5Z3JvdW5kXCI+UGxheUdyb3VuZDwvaDI+XG48cD5QbGF5IG9ubGluZSB3aXRoIDxhIGhyZWY9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbmF1Z2h0eS1oaWxsLXVna2dqP2ZpbGU9L3NyYy9pbmRleC50c3hcIj5Db2RlU2FuZGJveDwvYT48L3A+XG48L2Rpdj47XG4gICAgICAgIH1cbiAgICB9IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=