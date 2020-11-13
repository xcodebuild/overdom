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
      }, "State"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "We can use ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "reactive(object)"), " to create state model."), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Use in ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Mutate it to update in callbacks")), function () {
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
      }, "Computed"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "get x()"), " in ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "reactive(object)"), " to create computed"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "computed result is same with reactive but readonly")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
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
      }, "Component"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Function is just component"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Props is a object (maybe reactive)")), function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vaGVscGVyL2NvZGUtYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9iYXRjaGVyLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3JlYWN0aXZlLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi9zcmMvZG9jL2dldC1zdGFydGVkLm1kIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uL3NyYy9pbmRleC5sZXNzPzk2YzUiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiaHRtbERlY29kZSIsImlucHV0IiwiZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVmFsdWUiLCJDb2RlYm94IiwiZG9tIiwic2V0VGltZW91dCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsIkNvbXBvbmVudCIsInByb3BzIiwiY29tcG9uZW50IiwiaGFuZGxlQ29kZVJlZiIsIl9faHRtbCIsImNvZGUiLCJyZWFjdGl2ZSIsIkxvZ28iLCJIZWFkZXIiLCJBcHAiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tzIiwidGltZXIiLCJzY2hlZHVsZSIsInRhc2siLCJ0YXNrSXRlbXMiLCJBcnJheSIsInRhc2tJdGVtIiwiaW5zZXJ0IiwiYXJyYXkiLCJpbmRleCIsIml0ZW0iLCJGcmFnbWVudCIsImNvbnN0cnVjdG9yIiwib2JqIiwiYXBwZW5kQ2hpbGQiLCJub2RlIiwiYXBwZW5kVG9Db250YWluZXIiLCJjb250YWluZXIiLCJyZXBsYWNlV2l0aCIsImZyYWdtZW50IiwicmFuZ2UiLCJjcmVhdGVFbXB0eSIsImluc2VydEJlZm9yZVRvQ29udGFpbmVyIiwiY3JlYXRlUmFuZ2UiLCJwYXJlbnQiLCJzdGFydFBvcyIsImdldEZpcnN0Tm9kZSIsIkZyYWdtZW50TGlzdCIsImFwcGVuZEZyYWdtZW50IiwiY2hpbGQiLCJyZW1vdmVXaXRoS2V5cyIsImtleXMiLCJtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsInRhcmdldCIsImRlbGV0ZUluZGV4IiwidG9JbmRleCIsIlJlZlN5bWJvbCIsIlN5bWJvbCIsImlzUmVmIiwiciIsImhpZGVSZWZNb2RlIiwid3JhcEZuSGlkZVJlZk1vZGUiLCJmbiIsInJ1bkluUmVmTW9kZSIsImNiIiwidGVtcCIsInByb3h5T2JqTWFwIiwiRGVwc01hbmFnZXIiLCJfYWRkRGVwIiwiX2dldERlcHMiLCJiZWdpbkNvbGxlY3QiLCJlbmRDb2xsZWN0IiwidHJhY2siLCJ0cmlnZ2VyIiwiZGVwcyIsImRlcCIsImRlcHNNYW5hZ2VyIiwiQXV0b3J1blJlZkltcGwiLCJfcnVuIiwiY3JlYXRlQXV0b3J1biIsIlJlZkltcGwiLCJ2YWwiLCJDb21wdXRlZFJlZkltcGwiLCJfcmVjb21wdXRlIiwiUHJveHlSZWZTeW1ib2wiLCJwcm94eU1hcCIsImNyZWF0ZVJlYWN0aXZlIiwiYWxsUmVhY3RpdmUiLCJyZWYiLCJNRVRBX1RZUEUiLCJtZXRhc01hcCIsIm1ldGFzIiwicmVhY3RpdmVDb21wb25lbnQiLCJpbnMiLCJjb21wIiwicHJvdG90eXBlIiwia2V5IiwiYWRkTWV0YSIsImNvbXB1dGVkIiwiYXV0b3J1biIsIlByb3h5UmVmSW1wbCIsIl9hbGxSZWFjdGl2ZSIsImdldE1ldGFLZXlzIiwiT2JqZWN0IiwiX2luaXRBdXRvcnVuIiwidmFsdWUiLCJfaW5pdFByb3h5IiwidGhhdCIsInJlZk1hcCIsInByb3h5IiwiZ2V0IiwibGVuIiwiY291bnQiLCJpIiwiZ2V0UmVmIiwiaXNQcm94eVJlZiIsInNldCIsIm1ldGEiLCJyZXN1bHQiLCJnZXR0ZXIiLCJuZXdWYWwiLCJkaXJlY3RpdmUiLCJmdW5jIiwiaXNEaXJlY3RpdmUiLCIkaWYiLCJjb25kIiwieWVzIiwibm8iLCJpbml0ZWQiLCJuZXdSZXN1bHQiLCJsYXN0UmVzdWx0IiwibGFzdEZyYWdtZW50IiwibmV3RnJhZ21lbnQiLCIkbWFwIiwicmF3TGlzdCIsIm1hcEZ1bmMiLCJrZXlGdW5jIiwibGlzdCIsImxpc3REYXRhIiwibGFzdFJlYWN0aXZlSXRlbXMiLCJjcmVhdGVSZWFjdGl2ZUl0ZW0iLCJmcmFnbWVudExpc3QiLCJtYXBGdW5jV3JhcCIsImtleUZ1bmNXcmFwIiwiY29uc29sZSIsImxhc3RGcmFnbWVudHMiLCJsYXN0S2V5cyIsIm5ld0xpc3QiLCJub3RyYWNrIiwibmV3S2V5cyIsImxhc3RJbmRleCIsInJlYWN0aXZlSXRlbSIsImZyb21JbmRleCIsInJlbW92ZWQiLCJodG1sIiwibmV3VmFsdWUiLCJsYXN0VmFsdWUiLCJpc0V2ZW50IiwiZXZlbnROYW1lIiwibGFzdFZhbHVlRXZlbnRIYW5kbGVyIiwic2V0QXR0ciIsImgiLCJ0eXBlIiwiY2hpbGRyZW4iLCJ0YWciLCJiaW5kQXR0ciIsInJlYWN0aXZlVmFsIiwidGV4dE5vZGUiLCJidWlsZENvbXBvbmVudCIsImZyYWciLCJEZW1vIiwibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImluYyIsImRvdWJsZUNvdW50IiwiRGlzcGxheSIsInB1c2giLCJhZGRUb2RvIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUN0QixNQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFSO0FBQ0FGLEdBQUMsQ0FBQ0csU0FBRixHQUFjSixLQUFkLENBRnNCLENBR3RCOztBQUNBLFNBQU9DLENBQUMsQ0FBQ0ksVUFBRixDQUFhQyxNQUFiLEtBQXdCLENBQXhCLEdBQTRCLEVBQTVCLEdBQWlDTCxDQUFDLENBQUNJLFVBQUYsQ0FBYSxDQUFiLEVBQWdCRSxTQUF4RDtBQUNEOztJQUVrQkMsTzs7Ozs7Ozs7O2tDQU1IQyxHLEVBQWtCO0FBQzVCQyxnQkFBVSxDQUFDLFlBQU07QUFDYjtBQUNBRCxXQUFHLENBQUNMLFNBQUosR0FBZ0JPLEtBQUssQ0FBQ0MsU0FBTixDQUFnQmIsVUFBVSxDQUFDVSxHQUFHLENBQUNMLFNBQUwsQ0FBMUIsRUFBMkNPLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsVUFBM0QsQ0FBaEI7QUFDSCxPQUhTLENBQVY7QUFJSDs7OzZCQUVRO0FBQ0wsVUFBTUMsU0FBUyxHQUFHLEtB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIGgsIGF1dG9ydW4gfSBmcm9tIFwicmVzZWVcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5cbmZ1bmN0aW9uIGh0bWxEZWNvZGUoaW5wdXQpe1xuICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlLmlubmVySFRNTCA9IGlucHV0O1xuICAgIC8vIGhhbmRsZSBjYXNlIG9mIGVtcHR5IGlucHV0XG4gICAgcmV0dXJuIGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgPyBcIlwiIDogZS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlYm94IHtcbiAgICBAcmVhY3RpdmUgcHJvcHM6IHtcbiAgICAgICAgY29kZTogc3RyaW5nLFxuICAgICAgICBjb21wb25lbnQ6IEZ1bmN0aW9uLFxuICAgIH1cbiAgICBcbiAgICBoYW5kbGVDb2RlUmVmKGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gUHJpc20uaGlnaGxpZ2h0KGh0bWxEZWNvZGUoZG9tLmlubmVySFRNTCksIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvZGVib3hcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHByZT48Y29kZSByZWY9e3RoaXMuaGFuZGxlQ29kZVJlZn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuY29kZX19PjwvY29kZT48L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW9cIj5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBoLFxufSBmcm9tICdyZXNlZSc7XG5cbmNsYXNzIExvZ28ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIiBcbiAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBYkFBQUFCc0NBTUFBQUE4R3hmNEFBQUFBWE5TUjBJQjJja3Nmd0FBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFjSlFURlJGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBODRRRzRnQUFBSlowVWs1VEFPbi9NV0J0b0NYeU9tcDRBYW91SjUrYUIzWlBCcGtvVFVrUlBBck5pUmhuRzMxUVFROUxLblJjaUZwM0V4QVVqQWtJbGJJRUF0R0FmdFUwTW1IS0EzdGpXQmJkYTJhcFJ0bElQUytkbDEzalVoY2VFbFY4eEpHbHVyQ0t3bkJYVVpPY2hsNVVMQjFUcDBNRmc0ZHlGV1VOdUwwT3Z4bEFPRVRrcnF6bEd1dTNiN1lNVG5tV05TUm9laDh0eDdTT2NZSUxqMlF6QS9wcHhRQUFCdHBKUkVGVWVKenRuZnQzRkRVVXg5TkljU212cFZwcHBkalNXb1ZDdFJiYVNzV3RnQUpGeGZxaUtpTGlDMFdrS0ZxdEwzeUJLT0RiLzllNTRYak83RFQ1Wm5aSU9MZTkrZjZXdlpPYjdQM01kbWVUbVcrVlNrcEtTa3BLU2twS1NtcEpiUnJwam9wWlY4R3NVTzJWSndzRnNxNnVuaFhVNTg0b2MxV3FCcnV1Z1gzZDZxZysyN1dWSnd1MXpwMTFmZldzb0Q0YnFtZHR5ck94WHQvVVdib0dwWUhkVmEvZm5XdXlCdFoxVDcyK09aYzFFTER1ZWowLzkxREFlcklYN3MyMXQvUWc5WllGdGxYciszTE5QcFMwdndORnQ0RlIwR1M3QndaQjlQNWNscUdzQkEvazJnK2k2V3pmZ2FMNStneHJ2VFhYN0VMOWR1NUNVUWdza0FyQVdLc0lMSkFLd0VJcEFVdkFTQWxZQWhaTkNaaEt3RlFDRms4aWdJMDhoT01SZ1kwOEhEaWhCR0RaZXh4OUJCMFFEZGpZYnEySHdxYVVBR3hiMW12UE9EZ2dGckNKOWVIL2hFc0FwaWF6Ym8rQ2VDeGdlN054cHdMbkZBSE1MTDgvNW81SEFyYVBobjA4Y0ZJUndNWm8zYlV4N1l6SEFUWk5IK3dhL1BLc0lCSEExQk4wcnU5M2h1TUFPMENEb3VYN1NwSUI3Q0RWcnVic0dRVlkxNU0wYU9pcmVpSEExQ1lxM2xPdWFCUmdoMmpJdzhIVENnRjJoS28zNDlxNGpRSnNpb1k4R2p5dEVHQmpaalAwYVVjMEJyQm5hTUEyOU91dm1vUUF1N21UL3F3akdBUFlNQTE0TEhSV09jQ2VNeWU4SXhnRDJDd04rSHpvckhLQXZXRCtKcjVvRDBZQTFtZkdleWx3VmlVSEdFSFIrbVZuTERRd21xbWVEWnlVSkFhWStSSWJ0Y2NpQUR0T3c4MEZUa29TQSt3VnF1Q3I5bGdFWUhVdzNDMUpETEMxVk1IWDdMRUl3RTdRY0s4SFRrb1NBOHlzMkUvYVl4R0FuYVRoM2dpY2xDUUcyRkZ3WFI4Qm1Gbm5PQlU0S1VrTXNDTzNGOWdNRGZkbTRLUWtNY0RNTCtjWmV5d0NzRGthN2xEZ3BDUXh3TXhGeDBsN0xOWkZ4OTdBU1VsaWdKMm1DcDZ3eHlJQWV5dlNVcUljWU9hVVAyMlBSUUQyTmpnL2JrbGlnSm1scVhlY3NkREEzcVhoWXBSQUNyQnhzeGo3bmowWUFkZ1pNNTduanVNcWtnSnNqU21nWXo4eDJ2YksrNkd6eWdFMlFQWDd3QkdNQWN3c0p0WkRaNVVEckVIMTYzRUVZd0E3U3dQVzBpMENGWUZ0TnVYNzBCR05BV3pDM09WVzFYbkNMU0hBemxIMVBuSkZvOXcxZFo2R0hBNmVWZ2F3Y2VOQ00rOEtSd0UyYno3VXBhMG55a29Hc0VFcTNuRm5PTTZ0MnVZamRpRjBWaG5BNkpLajlyRXpIQWRZRjYzWXowd0V6aW9DbUxsaU8rQ09SM3JjNkN5Nk1xMHFFY0ErMGZndTkxZ1A5TkVLOE1YQU9TVUFvL2M0aFI0MWpnV3NseFl3RDRiTnVieUJsZk5ML0ZUcnlUTW9iUUVZOWt0c1pRbCsvak90RjFxYnJFOUZZTmd2RWZrM05xa0F6T09YV0RickVtQWw3ZmMrN3htRGFRdkFzUDJlNDg0cmg3NVliSFd5SGhXQllmdTkwczhURm9CNTdQZUFmMk96TG1RSDkrWGFnZndTdjlUNnExd3pKTERnazZXZmQvMjVkaUJnWDJ2OVRhNFpDbGg3ZHZDM3VYWWd2OFJMV24rWGEwSy94SjROWmJNV0ZXYXk5SkRBOTdrMjlFdUUvbzFOK2tIclM3a205RXRzOG0vRVN0WkZ5L3lpbzRSK0xISHFKbUI4Z0EzbzJrL2VneEl3TnNCNnN3NXRYcmVuQkl3TnNIRzZOTHZzT3lvQll3UE1iSVI1OXpnU01EN0FGblRoZDR0TnJJQjV6QjFYT2pCMUplc3k2N20xZ2hNd243bmppZ2RtVnNVY3p6Yi9MMDdBZk9hT0t4NllPcHoxbWNScktaeUErY3dkVno2d24ra2p0Z2dQWVFYTVkrNjQ4b0dwaTlxM2pjZ0ttTWZjVVFDd1JYektLbWJBUE9hT0FvQ3RvMjhGNklQSEN4ZzJkeFFBVEoyaUNsd0ZCL0FDaHMwZEpRQWJweWRKcm9BRG1BR0Q1bzRTZ0tsZnFBSUw3amd6WU5EY1VRU3dYcnJ3T3VlT013TUd6UjFGQUZPLzB0ZTRlNWVGR3pCazdpZ0QyQWhWNEx3enpBMFlNbmVVQVV5TjBpbmI2WXB5QTRiTUhZVUF1MFlWV09XS3NnTUd6QjJGQURPUEhNKzQxbnZZQVFQbWpsS0FYYWNTdUc3SFlRY01tRHRLQWFiMlpGMXZPR0xzZ0FGelJ6SEF0b0Fmbyt5QUFYTkhNY0RVamF6dmIvWVFPMkRBM0ZFT3NHNHF3blZyaUIwd1lPNG9COWcwUFhLODJocGlCd3lZTzhvQmR2T2IvSm90d2c0WU1IY1VCS3lUSG9IODNSWmhCd3lZT3dvQ3B2NmdNb3hZQXV5QUFYTkhTY0NHYUpmRlpxL0NEUmd5ZDVRRVRQMUp1eXgvTFgyZEd6Qms3aWdLbUxuUnZtUHA2OXlBRGRBOEhlYU9vb0NwM1ZuLzJhVTNTM0FEaHN3ZFpRRzdhci9zWUFZTW1qdktBa2J1NUxOTE4xbVlBWVBtanNLQTliYi9iYkZ0NEFVTW16c0tBMllYTDJEWTNERUJVOXlBWVhQSEJFd3hBK1l4ZDB6QUZETmdIblBIQkV6eEF1WXpkMHpBVkl0K2laRlUxdHl4TmIvRVVrT1NXdk5MUkdxYTdlMEJodTMzSXFtc3VXTnJmb25saGxTdCtpVWlOYzFXQWpDUGxoZXdmWTNHWEhEcmZxV09OUnIvNUpyUUw3Ry9Bd1MzNzBEQlFaUzM3TnNhbTJzMC9zMjFvVjhpbkUvVGtQc2JqZnovRTRSK2lUdDNvV2hsQ2tsSlNTWDBIeklkSmpNVm45dlJBQUFBQUVsRlRrU3VRbUNDXCJcbiAgICAgICAgPlxuICAgICAgICA8L2ltZz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIH07XG59XG4iLCJpbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgcmVuZGVyLCAgaCwgcmVhY3RpdmUgfSBmcm9tICdyZXNlZSc7XG5cbmltcG9ydCBEb2NHZXRTdGFydGVkIGZyb20gJy4vZG9jL2dldC1zdGFydGVkLm1kJztcblxuY2xhc3MgQXBwIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RG9jR2V0U3RhcnRlZC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJjb25zdCB0YXNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcbmxldCB0aW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlKHRhc2s6IEZ1bmN0aW9uKSB7XG4gIHRhc2tzLmFkZCh0YXNrKTtcbiAgaWYgKCF0aW1lcikge1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBjb25zdCB0YXNrSXRlbXMgPSBBcnJheS5mcm9tKHRhc2tzLnZhbHVlcygpKTtcbiAgICAgIHRhc2tzLmNsZWFyKCk7XG4gICAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrSXRlbSA9PiB7XG4gICAgICAgIHRhc2tJdGVtKCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluc2VydDxUPihhcnJheTogQXJyYXk8VD4sIGluZGV4OiBudW1iZXIsIGl0ZW06IFQpIHtcbiAgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGVzKG5vZGVzOiBOb2RlW10pIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZXNbMF0ucGFyZW50Tm9kZTtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBjb25zdCBzdGFydFBvcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50Py5jaGlsZE5vZGVzLCBub2Rlc1swXSk7XG4gIHJhbmdlLnNldFN0YXJ0KHBhcmVudCEsIHN0YXJ0UG9zKTtcbiAgcmFuZ2Uuc2V0RW5kKHBhcmVudCEsIHN0YXJ0UG9zICsgbm9kZXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVJdGVtIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaW5zZXJ0IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudCB7XG4gIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb250YWluZXI/OiBOb2RlO1xuICBjaGlsZE5vZGVzOiBOb2RlW10gPSBbXTtcbiAga2V5PzogbnVtYmVyIHwgc3RyaW5nO1xuICByZWFjdGl2ZUl0ZW0/OiBSZWFjdGl2ZUl0ZW08YW55PjtcblxuICBzdGF0aWMgaXNGcmFnbWVudChvYmo6IHVua25vd24pIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IChvYmogYXMgT2JqZWN0KS5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT09IEZyYWdtZW50IHx8IGNvbnN0cnVjdG9yID09PSBGcmFnbWVudExpc3Q7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZDogTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZCBhcyBOb2RlO1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICB9XG5cbiAgcmVwbGFjZVdpdGgoZnJhZ21lbnQ6IEZyYWdtZW50KSB7XG4gICAgZnJhZ21lbnQuY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICByYW5nZS5pbnNlcnROb2RlKGZyYWdtZW50LmZyYWdtZW50KTtcbiAgICByYW5nZS5kZXRhY2goKTtcbiAgfVxuXG4gIGNyZWF0ZUVtcHR5KCkge1xuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VtcHR5JykpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZVRvQ29udGFpbmVyKGNvbnRhaW5lcjogTm9kZSwgYmVmb3JlTm9kZTogTm9kZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIC8vIGhhcyBhIGNvbnRhaW5lciBhbHJlYWR5XG4gICAgICAvLyByZW1vdmUgc2VsZiBmcm9tIGN1cnJlbnQgY29udGFpbmVyIGZpcnN0XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmZyYWdtZW50LCBiZWZvcmVOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJhbmdlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuY2hpbGROb2Rlc1swXS5wYXJlbnROb2RlITtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKFxuICAgICAgcGFyZW50Py5jaGlsZE5vZGVzLFxuICAgICAgdGhpcy5jaGlsZE5vZGVzWzBdXG4gICAgKTtcbiAgICByYW5nZS5zZXRTdGFydChwYXJlbnQsIHN0YXJ0UG9zKTtcbiAgICByYW5nZS5zZXRFbmQocGFyZW50LCBzdGFydFBvcyArIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfVxuXG4gIGdldEZpcnN0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudExpc3QgZXh0ZW5kcyBGcmFnbWVudCB7XG4gIGNoaWxkRnJhZ21lbnRzOiBGcmFnbWVudFtdID0gW107XG5cbiAgYXBwZW5kRnJhZ21lbnQoY2hpbGQ6IEZyYWdtZW50LCBrZXk6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNoaWxkLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZnJhZ21lbnQpO1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMucHVzaChjaGlsZCk7XG4gICAgY2hpbGQua2V5ID0ga2V5O1xuICB9XG5cbiAgaW5zZXJ0KGluZGV4OiBudW1iZXIsIGZyYWdtZW50OiBGcmFnbWVudCwgbmV3S2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBmcmFnbWVudC5rZXkgPSBuZXdLZXk7XG4gICAgZnJhZ21lbnQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIoXG4gICAgICB0aGlzLmNvbnRhaW5lciEsXG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzW2luZGV4XT8uZ2V0Rmlyc3ROb2RlKCkgfHwgbnVsbFxuICAgICk7XG4gICAgaW5zZXJ0KHRoaXMuY2hpbGRGcmFnbWVudHMsIGluZGV4LCBmcmFnbWVudCk7XG4gIH1cblxuICByZW1vdmVXaXRoS2V5cyhrZXlzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoY2hpbGQua2V5ISkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gY2hpbGQ7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gZnJhZ21lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICAgICAgcmFuZ2UuZGV0YWNoKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGluc2VydEJlZm9yZSA9IHRoaXMuY2hpbGRGcmFnbWVudHNbdG9JbmRleF07XG5cbiAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTogTm9kZSB8IG51bGwgPSBpbnNlcnRCZWZvcmU/LmdldEZpcnN0Tm9kZSgpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jaGlsZEZyYWdtZW50c1tmcm9tSW5kZXhdITtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIodGhpcy5jb250YWluZXIhLCBpbnNlcnRCZWZvcmVOb2RlKTtcblxuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCB0b0luZGV4LCB0YXJnZXQpO1xuICAgIGxldCBkZWxldGVJbmRleCA9IGZyb21JbmRleDtcbiAgICBpZiAodG9JbmRleCA8IGZyb21JbmRleCkge1xuICAgICAgZGVsZXRlSW5kZXggKz0gMTtcbiAgICB9XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5jb25zdCBSZWZTeW1ib2wgPSBTeW1ib2woJ3JlZicpO1xuY29uc3QgSW50ZXJuYWxSYXdTeW1ib2wgPSBTeW1ib2woJ2ludGVybmFsX3JhdycpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWY8VD4ocjogUmVmPFQ+IHwgdW5rbm93bik6IHIgaXMgUmVmPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmKHI6IGFueSk6IHIgaXMgUmVmIHtcbiAgcmV0dXJuIHIgJiYgKHIgYXMgUmVmKVtSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWY8VD4ocmVmOiBUKTogVCBleHRlbmRzIFJlZjxpbmZlciBWPiA/IFYgOiBUIHtcbiAgcmV0dXJuIGlzUmVmKHJlZikgPyAocmVmLnZhbHVlIGFzIGFueSkgOiByZWY7XG59XG5cbnR5cGUgS2V5ID0gc3RyaW5nIHwgc3ltYm9sIHwgbnVtYmVyO1xuXG5sZXQgaGlkZVJlZk1vZGUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBGbkhpZGVSZWZNb2RlPFQgZXh0ZW5kcyBGdW5jdGlvbj4oZm46IFQpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgIGhpZGVSZWZNb2RlID0gdHJ1ZTtcbiAgICBjb25zdCByID0gZm4oLi4uYXJncyk7XG4gICAgaGlkZVJlZk1vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4gcjtcbiAgfSBhcyB1bmtub3duKSBhcyBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuSW5SZWZNb2RlKGNiOiBGdW5jdGlvbikge1xuICBsZXQgdGVtcCA9IGhpZGVSZWZNb2RlO1xuICBoaWRlUmVmTW9kZSA9IGZhbHNlO1xuICBjb25zdCByID0gY2IoKTtcbiAgaGlkZVJlZk1vZGUgPSB0ZW1wO1xuICByZXR1cm4gcjtcbn1cblxuY29uc3QgcHJveHlPYmpNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE9iamVjdD4oKTtcblxuY2xhc3MgRGVwc01hbmFnZXIge1xuICBwcml2YXRlIF9jb2xsZWN0aW5nOiBUcmlnZ2VyYWJsZVJlZltdID0gW107XG4gIHByaXZhdGUgX2RlcHMgPSBuZXcgV2Vha01hcDxSZWYsIFNldDxUcmlnZ2VyYWJsZVJlZj4+KCk7XG5cbiAgcHJpdmF0ZSBfYWRkRGVwKHRhcmdldDogUmVmLCB0cmlnZ2VyOiBUcmlnZ2VyYWJsZVJlZikge1xuICAgIGlmICghdGhpcy5fZGVwcy5oYXModGFyZ2V0KSkge1xuICAgICAgdGhpcy5fZGVwcy5zZXQodGFyZ2V0LCBuZXcgU2V0KCkpO1xuICAgIH1cbiAgICB0aGlzLl9kZXBzLmdldCh0YXJnZXQpIS5hZGQodHJpZ2dlcik7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXBzKHRhcmdldDogUmVmKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fZGVwcy5nZXQodGFyZ2V0KT8udmFsdWVzKCkgfHwgW10pO1xuICB9XG5cbiAgYmVnaW5Db2xsZWN0KHJlZjogVHJpZ2dlcmFibGVSZWYpIHtcbiAgICB0aGlzLl9jb2xsZWN0aW5nLnB1c2gocmVmKTtcbiAgfVxuXG4gIGVuZENvbGxlY3QoKSB7XG4gICAgdGhpcy5fY29sbGVjdGluZy5wb3AoKTtcbiAgfVxuXG4gIHRyYWNrKHRhcmdldDogUmVmKSB7XG4gICAgaWYgKHRoaXMuX2NvbGxlY3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWRkRGVwKHRhcmdldCwgdGhpcy5fY29sbGVjdGluZ1t0aGlzLl9jb2xsZWN0aW5nLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyKHRhcmdldDogUmVmKSB7XG4gICAgY29uc3QgZGVwcyA9IHRoaXMuX2dldERlcHModGFyZ2V0KTtcbiAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC50cmlnZ2VyKCkpO1xuICB9XG59XG5cbmNvbnN0IGRlcHNNYW5hZ2VyID0gbmV3IERlcHNNYW5hZ2VyKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVmPFQgPSBhbnk+IHtcbiAgW1JlZlN5bWJvbF06IGJvb2xlYW47XG4gIHZhbHVlOiBUO1xufVxuXG5pbnRlcmZhY2UgVHJpZ2dlcmFibGVSZWY8VCA9IGFueT4ge1xuICBbUmVmU3ltYm9sXTogYm9vbGVhbjtcbiAgdmFsdWU6IFQ7XG4gIHRyaWdnZXI6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYXcocmVmOiBSZWYpIHtcbiAgaWYgKGlzUHJveHlSZWYocmVmKSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gcmVmW0ludGVybmFsUmF3U3ltYm9sXTtcbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZWYuX3ZhbHVlO1xufVxuXG5leHBvcnQgdHlwZSBOb1RyYWNrRm4gPSAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQ7XG5cbmNsYXNzIEF1dG9ydW5SZWZJbXBsIHtcbiAgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICB2YWx1ZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm46IChub3RyYWNrRm46IE5vVHJhY2tGbikgPT4gdm9pZCkge1xuICAgIHRoaXMuX3J1bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcnVuKCkge1xuICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcEZuSGlkZVJlZk1vZGUodGhpcy5fZm4pLmNhbGwodGhpcywgKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAvLyBubyB0cmFjayBmblxuICAgICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICAgICAgZm4oKTtcbiAgICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICB9KTtcbiAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuX3J1bigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdXRvcnVuKGZuOiAobm90cmFja0ZuOiBOb1RyYWNrRm4pID0+IHZvaWQpIHtcbiAgcmV0dXJuIG5ldyBBdXRvcnVuUmVmSW1wbChmbik7XG59XG5cbmNsYXNzIFJlZkltcGw8VCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZhbHVlOiBUKSB7fVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsOiBUKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQ29tcHV0ZWRSZWZJbXBsPFQgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWUhOiBUO1xuICBwcml2YXRlIF9jb21wdXRlOiAoKSA9PiBUO1xuXG4gIGNvbnN0cnVjdG9yKGdldHRlcjogKCkgPT4gVCkge1xuICAgIHRoaXMuX2NvbXB1dGUgPSBnZXR0ZXI7XG4gIH1cblxuICBwcml2YXRlIF9yZWNvbXB1dGUoKSB7XG4gICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fY29tcHV0ZSgpO1xuICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLl9yZWNvbXB1dGUoKTtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICB0aGlzLl9yZWNvbXB1dGUoKTtcbiAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IFByb3h5UmVmU3ltYm9sID0gU3ltYm9sKCdwcm94eS1yZWYnKTtcblxuZnVuY3Rpb24gaXNQcm94eVJlZih0YXJnZXQ6IHVua25vd24pIHtcbiAgcmV0dXJuIHRhcmdldCAmJiAodGFyZ2V0IGFzIFByb3h5UmVmSW1wbDxhbnk+KVtQcm94eVJlZlN5bWJvbF0gPT09IHRydWU7XG59XG5cbmNvbnN0IHByb3h5TWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBPYmplY3Q+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4ob2JqOiBULCBhbGxSZWFjdGl2ZSA9IGZhbHNlKTogVCB7XG4gIGNvbnN0IHJlZiA9IG5ldyBQcm94eVJlZkltcGwob2JqLCBhbGxSZWFjdGl2ZSk7XG4gIHJldHVybiByZWYudmFsdWU7XG59XG5cbmVudW0gTUVUQV9UWVBFIHtcbiAgcmVhY3RpdmUsXG4gIGNvbXB1dGVkLFxuICBhdXRvcnVuLFxufTtcblxuLy8gbWFwIE9iamVjdC5wcm90b3R5cGUgdG8gaXRzIHJlYWN0aXZlIGtleXNcbmxldCBtZXRhc01hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgTWFwPEtleSwgTUVUQV9UWVBFPj4oKTtcblxuZnVuY3Rpb24gYWRkTWV0YShwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXksIHR5cGU6IE1FVEFfVFlQRSkge1xuICBpZiAoIW1ldGFzTWFwLmhhcyhwcm90b3R5cGUpKSB7XG4gICAgbWV0YXNNYXAuc2V0KHByb3RvdHlwZSwgbmV3IE1hcCgpKTtcbiAgfVxuICBjb25zdCBtZXRhcyA9IG1ldGFzTWFwLmdldChwcm90b3R5cGUpO1xuICBtZXRhcyEuc2V0KGtleSwgdHlwZSk7XG59XG5cbmZ1bmN0aW9uIGdldE1ldGFLZXlzKHByb3RvdHlwZTogT2JqZWN0KSB7XG4gIHJldHVybiBtZXRhc01hcC5nZXQocHJvdG90eXBlKTtcbn1cblxuaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gIHJlbmRlcigpOiBGcmFnbWVudDtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZUNvbXBvbmVudChjb21wb25lbnQ6IG5ldyAoKSA9PiBGcmFnbWVudCwgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIGNvbnN0IGlucyA9IG5ldyBjb21wb25lbnQoKTtcbiAgLy8gQHRzLWlnbm9yZVxuICBpbnMucHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgY29uc3QgY29tcCA9IGNyZWF0ZVJlYWN0aXZlKGlucykgYXMgYW55IGFzIENvbXBvbmVudDtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbi8qKlxuICogQHJlYWN0aXZlIGRlY29yYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZShwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLnJlYWN0aXZlKTtcbn1cblxuLyoqXG4gKiBAY29tcHV0ZWQgZGVjb3JhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHByb3RvdHlwZTogT2JqZWN0LCBrZXk6IEtleSkge1xuICBhZGRNZXRhKHByb3RvdHlwZSwga2V5LCBNRVRBX1RZUEUuY29tcHV0ZWQpO1xufVxuXG4vKipcbiAqIEBjb21wdXRlZCBkZWNvcmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0b3J1bihwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLmF1dG9ydW4pO1xufVxuXG5jbGFzcyBQcm94eVJlZkltcGw8VCBleHRlbmRzIG9iamVjdCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICBwdWJsaWMgW1Byb3h5UmVmU3ltYm9sXSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfcHJveHk6IFQ7XG4gIHByaXZhdGUgX21ldGFLZXlzPzogTWFwPEtleSwgTUVUQV9UWVBFPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmo6IFQsIHByaXZhdGUgX2FsbFJlYWN0aXZlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9tZXRhS2V5cyA9IGdldE1ldGFLZXlzKE9iamVjdC5nZXRQcm90b3R5cGVPZihfb2JqKSk7XG4gICAgdGhpcy5fcHJveHkgPSB0aGlzLl9pbml0UHJveHkoX29iaik7XG4gICAgdGhpcy5faW5pdEF1dG9ydW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRBdXRvcnVuKCkge1xuICAgIGlmICghdGhpcy5fbWV0YUtleXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWV0YUtleXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSBNRVRBX1RZUEUuYXV0b3J1bikge1xuICAgICAgICBjcmVhdGVBdXRvcnVuKCgodGhpcy5fb2JqIGFzIGFueSlba2V5XS5iaW5kKHRoaXMuX3Byb3h5KSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFByb3h5KG9iajogVCk6IFQge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmIChwcm94eU1hcC5oYXMob2JqKSkge1xuICAgICAgcmV0dXJuIHByb3h5TWFwLmdldChvYmopIGFzIFQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVmTWFwID0gbmV3IE1hcDxLZXksIFJlZj4oKTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0KF8sIGtleSkge1xuICAgICAgICBkZXBzTWFuYWdlci50cmFjayh0aGF0KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2xlbmd0aCcpIHJldHVybiBvYmoubGVuZ3RoO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdtYXAnKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1hcChcbiAgICAgICAgICAgICAgY2I6IChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IGFueSxcbiAgICAgICAgICAgICAgdGhpc0FyZz86IGFueVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmoubWFwKChfaXRlbTogYW55LCBfaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYigocHJveHkgYXMgYW55KVtfaW5kZXhdLCBfaW5kZXgpO1xuICAgICAgICAgICAgICB9LCB0aGlzQXJnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBbJ3B1c2gnLCAncG9wJywgJ3NoaWZ0JywgJ3Vuc2hpZnQnLCAnc3BsaWNlJ10uaW5kZXhPZihcbiAgICAgICAgICAgICAga2V5IGFzIHN0cmluZ1xuICAgICAgICAgICAgKSAhPT0gLTFcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3BvcCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvYmoubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUobGVuIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3BsaWNlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpID49IGluZGV4ICYmIGkgPCBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+PSBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5zZXQoJycgKyAoaSAtIGNvdW50KSwgcmVmTWFwLmdldCgnJyArIGkpISk7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb2JqW2tleSBhcyBhbnldKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoYXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IFN5bWJvbC5zcGVjaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVmID0gZ2V0UmVmKGtleSk7XG4gICAgICAgIGlmIChpc1Byb3h5UmVmKHJlZikpIHtcbiAgICAgICAgICByZXR1cm4gcmVmLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaWRlUmVmTW9kZSAmJiBpc1JlZihyZWYpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0UmVmKGtleSk7XG4gICAgICB9LFxuICAgICAgc2V0KF8sIGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVmID0gZ2V0UmVmKGtleSk7XG4gICAgICAgIGlmIChpc1JlZihyZWYpKSB7XG4gICAgICAgICAgLy8gaWYgb3JpZ2luIHJlZiBpcyBub3QgcHJveHlSZWZcbiAgICAgICAgICAvLyBidXQgdmFsdWUgaXMgYSBvYmplY3RcbiAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAocmVmIGFzIFByb3h5UmVmSW1wbClbUHJveHlSZWZTeW1ib2xdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZWZNYXAuc2V0KGtleSwgbmV3IFByb3h5UmVmSW1wbCh2YWx1ZSwgdHJ1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICh0aGF0Ll9vYmogYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0UmVmID0gKGtleTogS2V5KTogUmVmID0+IHtcbiAgICAgIGlmIChyZWZNYXAuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHJlZk1hcC5nZXQoa2V5KSE7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5fb2JqKTtcbiAgICAgIGlmICghdGhpcy5fbWV0YUtleXMgJiYgIXRoaXMuX2FsbFJlYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fb2JqIGFzIGFueSlba2V5XTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9tZXRhS2V5cz8uZ2V0KGtleSk7XG4gICAgICBsZXQgcmVzdWx0ITogUmVmO1xuXG4gICAgICBpZiAodGhpcy5fYWxsUmVhY3RpdmUgfHwgbWV0YSA9PT0gTUVUQV9UWVBFLnJlYWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKG9iaiBhcyBhbnkpW2tleV07XG4gICAgICAgIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gcmVhY3RpdmUgb2JqZWN0XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFByb3h5UmVmSW1wbChjcmVhdGVSZWFjdGl2ZSh2YWx1ZSwgdGhpcy5fYWxsUmVhY3RpdmUpLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZWZJbXBsKHdyYXBGbkhpZGVSZWZNb2RlKHZhbHVlLmJpbmQodGhpcy5fcHJveHkpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVmXG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFJlZkltcGwodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1ldGEgPT09IE1FVEFfVFlQRS5jb21wdXRlZCkge1xuICAgICAgICBjb25zdCBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwga2V5KSEuZ2V0ITtcbiAgICAgICAgcmVzdWx0ID0gbmV3IENvbXB1dGVkUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZShnZXR0ZXIuYmluZCh0aGlzLl9wcm94eSkpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZWZNYXAuc2V0KGtleSwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHIgPSAodGhpcyBhcyBhbnkpLl9vYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gci5iaW5kKHRoaXMuX3Byb3h5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHByb3h5TWFwLnNldChvYmosIHByb3h5KTtcbiAgICBwcm94eU9iak1hcC5zZXQocHJveHksIG9iaik7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICBPYmplY3Qua2V5cyhuZXdWYWwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICh0aGlzLl9wcm94eSBhcyBhbnkpW2tleV0gPSAobmV3VmFsIGFzIGFueSlba2V5XTtcbiAgICB9KTtcbiAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm46ICgpID0+IHZvaWQpIHtcbiAgd3JhcEZuSGlkZVJlZk1vZGUoZm4pKCk7XG59XG4iLCJpbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gJy4vYmF0Y2hlcic7XG5pbXBvcnQgeyBGcmFnbWVudCwgRnJhZ21lbnRMaXN0IH0gZnJvbSAnLi9mcmFnbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVBdXRvcnVuLCBjcmVhdGVSZWFjdGl2ZSwgUmVmLCB3cmFwRm5IaWRlUmVmTW9kZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlPFQgZXh0ZW5kcyAoKSA9PiBGcmFnbWVudD4oZnVuYzogVCkge1xuICAvLyBAdHMtaWdub3JlXG4gIGZ1bmMuX19pc2RpcmVjdGl2ZV9fID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdGl2ZSh2YWw6IGFueSkge1xuICByZXR1cm4gdmFsPy5fX2lzZGlyZWN0aXZlX18gPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkaWYoXG4gIGNvbmQ6ICgpID0+IGJvb2xlYW4sXG4gIHllczogKCkgPT4gRnJhZ21lbnQsXG4gIG5vOiAoKSA9PiBGcmFnbWVudFxuKSB7XG4gIHJldHVybiBkaXJlY3RpdmUoKCkgPT4ge1xuICAgIGxldCBsYXN0UmVzdWx0OiBib29sZWFuO1xuICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdEZyYWdtZW50OiBGcmFnbWVudDtcblxuICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgY29uc3QgbmV3UmVzdWx0ID0gY29uZCgpO1xuICAgICAgaWYgKCFpbml0ZWQpIHtcbiAgICAgICAgbGFzdFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICAgICAgbGFzdEZyYWdtZW50ID0gbGFzdFJlc3VsdCEgPyB5ZXMoKSA6IG5vKCk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RnJhZ21lbnQgPSBuZXdSZXN1bHQgPyB5ZXMoKSA6IG5vKCk7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGxhc3RGcmFnbWVudC5yZXBsYWNlV2l0aChuZXdGcmFnbWVudCk7XG4gICAgICAgIGxhc3RGcmFnbWVudCA9IG5ld0ZyYWdtZW50O1xuICAgICAgfSk7XG4gICAgICBsYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RGcmFnbWVudCE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZUl0ZW08VD4odmFsdWU6IFQsIGluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlKHtcbiAgICB2YWx1ZSxcbiAgICBpbmRleCxcbiAgfSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0aXZlSXRlbTxUPiA9IHtcbiAgdmFsdWU6IFQ7XG4gIGluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gJG1hcDxUPihcbiAgcmF3TGlzdDogVFtdLFxuICBtYXBGdW5jOiAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiBGcmFnbWVudCxcbiAga2V5RnVuYzogKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4gc3RyaW5nIHwgbnVtYmVyXG4pIHtcbiAgY29uc3QgbGlzdCA9IChyYXdMaXN0IGFzIGFueSkgYXMgUmVmO1xuICBjb25zdCBsaXN0RGF0YSA9IChsaXN0IGFzIGFueSkgYXMgVFtdO1xuXG4gIGxldCBsYXN0UmVhY3RpdmVJdGVtcyA9IGxpc3REYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVJdGVtKGl0ZW0sIGluZGV4KTtcbiAgfSk7XG5cbiAgY29uc3QgZnJhZ21lbnRMaXN0ID0gbmV3IEZyYWdtZW50TGlzdCgpO1xuXG4gIGNvbnN0IG1hcEZ1bmNXcmFwID0gd3JhcEZuSGlkZVJlZk1vZGUoKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbWFwRnVuYyhpdGVtKTtcbiAgICBmcmFnbWVudC5yZWFjdGl2ZUl0ZW0gPSBpdGVtO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSk7XG5cbiAgY29uc3Qga2V5RnVuY1dyYXAgPSB3cmFwRm5IaWRlUmVmTW9kZSgoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgY29uc3QgciA9IGtleUZ1bmMoaXRlbSk7XG4gICAgaWYgKHR5cGVvZiByICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoXG4gICAgICAgICdrZXkgb2YgJG1hcCBzaG91bGQgcmV0dXJuIHN0cmluZyBvciBudW1iZXIsIGJ1dCBnb3QgJyArIHIsXG4gICAgICAgIGtleUZ1bmMudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH0pO1xuXG4gIGxldCBsYXN0RnJhZ21lbnRzID0gbGlzdERhdGEubWFwKChfLCBpbmRleCkgPT5cbiAgICBtYXBGdW5jV3JhcChsYXN0UmVhY3RpdmVJdGVtc1tpbmRleF0pXG4gICk7XG4gIGxldCBsYXN0S2V5cyA9IGxpc3REYXRhLm1hcCgoXywgaW5kZXgpID0+XG4gICAga2V5RnVuY1dyYXAobGFzdFJlYWN0aXZlSXRlbXNbaW5kZXhdKVxuICApO1xuXG4gIGxhc3RGcmFnbWVudHMuZm9yRWFjaCgoZnJhZywgaW5kZXgpID0+IHtcbiAgICBmcmFnbWVudExpc3QuYXBwZW5kRnJhZ21lbnQoZnJhZywgbGFzdEtleXNbaW5kZXhdKTtcbiAgfSk7XG5cbiAgbGV0IGluaXRlZCA9IGZhbHNlO1xuXG4gIGNyZWF0ZUF1dG9ydW4obm90cmFjayA9PiB7XG4gICAgaWYgKCFpbml0ZWQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRlZCA9IGxpc3QubGVuZ3RoO1xuICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ID0gKGxpc3QgYXMgdW5rbm93bikgYXMgYW55W107XG5cbiAgICBub3RyYWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0tleXMgPSBuZXdMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgIGtleUZ1bmNXcmFwKGNyZWF0ZVJlYWN0aXZlSXRlbShpdGVtLCBpbmRleCkpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsYXN0S2V5cyA9IGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5tYXAoaXRlbSA9PiBpdGVtLmtleSEpO1xuXG4gICAgICAvLyBkaWZmIGFuZCBwYXRjaCBmcm9tIGtleXNcbiAgICAgIG5ld0tleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0S2V5cyA9IGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5tYXAoaXRlbSA9PiBpdGVtLmtleSEpO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsYXN0S2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgLy8gaW5zZXJ0XG4gICAgICAgICAgLy8gY2FuIG5vdCBmaW5kIGluIG9sZCBsaXN0LCBtZWFuIGluc2VydFxuICAgICAgICAgIC8vIGluc2VydCB0byBjdXJyZW50IGluZGV4XG4gICAgICAgICAgY29uc3QgcmVhY3RpdmVJdGVtID0gY3JlYXRlUmVhY3RpdmVJdGVtKG5ld0xpc3RbaW5kZXhdLCBpbmRleCk7XG5cbiAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IG1hcEZ1bmNXcmFwKHJlYWN0aXZlSXRlbSk7XG5cbiAgICAgICAgICBmcmFnbWVudExpc3QuaW5zZXJ0KGluZGV4LCBmcmFnbWVudCwga2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgLy8gbW92ZVxuXG4gICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleDtcblxuICAgICAgICAgIGZyYWdtZW50TGlzdC5tb3ZlKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZW1vdmVkID0gbGFzdEtleXMuZmlsdGVyKGtleSA9PiBuZXdLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpO1xuICAgICAgZnJhZ21lbnRMaXN0LnJlbW92ZVdpdGhLZXlzKHJlbW92ZWQpO1xuXG4gICAgICAvLyBhcHBseSBuZXcgcmVhY3RpdmVJbmRleFxuICAgICAgZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLmZvckVhY2goXG4gICAgICAgIChjaGlsZCwgaW5kZXgpID0+IChjaGlsZCEucmVhY3RpdmVJdGVtIS5pbmRleCA9IGluZGV4KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50TGlzdDtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlQXV0b3J1biwgaXNSZWYsIHJlYWN0aXZlQ29tcG9uZW50LCBSZWYsIHJ1bkluUmVmTW9kZSwgd3JhcEZuSGlkZVJlZk1vZGUgfSBmcm9tICcuL3JlYWN0aXZlJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudCc7XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50KFxuICBjb21wOiAocHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiBGcmFnbWVudCxcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0aXZlQ29tcG9uZW50KGNvbXAgYXMgYW55LCBwcm9wcyk7XG4gIGxldCBmcmFnbWVudDogRnJhZ21lbnQ7XG4gIHJ1bkluUmVmTW9kZSgoKSA9PiB7XG4gICAgZnJhZ21lbnQgPSBjb21wb25lbnQucmVuZGVyKCk7XG4gIH0pO1xuICByZXR1cm4gZnJhZ21lbnQhO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyKG5vZGU6IEhUTUxFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICBpZiAoa2V5ID09PSAndmFsdWUnKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgY29uc29sZS5lcnJvcignc2hvdWxkIGJlIGNsYXNzTmFtZSwgYnV0IGdvdCBjbGFzcycpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdjbGFzc05hbWUnKSB7XG4gICAga2V5ID0gJ2NsYXNzJztcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcbiAgICBjb25zdCBodG1sID0gdmFsdWUuX19odG1sO1xuICAgIGlmIChpc1JlZihodG1sKSkge1xuICAgICAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaHRtbC52YWx1ZTtcbiAgICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBub2RlLmlubmVySFRNTCA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdyZWYnKSB7XG4gICAgLy8gdmFsdWUgc2hvdWxkIGJlIGEgKHJlZikgPT4gdm9pZFxuICAgIHZhbHVlKG5vZGUpO1xuICAgIHJldHVybjtcbiAgfVxuICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gYmluZEF0dHIobm9kZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogUmVmPGFueT4pIHtcbiAgbGV0IGxhc3RWYWx1ZSA9IHZhbHVlLnZhbHVlO1xuXG4gIGNvbnN0IGlzRXZlbnQgPSAvXm9uW0EtWl0vLnRlc3Qoa2V5KTtcbiAgY29uc3QgZXZlbnROYW1lID0gaXNFdmVudCA/IGtleS5yZXBsYWNlKC9eb24vLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKSA6ICcnO1xuICBsZXQgbGFzdFZhbHVlRXZlbnRIYW5kbGVyID0gaXNFdmVudCA/IHdyYXBGbkhpZGVSZWZNb2RlKGxhc3RWYWx1ZSkgOiAoKSA9PiB7fTtcblxuICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEF0dHIobm9kZSwga2V5LCBsYXN0VmFsdWUpO1xuICB9KTtcblxuICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgIGxhc3RWYWx1ZUV2ZW50SGFuZGxlciA9IHdyYXBGbkhpZGVSZWZNb2RlKGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldEF0dHIobm9kZSwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSk7XG4gICAgbGFzdFZhbHVlID0gbmV3VmFsdWU7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaChcbiAgdHlwZTogc3RyaW5nIHwgRnVuY3Rpb24sXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAuLi5jaGlsZHJlbjogc3RyaW5nW11cbikge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBGcmFnbWVudCgpO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAvXm9uW0EtWl0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgd3JhcEZuSGlkZVJlZk1vZGUodmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWYodmFsdWUpKSB7XG4gICAgICAgICAgYmluZEF0dHIodGFnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0QXR0cih0YWcsIGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlZihjaGlsZCkpIHtcbiAgICAgICAgICBjb25zdCByZWFjdGl2ZVZhbCA9IGNoaWxkIGFzIFJlZjxhbnk+O1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHJlYWN0aXZlVmFsLnZhbHVlO1xuXG4gICAgICAgICAgLy8gdGV4dG5vZGVcbiAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnICsgdmFsKTtcbiAgICAgICAgICBjcmVhdGVBdXRvcnVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVhY3RpdmVWYWwudmFsdWU7XG4gICAgICAgICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGFnLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RpcmVjdGl2ZShjaGlsZCkpIHtcbiAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBjaGlsZCBhcyAoKSA9PiBGcmFnbWVudDtcbiAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRpcmVjdGl2ZSgpO1xuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZFRvQ29udGFpbmVyKHRhZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoRnJhZ21lbnQuaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAoY2hpbGQgYXMgRnJhZ21lbnQpLmFwcGVuZFRvQ29udGFpbmVyKHRhZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFnLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRhZyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBjb21wb25lbnRcbiAgICByZXR1cm4gYnVpbGRDb21wb25lbnQodHlwZSBhcyAoKSA9PiBGcmFnbWVudCwge1xuICAgICAgLi4ucHJvcHMsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNSZWYodHlwZSkpIHtcbiAgICAvLyByZWFjdGl2ZSBjb21wb25lbnRcbiAgICBjb25zdCBjb21wID0gdHlwZSBhcyBSZWY7XG4gICAgbGV0IGZyYWc6IEZyYWdtZW50O1xuICAgIGNyZWF0ZUF1dG9ydW4oKG5vdHJhY2spID0+IHtcbiAgICAgIGlmICghZnJhZykge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wLnZhbHVlO1xuICAgICAgICBub3RyYWNrKCgpID0+IHtcbiAgICAgICAgICBmcmFnID0gYnVpbGRDb21wb25lbnQoY29tcG9uZW50LCB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPOiByZXBsYWNlXG4gICAgICAgIC8vIGZyYWcucmVwbGFjZVdpdGgoYnVpbGRDb21wb25lbnQoY29tcC52YWx1ZSwge1xuICAgICAgICAvLyAgIC4uLnByb3BzLFxuICAgICAgICAvLyAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgLy8gfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmcmFnITtcbiAgfVxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoZnJhZ21lbnQ6IEZyYWdtZW50LCBjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gIGZyYWdtZW50LmFwcGVuZFRvQ29udGFpbmVyKGNvbnRhaW5lcik7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgbmFtZXNwYWNlIEpTWCB7XG4gICAgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzIHtcbiAgICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XG4gICAgfVxuICB9XG59XG4iLCJcbiAgICBpbXBvcnQgeyBoLCByZWFjdGl2ZSwgY29tcHV0ZWQsIGF1dG9ydW4sICRpZiwgJG1hcCB9IGZyb20gJ3Jlc2VlJztcbiAgICBpbXBvcnQgQ29kZUJveCBmcm9tICcvaG9tZS9ydW5uZXIvd29yay9yZXNlZS9yZXNlZS9wYWNrYWdlcy9yZXNlZS1zaXRlL2hlbHBlci9jb2RlLWJveCdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+PGgxIGlkPVwiZ2V0dGluZy1zdGFydGVkXCI+R2V0dGluZyBTdGFydGVkPC9oMT5cbjxoMiBpZD1cImhlbGxvLXdvcmxkXCI+SGVsbG8gd29ybGQ8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgSGVsbG8ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwSGVsbG8lMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JIZWxsbyUyMFdvcmxkJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzdGF0ZVwiPlN0YXRlPC9oMj5cbjxwPldlIGNhbiB1c2UgPGNvZGU+cmVhY3RpdmUob2JqZWN0KTwvY29kZT4gdG8gY3JlYXRlIHN0YXRlIG1vZGVsLjwvcD5cbjx1bD5cbjxsaT5Vc2UgaW4gPGNvZGU+SlNYPC9jb2RlPjwvbGk+XG48bGk+TXV0YXRlIGl0IHRvIHVwZGF0ZSBpbiBjYWxsYmFja3M8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wdXRlZFwiPkNvbXB1dGVkPC9oMj5cbjx1bD5cbjxsaT48Y29kZT5nZXQgeCgpPC9jb2RlPiBpbiA8Y29kZT5yZWFjdGl2ZShvYmplY3QpPC9jb2RlPiB0byBjcmVhdGUgY29tcHV0ZWQ8L2xpPlxuPGxpPmNvbXB1dGVkIHJlc3VsdCBpcyBzYW1lIHdpdGggcmVhY3RpdmUgYnV0IHJlYWRvbmx5PC9saT5cbjwvdWw+XG48aDMgaWQ9XCJleGFtcGxlXCI+RXhhbXBsZTwvaDM+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuICAgIEBjb21wdXRlZCBnZXQgZG91YmxlQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ICogMjtcbiAgICB9XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8cD4gQ291bnRlcjoge3RoaXMuY291bnR9IDwvcD5cbiAgICAgICAgICAgIDxwPiBEb3VibGU6IHt0aGlzLmRvdWJsZUNvdW50fSA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMCU0MGNvbXB1dGVkJTIwZ2V0JTIwZG91YmxlQ291bnQoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHRoaXMuY291bnQlMjAqJTIwMiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTIwQ291bnRlciUzQSUyMCU3QnRoaXMuY291bnQlN0QlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTIwRG91YmxlJTNBJTIwJTdCdGhpcy5kb3VibGVDb3VudCU3RCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wb25lbnRcIj5Db21wb25lbnQ8L2gyPlxuPHVsPlxuPGxpPkZ1bmN0aW9uIGlzIGp1c3QgY29tcG9uZW50PC9saT5cbjxsaT5Qcm9wcyBpcyBhIG9iamVjdCAobWF5YmUgcmVhY3RpdmUpPC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgRGlzcGxheSB7XG4gICAgQHJlYWN0aXZlIHByb3BzO1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxwPkkgd2lsbCBkaXNwbGF5IGNvdW50IGZyb20geyc8RGlzcGxheS8+J306IHt0aGlzLnByb3BzLmNvdW50fTwvcD47XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPERpc3BsYXkgY291bnQ9e3RoaXMuY291bnR9Lz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImNsYXNzJTIwRGlzcGxheSUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwcHJvcHMlM0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCcCUyNmd0JTNCSSUyMHdpbGwlMjBkaXNwbGF5JTIwY291bnQlMjBmcm9tJTIwJTdCJTI2JTIzMDM5JTNCJTI2bHQlM0JEaXNwbGF5JTJGJTI2Z3QlM0IlMjYlMjMwMzklM0IlN0QlM0ElMjAlN0J0aGlzLnByb3BzLmNvdW50JTdEJTI2bHQlM0IlMkZwJTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0QlMEElMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBDb3VudGVyQXBwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQkRpc3BsYXklMjBjb3VudCUzRCU3QnRoaXMuY291bnQlN0QlMkYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwibG9naWNcIj5Mb2dpYzwvaDI+XG48aDMgaWQ9XCJpZlwiPiRpZjwvaDM+XG48cD5Vc2UgPGNvZGU+JGlmPC9jb2RlPiB0byBkbyBhIHN3aXRjaCBsb2dpYyBpbiA8Y29kZT5KU1g8L2NvZGU+LjwvcD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG5cbiAgICBpbmMoKSB7XG4gICAgICAgIHRoaXMuY291bnQgKys7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIENvdW50ZXI6IHt0aGlzLmNvdW50fVxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5pbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+Y291bnQgPj0gMyA6IFxuICAgICAgICB7JGlmKFxuICAgICAgICAgICAgLy8gY29uZFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jb3VudCA+PSAzLFxuICAgICAgICAgICAgLy8geWVzXG4gICAgICAgICAgICAoKSA9PiA8ZGl2PllFUyB7dGhpcy5jb3VudH08L2Rpdj4sXG4gICAgICAgICAgICAvLyBOT1xuICAgICAgICAgICAgKCkgPT4gPGRpdj5OTyB7dGhpcy5jb3VudH08L2Rpdj4sXG4gICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0Jjb3VudCUyMCUyNmd0JTNCJTNEJTIwMyUyMCUzQSUyMCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyNGlmKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGNvbmQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5jb3VudCUyMCUyNmd0JTNCJTNEJTIwMyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMHllcyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQmRpdiUyNmd0JTNCWUVTJTIwJTdCdGhpcy5jb3VudCU3RCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBOTyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjAlMjZsdCUzQmRpdiUyNmd0JTNCTk8lMjAlN0J0aGlzLmNvdW50JTdEJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgzIGlkPVwibWFwXCI+JG1hcDwvaDM+XG48cD5Vc2UgPGNvZGU+JG1hcDwvY29kZT4gZm9yIGEgbGlzdCBtYXA8L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHAge1xuICBAcmVhY3RpdmUgbGlzdCA9IFsndGVzdCcgKyBjb3VudCArK107XG5cbiAgYWRkVG9kbygpIHtcbiAgICAgIC8vIHVzZSBhcnJheS5wdXNoL3NwbGljZS9zaGlmdC91bnNoaWZ0IHRvIG11dGF0ZVxuICAgICAgdGhpcy5saXN0LnB1c2goJ25ldyB0b2RvJyArIGNvdW50ICsrKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDx1bD5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRUb2RvfT5BREQgVE9ETzwvYnV0dG9uPlxuICAgICAgeyRtYXAoXG4gICAgICAgICAgdGhpcy5saXN0LCAgLy8gYXJyYXlcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgICAgICAgLy8gaXRlbS52YWx1ZSBtZWFuIGl0ZW1cbiAgICAgICAgICAgICAgLy8gaXRlbS5pbmRleCBtZWFuIGluZGV4XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgW3tpdGVtLmluZGV4fV0ge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAvLyBrZXkgbWFwLCBhbHRlcm5hdGl2ZSB0byA8bGkga2V5PiBpbiBSZWFjdFxuICAgICAgICAgICAgICAvLyBtdXN0IGJlIHN0cmluZyBvciBudW1iZXIsIGFuZCBrZWVwIHVuaXF1ZSBpbiBsaXN0XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICl9XG4gICAgPC91bD47XG4gIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImxldCUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUwQWV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMEFwcCUyMCU3QiUwQSUyMCUyMCU0MHJlYWN0aXZlJTIwbGlzdCUyMCUzRCUyMCU1QiUyNiUyMzAzOSUzQnRlc3QlMjYlMjMwMzklM0IlMjAlMkIlMjBjb3VudCUyMCUyQiUyQiU1RCUzQiUwQSUwQSUyMCUyMGFkZFRvZG8oKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMHVzZSUyMGFycmF5LnB1c2glMkZzcGxpY2UlMkZzaGlmdCUyRnVuc2hpZnQlMjB0byUyMG11dGF0ZSUwQSUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdC5wdXNoKCUyNiUyMzAzOSUzQm5ldyUyMHRvZG8lMjYlMjMwMzklM0IlMjAlMkIlMjBjb3VudCUyMCUyQiUyQiklM0IlMEElMjAlMjAlN0QlMEElMEElMjAlMjByZW5kZXIlMjAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCdWwlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuYWRkVG9kbyU3RCUyNmd0JTNCQUREJTIwVE9ETyUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRtYXAoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5saXN0JTJDJTIwJTIwJTJGJTJGJTIwYXJyYXklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG1hcCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0udmFsdWUlMjBtZWFuJTIwaXRlbSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0uaW5kZXglMjBtZWFuJTIwaW5kZXglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVCJTdCaXRlbS5pbmRleCU3RCU1RCUyMCU3Qml0ZW0udmFsdWUlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0IoKSUyMCUzRCUyNmd0JTNCJTIwdGhpcy5saXN0LnNwbGljZShpdGVtLmluZGV4JTJDJTIwMSklN0QlMjZndCUzQlJFTU9WRSUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBrZXklMjBtYXAlMkMlMjBhbHRlcm5hdGl2ZSUyMHRvJTIwJTI2bHQlM0JsaSUyMGtleSUyNmd0JTNCJTIwaW4lMjBSZWFjdCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG11c3QlMjBiZSUyMHN0cmluZyUyMG9yJTIwbnVtYmVyJTJDJTIwYW5kJTIwa2VlcCUyMHVuaXF1ZSUyMGluJTIwbGlzdCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMGl0ZW0udmFsdWUlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjApJTdEJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZ1bCUyNmd0JTNCJTNCJTBBJTIwJTIwJTdEJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cInBsYXlncm91bmRcIj5QbGF5R3JvdW5kPC9oMj5cbjxwPlBsYXkgb25saW5lIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9uYXVnaHR5LWhpbGwtdWdrZ2o/ZmlsZT0vc3JjL2luZGV4LnRzeFwiPkNvZGVTYW5kYm94PC9hPjwvcD5cbjwvZGl2PjtcbiAgICAgICAgfVxuICAgIH0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==