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

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





function htmlDecode(input) {
  var e = document.createElement('textarea');
  e.innerHTML = input; // handle case of empty input

  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

var Codebox = (_class = (_temp = /*#__PURE__*/function () {
  function Codebox() {
    _classCallCheck(this, Codebox);

    _initializerDefineProperty(this, "props", _descriptor, this);
  }

  _createClass(Codebox, [{
    key: "handleCodeRef",
    value: function handleCodeRef(dom) {
      setTimeout(function () {
        // @ts-ignore
        dom.innerHTML = Prism.highlight(htmlDecode(dom.innerHTML), Prism.languages.javascript);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.props.component;
      return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "codebox"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("pre", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", {
        ref: this.handleCodeRef,
        dangerouslySetInnerHTML: {
          __html: this.props.code
        }
      }))), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "demo"
      }, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(Component, null)));
    }
  }]);

  return Codebox;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "props", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
  var ins = new component(); // @ts-ignore

  ins.props = props || {};
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
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Demo = /*#__PURE__*/function () {
  function Demo() {
    _classCallCheck(this, Demo);
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
          module.exports = /*#__PURE__*/function () {
            function Hello() {
              _classCallCheck(this, Hello);
            }

            _createClass(Hello, [{
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Hello World");
              }
            }]);

            return Hello;
          }();
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20Hello%20%7B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3BHello%20World%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "state"
      }, "State"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "We can use ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@reactive"), " to make attribute reactive"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Use in ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX")), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Mutate it to update in callbacks")), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class, _descriptor, _temp;

          module.exports = (_class = (_temp = /*#__PURE__*/function () {
            function CounterApp() {
              _classCallCheck(this, CounterApp);

              _initializerDefineProperty(this, "count", _descriptor, this);
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
          }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
          code: decodeURIComponent("export%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20Counter%3A%20%7Bthis.count%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
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

          module.exports = (_class3 = (_temp2 = /*#__PURE__*/function () {
            function CounterApp() {
              _classCallCheck(this, CounterApp);

              _initializerDefineProperty(this, "count", _descriptor2, this);
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
          }(), _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
          code: decodeURIComponent("export%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20%40computed%20get%20doubleCount()%20%7B%0A%20%20%20%20%20%20%20%20return%20this.count%20*%202%3B%0A%20%20%20%20%7D%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Counter%3A%20%7Bthis.count%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Double%3A%20%7Bthis.doubleCount%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "component"
      }, "Component"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Class with ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "rendeer"), " is just component"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "this.props"), " is a object, you will need to add ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@reactive"), " for it if need reactive")), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class5, _descriptor3, _temp3, _class7, _descriptor4, _temp4;

          var Display = (_class5 = (_temp3 = /*#__PURE__*/function () {
            function Display() {
              _classCallCheck(this, Display);

              _initializerDefineProperty(this, "props", _descriptor3, this);
            }

            _createClass(Display, [{
              key: "render",
              value: function render() {
                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "I will display count from ", '<Display/>', ": ", this.props.count);
              }
            }]);

            return Display;
          }(), _temp3), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "props", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: null
          })), _class5);
          module.exports = (_class7 = (_temp4 = /*#__PURE__*/function () {
            function CounterApp() {
              _classCallCheck(this, CounterApp);

              _initializerDefineProperty(this, "count", _descriptor4, this);
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
          }(), _temp4), (_descriptor4 = _applyDecoratedDescriptor(_class7.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
          code: decodeURIComponent("class%20Display%20%7B%0A%20%20%20%20%40reactive%20props%3B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bp%26gt%3BI%20will%20display%20count%20from%20%7B%26%23039%3B%26lt%3BDisplay%2F%26gt%3B%26%23039%3B%7D%3A%20%7Bthis.props.count%7D%26lt%3B%2Fp%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aexport%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3BDisplay%20count%3D%7Bthis.count%7D%2F%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
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
          var _class9, _descriptor5, _temp5;

          module.exports = (_class9 = (_temp5 = /*#__PURE__*/function () {
            function CounterApp() {
              _classCallCheck(this, CounterApp);

              _initializerDefineProperty(this, "count", _descriptor5, this);
            }

            _createClass(CounterApp, [{
              key: "inc",
              value: function inc() {
                this.count++;
              }
            }, {
              key: "render",
              value: function render() {
                var _this = this;

                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", this.count, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "count >= 3 :", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$if)( // cond
                function () {
                  return _this.count >= 3;
                }, // yes
                function () {
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "YES ", _this.count);
                }, // NO
                function () {
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "NO ", _this.count);
                })));
              }
            }]);

            return CounterApp;
          }(), _temp5), (_descriptor5 = _applyDecoratedDescriptor(_class9.prototype, "count", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class9);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20Counter%3A%20%7Bthis.count%7D%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3Bcount%20%26gt%3B%3D%203%20%3A%20%0A%20%20%20%20%20%20%20%20%7B%24if(%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20cond%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20this.count%20%26gt%3B%3D%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20yes%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BYES%20%7Bthis.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20NO%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BNO%20%7Bthis.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        id: "map"
      }, "$map"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Use ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "$map"), " for a list map"), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class11, _descriptor6, _temp6;

          var count = 0;
          module.exports = (_class11 = (_temp6 = /*#__PURE__*/function () {
            function App() {
              _classCallCheck(this, App);

              _initializerDefineProperty(this, "list", _descriptor6, this);
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
                var _this2 = this;

                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.addTodo
                }, "ADD TODO"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$map)(this.list, // array
                function (item) {
                  // map
                  // item.value mean item
                  // item.index mean index
                  return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "[", item.index, "] ", item.value, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                    onClick: function onClick() {
                      return _this2.list.splice(item.index, 1);
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
          }(), _temp6), (_descriptor6 = _applyDecoratedDescriptor(_class11.prototype, "list", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return ['test' + count++];
            }
          })), _class11);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("let%20count%20%3D%200%3B%0A%0Aexport%20default%20class%20App%20%7B%0A%20%20%40reactive%20list%20%3D%20%5B%26%23039%3Btest%26%23039%3B%20%2B%20count%20%2B%2B%5D%3B%0A%0A%20%20addTodo()%20%7B%0A%20%20%20%20%20%20%2F%2F%20use%20array.push%2Fsplice%2Fshift%2Funshift%20to%20mutate%0A%20%20%20%20%20%20this.list.push(%26%23039%3Bnew%20todo%26%23039%3B%20%2B%20count%20%2B%2B)%3B%0A%20%20%7D%0A%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20%26lt%3Bul%26gt%3B%0A%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.addTodo%7D%26gt%3BADD%20TODO%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%7B%24map(%0A%20%20%20%20%20%20%20%20%20%20this.list%2C%20%20%2F%2F%20array%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20map%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.value%20mean%20item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.index%20mean%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7Bitem.index%7D%5D%20%7Bitem.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.list.splice(item.index%2C%201)%7D%26gt%3BREMOVE%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20key%20map%2C%20alternative%20to%20%26lt%3Bli%20key%26gt%3B%20in%20React%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20must%20be%20string%20or%20number%2C%20and%20keep%20unique%20in%20list%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20item.value%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%26lt%3B%2Ful%26gt%3B%3B%0A%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "todo-example"
      }, "Todo Example"), function () {
        var mod = {
          exports: {}
        };

        (function (module) {
          var _class13, _descriptor7, _descriptor8, _temp7;

          var count = 0;
          module.exports = (_class13 = (_temp7 = /*#__PURE__*/function () {
            function App() {
              _classCallCheck(this, App);

              _initializerDefineProperty(this, "list", _descriptor7, this);

              _initializerDefineProperty(this, "input", _descriptor8, this);
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
                var _this3 = this;

                return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
                  value: this.input,
                  onInput: function onInput(e) {
                    return _this3.input = e.target.value;
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
                      return _this3.list.splice(item.index, 1);
                    }
                  }, "REMOVE"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.$if)(function () {
                    return item.index < _this3.list.length - 1;
                  }, function () {
                    return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                      onClick: function onClick() {
                        return _this3.handleSwap(item.index);
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
          }(), _temp7), (_descriptor7 = _applyDecoratedDescriptor(_class13.prototype, "list", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
          }), _descriptor8 = _applyDecoratedDescriptor(_class13.prototype, "input", [overdom__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return '';
            }
          })), _class13);
        })(mod);

        var component = mod.exports;
        return (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_overdom_overdom_packages_overdom_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("let%20count%20%3D%200%3B%0Aexport%20default%20class%20App%20%7B%0A%20%20%40reactive%20list%20%3D%20%5B%7B%0A%20%20%20%20id%3A%20count%2B%2B%2C%0A%20%20%20%20text%3A%20%26%23039%3Btodo%26%23039%3B%2C%0A%20%20%20%20completed%3A%20false%2C%0A%20%20%7D%5D%3B%0A%20%20%40reactive%20input%20%3D%20%26%23039%3B%26%23039%3B%3B%0A%0A%20%20addTodo()%20%7B%0A%20%20%20%20%20%20%2F%2F%20use%20array.push%2Fsplice%2Fshift%2Funshift%20to%20mutate%0A%20%20%20%20%20%20this.list.push(%7B%0A%20%20%20%20%20%20%20%20id%3A%20count%2B%2B%2C%0A%20%20%20%20%20%20%20%20text%3A%20this.input%2C%0A%20%20%20%20%20%20%20%20completed%3A%20false%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20this.input%20%3D%20%26%23039%3B%26%23039%3B%3B%0A%20%20%7D%0A%0A%20%20handleSwap(index)%20%7B%0A%20%20%20%20%2F%2F%20use%20splice%20to%20swap%20items%0A%20%20%20%20%2F%2F%20reactive%20array%20can%20not%20track%20native%20swap%0A%20%20%20%20const%20temp%20%3D%20%5Bthis.list%5Bindex%5D%2C%20this.list%5Bindex%20%2B%201%5D%5D%3B%0A%20%20%20%20this.list.splice(index%2C%202%2C%20temp%5B1%5D%2C%20temp%5B0%5D)%3B%0A%20%20%7D%0A%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20%26lt%3Bul%26gt%3B%0A%20%20%20%20%20%20%26lt%3Binput%20value%3D%7Bthis.input%7D%20onInput%3D%7B(e)%20%3D%26gt%3B%20this.input%20%3D%20e.target.value%7D%26gt%3B%26lt%3B%2Finput%26gt%3B%0A%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.addTodo%7D%26gt%3BADD%20TODO%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%7B%24map(%0A%20%20%20%20%20%20%20%20%20%20this.list%2C%20%20%2F%2F%20array%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20map%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.value%20mean%20item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.index%20mean%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7Bitem.index%7D%5D%20%7Bitem.value.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.list.splice(item.index%2C%201)%7D%26gt%3BREMOVE%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%24if(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20item.index%20%26lt%3B%20this.list.length%20-%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.handleSwap(item.index)%7D%26gt%3BSWAP%20NEXT%26lt%3B%2Fbutton%26gt%3B%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bspan%26gt%3B%5BTHE%20LAST%5D%26lt%3B%2Fspan%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20key%20map%2C%20alternative%20to%20%26lt%3Bli%20key%26gt%3B%20in%20React%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20must%20be%20string%20or%20number%2C%20and%20keep%20unique%20in%20list%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20item.value.id%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%26lt%3B%2Ful%26gt%3B%3B%0A%20%20%7D%0A%7D")
        });
      }(), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "playground"
      }, "PlayGround"), (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Play online with ", (0,overdom__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        href: "https://codesandbox.io/s/naughty-hill-ugkgj?file=/src/index.tsx"
      }, "CodeSandbox")));
    }
  }]);

  return Demo;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi9oZWxwZXIvY29kZS1ib3gvaW5kZXgudHN4Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2JhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uLi9zcmMvcmVhY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9kb2MvZ2V0LXN0YXJ0ZWQubWQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4Lmxlc3M/OTZjNSIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJodG1sRGVjb2RlIiwiaW5wdXQiLCJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIm5vZGVWYWx1ZSIsIkNvZGVib3giLCJkb20iLCJzZXRUaW1lb3V0IiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiQ29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnQiLCJoYW5kbGVDb2RlUmVmIiwiX19odG1sIiwiY29kZSIsInJlYWN0aXZlIiwiTG9nbyIsIkhlYWRlciIsIkFwcCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwidGFza3MiLCJkZWZlclRhc2tzIiwidGltZXIiLCJzY2hlZHVsZSIsInRhc2siLCJkZWZlciIsInRhc2tJdGVtcyIsIkFycmF5IiwiZGVmZXJJdGVtcyIsInRhc2tJdGVtIiwiaW5zZXJ0IiwiYXJyYXkiLCJpbmRleCIsIml0ZW0iLCJGcmFnbWVudCIsImNvbnN0cnVjdG9yIiwib2JqIiwiYXBwZW5kQ2hpbGQiLCJub2RlIiwiYXBwZW5kVG9Db250YWluZXIiLCJjb250YWluZXIiLCJjb250YWluZXJGcmFnbWVudCIsIm9uTW91bnQiLCJjb21wIiwib25EZXN0b3J5IiwicmVwbGFjZVdpdGgiLCJmcmFnbWVudCIsInJhbmdlIiwiY3JlYXRlRW1wdHkiLCJpbnNlcnRCZWZvcmVUb0NvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwicGFyZW50Iiwic3RhcnRQb3MiLCJnZXRGaXJzdE5vZGUiLCJGcmFnbWVudExpc3QiLCJhcHBlbmRGcmFnbWVudCIsImNoaWxkIiwicmVtb3ZlV2l0aEtleXMiLCJrZXlzIiwibW92ZSIsImluc2VydEJlZm9yZSIsImluc2VydEJlZm9yZU5vZGUiLCJ0YXJnZXQiLCJkZWxldGVJbmRleCIsInRvSW5kZXgiLCJSZWZTeW1ib2wiLCJTeW1ib2wiLCJpc1JlZiIsInIiLCJoaWRlUmVmTW9kZSIsIndyYXBGbkhpZGVSZWZNb2RlIiwiZm4iLCJ0ZW1wIiwicnVuSW5SZWZNb2RlIiwiY2IiLCJwcm94eU9iak1hcCIsIkRlcHNNYW5hZ2VyIiwiX2FkZERlcCIsIl9nZXREZXBzIiwiYmVnaW5Db2xsZWN0IiwiZW5kQ29sbGVjdCIsInRyYWNrIiwidHJpZ2dlciIsImRlcHMiLCJkZXAiLCJkZXBzTWFuYWdlciIsIkF1dG9ydW5SZWZJbXBsIiwiX3J1biIsImNyZWF0ZUF1dG9ydW4iLCJSZWZJbXBsIiwidmFsIiwiQ29tcHV0ZWRSZWZJbXBsIiwiX3JlY29tcHV0ZSIsImxhc3RWYWx1ZSIsIlByb3h5UmVmU3ltYm9sIiwicHJveHlNYXAiLCJjcmVhdGVSZWFjdGl2ZSIsImFsbFJlYWN0aXZlIiwicmVmIiwiTUVUQV9UWVBFIiwibWV0YXNNYXAiLCJtZXRhcyIsInJlYWN0aXZlQ29tcG9uZW50IiwiaW5zIiwicHJvdG90eXBlIiwia2V5IiwiYWRkTWV0YSIsImNvbXB1dGVkIiwiYXV0b3J1biIsIlByb3h5UmVmSW1wbCIsIl9hbGxSZWFjdGl2ZSIsImdldE1ldGFLZXlzIiwiT2JqZWN0IiwiX2luaXRBdXRvcnVuIiwidmFsdWUiLCJfaW5pdFByb3h5IiwidGhhdCIsInJlZk1hcCIsInByb3h5IiwiZ2V0IiwiYXJncyIsImxlbiIsImNvdW50IiwiaW5zZXJ0cyIsImluc2VydHNMZW4iLCJpIiwiZ2V0UmVmIiwiaXNQcm94eVJlZiIsInNldCIsIm1ldGEiLCJyZXN1bHQiLCJnZXR0ZXIiLCJuZXdWYWwiLCJkaXJlY3RpdmUiLCJmdW5jIiwiaXNEaXJlY3RpdmUiLCIkaWYiLCJjb25kIiwieWVzIiwibm8iLCJpbml0ZWQiLCJuZXdSZXN1bHQiLCJsYXN0UmVzdWx0IiwibGFzdEZyYWdtZW50IiwibmV3RnJhZ21lbnQiLCIkbWFwIiwicmF3TGlzdCIsIm1hcEZ1bmMiLCJrZXlGdW5jIiwibGlzdCIsImxpc3REYXRhIiwibGFzdFJlYWN0aXZlSXRlbXMiLCJjcmVhdGVSZWFjdGl2ZUl0ZW0iLCJmcmFnbWVudExpc3QiLCJtYXBGdW5jV3JhcCIsImtleUZ1bmNXcmFwIiwiY29uc29sZSIsImxhc3RGcmFnbWVudHMiLCJsYXN0S2V5cyIsIm5ld0xpc3QiLCJub3RyYWNrIiwibmV3S2V5cyIsImxhc3RJbmRleCIsInJlYWN0aXZlSXRlbSIsImZyb21JbmRleCIsInJlbW92ZWQiLCJodG1sIiwibmV3VmFsdWUiLCJpc0V2ZW50IiwiZXZlbnROYW1lIiwibGFzdFZhbHVlRXZlbnRIYW5kbGVyIiwic2V0QXR0ciIsImgiLCJ0eXBlIiwiY2hpbGRyZW4iLCJ0YWciLCJiaW5kQXR0ciIsInJlYWN0aXZlVmFsIiwidGV4dE5vZGUiLCJidWlsZENvbXBvbmVudCIsImZyYWciLCJuZXdGcmFnIiwiRGVtbyIsIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbmMiLCJkb3VibGVDb3VudCIsIkRpc3BsYXkiLCJwdXNoIiwiYWRkVG9kbyIsInNwbGljZSIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsImhhbmRsZVN3YXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQ3RCLE1BQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVI7QUFDQUYsR0FBQyxDQUFDRyxTQUFGLEdBQWNKLEtBQWQsQ0FGc0IsQ0FHdEI7O0FBQ0EsU0FBT0MsQ0FBQyxDQUFDSSxVQUFGLENBQWFDLE1BQWIsS0FBd0IsQ0FBeEIsR0FBNEIsRUFBNUIsR0FBaUNMLENBQUMsQ0FBQ0ksVUFBRixDQUFhLENBQWIsRUFBZ0JFLFNBQXhEO0FBQ0Q7O0lBRWtCQyxPOzs7Ozs7Ozs7a0NBTUhDLEcsRUFBa0I7QUFDNUJDLGdCQUFVLENBQUMsWUFBTTtBQUNiO0FBQ0FELFdBQUcsQ0FBQ0wsU0FBSixHQUFnQk8sS0FBSyxDQUFDQyxTQUFOLENBQWdCYixVQUFVLENBQUNVLEdBQUcsQ0FBQ0wsU0FBTCxDQUExQixFQUEyQ08sS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxVQUEzRCxDQUFoQjtBQUNILE9BSFMsQ0FBVjtBQUlIOzs7NkJBRVE7QUFDTCxVQUFNQyxTQUFTLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxTQUE3QjtBQUNBLGFBQU87QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSCx3REFDSSx3REFBSztBQUFNLFdBQUcsRUFBRSxLQUFLQyxhQUFoQjtBQUErQiwrQkFBdUIsRUFBRTtBQUFDQyxnQkFBTSxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBcEI7QUFBeEQsUUFBTCxDQURKLENBREcsRUFLSDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJDQUFDLFNBQUQsT0FESixDQUxHLENBQVA7QUFVSDs7OztrRkF4QkFDLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JMOztJQUlNQyxJOzs7Ozs7OzZCQUNPO0FBQ0wsYUFBTztBQUNILGlCQUFTLEVBQUM7QUFEUCxRQUFQO0FBSUg7Ozs7OztJQUdnQkMsTTs7Ozs7Ozs2QkFDUjtBQUNMLGFBQU87QUFBUSxVQUFFLEVBQUM7QUFBWCxTQUNILDJDQUFDLElBQUQsT0FERyxDQUFQO0FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkw7QUFDQTtBQUNBO0FBRUE7O0lBRU1DLEc7Ozs7Ozs7NkJBQ087QUFDTCxhQUFPO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0gsMkNBQUMsdURBQUQsT0FERyxFQUVILHdEQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBREosRUFHSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJDQUFDLHdEQUFELE9BREosQ0FISixDQUZHLENBQVA7QUFVSDs7Ozs7O0FBR0xDLCtDQUFNLENBQUMsMkNBQUMsR0FBRCxPQUFELEVBQVV2QixRQUFRLENBQUN3QixjQUFULENBQXdCLEtBQXhCLENBQVYsQ0FBTixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLElBQU1DLEtBQUssZ0JBQWtCLElBQTdCLEdBQTZCLEVBQTdCO0FBQ0EsSUFBTUMsVUFBVSxnQkFBa0IsSUFBbEMsR0FBa0MsRUFBbEM7QUFFQSxJQUFJQyxLQUFLLEdBQVQ7O1NBRWdCQyxRLENBQVNDLEksRUFBZ0JDLEssRUFBQUE7TUFBQUEsZ0IsRUFBQUE7QUFBQUEsWUFBUSxLQUFSQTs7O0FBQ3ZDLGFBQVc7QUFDVEosY0FBVSxDQUFWQTtBQURGLFNBRU87QUFDTEQsU0FBSyxDQUFMQTtBQUNEOztBQUNELE1BQUksQ0FBSixPQUFZO0FBQ1ZFLFNBQUssR0FBR25CLFVBQVUsQ0FBQztBQUNqQm1CLFdBQUssR0FBTEE7QUFDQSxVQUFNSSxTQUFTLEdBQUdDLEtBQUssQ0FBTEEsS0FBV1AsS0FBSyxDQUFsQyxNQUE2QkEsRUFBWE8sQ0FBbEI7QUFDQVAsV0FBSyxDQUFMQTtBQUNBLFVBQU1RLFVBQVUsR0FBR0QsS0FBSyxDQUFMQSxLQUFXTixVQUFVLENBQXhDLE1BQThCQSxFQUFYTSxDQUFuQjtBQUNBTixnQkFBVSxDQUFWQTtBQUNBSyxlQUFTLENBQVRBLDJCQUFxQyxvQkFBUTtBQUMzQ0csZ0JBQVE7QUFEVkg7QUFOZ0IsT0FBbEJKLENBQWtCLENBQWxCQTtBQVVEO0FBQ0Y7O1NDdkJlUSxNLENBQVVDLEssRUFBaUJDLEssRUFBZUMsSSxFQUFBQTtBQUN4REYsT0FBSyxDQUFMQTtBQUNEOztJQ0dZRyxRQUFiO0FBQUE7QUFDRSxvQkFBV3ZDLFFBQVEsQ0FBbkIsc0JBQVdBLEVBQVg7QUFFQTtBQUlBO0FBa0dEOztBQXpHRCx3QkFTRTtBQUNFLFFBQUksQ0FBSixLQUFVO0FBQ1I7QUFDRDs7QUFDRCxRQUFNd0MsV0FBVyxHQUFJQyxHQUFjLENBQW5DO0FBQ0EsV0FBT0QsV0FBVyxLQUFYQSxZQUE0QkEsV0FBVyxLQUE5QztBQWRKOztBQUFBOztBQUFBLHVCQWlCRUU7QUFDRSxRQUFNQyxJQUFJLEdBQVY7QUFDQTtBQUNBO0FBcEJKOztBQUFBLDZCQXVCRUM7QUFDRTtBQUNBO0FBQ0FDLGFBQVMsQ0FBVEEsWUFBc0IsS0FBdEJBOztBQUNBLFFBQUkseUJBQUosR0FBZ0M7QUFDOUIsVUFBSUMsaUJBQWlCLEtBQXJCLE1BQWdDO0FBQzlCQSx5QkFBaUIsQ0FBakJBLGFBQStCLHVCQUF1QkEsaUJBQWlCLENBQXZFQSxVQUErQixDQUEvQkE7QUFERixhQUVPO0FBQ0w7QUFDQTtBQUNEO0FBQ0Y7QUFsQ0w7O0FBQUEsbUJBcUNFQzs7O0FBQ0VuQixZQUFRLENBQUM7QUFDUCxXQUFJLENBQUosbUJBQXdCLGdCQUFJO0FBQzFCb0IsWUFBSSxDQUFKQSxXQUFnQkEsSUFBSSxDQUFwQkEsT0FBZ0JBLEVBQWhCQTtBQURGO0FBRE0sT0FBUnBCLElBQVEsQ0FBUkE7QUF0Q0o7O0FBQUEscUJBNkNFcUI7OztBQUNFckIsWUFBUSxDQUFDO0FBQ1AsWUFBSSxDQUFKLG1CQUF3QixnQkFBSTtBQUMxQm9CLFlBQUksQ0FBSkEsYUFBa0JBLElBQUksQ0FBdEJBLFNBQWtCQSxFQUFsQkE7QUFERjtBQURNLE9BQVJwQixJQUFRLENBQVJBO0FBOUNKOztBQUFBLHVCQXFERXNCOzs7QUFDRUMsWUFBUSxDQUFSQSxZQUFxQixLQUFyQkE7QUFDQXZCLFlBQVEsQ0FBQztBQUNQLFVBQU13QixLQUFLLEdBQUcsTUFBSSxDQUFsQixXQUFjLEVBQWQ7O0FBQ0FBLFdBQUssQ0FBTEE7QUFDQUEsV0FBSyxDQUFMQSxXQUFpQkQsUUFBUSxDQUF6QkM7QUFDQUEsV0FBSyxDQUFMQTtBQUpGeEIsS0FBUSxDQUFSQTtBQU1BO0FBQ0F1QixZQUFRLENBQVJBO0FBOURKOztBQUFBLHVCQWlFRUU7QUFDRSxRQUFJLDJCQUFKLEdBQWtDO0FBQ2hDLHVCQUFpQnJELFFBQVEsQ0FBUkEsY0FBakIsT0FBaUJBLENBQWpCO0FBQ0Q7QUFwRUw7O0FBQUEsbUNBdUVFc0Q7OztBQUNFLFFBQUksS0FBSixXQUFvQjtBQUNsQjtBQUNBO0FBQ0ExQixjQUFRLENBQUM7QUFDUCxjQUFJLENBQUosV0FBZ0I1QixRQUFRLENBQXhCLHNCQUFnQkEsRUFBaEI7O0FBQ0EsY0FBSSxDQUFKLG1CQUF3QixnQkFBSTtBQUMxQixnQkFBSSxDQUFKOztBQUNBLGdCQUFJLENBQUo7QUFGRjtBQUZGNEIsT0FBUSxDQUFSQTtBQU9EOztBQUNEO0FBQ0E7QUFDQUEsWUFBUSxDQUFDO0FBQ1BpQixlQUFTLENBQVRBLGFBQXVCLE1BQUksQ0FBM0JBO0FBREZqQixLQUFRLENBQVJBO0FBckZKOztBQUFBLHVCQTBGRTJCO0FBQ0UsUUFBTUMsTUFBTSxHQUFHLG1CQUFmO0FBQ0EsUUFBTUosS0FBSyxHQUFHcEQsUUFBUSxDQUF0QixXQUFjQSxFQUFkO0FBQ0EsUUFBTXlELFFBQVEsR0FBR3pCLEtBQUssQ0FBTEEsdUJBQ2Z3QixNQURleEIsUUFDZndCLEdBRGV4QixNQUNmd0IsU0FBTSxDQURTeEIsWUFFZixnQkFGRixDQUVFLENBRmVBLENBQWpCO0FBSUFvQixTQUFLLENBQUxBO0FBQ0FBLFNBQUssQ0FBTEEsZUFBcUJLLFFBQVEsR0FBRyxnQkFBaENMO0FBQ0E7QUFuR0o7O0FBQUEsd0JBc0dFTTtBQUNFLFdBQU8sZ0JBQVAsQ0FBTyxDQUFQO0FBdkdKOztBQUFBO0FBQUEsRzs7QUEyR0EsSUFBYUMsWUFBYjtBQUFBOztBQUFBOzs7O0FBQ0U7O0FBK0NEOztBQWhERDs7QUFBQSwyQkFHRUM7QUFDRUMsU0FBSyxDQUFMQSxrQkFBd0IsS0FBeEJBO0FBQ0E7QUFDQUEsU0FBSyxDQUFMQTtBQU5KOztBQUFBLG1CQVNFMUI7OztBQUNFZ0IsWUFBUSxDQUFSQTtBQUNBQSxZQUFRLENBQVJBLHdCQUNFLEtBREZBLFdBRUUsa0hBRkZBO0FBSUFoQixVQUFNLENBQUMsS0FBRCx1QkFBTkEsUUFBTSxDQUFOQTtBQWZKOztBQUFBLDJCQWtCRTJCOzs7QUFDRSxnQ0FBNEI7QUFDMUIsVUFBSUMsSUFBSSxDQUFKQSxRQUFhRixLQUFLLENBQWxCRSxTQUE2QixDQUFqQyxHQUFxQztBQUNuQztBQUNEOztBQUNELFVBQU1aLFFBQVEsR0FBZDtBQUNBdkIsY0FBUSxDQUFDO0FBQ1AsWUFBTXdCLEtBQUssR0FBR0QsUUFBUSxDQUF0QixXQUFjQSxFQUFkO0FBQ0FDLGFBQUssQ0FBTEE7QUFDQUEsYUFBSyxDQUFMQTtBQUhGeEIsT0FBUSxDQUFSQTs7QUFLQSxZQUFJLENBQUo7QUFWRjtBQW5CSjs7QUFBQSxpQkFpQ0VvQztBQUNFLFFBQU1DLFlBQVksR0FBRyxvQkFBckIsT0FBcUIsQ0FBckI7QUFFQSxRQUFJQyxnQkFBZ0IsR0FBZ0JELFlBQWhCLFFBQWdCQSxHQUFoQixNQUFnQkEsZUFBWSxDQUFoRCxZQUFvQ0EsRUFBcEM7QUFFQSxRQUFNRSxNQUFNLEdBQUcsb0JBQWYsU0FBZSxDQUFmO0FBQ0FBLFVBQU0sQ0FBTkEsd0JBQStCLEtBQS9CQTtBQUVBaEMsVUFBTSxDQUFDLEtBQUQseUJBQU5BLE1BQU0sQ0FBTkE7QUFDQSxRQUFJaUMsV0FBVyxHQUFmOztBQUNBLFFBQUlDLE9BQU8sR0FBWCxXQUF5QjtBQUN2QkQsaUJBQVcsSUFBWEE7QUFDRDs7QUFDRDtBQTlDSjs7QUFBQTtBQUFBOzs7O0FDOUdBLElBQU1FLFNBQVMsZ0JBQUdDLE1BQU0sQ0FBeEIsS0FBd0IsQ0FBeEI7O0FBQ0EsU0FHZ0JDLEtBSGhCLENBR3NCQyxDQUh0QixFQUdzQkE7QUFDcEIsU0FBT0EsQ0FBQyxJQUFLQSxDQUFTLENBQVRBLFNBQVMsQ0FBVEEsS0FBYjtBQUNEOztBQVFELElBQUlDLFdBQVcsR0FBZjs7QUFFQSxTQUFnQkMsaUJBQWhCLENBQXNEQyxFQUF0RCxFQUFzREE7QUFDcEQsU0FBUTtBQUNOLFFBQUlDLElBQUksR0FBUjtBQUNBSCxlQUFXLEdBQVhBO0FBQ0EsUUFBTUQsQ0FBQyxHQUFHRyxFQUFFLENBQUZBLGNBQVYsU0FBVUEsQ0FBVjtBQUNBRixlQUFXLEdBQVhBO0FBQ0E7QUFMRjtBQU9EOztBQUdELFNBQWdCSSxZQUFoQixDQUE2QkMsRUFBN0IsRUFBNkJBO0FBQzNCLE1BQUlGLElBQUksR0FBUjtBQUNBSCxhQUFXLEdBQVhBO0FBQ0EsTUFBTUQsQ0FBQyxHQUFHTSxFQUFWO0FBQ0FMLGFBQVcsR0FBWEE7QUFDQTtBQUNEOztBQVVELElBQU1NLFdBQVcsZ0JBQUcsSUFBcEIsT0FBb0IsRUFBcEI7O0lBRU1DO0FBQU47QUFDVTtBQUNBLGlCQUFRLElBQVIsT0FBUSxFQUFSO0FBK0JUOzs7O1NBN0JTQyxPLEdBQUFBO0FBQ04sUUFBSSxDQUFDLGVBQUwsTUFBSyxDQUFMLEVBQTZCO0FBQzNCLDZCQUF1QixJQUF2QixHQUF1QixFQUF2QjtBQUNEOztBQUNEO0FBQ0QsRzs7U0FFT0MsUSxHQUFBQTs7O0FBQ04sV0FBT25ELEtBQUssQ0FBTEEsS0FBVyw0RkFBbEIsRUFBT0EsQ0FBUDtBQUNELEc7O1NBRURvRCxZLEdBQUFBO0FBQ0U7QUFDRCxHOztTQUVEQyxVLEdBQUFBO0FBQ0U7QUFDRCxHOztTQUVEQyxLLEdBQUFBO0FBQ0UsUUFBSSwwQkFBSixHQUFpQztBQUMvQiwyQkFBcUIsaUJBQWlCLDBCQUF0QyxDQUFxQixDQUFyQjtBQUNEO0FBQ0YsRzs7U0FFREMsTyxHQUFBQTtBQUNFLFFBQU1DLElBQUksR0FBRyxjQUFiLE1BQWEsQ0FBYjs7QUFDQUEsUUFBSSxDQUFKQSxRQUFhLGVBQUc7QUFBQSxhQUFJQyxHQUFHLENBQVAsT0FBSUEsRUFBSjtBQUFoQkQ7QUFDRCxHOzs7Q0FoQ0dQLEU7O0FBbUNOLElBQU1TLFdBQVcsZ0JBQUcsSUFBcEIsV0FBb0IsRUFBcEI7O0lBd0JNQztBQUlKO0FBQW9CO0FBSHBCO0FBQ0E7O0FBR0U7QUFDRDs7OztVQUVPQyxJLEdBQUFBOzs7QUFDTkYsZUFBVyxDQUFYQSxtQkFETUUsQ0FDTkY7O0FBRUFmLHFCQUFpQixDQUFDLEtBQWxCQSxHQUFpQixDQUFqQkEsWUFBdUM7QUFDckM7QUFDQWUsaUJBQVcsQ0FBWEE7QUFDQWQsUUFBRTtBQUNGYyxpQkFBVyxDQUFYQTtBQUpGZjtBQU1BZSxlQUFXLENBQVhBO0FBQ0QsRzs7VUFFREgsTyxHQUFBQTtBQUNFO0FBQ0QsRzs7O0NBdEJHSSxFOztLQUNIckIsUzs7QUF3QkgsU0FBZ0J1QixhQUFoQixDQUE4QmpCLEVBQTlCLEVBQThCQTtBQUM1QixTQUFPLG1CQUFQLEVBQU8sQ0FBUDtBQUNEOztJQUVLa0I7QUFHSjtBQUFvQjtBQUZiO0FBRTBCOzs7OztBQUcvQkosaUJBQVcsQ0FBWEE7QUFDQSxhQUFPLEtBQVA7QUFDRCxLO3NCQUVTSyxHLEVBQUFBO0FBQ1IsVUFBSSxnQkFBSixLQUF5QjtBQUN2QjtBQUNBTCxtQkFBVyxDQUFYQTtBQUNEO0FBQ0Y7Ozs7Q0FmR0ksRTs7S0FDSXhCLFM7O0lBaUJKMEI7QUFNSjtBQUxPO0FBQ0M7QUFLTjtBQUNEOzs7O1VBRU9DLFUsR0FBQUE7QUFDTlAsZUFBVyxDQUFYQTtBQUNBLGtCQUFjLEtBQWQsUUFBYyxFQUFkO0FBQ0FBLGVBQVcsQ0FBWEE7QUFDRCxHOztVQVdESCxPLEdBQUFBO0FBQ0UsUUFBSVcsU0FBUyxHQUFHLEtBQWhCOztBQUNBOztBQUNBLFFBQUksZ0JBQUosV0FBK0I7QUFDN0JSLGlCQUFXLENBQVhBO0FBQ0Q7QUFDRixHOzs7OztBQWRDLFVBQUksQ0FBQyxLQUFMLFFBQWtCO0FBQ2hCOztBQUNBO0FBQ0Q7O0FBQ0RBLGlCQUFXLENBQVhBO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7Ozs7Q0F2QkdNLEU7O0tBQ0kxQixTO0FBaUNWLElBQU02QixjQUFjLGdCQUFHNUIsTUFBTSxDQUE3QixXQUE2QixDQUE3Qjs7QUFFQTtBQUNFLFNBQU9KLE1BQU0sSUFBS0EsTUFBNEIsQ0FBNUJBLGNBQTRCLENBQTVCQSxLQUFsQjtBQUNEOztBQUVELElBQU1pQyxRQUFRLGdCQUFHLElBQWpCLE9BQWlCLEVBQWpCOztBQUVBLFNBQWdCQyxjQUFoQixDQUE4RDVELEdBQTlELEVBQXNFNkQsV0FBdEUsRUFBc0VBO01BQUFBLHNCLEVBQUFBO0FBQUFBLGtCQUFjLEtBQWRBOzs7QUFDcEUsTUFBTUMsR0FBRyxHQUFHLHNCQUFaLFdBQVksQ0FBWjtBQUNBLFNBQU9BLEdBQUcsQ0FBVjtBQUNEOztBQUVEOztBQUFBLFdBQUtDLFNBQUwsRUFBS0E7QUFDSEE7QUFDQUE7QUFDQUE7QUFIRixHQUFLQSxTQUFTLEtBQVRBLFNBQVMsR0FBZCxFQUFjLENBQWQ7O0FBT0EsSUFBSUMsUUFBUSxnQkFBRyxJQUFmLE9BQWUsRUFBZjs7QUFFQTtBQUNFLE1BQUksQ0FBQ0EsUUFBUSxDQUFSQSxJQUFMLFNBQUtBLENBQUwsRUFBOEI7QUFDNUJBLFlBQVEsQ0FBUkEsZUFBd0IsSUFBeEJBLEdBQXdCLEVBQXhCQTtBQUNEOztBQUNELE1BQU1DLEtBQUssR0FBR0QsUUFBUSxDQUFSQSxJQUFkLFNBQWNBLENBQWQ7QUFDQUMsT0FBTSxDQUFOQTtBQUNEOztBQUVEO0FBQ0UsU0FBT0QsUUFBUSxDQUFSQSxJQUFQLFNBQU9BLENBQVA7QUFDRDs7QUFPRCxTQUFnQkUsaUJBQWhCLENBQWtDNUYsU0FBbEMsRUFBaUVELEtBQWpFLEVBQWlFQTtBQUMvRCxNQUFNOEYsR0FBRyxHQUFHLElBQVosU0FBWSxFQUFaLENBRCtEOUYsQ0FDL0Q7O0FBRUE4RixLQUFHLENBQUhBLFFBQVk5RixLQUFLLElBQWpCOEY7QUFDQSxNQUFNNUQsSUFBSSxHQUFHcUQsY0FBYyxDQUEzQixHQUEyQixDQUEzQjtBQUNBO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxTQUFnQmxGLFFBQWhCLENBQXlCMEYsU0FBekIsRUFBNENDLEdBQTVDLEVBQTRDQTtBQUMxQ0MsU0FBTyxpQkFBaUJQLFNBQVMsQ0FBakNPLFFBQU8sQ0FBUEE7QUFDRDtBQUVEOzs7OztBQUdBLFNBQWdCQyxRQUFoQixDQUF5QkgsU0FBekIsRUFBNENDLEdBQTVDLEVBQTRDQTtBQUMxQ0MsU0FBTyxpQkFBaUJQLFNBQVMsQ0FBakNPLFFBQU8sQ0FBUEE7QUFDRDtBQUVEOzs7OztBQUdBLFNBQWdCRSxPQUFoQixDQUF3QkosU0FBeEIsRUFBMkNDLEdBQTNDLEVBQTJDQTtBQUN6Q0MsU0FBTyxpQkFBaUJQLFNBQVMsQ0FBakNPLE9BQU8sQ0FBUEE7QUFDRDs7SUFFS0c7QUFPSjtRQUFxQ0MsdUIsRUFBQUE7QUFBQUEscUJBQWUsS0FBZkE7OztBQUFqQjtBQUFpQkE7QUFOOUI7QUFDQTtBQU1MLHFCQUFpQkMsV0FBVyxDQUFDQyxNQUFNLENBQU5BLGVBQTdCLElBQTZCQSxDQUFELENBQTVCO0FBQ0Esa0JBQWMsZ0JBQWQsSUFBYyxDQUFkOztBQUNBO0FBQ0Q7Ozs7VUFFT0MsWSxHQUFBQTs7O0FBQ04sUUFBSSxDQUFDLEtBQUwsV0FBcUI7QUFDbkI7QUFDRDs7QUFDRCwyQkFBdUI7QUFDckIsVUFBSUMsS0FBSyxLQUFLZixTQUFTLENBQXZCLFNBQWlDO0FBQy9CWCxxQkFBYSxDQUFHLE1BQUksQ0FBSixlQUE0QixNQUFJLENBQWhEQSxNQUFnQixDQUFILENBQWJBO0FBQ0Q7QUFISDtBQUtELEc7O1VBRU8yQixVLEdBQUFBOzs7QUFDTixRQUFNQyxJQUFJLEdBQVY7O0FBQ0EsUUFBSXJCLFFBQVEsQ0FBUkEsSUFBSixHQUFJQSxDQUFKLEVBQXVCO0FBQ3JCLGFBQU9BLFFBQVEsQ0FBUkEsSUFBUCxHQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsUUFBTXNCLE1BQU0sR0FBRyxJQUFmLEdBQWUsRUFBZjtBQUVBLFFBQU1DLEtBQUssR0FBRyxlQUFlO0FBQzNCQyxTQUQyQjtBQUV6QmxDLG1CQUFXLENBQVhBOztBQUVBLFlBQUkxRCxLQUFLLENBQUxBLFFBQUosR0FBSUEsQ0FBSixFQUF3QjtBQUN0QixjQUFJOEUsR0FBRyxLQUFQLFVBQXNCLE9BQU9yRSxHQUFHLENBQVY7QUFDdEIsY0FBSXFFLEdBQUcsS0FBUCxPQUNFLE9BQU87QUFJTCxtQkFBTyxHQUFHLENBQUgsSUFBUTtBQUNiLHFCQUFPL0IsRUFBRSxDQUFFNEMsS0FBYSxDQUFmLE1BQWUsQ0FBZixFQUFULE1BQVMsQ0FBVDtBQURLLGVBQVAsT0FBTyxDQUFQO0FBSkY7QUFTRixjQUNFLCtEQUVNLENBSFIsR0FLRSxPQUFPOzhDQUFZRSxzQixFQUFBQSxRLEVBQUFBLFcsRUFBQUEsTSxFQUFBQTtBQUFBQTs7O0FBQ2pCLGdCQUFJZixHQUFHLEtBQVAsT0FBbUI7QUFDakIsa0JBQU1nQixHQUFHLEdBQUdyRixHQUFHLENBQWY7QUFDQWlGLG9CQUFNLENBQU5BLFFBQU0sQ0FBTkEsQ0FBY0ksR0FBRyxHQUFqQko7QUFGRixtQkFHTyxJQUFJWixHQUFHLEtBQVAsVUFBc0I7QUFDM0Isa0JBQU16RSxLQUFLLEdBQUd3RixJQUFJLENBQWxCLENBQWtCLENBQWxCO0FBQ0Esa0JBQU1FLEtBQUssR0FBR0YsSUFBSSxDQUFsQixDQUFrQixDQUFsQjtBQUNBLGtCQUFNRyxPQUFPLEdBQUdILElBQUksQ0FBSkEsTUFBaEIsQ0FBZ0JBLENBQWhCO0FBRUEsa0JBQU1JLFVBQVUsR0FBR0QsT0FBTyxDQUExQjtBQUVBLGtCQUFNRixLQUFHLEdBQUdyRixHQUFHLENBQWY7O0FBRUEsbUJBQUssSUFBSXlGLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixPQUF5QkEsQ0FBekIsSUFBOEI7QUFDNUIsb0JBQUlBLENBQUMsSUFBREEsU0FBY0EsQ0FBQyxHQUFHN0YsS0FBSyxHQUEzQixPQUFxQztBQUNuQ3FGLHdCQUFNLENBQU5BLFFBQU0sQ0FBTkEsQ0FBYyxLQUFkQTtBQURGLHVCQUVPLElBQUlRLENBQUMsSUFBSTdGLEtBQUssR0FBZCxPQUF3QjtBQUM3QnFGLHdCQUFNLENBQU5BLElBQVcsTUFBTVEsQ0FBQyxHQUFEQSxRQUFqQlIsVUFBVyxDQUFYQSxFQUEwQ0EsTUFBTSxDQUFOQSxJQUFXLEtBQXJEQSxDQUEwQ0EsQ0FBMUNBO0FBQ0FBLHdCQUFNLENBQU5BLFFBQU0sQ0FBTkEsQ0FBYyxLQUFkQTtBQUNEO0FBQ0Y7QUFDRjs7QUFDRGpGLGVBQUcsQ0FBSEEsR0FBRyxDQUFIQTtBQUNBaUQsdUJBQVcsQ0FBWEE7QUF2QkY7QUF5Qkg7O0FBRUQsWUFBSW9CLEdBQUcsS0FBS3ZDLE1BQU0sQ0FBbEIsU0FBNEI7QUFDMUI7QUFDRDs7QUFDRCxZQUFNZ0MsR0FBRyxHQUFHNEIsTUFBTSxDQUFsQixHQUFrQixDQUFsQjs7QUFDQSxZQUFJQyxVQUFVLENBQWQsR0FBYyxDQUFkLEVBQXFCO0FBQ25CLGlCQUFPN0IsR0FBRyxDQUFWO0FBQ0Q7O0FBQ0QsWUFBSTdCLFdBQVcsSUFBSUYsS0FBSyxDQUF4QixHQUF3QixDQUF4QixFQUErQjtBQUM3QixpQkFBTytCLEdBQUcsQ0FBVjtBQUNEOztBQUNELGVBQU80QixNQUFNLENBQWIsR0FBYSxDQUFiO0FBMUR5QjtBQTREM0JFLFNBNUQyQjtBQTZEekIsWUFBTTlCLEdBQUcsR0FBRzRCLE1BQU0sQ0FBbEIsR0FBa0IsQ0FBbEI7O0FBQ0EsWUFBSTNELEtBQUssQ0FBVCxHQUFTLENBQVQsRUFBZ0I7QUFDZDtBQUNBO0FBQ0EsY0FBSStDLEtBQUssSUFBSSxtQkFBVEEsWUFBdUNoQixHQUFvQixDQUFwQkEsY0FBb0IsQ0FBcEJBLEtBQTNDLE1BQTBGO0FBQ3hGbUIsa0JBQU0sQ0FBTkEsU0FBZ0Isd0JBQWhCQSxJQUFnQixDQUFoQkE7QUFDQTtBQUNEOztBQUNEbkIsYUFBRyxDQUFIQTtBQVBGLGVBUU87QUFDSmtCLGNBQUksQ0FBSkE7QUFDRjs7QUFDRDtBQUNEO0FBMUUwQixLQUFmLENBQWQ7O0FBNkVBLFFBQU1VLE1BQU0sR0FBRyxTQUFUQSxNQUFTOzs7QUFDYixVQUFJVCxNQUFNLENBQU5BLElBQUosR0FBSUEsQ0FBSixFQUFxQjtBQUNuQixlQUFPQSxNQUFNLENBQU5BLElBQVAsR0FBT0EsQ0FBUDtBQUNEOztBQUNELFVBQU1iLFNBQVMsR0FBR1EsTUFBTSxDQUFOQSxlQUFzQixNQUFJLENBQTVDLElBQWtCQSxDQUFsQjs7QUFDQSxVQUFJLENBQUMsTUFBSSxDQUFMLGFBQW1CLENBQUMsTUFBSSxDQUE1QixjQUEyQztBQUN6QyxlQUFRLE1BQUksQ0FBSixLQUFSLEdBQVEsQ0FBUjtBQUNEOztBQUNELFVBQU1pQixJQUFJLHVCQUFHLE1BQUksQ0FBUCw4QkFBRyxxQkFBYixHQUFhLENBQWI7QUFDQTs7QUFFQSxVQUFJLE1BQUksQ0FBSixnQkFBcUJBLElBQUksS0FBSzlCLFNBQVMsQ0FBM0MsVUFBc0Q7QUFDcEQsWUFBTWUsS0FBSyxHQUFJOUUsR0FBVyxDQUExQixHQUEwQixDQUExQjs7QUFDQSxZQUFJK0IsS0FBSyxDQUFULEtBQVMsQ0FBVCxFQUFrQjtBQUNoQitELGdCQUFNLEdBQU5BO0FBREYsZUFFTyxJQUFJaEIsS0FBSyxLQUFMQSxRQUFrQixtQkFBdEIsVUFBaUQ7QUFDdEQ7QUFDQWdCLGdCQUFNLEdBQUcsaUJBQWlCbEMsY0FBYyxRQUFRLE1BQUksQ0FBM0MsWUFBK0IsQ0FBL0IsRUFBVGtDLElBQVMsQ0FBVEE7QUFGSyxlQUdBLElBQUloQixLQUFLLEtBQVQsWUFBMEI7QUFDL0JnQixnQkFBTSxHQUFHLFlBQVk1RCxpQkFBaUIsQ0FBQzRDLEtBQUssQ0FBTEEsS0FBVyxNQUFJLENBQXREZ0IsTUFBdUNoQixDQUFELENBQTdCLENBQVRnQjtBQURLLGVBRUE7QUFDTDtBQUNBQSxnQkFBTSxHQUFHLFlBQVRBLEtBQVMsQ0FBVEE7QUFDRDtBQVpILGFBYU8sSUFBSUQsSUFBSSxLQUFLOUIsU0FBUyxDQUF0QixVQUFpQztBQUN0QyxZQUFNZ0MsTUFBTSxHQUFHbkIsTUFBTSxDQUFOQSx5Q0FBZjtBQUNBa0IsY0FBTSxHQUFHLG9CQUFvQjVELGlCQUFpQixDQUFDNkQsTUFBTSxDQUFOQSxLQUFZLE1BQUksQ0FBL0RELE1BQStDQyxDQUFELENBQXJDLENBQVREO0FBQ0Q7O0FBRUQsa0JBQVk7QUFDVmIsY0FBTSxDQUFOQTtBQUNBO0FBQ0Q7O0FBQ0QsVUFBTWpELENBQUMsR0FBSSxNQUFZLENBQVosS0FBWCxHQUFXLENBQVg7O0FBQ0EsVUFBSSxhQUFKLFlBQTZCO0FBQzNCLGVBQU9BLENBQUMsQ0FBREEsS0FBTyxNQUFJLENBQWxCLE1BQU9BLENBQVA7QUFDRDs7QUFDRDtBQXJDRjs7QUF3Q0EyQixZQUFRLENBQVJBO0FBQ0FwQixlQUFXLENBQVhBO0FBQ0E7QUFDRCxHOzs7OztBQUdDVSxpQkFBVyxDQUFYQTtBQUNBLGFBQU8sS0FBUDtBQUNELEs7c0JBRVMrQyxNLEVBQUFBOzs7QUFDUnBCLFlBQU0sQ0FBTkEscUJBQTRCLGVBQUc7QUFDNUIsY0FBSSxDQUFKLGNBQTRCb0IsTUFBYyxDQUExQyxHQUEwQyxDQUExQztBQURIcEI7QUFHQTNCLGlCQUFXLENBQVhBO0FBQ0Q7Ozs7Q0FwS0d3QixFOztLQUNJNUMsUyxFQUFBQSxLQUNBNkIsYzs7U0M5UE11QyxTLENBQW9DQyxJLEVBQUFBO0FBQ2xEO0FBQ0FBLE1BQUksQ0FBSkE7QUFDQTtBQUNEOztBQUVELFNBQWdCQyxXQUFoQixDQUE0QjdDLEdBQTVCLEVBQTRCQTtBQUMxQixTQUFPLElBQUcsSUFBSCxtQkFBRyxDQUFILHFCQUFQO0FBQ0Q7O0FBRUQsU0FBZ0I4QyxHQUFoQixDQUNFQyxJQURGLEVBRUVDLEdBRkYsRUFHRUMsRUFIRixFQUdFQTtBQUVBLFNBQU9OLFNBQVMsQ0FBQztBQUNmO0FBQ0EsUUFBSU8sTUFBTSxHQUFWO0FBQ0E7QUFFQXBELGlCQUFhLENBQUM7QUFDWixVQUFNcUQsU0FBUyxHQUFHSixJQUFsQjs7QUFDQSxVQUFJLENBQUosUUFBYTtBQUNYSyxrQkFBVSxHQUFWQTtBQUNBQyxvQkFBWSxHQUFHRCxVQUFXLEdBQUdKLEdBQUgsS0FBV0MsRUFBckNJO0FBQ0FILGNBQU0sR0FBTkE7QUFDQTtBQUNEOztBQUVELFVBQU1JLFdBQVcsR0FBR0gsU0FBUyxHQUFHSCxHQUFILEtBQVdDLEVBQXhDO0FBQ0FJLGtCQUFZLENBQVpBO0FBQ0FBLGtCQUFZLEdBQVpBO0FBQ0FELGdCQUFVLEdBQVZBO0FBWkZ0RCxLQUFhLENBQWJBO0FBZUE7QUFwQkYsR0FBZ0IsQ0FBaEI7QUFzQkQ7O0FBRUQ7QUFDRSxTQUFPUSxjQUFjLENBQUM7QUFDcEJrQixTQUFLLEVBRGU7QUFFcEJsRixTQUFLLEVBQUxBO0FBRm9CLEdBQUQsRUFBckIsSUFBcUIsQ0FBckI7QUFJRDs7QUFPRCxTQUFnQmlILElBQWhCLENBQ0VDLE9BREYsRUFFRUMsT0FGRixFQUdFQyxPQUhGLEVBR0VBO0FBRUEsTUFBTUMsSUFBSSxHQUFWO0FBQ0EsTUFBTUMsUUFBUSxHQUFkO0FBRUEsTUFBSUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFSLElBQWE7QUFDbkMsV0FBT0Msa0JBQWtCLE9BQXpCLEtBQXlCLENBQXpCO0FBREYsR0FBd0IsQ0FBeEI7QUFJQSxNQUFNQyxZQUFZLEdBQUcsSUFBckIsWUFBcUIsRUFBckI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFDbEI7QUFDQWpGLGdCQUFZLENBQUM7QUFDWDNCLGNBQVEsR0FBR3FHLE9BQU8sQ0FBbEJyRyxJQUFrQixDQUFsQkE7QUFDQUEsY0FBUSxDQUFSQTtBQUZGMkIsS0FBWSxDQUFaQTtBQUlBO0FBTkY7O0FBU0EsTUFBTWtGLFdBQVcsR0FBR3JGLGlCQUFpQixDQUFDO0FBQ3BDLFFBQU1GLENBQUMsR0FBR2dGLE9BQU8sQ0FBakIsSUFBaUIsQ0FBakI7O0FBQ0EsUUFBSSx5QkFBeUIsYUFBN0IsVUFBb0Q7QUFDbERRLGFBQU8sQ0FBUEEsTUFDRSx5REFERkEsR0FFRVIsT0FBTyxDQUZUUSxRQUVFUixFQUZGUTtBQUlEOztBQUNEO0FBUkYsR0FBcUMsQ0FBckM7QUFXQSxNQUFJQyxhQUFhLEdBQUcsUUFBUSxDQUFSLElBQWE7QUFBQSxXQUMvQkgsV0FBVyxDQUFDSCxpQkFBaUIsQ0FERSxLQUNGLENBQWxCLENBRG9CO0FBQWpDLEdBQW9CLENBQXBCO0FBR0EsTUFBSU8sUUFBUSxHQUFHLFFBQVEsQ0FBUixJQUFhO0FBQUEsV0FDMUJILFdBQVcsQ0FBQ0osaUJBQWlCLENBREgsS0FDRyxDQUFsQixDQURlO0FBQTVCLEdBQWUsQ0FBZjtBQUlBTSxlQUFhLENBQWJBLFFBQXNCO0FBQ3BCSixnQkFBWSxDQUFaQSxxQkFBa0NLLFFBQVEsQ0FBMUNMLEtBQTBDLENBQTFDQTtBQURGSTtBQUlBLE1BQUlqQixNQUFNLEdBQVY7QUFFQXBELGVBQWEsQ0FBQyxtQkFBTztBQUNuQixRQUFJLENBQUosUUFBYTtBQUNYO0FBQ0FvRCxZQUFNLEdBQUdTLElBQUksQ0FBYlQ7QUFDQUEsWUFBTSxHQUFOQTtBQUNBO0FBQ0Q7O0FBRUQsUUFBTW1CLE9BQU8sR0FBYjtBQUVBQyxXQUFPLENBQUM7QUFDTixVQUFNQyxPQUFPLEdBQUcsT0FBTyxDQUFQLElBQVk7QUFBQSxlQUMxQk4sV0FBVyxDQUFDSCxrQkFBa0IsT0FESixLQUNJLENBQW5CLENBRGU7QUFBNUIsT0FBZ0IsQ0FBaEI7QUFJQSxVQUFNTSxRQUFRLEdBQUcsWUFBWSxDQUFaLG1CQUFnQyxnQkFBSTtBQUFBLGVBQUk3SCxJQUFJLENBQVI7QUFBckQsT0FBaUIsQ0FBakIsQ0FMTSxDQUtOOztBQUdBZ0ksYUFBTyxDQUFQQSxRQUFnQjtBQUNkLFlBQU1ILFFBQVEsR0FBRyxZQUFZLENBQVosbUJBQWdDLGdCQUFJO0FBQUEsaUJBQUk3SCxJQUFJLENBQVI7QUFBckQsU0FBaUIsQ0FBakI7QUFDQSxZQUFNaUksU0FBUyxHQUFHSixRQUFRLENBQVJBLFFBQWxCLEdBQWtCQSxDQUFsQjs7QUFDQSxZQUFJSSxTQUFTLEtBQUssQ0FBbEIsR0FBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsY0FBTUMsWUFBWSxHQUFHWCxrQkFBa0IsQ0FBQ08sT0FBTyxDQUFSLEtBQVEsQ0FBUixFQUF2QyxLQUF1QyxDQUF2QztBQUVBLGNBQU1qSCxRQUFRLEdBQUc0RyxXQUFXLENBQTVCLFlBQTRCLENBQTVCO0FBRUFELHNCQUFZLENBQVpBO0FBUkYsZUFTTyxJQUFJUyxTQUFTLEtBQWIsT0FBeUI7QUFDOUI7QUFFQSxjQUFNRSxTQUFTLEdBQWY7QUFDQSxjQUFNcEcsT0FBTyxHQUFiO0FBRUF5RixzQkFBWSxDQUFaQTtBQUNEO0FBbkJIUTtBQXNCQSxVQUFNSSxPQUFPLEdBQUcsUUFBUSxDQUFSLE9BQWdCLGVBQUc7QUFBQSxlQUFJSixPQUFPLENBQVBBLGlCQUF5QixDQUE3QjtBQUFuQyxPQUFnQixDQUFoQjtBQUNBUixrQkFBWSxDQUFaQSx3QkEvQk0sQ0ErQk5BOztBQUdBQSxrQkFBWSxDQUFaQSx1QkFDRTtBQUNFLGVBQU9qRyxLQUFNLENBQU5BLHFCQUFQO0FBRkppRztBQWxDRk8sS0FBTyxDQUFQQTtBQVZGeEUsR0FBYSxDQUFiQTtBQW9EQTtBQUNEOztBQ3JKRDtNQUVFL0UsZ0IsRUFBQUE7QUFBQUEsWUFBNkIsRUFBN0JBOzs7QUFFQSxNQUFNQyxTQUFTLEdBQUc0RixpQkFBaUIsT0FBbkMsS0FBbUMsQ0FBbkM7QUFDQTtBQUNBN0IsY0FBWSxDQUFDO0FBQ1gzQixZQUFRLEdBQUdwQyxTQUFTLENBQXBCb0MsTUFBV3BDLEVBQVhvQztBQUNBQSxZQUFRLENBQVJBO0FBRkYyQixHQUFZLENBQVpBO0FBSUE7QUFDRDs7QUFRRDtBQUNFLE1BQUlnQyxHQUFHLEtBQVAsU0FBcUI7QUFDbkI7QUFDQW5FLFFBQUksQ0FBSkE7QUFDQTtBQUhGLFNBSU8sSUFBSW1FLEdBQUcsS0FBUCxTQUFxQjtBQUMxQm1ELFdBQU8sQ0FBUEE7QUFDQTtBQUZLLFNBR0EsSUFBSW5ELEdBQUcsS0FBUCxhQUF5QjtBQUM5QkEsT0FBRyxHQUFIQTtBQURLLFNBRUEsSUFBSUEsR0FBRyxLQUFQLDJCQUF1QztBQUM1QyxRQUFNNkQsSUFBSSxHQUFHcEQsS0FBSyxDQUFsQjs7QUFDQSxRQUFJL0MsS0FBSyxDQUFULElBQVMsQ0FBVCxFQUFpQjtBQUNmcUIsbUJBQWEsQ0FBQztBQUNaLFlBQU0rRSxRQUFRLEdBQUdELElBQUksQ0FBckI7QUFDQS9JLGdCQUFRLENBQUM7QUFDUDtBQUNBZSxjQUFJLENBQUpBO0FBRkZmLFNBQVEsQ0FBUkE7QUFGRmlFLE9BQWEsQ0FBYkE7QUFERixXQVFPO0FBQ0xsRCxVQUFJLENBQUpBO0FBQ0Q7O0FBQ0Q7QUFiSyxTQWNBLElBQUltRSxHQUFHLEtBQVAsT0FBbUI7QUFDeEI7QUFDQVMsU0FBSyxDQUFMQSxJQUFLLENBQUxBO0FBQ0E7QUFDRDs7QUFDRDVFLE1BQUksQ0FBSkE7QUFDRDs7QUFFRDtBQUNFLE1BQUl1RCxTQUFTLEdBQUdxQixLQUFLLENBQXJCO0FBRUEsTUFBTXNELE9BQU8sR0FBRyxnQkFBaEIsR0FBZ0IsQ0FBaEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdELE9BQU8sR0FBRy9ELEdBQUcsQ0FBSEEsbUJBQUgsaUJBQUdBLEVBQUgsR0FBekI7QUFDQSxNQUFJaUUscUJBQXFCLEdBQUdGLE9BQU8sR0FBR2xHLGlCQUFpQixDQUFwQixTQUFvQixDQUFwQixHQUFrQyxhQUFyRTtBQUVBL0MsVUFBUSxDQUFDO0FBQ1AsaUJBQWE7QUFDWGUsVUFBSSxDQUFKQTtBQUNBO0FBQ0Q7O0FBQ0RxSSxXQUFPLFlBQVBBLFNBQU8sQ0FBUEE7QUFMRnBKLEdBQVEsQ0FBUkE7QUFRQWlFLGVBQWEsQ0FBQztBQUNaLFFBQU0rRSxRQUFRLEdBQUdyRCxLQUFLLENBQXRCO0FBQ0EzRixZQUFRLENBQUM7QUFDUCxtQkFBYTtBQUNYZSxZQUFJLENBQUpBO0FBQ0FvSSw2QkFBcUIsR0FBR3BHLGlCQUFpQixDQUF6Q29HLHFCQUF5QyxDQUF6Q0E7QUFDQXBJLFlBQUksQ0FBSkE7QUFDQTtBQUNEOztBQUNEcUksYUFBTyxZQUFQQSxRQUFPLENBQVBBO0FBUEZwSixLQUFRLENBQVJBO0FBU0FzRSxhQUFTLEdBQVRBO0FBWEZMLEdBQWEsQ0FBYkE7QUFhRDs7QUFFRCxTQUFnQm9GLENBQWhCLENBQ0VDLElBREYsRUFFRXBLLEtBRkYsRUFFRUE7b0NBQ0dxSyw2QyxFQUFBQSxRLEVBQUFBLFcsRUFBQUEsTSxFQUFBQTtBQUFBQTs7O0FBRUgsTUFBTWhJLFFBQVEsR0FBRyxJQUFqQixRQUFpQixFQUFqQjs7QUFDQSxNQUFJLGdCQUFKLFVBQThCO0FBQzVCLFFBQU1pSSxHQUFHLEdBQUdwTCxRQUFRLENBQVJBLGNBQVosSUFBWUEsQ0FBWjs7QUFDQSxlQUFXO0FBQ1RxSCxZQUFNLENBQU5BLG9CQUEyQixlQUFHO0FBQzVCLFlBQU1FLEtBQUssR0FBR3pHLEtBQUssQ0FBbkIsR0FBbUIsQ0FBbkI7O0FBQ0EsWUFBSSwrQkFBK0IsZ0JBQW5DLEdBQW1DLENBQW5DLEVBQXlEO0FBQ3ZEc0ssYUFBRyxDQUFIQSxpQkFDRXRFLEdBQUcsQ0FBSEEsbUJBREZzRSxpQkFDRXRFLEVBREZzRSxFQUVFekcsaUJBQWlCLENBRm5CeUcsS0FFbUIsQ0FGbkJBO0FBSUE7QUFMRixlQU1PLElBQUk1RyxLQUFLLENBQVQsS0FBUyxDQUFULEVBQWtCO0FBQ3ZCNkcsa0JBQVEsV0FBUkEsS0FBUSxDQUFSQTtBQUNBO0FBQ0Q7O0FBQ0RMLGVBQU8sV0FBUEEsS0FBTyxDQUFQQTtBQVpGM0Q7QUFjRDs7QUFDRCxrQkFBYztBQUNaOEQsY0FBUSxDQUFSQSxRQUFpQixpQkFBSztBQUNwQixZQUFJLDZCQUE2QixpQkFBakMsVUFBNEQ7QUFDMURDLGFBQUcsQ0FBSEEsWUFBZ0JwTCxRQUFRLENBQVJBLGVBQWhCb0wsS0FBZ0JwTCxDQUFoQm9MO0FBREYsZUFFTyxJQUFJNUcsS0FBSyxDQUFULEtBQVMsQ0FBVCxFQUFrQjtBQUN2QixjQUFNOEcsV0FBVyxHQUFqQjtBQUNBLGNBQU12RixHQUFHLEdBQUd1RixXQUFXLENBRkEsS0FFdkIsQ0FGdUI7O0FBS3ZCLGNBQU1DLFFBQVEsR0FBR3ZMLFFBQVEsQ0FBUkEsZUFBd0IsS0FBekMsR0FBaUJBLENBQWpCO0FBQ0E2Rix1QkFBYSxDQUFDO0FBQ1osZ0JBQU0rRSxRQUFRLEdBQUdVLFdBQVcsQ0FBNUI7QUFDQTFKLG9CQUFRLENBQUM7QUFDUDJKLHNCQUFRLENBQVJBO0FBREYzSixhQUFRLENBQVJBO0FBRkZpRSxXQUFhLENBQWJBO0FBTUF1RixhQUFHLENBQUhBO0FBWkssZUFhQSxJQUFJeEMsV0FBVyxDQUFmLEtBQWUsQ0FBZixFQUF3QjtBQUM3QixjQUFNRixTQUFTLEdBQWY7O0FBQ0EsY0FBTXZGLFNBQVEsR0FBR3VGLFNBQWpCOztBQUNBdkYsbUJBQVEsQ0FBUkE7QUFISyxlQUlBLElBQUlaLFFBQVEsQ0FBUkEsV0FBSixLQUFJQSxDQUFKLEVBQWdDO0FBQ3BDc0IsZUFBa0IsQ0FBbEJBO0FBREksZUFFQTtBQUNMdUgsYUFBRyxDQUFIQTtBQUNEO0FBeEJIRDtBQTBCRDs7QUFDRGhJLFlBQVEsQ0FBUkE7QUE5Q0YsU0ErQ08sSUFBSSxnQkFBSixZQUFnQztBQUNyQztBQUNBLFdBQU9xSSxjQUFjO0FBRW5CTCxjQUFRLEVBQUVBO0FBRlMsT0FBckI7QUFGSyxTQU1BLElBQUkzRyxLQUFLLENBQVQsSUFBUyxDQUFULEVBQWlCO0FBQ3RCO0FBQ0EsUUFBTXhCLElBQUksR0FBVjtBQUNBO0FBQ0E2QyxpQkFBYSxDQUFDO0FBQ1osVUFBSSxDQUFKLE1BQVc7QUFDVCxZQUFNOUUsU0FBUyxHQUFHaUMsSUFBSSxDQUF0QjtBQUNBcUgsZUFBTyxDQUFDO0FBQ05vQixjQUFJLEdBQUdELGNBQWM7QUFFbkJMLG9CQUFRLEVBQUVBO0FBRlMsYUFBckJNO0FBREZwQixTQUFPLENBQVBBO0FBRkYsYUFRTztBQUNMLFlBQU1xQixPQUFPLEdBQUdGLGNBQWMsQ0FBQ3hJLElBQUksQ0FBTDtBQUU1Qm1JLGtCQUFRLEVBQUVBO0FBRmtCLFdBQTlCO0FBSUFNLFlBQUksQ0FBSkE7QUFDQUEsWUFBSSxHQUFKQTtBQUNEO0FBaEJINUYsS0FBYSxDQUFiQTtBQWtCQTtBQUNEOztBQUNEO0FBQ0Q7O0FBRUQsU0FBZ0J0RSxNQUFoQixDQUF1QjRCLFFBQXZCLEVBQTJDTixTQUEzQyxFQUEyQ0E7QUFDekNNLFVBQVEsQ0FBUkE7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLRztBQUNBOztJQUNxQndJLEk7Ozs7Ozs7NkJBQ1I7QUFDTCxhQUFPLHdEQUFLO0FBQUksVUFBRSxFQUFDO0FBQVAsMkJBQUwsRUFDbkI7QUFBSSxVQUFFLEVBQUM7QUFBUCx1QkFEbUIsRUFFakIsWUFBVztBQUNPLFlBQU1DLEdBQUcsR0FBRztBQUNSQyxpQkFBTyxFQUFFO0FBREQsU0FBWjs7QUFHQSxTQUFDLFVBQVNDLE1BQVQsRUFBaUI7QUFDZEEsZ0JBQU0sQ0FBQ0QsT0FBUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBQ1g7QUFDTCx1QkFBTyxzRUFBUDtBQUNIO0FBSG1COztBQUFBO0FBQUE7QUFLSCxTQU5ELEVBTUdELEdBTkg7O0FBT0EsWUFBTTdLLFNBQVMsR0FBRzZLLEdBQUcsQ0FBQ0MsT0FBdEI7QUFDQSxlQUFPLDJDQUFDLDRHQUFEO0FBQ0gsbUJBQVMsRUFBRTlLLFNBRFI7QUFFSCxjQUFJLEVBQUVnTCxrQkFBa0IsQ0FBQywwTEFBRDtBQUZyQixVQUFQO0FBSUgsT0FoQmhCLEVBRmtCLEVBbUJIO0FBQUksVUFBRSxFQUFDO0FBQVAsaUJBbkJHLEVBb0JuQixxRUFBYyxxRUFBZCxnQ0FwQm1CLEVBcUJuQix1REFDQSxrRUFBVywrREFBWCxDQURBLEVBRUEsMEZBRkEsQ0FyQm1CLEVBeUJqQixZQUFXO0FBQ08sWUFBTUgsR0FBRyxHQUFHO0FBQ1JDLGlCQUFPLEVBQUU7QUFERCxTQUFaOztBQUdBLFNBQUMsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUNkQSxnQkFBTSxDQUFDRCxPQUFQO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxvQ0FFZDtBQUNGLHFCQUFLOUQsS0FBTDtBQUNIO0FBSm1CO0FBQUE7QUFBQSx1Q0FLWDtBQUNMLHVCQUFPLHFFQUNPLEtBQUtBLEtBRFosRUFFSCxzREFDSTtBQUFRLHlCQUFPLEVBQUUsS0FBS2lFO0FBQXRCLHlCQURKLENBRkcsQ0FBUDtBQU1IO0FBWm1COztBQUFBO0FBQUEsNEZBQ25CN0ssNkNBRG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRixDQURFO0FBQUE7QUFBQTtBQWNILFNBZkQsRUFlR3lLLEdBZkg7O0FBZ0JBLFlBQU03SyxTQUFTLEdBQUc2SyxHQUFHLENBQUNDLE9BQXRCO0FBQ0EsZUFBTywyQ0FBQyw0R0FBRDtBQUNILG1CQUFTLEVBQUU5SyxTQURSO0FBRUgsY0FBSSxFQUFFZ0wsa0JBQWtCLENBQUMsZ3BCQUFEO0FBRnJCLFVBQVA7QUFJSCxPQXpCaEIsRUF6QmtCLEVBbURIO0FBQUksVUFBRSxFQUFDO0FBQVAsb0JBbkRHLEVBb0RuQix1REFDQSx1REFBSSw2RUFBSix3QkFEQSxFQUVBLDRHQUZBLENBcERtQixFQXdEbkI7QUFBSSxVQUFFLEVBQUM7QUFBUCxtQkF4RG1CLEVBeURqQixZQUFXO0FBQ08sWUFBTUgsR0FBRyxHQUFHO0FBQ1JDLGlCQUFPLEVBQUU7QUFERCxTQUFaOztBQUdBLFNBQUMsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUNkQSxnQkFBTSxDQUFDRCxPQUFQO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxvQ0FLZDtBQUNGLHFCQUFLOUQsS0FBTDtBQUNIO0FBUG1CO0FBQUE7QUFBQSx1Q0FTWDtBQUNMLHVCQUFPLHdEQUNILG9FQUFjLEtBQUtBLEtBQW5CLE1BREcsRUFFSCxtRUFBYSxLQUFLa0UsV0FBbEIsTUFGRyxFQUdILHNEQUNJO0FBQVEseUJBQU8sRUFBRSxLQUFLRDtBQUF0Qix5QkFESixDQUhHLENBQVA7QUFPSDtBQWpCbUI7QUFBQTtBQUFBLGtDQUVRO0FBQ3hCLHVCQUFPLEtBQUtqRSxLQUFMLEdBQWEsQ0FBcEI7QUFDSDtBQUptQjs7QUFBQTtBQUFBLCtGQUNuQjVHLDZDQURtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0YsQ0FERTtBQUFBO0FBQUEsMkVBRW5CNkYsNkNBRm1CO0FBbUJILFNBcEJELEVBb0JHNEUsR0FwQkg7O0FBcUJBLFlBQU03SyxTQUFTLEdBQUc2SyxHQUFHLENBQUNDLE9BQXRCO0FBQ0EsZUFBTywyQ0FBQyw0R0FBRDtBQUNILG1CQUFTLEVBQUU5SyxTQURSO0FBRUgsY0FBSSxFQUFFZ0wsa0JBQWtCLENBQUMsbTdCQUFEO0FBRnJCLFVBQVA7QUFJSCxPQTlCaEIsRUF6RGtCLEVBd0ZIO0FBQUksVUFBRSxFQUFDO0FBQVAscUJBeEZHLEVBeUZuQix1REFDQSxzRUFBZSxtRUFBZix1QkFEQSxFQUVBLHVEQUFJLHNFQUFKLHlDQUE4RCxxRUFBOUQsNkJBRkEsQ0F6Rm1CLEVBNkZqQixZQUFXO0FBQ08sWUFBTUgsR0FBRyxHQUFHO0FBQ1JDLGlCQUFPLEVBQUU7QUFERCxTQUFaOztBQUdBLFNBQUMsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUFBLGNBQ1JJLE9BRFE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUd6QjtBQUNMLHVCQUFPLG9GQUE4QixZQUE5QixRQUE4QyxLQUFLcEwsS0FBTCxDQUFXaUgsS0FBekQsQ0FBUDtBQUNIO0FBTGlDOztBQUFBO0FBQUEsK0ZBRWpDNUcsNkNBRmlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVF0QzJLLGdCQUFNLENBQUNELE9BQVA7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9DQUVVO0FBQ0YscUJBQUs5RCxLQUFMO0FBQ0g7QUFKTDtBQUFBO0FBQUEsdUNBS2E7QUFDUCx1QkFBTyx3REFDTCwyQ0FBQyxPQUFEO0FBQVMsdUJBQUssRUFBRSxLQUFLQTtBQUFyQixrQkFESyxFQUVMLHNEQUNJO0FBQVEseUJBQU8sRUFBRSxLQUFLaUU7QUFBdEIseUJBREosQ0FGSyxDQUFQO0FBTUQ7QUFaTDs7QUFBQTtBQUFBLCtGQUNLN0ssNkNBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNzQixDQUR0QjtBQUFBO0FBQUE7QUFjcUIsU0F0QkQsRUFzQkd5SyxHQXRCSDs7QUF1QkEsWUFBTTdLLFNBQVMsR0FBRzZLLEdBQUcsQ0FBQ0MsT0FBdEI7QUFDQSxlQUFPLDJDQUFDLDRHQUFEO0FBQ0gsbUJBQVMsRUFBRTlLLFNBRFI7QUFFSCxjQUFJLEVBQUVnTCxrQkFBa0IsQ0FBQyxxNkJBQUQ7QUFGckIsVUFBUDtBQUlILE9BaENoQixFQTdGa0IsRUE4SEg7QUFBSSxVQUFFLEVBQUM7QUFBUCxpQkE5SEcsRUErSG5CO0FBQUksVUFBRSxFQUFDO0FBQVAsZUEvSG1CLEVBZ0luQiw4REFBTywrREFBUCwrQkFBZ0QsK0RBQWhELE1BaEltQixFQWlJakIsWUFBVztBQUNPLFlBQU1ILEdBQUcsR0FBRztBQUNSQyxpQkFBTyxFQUFFO0FBREQsU0FBWjs7QUFHQSxTQUFDLFVBQVNDLE1BQVQsRUFBaUI7QUFBQTs7QUFDZEEsZ0JBQU0sQ0FBQ0QsT0FBUDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0NBR2Q7QUFDRixxQkFBSzlELEtBQUw7QUFDSDtBQUxtQjtBQUFBO0FBQUEsdUNBT1g7QUFBQTs7QUFDUCx1QkFBTyxxRUFDSyxLQUFLQSxLQURWLEVBRUwsc0RBQ0k7QUFBUSx5QkFBTyxFQUFFLEtBQUtpRTtBQUF0Qix5QkFESixDQUZLLEVBTUwsc0VBQ0NuRCw0Q0FBRyxFQUNBO0FBQ0E7QUFBQSx5QkFBTSxLQUFJLENBQUNkLEtBQUwsSUFBYyxDQUFwQjtBQUFBLGlCQUZBLEVBR0E7QUFDQTtBQUFBLHlCQUFNLGdFQUFVLEtBQUksQ0FBQ0EsS0FBZixDQUFOO0FBQUEsaUJBSkEsRUFLQTtBQUNBO0FBQUEseUJBQU0sK0RBQVMsS0FBSSxDQUFDQSxLQUFkLENBQU47QUFBQSxpQkFOQSxDQURKLENBTkssQ0FBUDtBQWlCRDtBQXpCbUI7O0FBQUE7QUFBQSwrRkFDbkI1Ryw2Q0FEbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNGLENBREU7QUFBQTtBQUFBO0FBNEJILFNBN0JELEVBNkJHeUssR0E3Qkg7O0FBOEJBLFlBQU03SyxTQUFTLEdBQUc2SyxHQUFHLENBQUNDLE9BQXRCO0FBQ0EsZUFBTywyQ0FBQyw0R0FBRDtBQUNILG1CQUFTLEVBQUU5SyxTQURSO0FBRUgsY0FBSSxFQUFFZ0wsa0JBQWtCLENBQUMsdXdDQUFEO0FBRnJCLFVBQVA7QUFJSCxPQXZDaEIsRUFqSWtCLEVBeUtIO0FBQUksVUFBRSxFQUFDO0FBQVAsZ0JBektHLEVBMEtuQiw4REFBTyxnRUFBUCxvQkExS21CLEVBMktqQixZQUFXO0FBQ08sWUFBTUgsR0FBRyxHQUFHO0FBQ1JDLGlCQUFPLEVBQUU7QUFERCxTQUFaOztBQUdBLFNBQUMsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUNkLGNBQUkvRCxLQUFLLEdBQUcsQ0FBWjtBQUV4QitELGdCQUFNLENBQUNELE9BQVA7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdDQUdZO0FBQ047QUFDQSxxQkFBS25DLElBQUwsQ0FBVXlDLElBQVYsQ0FBZSxhQUFhcEUsS0FBSyxFQUFqQztBQUNIO0FBTkg7QUFBQTtBQUFBLHVDQVFZO0FBQUE7O0FBQ1IsdUJBQU8sdURBQ0w7QUFBUSx5QkFBTyxFQUFFLEtBQUtxRTtBQUF0Qiw4QkFESyxFQUVKOUMsNkNBQUksQ0FDRCxLQUFLSSxJQURKLEVBQ1c7QUFDWiwwQkFBQ3BILElBQUQsRUFBVTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHlCQUFPLDZEQUNEQSxJQUFJLENBQUNELEtBREosUUFDYUMsSUFBSSxDQUFDaUYsS0FEbEIsRUFFSDtBQUFRLDJCQUFPLEVBQUU7QUFBQSw2QkFBTSxNQUFJLENBQUNtQyxJQUFMLENBQVUyQyxNQUFWLENBQWlCL0osSUFBSSxDQUFDRCxLQUF0QixFQUE2QixDQUE3QixDQUFOO0FBQUE7QUFBakIsOEJBRkcsQ0FBUDtBQUlILGlCQVZBLEVBV0QsVUFBQ0MsSUFBRCxFQUFVO0FBQ047QUFDQTtBQUNBLHlCQUFPQSxJQUFJLENBQUNpRixLQUFaO0FBQ0gsaUJBZkEsQ0FGQSxDQUFQO0FBb0JEO0FBN0JIOztBQUFBO0FBQUEsK0ZBQ0dwRyw2Q0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ21CLENBQUMsU0FBUzRHLEtBQUssRUFBZixDQURuQjtBQUFBO0FBQUE7QUErQnFCLFNBbENELEVBa0NHNkQsR0FsQ0g7O0FBbUNBLFlBQU03SyxTQUFTLEdBQUc2SyxHQUFHLENBQUNDLE9BQXRCO0FBQ0EsZUFBTywyQ0FBQyw0R0FBRDtBQUNILG1CQUFTLEVBQUU5SyxTQURSO0FBRUgsY0FBSSxFQUFFZ0wsa0JBQWtCLENBQUMsbTJEQUFEO0FBRnJCLFVBQVA7QUFJSCxPQTVDaEIsRUEzS2tCLEVBd05IO0FBQUksVUFBRSxFQUFDO0FBQVAsd0JBeE5HLEVBeU5qQixZQUFXO0FBQ08sWUFBTUgsR0FBRyxHQUFHO0FBQ1JDLGlCQUFPLEVBQUU7QUFERCxTQUFaOztBQUdBLFNBQUMsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUNkLGNBQUkvRCxLQUFLLEdBQUcsQ0FBWjtBQUN4QitELGdCQUFNLENBQUNELE9BQVA7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdDQVFZO0FBQ047QUFDQSxxQkFBS25DLElBQUwsQ0FBVXlDLElBQVYsQ0FBZTtBQUNiRyxvQkFBRSxFQUFFdkUsS0FBSyxFQURJO0FBRWJ3RSxzQkFBSSxFQUFFLEtBQUt6TSxLQUZFO0FBR2IwTSwyQkFBUyxFQUFFO0FBSEUsaUJBQWY7QUFLQSxxQkFBSzFNLEtBQUwsR0FBYSxFQUFiO0FBQ0g7QUFoQkg7QUFBQTtBQUFBLHlDQWtCYXVDLEtBbEJiLEVBa0JvQjtBQUNoQjtBQUNBO0FBQ0Esb0JBQU13QyxJQUFJLEdBQUcsQ0FBQyxLQUFLNkUsSUFBTCxDQUFVckgsS0FBVixDQUFELEVBQW1CLEtBQUtxSCxJQUFMLENBQVVySCxLQUFLLEdBQUcsQ0FBbEIsQ0FBbkIsQ0FBYjtBQUNBLHFCQUFLcUgsSUFBTCxDQUFVMkMsTUFBVixDQUFpQmhLLEtBQWpCLEVBQXdCLENBQXhCLEVBQTJCd0MsSUFBSSxDQUFDLENBQUQsQ0FBL0IsRUFBb0NBLElBQUksQ0FBQyxDQUFELENBQXhDO0FBQ0Q7QUF2Qkg7QUFBQTtBQUFBLHVDQXlCWTtBQUFBOztBQUNSLHVCQUFPLHVEQUNMO0FBQU8sdUJBQUssRUFBRSxLQUFLL0UsS0FBbkI7QUFBMEIseUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLDJCQUFPLE1BQUksQ0FBQ0QsS0FBTCxHQUFhQyxDQUFDLENBQUNvRSxNQUFGLENBQVNvRCxLQUE3QjtBQUFBO0FBQW5DLGtCQURLLEVBRUw7QUFBUSx5QkFBTyxFQUFFLEtBQUs2RTtBQUF0Qiw4QkFGSyxFQUdKOUMsNkNBQUksQ0FDRCxLQUFLSSxJQURKLEVBQ1c7QUFDWiwwQkFBQ3BILElBQUQsRUFBVTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHlCQUFPLDZEQUNEQSxJQUFJLENBQUNELEtBREosUUFDYUMsSUFBSSxDQUFDaUYsS0FBTCxDQUFXZ0YsSUFEeEIsRUFFSDtBQUFRLDJCQUFPLEVBQUU7QUFBQSw2QkFBTSxNQUFJLENBQUM3QyxJQUFMLENBQVUyQyxNQUFWLENBQWlCL0osSUFBSSxDQUFDRCxLQUF0QixFQUE2QixDQUE3QixDQUFOO0FBQUE7QUFBakIsOEJBRkcsRUFHRndHLDRDQUFHLENBQ0Y7QUFBQSwyQkFBTXZHLElBQUksQ0FBQ0QsS0FBTCxHQUFhLE1BQUksQ0FBQ3FILElBQUwsQ0FBVXRKLE1BQVYsR0FBbUIsQ0FBdEM7QUFBQSxtQkFERSxFQUVGO0FBQUEsMkJBQU07QUFBUSw2QkFBTyxFQUFFO0FBQUEsK0JBQU0sTUFBSSxDQUFDcU0sVUFBTCxDQUFnQm5LLElBQUksQ0FBQ0QsS0FBckIsQ0FBTjtBQUFBO0FBQWpCLG1DQUFOO0FBQUEsbUJBRkUsRUFHRjtBQUFBLDJCQUFNLHNFQUFOO0FBQUEsbUJBSEUsQ0FIRCxDQUFQO0FBU0gsaUJBZkEsRUFnQkQsVUFBQ0MsSUFBRCxFQUFVO0FBQ047QUFDQTtBQUNBLHlCQUFPQSxJQUFJLENBQUNpRixLQUFMLENBQVcrRSxFQUFsQjtBQUNILGlCQXBCQSxDQUhBLENBQVA7QUEwQkQ7QUFwREg7O0FBQUE7QUFBQSwrRkFDR25MLDZDQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDbUIsQ0FBQztBQUNoQm1MLGtCQUFFLEVBQUV2RSxLQUFLLEVBRE87QUFFaEJ3RSxvQkFBSSxFQUFFLE1BRlU7QUFHaEJDLHlCQUFTLEVBQUU7QUFISyxlQUFELENBRG5CO0FBQUE7QUFBQSxxRkFNR3JMLDZDQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNb0IsRUFOcEI7QUFBQTtBQUFBO0FBc0RxQixTQXhERCxFQXdER3lLLEdBeERIOztBQXlEQSxZQUFNN0ssU0FBUyxHQUFHNkssR0FBRyxDQUFDQyxPQUF0QjtBQUNBLGVBQU8sMkNBQUMsNEdBQUQ7QUFDSCxtQkFBUyxFQUFFOUssU0FEUjtBQUVILGNBQUksRUFBRWdMLGtCQUFrQixDQUFDLGl6R0FBRDtBQUZyQixVQUFQO0FBSUgsT0FsRWhCLEVBek5rQixFQTRSSDtBQUFJLFVBQUUsRUFBQztBQUFQLHNCQTVSRyxFQTZSbkIsMkVBQW9CO0FBQUcsWUFBSSxFQUFDO0FBQVIsdUJBQXBCLENBN1JtQixDQUFQO0FBK1JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BTVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLLEtBQTZCO0FBQ2xDO0FBQ0E7QUFDQSxFQUFFLFVBQVUsSUFBNEU7QUFDeEY7QUFDQSxFQUFFLGlDQUFxQixFQUFFLG1DQUFFO0FBQzNCO0FBQ0EsR0FBRztBQUFBLGtHQUFDO0FBQ0osRUFBRSxNQUFNLEVBRU47QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkREOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCBoLCBhdXRvcnVuIH0gZnJvbSBcIm92ZXJkb21cIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5cbmZ1bmN0aW9uIGh0bWxEZWNvZGUoaW5wdXQpe1xuICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlLmlubmVySFRNTCA9IGlucHV0O1xuICAgIC8vIGhhbmRsZSBjYXNlIG9mIGVtcHR5IGlucHV0XG4gICAgcmV0dXJuIGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgPyBcIlwiIDogZS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlYm94IHtcbiAgICBAcmVhY3RpdmUgcHJvcHM6IHtcbiAgICAgICAgY29kZTogc3RyaW5nLFxuICAgICAgICBjb21wb25lbnQ6IEZ1bmN0aW9uLFxuICAgIH1cbiAgICBcbiAgICBoYW5kbGVDb2RlUmVmKGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gUHJpc20uaGlnaGxpZ2h0KGh0bWxEZWNvZGUoZG9tLmlubmVySFRNTCksIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvZGVib3hcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHByZT48Y29kZSByZWY9e3RoaXMuaGFuZGxlQ29kZVJlZn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuY29kZX19PjwvY29kZT48L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW9cIj5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBoLFxufSBmcm9tICdvdmVyZG9tJztcblxuY2xhc3MgTG9nbyB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiIFxuICAgICAgICA+XG4gICAgICAgIDwvaW1nPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgfTtcbn1cbiIsImltcG9ydCAnLi9pbmRleC5sZXNzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyByZW5kZXIsICBoLCByZWFjdGl2ZSB9IGZyb20gJ292ZXJkb20nO1xuXG5pbXBvcnQgRG9jR2V0U3RhcnRlZCBmcm9tICcuL2RvYy9nZXQtc3RhcnRlZC5tZCc7XG5cbmNsYXNzIEFwcCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvY0dldFN0YXJ0ZWQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiY29uc3QgdGFza3M6IFNldDxGdW5jdGlvbj4gPSBuZXcgU2V0KCk7XG5jb25zdCBkZWZlclRhc2tzOiBTZXQ8RnVuY3Rpb24+ID0gbmV3IFNldCgpO1xuXG5sZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZSh0YXNrOiBGdW5jdGlvbiwgZGVmZXIgPSBmYWxzZSkge1xuICBpZiAoZGVmZXIpIHtcbiAgICBkZWZlclRhc2tzLmFkZCh0YXNrKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrcy5hZGQodGFzayk7XG4gIH1cbiAgaWYgKCF0aW1lcikge1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBjb25zdCB0YXNrSXRlbXMgPSBBcnJheS5mcm9tKHRhc2tzLnZhbHVlcygpKTtcbiAgICAgIHRhc2tzLmNsZWFyKCk7XG4gICAgICBjb25zdCBkZWZlckl0ZW1zID0gQXJyYXkuZnJvbShkZWZlclRhc2tzLnZhbHVlcygpKTtcbiAgICAgIGRlZmVyVGFza3MuY2xlYXIoKTtcbiAgICAgIHRhc2tJdGVtcy5jb25jYXQoZGVmZXJJdGVtcykuZm9yRWFjaCh0YXNrSXRlbSA9PiB7XG4gICAgICAgIHRhc2tJdGVtKCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluc2VydDxUPihhcnJheTogQXJyYXk8VD4sIGluZGV4OiBudW1iZXIsIGl0ZW06IFQpIHtcbiAgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGVzKG5vZGVzOiBOb2RlW10pIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZXNbMF0ucGFyZW50Tm9kZTtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBjb25zdCBzdGFydFBvcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50Py5jaGlsZE5vZGVzLCBub2Rlc1swXSk7XG4gIHJhbmdlLnNldFN0YXJ0KHBhcmVudCEsIHN0YXJ0UG9zKTtcbiAgcmFuZ2Uuc2V0RW5kKHBhcmVudCEsIHN0YXJ0UG9zICsgbm9kZXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVJdGVtIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaW5zZXJ0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2gnO1xuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnQge1xuICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29udGFpbmVyPzogTm9kZTtcbiAgY2hpbGROb2RlczogTm9kZVtdID0gW107XG4gIGtleT86IG51bWJlciB8IHN0cmluZztcbiAgcmVhY3RpdmVJdGVtPzogUmVhY3RpdmVJdGVtPGFueT47XG5cbiAgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBbXTtcblxuICBzdGF0aWMgaXNGcmFnbWVudChvYmo6IHVua25vd24pIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IChvYmogYXMgT2JqZWN0KS5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT09IEZyYWdtZW50IHx8IGNvbnN0cnVjdG9yID09PSBGcmFnbWVudExpc3Q7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZDogTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZCBhcyBOb2RlO1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUsIGNvbnRhaW5lckZyYWdtZW50OiBGcmFnbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICAgIGlmICh0aGlzLmNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGNvbnRhaW5lckZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRhaW5lckZyYWdtZW50LmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuY29uY2F0KGNvbnRhaW5lckZyYWdtZW50LmNvbXBvbmVudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVuZGVyLCB0cmlnZ2VyIG9uTW91bnRcbiAgICAgICAgdGhpcy5vbk1vdW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCgpIHtcbiAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IHtcbiAgICAgICAgY29tcC5vbk1vdW50ICYmIGNvbXAub25Nb3VudCgpO1xuICAgICAgfSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICBvbkRlc3RvcnkoKSB7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgIGNvbXAub25EZXN0b3J5ICYmIGNvbXAub25EZXN0b3J5KCk7XG4gICAgICB9KTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHJlcGxhY2VXaXRoKGZyYWdtZW50OiBGcmFnbWVudCkge1xuICAgIGZyYWdtZW50LmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5jcmVhdGVSYW5nZSgpO1xuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICAgIHJhbmdlLmluc2VydE5vZGUoZnJhZ21lbnQuZnJhZ21lbnQpO1xuICAgICAgcmFuZ2UuZGV0YWNoKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkRlc3RvcnkoKTtcbiAgICBmcmFnbWVudC5vbk1vdW50KCk7XG4gIH1cblxuICBjcmVhdGVFbXB0eSgpIHtcbiAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbXB0eScpKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRCZWZvcmVUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUsIGJlZm9yZU5vZGU6IE5vZGUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAvLyBoYXMgYSBjb250YWluZXIgYWxyZWFkeVxuICAgICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBjdXJyZW50IGNvbnRhaW5lciBmaXJzdFxuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lciEucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jcmVhdGVFbXB0eSgpO1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5mcmFnbWVudCwgYmVmb3JlTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmNoaWxkTm9kZXNbMF0ucGFyZW50Tm9kZSE7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgIHBhcmVudD8uY2hpbGROb2RlcyxcbiAgICAgIHRoaXMuY2hpbGROb2Rlc1swXVxuICAgICk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQocGFyZW50LCBzdGFydFBvcyk7XG4gICAgcmFuZ2Uuc2V0RW5kKHBhcmVudCwgc3RhcnRQb3MgKyB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBnZXRGaXJzdE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnRMaXN0IGV4dGVuZHMgRnJhZ21lbnQge1xuICBjaGlsZEZyYWdtZW50czogRnJhZ21lbnRbXSA9IFtdO1xuXG4gIGFwcGVuZEZyYWdtZW50KGNoaWxkOiBGcmFnbWVudCwga2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjaGlsZC5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLmZyYWdtZW50LCB0aGlzKTtcbiAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnB1c2goY2hpbGQpO1xuICAgIGNoaWxkLmtleSA9IGtleTtcbiAgfVxuXG4gIGluc2VydChpbmRleDogbnVtYmVyLCBmcmFnbWVudDogRnJhZ21lbnQsIG5ld0tleTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgZnJhZ21lbnQua2V5ID0gbmV3S2V5O1xuICAgIGZyYWdtZW50Lmluc2VydEJlZm9yZVRvQ29udGFpbmVyKFxuICAgICAgdGhpcy5jb250YWluZXIhLFxuICAgICAgdGhpcy5jaGlsZEZyYWdtZW50c1tpbmRleF0/LmdldEZpcnN0Tm9kZSgpIHx8IG51bGxcbiAgICApO1xuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCBpbmRleCwgZnJhZ21lbnQpO1xuICB9XG5cbiAgcmVtb3ZlV2l0aEtleXMoa2V5czogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGNoaWxkLmtleSEpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGNoaWxkO1xuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5nZSA9IGZyYWdtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICAgIHJhbmdlLmRldGFjaCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBpbnNlcnRCZWZvcmUgPSB0aGlzLmNoaWxkRnJhZ21lbnRzW3RvSW5kZXhdO1xuXG4gICAgbGV0IGluc2VydEJlZm9yZU5vZGU6IE5vZGUgfCBudWxsID0gaW5zZXJ0QmVmb3JlPy5nZXRGaXJzdE5vZGUoKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2hpbGRGcmFnbWVudHNbZnJvbUluZGV4XSE7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZVRvQ29udGFpbmVyKHRoaXMuY29udGFpbmVyISwgaW5zZXJ0QmVmb3JlTm9kZSk7XG5cbiAgICBpbnNlcnQodGhpcy5jaGlsZEZyYWdtZW50cywgdG9JbmRleCwgdGFyZ2V0KTtcbiAgICBsZXQgZGVsZXRlSW5kZXggPSBmcm9tSW5kZXg7XG4gICAgaWYgKHRvSW5kZXggPCBmcm9tSW5kZXgpIHtcbiAgICAgIGRlbGV0ZUluZGV4ICs9IDE7XG4gICAgfVxuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50JztcblxuY29uc3QgUmVmU3ltYm9sID0gU3ltYm9sKCdyZWYnKTtcbmNvbnN0IEludGVybmFsUmF3U3ltYm9sID0gU3ltYm9sKCdpbnRlcm5hbF9yYXcnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmPFQ+KHI6IFJlZjxUPiB8IHVua25vd24pOiByIGlzIFJlZjxUPjtcbmV4cG9ydCBmdW5jdGlvbiBpc1JlZihyOiBhbnkpOiByIGlzIFJlZiB7XG4gIHJldHVybiByICYmIChyIGFzIFJlZilbUmVmU3ltYm9sXSA9PT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVmPFQ+KHJlZjogVCk6IFQgZXh0ZW5kcyBSZWY8aW5mZXIgVj4gPyBWIDogVCB7XG4gIHJldHVybiBpc1JlZihyZWYpID8gKHJlZi52YWx1ZSBhcyBhbnkpIDogcmVmO1xufVxuXG50eXBlIEtleSA9IHN0cmluZyB8IHN5bWJvbCB8IG51bWJlcjtcblxubGV0IGhpZGVSZWZNb2RlID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwRm5IaWRlUmVmTW9kZTxUIGV4dGVuZHMgRnVuY3Rpb24+KGZuOiBUKSB7XG4gIHJldHVybiAoZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICBsZXQgdGVtcCA9IGhpZGVSZWZNb2RlO1xuICAgIGhpZGVSZWZNb2RlID0gdHJ1ZTtcbiAgICBjb25zdCByID0gZm4oLi4uYXJncyk7XG4gICAgaGlkZVJlZk1vZGUgPSB0ZW1wO1xuICAgIHJldHVybiByO1xuICB9IGFzIHVua25vd24pIGFzIFQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkluUmVmTW9kZShjYjogRnVuY3Rpb24pIHtcbiAgbGV0IHRlbXAgPSBoaWRlUmVmTW9kZTtcbiAgaGlkZVJlZk1vZGUgPSBmYWxzZTtcbiAgY29uc3QgciA9IGNiKCk7XG4gIGhpZGVSZWZNb2RlID0gdGVtcDtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5JbkhpZGVSZWZNb2RlKGNiOiBGdW5jdGlvbikge1xuICBsZXQgdGVtcCA9IGhpZGVSZWZNb2RlO1xuICBoaWRlUmVmTW9kZSA9IHRydWU7XG4gIGNvbnN0IHIgPSBjYigpO1xuICBoaWRlUmVmTW9kZSA9IHRlbXA7XG4gIHJldHVybiByO1xufVxuXG5jb25zdCBwcm94eU9iak1hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgT2JqZWN0PigpO1xuXG5jbGFzcyBEZXBzTWFuYWdlciB7XG4gIHByaXZhdGUgX2NvbGxlY3Rpbmc6IFRyaWdnZXJhYmxlUmVmW10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVwcyA9IG5ldyBXZWFrTWFwPFJlZiwgU2V0PFRyaWdnZXJhYmxlUmVmPj4oKTtcblxuICBwcml2YXRlIF9hZGREZXAodGFyZ2V0OiBSZWYsIHRyaWdnZXI6IFRyaWdnZXJhYmxlUmVmKSB7XG4gICAgaWYgKCF0aGlzLl9kZXBzLmhhcyh0YXJnZXQpKSB7XG4gICAgICB0aGlzLl9kZXBzLnNldCh0YXJnZXQsIG5ldyBTZXQoKSk7XG4gICAgfVxuICAgIHRoaXMuX2RlcHMuZ2V0KHRhcmdldCkhLmFkZCh0cmlnZ2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlcHModGFyZ2V0OiBSZWYpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9kZXBzLmdldCh0YXJnZXQpPy52YWx1ZXMoKSB8fCBbXSk7XG4gIH1cblxuICBiZWdpbkNvbGxlY3QocmVmOiBUcmlnZ2VyYWJsZVJlZikge1xuICAgIHRoaXMuX2NvbGxlY3RpbmcucHVzaChyZWYpO1xuICB9XG5cbiAgZW5kQ29sbGVjdCgpIHtcbiAgICB0aGlzLl9jb2xsZWN0aW5nLnBvcCgpO1xuICB9XG5cbiAgdHJhY2sodGFyZ2V0OiBSZWYpIHtcbiAgICBpZiAodGhpcy5fY29sbGVjdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hZGREZXAodGFyZ2V0LCB0aGlzLl9jb2xsZWN0aW5nW3RoaXMuX2NvbGxlY3RpbmcubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXIodGFyZ2V0OiBSZWYpIHtcbiAgICBjb25zdCBkZXBzID0gdGhpcy5fZ2V0RGVwcyh0YXJnZXQpO1xuICAgIGRlcHMuZm9yRWFjaChkZXAgPT4gZGVwLnRyaWdnZXIoKSk7XG4gIH1cbn1cblxuY29uc3QgZGVwc01hbmFnZXIgPSBuZXcgRGVwc01hbmFnZXIoKTtcblxuZXhwb3J0IGludGVyZmFjZSBSZWY8VCA9IGFueT4ge1xuICBbUmVmU3ltYm9sXTogYm9vbGVhbjtcbiAgdmFsdWU6IFQ7XG59XG5cbmludGVyZmFjZSBUcmlnZ2VyYWJsZVJlZjxUID0gYW55PiB7XG4gIFtSZWZTeW1ib2xdOiBib29sZWFuO1xuICB2YWx1ZTogVDtcbiAgdHJpZ2dlcjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhdyhyZWY6IFJlZikge1xuICBpZiAoaXNQcm94eVJlZihyZWYpKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiByZWZbSW50ZXJuYWxSYXdTeW1ib2xdO1xuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJlZi5fdmFsdWU7XG59XG5cbmV4cG9ydCB0eXBlIE5vVHJhY2tGbiA9IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZDtcblxuY2xhc3MgQXV0b3J1blJlZkltcGwge1xuICBbUmVmU3ltYm9sXSA9IHRydWU7XG4gIHZhbHVlID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mbjogKG5vdHJhY2tGbjogTm9UcmFja0ZuKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fcnVuKCk7XG4gIH1cblxuICBwcml2YXRlIF9ydW4oKSB7XG4gICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwRm5IaWRlUmVmTW9kZSh0aGlzLl9mbikuY2FsbCh0aGlzLCAoZm46ICgpID0+IHZvaWQpID0+IHtcbiAgICAgIC8vIG5vIHRyYWNrIGZuXG4gICAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gICAgICBmbigpO1xuICAgICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIH0pO1xuICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5fcnVuKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUF1dG9ydW4oZm46IChub3RyYWNrRm46IE5vVHJhY2tGbikgPT4gdm9pZCkge1xuICByZXR1cm4gbmV3IEF1dG9ydW5SZWZJbXBsKGZuKTtcbn1cblxuY2xhc3MgUmVmSW1wbDxUID0gYW55PiB7XG4gIHB1YmxpYyBbUmVmU3ltYm9sXSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmFsdWU6IFQpIHt9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWw6IFQpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBDb21wdXRlZFJlZkltcGw8VCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWx1ZSE6IFQ7XG4gIHByaXZhdGUgX2NvbXB1dGU6ICgpID0+IFQ7XG5cbiAgY29uc3RydWN0b3IoZ2V0dGVyOiAoKSA9PiBUKSB7XG4gICAgdGhpcy5fY29tcHV0ZSA9IGdldHRlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3JlY29tcHV0ZSgpIHtcbiAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9jb21wdXRlKCk7XG4gICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuX3JlY29tcHV0ZSgpO1xuICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIGxldCBsYXN0VmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLl9yZWNvbXB1dGUoKTtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgUHJveHlSZWZTeW1ib2wgPSBTeW1ib2woJ3Byb3h5LXJlZicpO1xuXG5mdW5jdGlvbiBpc1Byb3h5UmVmKHRhcmdldDogdW5rbm93bikge1xuICByZXR1cm4gdGFyZ2V0ICYmICh0YXJnZXQgYXMgUHJveHlSZWZJbXBsPGFueT4pW1Byb3h5UmVmU3ltYm9sXSA9PT0gdHJ1ZTtcbn1cblxuY29uc3QgcHJveHlNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE9iamVjdD4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihvYmo6IFQsIGFsbFJlYWN0aXZlID0gZmFsc2UpOiBUIHtcbiAgY29uc3QgcmVmID0gbmV3IFByb3h5UmVmSW1wbChvYmosIGFsbFJlYWN0aXZlKTtcbiAgcmV0dXJuIHJlZi52YWx1ZTtcbn1cblxuZW51bSBNRVRBX1RZUEUge1xuICByZWFjdGl2ZSxcbiAgY29tcHV0ZWQsXG4gIGF1dG9ydW4sXG59O1xuXG4vLyBtYXAgT2JqZWN0LnByb3RvdHlwZSB0byBpdHMgcmVhY3RpdmUga2V5c1xubGV0IG1ldGFzTWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBNYXA8S2V5LCBNRVRBX1RZUEU+PigpO1xuXG5mdW5jdGlvbiBhZGRNZXRhKHByb3RvdHlwZTogT2JqZWN0LCBrZXk6IEtleSwgdHlwZTogTUVUQV9UWVBFKSB7XG4gIGlmICghbWV0YXNNYXAuaGFzKHByb3RvdHlwZSkpIHtcbiAgICBtZXRhc01hcC5zZXQocHJvdG90eXBlLCBuZXcgTWFwKCkpO1xuICB9XG4gIGNvbnN0IG1ldGFzID0gbWV0YXNNYXAuZ2V0KHByb3RvdHlwZSk7XG4gIG1ldGFzIS5zZXQoa2V5LCB0eXBlKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0YUtleXMocHJvdG90eXBlOiBPYmplY3QpIHtcbiAgcmV0dXJuIG1ldGFzTWFwLmdldChwcm90b3R5cGUpO1xufVxuXG5pbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCk6IEZyYWdtZW50O1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWN0aXZlQ29tcG9uZW50KGNvbXBvbmVudDogbmV3ICgpID0+IEZyYWdtZW50LCBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgY29uc3QgaW5zID0gbmV3IGNvbXBvbmVudCgpO1xuICAvLyBAdHMtaWdub3JlXG4gIGlucy5wcm9wcyA9IHByb3BzIHx8IHt9O1xuICBjb25zdCBjb21wID0gY3JlYXRlUmVhY3RpdmUoaW5zKSBhcyBhbnkgYXMgQ29tcG9uZW50O1xuICByZXR1cm4gY29tcDtcbn1cblxuLyoqXG4gKiBAcmVhY3RpdmUgZGVjb3JhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWN0aXZlKHByb3RvdHlwZTogT2JqZWN0LCBrZXk6IEtleSkge1xuICBhZGRNZXRhKHByb3RvdHlwZSwga2V5LCBNRVRBX1RZUEUucmVhY3RpdmUpO1xufVxuXG4vKipcbiAqIEBjb21wdXRlZCBkZWNvcmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5jb21wdXRlZCk7XG59XG5cbi8qKlxuICogQGNvbXB1dGVkIGRlY29yYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvcnVuKHByb3RvdHlwZTogT2JqZWN0LCBrZXk6IEtleSkge1xuICBhZGRNZXRhKHByb3RvdHlwZSwga2V5LCBNRVRBX1RZUEUuYXV0b3J1bik7XG59XG5cbmNsYXNzIFByb3h5UmVmSW1wbDxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PiB7XG4gIHB1YmxpYyBbUmVmU3ltYm9sXSA9IHRydWU7XG4gIHB1YmxpYyBbUHJveHlSZWZTeW1ib2xdID0gdHJ1ZTtcblxuICBwcml2YXRlIF9wcm94eTogVDtcbiAgcHJpdmF0ZSBfbWV0YUtleXM/OiBNYXA8S2V5LCBNRVRBX1RZUEU+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iajogVCwgcHJpdmF0ZSBfYWxsUmVhY3RpdmUgPSBmYWxzZSkge1xuICAgIHRoaXMuX21ldGFLZXlzID0gZ2V0TWV0YUtleXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKF9vYmopKTtcbiAgICB0aGlzLl9wcm94eSA9IHRoaXMuX2luaXRQcm94eShfb2JqKTtcbiAgICB0aGlzLl9pbml0QXV0b3J1bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdEF1dG9ydW4oKSB7XG4gICAgaWYgKCF0aGlzLl9tZXRhS2V5cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tZXRhS2V5cy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IE1FVEFfVFlQRS5hdXRvcnVuKSB7XG4gICAgICAgIGNyZWF0ZUF1dG9ydW4oKCh0aGlzLl9vYmogYXMgYW55KVtrZXldLmJpbmQodGhpcy5fcHJveHkpKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0UHJveHkob2JqOiBUKTogVCB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHByb3h5TWFwLmhhcyhvYmopKSB7XG4gICAgICByZXR1cm4gcHJveHlNYXAuZ2V0KG9iaikgYXMgVDtcbiAgICB9XG5cbiAgICBjb25zdCByZWZNYXAgPSBuZXcgTWFwPEtleSwgUmVmPigpO1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQoXywga2V5KSB7XG4gICAgICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoYXQpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnbGVuZ3RoJykgcmV0dXJuIG9iai5sZW5ndGg7XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ21hcCcpXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbWFwKFxuICAgICAgICAgICAgICBjYjogKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4gYW55LFxuICAgICAgICAgICAgICB0aGlzQXJnPzogYW55XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9iai5tYXAoKF9pdGVtOiBhbnksIF9pbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKChwcm94eSBhcyBhbnkpW19pbmRleF0sIF9pbmRleCk7XG4gICAgICAgICAgICAgIH0sIHRoaXNBcmcpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFsncHVzaCcsICdwb3AnLCAnc2hpZnQnLCAndW5zaGlmdCcsICdzcGxpY2UnXS5pbmRleE9mKFxuICAgICAgICAgICAgICBrZXkgYXMgc3RyaW5nXG4gICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgICBpZiAoa2V5ID09PSAncG9wJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmVmTWFwLmRlbGV0ZShsZW4gLSAxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzcGxpY2UnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRzID0gYXJncy5zbGljZSgyKSBhcyBhbnlbXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydHNMZW4gPSBpbnNlcnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IG9iai5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaSA+PSBpbmRleCAmJiBpIDwgaW5kZXggKyBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKCcnICsgaSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPj0gaW5kZXggKyBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuc2V0KCcnICsgKGkgLSBjb3VudCArIGluc2VydHNMZW4pLCByZWZNYXAuZ2V0KCcnICsgaSkhKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmTWFwLmRlbGV0ZSgnJyArIGkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvYmpba2V5IGFzIGFueV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhhdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gU3ltYm9sLnNwZWNpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWYgPSBnZXRSZWYoa2V5KTtcbiAgICAgICAgaWYgKGlzUHJveHlSZWYocmVmKSkge1xuICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpZGVSZWZNb2RlICYmIGlzUmVmKHJlZikpIHtcbiAgICAgICAgICByZXR1cm4gcmVmLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRSZWYoa2V5KTtcbiAgICAgIH0sXG4gICAgICBzZXQoXywga2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCByZWYgPSBnZXRSZWYoa2V5KTtcbiAgICAgICAgaWYgKGlzUmVmKHJlZikpIHtcbiAgICAgICAgICAvLyBpZiBvcmlnaW4gcmVmIGlzIG5vdCBwcm94eVJlZlxuICAgICAgICAgIC8vIGJ1dCB2YWx1ZSBpcyBhIG9iamVjdFxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIChyZWYgYXMgUHJveHlSZWZJbXBsKVtQcm94eVJlZlN5bWJvbF0gIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJlZk1hcC5zZXQoa2V5LCBuZXcgUHJveHlSZWZJbXBsKHZhbHVlLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKHRoYXQuX29iaiBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRSZWYgPSAoa2V5OiBLZXkpOiBSZWYgPT4ge1xuICAgICAgaWYgKHJlZk1hcC5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gcmVmTWFwLmdldChrZXkpITtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLl9vYmopO1xuICAgICAgaWYgKCF0aGlzLl9tZXRhS2V5cyAmJiAhdGhpcy5fYWxsUmVhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9vYmogYXMgYW55KVtrZXldO1xuICAgICAgfVxuICAgICAgY29uc3QgbWV0YSA9IHRoaXMuX21ldGFLZXlzPy5nZXQoa2V5KTtcbiAgICAgIGxldCByZXN1bHQhOiBSZWY7XG5cbiAgICAgIGlmICh0aGlzLl9hbGxSZWFjdGl2ZSB8fCBtZXRhID09PSBNRVRBX1RZUEUucmVhY3RpdmUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAob2JqIGFzIGFueSlba2V5XTtcbiAgICAgICAgaWYgKGlzUmVmKHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyByZWFjdGl2ZSBvYmplY3RcbiAgICAgICAgICByZXN1bHQgPSBuZXcgUHJveHlSZWZJbXBsKGNyZWF0ZVJlYWN0aXZlKHZhbHVlLCB0aGlzLl9hbGxSZWFjdGl2ZSksIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFJlZkltcGwod3JhcEZuSGlkZVJlZk1vZGUodmFsdWUuYmluZCh0aGlzLl9wcm94eSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZWZcbiAgICAgICAgICByZXN1bHQgPSBuZXcgUmVmSW1wbCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWV0YSA9PT0gTUVUQV9UWVBFLmNvbXB1dGVkKSB7XG4gICAgICAgIGNvbnN0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBrZXkpIS5nZXQhO1xuICAgICAgICByZXN1bHQgPSBuZXcgQ29tcHV0ZWRSZWZJbXBsKHdyYXBGbkhpZGVSZWZNb2RlKGdldHRlci5iaW5kKHRoaXMuX3Byb3h5KSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlZk1hcC5zZXQoa2V5LCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgY29uc3QgciA9ICh0aGlzIGFzIGFueSkuX29ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiByID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiByLmJpbmQodGhpcy5fcHJveHkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgcHJveHlNYXAuc2V0KG9iaiwgcHJveHkpO1xuICAgIHByb3h5T2JqTWFwLnNldChwcm94eSwgb2JqKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5O1xuICB9XG5cbiAgc2V0IHZhbHVlKG5ld1ZhbCkge1xuICAgIE9iamVjdC5rZXlzKG5ld1ZhbCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgKHRoaXMuX3Byb3h5IGFzIGFueSlba2V5XSA9IChuZXdWYWwgYXMgYW55KVtrZXldO1xuICAgIH0pO1xuICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihmbjogKCkgPT4gdm9pZCkge1xuICB3cmFwRm5IaWRlUmVmTW9kZShmbikoKTtcbn1cbiIsImltcG9ydCB7IEZyYWdtZW50LCBGcmFnbWVudExpc3QgfSBmcm9tICcuL2ZyYWdtZW50JztcbmltcG9ydCB7IGNyZWF0ZUF1dG9ydW4sIGNyZWF0ZVJlYWN0aXZlLCBSZWYsIHJ1bkluUmVmTW9kZSwgd3JhcEZuSGlkZVJlZk1vZGUgfSBmcm9tICcuL3JlYWN0aXZlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZTxUIGV4dGVuZHMgKCkgPT4gRnJhZ21lbnQ+KGZ1bmM6IFQpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBmdW5jLl9faXNkaXJlY3RpdmVfXyA9IHRydWU7XG4gIHJldHVybiBmdW5jO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RpdmUodmFsOiBhbnkpIHtcbiAgcmV0dXJuIHZhbD8uX19pc2RpcmVjdGl2ZV9fID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJGlmKFxuICBjb25kOiAoKSA9PiBib29sZWFuLFxuICB5ZXM6ICgpID0+IEZyYWdtZW50LFxuICBubzogKCkgPT4gRnJhZ21lbnRcbikge1xuICByZXR1cm4gZGlyZWN0aXZlKCgpID0+IHtcbiAgICBsZXQgbGFzdFJlc3VsdDogYm9vbGVhbjtcbiAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgbGV0IGxhc3RGcmFnbWVudDogRnJhZ21lbnQ7XG5cbiAgICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IGNvbmQoKTtcbiAgICAgIGlmICghaW5pdGVkKSB7XG4gICAgICAgIGxhc3RSZXN1bHQgPSBuZXdSZXN1bHQ7XG4gICAgICAgIGxhc3RGcmFnbWVudCA9IGxhc3RSZXN1bHQhID8geWVzKCkgOiBubygpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0ZyYWdtZW50ID0gbmV3UmVzdWx0ID8geWVzKCkgOiBubygpO1xuICAgICAgbGFzdEZyYWdtZW50LnJlcGxhY2VXaXRoKG5ld0ZyYWdtZW50KTtcbiAgICAgIGxhc3RGcmFnbWVudCA9IG5ld0ZyYWdtZW50O1xuICAgICAgbGFzdFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0RnJhZ21lbnQhO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVJdGVtPFQ+KHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSB7XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZSh7XG4gICAgdmFsdWUsXG4gICAgaW5kZXgsXG4gIH0sIHRydWUpO1xufVxuXG5leHBvcnQgdHlwZSBSZWFjdGl2ZUl0ZW08VD4gPSB7XG4gIHZhbHVlOiBUO1xuICBpbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uICRtYXA8VD4oXG4gIHJhd0xpc3Q6IFRbXSxcbiAgbWFwRnVuYzogKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4gRnJhZ21lbnQsXG4gIGtleUZ1bmM6IChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IHN0cmluZyB8IG51bWJlclxuKSB7XG4gIGNvbnN0IGxpc3QgPSAocmF3TGlzdCBhcyBhbnkpIGFzIFJlZjtcbiAgY29uc3QgbGlzdERhdGEgPSAobGlzdCBhcyBhbnkpIGFzIFRbXTtcblxuICBsZXQgbGFzdFJlYWN0aXZlSXRlbXMgPSBsaXN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlSXRlbShpdGVtLCBpbmRleCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50TGlzdCA9IG5ldyBGcmFnbWVudExpc3QoKTtcblxuICBjb25zdCBtYXBGdW5jV3JhcCA9IChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IHtcbiAgICBsZXQgZnJhZ21lbnQ6IEZyYWdtZW50O1xuICAgIHJ1bkluUmVmTW9kZSgoKSA9PiB7XG4gICAgICBmcmFnbWVudCA9IG1hcEZ1bmMoaXRlbSk7XG4gICAgICBmcmFnbWVudC5yZWFjdGl2ZUl0ZW0gPSBpdGVtO1xuICAgIH0pXG4gICAgcmV0dXJuIGZyYWdtZW50ITtcbiAgfTtcblxuICBjb25zdCBrZXlGdW5jV3JhcCA9IHdyYXBGbkhpZGVSZWZNb2RlKChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IHtcbiAgICBjb25zdCByID0ga2V5RnVuYyhpdGVtKTtcbiAgICBpZiAodHlwZW9mIHIgIT09ICdzdHJpbmcnICYmIHR5cGVvZiByICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS50cmFjZShcbiAgICAgICAgJ2tleSBvZiAkbWFwIHNob3VsZCByZXR1cm4gc3RyaW5nIG9yIG51bWJlciwgYnV0IGdvdCAnICsgcixcbiAgICAgICAga2V5RnVuYy50b1N0cmluZygpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfSk7XG5cbiAgbGV0IGxhc3RGcmFnbWVudHMgPSBsaXN0RGF0YS5tYXAoKF8sIGluZGV4KSA9PlxuICAgIG1hcEZ1bmNXcmFwKGxhc3RSZWFjdGl2ZUl0ZW1zW2luZGV4XSlcbiAgKTtcbiAgbGV0IGxhc3RLZXlzID0gbGlzdERhdGEubWFwKChfLCBpbmRleCkgPT5cbiAgICBrZXlGdW5jV3JhcChsYXN0UmVhY3RpdmVJdGVtc1tpbmRleF0pXG4gICk7XG5cbiAgbGFzdEZyYWdtZW50cy5mb3JFYWNoKChmcmFnLCBpbmRleCkgPT4ge1xuICAgIGZyYWdtZW50TGlzdC5hcHBlbmRGcmFnbWVudChmcmFnLCBsYXN0S2V5c1tpbmRleF0pO1xuICB9KTtcblxuICBsZXQgaW5pdGVkID0gZmFsc2U7XG5cbiAgY3JlYXRlQXV0b3J1bihub3RyYWNrID0+IHtcbiAgICBpZiAoIWluaXRlZCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdGVkID0gbGlzdC5sZW5ndGg7XG4gICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3QgPSAobGlzdCBhcyB1bmtub3duKSBhcyBhbnlbXTtcblxuICAgIG5vdHJhY2soKCkgPT4ge1xuICAgICAgY29uc3QgbmV3S2V5cyA9IG5ld0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAga2V5RnVuY1dyYXAoY3JlYXRlUmVhY3RpdmVJdGVtKGl0ZW0sIGluZGV4KSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxhc3RLZXlzID0gZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLm1hcChpdGVtID0+IGl0ZW0ua2V5ISk7XG5cbiAgICAgIC8vIGRpZmYgYW5kIHBhdGNoIGZyb20ga2V5c1xuICAgICAgbmV3S2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXlzID0gZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLm1hcChpdGVtID0+IGl0ZW0ua2V5ISk7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxhc3RLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBpbnNlcnRcbiAgICAgICAgICAvLyBjYW4gbm90IGZpbmQgaW4gb2xkIGxpc3QsIG1lYW4gaW5zZXJ0XG4gICAgICAgICAgLy8gaW5zZXJ0IHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICBjb25zdCByZWFjdGl2ZUl0ZW0gPSBjcmVhdGVSZWFjdGl2ZUl0ZW0obmV3TGlzdFtpbmRleF0sIGluZGV4KTtcblxuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gbWFwRnVuY1dyYXAocmVhY3RpdmVJdGVtKTtcblxuICAgICAgICAgIGZyYWdtZW50TGlzdC5pbnNlcnQoaW5kZXgsIGZyYWdtZW50LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAvLyBtb3ZlXG5cbiAgICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgZnJhZ21lbnRMaXN0Lm1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlbW92ZWQgPSBsYXN0S2V5cy5maWx0ZXIoa2V5ID0+IG5ld0tleXMuaW5kZXhPZihrZXkpID09PSAtMSk7XG4gICAgICBmcmFnbWVudExpc3QucmVtb3ZlV2l0aEtleXMocmVtb3ZlZCk7XG5cbiAgICAgIC8vIGFwcGx5IG5ldyByZWFjdGl2ZUluZGV4XG4gICAgICBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMuZm9yRWFjaChcbiAgICAgICAgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjaGlsZCEucmVhY3RpdmVJdGVtIS5pbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnRMaXN0O1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBjcmVhdGVBdXRvcnVuLCBpc1JlZiwgcmVhY3RpdmVDb21wb25lbnQsIFJlZiwgcnVuSW5SZWZNb2RlLCB3cmFwRm5IaWRlUmVmTW9kZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50JztcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoXG4gIGNvbXA6IChwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IEZyYWdtZW50LFxuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG4pIHtcbiAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RpdmVDb21wb25lbnQoY29tcCBhcyBhbnksIHByb3BzKTtcbiAgbGV0IGZyYWdtZW50OiBGcmFnbWVudDtcbiAgcnVuSW5SZWZNb2RlKCgpID0+IHtcbiAgICBmcmFnbWVudCA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICBmcmFnbWVudC5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgfSk7XG4gIHJldHVybiBmcmFnbWVudCE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgcmVuZGVyOiAoKSA9PiBGcmFnbWVudCxcbiAgb25Nb3VudD86ICgpID0+IHZvaWQsXG4gIG9uRGVzdG9yeT86ICgpID0+IHZvaWQsXG59XG5cbmZ1bmN0aW9uIHNldEF0dHIobm9kZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICBjb25zb2xlLmVycm9yKCdzaG91bGQgYmUgY2xhc3NOYW1lLCBidXQgZ290IGNsYXNzJyk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBrZXkgPSAnY2xhc3MnO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSB2YWx1ZS5fX2h0bWw7XG4gICAgaWYgKGlzUmVmKGh0bWwpKSB7XG4gICAgICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBodG1sLnZhbHVlO1xuICAgICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlZicpIHtcbiAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYSAocmVmKSA9PiB2b2lkXG4gICAgdmFsdWUobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBiaW5kQXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBSZWY8YW55Pikge1xuICBsZXQgbGFzdFZhbHVlID0gdmFsdWUudmFsdWU7XG5cbiAgY29uc3QgaXNFdmVudCA9IC9eb25bQS1aXS8udGVzdChrZXkpO1xuICBjb25zdCBldmVudE5hbWUgPSBpc0V2ZW50ID8ga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpIDogJyc7XG4gIGxldCBsYXN0VmFsdWVFdmVudEhhbmRsZXIgPSBpc0V2ZW50ID8gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlKSA6ICgpID0+IHt9O1xuXG4gIHNjaGVkdWxlKCgpID0+IHtcbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QXR0cihub2RlLCBrZXksIGxhc3RWYWx1ZSk7XG4gIH0pO1xuXG4gIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbGFzdFZhbHVlRXZlbnRIYW5kbGVyID0gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0QXR0cihub2RlLCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9KTtcbiAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoKFxuICB0eXBlOiBzdHJpbmcgfCBGdW5jdGlvbixcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gIC4uLmNoaWxkcmVuOiBzdHJpbmdbXVxuKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50KCk7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChwcm9wcykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIC9eb25bQS1aXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICBiaW5kQXR0cih0YWcsIGtleSwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlVmFsID0gY2hpbGQgYXMgUmVmPGFueT47XG4gICAgICAgICAgY29uc3QgdmFsID0gcmVhY3RpdmVWYWwudmFsdWU7XG5cbiAgICAgICAgICAvLyB0ZXh0bm9kZVxuICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycgKyB2YWwpO1xuICAgICAgICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSByZWFjdGl2ZVZhbC52YWx1ZTtcbiAgICAgICAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGV4dE5vZGUubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGlyZWN0aXZlKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGNoaWxkIGFzICgpID0+IEZyYWdtZW50O1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZGlyZWN0aXZlKCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIodGFnLCBmcmFnbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoRnJhZ21lbnQuaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAoY2hpbGQgYXMgRnJhZ21lbnQpLmFwcGVuZFRvQ29udGFpbmVyKHRhZywgZnJhZ21lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gY29tcG9uZW50XG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzUmVmKHR5cGUpKSB7XG4gICAgLy8gcmVhY3RpdmUgY29tcG9uZW50XG4gICAgY29uc3QgY29tcCA9IHR5cGUgYXMgUmVmO1xuICAgIGxldCBmcmFnOiBGcmFnbWVudDtcbiAgICBjcmVhdGVBdXRvcnVuKChub3RyYWNrKSA9PiB7XG4gICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcC52YWx1ZTtcbiAgICAgICAgbm90cmFjaygoKSA9PiB7XG4gICAgICAgICAgZnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXBvbmVudCwge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3RnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXAudmFsdWUsIHtcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICAgICAgICBmcmFnLnJlcGxhY2VXaXRoKG5ld0ZyYWcpO1xuICAgICAgICBmcmFnID0gbmV3RnJhZztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZyE7XG4gIH1cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGZyYWdtZW50OiBGcmFnbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIsIG51bGwpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBKU1gge1xuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XG4gICAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgaW1wb3J0IHsgaCwgcmVhY3RpdmUsIGNvbXB1dGVkLCBhdXRvcnVuLCAkaWYsICRtYXAgfSBmcm9tICdvdmVyZG9tJztcbiAgICBpbXBvcnQgQ29kZUJveCBmcm9tICcvaG9tZS9ydW5uZXIvd29yay9vdmVyZG9tL292ZXJkb20vcGFja2FnZXMvb3ZlcmRvbS1zaXRlL2hlbHBlci9jb2RlLWJveCdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+PGgxIGlkPVwiZ2V0dGluZy1zdGFydGVkXCI+R2V0dGluZyBTdGFydGVkPC9oMT5cbjxoMiBpZD1cImhlbGxvLXdvcmxkXCI+SGVsbG8gd29ybGQ8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgSGVsbG8ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwSGVsbG8lMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JIZWxsbyUyMFdvcmxkJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzdGF0ZVwiPlN0YXRlPC9oMj5cbjxwPldlIGNhbiB1c2UgPGNvZGU+QHJlYWN0aXZlPC9jb2RlPiB0byBtYWtlIGF0dHJpYnV0ZSByZWFjdGl2ZTwvcD5cbjx1bD5cbjxsaT5Vc2UgaW4gPGNvZGU+SlNYPC9jb2RlPjwvbGk+XG48bGk+TXV0YXRlIGl0IHRvIHVwZGF0ZSBpbiBjYWxsYmFja3M8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wdXRlZFwiPkNvbXB1dGVkPC9oMj5cbjx1bD5cbjxsaT48Y29kZT5AY29tcHV0ZWQgZ2V0IHgoKTwvY29kZT4gdG8gY3JlYXRlIGNvbXB1dGVkPC9saT5cbjxsaT5jb21wdXRlZCByZXN1bHQgaXMgc2FtZSB3aXRoIHJlYWN0aXZlIGJ1dCByZWFkb25seTwvbGk+XG48L3VsPlxuPGgzIGlkPVwiZXhhbXBsZVwiPkV4YW1wbGU8L2gzPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ291bnRlckFwcCB7XG4gICAgQHJlYWN0aXZlIGNvdW50ID0gMDtcbiAgICBAY29tcHV0ZWQgZ2V0IGRvdWJsZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudCAqIDI7XG4gICAgfVxuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPHA+IENvdW50ZXI6IHt0aGlzLmNvdW50fSA8L3A+XG4gICAgICAgICAgICA8cD4gRG91YmxlOiB7dGhpcy5kb3VibGVDb3VudH0gPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBDb3VudGVyQXBwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMjAlMjAlMjAlMjAlNDBjb21wdXRlZCUyMGdldCUyMGRvdWJsZUNvdW50KCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjB0aGlzLmNvdW50JTIwKiUyMDIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUyMERvdWJsZSUzQSUyMCU3QnRoaXMuZG91YmxlQ291bnQlN0QlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcG9uZW50XCI+Q29tcG9uZW50PC9oMj5cbjx1bD5cbjxsaT5DbGFzcyB3aXRoIDxjb2RlPnJlbmRlZXI8L2NvZGU+IGlzIGp1c3QgY29tcG9uZW50PC9saT5cbjxsaT48Y29kZT50aGlzLnByb3BzPC9jb2RlPiBpcyBhIG9iamVjdCwgeW91IHdpbGwgbmVlZCB0byBhZGQgPGNvZGU+QHJlYWN0aXZlPC9jb2RlPiBmb3IgaXQgaWYgbmVlZCByZWFjdGl2ZTwvbGk+XG48L3VsPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIERpc3BsYXkge1xuICAgIEByZWFjdGl2ZSBwcm9wcztcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8cD5JIHdpbGwgZGlzcGxheSBjb3VudCBmcm9tIHsnPERpc3BsYXkvPid9OiB7dGhpcy5wcm9wcy5jb3VudH08L3A+O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxEaXNwbGF5IGNvdW50PXt0aGlzLmNvdW50fS8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJjbGFzcyUyMERpc3BsYXklMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMHByb3BzJTNCJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnAlMjZndCUzQkklMjB3aWxsJTIwZGlzcGxheSUyMGNvdW50JTIwZnJvbSUyMCU3QiUyNiUyMzAzOSUzQiUyNmx0JTNCRGlzcGxheSUyRiUyNmd0JTNCJTI2JTIzMDM5JTNCJTdEJTNBJTIwJTdCdGhpcy5wcm9wcy5jb3VudCU3RCUyNmx0JTNCJTJGcCUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTIwJTIwJTIwJTIwaW5jKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmNvdW50JTIwJTJCJTJCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JEaXNwbGF5JTIwY291bnQlM0QlN0J0aGlzLmNvdW50JTdEJTJGJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImxvZ2ljXCI+TG9naWM8L2gyPlxuPGgzIGlkPVwiaWZcIj4kaWY8L2gzPlxuPHA+VXNlIDxjb2RlPiRpZjwvY29kZT4gdG8gZG8gYSBzd2l0Y2ggbG9naWMgaW4gPGNvZGU+SlNYPC9jb2RlPi48L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuXG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICBDb3VudGVyOiB7dGhpcy5jb3VudH1cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPmNvdW50ID49IDMgOiBcbiAgICAgICAgeyRpZihcbiAgICAgICAgICAgIC8vIGNvbmRcbiAgICAgICAgICAgICgpID0+IHRoaXMuY291bnQgPj0gMyxcbiAgICAgICAgICAgIC8vIHllc1xuICAgICAgICAgICAgKCkgPT4gPGRpdj5ZRVMge3RoaXMuY291bnR9PC9kaXY+LFxuICAgICAgICAgICAgLy8gTk9cbiAgICAgICAgICAgICgpID0+IDxkaXY+Tk8ge3RoaXMuY291bnR9PC9kaXY+LFxuICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuXG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBDb3VudGVyQXBwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCdGhpcy5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCY291bnQlMjAlMjZndCUzQiUzRCUyMDMlMjAlM0ElMjAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRpZiglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBjb25kJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMHRoaXMuY291bnQlMjAlMjZndCUzQiUzRCUyMDMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB5ZXMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTI2bHQlM0JkaXYlMjZndCUzQllFUyUyMCU3QnRoaXMuY291bnQlN0QlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwTk8lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTI2bHQlM0JkaXYlMjZndCUzQk5PJTIwJTdCdGhpcy5jb3VudCU3RCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjApJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMyBpZD1cIm1hcFwiPiRtYXA8L2gzPlxuPHA+VXNlIDxjb2RlPiRtYXA8L2NvZGU+IGZvciBhIGxpc3QgbWFwPC9wPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQXBwIHtcbiAgQHJlYWN0aXZlIGxpc3QgPSBbJ3Rlc3QnICsgY291bnQgKytdO1xuXG4gIGFkZFRvZG8oKSB7XG4gICAgICAvLyB1c2UgYXJyYXkucHVzaC9zcGxpY2Uvc2hpZnQvdW5zaGlmdCB0byBtdXRhdGVcbiAgICAgIHRoaXMubGlzdC5wdXNoKCduZXcgdG9kbycgKyBjb3VudCArKyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8dWw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICAgIHskbWFwKFxuICAgICAgICAgIHRoaXMubGlzdCwgIC8vIGFycmF5XG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAgIC8vIGl0ZW0uaW5kZXggbWVhbiBpbmRleFxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxpc3Quc3BsaWNlKGl0ZW0uaW5kZXgsIDEpfT5SRU1PVkU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBhbmQga2VlcCB1bmlxdWUgaW4gbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICApfVxuICAgIDwvdWw+O1xuICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJsZXQlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBBcHAlMjAlN0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGxpc3QlMjAlM0QlMjAlNUIlMjYlMjMwMzklM0J0ZXN0JTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIlNUQlM0IlMEElMEElMjAlMjBhZGRUb2RvKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBhcnJheS5wdXNoJTJGc3BsaWNlJTJGc2hpZnQlMkZ1bnNoaWZ0JTIwdG8lMjBtdXRhdGUlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QucHVzaCglMjYlMjMwMzklM0JuZXclMjB0b2RvJTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIpJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmFkZFRvZG8lN0QlMjZndCUzQkFERCUyMFRPRE8lMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0bWFwKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdCUyQyUyMCUyMCUyRiUyRiUyMGFycmF5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtYXAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLnZhbHVlJTIwbWVhbiUyMGl0ZW0lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLmluZGV4JTIwbWVhbiUyMGluZGV4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QiU3Qml0ZW0uaW5kZXglN0QlNUQlMjAlN0JpdGVtLnZhbHVlJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCKCklMjAlM0QlMjZndCUzQiUyMHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCUyQyUyMDEpJTdEJTI2Z3QlM0JSRU1PVkUlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwa2V5JTIwbWFwJTJDJTIwYWx0ZXJuYXRpdmUlMjB0byUyMCUyNmx0JTNCbGklMjBrZXklMjZndCUzQiUyMGluJTIwUmVhY3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtdXN0JTIwYmUlMjBzdHJpbmclMjBvciUyMG51bWJlciUyQyUyMGFuZCUyMGtlZXAlMjB1bmlxdWUlMjBpbiUyMGxpc3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBpdGVtLnZhbHVlJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGdWwlMjZndCUzQiUzQiUwQSUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJ0b2RvLWV4YW1wbGVcIj5Ub2RvIEV4YW1wbGU8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwcCB7XG4gIEByZWFjdGl2ZSBsaXN0ID0gW3tcbiAgICBpZDogY291bnQrKyxcbiAgICB0ZXh0OiAndG9kbycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfV07XG4gIEByZWFjdGl2ZSBpbnB1dCA9ICcnO1xuXG4gIGFkZFRvZG8oKSB7XG4gICAgICAvLyB1c2UgYXJyYXkucHVzaC9zcGxpY2Uvc2hpZnQvdW5zaGlmdCB0byBtdXRhdGVcbiAgICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgICAgaWQ6IGNvdW50KyssXG4gICAgICAgIHRleHQ6IHRoaXMuaW5wdXQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgfVxuXG4gIGhhbmRsZVN3YXAoaW5kZXgpIHtcbiAgICAvLyB1c2Ugc3BsaWNlIHRvIHN3YXAgaXRlbXNcbiAgICAvLyByZWFjdGl2ZSBhcnJheSBjYW4gbm90IHRyYWNrIG5hdGl2ZSBzd2FwXG4gICAgY29uc3QgdGVtcCA9IFt0aGlzLmxpc3RbaW5kZXhdLCB0aGlzLmxpc3RbaW5kZXggKyAxXV07XG4gICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMiwgdGVtcFsxXSwgdGVtcFswXSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8dWw+XG4gICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuaW5wdXR9IG9uSW5wdXQ9eyhlKSA9PiB0aGlzLmlucHV0ID0gZS50YXJnZXQudmFsdWV9PjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICAgIHskbWFwKFxuICAgICAgICAgIHRoaXMubGlzdCwgIC8vIGFycmF5XG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAgIC8vIGl0ZW0uaW5kZXggbWVhbiBpbmRleFxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlLnRleHR9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgeyRpZihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5pbmRleCA8IHRoaXMubGlzdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3dhcChpdGVtLmluZGV4KX0+U1dBUCBORVhUPC9idXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8c3Bhbj5bVEhFIExBU1RdPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBhbmQga2VlcCB1bmlxdWUgaW4gbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS5pZDtcbiAgICAgICAgICB9XG4gICAgICApfVxuICAgIDwvdWw+O1xuICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJsZXQlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBBcHAlMjAlN0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGxpc3QlMjAlM0QlMjAlNUIlN0IlMEElMjAlMjAlMjAlMjBpZCUzQSUyMGNvdW50JTJCJTJCJTJDJTBBJTIwJTIwJTIwJTIwdGV4dCUzQSUyMCUyNiUyMzAzOSUzQnRvZG8lMjYlMjMwMzklM0IlMkMlMEElMjAlMjAlMjAlMjBjb21wbGV0ZWQlM0ElMjBmYWxzZSUyQyUwQSUyMCUyMCU3RCU1RCUzQiUwQSUyMCUyMCU0MHJlYWN0aXZlJTIwaW5wdXQlMjAlM0QlMjAlMjYlMjMwMzklM0IlMjYlMjMwMzklM0IlM0IlMEElMEElMjAlMjBhZGRUb2RvKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBhcnJheS5wdXNoJTJGc3BsaWNlJTJGc2hpZnQlMkZ1bnNoaWZ0JTIwdG8lMjBtdXRhdGUlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QucHVzaCglN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZCUzQSUyMGNvdW50JTJCJTJCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGV4dCUzQSUyMHRoaXMuaW5wdXQlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb21wbGV0ZWQlM0ElMjBmYWxzZSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCU3RCklM0IlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmlucHV0JTIwJTNEJTIwJTI2JTIzMDM5JTNCJTI2JTIzMDM5JTNCJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwaGFuZGxlU3dhcChpbmRleCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBzcGxpY2UlMjB0byUyMHN3YXAlMjBpdGVtcyUwQSUyMCUyMCUyMCUyMCUyRiUyRiUyMHJlYWN0aXZlJTIwYXJyYXklMjBjYW4lMjBub3QlMjB0cmFjayUyMG5hdGl2ZSUyMHN3YXAlMEElMjAlMjAlMjAlMjBjb25zdCUyMHRlbXAlMjAlM0QlMjAlNUJ0aGlzLmxpc3QlNUJpbmRleCU1RCUyQyUyMHRoaXMubGlzdCU1QmluZGV4JTIwJTJCJTIwMSU1RCU1RCUzQiUwQSUyMCUyMCUyMCUyMHRoaXMubGlzdC5zcGxpY2UoaW5kZXglMkMlMjAyJTJDJTIwdGVtcCU1QjElNUQlMkMlMjB0ZW1wJTVCMCU1RCklM0IlMEElMjAlMjAlN0QlMEElMEElMjAlMjByZW5kZXIlMjAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCdWwlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCaW5wdXQlMjB2YWx1ZSUzRCU3QnRoaXMuaW5wdXQlN0QlMjBvbklucHV0JTNEJTdCKGUpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmlucHV0JTIwJTNEJTIwZS50YXJnZXQudmFsdWUlN0QlMjZndCUzQiUyNmx0JTNCJTJGaW5wdXQlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuYWRkVG9kbyU3RCUyNmd0JTNCQUREJTIwVE9ETyUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRtYXAoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5saXN0JTJDJTIwJTIwJTJGJTJGJTIwYXJyYXklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG1hcCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0udmFsdWUlMjBtZWFuJTIwaXRlbSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0uaW5kZXglMjBtZWFuJTIwaW5kZXglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVCJTdCaXRlbS5pbmRleCU3RCU1RCUyMCU3Qml0ZW0udmFsdWUudGV4dCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QigpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmxpc3Quc3BsaWNlKGl0ZW0uaW5kZXglMkMlMjAxKSU3RCUyNmd0JTNCUkVNT1ZFJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyNGlmKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjBpdGVtLmluZGV4JTIwJTI2bHQlM0IlMjB0aGlzLmxpc3QubGVuZ3RoJTIwLSUyMDElMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCKCklMjAlM0QlMjZndCUzQiUyMHRoaXMuaGFuZGxlU3dhcChpdGVtLmluZGV4KSU3RCUyNmd0JTNCU1dBUCUyME5FWFQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCc3BhbiUyNmd0JTNCJTVCVEhFJTIwTEFTVCU1RCUyNmx0JTNCJTJGc3BhbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0QlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGtleSUyMG1hcCUyQyUyMGFsdGVybmF0aXZlJTIwdG8lMjAlMjZsdCUzQmxpJTIwa2V5JTI2Z3QlM0IlMjBpbiUyMFJlYWN0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwbXVzdCUyMGJlJTIwc3RyaW5nJTIwb3IlMjBudW1iZXIlMkMlMjBhbmQlMjBrZWVwJTIwdW5pcXVlJTIwaW4lMjBsaXN0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwaXRlbS52YWx1ZS5pZCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnVsJTI2Z3QlM0IlM0IlMEElMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwicGxheWdyb3VuZFwiPlBsYXlHcm91bmQ8L2gyPlxuPHA+UGxheSBvbmxpbmUgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL25hdWdodHktaGlsbC11Z2tnaj9maWxlPS9zcmMvaW5kZXgudHN4XCI+Q29kZVNhbmRib3g8L2E+PC9wPlxuPC9kaXY+O1xuICAgICAgICB9XG4gICAgfSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9