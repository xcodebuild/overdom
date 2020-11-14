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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi9oZWxwZXIvY29kZS1ib3gvaW5kZXgudHN4Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2JhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uLi9zcmMvcmVhY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL3NyYy9kb2MvZ2V0LXN0YXJ0ZWQubWQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL292ZXJkb20tc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlLy4vc3JjL2luZGV4Lmxlc3M/OTZjNSIsIndlYnBhY2s6Ly9vdmVyZG9tLXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL292ZXJkb20tc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3ZlcmRvbS1zaXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJodG1sRGVjb2RlIiwiaW5wdXQiLCJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIm5vZGVWYWx1ZSIsIkNvZGVib3giLCJkb20iLCJzZXRUaW1lb3V0IiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiQ29tcG9uZW50IiwicHJvcHMiLCJjb21wb25lbnQiLCJoYW5kbGVDb2RlUmVmIiwiX19odG1sIiwiY29kZSIsInJlYWN0aXZlIiwiTG9nbyIsIkhlYWRlciIsIkFwcCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwidGFza3MiLCJ0aW1lciIsInNjaGVkdWxlIiwidGFzayIsInRhc2tJdGVtcyIsIkFycmF5IiwidGFza0l0ZW0iLCJpbnNlcnQiLCJhcnJheSIsImluZGV4IiwiaXRlbSIsIkZyYWdtZW50IiwiY29uc3RydWN0b3IiLCJvYmoiLCJhcHBlbmRDaGlsZCIsIm5vZGUiLCJhcHBlbmRUb0NvbnRhaW5lciIsImNvbnRhaW5lciIsInJlcGxhY2VXaXRoIiwiZnJhZ21lbnQiLCJyYW5nZSIsImNyZWF0ZUVtcHR5IiwiaW5zZXJ0QmVmb3JlVG9Db250YWluZXIiLCJjcmVhdGVSYW5nZSIsInBhcmVudCIsInN0YXJ0UG9zIiwiZ2V0Rmlyc3ROb2RlIiwiRnJhZ21lbnRMaXN0IiwiYXBwZW5kRnJhZ21lbnQiLCJjaGlsZCIsInJlbW92ZVdpdGhLZXlzIiwia2V5cyIsIm1vdmUiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRCZWZvcmVOb2RlIiwidGFyZ2V0IiwiZGVsZXRlSW5kZXgiLCJ0b0luZGV4IiwiUmVmU3ltYm9sIiwiU3ltYm9sIiwiaXNSZWYiLCJyIiwiaGlkZVJlZk1vZGUiLCJ3cmFwRm5IaWRlUmVmTW9kZSIsImZuIiwidGVtcCIsInJ1bkluUmVmTW9kZSIsImNiIiwicHJveHlPYmpNYXAiLCJEZXBzTWFuYWdlciIsIl9hZGREZXAiLCJfZ2V0RGVwcyIsImJlZ2luQ29sbGVjdCIsImVuZENvbGxlY3QiLCJ0cmFjayIsInRyaWdnZXIiLCJkZXBzIiwiZGVwIiwiZGVwc01hbmFnZXIiLCJBdXRvcnVuUmVmSW1wbCIsIl9ydW4iLCJjcmVhdGVBdXRvcnVuIiwiUmVmSW1wbCIsInZhbCIsIkNvbXB1dGVkUmVmSW1wbCIsIl9yZWNvbXB1dGUiLCJsYXN0VmFsdWUiLCJQcm94eVJlZlN5bWJvbCIsInByb3h5TWFwIiwiY3JlYXRlUmVhY3RpdmUiLCJhbGxSZWFjdGl2ZSIsInJlZiIsIk1FVEFfVFlQRSIsIm1ldGFzTWFwIiwibWV0YXMiLCJyZWFjdGl2ZUNvbXBvbmVudCIsImlucyIsImNvbXAiLCJwcm90b3R5cGUiLCJrZXkiLCJhZGRNZXRhIiwiY29tcHV0ZWQiLCJhdXRvcnVuIiwiUHJveHlSZWZJbXBsIiwiX2FsbFJlYWN0aXZlIiwiZ2V0TWV0YUtleXMiLCJPYmplY3QiLCJfaW5pdEF1dG9ydW4iLCJ2YWx1ZSIsIl9pbml0UHJveHkiLCJ0aGF0IiwicmVmTWFwIiwicHJveHkiLCJnZXQiLCJhcmdzIiwibGVuIiwiY291bnQiLCJpbnNlcnRzIiwiaW5zZXJ0c0xlbiIsImkiLCJnZXRSZWYiLCJpc1Byb3h5UmVmIiwic2V0IiwibWV0YSIsInJlc3VsdCIsImdldHRlciIsIm5ld1ZhbCIsImRpcmVjdGl2ZSIsImZ1bmMiLCJpc0RpcmVjdGl2ZSIsIiRpZiIsImNvbmQiLCJ5ZXMiLCJubyIsImluaXRlZCIsIm5ld1Jlc3VsdCIsImxhc3RSZXN1bHQiLCJsYXN0RnJhZ21lbnQiLCJuZXdGcmFnbWVudCIsIiRtYXAiLCJyYXdMaXN0IiwibWFwRnVuYyIsImtleUZ1bmMiLCJsaXN0IiwibGlzdERhdGEiLCJsYXN0UmVhY3RpdmVJdGVtcyIsImNyZWF0ZVJlYWN0aXZlSXRlbSIsImZyYWdtZW50TGlzdCIsIm1hcEZ1bmNXcmFwIiwia2V5RnVuY1dyYXAiLCJjb25zb2xlIiwibGFzdEZyYWdtZW50cyIsImxhc3RLZXlzIiwibmV3TGlzdCIsIm5vdHJhY2siLCJuZXdLZXlzIiwibGFzdEluZGV4IiwicmVhY3RpdmVJdGVtIiwiZnJvbUluZGV4IiwicmVtb3ZlZCIsImh0bWwiLCJuZXdWYWx1ZSIsImlzRXZlbnQiLCJldmVudE5hbWUiLCJsYXN0VmFsdWVFdmVudEhhbmRsZXIiLCJzZXRBdHRyIiwiaCIsInR5cGUiLCJjaGlsZHJlbiIsInRhZyIsImJpbmRBdHRyIiwicmVhY3RpdmVWYWwiLCJ0ZXh0Tm9kZSIsImJ1aWxkQ29tcG9uZW50IiwiZnJhZyIsIm5ld0ZyYWciLCJEZW1vIiwibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImluYyIsImRvdWJsZUNvdW50IiwiRGlzcGxheSIsInB1c2giLCJhZGRUb2RvIiwic3BsaWNlIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwiaGFuZGxlU3dhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFDdEIsTUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBUjtBQUNBRixHQUFDLENBQUNHLFNBQUYsR0FBY0osS0FBZCxDQUZzQixDQUd0Qjs7QUFDQSxTQUFPQyxDQUFDLENBQUNJLFVBQUYsQ0FBYUMsTUFBYixLQUF3QixDQUF4QixHQUE0QixFQUE1QixHQUFpQ0wsQ0FBQyxDQUFDSSxVQUFGLENBQWEsQ0FBYixFQUFnQkUsU0FBeEQ7QUFDRDs7SUFFa0JDLE87Ozs7Ozs7OztrQ0FNSEMsRyxFQUFrQjtBQUM1QkMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2I7QUFDQUQsV0FBRyxDQUFDTCxTQUFKLEdBQWdCTyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JiLFVBQVUsQ0FBQ1Us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O1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIGgsIGF1dG9ydW4gfSBmcm9tIFwib3ZlcmRvbVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuZnVuY3Rpb24gaHRtbERlY29kZShpbnB1dCl7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGUuaW5uZXJIVE1MID0gaW5wdXQ7XG4gICAgLy8gaGFuZGxlIGNhc2Ugb2YgZW1wdHkgaW5wdXRcbiAgICByZXR1cm4gZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVib3gge1xuICAgIEByZWFjdGl2ZSBwcm9wczoge1xuICAgICAgICBjb2RlOiBzdHJpbmcsXG4gICAgICAgIGNvbXBvbmVudDogRnVuY3Rpb24sXG4gICAgfVxuICAgIFxuICAgIGhhbmRsZUNvZGVSZWYoZG9tOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRvbS5pbm5lckhUTUwgPSBQcmlzbS5oaWdobGlnaHQoaHRtbERlY29kZShkb20uaW5uZXJIVE1MKSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudDtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29kZWJveFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cHJlPjxjb2RlIHJlZj17dGhpcy5oYW5kbGVDb2RlUmVmfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5wcm9wcy5jb2RlfX0+PC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtb1wiPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGgsXG59IGZyb20gJ292ZXJkb20nO1xuXG5jbGFzcyBMb2dvIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCIgXG4gICAgICAgID5cbiAgICAgICAgPC9pbWc+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICB9O1xufVxuIiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHJlbmRlciwgIGgsIHJlYWN0aXZlIH0gZnJvbSAnb3ZlcmRvbSc7XG5cbmltcG9ydCBEb2NHZXRTdGFydGVkIGZyb20gJy4vZG9jL2dldC1zdGFydGVkLm1kJztcblxuY2xhc3MgQXBwIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8RG9jR2V0U3RhcnRlZC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJjb25zdCB0YXNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcbmxldCB0aW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlKHRhc2s6IEZ1bmN0aW9uKSB7XG4gIHRhc2tzLmFkZCh0YXNrKTtcbiAgaWYgKCF0aW1lcikge1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBjb25zdCB0YXNrSXRlbXMgPSBBcnJheS5mcm9tKHRhc2tzLnZhbHVlcygpKTtcbiAgICAgIHRhc2tzLmNsZWFyKCk7XG4gICAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrSXRlbSA9PiB7XG4gICAgICAgIHRhc2tJdGVtKCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluc2VydDxUPihhcnJheTogQXJyYXk8VD4sIGluZGV4OiBudW1iZXIsIGl0ZW06IFQpIHtcbiAgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGVzKG5vZGVzOiBOb2RlW10pIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZXNbMF0ucGFyZW50Tm9kZTtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBjb25zdCBzdGFydFBvcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50Py5jaGlsZE5vZGVzLCBub2Rlc1swXSk7XG4gIHJhbmdlLnNldFN0YXJ0KHBhcmVudCEsIHN0YXJ0UG9zKTtcbiAgcmFuZ2Uuc2V0RW5kKHBhcmVudCEsIHN0YXJ0UG9zICsgbm9kZXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVJdGVtIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaW5zZXJ0IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudCB7XG4gIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb250YWluZXI/OiBOb2RlO1xuICBjaGlsZE5vZGVzOiBOb2RlW10gPSBbXTtcbiAga2V5PzogbnVtYmVyIHwgc3RyaW5nO1xuICByZWFjdGl2ZUl0ZW0/OiBSZWFjdGl2ZUl0ZW08YW55PjtcblxuICBzdGF0aWMgaXNGcmFnbWVudChvYmo6IHVua25vd24pIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IChvYmogYXMgT2JqZWN0KS5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT09IEZyYWdtZW50IHx8IGNvbnN0cnVjdG9yID09PSBGcmFnbWVudExpc3Q7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZDogTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZCBhcyBOb2RlO1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICB9XG5cbiAgcmVwbGFjZVdpdGgoZnJhZ21lbnQ6IEZyYWdtZW50KSB7XG4gICAgZnJhZ21lbnQuY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICByYW5nZS5pbnNlcnROb2RlKGZyYWdtZW50LmZyYWdtZW50KTtcbiAgICByYW5nZS5kZXRhY2goKTtcbiAgfVxuXG4gIGNyZWF0ZUVtcHR5KCkge1xuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VtcHR5JykpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZVRvQ29udGFpbmVyKGNvbnRhaW5lcjogTm9kZSwgYmVmb3JlTm9kZTogTm9kZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIC8vIGhhcyBhIGNvbnRhaW5lciBhbHJlYWR5XG4gICAgICAvLyByZW1vdmUgc2VsZiBmcm9tIGN1cnJlbnQgY29udGFpbmVyIGZpcnN0XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmZyYWdtZW50LCBiZWZvcmVOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJhbmdlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuY2hpbGROb2Rlc1swXS5wYXJlbnROb2RlITtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKFxuICAgICAgcGFyZW50Py5jaGlsZE5vZGVzLFxuICAgICAgdGhpcy5jaGlsZE5vZGVzWzBdXG4gICAgKTtcbiAgICByYW5nZS5zZXRTdGFydChwYXJlbnQsIHN0YXJ0UG9zKTtcbiAgICByYW5nZS5zZXRFbmQocGFyZW50LCBzdGFydFBvcyArIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfVxuXG4gIGdldEZpcnN0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudExpc3QgZXh0ZW5kcyBGcmFnbWVudCB7XG4gIGNoaWxkRnJhZ21lbnRzOiBGcmFnbWVudFtdID0gW107XG5cbiAgYXBwZW5kRnJhZ21lbnQoY2hpbGQ6IEZyYWdtZW50LCBrZXk6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNoaWxkLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZnJhZ21lbnQpO1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMucHVzaChjaGlsZCk7XG4gICAgY2hpbGQua2V5ID0ga2V5O1xuICB9XG5cbiAgaW5zZXJ0KGluZGV4OiBudW1iZXIsIGZyYWdtZW50OiBGcmFnbWVudCwgbmV3S2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBmcmFnbWVudC5rZXkgPSBuZXdLZXk7XG4gICAgZnJhZ21lbnQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIoXG4gICAgICB0aGlzLmNvbnRhaW5lciEsXG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzW2luZGV4XT8uZ2V0Rmlyc3ROb2RlKCkgfHwgbnVsbFxuICAgICk7XG4gICAgaW5zZXJ0KHRoaXMuY2hpbGRGcmFnbWVudHMsIGluZGV4LCBmcmFnbWVudCk7XG4gIH1cblxuICByZW1vdmVXaXRoS2V5cyhrZXlzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoY2hpbGQua2V5ISkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gY2hpbGQ7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gZnJhZ21lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICAgICAgcmFuZ2UuZGV0YWNoKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGluc2VydEJlZm9yZSA9IHRoaXMuY2hpbGRGcmFnbWVudHNbdG9JbmRleF07XG5cbiAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTogTm9kZSB8IG51bGwgPSBpbnNlcnRCZWZvcmU/LmdldEZpcnN0Tm9kZSgpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jaGlsZEZyYWdtZW50c1tmcm9tSW5kZXhdITtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIodGhpcy5jb250YWluZXIhLCBpbnNlcnRCZWZvcmVOb2RlKTtcblxuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCB0b0luZGV4LCB0YXJnZXQpO1xuICAgIGxldCBkZWxldGVJbmRleCA9IGZyb21JbmRleDtcbiAgICBpZiAodG9JbmRleCA8IGZyb21JbmRleCkge1xuICAgICAgZGVsZXRlSW5kZXggKz0gMTtcbiAgICB9XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5jb25zdCBSZWZTeW1ib2wgPSBTeW1ib2woJ3JlZicpO1xuY29uc3QgSW50ZXJuYWxSYXdTeW1ib2wgPSBTeW1ib2woJ2ludGVybmFsX3JhdycpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWY8VD4ocjogUmVmPFQ+IHwgdW5rbm93bik6IHIgaXMgUmVmPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmKHI6IGFueSk6IHIgaXMgUmVmIHtcbiAgcmV0dXJuIHIgJiYgKHIgYXMgUmVmKVtSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWY8VD4ocmVmOiBUKTogVCBleHRlbmRzIFJlZjxpbmZlciBWPiA/IFYgOiBUIHtcbiAgcmV0dXJuIGlzUmVmKHJlZikgPyAocmVmLnZhbHVlIGFzIGFueSkgOiByZWY7XG59XG5cbnR5cGUgS2V5ID0gc3RyaW5nIHwgc3ltYm9sIHwgbnVtYmVyO1xuXG5sZXQgaGlkZVJlZk1vZGUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBGbkhpZGVSZWZNb2RlPFQgZXh0ZW5kcyBGdW5jdGlvbj4oZm46IFQpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgIGxldCB0ZW1wID0gaGlkZVJlZk1vZGU7XG4gICAgaGlkZVJlZk1vZGUgPSB0cnVlO1xuICAgIGNvbnN0IHIgPSBmbiguLi5hcmdzKTtcbiAgICBoaWRlUmVmTW9kZSA9IHRlbXA7XG4gICAgcmV0dXJuIHI7XG4gIH0gYXMgdW5rbm93bikgYXMgVDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcnVuSW5SZWZNb2RlKGNiOiBGdW5jdGlvbikge1xuICBsZXQgdGVtcCA9IGhpZGVSZWZNb2RlO1xuICBoaWRlUmVmTW9kZSA9IGZhbHNlO1xuICBjb25zdCByID0gY2IoKTtcbiAgaGlkZVJlZk1vZGUgPSB0ZW1wO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkluSGlkZVJlZk1vZGUoY2I6IEZ1bmN0aW9uKSB7XG4gIGxldCB0ZW1wID0gaGlkZVJlZk1vZGU7XG4gIGhpZGVSZWZNb2RlID0gdHJ1ZTtcbiAgY29uc3QgciA9IGNiKCk7XG4gIGhpZGVSZWZNb2RlID0gdGVtcDtcbiAgcmV0dXJuIHI7XG59XG5cbmNvbnN0IHByb3h5T2JqTWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBPYmplY3Q+KCk7XG5cbmNsYXNzIERlcHNNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY29sbGVjdGluZzogVHJpZ2dlcmFibGVSZWZbXSA9IFtdO1xuICBwcml2YXRlIF9kZXBzID0gbmV3IFdlYWtNYXA8UmVmLCBTZXQ8VHJpZ2dlcmFibGVSZWY+PigpO1xuXG4gIHByaXZhdGUgX2FkZERlcCh0YXJnZXQ6IFJlZiwgdHJpZ2dlcjogVHJpZ2dlcmFibGVSZWYpIHtcbiAgICBpZiAoIXRoaXMuX2RlcHMuaGFzKHRhcmdldCkpIHtcbiAgICAgIHRoaXMuX2RlcHMuc2V0KHRhcmdldCwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgdGhpcy5fZGVwcy5nZXQodGFyZ2V0KSEuYWRkKHRyaWdnZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGVwcyh0YXJnZXQ6IFJlZikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2RlcHMuZ2V0KHRhcmdldCk/LnZhbHVlcygpIHx8IFtdKTtcbiAgfVxuXG4gIGJlZ2luQ29sbGVjdChyZWY6IFRyaWdnZXJhYmxlUmVmKSB7XG4gICAgdGhpcy5fY29sbGVjdGluZy5wdXNoKHJlZik7XG4gIH1cblxuICBlbmRDb2xsZWN0KCkge1xuICAgIHRoaXMuX2NvbGxlY3RpbmcucG9wKCk7XG4gIH1cblxuICB0cmFjayh0YXJnZXQ6IFJlZikge1xuICAgIGlmICh0aGlzLl9jb2xsZWN0aW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FkZERlcCh0YXJnZXQsIHRoaXMuX2NvbGxlY3RpbmdbdGhpcy5fY29sbGVjdGluZy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlcih0YXJnZXQ6IFJlZikge1xuICAgIGNvbnN0IGRlcHMgPSB0aGlzLl9nZXREZXBzKHRhcmdldCk7XG4gICAgZGVwcy5mb3JFYWNoKGRlcCA9PiBkZXAudHJpZ2dlcigpKTtcbiAgfVxufVxuXG5jb25zdCBkZXBzTWFuYWdlciA9IG5ldyBEZXBzTWFuYWdlcigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlZjxUID0gYW55PiB7XG4gIFtSZWZTeW1ib2xdOiBib29sZWFuO1xuICB2YWx1ZTogVDtcbn1cblxuaW50ZXJmYWNlIFRyaWdnZXJhYmxlUmVmPFQgPSBhbnk+IHtcbiAgW1JlZlN5bWJvbF06IGJvb2xlYW47XG4gIHZhbHVlOiBUO1xuICB0cmlnZ2VyOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmF3KHJlZjogUmVmKSB7XG4gIGlmIChpc1Byb3h5UmVmKHJlZikpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHJlZltJbnRlcm5hbFJhd1N5bWJvbF07XG4gIH1cbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmVmLl92YWx1ZTtcbn1cblxuZXhwb3J0IHR5cGUgTm9UcmFja0ZuID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG5jbGFzcyBBdXRvcnVuUmVmSW1wbCB7XG4gIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZuOiAobm90cmFja0ZuOiBOb1RyYWNrRm4pID0+IHZvaWQpIHtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3J1bigpIHtcbiAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBGbkhpZGVSZWZNb2RlKHRoaXMuX2ZuKS5jYWxsKHRoaXMsIChmbjogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgLy8gbm8gdHJhY2sgZm5cbiAgICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgICAgIGZuKCk7XG4gICAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgfSk7XG4gICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0b3J1bihmbjogKG5vdHJhY2tGbjogTm9UcmFja0ZuKSA9PiB2b2lkKSB7XG4gIHJldHVybiBuZXcgQXV0b3J1blJlZkltcGwoZm4pO1xufVxuXG5jbGFzcyBSZWZJbXBsPFQgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92YWx1ZTogVCkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbDogVCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIENvbXB1dGVkUmVmSW1wbDxUID0gYW55PiB7XG4gIHB1YmxpYyBbUmVmU3ltYm9sXSA9IHRydWU7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlITogVDtcbiAgcHJpdmF0ZSBfY29tcHV0ZTogKCkgPT4gVDtcblxuICBjb25zdHJ1Y3RvcihnZXR0ZXI6ICgpID0+IFQpIHtcbiAgICB0aGlzLl9jb21wdXRlID0gZ2V0dGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVjb21wdXRlKCkge1xuICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2NvbXB1dGUoKTtcbiAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5fcmVjb21wdXRlKCk7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgbGV0IGxhc3RWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuX3JlY29tcHV0ZSgpO1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBQcm94eVJlZlN5bWJvbCA9IFN5bWJvbCgncHJveHktcmVmJyk7XG5cbmZ1bmN0aW9uIGlzUHJveHlSZWYodGFyZ2V0OiB1bmtub3duKSB7XG4gIHJldHVybiB0YXJnZXQgJiYgKHRhcmdldCBhcyBQcm94eVJlZkltcGw8YW55PilbUHJveHlSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5jb25zdCBwcm94eU1hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgT2JqZWN0PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KG9iajogVCwgYWxsUmVhY3RpdmUgPSBmYWxzZSk6IFQge1xuICBjb25zdCByZWYgPSBuZXcgUHJveHlSZWZJbXBsKG9iaiwgYWxsUmVhY3RpdmUpO1xuICByZXR1cm4gcmVmLnZhbHVlO1xufVxuXG5lbnVtIE1FVEFfVFlQRSB7XG4gIHJlYWN0aXZlLFxuICBjb21wdXRlZCxcbiAgYXV0b3J1bixcbn07XG5cbi8vIG1hcCBPYmplY3QucHJvdG90eXBlIHRvIGl0cyByZWFjdGl2ZSBrZXlzXG5sZXQgbWV0YXNNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE1hcDxLZXksIE1FVEFfVFlQRT4+KCk7XG5cbmZ1bmN0aW9uIGFkZE1ldGEocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5LCB0eXBlOiBNRVRBX1RZUEUpIHtcbiAgaWYgKCFtZXRhc01hcC5oYXMocHJvdG90eXBlKSkge1xuICAgIG1ldGFzTWFwLnNldChwcm90b3R5cGUsIG5ldyBNYXAoKSk7XG4gIH1cbiAgY29uc3QgbWV0YXMgPSBtZXRhc01hcC5nZXQocHJvdG90eXBlKTtcbiAgbWV0YXMhLnNldChrZXksIHR5cGUpO1xufVxuXG5mdW5jdGlvbiBnZXRNZXRhS2V5cyhwcm90b3R5cGU6IE9iamVjdCkge1xuICByZXR1cm4gbWV0YXNNYXAuZ2V0KHByb3RvdHlwZSk7XG59XG5cbmludGVyZmFjZSBDb21wb25lbnQge1xuICByZW5kZXIoKTogRnJhZ21lbnQ7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhY3RpdmVDb21wb25lbnQoY29tcG9uZW50OiBuZXcgKCkgPT4gRnJhZ21lbnQsIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICBjb25zdCBpbnMgPSBuZXcgY29tcG9uZW50KCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgaW5zLnByb3BzID0gcHJvcHMgfHwge307XG4gIGNvbnN0IGNvbXAgPSBjcmVhdGVSZWFjdGl2ZShpbnMpIGFzIGFueSBhcyBDb21wb25lbnQ7XG4gIHJldHVybiBjb21wO1xufVxuXG4vKipcbiAqIEByZWFjdGl2ZSBkZWNvcmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhY3RpdmUocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5yZWFjdGl2ZSk7XG59XG5cbi8qKlxuICogQGNvbXB1dGVkIGRlY29yYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZChwcm90b3R5cGU6IE9iamVjdCwga2V5OiBLZXkpIHtcbiAgYWRkTWV0YShwcm90b3R5cGUsIGtleSwgTUVUQV9UWVBFLmNvbXB1dGVkKTtcbn1cblxuLyoqXG4gKiBAY29tcHV0ZWQgZGVjb3JhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9ydW4ocHJvdG90eXBlOiBPYmplY3QsIGtleTogS2V5KSB7XG4gIGFkZE1ldGEocHJvdG90eXBlLCBrZXksIE1FVEFfVFlQRS5hdXRvcnVuKTtcbn1cblxuY2xhc3MgUHJveHlSZWZJbXBsPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHVibGljIFtQcm94eVJlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIHByaXZhdGUgX3Byb3h5OiBUO1xuICBwcml2YXRlIF9tZXRhS2V5cz86IE1hcDxLZXksIE1FVEFfVFlQRT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqOiBULCBwcml2YXRlIF9hbGxSZWFjdGl2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fbWV0YUtleXMgPSBnZXRNZXRhS2V5cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoX29iaikpO1xuICAgIHRoaXMuX3Byb3h5ID0gdGhpcy5faW5pdFByb3h5KF9vYmopO1xuICAgIHRoaXMuX2luaXRBdXRvcnVuKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0QXV0b3J1bigpIHtcbiAgICBpZiAoIXRoaXMuX21ldGFLZXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21ldGFLZXlzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gTUVUQV9UWVBFLmF1dG9ydW4pIHtcbiAgICAgICAgY3JlYXRlQXV0b3J1bigoKHRoaXMuX29iaiBhcyBhbnkpW2tleV0uYmluZCh0aGlzLl9wcm94eSkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRQcm94eShvYmo6IFQpOiBUIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAocHJveHlNYXAuaGFzKG9iaikpIHtcbiAgICAgIHJldHVybiBwcm94eU1hcC5nZXQob2JqKSBhcyBUO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZk1hcCA9IG5ldyBNYXA8S2V5LCBSZWY+KCk7XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldChfLCBrZXkpIHtcbiAgICAgICAgZGVwc01hbmFnZXIudHJhY2sodGhhdCk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdsZW5ndGgnKSByZXR1cm4gb2JqLmxlbmd0aDtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnbWFwJylcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBtYXAoXG4gICAgICAgICAgICAgIGNiOiAoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiBhbnksXG4gICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqLm1hcCgoX2l0ZW06IGFueSwgX2luZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoKHByb3h5IGFzIGFueSlbX2luZGV4XSwgX2luZGV4KTtcbiAgICAgICAgICAgICAgfSwgdGhpc0FyZyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3NwbGljZSddLmluZGV4T2YoXG4gICAgICAgICAgICAgIGtleSBhcyBzdHJpbmdcbiAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwb3AnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKGxlbiAtIDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3NwbGljZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydHMgPSBhcmdzLnNsaWNlKDIpIGFzIGFueVtdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0c0xlbiA9IGluc2VydHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpID49IGluZGV4ICYmIGkgPCBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+PSBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5zZXQoJycgKyAoaSAtIGNvdW50ICsgaW5zZXJ0c0xlbiksIHJlZk1hcC5nZXQoJycgKyBpKSEpO1xuICAgICAgICAgICAgICAgICAgICByZWZNYXAuZGVsZXRlKCcnICsgaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9ialtrZXkgYXMgYW55XSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGF0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSBTeW1ib2wuc3BlY2llcykge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZiA9IGdldFJlZihrZXkpO1xuICAgICAgICBpZiAoaXNQcm94eVJlZihyZWYpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlkZVJlZk1vZGUgJiYgaXNSZWYocmVmKSkge1xuICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFJlZihrZXkpO1xuICAgICAgfSxcbiAgICAgIHNldChfLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IGdldFJlZihrZXkpO1xuICAgICAgICBpZiAoaXNSZWYocmVmKSkge1xuICAgICAgICAgIC8vIGlmIG9yaWdpbiByZWYgaXMgbm90IHByb3h5UmVmXG4gICAgICAgICAgLy8gYnV0IHZhbHVlIGlzIGEgb2JqZWN0XG4gICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgKHJlZiBhcyBQcm94eVJlZkltcGwpW1Byb3h5UmVmU3ltYm9sXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmVmTWFwLnNldChrZXksIG5ldyBQcm94eVJlZkltcGwodmFsdWUsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAodGhhdC5fb2JqIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldFJlZiA9IChrZXk6IEtleSk6IFJlZiA9PiB7XG4gICAgICBpZiAocmVmTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiByZWZNYXAuZ2V0KGtleSkhO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuX29iaik7XG4gICAgICBpZiAoIXRoaXMuX21ldGFLZXlzICYmICF0aGlzLl9hbGxSZWFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX29iaiBhcyBhbnkpW2tleV07XG4gICAgICB9XG4gICAgICBjb25zdCBtZXRhID0gdGhpcy5fbWV0YUtleXM/LmdldChrZXkpO1xuICAgICAgbGV0IHJlc3VsdCE6IFJlZjtcblxuICAgICAgaWYgKHRoaXMuX2FsbFJlYWN0aXZlIHx8IG1ldGEgPT09IE1FVEFfVFlQRS5yZWFjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChvYmogYXMgYW55KVtrZXldO1xuICAgICAgICBpZiAoaXNSZWYodmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIHJlYWN0aXZlIG9iamVjdFxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBQcm94eVJlZkltcGwoY3JlYXRlUmVhY3RpdmUodmFsdWUsIHRoaXMuX2FsbFJlYWN0aXZlKSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZS5iaW5kKHRoaXMuX3Byb3h5KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlZlxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZWZJbXBsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtZXRhID09PSBNRVRBX1RZUEUuY29tcHV0ZWQpIHtcbiAgICAgICAgY29uc3QgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSkhLmdldCE7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBDb21wdXRlZFJlZkltcGwod3JhcEZuSGlkZVJlZk1vZGUoZ2V0dGVyLmJpbmQodGhpcy5fcHJveHkpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVmTWFwLnNldChrZXksIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gKHRoaXMgYXMgYW55KS5fb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIHIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHIuYmluZCh0aGlzLl9wcm94eSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBwcm94eU1hcC5zZXQob2JqLCBwcm94eSk7XG4gICAgcHJveHlPYmpNYXAuc2V0KHByb3h5LCBvYmopO1xuICAgIHJldHVybiBwcm94eTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fcHJveHk7XG4gIH1cblxuICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgT2JqZWN0LmtleXMobmV3VmFsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAodGhpcy5fcHJveHkgYXMgYW55KVtrZXldID0gKG5ld1ZhbCBhcyBhbnkpW2tleV07XG4gICAgfSk7XG4gICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKGZuOiAoKSA9PiB2b2lkKSB7XG4gIHdyYXBGbkhpZGVSZWZNb2RlKGZuKSgpO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgRnJhZ21lbnQsIEZyYWdtZW50TGlzdCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuaW1wb3J0IHsgY3JlYXRlQXV0b3J1biwgY3JlYXRlUmVhY3RpdmUsIFJlZiwgcnVuSW5SZWZNb2RlLCB3cmFwRm5IaWRlUmVmTW9kZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlPFQgZXh0ZW5kcyAoKSA9PiBGcmFnbWVudD4oZnVuYzogVCkge1xuICAvLyBAdHMtaWdub3JlXG4gIGZ1bmMuX19pc2RpcmVjdGl2ZV9fID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdGl2ZSh2YWw6IGFueSkge1xuICByZXR1cm4gdmFsPy5fX2lzZGlyZWN0aXZlX18gPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkaWYoXG4gIGNvbmQ6ICgpID0+IGJvb2xlYW4sXG4gIHllczogKCkgPT4gRnJhZ21lbnQsXG4gIG5vOiAoKSA9PiBGcmFnbWVudFxuKSB7XG4gIHJldHVybiBkaXJlY3RpdmUoKCkgPT4ge1xuICAgIGxldCBsYXN0UmVzdWx0OiBib29sZWFuO1xuICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdEZyYWdtZW50OiBGcmFnbWVudDtcblxuICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgY29uc3QgbmV3UmVzdWx0ID0gY29uZCgpO1xuICAgICAgaWYgKCFpbml0ZWQpIHtcbiAgICAgICAgbGFzdFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICAgICAgbGFzdEZyYWdtZW50ID0gbGFzdFJlc3VsdCEgPyB5ZXMoKSA6IG5vKCk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RnJhZ21lbnQgPSBuZXdSZXN1bHQgPyB5ZXMoKSA6IG5vKCk7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGxhc3RGcmFnbWVudC5yZXBsYWNlV2l0aChuZXdGcmFnbWVudCk7XG4gICAgICAgIGxhc3RGcmFnbWVudCA9IG5ld0ZyYWdtZW50O1xuICAgICAgfSk7XG4gICAgICBsYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RGcmFnbWVudCE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZUl0ZW08VD4odmFsdWU6IFQsIGluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlKHtcbiAgICB2YWx1ZSxcbiAgICBpbmRleCxcbiAgfSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0aXZlSXRlbTxUPiA9IHtcbiAgdmFsdWU6IFQ7XG4gIGluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gJG1hcDxUPihcbiAgcmF3TGlzdDogVFtdLFxuICBtYXBGdW5jOiAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiBGcmFnbWVudCxcbiAga2V5RnVuYzogKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4gc3RyaW5nIHwgbnVtYmVyXG4pIHtcbiAgY29uc3QgbGlzdCA9IChyYXdMaXN0IGFzIGFueSkgYXMgUmVmO1xuICBjb25zdCBsaXN0RGF0YSA9IChsaXN0IGFzIGFueSkgYXMgVFtdO1xuXG4gIGxldCBsYXN0UmVhY3RpdmVJdGVtcyA9IGxpc3REYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVJdGVtKGl0ZW0sIGluZGV4KTtcbiAgfSk7XG5cbiAgY29uc3QgZnJhZ21lbnRMaXN0ID0gbmV3IEZyYWdtZW50TGlzdCgpO1xuXG4gIGNvbnN0IG1hcEZ1bmNXcmFwID0gKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4ge1xuICAgIGxldCBmcmFnbWVudDogRnJhZ21lbnQ7XG4gICAgcnVuSW5SZWZNb2RlKCgpID0+IHtcbiAgICAgIGZyYWdtZW50ID0gbWFwRnVuYyhpdGVtKTtcbiAgICAgIGZyYWdtZW50LnJlYWN0aXZlSXRlbSA9IGl0ZW07XG4gICAgfSlcbiAgICByZXR1cm4gZnJhZ21lbnQhO1xuICB9O1xuXG4gIGNvbnN0IGtleUZ1bmNXcmFwID0gd3JhcEZuSGlkZVJlZk1vZGUoKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4ge1xuICAgIGNvbnN0IHIgPSBrZXlGdW5jKGl0ZW0pO1xuICAgIGlmICh0eXBlb2YgciAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHIgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLnRyYWNlKFxuICAgICAgICAna2V5IG9mICRtYXAgc2hvdWxkIHJldHVybiBzdHJpbmcgb3IgbnVtYmVyLCBidXQgZ290ICcgKyByLFxuICAgICAgICBrZXlGdW5jLnRvU3RyaW5nKClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9KTtcblxuICBsZXQgbGFzdEZyYWdtZW50cyA9IGxpc3REYXRhLm1hcCgoXywgaW5kZXgpID0+XG4gICAgbWFwRnVuY1dyYXAobGFzdFJlYWN0aXZlSXRlbXNbaW5kZXhdKVxuICApO1xuICBsZXQgbGFzdEtleXMgPSBsaXN0RGF0YS5tYXAoKF8sIGluZGV4KSA9PlxuICAgIGtleUZ1bmNXcmFwKGxhc3RSZWFjdGl2ZUl0ZW1zW2luZGV4XSlcbiAgKTtcblxuICBsYXN0RnJhZ21lbnRzLmZvckVhY2goKGZyYWcsIGluZGV4KSA9PiB7XG4gICAgZnJhZ21lbnRMaXN0LmFwcGVuZEZyYWdtZW50KGZyYWcsIGxhc3RLZXlzW2luZGV4XSk7XG4gIH0pO1xuXG4gIGxldCBpbml0ZWQgPSBmYWxzZTtcblxuICBjcmVhdGVBdXRvcnVuKG5vdHJhY2sgPT4ge1xuICAgIGlmICghaW5pdGVkKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0ZWQgPSBsaXN0Lmxlbmd0aDtcbiAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TGlzdCA9IChsaXN0IGFzIHVua25vd24pIGFzIGFueVtdO1xuXG4gICAgbm90cmFjaygoKSA9PiB7XG4gICAgICBjb25zdCBuZXdLZXlzID0gbmV3TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICBrZXlGdW5jV3JhcChjcmVhdGVSZWFjdGl2ZUl0ZW0oaXRlbSwgaW5kZXgpKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbGFzdEtleXMgPSBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMubWFwKGl0ZW0gPT4gaXRlbS5rZXkhKTtcblxuICAgICAgLy8gZGlmZiBhbmQgcGF0Y2ggZnJvbSBrZXlzXG4gICAgICBuZXdLZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGFzdEtleXMgPSBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMubWFwKGl0ZW0gPT4gaXRlbS5rZXkhKTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGFzdEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgIC8vIGluc2VydFxuICAgICAgICAgIC8vIGNhbiBub3QgZmluZCBpbiBvbGQgbGlzdCwgbWVhbiBpbnNlcnRcbiAgICAgICAgICAvLyBpbnNlcnQgdG8gY3VycmVudCBpbmRleFxuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlSXRlbSA9IGNyZWF0ZVJlYWN0aXZlSXRlbShuZXdMaXN0W2luZGV4XSwgaW5kZXgpO1xuXG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBtYXBGdW5jV3JhcChyZWFjdGl2ZUl0ZW0pO1xuXG4gICAgICAgICAgZnJhZ21lbnRMaXN0Lmluc2VydChpbmRleCwgZnJhZ21lbnQsIGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgIC8vIG1vdmVcblxuICAgICAgICAgIGNvbnN0IGZyb21JbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICBmcmFnbWVudExpc3QubW92ZShmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVtb3ZlZCA9IGxhc3RLZXlzLmZpbHRlcihrZXkgPT4gbmV3S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKTtcbiAgICAgIGZyYWdtZW50TGlzdC5yZW1vdmVXaXRoS2V5cyhyZW1vdmVkKTtcblxuICAgICAgLy8gYXBwbHkgbmV3IHJlYWN0aXZlSW5kZXhcbiAgICAgIGZyYWdtZW50TGlzdC5jaGlsZEZyYWdtZW50cy5mb3JFYWNoKFxuICAgICAgICAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkIS5yZWFjdGl2ZUl0ZW0hLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudExpc3Q7XG59XG4iLCJpbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gJy4vYmF0Y2hlcic7XG5pbXBvcnQgeyBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZUF1dG9ydW4sIGlzUmVmLCByZWFjdGl2ZUNvbXBvbmVudCwgUmVmLCBydW5JblJlZk1vZGUsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudChcbiAgY29tcDogKHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PikgPT4gRnJhZ21lbnQsXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge31cbikge1xuICBjb25zdCBjb21wb25lbnQgPSByZWFjdGl2ZUNvbXBvbmVudChjb21wIGFzIGFueSwgcHJvcHMpO1xuICBsZXQgZnJhZ21lbnQ6IEZyYWdtZW50O1xuICBydW5JblJlZk1vZGUoKCkgPT4ge1xuICAgIGZyYWdtZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50ITtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3Nob3VsZCBiZSBjbGFzc05hbWUsIGJ1dCBnb3QgY2xhc3MnKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJykge1xuICAgIGtleSA9ICdjbGFzcyc7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbHVlLl9faHRtbDtcbiAgICBpZiAoaXNSZWYoaHRtbCkpIHtcbiAgICAgIGNyZWF0ZUF1dG9ydW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGh0bWwudmFsdWU7XG4gICAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAncmVmJykge1xuICAgIC8vIHZhbHVlIHNob3VsZCBiZSBhIChyZWYpID0+IHZvaWRcbiAgICB2YWx1ZShub2RlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGJpbmRBdHRyKG5vZGU6IEhUTUxFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IFJlZjxhbnk+KSB7XG4gIGxldCBsYXN0VmFsdWUgPSB2YWx1ZS52YWx1ZTtcblxuICBjb25zdCBpc0V2ZW50ID0gL15vbltBLVpdLy50ZXN0KGtleSk7XG4gIGNvbnN0IGV2ZW50TmFtZSA9IGlzRXZlbnQgPyBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCkgOiAnJztcbiAgbGV0IGxhc3RWYWx1ZUV2ZW50SGFuZGxlciA9IGlzRXZlbnQgPyB3cmFwRm5IaWRlUmVmTW9kZShsYXN0VmFsdWUpIDogKCkgPT4ge307XG5cbiAgc2NoZWR1bGUoKCkgPT4ge1xuICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBdHRyKG5vZGUsIGtleSwgbGFzdFZhbHVlKTtcbiAgfSk7XG5cbiAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgICBsYXN0VmFsdWVFdmVudEhhbmRsZXIgPSB3cmFwRm5IaWRlUmVmTW9kZShsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsYXN0VmFsdWVFdmVudEhhbmRsZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRBdHRyKG5vZGUsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0pO1xuICAgIGxhc3RWYWx1ZSA9IG5ld1ZhbHVlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgoXG4gIHR5cGU6IHN0cmluZyB8IEZ1bmN0aW9uLFxuICBwcm9wczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgLi4uY2hpbGRyZW46IHN0cmluZ1tdXG4pIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRnJhZ21lbnQoKTtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgL15vbltBLVpdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGtleS5yZXBsYWNlKC9eb24vLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHdyYXBGbkhpZGVSZWZNb2RlKHZhbHVlKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKHZhbHVlKSkge1xuICAgICAgICAgIGJpbmRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHIodGFnLCBrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWYoY2hpbGQpKSB7XG4gICAgICAgICAgY29uc3QgcmVhY3RpdmVWYWwgPSBjaGlsZCBhcyBSZWY8YW55PjtcbiAgICAgICAgICBjb25zdCB2YWwgPSByZWFjdGl2ZVZhbC52YWx1ZTtcblxuICAgICAgICAgIC8vIHRleHRub2RlXG4gICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyArIHZhbCk7XG4gICAgICAgICAgY3JlYXRlQXV0b3J1bigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlYWN0aXZlVmFsLnZhbHVlO1xuICAgICAgICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEaXJlY3RpdmUoY2hpbGQpKSB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gY2hpbGQgYXMgKCkgPT4gRnJhZ21lbnQ7XG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkaXJlY3RpdmUoKTtcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcih0YWcpO1xuICAgICAgICB9IGVsc2UgaWYgKEZyYWdtZW50LmlzRnJhZ21lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgKGNoaWxkIGFzIEZyYWdtZW50KS5hcHBlbmRUb0NvbnRhaW5lcih0YWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gY29tcG9uZW50XG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzUmVmKHR5cGUpKSB7XG4gICAgLy8gcmVhY3RpdmUgY29tcG9uZW50XG4gICAgY29uc3QgY29tcCA9IHR5cGUgYXMgUmVmO1xuICAgIGxldCBmcmFnOiBGcmFnbWVudDtcbiAgICBjcmVhdGVBdXRvcnVuKChub3RyYWNrKSA9PiB7XG4gICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcC52YWx1ZTtcbiAgICAgICAgbm90cmFjaygoKSA9PiB7XG4gICAgICAgICAgZnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXBvbmVudCwge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3RnJhZyA9IGJ1aWxkQ29tcG9uZW50KGNvbXAudmFsdWUsIHtcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICAgICAgICBmcmFnLnJlcGxhY2VXaXRoKG5ld0ZyYWcpO1xuICAgICAgICBmcmFnID0gbmV3RnJhZztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnJhZyE7XG4gIH1cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGZyYWdtZW50OiBGcmFnbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBmcmFnbWVudC5hcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXIpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBKU1gge1xuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XG4gICAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgaW1wb3J0IHsgaCwgcmVhY3RpdmUsIGNvbXB1dGVkLCBhdXRvcnVuLCAkaWYsICRtYXAgfSBmcm9tICdvdmVyZG9tJztcbiAgICBpbXBvcnQgQ29kZUJveCBmcm9tICcvaG9tZS9ydW5uZXIvd29yay9vdmVyZG9tL292ZXJkb20vcGFja2FnZXMvb3ZlcmRvbS1zaXRlL2hlbHBlci9jb2RlLWJveCdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+PGgxIGlkPVwiZ2V0dGluZy1zdGFydGVkXCI+R2V0dGluZyBTdGFydGVkPC9oMT5cbjxoMiBpZD1cImhlbGxvLXdvcmxkXCI+SGVsbG8gd29ybGQ8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgSGVsbG8ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwiZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwSGVsbG8lMjAlN0IlMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JIZWxsbyUyMFdvcmxkJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzdGF0ZVwiPlN0YXRlPC9oMj5cbjxwPldlIGNhbiB1c2UgPGNvZGU+QHJlYWN0aXZlPC9jb2RlPiB0byBtYWtlIGF0dHJpYnV0ZSByZWFjdGl2ZTwvcD5cbjx1bD5cbjxsaT5Vc2UgaW4gPGNvZGU+SlNYPC9jb2RlPjwvbGk+XG48bGk+TXV0YXRlIGl0IHRvIHVwZGF0ZSBpbiBjYWxsYmFja3M8L2xpPlxuPC91bD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvdW50ZXJBcHAge1xuICAgIEByZWFjdGl2ZSBjb3VudCA9IDA7XG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgQ291bnRlcjoge3RoaXMuY291bnR9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBjbGFzcyUyMENvdW50ZXJBcHAlMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMGNvdW50JTIwJTNEJTIwMCUzQiUwQSUyMCUyMCUyMCUyMGluYygpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMHJlbmRlcigpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wdXRlZFwiPkNvbXB1dGVkPC9oMj5cbjx1bD5cbjxsaT48Y29kZT5AY29tcHV0ZWQgZ2V0IHgoKTwvY29kZT4gdG8gY3JlYXRlIGNvbXB1dGVkPC9saT5cbjxsaT5jb21wdXRlZCByZXN1bHQgaXMgc2FtZSB3aXRoIHJlYWN0aXZlIGJ1dCByZWFkb25seTwvbGk+XG48L3VsPlxuPGgzIGlkPVwiZXhhbXBsZVwiPkV4YW1wbGU8L2gzPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ291bnRlckFwcCB7XG4gICAgQHJlYWN0aXZlIGNvdW50ID0gMDtcbiAgICBAY29tcHV0ZWQgZ2V0IGRvdWJsZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudCAqIDI7XG4gICAgfVxuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPHA+IENvdW50ZXI6IHt0aGlzLmNvdW50fSA8L3A+XG4gICAgICAgICAgICA8cD4gRG91YmxlOiB7dGhpcy5kb3VibGVDb3VudH0gPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBDb3VudGVyQXBwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMjAlMjAlMjAlMjAlNDBjb21wdXRlZCUyMGdldCUyMGRvdWJsZUNvdW50KCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjB0aGlzLmNvdW50JTIwKiUyMDIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUyMENvdW50ZXIlM0ElMjAlN0J0aGlzLmNvdW50JTdEJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUyMERvdWJsZSUzQSUyMCU3QnRoaXMuZG91YmxlQ291bnQlN0QlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcG9uZW50XCI+Q29tcG9uZW50PC9oMj5cbjx1bD5cbjxsaT5DbGFzcyB3aXRoIDxjb2RlPnJlbmRlZXI8L2NvZGU+IGlzIGp1c3QgY29tcG9uZW50PC9saT5cbjxsaT48Y29kZT50aGlzLnByb3BzPC9jb2RlPiBpcyBhIG9iamVjdCwgeW91IHdpbGwgbmVlZCB0byBhZGQgPGNvZGU+QHJlYWN0aXZlPC9jb2RlPiBmb3IgaXQgaWYgbmVlZCByZWFjdGl2ZTwvbGk+XG48L3VsPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIERpc3BsYXkge1xuICAgIEByZWFjdGl2ZSBwcm9wcztcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8cD5JIHdpbGwgZGlzcGxheSBjb3VudCBmcm9tIHsnPERpc3BsYXkvPid9OiB7dGhpcy5wcm9wcy5jb3VudH08L3A+O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuICAgIGluYygpIHtcbiAgICAgICAgdGhpcy5jb3VudCArKztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxEaXNwbGF5IGNvdW50PXt0aGlzLmNvdW50fS8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmluY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJjbGFzcyUyMERpc3BsYXklMjAlN0IlMEElMjAlMjAlMjAlMjAlNDByZWFjdGl2ZSUyMHByb3BzJTNCJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnAlMjZndCUzQkklMjB3aWxsJTIwZGlzcGxheSUyMGNvdW50JTIwZnJvbSUyMCU3QiUyNiUyMzAzOSUzQiUyNmx0JTNCRGlzcGxheSUyRiUyNmd0JTNCJTI2JTIzMDM5JTNCJTdEJTNBJTIwJTdCdGhpcy5wcm9wcy5jb3VudCU3RCUyNmx0JTNCJTJGcCUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGNsYXNzJTIwQ291bnRlckFwcCUyMCU3QiUwQSUyMCUyMCUyMCUyMCU0MHJlYWN0aXZlJTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTIwJTIwJTIwJTIwaW5jKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmNvdW50JTIwJTJCJTJCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwcmVuZGVyKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JEaXNwbGF5JTIwY291bnQlM0QlN0J0aGlzLmNvdW50JTdEJTJGJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImxvZ2ljXCI+TG9naWM8L2gyPlxuPGgzIGlkPVwiaWZcIj4kaWY8L2gzPlxuPHA+VXNlIDxjb2RlPiRpZjwvY29kZT4gdG8gZG8gYSBzd2l0Y2ggbG9naWMgaW4gPGNvZGU+SlNYPC9jb2RlPi48L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb3VudGVyQXBwIHtcbiAgICBAcmVhY3RpdmUgY291bnQgPSAwO1xuXG4gICAgaW5jKCkge1xuICAgICAgICB0aGlzLmNvdW50ICsrO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICBDb3VudGVyOiB7dGhpcy5jb3VudH1cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPmNvdW50ID49IDMgOiBcbiAgICAgICAgeyRpZihcbiAgICAgICAgICAgIC8vIGNvbmRcbiAgICAgICAgICAgICgpID0+IHRoaXMuY291bnQgPj0gMyxcbiAgICAgICAgICAgIC8vIHllc1xuICAgICAgICAgICAgKCkgPT4gPGRpdj5ZRVMge3RoaXMuY291bnR9PC9kaXY+LFxuICAgICAgICAgICAgLy8gTk9cbiAgICAgICAgICAgICgpID0+IDxkaXY+Tk8ge3RoaXMuY291bnR9PC9kaXY+LFxuICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuXG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBDb3VudGVyQXBwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTQwcmVhY3RpdmUlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMEElMjAlMjAlMjAlMjBpbmMoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjAlN0QlMEElMEElMjAlMjAlMjAlMjByZW5kZXIoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCdGhpcy5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCdGhpcy5pbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCY291bnQlMjAlMjZndCUzQiUzRCUyMDMlMjAlM0ElMjAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRpZiglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBjb25kJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMHRoaXMuY291bnQlMjAlMjZndCUzQiUzRCUyMDMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB5ZXMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTI2bHQlM0JkaXYlMjZndCUzQllFUyUyMCU3QnRoaXMuY291bnQlN0QlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwTk8lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTI2bHQlM0JkaXYlMjZndCUzQk5PJTIwJTdCdGhpcy5jb3VudCU3RCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjApJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTIwJTIwJTIwJTIwJTdEJTBBJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMyBpZD1cIm1hcFwiPiRtYXA8L2gzPlxuPHA+VXNlIDxjb2RlPiRtYXA8L2NvZGU+IGZvciBhIGxpc3QgbWFwPC9wPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQXBwIHtcbiAgQHJlYWN0aXZlIGxpc3QgPSBbJ3Rlc3QnICsgY291bnQgKytdO1xuXG4gIGFkZFRvZG8oKSB7XG4gICAgICAvLyB1c2UgYXJyYXkucHVzaC9zcGxpY2Uvc2hpZnQvdW5zaGlmdCB0byBtdXRhdGVcbiAgICAgIHRoaXMubGlzdC5wdXNoKCduZXcgdG9kbycgKyBjb3VudCArKyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8dWw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICAgIHskbWFwKFxuICAgICAgICAgIHRoaXMubGlzdCwgIC8vIGFycmF5XG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAgIC8vIGl0ZW0uaW5kZXggbWVhbiBpbmRleFxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxpc3Quc3BsaWNlKGl0ZW0uaW5kZXgsIDEpfT5SRU1PVkU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBhbmQga2VlcCB1bmlxdWUgaW4gbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICApfVxuICAgIDwvdWw+O1xuICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJsZXQlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEElMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBBcHAlMjAlN0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGxpc3QlMjAlM0QlMjAlNUIlMjYlMjMwMzklM0J0ZXN0JTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIlNUQlM0IlMEElMEElMjAlMjBhZGRUb2RvKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBhcnJheS5wdXNoJTJGc3BsaWNlJTJGc2hpZnQlMkZ1bnNoaWZ0JTIwdG8lMjBtdXRhdGUlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QucHVzaCglMjYlMjMwMzklM0JuZXclMjB0b2RvJTI2JTIzMDM5JTNCJTIwJTJCJTIwY291bnQlMjAlMkIlMkIpJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwcmVuZGVyJTIwKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0J0aGlzLmFkZFRvZG8lN0QlMjZndCUzQkFERCUyMFRPRE8lMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0bWFwKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHRoaXMubGlzdCUyQyUyMCUyMCUyRiUyRiUyMGFycmF5JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKGl0ZW0pJTIwJTNEJTI2Z3QlM0IlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtYXAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLnZhbHVlJTIwbWVhbiUyMGl0ZW0lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBpdGVtLmluZGV4JTIwbWVhbiUyMGluZGV4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QiU3Qml0ZW0uaW5kZXglN0QlNUQlMjAlN0JpdGVtLnZhbHVlJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCKCklMjAlM0QlMjZndCUzQiUyMHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCUyQyUyMDEpJTdEJTI2Z3QlM0JSRU1PVkUlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwa2V5JTIwbWFwJTJDJTIwYWx0ZXJuYXRpdmUlMjB0byUyMCUyNmx0JTNCbGklMjBrZXklMjZndCUzQiUyMGluJTIwUmVhY3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtdXN0JTIwYmUlMjBzdHJpbmclMjBvciUyMG51bWJlciUyQyUyMGFuZCUyMGtlZXAlMjB1bmlxdWUlMjBpbiUyMGxpc3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBpdGVtLnZhbHVlJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGdWwlMjZndCUzQiUzQiUwQSUyMCUyMCU3RCUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJ0b2RvLWV4YW1wbGVcIj5Ub2RvIEV4YW1wbGU8L2gyPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwcCB7XG4gIEByZWFjdGl2ZSBsaXN0ID0gW3tcbiAgICBpZDogY291bnQrKyxcbiAgICB0ZXh0OiAndG9kbycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfV07XG4gIEByZWFjdGl2ZSBpbnB1dCA9ICcnO1xuXG4gIGFkZFRvZG8oKSB7XG4gICAgICAvLyB1c2UgYXJyYXkucHVzaC9zcGxpY2Uvc2hpZnQvdW5zaGlmdCB0byBtdXRhdGVcbiAgICAgIHRoaXMubGlzdC5wdXNoKHtcbiAgICAgICAgaWQ6IGNvdW50KyssXG4gICAgICAgIHRleHQ6IHRoaXMuaW5wdXQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgfVxuXG4gIGhhbmRsZVN3YXAoaW5kZXgpIHtcbiAgICAvLyB1c2Ugc3BsaWNlIHRvIHN3YXAgaXRlbXNcbiAgICAvLyByZWFjdGl2ZSBhcnJheSBjYW4gbm90IHRyYWNrIG5hdGl2ZSBzd2FwXG4gICAgY29uc3QgdGVtcCA9IFt0aGlzLmxpc3RbaW5kZXhdLCB0aGlzLmxpc3RbaW5kZXggKyAxXV07XG4gICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMiwgdGVtcFsxXSwgdGVtcFswXSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8dWw+XG4gICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuaW5wdXR9IG9uSW5wdXQ9eyhlKSA9PiB0aGlzLmlucHV0ID0gZS50YXJnZXQudmFsdWV9PjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICAgIHskbWFwKFxuICAgICAgICAgIHRoaXMubGlzdCwgIC8vIGFycmF5XG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAgIC8vIGl0ZW0uaW5kZXggbWVhbiBpbmRleFxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlLnRleHR9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgeyRpZihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5pbmRleCA8IHRoaXMubGlzdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3dhcChpdGVtLmluZGV4KX0+U1dBUCBORVhUPC9idXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiA8c3Bhbj5bVEhFIExBU1RdPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBhbmQga2VlcCB1bmlxdWUgaW4gbGlzdFxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS5pZDtcbiAgICAgICAgICB9XG4gICAgICApfVxuICAgIDwvdWw+O1xuICB9XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJsZXQlMjBjb3VudCUyMCUzRCUyMDAlM0IlMEFleHBvcnQlMjBkZWZhdWx0JTIwY2xhc3MlMjBBcHAlMjAlN0IlMEElMjAlMjAlNDByZWFjdGl2ZSUyMGxpc3QlMjAlM0QlMjAlNUIlN0IlMEElMjAlMjAlMjAlMjBpZCUzQSUyMGNvdW50JTJCJTJCJTJDJTBBJTIwJTIwJTIwJTIwdGV4dCUzQSUyMCUyNiUyMzAzOSUzQnRvZG8lMjYlMjMwMzklM0IlMkMlMEElMjAlMjAlMjAlMjBjb21wbGV0ZWQlM0ElMjBmYWxzZSUyQyUwQSUyMCUyMCU3RCU1RCUzQiUwQSUyMCUyMCU0MHJlYWN0aXZlJTIwaW5wdXQlMjAlM0QlMjAlMjYlMjMwMzklM0IlMjYlMjMwMzklM0IlM0IlMEElMEElMjAlMjBhZGRUb2RvKCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBhcnJheS5wdXNoJTJGc3BsaWNlJTJGc2hpZnQlMkZ1bnNoaWZ0JTIwdG8lMjBtdXRhdGUlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmxpc3QucHVzaCglN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZCUzQSUyMGNvdW50JTJCJTJCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGV4dCUzQSUyMHRoaXMuaW5wdXQlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb21wbGV0ZWQlM0ElMjBmYWxzZSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCU3RCklM0IlMEElMjAlMjAlMjAlMjAlMjAlMjB0aGlzLmlucHV0JTIwJTNEJTIwJTI2JTIzMDM5JTNCJTI2JTIzMDM5JTNCJTNCJTBBJTIwJTIwJTdEJTBBJTBBJTIwJTIwaGFuZGxlU3dhcChpbmRleCklMjAlN0IlMEElMjAlMjAlMjAlMjAlMkYlMkYlMjB1c2UlMjBzcGxpY2UlMjB0byUyMHN3YXAlMjBpdGVtcyUwQSUyMCUyMCUyMCUyMCUyRiUyRiUyMHJlYWN0aXZlJTIwYXJyYXklMjBjYW4lMjBub3QlMjB0cmFjayUyMG5hdGl2ZSUyMHN3YXAlMEElMjAlMjAlMjAlMjBjb25zdCUyMHRlbXAlMjAlM0QlMjAlNUJ0aGlzLmxpc3QlNUJpbmRleCU1RCUyQyUyMHRoaXMubGlzdCU1QmluZGV4JTIwJTJCJTIwMSU1RCU1RCUzQiUwQSUyMCUyMCUyMCUyMHRoaXMubGlzdC5zcGxpY2UoaW5kZXglMkMlMjAyJTJDJTIwdGVtcCU1QjElNUQlMkMlMjB0ZW1wJTVCMCU1RCklM0IlMEElMjAlMjAlN0QlMEElMEElMjAlMjByZW5kZXIlMjAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCdWwlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCaW5wdXQlMjB2YWx1ZSUzRCU3QnRoaXMuaW5wdXQlN0QlMjBvbklucHV0JTNEJTdCKGUpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmlucHV0JTIwJTNEJTIwZS50YXJnZXQudmFsdWUlN0QlMjZndCUzQiUyNmx0JTNCJTJGaW5wdXQlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QnRoaXMuYWRkVG9kbyU3RCUyNmd0JTNCQUREJTIwVE9ETyUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlN0IlMjRtYXAoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGhpcy5saXN0JTJDJTIwJTIwJTJGJTJGJTIwYXJyYXklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG1hcCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0udmFsdWUlMjBtZWFuJTIwaXRlbSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0uaW5kZXglMjBtZWFuJTIwaW5kZXglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVCJTdCaXRlbS5pbmRleCU3RCU1RCUyMCU3Qml0ZW0udmFsdWUudGV4dCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QigpJTIwJTNEJTI2Z3QlM0IlMjB0aGlzLmxpc3Quc3BsaWNlKGl0ZW0uaW5kZXglMkMlMjAxKSU3RCUyNmd0JTNCUkVNT1ZFJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyNGlmKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjBpdGVtLmluZGV4JTIwJTI2bHQlM0IlMjB0aGlzLmxpc3QubGVuZ3RoJTIwLSUyMDElMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCKCklMjAlM0QlMjZndCUzQiUyMHRoaXMuaGFuZGxlU3dhcChpdGVtLmluZGV4KSU3RCUyNmd0JTNCU1dBUCUyME5FWFQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCc3BhbiUyNmd0JTNCJTVCVEhFJTIwTEFTVCU1RCUyNmx0JTNCJTJGc3BhbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0QlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGtleSUyMG1hcCUyQyUyMGFsdGVybmF0aXZlJTIwdG8lMjAlMjZsdCUzQmxpJTIwa2V5JTI2Z3QlM0IlMjBpbiUyMFJlYWN0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwbXVzdCUyMGJlJTIwc3RyaW5nJTIwb3IlMjBudW1iZXIlMkMlMjBhbmQlMjBrZWVwJTIwdW5pcXVlJTIwaW4lMjBsaXN0JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwaXRlbS52YWx1ZS5pZCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCklN0QlMEElMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnVsJTI2Z3QlM0IlM0IlMEElMjAlMjAlN0QlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwicGxheWdyb3VuZFwiPlBsYXlHcm91bmQ8L2gyPlxuPHA+UGxheSBvbmxpbmUgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL25hdWdodHktaGlsbC11Z2tnaj9maWxlPS9zcmMvaW5kZXgudHN4XCI+Q29kZVNhbmRib3g8L2E+PC9wPlxuPC9kaXY+O1xuICAgICAgICB9XG4gICAgfSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9