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
/* harmony import */ var resee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resee */ "../resee/dist/resee.esm.js");
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
      return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "codebox"
      }, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("pre", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", {
        ref: this.handleCodeRef,
        dangerouslySetInnerHTML: {
          __html: this.props.code
        }
      }))), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "demo"
      }, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(Component, null)));
    }
  }]);

  return Codebox;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "props", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
/* harmony import */ var resee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resee */ "../resee/dist/resee.esm.js");
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
      return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
        className: "logo",
        src: "data:image/png;base64,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"
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
      return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("header", {
        id: "header"
      }, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(Logo, null));
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
/* harmony import */ var resee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resee */ "../resee/dist/resee.esm.js");
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
      return (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        className: "page-container"
      }, (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)(_components_header__WEBPACK_IMPORTED_MODULE_1__.default, null), (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        className: "sidebar"
      }), (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        className: "content"
      }, (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)(_doc_get_started_md__WEBPACK_IMPORTED_MODULE_3__.default, null))));
    }
  }]);

  return App;
}();

(0,resee__WEBPACK_IMPORTED_MODULE_2__.render)((0,resee__WEBPACK_IMPORTED_MODULE_2__.h)(App, null), document.getElementById('app'));

/***/ }),

/***/ "../resee/dist/resee.esm.js":
/*!**********************************!*\
  !*** ../resee/dist/resee.esm.js ***!
  \**********************************/
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
var timer = null;

function schedule(task) {
  tasks.add(task);

  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      var taskItems = Array.from(tasks.values());
      tasks.clear();
      taskItems.forEach(function (taskItem) {
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

  _proto.appendToContainer = function appendToContainer(container) {
    this.container = container;
    this.createEmpty();
    container.appendChild(this.fragment);
  };

  _proto.replaceWith = function replaceWith(fragment) {
    fragment.container = this.container;
    var range = this.createRange();
    range.deleteContents();
    range.insertNode(fragment.fragment);
    range.detach();
  };

  _proto.createEmpty = function createEmpty() {
    if (this.childNodes.length === 0) {
      this.appendChild(document.createComment('empty'));
    }
  };

  _proto.insertBeforeToContainer = function insertBeforeToContainer(container, beforeNode) {
    var _this = this;

    if (this.container) {
      // has a container already
      // remove self from current container first
      schedule(function () {
        _this.fragment = document.createDocumentFragment();

        _this.childNodes.forEach(function (node) {
          _this.container.removeChild(node);

          _this.fragment.appendChild(node);
        });
      });
    }

    this.container = container;
    this.createEmpty();
    schedule(function () {
      container.insertBefore(_this.fragment, beforeNode);
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
    var _this2;

    _this2 = _Fragment.apply(this, arguments) || this;
    _this2.childFragments = [];
    return _this2;
  }

  var _proto2 = FragmentList.prototype;

  _proto2.appendFragment = function appendFragment(child, key) {
    child.appendToContainer(this.fragment);
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
    var _this3 = this;

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

      _this3.childFragments.splice(index, 1);
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
    hideRefMode = true;
    var r = fn.apply(void 0, arguments);
    hideRefMode = false;
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
    this._recompute();

    depsManager.trigger(this);
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
            if (key === 'pop') {
              var len = obj.length;
              refMap["delete"](len - 1);
            } else if (key === 'splice') {
              var index = arguments.length <= 0 ? undefined : arguments[0];
              var count = arguments.length <= 1 ? undefined : arguments[1];
              var _len = obj.length;

              for (var i = 0; i < _len; i++) {
                if (i >= index && i < index + count) {
                  refMap["delete"]('' + i);
                } else if (i >= index + count) {
                  refMap.set('' + (i - count), refMap.get('' + i));
                  refMap["delete"]('' + i);
                }
              }
            }

            obj[key].apply(obj, arguments);
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
      schedule(function () {
        lastFragment.replaceWith(newFragment);
        lastFragment = newFragment;
      });
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
  var mapFuncWrap = wrapFnHideRefMode(function (item) {
    var fragment = mapFunc(item);
    fragment.reactiveItem = item;
    return fragment;
  });
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

          _fragment.appendToContainer(tag);
        } else if (Fragment.isFragment(child)) {
          child.appendToContainer(tag);
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
      }
    });
    return frag;
  }

  return fragment;
}

function render(fragment, container) {
  fragment.appendToContainer(container);
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
/* harmony import */ var resee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resee */ "../resee/dist/resee.esm.js");
/* harmony import */ var _home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/code-box */ "./helper/code-box/index.tsx");
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
      return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
        id: "getting-started"
      }, "Getting Started"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
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
                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Hello World");
              }
            }]);

            return Hello;
          }();
        })(mod);

        var component = mod.exports;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20Hello%20%7B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3BHello%20World%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "state"
      }, "State"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "We can use ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@reactive"), " to make attribute reactive"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Use in ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Mutate it to update in callbacks")), function () {
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
                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", this.count, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")));
              }
            }]);

            return CounterApp;
          }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class);
        })(mod);

        var component = mod.exports;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20Counter%3A%20%7Bthis.count%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "computed"
      }, "Computed"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@computed get x()"), " to create computed"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "computed result is same with reactive but readonly")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
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
                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, " Counter: ", this.count, " "), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, " Double: ", this.doubleCount, " "), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
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
          }(), _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "count", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          }), _applyDecoratedDescriptor(_class3.prototype, "doubleCount", [resee__WEBPACK_IMPORTED_MODULE_0__.computed], Object.getOwnPropertyDescriptor(_class3.prototype, "doubleCount"), _class3.prototype)), _class3);
        })(mod);

        var component = mod.exports;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20%40computed%20get%20doubleCount()%20%7B%0A%20%20%20%20%20%20%20%20return%20this.count%20*%202%3B%0A%20%20%20%20%7D%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Counter%3A%20%7Bthis.count%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Double%3A%20%7Bthis.doubleCount%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "component"
      }, "Component"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Class with ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "rendeer"), " is just component"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "this.props"), " is a object, you will need to add ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "@reactive"), " for it if need reactive")), function () {
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
                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "I will display count from ", '<Display/>', ": ", this.props.count);
              }
            }]);

            return Display;
          }(), _temp3), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "props", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
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
                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(Display, {
                  count: this.count
                }), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")));
              }
            }]);

            return CounterApp;
          }(), _temp4), (_descriptor4 = _applyDecoratedDescriptor(_class7.prototype, "count", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class7);
        })(mod);

        var component = mod.exports;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("class%20Display%20%7B%0A%20%20%20%20%40reactive%20props%3B%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20%26lt%3Bp%26gt%3BI%20will%20display%20count%20from%20%7B%26%23039%3B%26lt%3BDisplay%2F%26gt%3B%26%23039%3B%7D%3A%20%7Bthis.props.count%7D%26lt%3B%2Fp%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aexport%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3BDisplay%20count%3D%7Bthis.count%7D%2F%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%7D")
        });
      }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "logic"
      }, "Logic"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        id: "if"
      }, "$if"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Use ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "$if"), " to do a switch logic in ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX"), "."), function () {
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

                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", this.count, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.inc
                }, "ADD")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "count >= 3 :", (0,resee__WEBPACK_IMPORTED_MODULE_0__.$if)( // cond
                function () {
                  return _this.count >= 3;
                }, // yes
                function () {
                  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "YES ", _this.count);
                }, // NO
                function () {
                  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "NO ", _this.count);
                })));
              }
            }]);

            return CounterApp;
          }(), _temp5), (_descriptor5 = _applyDecoratedDescriptor(_class9.prototype, "count", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return 0;
            }
          })), _class9);
        })(mod);

        var component = mod.exports;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("export%20default%20class%20CounterApp%20%7B%0A%20%20%20%20%40reactive%20count%20%3D%200%3B%0A%0A%20%20%20%20inc()%20%7B%0A%20%20%20%20%20%20%20%20this.count%20%2B%2B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20Counter%3A%20%7Bthis.count%7D%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.inc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3Bcount%20%26gt%3B%3D%203%20%3A%20%0A%20%20%20%20%20%20%20%20%7B%24if(%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20cond%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20this.count%20%26gt%3B%3D%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20yes%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BYES%20%7Bthis.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20NO%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BNO%20%7Bthis.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%7D%0A%0A%7D")
        });
      }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        id: "map"
      }, "$map"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Use ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "$map"), " for a list map"), function () {
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

                return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
                  onClick: this.addTodo
                }, "ADD TODO"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.$map)(this.list, // array
                function (item) {
                  // map
                  // item.value mean item
                  // item.index mean index
                  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "[", item.index, "] ", item.value, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
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
          }(), _temp6), (_descriptor6 = _applyDecoratedDescriptor(_class11.prototype, "list", [resee__WEBPACK_IMPORTED_MODULE_0__.reactive], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function initializer() {
              return ['test' + count++];
            }
          })), _class11);
        })(mod);

        var component = mod.exports;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
          component: component,
          code: decodeURIComponent("let%20count%20%3D%200%3B%0A%0Aexport%20default%20class%20App%20%7B%0A%20%20%40reactive%20list%20%3D%20%5B%26%23039%3Btest%26%23039%3B%20%2B%20count%20%2B%2B%5D%3B%0A%0A%20%20addTodo()%20%7B%0A%20%20%20%20%20%20%2F%2F%20use%20array.push%2Fsplice%2Fshift%2Funshift%20to%20mutate%0A%20%20%20%20%20%20this.list.push(%26%23039%3Bnew%20todo%26%23039%3B%20%2B%20count%20%2B%2B)%3B%0A%20%20%7D%0A%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20%26lt%3Bul%26gt%3B%0A%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.addTodo%7D%26gt%3BADD%20TODO%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%7B%24map(%0A%20%20%20%20%20%20%20%20%20%20this.list%2C%20%20%2F%2F%20array%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20map%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.value%20mean%20item%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.index%20mean%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7Bitem.index%7D%5D%20%7Bitem.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20this.list.splice(item.index%2C%201)%7D%26gt%3BREMOVE%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20key%20map%2C%20alternative%20to%20%26lt%3Bli%20key%26gt%3B%20in%20React%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20must%20be%20string%20or%20number%2C%20and%20keep%20unique%20in%20list%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20item.value%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%26lt%3B%2Ful%26gt%3B%3B%0A%20%20%7D%0A%7D")
        });
      }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        id: "playground"
      }, "PlayGround"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Play online with ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vaGVscGVyL2NvZGUtYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9iYXRjaGVyLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3JlYWN0aXZlLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi9zcmMvZG9jL2dldC1zdGFydGVkLm1kIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uL3NyYy9pbmRleC5sZXNzPzk2YzUiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiaHRtbERlY29kZSIsImlucHV0IiwiZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVmFsdWUiLCJDb2RlYm94IiwiZG9tIiwic2V0VGltZW91dCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsIkNvbXBvbmVudCIsInByb3BzIiwiY29tcG9uZW50IiwiaGFuZGxlQ29kZVJlZiIsIl9faHRtbCIsImNvZGUiLCJyZWFjdGl2ZSIsIkxvZ28iLCJIZWFkZXIiLCJBcHAiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tzIiwidGltZXIiLCJzY2hlZHVsZSIsInRhc2siLCJ0YXNrSXRlbXMiLCJBcnJheSIsInRhc2tJdGVtIiwiaW5zZXJ0IiwiYXJyYXkiLCJpbmRleCIsIml0ZW0iLCJGcmFnbWVudCIsImNvbnN0cnVjdG9yIiwib2JqIiwiYXBwZW5kQ2hpbGQiLCJub2RlIiwiYXBwZW5kVG9Db250YWluZXIiLCJjb250YWluZXIiLCJyZXBsYWNlV2l0aCIsImZyYWdtZW50IiwicmFuZ2UiLCJjcmVhdGVFbXB0eSIsImluc2VydEJlZm9yZVRvQ29udGFpbmVyIiwiY3JlYXRlUmFuZ2UiLCJwYXJlbnQiLCJzdGFydFBvcyIsImdldEZpcnN0Tm9kZSIsIkZyYWdtZW50TGlzdCIsImFwcGVuZEZyYWdtZW50IiwiY2hpbGQiLCJyZW1vdmVXaXRoS2V5cyIsImtleXMiLCJtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsInRhcmdldCIsImRlbGV0ZUluZGV4IiwidG9JbmRleCIsIlJlZlN5bWJvbCIsIlN5bWJvbCIsImlzUmVmIiwiciIsImhpZGVSZWZNb2RlIiwid3JhcEZuSGlkZVJlZk1vZGUiLCJmbiIsInJ1bkluUmVmTW9kZSIsImNiIiwidGVtcCIsInByb3h5T2JqTWFwIiwiRGVwc01hbmFnZXIiLCJfYWRkRGVwIiwiX2dldERlcHMiLCJiZWdpbkNvbGxlY3QiLCJlbmRDb2xsZWN0IiwidHJhY2siLCJ0cmlnZ2VyIiwiZGVwcyIsImRlcCIsImRlcHNNYW5hZ2VyIiwiQXV0b3J1blJlZkltcGwiLCJfcnVuIiwiY3JlYXRlQXV0b3J1biIsIlJlZkltcGwiLCJ2YWwiLCJDb21wdXRlZFJlZkltcGwiLCJfcmVjb21wdXRlIiwiUHJveHlSZWZTeW1ib2wiLCJwcm94eU1hcCIsImNyZWF0ZVJlYWN0aXZlIiwiYWxsUmVhY3RpdmUiLCJyZWYiLCJNRVRBX1RZUEUiLCJtZXRhc01hcCIsIm1ldGFzIiwicmVhY3RpdmVDb21wb25lbnQiLCJpbnMiLCJjb21wIiwicHJvdG90eXBlIiwia2V5IiwiYWRkTWV0YSIsImNvbXB1dGVkIiwiYXV0b3J1biIsIlByb3h5UmVmSW1wbCIsIl9hbGxSZWFjdGl2ZSIsImdldE1ldGFLZXlzIiwiT2JqZWN0IiwiX2luaXRBdXRvcnVuIiwidmFsdWUiLCJfaW5pdFByb3h5IiwidGhhdCIsInJlZk1hcCIsInByb3h5IiwiZ2V0IiwibGVuIiwiY291bnQiLCJpIiwiZ2V0UmVmIiwiaXNQcm94eVJlZiIsInNldCIsIm1ldGEiLCJyZXN1bHQiLCJnZXR0ZXIiLCJuZXdWYWwiLCJkaXJlY3RpdmUiLCJmdW5jIiwiaXNEaXJlY3RpdmUiLCIkaWYiLCJjb25kIiwieWVzIiwibm8iLCJpbml0ZWQiLCJuZXdSZXN1bHQiLCJsYXN0UmVzdWx0IiwibGFzdEZyYWdtZW50IiwibmV3RnJhZ21lbnQiLCIkbWFwIiwicmF3TGlzdCIsIm1hcEZ1bmMiLCJrZXlGdW5jIiwibGlzdCIsImxpc3REYXRhIiwibGFzdFJlYWN0aXZlSXRlbXMiLCJjcmVhdGVSZWFjdGl2ZUl0ZW0iLCJmcmFnbWVudExpc3QiLCJtYXBGdW5jV3JhcCIsImtleUZ1bmNXcmFwIiwiY29uc29sZSIsImxhc3RGcmFnbWVudHMiLCJsYXN0S2V5cyIsIm5ld0xpc3QiLCJub3RyYWNrIiwibmV3S2V5cyIsImxhc3RJbmRleCIsInJlYWN0aXZlSXRlbSIsImZyb21JbmRleCIsInJlbW92ZWQiLCJodG1sIiwibmV3VmFsdWUiLCJsYXN0VmFsdWUiLCJpc0V2ZW50IiwiZXZlbnROYW1lIiwibGFzdFZhbHVlRXZlbnRIYW5kbGVyIiwic2V0QXR0ciIsImgiLCJ0eXBlIiwiY2hpbGRyZW4iLCJ0YWciLCJiaW5kQXR0ciIsInJlYWN0aXZlVmFsIiwidGV4dE5vZGUiLCJidWlsZENvbXBvbmVudCIsImZyYWciLCJEZW1vIiwibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImluYyIsImRvdWJsZUNvdW50IiwiRGlzcGxheSIsInB1c2giLCJhZGRUb2RvIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUN0QixNQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFSO0FBQ0FGLEdBQUMsQ0FBQ0csU0FBRixHQUFjSixLQUFkLENBRnNCLENBR3RCOztBQUNBLFNBQU9DLENBQUMsQ0FBQ0ksVUFBRixDQUFhQyxNQUFiLEtBQXdCLENBQXhCLEdBQTRCLEVBQTVCLEdBQWlDTCxDQUFDLENBQUNJLFVBQUYsQ0FBYSxDQUFiLEVBQWdCRSxTQUF4RDtBQUNEOztJQUVrQkMsTzs7Ozs7Ozs7O2tDQU1IQyxHLEVBQWtCO0FBQzVCQyxnQkFBVSxDQUFDLFlBQU07QUFDYjtBQUNBRCxXQUFHLENBQUNMLFNBQUosR0FBZ0JPLEtBQUssQ0FBQ0MsU0FBTixDQUFnQmIsVUFBVSxDQUFDVSxHQUFHLENBQUNMLFNBQUwsQ0FBMUIsRUFBMkNPLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsVUFBM0QsQ0FBaEI7QUFDSCxPQUhTLENBQVY7QUFJSDs7OzZCQUVRO0FBQ0wsVUFBTUMsU0FBUyxHQUFHLEtB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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCBoLCBhdXRvcnVuIH0gZnJvbSBcInJlc2VlXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuXG5mdW5jdGlvbiBodG1sRGVjb2RlKGlucHV0KXtcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZS5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICAvLyBoYW5kbGUgY2FzZSBvZiBlbXB0eSBpbnB1dFxuICAgIHJldHVybiBlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWJveCB7XG4gICAgQHJlYWN0aXZlIHByb3BzOiB7XG4gICAgICAgIGNvZGU6IHN0cmluZyxcbiAgICAgICAgY29tcG9uZW50OiBGdW5jdGlvbixcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlQ29kZVJlZihkb206IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodChodG1sRGVjb2RlKGRvbS5pbm5lckhUTUwpLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2RlYm94XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwcmU+PGNvZGUgcmVmPXt0aGlzLmhhbmRsZUNvZGVSZWZ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLmNvZGV9fT48L2NvZGU+PC9wcmU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vXCI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgaCxcbn0gZnJvbSAncmVzZWUnO1xuXG5jbGFzcyBMb2dvIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCIgXG4gICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWJBQUFBQnNDQU1BQUFBOEd4ZjRBQUFBQVhOU1IwSUIyY2tzZndBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBY0pRVEZSRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTg0UUc0Z0FBQUpaMFVrNVRBT24vTVdCdG9DWHlPbXA0QWFvdUo1K2FCM1pQQnBrb1RVa1JQQXJOaVJobkczMVFRUTlMS25SY2lGcDNFeEFVakFrSWxiSUVBdEdBZnRVME1tSEtBM3RqV0JiZGEyYXBSdGxJUFMrZGwxM2pVaGNlRWxWOHhKR2x1ckNLd25CWFVaT2NobDVVTEIxVHAwTUZnNGR5RldVTnVMME92eGxBT0VUa3JxemxHdXUzYjdZTVRubVdOU1JvZWg4dHg3U09jWUlMajJRekEvcHB4UUFBQnRwSlJFRlVlSnp0bmZ0M0ZEVVV4OU5JY1NtdnBWcHBwZGpTV29WQ3RSYmFTc1d0Z0FKRnhmcWlLaUxpQzBXa0tGcXRMM3lCS09EYi85ZTU0WGpPN0RUNVpuWklPTGU5K2Y2V3ZaT2I3UDNNZG1lVG1XK1ZTa3BLU2twS1NrcEtTbXBKYlJycGpvcFpWOEdzVU8yVkp3c0ZzcTZ1bmhYVTU4NG9jMVdxQnJ1dWdYM2Q2cWcrMjdXVkp3dTF6cDExZmZXc29ENGJxbWR0eXJPeFh0L1VXYm9HcFlIZFZhL2ZuV3V5QnRaMVQ3MitPWmMxRUxEdWVqMC85MURBZXJJWDdzMjF0L1FnOVpZRnRsWHIrM0xOUHBTMHZ3TkZ0NEZSMEdTN0J3WkI5UDVjbHFHc0JBL2syZytpNld6ZmdhTDUrZ3hydlRYWDdFTDlkdTVDVVFnc2tBckFXS3NJTEpBS3dFSXBBVXZBU0FsWUFoWk5DWmhLd0ZRQ0ZrOGlnSTA4aE9NUmdZMDhIRGloQkdEWmV4eDlCQjBRRGRqWWJxMkh3cWFVQUd4YjFtdlBPRGdnRnJDSjllSC9oRXNBcGlhemJvK0NlQ3hnZTdOeHB3TG5GQUhNTEw4LzVvNUhBcmFQaG4wOGNGSVJ3TVpvM2JVeDdZekhBVFpOSCt3YS9QS3NJQkhBMUJOMHJ1OTNodU1BTzBDRG91WDdTcElCN0NEVnJ1YnNHUVZZMTVNMGFPaXJlaUhBMUNZcTNsT3VhQlJnaDJqSXc4SFRDZ0YyaEtvMzQ5cTRqUUpzaW9ZOEdqeXRFR0JqWmpQMGFVYzBCckJuYU1BMjlPdXZtb1FBdTdtVC9xd2pHQVBZTUExNExIUldPY0NlTXllOEl4Z0QyQ3dOK0h6b3JIS0F2V0QrSnI1b0QwWUExbWZHZXlsd1ZpVUhHRUhSK21WbkxEUXdtcW1lRFp5VUpBYVkrUklidGNjaUFEdE93ODBGVGtvU0Erd1ZxdUNyOWxnRVlIVXczQzFKRExDMVZNSFg3TEVJd0U3UWNLOEhUa29TQTh5czJFL2FZeEdBbmFUaDNnaWNsQ1FHMkZGd1hSOEJtRm5uT0JVNEtVa01zQ08zRjlnTURmZG00S1FrTWNETUwrY1pleXdDc0RrYTdsRGdwQ1F4d014RngwbDdMTlpGeDk3QVNVbGlnSjJtQ3A2d3h5SUFleXZTVXFJY1lPYVVQMjJQUlFEMk5qZy9ia2xpZ0ptbHFYZWNzZERBM3FYaFlwUkFDckJ4c3hqN25qMFlBZGdaTTU3bmp1TXFrZ0pzalNtZ1l6OHgydmJLKzZHenlnRTJRUFg3d0JHTUFjd3NKdFpEWjVVRHJFSDE2M0VFWXdBN1N3UFcwaTBDRllGdE51WDcwQkdOQVd6QzNPVlcxWG5DTFNIQXpsSDFQbkpGbzl3MWRaNkdIQTZlVmdhd2NlTkNNKzhLUndFMmJ6N1VwYTBueWtvR3NFRXEzbkZuT002dDJ1WWpkaUYwVmhuQTZKS2o5ckV6SEFkWUY2M1l6MHdFemlvQ21MbGlPK0NPUjNyYzZDeTZNcTBxRWNBKzBmZ3U5MWdQOU5FSzhNWEFPU1VBby9jNGhSNDFqZ1dzbHhZd0Q0Yk51YnlCbGZOTC9GVHJ5VE1vYlFFWTlrdHNaUWwrL2pPdEYxcWJyRTlGWU5ndkVmazNOcWtBek9PWFdEYnJFbUFsN2ZjKzd4bURhUXZBc1AyZTQ4NHJoNzVZYkhXeUhoV0JZZnU5MHM4VEZvQjU3UGVBZjJPekxtUUg5K1hhZ2Z3U3Y5VDZxMXd6SkxEZ2s2V2ZkLzI1ZGlCZ1gydjlUYTRaQ2xoN2R2QzN1WFlndjhSTFduK1hhMEsveEo0TlpiTVdGV2F5OUpEQTk3azI5RXVFL28xTitrSHJTN2ttOUV0czhtL0VTdFpGeS95aW80UitMSEhxSm1COGdBM28yay9lZ3hJd05zQjZzdzV0WHJlbkJJd05zSEc2Tkx2c095b0JZd1BNYklSNTl6Z1NNRDdBRm5UaGQ0dE5ySUI1ekIxWE9qQjFKZXN5NjdtMWdoTXduN25qaWdkbVZzVWN6emIvTDA3QWZPYU9LeDZZT3B6MW1jUnJLWnlBK2N3ZFZ6NnduK2tqdGdnUFlRWE1ZKzY0OG9HcGk5cTNqY2dLbU1mY1VRQ3dSWHpLS21iQVBPYU9Bb0N0bzI4RjZJUEhDeGcyZHhRQVRKMmlDbHdGQi9BQ2hzMGRKUUFicHlkSnJvQURtQUdENW80U2dLbGZxQUlMN2pnellORGNVUVN3WHJyd091ZU9Nd01HelIxRkFGTy8wdGU0ZTVlRkd6Qms3aWdEMkFoVjRMd3p6QTBZTW5lVUFVeU4waW5iNllweUE0Yk1IWVVBdTBZVldPV0tzZ01HekIyRkFET1BITSs0MW52WUFRUG1qbEtBWGFjU3VHN0hZUWNNbUR0S0FhYjJaRjF2T0dMc2dBRnpSekhBdG9BZm8reUFBWE5ITWNEVWphenZiL1lRTzJEQTNGRU9zRzRxd25WcmlCMHdZTzRvQjlnMFBYSzgyaHBpQnd5WU84b0Jkdk9iL0pvdHdnNFlNSGNVQkt5VEhvSDgzUlpoQnd5WU93b0NwdjZnTW94WUF1eUFBWE5IU2NDR2FKZkZacS9DRFJneWQ1UUVUUDFKdXl4L0xYMmRHekJrN2lnS21MblJ2bVBwNjl5QURkQThIZWFPb29DcDNWbi8yYVUzUzNBRGhzd2RaUUc3YXIvc1lBWU1tanZLQWtidTVMTkxOMW1ZQVlQbWpzS0E5YmIvYmJGdDRBVU1tenNLQTJZWEwyRFkzREVCVTl5QVlYUEhCRXd4QStZeGQwekFGRE5nSG5QSEJFenhBdVl6ZDB6QVZJdCtpWkZVMXR5eE5iL0VVa09TV3ZOTFJHcWE3ZTBCaHUzM0lxbXN1V05yZm9ubGhsU3QraVVpTmMxV0FqQ1BsaGV3ZlkzR1hIRHJmcVdPTlJyLzVKclFMN0cvQXdTMzcwREJRWlMzN05zYW0yczAvczIxb1Y4aW5FL1RrUHNiamZ6L0U0UitpVHQzb1dobENrbEpTU1gwSHpJZEpqTVZuOXZSQUFBQUFFbEZUa1N1UW1DQ1wiXG4gICAgICAgID5cbiAgICAgICAgPC9pbWc+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICB9O1xufVxuIiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHJlbmRlciwgIGgsIHJlYWN0aXZlIH0gZnJvbSAncmVzZWUnO1xuXG5pbXBvcnQgRG9jR2V0U3RhcnRlZCBmcm9tICcuL2RvYy9nZXQtc3RhcnRlZC5tZCc7XG5cbmNsYXNzIEFwcCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvY0dldFN0YXJ0ZWQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiY29uc3QgdGFza3M6IFNldDxGdW5jdGlvbj4gPSBuZXcgU2V0KCk7XG5sZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZSh0YXNrOiBGdW5jdGlvbikge1xuICB0YXNrcy5hZGQodGFzayk7XG4gIGlmICghdGltZXIpIHtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgY29uc3QgdGFza0l0ZW1zID0gQXJyYXkuZnJvbSh0YXNrcy52YWx1ZXMoKSk7XG4gICAgICB0YXNrcy5jbGVhcigpO1xuICAgICAgdGFza0l0ZW1zLmZvckVhY2godGFza0l0ZW0gPT4ge1xuICAgICAgICB0YXNrSXRlbSgpO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpbnNlcnQ8VD4oYXJyYXk6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyLCBpdGVtOiBUKSB7XG4gIGFycmF5LnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5nZUZyb21Ob2Rlcyhub2RlczogTm9kZVtdKSB7XG4gIGNvbnN0IHBhcmVudCA9IG5vZGVzWzBdLnBhcmVudE5vZGU7XG4gIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudD8uY2hpbGROb2Rlcywgbm9kZXNbMF0pO1xuICByYW5nZS5zZXRTdGFydChwYXJlbnQhLCBzdGFydFBvcyk7XG4gIHJhbmdlLnNldEVuZChwYXJlbnQhLCBzdGFydFBvcyArIG5vZGVzLmxlbmd0aCk7XG4gIHJldHVybiByYW5nZTtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IFJlYWN0aXZlSXRlbSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IGluc2VydCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnQge1xuICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29udGFpbmVyPzogTm9kZTtcbiAgY2hpbGROb2RlczogTm9kZVtdID0gW107XG4gIGtleT86IG51bWJlciB8IHN0cmluZztcbiAgcmVhY3RpdmVJdGVtPzogUmVhY3RpdmVJdGVtPGFueT47XG5cbiAgc3RhdGljIGlzRnJhZ21lbnQob2JqOiB1bmtub3duKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSAob2JqIGFzIE9iamVjdCkuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yID09PSBGcmFnbWVudCB8fCBjb25zdHJ1Y3RvciA9PT0gRnJhZ21lbnRMaXN0O1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQ6IE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gY2hpbGQgYXMgTm9kZTtcbiAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKG5vZGUpO1xuICB9XG5cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jcmVhdGVFbXB0eSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcbiAgfVxuXG4gIHJlcGxhY2VXaXRoKGZyYWdtZW50OiBGcmFnbWVudCkge1xuICAgIGZyYWdtZW50LmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgcmFuZ2UuaW5zZXJ0Tm9kZShmcmFnbWVudC5mcmFnbWVudCk7XG4gICAgcmFuZ2UuZGV0YWNoKCk7XG4gIH1cblxuICBjcmVhdGVFbXB0eSgpIHtcbiAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbXB0eScpKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRCZWZvcmVUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUsIGJlZm9yZU5vZGU6IE5vZGUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAvLyBoYXMgYSBjb250YWluZXIgYWxyZWFkeVxuICAgICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBjdXJyZW50IGNvbnRhaW5lciBmaXJzdFxuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lciEucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jcmVhdGVFbXB0eSgpO1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5mcmFnbWVudCwgYmVmb3JlTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmNoaWxkTm9kZXNbMF0ucGFyZW50Tm9kZSE7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgIHBhcmVudD8uY2hpbGROb2RlcyxcbiAgICAgIHRoaXMuY2hpbGROb2Rlc1swXVxuICAgICk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQocGFyZW50LCBzdGFydFBvcyk7XG4gICAgcmFuZ2Uuc2V0RW5kKHBhcmVudCwgc3RhcnRQb3MgKyB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBnZXRGaXJzdE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnRMaXN0IGV4dGVuZHMgRnJhZ21lbnQge1xuICBjaGlsZEZyYWdtZW50czogRnJhZ21lbnRbXSA9IFtdO1xuXG4gIGFwcGVuZEZyYWdtZW50KGNoaWxkOiBGcmFnbWVudCwga2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjaGlsZC5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLmZyYWdtZW50KTtcbiAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnB1c2goY2hpbGQpO1xuICAgIGNoaWxkLmtleSA9IGtleTtcbiAgfVxuXG4gIGluc2VydChpbmRleDogbnVtYmVyLCBmcmFnbWVudDogRnJhZ21lbnQsIG5ld0tleTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgZnJhZ21lbnQua2V5ID0gbmV3S2V5O1xuICAgIGZyYWdtZW50Lmluc2VydEJlZm9yZVRvQ29udGFpbmVyKFxuICAgICAgdGhpcy5jb250YWluZXIhLFxuICAgICAgdGhpcy5jaGlsZEZyYWdtZW50c1tpbmRleF0/LmdldEZpcnN0Tm9kZSgpIHx8IG51bGxcbiAgICApO1xuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCBpbmRleCwgZnJhZ21lbnQpO1xuICB9XG5cbiAgcmVtb3ZlV2l0aEtleXMoa2V5czogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGNoaWxkLmtleSEpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGNoaWxkO1xuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5nZSA9IGZyYWdtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICAgIHJhbmdlLmRldGFjaCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBpbnNlcnRCZWZvcmUgPSB0aGlzLmNoaWxkRnJhZ21lbnRzW3RvSW5kZXhdO1xuXG4gICAgbGV0IGluc2VydEJlZm9yZU5vZGU6IE5vZGUgfCBudWxsID0gaW5zZXJ0QmVmb3JlPy5nZXRGaXJzdE5vZGUoKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2hpbGRGcmFnbWVudHNbZnJvbUluZGV4XSE7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZVRvQ29udGFpbmVyKHRoaXMuY29udGFpbmVyISwgaW5zZXJ0QmVmb3JlTm9kZSk7XG5cbiAgICBpbnNlcnQodGhpcy5jaGlsZEZyYWdtZW50cywgdG9JbmRleCwgdGFyZ2V0KTtcbiAgICBsZXQgZGVsZXRlSW5kZXggPSBmcm9tSW5kZXg7XG4gICAgaWYgKHRvSW5kZXggPCBmcm9tSW5kZXgpIHtcbiAgICAgIGRlbGV0ZUluZGV4ICs9IDE7XG4gICAgfVxuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50JztcblxuY29uc3QgUmVmU3ltYm9sID0gU3ltYm9sKCdyZWYnKTtcbmNvbnN0IEludGVybmFsUmF3U3ltYm9sID0gU3ltYm9sKCdpbnRlcm5hbF9yYXcnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmPFQ+KHI6IFJlZjxUPiB8IHVua25vd24pOiByIGlzIFJlZjxUPjtcbmV4cG9ydCBmdW5jdGlvbiBpc1JlZihyOiBhbnkpOiByIGlzIFJlZiB7XG4gIHJldHVybiByICYmIChyIGFzIFJlZilbUmVmU3ltYm9sXSA9PT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVmPFQ+KHJlZjogVCk6IFQgZXh0ZW5kcyBSZWY8aW5mZXIgVj4gPyBWIDogVCB7XG4gIHJldHVybiBpc1JlZihyZWYpID8gKHJlZi52YWx1ZSBhcyBhbnkpIDogcmVmO1xufVxuXG50eXBlIEtleSA9IHN0cmluZyB8IHN5bWJvbCB8IG51bWJlcjtcblxubGV0IGhpZGVSZWZNb2RlID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwRm5IaWRlUmVmTW9kZTxUIGV4dGVuZHMgRnVuY3Rpb24+KGZuOiBUKSB7XG4gIHJldHVybiAoZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICBoaWRlUmVmTW9kZSA9IHRydWU7XG4gICAgY29uc3QgciA9IGZuKC4uLmFyZ3MpO1xuICAgIGhpZGVSZWZNb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIHI7XG4gIH0gYXMgdW5rbm93bikgYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkluUmVmTW9kZShjYjogRnVuY3Rpb24pIHtcbiAgbGV0IHRlbXAgPSBoaWRlUmVmTW9kZTtcbiAgaGlkZVJlZk1vZGUgPSBmYWxzZTtcbiAgY29uc3QgciA9IGNiKCk7XG4gIGhpZGVSZWZNb2RlID0gdGVtcDtcbiAgcmV0dXJuIHI7XG59XG5cbmNvbnN0IHByb3h5T2JqTWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBPYmplY3Q+KCk7XG5cbmNsYXNzIERlcHNNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY29sbGVjdGluZzogVHJpZ2dlcmFibGVSZWZbXSA9IFtdO1xuICBwcml2YXRlIF9kZXBzID0gbmV3IFdlYWtNYXA8UmVmLCBTZXQ8VHJpZ2dlcmFibGVSZWY+PigpO1xuXG4gIHByaXZhdGUgX2FkZERlcCh0YXJnZXQ6IFJlZiwgdHJpZ2dlcjogVHJpZ2dlcmFibGVSZWYpIHtcbiAgICBpZiAoIXRoaXMuX2RlcHMuaGFzKHRhcmdldCkpIHtcbiAgICAgIHRoaXMuX2RlcHMuc2V0KHRhcmdldCwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgdGhpcy5fZGVwcy5nZXQodGFyZ2V0KSEuYWRkKHRyaWdnZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGVwcyh0YXJnZXQ6IFJlZikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2RlcHMuZ2V0KHRhcmdldCk/LnZhbHVlcygpIHx8IFtdKTtcbiAgfVxuXG4gIGJlZ2luQ29sbGVjdChyZWY6IFRyaWdnZXJhYmxlUmVmKSB7XG4gICAgdGhpcy5fY29sbGVjdGluZy5wdXNoKHJlZik7XG4gIH1cblxuICBlbmRDb2xsZWN0KCkge1xuICAgIHRoaXMuX2NvbGxlY3RpbmcucG9wKCk7XG4gIH1cblxuICB0cmFjayh0YXJnZXQ6IFJlZikge1xuICAgIGlmICh0aGlzLl9jb2xsZWN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FkZERlcCh0YXJnZXQsIHRoaXMuX2NvbGxlY3RpbmdbdGhpcy5fY29sbGVjdGluZy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlcih0YXJnZXQ6IFJlZikge1xuICAgIGNvbnN0IGRlcHMgPSB0aGlzLl9nZXREZXBzKHRhcmdldCk7XG4gICAgZGVwcy5mb3JFYWNoKGRlcCA9PiBkZXAudHJpZ2dlcigpKTtcbiAgfVxufVxuXG5jb25zdCBkZXBzTWFuYWdlciA9IG5ldyBEZXBzTWFuYWdlcigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlZjxUID0gYW55PiB7XG4gIFtSZWZTeW1ib2xdOiBib29sZWFuO1xuICB2YWx1ZTogVDtcbn1cblxuaW50ZXJmYWNlIFRyaWdnZXJhYmxlUmVmPFQgPSBhbnk+IHtcbiAgW1JlZlN5bWJvbF06IGJvb2xlYW47XG4gIHZhbHVlOiBUO1xuICB0cmlnZ2VyOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmF3KHJlZjogUmVmKSB7XG4gIGlmIChpc1Byb3h5UmVmKHJlZikpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHJlZltJbnRlcm5hbFJhd1N5bWJvbF07XG4gIH1cbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmVmLl92YWx1ZTtcbn1cblxuZXhwb3J0IHR5cGUgTm9UcmFja0ZuID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG5jbGFzcyBBdXRvcnVuUmVmSW1wbCB7XG4gIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZuOiAobm90cmFja0ZuOiBOb1RyYWNrRm4pID0+IHZvaWQpIHtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3J1bigpIHtcbiAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBGbkhpZGVSZWZNb2RlKHRoaXMuX2ZuKS5jYWxsKHRoaXMsIChmbjogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgLy8gbm8gdHJhY2sgZm5cbiAgICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgICAgIGZuKCk7XG4gICAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgfSk7XG4gICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0b3J1bihmbjogKG5vdHJhY2tGbjogTm9UcmFja0ZuKSA9PiB2b2lkKSB7XG4gIHJldHVybiBuZXcgQXV0b3J1blJlZkltcGwoZm4pO1xufVxuXG5jbGFzcyBSZWZJbXBsPFQgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92YWx1ZTogVCkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbDogVCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIENvbXB1dGVkUmVmSW1wbDxUID0gYW55PiB7XG4gIHB1YmxpYyBbUmVmU3ltYm9sXSA9IHRydWU7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlITogVDtcbiAgcHJpdmF0ZSBfY29tcHV0ZTogKCkgPT4gVDtcblxuICBjb25zdHJ1Y3RvcihnZXR0ZXI6ICgpID0+IFQpIHtcbiAgICB0aGlzLl9jb21wdXRlID0gZ2V0dGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVjb21wdXRlKCkge1xuICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2NvbXB1dGUoKTtcbiAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5fcmVjb21wdXRlKCk7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5fcmVjb21wdXRlKCk7XG4gICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgfVxufVxuXG5jb25zdCBQcm94eVJlZlN5bWJvbCA9IFN5bWJvbCgncHJveHktcmVmJyk7XG5cbmZ1bmN0aW9uIGlzUHJveHlSZWYodGFyZ2V0OiB1bmtub3duKSB7XG4gIHJldHVybiB0YXJnZXQgJiYgKHRhcmdldCBhcyBQcm94eVJlZkltcGw8YW55PilbUHJveHlSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5jb25zdCBwcm94eU1hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgT2JqZWN0PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KG9iajogVCwgYWxsUmVhY3RpdmUgPSBmYWxzZSk6IFQge1xuICBjb25zdCByZWYgPSBuZXcgUHJveHlSZWZJbXBsKG9iaiwgYWxsUmVhY3RpdmUpO1xuICByZXR1cm4gcmVmLnZhbHVlO1xufVxuXG5lbnVtIE1FVEFfVFlQRSB7XG4gIHJlYWN0aXZlLFxuICBjb21wdXRlZCxcbiAgYXV0b3J1bixcbn07XG5cbi8vIG1hcCBPYmplY3QucHJvdG90eXBlIHRvIGl0cyByZWFjdGl2ZSBrZXlzXG5sZXQgbWV0YXNNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE1hcDxLZXksIE1FVEFfVFlQRT4+KCk7XG5cbmZ1bmN0aW9uIGFkZE1ldGEocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5LCB0eXBlOiBNRVRBX1RZUEUpIHtcbiAgaWYgKCFtZXRhc01hcC5oYXMocHJvdG90eXBlKSkge1xuICAgIG1ldGFzTWFwLnNldChwcm90b3R5cGUsIG5ldyBNYXAoKSk7XG4gIH1cbiAgY29uc3QgbWV0YXMgPSBtZXRhc01hcC5nZXQocHJvdG90eXBlKTtcbiAgbWV0YXMhLnNldChrZXksIHR5cGUpO1xufVxuXG5mdW5jdGlvbiBnZXRNZXRhS2V5cyhwcm90b3R5cGU6IE9iamVjdCkge1xuICByZXR1cm4gbWV0YXNNYXAuZ2V0KHByb3RvdHlwZSk7XG59XG5cbmludGVyZmFjZSBDb21wb25lbnQge1xuICByZW5kZXIoKTogRnJhZ21lbnQ7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhY3RpdmVDb21wb25lbnQoY29tcG9uZW50OiBuZXcgKCkgPT4gRnJhZ21lbnQsIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICBjb25zdCBpbnMgPSBuZXcgY29tcG9uZW50KCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgaW5zLnByb3BzID0gcHJvcHMgfHwge307XG4gIGNvbnN0IGNvbXAgPSBjcmVhdGVSZWFjdGl2ZShpbnMpIGFzIGFueSBhcyBDb21wb25lbnQ7XG4gIHJldHVybiBjb21wO1xufVxuXG4vKipcbiAqIEByZWFjdGl2ZSBkZWNvcmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhY3RpdmUocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5yZWFjdGl2ZSk7XG59XG5cbi8qKlxuICogQGNvbXB1dGVkIGRlY29yYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZChwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLmNvbXB1dGVkKTtcbn1cblxuLyoqXG4gKiBAY29tcHV0ZWQgZGVjb3JhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9ydW4ocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5hdXRvcnVuKTtcbn1cblxuY2xhc3MgUHJveHlSZWZJbXBsPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHVibGljIFtQcm94eVJlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIHByaXZhdGUgX3Byb3h5OiBUO1xuICBwcml2YXRlIF9tZXRhS2V5cz86IE1hcDxLZXksIE1FVEFfVFlQRT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqOiBULCBwcml2YXRlIF9hbGxSZWFjdGl2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fbWV0YUtleXMgPSBnZXRNZXRhS2V5cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoX29iaikpO1xuICAgIHRoaXMuX3Byb3h5ID0gdGhpcy5faW5pdFByb3h5KF9vYmopO1xuICAgIHRoaXMuX2luaXRBdXRvcnVuKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0QXV0b3J1bigpIHtcbiAgICBpZiAoIXRoaXMuX21ldGFLZXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21ldGFLZXlzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gTUVUQV9UWVBFLmF1dG9ydW4pIHtcbiAgICAgICAgY3JlYXRlQXV0b3J1bigoKHRoaXMuX29iaiBhcyBhbnkpW2tleV0uYmluZCh0aGlzLl9wcm94eSkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRQcm94eShvYmo6IFQpOiBUIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAocHJveHlNYXAuaGFzKG9iaikpIHtcbiAgICAgIHJldHVybiBwcm94eU1hcC5nZXQob2JqKSBhcyBUO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZk1hcCA9IG5ldyBNYXA8S2V5LCBSZWY+KCk7XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldChfLCBrZXkpIHtcbiAgICAgICAgZGVwc01hbmFnZXIudHJhY2sodGhhdCk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdsZW5ndGgnKSByZXR1cm4gb2JqLmxlbmd0aDtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnbWFwJylcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBtYXAoXG4gICAgICAgICAgICAgIGNiOiAoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiBhbnksXG4gICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqLm1hcCgoX2l0ZW06IGFueSwgX2luZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoKHByb3h5IGFzIGFueSlbX2luZGV4XSwgX2luZGV4KTtcbiAgICAgICAgICAgICAgfSwgdGhpc0FyZyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3NwbGljZSddLmluZGV4T2YoXG4gICAgICAgICAgICAgIGtleSBhcyBzdHJpbmdcbiAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwb3AnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKGxlbiAtIDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3NwbGljZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IG9iai5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaSA+PSBpbmRleCAmJiBpIDwgaW5kZXggKyBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKCcnICsgaSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPj0gaW5kZXggKyBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuc2V0KCcnICsgKGkgLSBjb3VudCksIHJlZk1hcC5nZXQoJycgKyBpKSEpO1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKCcnICsgaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9ialtrZXkgYXMgYW55XSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGF0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSBTeW1ib2wuc3BlY2llcykge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZiA9IGdldFJlZihrZXkpO1xuICAgICAgICBpZiAoaXNQcm94eVJlZihyZWYpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlkZVJlZk1vZGUgJiYgaXNSZWYocmVmKSkge1xuICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFJlZihrZXkpO1xuICAgICAgfSxcbiAgICAgIHNldChfLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IGdldFJlZihrZXkpO1xuICAgICAgICBpZiAoaXNSZWYocmVmKSkge1xuICAgICAgICAgIC8vIGlmIG9yaWdpbiByZWYgaXMgbm90IHByb3h5UmVmXG4gICAgICAgICAgLy8gYnV0IHZhbHVlIGlzIGEgb2JqZWN0XG4gICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgKHJlZiBhcyBQcm94eVJlZkltcGwpW1Byb3h5UmVmU3ltYm9sXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmVmTWFwLnNldChrZXksIG5ldyBQcm94eVJlZkltcGwodmFsdWUsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAodGhhdC5fb2JqIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldFJlZiA9IChrZXk6IEtleSk6IFJlZiA9PiB7XG4gICAgICBpZiAocmVmTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiByZWZNYXAuZ2V0KGtleSkhO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuX29iaik7XG4gICAgICBpZiAoIXRoaXMuX21ldGFLZXlzICYmICF0aGlzLl9hbGxSZWFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX29iaiBhcyBhbnkpW2tleV07XG4gICAgICB9XG4gICAgICBjb25zdCBtZXRhID0gdGhpcy5fbWV0YUtleXM/LmdldChrZXkpO1xuICAgICAgbGV0IHJlc3VsdCE6IFJlZjtcblxuICAgICAgaWYgKHRoaXMuX2FsbFJlYWN0aXZlIHx8IG1ldGEgPT09IE1FVEFfVFlQRS5yZWFjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChvYmogYXMgYW55KVtrZXldO1xuICAgICAgICBpZiAoaXNSZWYodmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIHJlYWN0aXZlIG9iamVjdFxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBQcm94eVJlZkltcGwoY3JlYXRlUmVhY3RpdmUodmFsdWUsIHRoaXMuX2FsbFJlYWN0aXZlKSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZS5iaW5kKHRoaXMuX3Byb3h5KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlZlxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZWZJbXBsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtZXRhID09PSBNRVRBX1RZUEUuY29tcHV0ZWQpIHtcbiAgICAgICAgY29uc3QgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSkhLmdldCE7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBDb21wdXRlZFJlZkltcGwod3JhcEZuSGlkZVJlZk1vZGUoZ2V0dGVyLmJpbmQodGhpcy5fcHJveHkpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVmTWFwLnNldChrZXksIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gKHRoaXMgYXMgYW55KS5fb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHIuYmluZCh0aGlzLl9wcm94eSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBwcm94eU1hcC5zZXQob2JqLCBwcm94eSk7XG4gICAgcHJveHlPYmpNYXAuc2V0KHByb3h5LCBvYmopO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fcHJveHk7XG4gIH1cblxuICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgT2JqZWN0LmtleXMobmV3VmFsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAodGhpcy5fcHJveHkgYXMgYW55KVtrZXldID0gKG5ld1ZhbCBhcyBhbnkpW2tleV07XG4gICAgfSk7XG4gICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKGZuOiAoKSA9PiB2b2lkKSB7XG4gIHdyYXBGbkhpZGVSZWZNb2RlKGZuKSgpO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgRnJhZ21lbnQsIEZyYWdtZW50TGlzdCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuaW1wb3J0IHsgY3JlYXRlQXV0b3J1biwgY3JlYXRlUmVhY3RpdmUsIFJlZiwgd3JhcEZuSGlkZVJlZk1vZGUgfSBmcm9tICcuL3JlYWN0aXZlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZTxUIGV4dGVuZHMgKCkgPT4gRnJhZ21lbnQ+KGZ1bmM6IFQpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBmdW5jLl9faXNkaXJlY3RpdmVfXyA9IHRydWU7XG4gIHJldHVybiBmdW5jO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RpdmUodmFsOiBhbnkpIHtcbiAgcmV0dXJuIHZhbD8uX19pc2RpcmVjdGl2ZV9fID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJGlmKFxuICBjb25kOiAoKSA9PiBib29sZWFuLFxuICB5ZXM6ICgpID0+IEZyYWdtZW50LFxuICBubzogKCkgPT4gRnJhZ21lbnRcbikge1xuICByZXR1cm4gZGlyZWN0aXZlKCgpID0+IHtcbiAgICBsZXQgbGFzdFJlc3VsdDogYm9vbGVhbjtcbiAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgbGV0IGxhc3RGcmFnbWVudDogRnJhZ21lbnQ7XG5cbiAgICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IGNvbmQoKTtcbiAgICAgIGlmICghaW5pdGVkKSB7XG4gICAgICAgIGxhc3RSZXN1bHQgPSBuZXdSZXN1bHQ7XG4gICAgICAgIGxhc3RGcmFnbWVudCA9IGxhc3RSZXN1bHQhID8geWVzKCkgOiBubygpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0ZyYWdtZW50ID0gbmV3UmVzdWx0ID8geWVzKCkgOiBubygpO1xuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICBsYXN0RnJhZ21lbnQucmVwbGFjZVdpdGgobmV3RnJhZ21lbnQpO1xuICAgICAgICBsYXN0RnJhZ21lbnQgPSBuZXdGcmFnbWVudDtcbiAgICAgIH0pO1xuICAgICAgbGFzdFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0RnJhZ21lbnQhO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVJdGVtPFQ+KHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSB7XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZSh7XG4gICAgdmFsdWUsXG4gICAgaW5kZXgsXG4gIH0sIHRydWUpO1xufVxuXG5leHBvcnQgdHlwZSBSZWFjdGl2ZUl0ZW08VD4gPSB7XG4gIHZhbHVlOiBUO1xuICBpbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uICRtYXA8VD4oXG4gIHJhd0xpc3Q6IFRbXSxcbiAgbWFwRnVuYzogKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4gRnJhZ21lbnQsXG4gIGtleUZ1bmM6IChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IHN0cmluZyB8IG51bWJlclxuKSB7XG4gIGNvbnN0IGxpc3QgPSAocmF3TGlzdCBhcyBhbnkpIGFzIFJlZjtcbiAgY29uc3QgbGlzdERhdGEgPSAobGlzdCBhcyBhbnkpIGFzIFRbXTtcblxuICBsZXQgbGFzdFJlYWN0aXZlSXRlbXMgPSBsaXN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlSXRlbShpdGVtLCBpbmRleCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50TGlzdCA9IG5ldyBGcmFnbWVudExpc3QoKTtcblxuICBjb25zdCBtYXBGdW5jV3JhcCA9IHdyYXBGbkhpZGVSZWZNb2RlKChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG1hcEZ1bmMoaXRlbSk7XG4gICAgZnJhZ21lbnQucmVhY3RpdmVJdGVtID0gaXRlbTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0pO1xuXG4gIGNvbnN0IGtleUZ1bmNXcmFwID0gd3JhcEZuSGlkZVJlZk1vZGUoKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4ge1xuICAgIGNvbnN0IHIgPSBrZXlGdW5jKGl0ZW0pO1xuICAgIGlmICh0eXBlb2YgciAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHIgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLnRyYWNlKFxuICAgICAgICAna2V5IG9mICRtYXAgc2hvdWxkIHJldHVybiBzdHJpbmcgb3IgbnVtYmVyLCBidXQgZ290ICcgKyByLFxuICAgICAgICBrZXlGdW5jLnRvU3RyaW5nKClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9KTtcblxuICBsZXQgbGFzdEZyYWdtZW50cyA9IGxpc3REYXRhLm1hcCgoXywgaW5kZXgpID0+XG4gICAgbWFwRnVuY1dyYXAobGFzdFJlYWN0aXZlSXRlbXNbaW5kZXhdKVxuICApO1xuICBsZXQgbGFzdEtleXMgPSBsaXN0RGF0YS5tYXAoKF8sIGluZGV4KSA9PlxuICAgIGtleUZ1bmNXcmFwKGxhc3RSZWFjdGl2ZUl0ZW1zW2luZGV4XSlcbiAgKTtcblxuICBsYXN0RnJhZ21lbnRzLmZvckVhY2goKGZyYWcsIGluZGV4KSA9PiB7XG4gICAgZnJhZ21lbnRMaXN0LmFwcGVuZEZyYWdtZW50KGZyYWcsIGxhc3RLZXlzW2luZGV4XSk7XG4gIH0pO1xuXG4gIGxldCBpbml0ZWQgPSBmYWxzZTtcblxuICBjcmVhdGVBdXRvcnVuKG5vdHJhY2sgPT4ge1xuICAgIGlmICghaW5pdGVkKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0ZWQgPSBsaXN0Lmxlbmd0aDtcbiAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TGlzdCA9IChsaXN0IGFzIHVua25vd24pIGFzIGFueVtdO1xuXG4gICAgbm90cmFjaygoKSA9PiB7XG4gICAgICBjb25zdCBuZXdLZXlzID0gbmV3TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICBrZXlGdW5jV3JhcChjcmVhdGVSZWFjdGl2ZUl0ZW0oaXRlbSwgaW5kZXgpKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbGFzdEtleXMgPSBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMubWFwKGl0ZW0gPT4gaXRlbS5rZXkhKTtcblxuICAgICAgLy8gZGlmZiBhbmQgcGF0Y2ggZnJvbSBrZXlzXG4gICAgICBuZXdLZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGFzdEtleXMgPSBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMubWFwKGl0ZW0gPT4gaXRlbS5rZXkhKTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGFzdEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgIC8vIGluc2VydFxuICAgICAgICAgIC8vIGNhbiBub3QgZmluZCBpbiBvbGQgbGlzdCwgbWVhbiBpbnNlcnRcbiAgICAgICAgICAvLyBpbnNlcnQgdG8gY3VycmVudCBpbmRleFxuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlSXRlbSA9IGNyZWF0ZVJlYWN0aXZlSXRlbShuZXdMaXN0W2luZGV4XSwgaW5kZXgpO1xuXG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBtYXBGdW5jV3JhcChyZWFjdGl2ZUl0ZW0pO1xuXG4gICAgICAgICAgZnJhZ21lbnRMaXN0Lmluc2VydChpbmRleCwgZnJhZ21lbnQsIGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgIC8vIG1vdmVcblxuICAgICAgICAgIGNvbnN0IGZyb21JbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICBmcmFnbWVudExpc3QubW92ZShmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVtb3ZlZCA9IGxhc3RLZXlzLmZpbHRlcihrZXkgPT4gbmV3S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKTtcbiAgICAgIGZyYWdtZW50TGlzdC5yZW1vdmVXaXRoS2V5cyhyZW1vdmVkKTtcblxuICAgICAgLy8gYXBwbHkgbmV3IHJlYWN0aXZlSW5kZXhcbiAgICAgIGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5mb3JFYWNoKFxuICAgICAgICAoY2hpbGQsIGluZGV4KSA9PiAoY2hpbGQhLnJlYWN0aXZlSXRlbSEuaW5kZXggPSBpbmRleClcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudExpc3Q7XG59XG4iLCJpbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gJy4vYmF0Y2hlcic7XG5pbXBvcnQgeyBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZUF1dG9ydW4sIGlzUmVmLCByZWFjdGl2ZUNvbXBvbmVudCwgUmVmLCBydW5JblJlZk1vZGUsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudChcbiAgY29tcDogKHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4gRnJhZ21lbnQsXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cbikge1xuICBjb25zdCBjb21wb25lbnQgPSByZWFjdGl2ZUNvbXBvbmVudChjb21wIGFzIGFueSwgcHJvcHMpO1xuICBsZXQgZnJhZ21lbnQ6IEZyYWdtZW50O1xuICBydW5JblJlZk1vZGUoKCkgPT4ge1xuICAgIGZyYWdtZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50ITtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3Nob3VsZCBiZSBjbGFzc05hbWUsIGJ1dCBnb3QgY2xhc3MnKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJykge1xuICAgIGtleSA9ICdjbGFzcyc7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbHVlLl9faHRtbDtcbiAgICBpZiAoaXNSZWYoaHRtbCkpIHtcbiAgICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGh0bWwudmFsdWU7XG4gICAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAncmVmJykge1xuICAgIC8vIHZhbHVlIHNob3VsZCBiZSBhIChyZWYpID0+IHZvaWRcbiAgICB2YWx1ZShub2RlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGJpbmRBdHRyKG5vZGU6IEhUTUxFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IFJlZjxhbnk+KSB7XG4gIGxldCBsYXN0VmFsdWUgPSB2YWx1ZS52YWx1ZTtcblxuICBjb25zdCBpc0V2ZW50ID0gL15vbltBLVpdLy50ZXN0KGtleSk7XG4gIGNvbnN0IGV2ZW50TmFtZSA9IGlzRXZlbnQgPyBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCkgOiAnJztcbiAgbGV0IGxhc3RWYWx1ZUV2ZW50SGFuZGxlciA9IGlzRXZlbnQgPyB3cmFwRm5IaWRlUmVmTW9kZShsYXN0VmFsdWUpIDogKCkgPT4ge307XG5cbiAgc2NoZWR1bGUoKCkgPT4ge1xuICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBdHRyKG5vZGUsIGtleSwgbGFzdFZhbHVlKTtcbiAgfSk7XG5cbiAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgICBsYXN0VmFsdWVFdmVudEhhbmRsZXIgPSB3cmFwRm5IaWRlUmVmTW9kZShsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRBdHRyKG5vZGUsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0pO1xuICAgIGxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgoXG4gIHR5cGU6IHN0cmluZyB8IEZ1bmN0aW9uLFxuICBwcm9wczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgLi4uY2hpbGRyZW46IHN0cmluZ1tdXG4pIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRnJhZ21lbnQoKTtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgL15vbltBLVpdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGtleS5yZXBsYWNlKC9eb24vLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHdyYXBGbkhpZGVSZWZNb2RlKHZhbHVlKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKHZhbHVlKSkge1xuICAgICAgICAgIGJpbmRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHIodGFnLCBrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWYoY2hpbGQpKSB7XG4gICAgICAgICAgY29uc3QgcmVhY3RpdmVWYWwgPSBjaGlsZCBhcyBSZWY8YW55PjtcbiAgICAgICAgICBjb25zdCB2YWwgPSByZWFjdGl2ZVZhbC52YWx1ZTtcblxuICAgICAgICAgIC8vIHRleHRub2RlXG4gICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyArIHZhbCk7XG4gICAgICAgICAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlYWN0aXZlVmFsLnZhbHVlO1xuICAgICAgICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEaXJlY3RpdmUoY2hpbGQpKSB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gY2hpbGQgYXMgKCkgPT4gRnJhZ21lbnQ7XG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkaXJlY3RpdmUoKTtcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcih0YWcpO1xuICAgICAgICB9IGVsc2UgaWYgKEZyYWdtZW50LmlzRnJhZ21lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgKGNoaWxkIGFzIEZyYWdtZW50KS5hcHBlbmRUb0NvbnRhaW5lcih0YWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gY29tcG9uZW50XG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzUmVmKHR5cGUpKSB7XG4gICAgLy8gcmVhY3RpdmUgY29tcG9uZW50XG4gICAgY29uc3QgY29tcCA9IHR5cGUgYXMgUmVmO1xuICAgIGxldCBmcmFnOiBGcmFnbWVudDtcbiAgICBjcmVhdGVBdXRvcnVuKChub3RyYWNrKSA9PiB7XG4gICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcC52YWx1ZTtcbiAgICAgICAgbm90cmFjaygoKSA9PiB7XG4gICAgICAgICAgZnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXBvbmVudCwge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogcmVwbGFjZVxuICAgICAgICAvLyBmcmFnLnJlcGxhY2VXaXRoKGJ1aWxkQ29tcG9uZW50KGNvbXAudmFsdWUsIHtcbiAgICAgICAgLy8gICAuLi5wcm9wcyxcbiAgICAgICAgLy8gICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIC8vIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZyE7XG4gIH1cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGZyYWdtZW50OiBGcmFnbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBKU1gge1xuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XG4gICAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgaW1wb3J0IHsgaCwgcmVhY3RpdmUsIGNvbXB1dGVkLCBhdXRvcnVuLCAkaWYsICRtYXAgfSBmcm9tICdyZXNlZSc7XG4gICAgaW1wb3J0IENvZGVCb3ggZnJvbSAnL2hvbWUvcnVubmVyL3dvcmsvcmVzZWUvcmVzZWUvcGFja2FnZXMvcmVzZWUtc2l0ZS9oZWxwZXIvY29kZS1ib3gnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtbyB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PjxoMSBpZD1cImdldHRpbmctc3RhcnRlZFwiPkdldHRpbmcgU3RhcnRlZDwvaDE+XG48aDIgaWQ9XCJoZWxsby13b3JsZFwiPkhlbGxvIHdvcmxkPC9oMj5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEhlbGxvIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMEhlbGxvJTIwJTdCJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCSGVsbG8lMjBXb3JsZCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwic3RhdGVcIj5TdGF0ZTwvaDI+XG48cD5XZSBjYW4gdXNlIDxjb2RlPkByZWFjdGl2ZTwvY29kZT4gdG8gbWFrZSBhdHRyaWJ1dGUgcmVhY3RpdmU8L3A+XG48dWw+XG48bGk+VXNlIGluIDxjb2RlPkpTWDwvY29kZT48L2xpPlxuPGxpPk11dGF0ZSBpdCB0byB1cGRhdGUgaW4gY2FsbGJhY2tzPC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIENvdW50ZXI6IHt0aGlzLmNvdW50fVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBDb3VudGVyQXBwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCdGhpcy5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcHV0ZWRcIj5Db21wdXRlZDwvaDI+XG48dWw+XG48bGk+PGNvZGU+QGNvbXB1dGVkIGdldCB4KCk8L2NvZGU+IHRvIGNyZWF0ZSBjb21wdXRlZDwvbGk+XG48bGk+Y29tcHV0ZWQgcmVzdWx0IGlzIHNhbWUgd2l0aCByZWFjdGl2ZSBidXQgcmVhZG9ubHk8L2xpPlxuPC91bD5cbjxoMyBpZD1cImV4YW1wbGVcIj5FeGFtcGxlPC9oMz5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgQGNvbXB1dGVkIGdldCBkb3VibGVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQgKiAyO1xuICAgIH1cbiAgICBpbmMoKSB7XG4gICAgICAgIHRoaXMuY291bnQgKys7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxwPiBDb3VudGVyOiB7dGhpcy5jb3VudH0gPC9wPlxuICAgICAgICAgICAgPHA+IERvdWJsZToge3RoaXMuZG91YmxlQ291bnR9IDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5pbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTIwJTIwJTIwJTIwJTQwY29tcHV0ZWQlMjBnZXQlMjBkb3VibGVDb3VudCgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwdGhpcy5jb3VudCUyMColMjAyJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwaW5jKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmNvdW50JTIwJTJCJTJCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMjBDb3VudGVyJTNBJTIwJTdCdGhpcy5jb3VudCU3RCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMjBEb3VibGUlM0ElMjAlN0J0aGlzLmRvdWJsZUNvdW50JTdEJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImNvbXBvbmVudFwiPkNvbXBvbmVudDwvaDI+XG48dWw+XG48bGk+Q2xhc3Mgd2l0aCA8Y29kZT5yZW5kZWVyPC9jb2RlPiBpcyBqdXN0IGNvbXBvbmVudDwvbGk+XG48bGk+PGNvZGU+dGhpcy5wcm9wczwvY29kZT4gaXMgYSBvYmplY3QsIHlvdSB3aWxsIG5lZWQgdG8gYWRkIDxjb2RlPkByZWFjdGl2ZTwvY29kZT4gZm9yIGl0IGlmIG5lZWQgcmVhY3RpdmU8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBEaXNwbGF5IHtcbiAgICBAcmVhY3RpdmUgcHJvcHM7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHA+SSB3aWxsIGRpc3BsYXkgY291bnQgZnJvbSB7JzxEaXNwbGF5Lz4nfToge3RoaXMucHJvcHMuY291bnR9PC9wPjtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ291bnRlckFwcCB7XG4gICAgQHJlYWN0aXZlIGNvdW50ID0gMDtcbiAgICBpbmMoKSB7XG4gICAgICAgIHRoaXMuY291bnQgKys7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8RGlzcGxheSBjb3VudD17dGhpcy5jb3VudH0vPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5pbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiY2xhc3MlMjBEaXNwbGF5JTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBwcm9wcyUzQiUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JwJTI2Z3QlM0JJJTIwd2lsbCUyMGRpc3BsYXklMjBjb3VudCUyMGZyb20lMjAlN0IlMjYlMjMwMzklM0IlMjZsdCUzQkRpc3BsYXklMkYlMjZndCUzQiUyNiUyMzAzOSUzQiU3RCUzQSUyMCU3QnRoaXMucHJvcHMuY291bnQlN0QlMjZsdCUzQiUyRnAlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RCUwQSUwQWV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCRGlzcGxheSUyMGNvdW50JTNEJTdCdGhpcy5jb3VudCU3RCUyRiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJsb2dpY1wiPkxvZ2ljPC9oMj5cbjxoMyBpZD1cImlmXCI+JGlmPC9oMz5cbjxwPlVzZSA8Y29kZT4kaWY8L2NvZGU+IHRvIGRvIGEgc3dpdGNoIGxvZ2ljIGluIDxjb2RlPkpTWDwvY29kZT4uPC9wPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ291bnRlckFwcCB7XG4gICAgQHJlYWN0aXZlIGNvdW50ID0gMDtcblxuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5jb3VudCA+PSAzIDogXG4gICAgICAgIHskaWYoXG4gICAgICAgICAgICAvLyBjb25kXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNvdW50ID49IDMsXG4gICAgICAgICAgICAvLyB5ZXNcbiAgICAgICAgICAgICgpID0+IDxkaXY+WUVTIHt0aGlzLmNvdW50fTwvZGl2PixcbiAgICAgICAgICAgIC8vIE5PXG4gICAgICAgICAgICAoKSA9PiA8ZGl2Pk5PIHt0aGlzLmNvdW50fTwvZGl2PixcbiAgICAgICAgKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTBBJTIwJTIwJTIwJTIwaW5jKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmNvdW50JTIwJTJCJTJCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwQ291bnRlciUzQSUyMCU3QnRoaXMuY291bnQlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQmNvdW50JTIwJTI2Z3QlM0IlM0QlMjAzJTIwJTNBJTIwJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0aWYoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwY29uZCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmNvdW50JTIwJTI2Z3QlM0IlM0QlMjAzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIweWVzJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JZRVMlMjAlN0J0aGlzLmNvdW50JTdEJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyME5PJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JOTyUyMCU3QnRoaXMuY291bnQlN0QlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDMgaWQ9XCJtYXBcIj4kbWFwPC9oMz5cbjxwPlVzZSA8Y29kZT4kbWFwPC9jb2RlPiBmb3IgYSBsaXN0IG1hcDwvcD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwcCB7XG4gIEByZWFjdGl2ZSBsaXN0ID0gWyd0ZXN0JyArIGNvdW50ICsrXTtcblxuICBhZGRUb2RvKCkge1xuICAgICAgLy8gdXNlIGFycmF5LnB1c2gvc3BsaWNlL3NoaWZ0L3Vuc2hpZnQgdG8gbXV0YXRlXG4gICAgICB0aGlzLmxpc3QucHVzaCgnbmV3IHRvZG8nICsgY291bnQgKyspO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPHVsPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRvZG99PkFERCBUT0RPPC9idXR0b24+XG4gICAgICB7JG1hcChcbiAgICAgICAgICB0aGlzLmxpc3QsICAvLyBhcnJheVxuICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICAgICAgICAvLyBpdGVtLnZhbHVlIG1lYW4gaXRlbVxuICAgICAgICAgICAgICAvLyBpdGVtLmluZGV4IG1lYW4gaW5kZXhcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbe2l0ZW0uaW5kZXh9XSB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5saXN0LnNwbGljZShpdGVtLmluZGV4LCAxKX0+UkVNT1ZFPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGtleSBtYXAsIGFsdGVybmF0aXZlIHRvIDxsaSBrZXk+IGluIFJlYWN0XG4gICAgICAgICAgICAgIC8vIG11c3QgYmUgc3RyaW5nIG9yIG51bWJlciwgYW5kIGtlZXAgdW5pcXVlIGluIGxpc3RcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgKX1cbiAgICA8L3VsPjtcbiAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwibGV0JTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQXBwJTIwJTdCJTBBJTIwJTIwJTQwcmVhY3RpdmUlMjBsaXN0JTIwJTNEJTIwJTVCJTI2JTIzMDM5JTNCdGVzdCUyNiUyMzAzOSUzQiUyMCUyQiUyMGNvdW50JTIwJTJCJTJCJTVEJTNCJTBBJTBBJTIwJTIwYWRkVG9kbygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwYXJyYXkucHVzaCUyRnNwbGljZSUyRnNoaWZ0JTJGdW5zaGlmdCUyMHRvJTIwbXV0YXRlJTBBJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5saXN0LnB1c2goJTI2JTIzMDM5JTNCbmV3JTIwdG9kbyUyNiUyMzAzOSUzQiUyMCUyQiUyMGNvdW50JTIwJTJCJTJCKSUzQiUwQSUyMCUyMCU3RCUwQSUwQSUyMCUyMHJlbmRlciUyMCgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0J1bCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5hZGRUb2RvJTdEJTI2Z3QlM0JBREQlMjBUT0RPJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyNG1hcCglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QlMkMlMjAlMjAlMkYlMkYlMjBhcnJheSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwbWFwJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwaXRlbS52YWx1ZSUyMG1lYW4lMjBpdGVtJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwaXRlbS5pbmRleCUyMG1lYW4lMjBpbmRleCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUIlN0JpdGVtLmluZGV4JTdEJTVEJTIwJTdCaXRlbS52YWx1ZSU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QigpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmxpc3Quc3BsaWNlKGl0ZW0uaW5kZXglMkMlMjAxKSU3RCUyNmd0JTNCUkVNT1ZFJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0QlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGtleSUyMG1hcCUyQyUyMGFsdGVybmF0aXZlJTIwdG8lMjAlMjZsdCUzQmxpJTIwa2V5JTI2Z3QlM0IlMjBpbiUyMFJlYWN0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwbXVzdCUyMGJlJTIwc3RyaW5nJTIwb3IlMjBudW1iZXIlMkMlMjBhbmQlMjBrZWVwJTIwdW5pcXVlJTIwaW4lMjBsaXN0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwaXRlbS52YWx1ZSUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnVsJTI2Z3QlM0IlM0IlMEElMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwicGxheWdyb3VuZFwiPlBsYXlHcm91bmQ8L2gyPlxuPHA+UGxheSBvbmxpbmUgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL25hdWdodHktaGlsbC11Z2tnaj9maWxlPS9zcmMvaW5kZXgudHN4XCI+Q29kZVNhbmRib3g8L2E+PC9wPlxuPC9kaXY+O1xuICAgICAgICB9XG4gICAgfSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9