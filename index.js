/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./helper/code-box/index.tsx":
/*!***********************************!*\
  !*** ./helper/code-box/index.tsx ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var resee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resee */ "../resee/dist/resee.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./helper/code-box/index.less");
;



function htmlDecode(input) {
  var e = document.createElement('textarea');
  e.innerHTML = input; // handle case of empty input

  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var code = _ref.code,
      component = _ref.component;

  var handleCodeRef = function handleCodeRef(dom) {
    setTimeout(function () {
      // @ts-ignore
      dom.innerHTML = Prism.highlight(htmlDecode(dom.innerHTML), Prism.languages.javascript);
    });
  };

  var Component = component;
  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "codebox"
  }, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("pre", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", {
    ref: handleCodeRef,
    dangerouslySetInnerHTML: {
      __html: code
    }
  }))), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    className: "demo"
  }, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(Component, null)));
});

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
;

var Logo = function Logo() {
  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
    className: "logo",
    src: "data:image/png;base64,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"
  });
};

function Header() {
  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("header", {
    id: "header"
  }, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(Logo, null));
}

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
;




var App = function App() {
  return (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
    className: "page-container"
  }, (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)(_components_header__WEBPACK_IMPORTED_MODULE_1__.default, null), (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
    className: "sidebar"
  }), (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
    className: "content"
  }, (0,resee__WEBPACK_IMPORTED_MODULE_2__.h)(_doc_get_started_md__WEBPACK_IMPORTED_MODULE_3__.default, null))));
};

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
/*! export h [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reactive [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export run [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$if": () => /* binding */ $if,
/* harmony export */   "$map": () => /* binding */ $map,
/* harmony export */   "autorun": () => /* binding */ autorun,
/* harmony export */   "h": () => /* binding */ h,
/* harmony export */   "reactive": () => /* binding */ reactive,
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "run": () => /* binding */ run
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

function autorun(fn) {
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

function reactive(obj) {
  var ref = new ProxyRefImpl(obj);
  return ref.value;
}

var ProxyRefImpl = /*#__PURE__*/function () {
  function ProxyRefImpl(obj) {
    this[_d] = true;
    this[_e] = true;
    this._proxy = this._initProxy(obj);
  }

  var _proto4 = ProxyRefImpl.prototype;

  _proto4._initProxy = function _initProxy(obj) {
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

        if (hideRefMode) {
          return ref.value;
        }

        return getRef(key);
      },
      set: function set(_, key, value) {
        depsManager.trigger(that);
        getRef(key).value = value;
        return true;
      }
    });

    function getRef(key) {
      var _Object$getOwnPropert;

      if (refMap.has(key)) {
        return refMap.get(key);
      }

      var getter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(obj, key)) == null ? void 0 : _Object$getOwnPropert.get;

      var value = function value() {
        return obj[key];
      };

      var result;

      if (getter) {
        // computed
        result = new ComputedRefImpl(wrapFnHideRefMode(getter));
      } else if (isRef(value())) {
        result = value();
      } else if (value() !== null && _typeof(value()) === 'object') {
        // reactive object
        result = new ProxyRefImpl(reactive(value()));
      } else if (value() === 'function') {
        result = new RefImpl(wrapFnHideRefMode(value()));
      } else {
        // ref
        result = new RefImpl(value());
      }

      refMap.set(key, result);
      return result;
    }

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
      var _this2 = this;

      Object.keys(newVal).forEach(function (key) {
        _this2._proxy[key] = newVal[key];
      });
      depsManager.trigger(this);
    }
  }]);

  return ProxyRefImpl;
}();

_d = RefSymbol, _e = ProxyRefSymbol;

function run(fn) {
  wrapFnHideRefMode(fn)();
}

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
    autorun(function () {
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
  return reactive({
    value: value,
    index: index
  });
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
  autorun(function (notrack) {
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

  var fragment;
  fragment = comp(props);
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
    node.innerHTML = html;
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
  autorun(function () {
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
  var fragment = new Fragment();

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

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
          var textNode = document.createTextNode('' + reactiveVal.value);
          autorun(function () {
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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var resee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resee */ "../resee/dist/resee.esm.js");
/* harmony import */ var _home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/code-box */ "./helper/code-box/index.tsx");
;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
    id: "getting-started"
  }, "Getting Started"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
    id: "hello-world"
  }, "Hello world"), function () {
    var mod = {
      exports: {}
    };

    (function (module) {
      module.exports = function Hello() {
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Hello World");
      };
    })(mod);

    var component = mod.exports;
    return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
      component: component,
      code: decodeURIComponent("export%20default%20function%20Hello()%20%7B%0A%20%20%20%20return%20%26lt%3Bdiv%26gt%3BHello%20World%26lt%3B%2Fdiv%26gt%3B%3B%0A%7D")
    });
  }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
    id: "state"
  }, "State"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "We can use ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "reactive(object)"), " to create state model."), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Use in ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "JSX")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Mutate it to update in callbacks")), function () {
    var mod = {
      exports: {}
    };

    (function (module) {
      module.exports = function CounterApp() {
        var counter = (0,resee__WEBPACK_IMPORTED_MODULE_0__.reactive)({
          count: 0
        });

        var inc = function inc() {
          return counter.count++;
        };

        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", counter.count, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
          onClick: inc
        }, "ADD")));
      };
    })(mod);

    var component = mod.exports;
    return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
      component: component,
      code: decodeURIComponent("export%20default%20function%20CounterApp()%20%7B%0A%20%20%20%20const%20counter%20%3D%20reactive(%7B%0A%20%20%20%20%20%20%20%20count%3A%200%2C%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20inc%20%3D%20()%20%3D%26gt%3B%20counter.count%20%2B%2B%3B%0A%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20Counter%3A%20%7Bcounter.count%7D%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Binc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%7D")
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
      module.exports = function CounterApp() {
        var counter = (0,resee__WEBPACK_IMPORTED_MODULE_0__.reactive)({
          count: 0,

          // get means computed
          get doubleCount() {
            return counter.count * 2;
          }

        });

        var inc = function inc() {
          return counter.count++;
        };

        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, " Counter: ", counter.count, " "), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, " Double: ", counter.doubleCount, " "), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
          onClick: inc
        }, "ADD")));
      };
    })(mod);

    var component = mod.exports;
    return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
      component: component,
      code: decodeURIComponent("export%20default%20function%20CounterApp()%20%7B%0A%20%20%20%20const%20counter%20%3D%20reactive(%7B%0A%20%20%20%20%20%20%20%20count%3A%200%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20get%20means%20computed%0A%20%20%20%20%20%20%20%20get%20doubleCount()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20counter.count%20*%202%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20inc%20%3D%20()%20%3D%26gt%3B%20counter.count%20%2B%2B%3B%0A%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Counter%3A%20%7Bcounter.count%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%20Double%3A%20%7Bcounter.doubleCount%7D%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Binc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%7D")
    });
  }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
    id: "component"
  }, "Component"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Function is just component"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, "Props is a object (maybe reactive)")), function () {
    var mod = {
      exports: {}
    };

    (function (module) {
      function Display(_ref) {
        var count = _ref.count;
        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "I will display count from ", '<Display/>', ": ", count);
      }

      module.exports = function CounterApp() {
        var counter = (0,resee__WEBPACK_IMPORTED_MODULE_0__.reactive)({
          count: 0
        });

        var inc = function inc() {
          return counter.count++;
        };

        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(Display, {
          count: counter.count
        }), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
          onClick: inc
        }, "ADD")));
      };
    })(mod);

    var component = mod.exports;
    return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
      component: component,
      code: decodeURIComponent("function%20Display(%7B%20count%20%7D)%20%7B%0A%20%20%20%20return%20%26lt%3Bp%26gt%3BI%20will%20display%20count%20from%20%7B%26%23039%3B%26lt%3BDisplay%2F%26gt%3B%26%23039%3B%7D%3A%20%7Bcount%7D%26lt%3B%2Fp%26gt%3B%3B%0A%7D%0Aexport%20default%20function%20CounterApp()%20%7B%0A%20%20%20%20const%20counter%20%3D%20reactive(%7B%0A%20%20%20%20%20%20%20%20count%3A%200%2C%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20inc%20%3D%20()%20%3D%26gt%3B%20counter.count%20%2B%2B%3B%0A%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3BDisplay%20count%3D%7Bcounter.count%7D%2F%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Binc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%7D")
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
      module.exports = function CounterApp() {
        var counter = (0,resee__WEBPACK_IMPORTED_MODULE_0__.reactive)({
          count: 0
        });

        var inc = function inc() {
          return counter.count++;
        };

        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Counter: ", counter.count, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
          onClick: inc
        }, "ADD")), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "count >= 3 :", (0,resee__WEBPACK_IMPORTED_MODULE_0__.$if)( // cond
        function () {
          return counter.count >= 3;
        }, // yes
        function () {
          return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "YES ", counter.count);
        }, // NO
        function () {
          return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "NO ", counter.count);
        })));
      };
    })(mod);

    var component = mod.exports;
    return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
      component: component,
      code: decodeURIComponent("export%20default%20function%20CounterApp()%20%7B%0A%20%20%20%20const%20counter%20%3D%20reactive(%7B%0A%20%20%20%20%20%20%20%20count%3A%200%2C%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20inc%20%3D%20()%20%3D%26gt%3B%20counter.count%20%2B%2B%3B%0A%0A%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20Counter%3A%20%7Bcounter.count%7D%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Binc%7D%26gt%3BADD%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bp%26gt%3Bcount%20%26gt%3B%3D%203%20%3A%20%0A%20%20%20%20%20%20%20%20%7B%24if(%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20cond%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20counter.count%20%26gt%3B%3D%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20yes%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BYES%20%7Bcounter.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20NO%0A%20%20%20%20%20%20%20%20%20%20%20%20()%20%3D%26gt%3B%20%26lt%3Bdiv%26gt%3BNO%20%7Bcounter.count%7D%26lt%3B%2Fdiv%26gt%3B%2C%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fp%26gt%3B%0A%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%7D")
    });
  }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
    id: "map"
  }, "$map"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Use ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("code", null, "$map"), " for a list map"), function () {
    var mod = {
      exports: {}
    };

    (function (module) {
      var count = 0;

      module.exports = function App() {
        var todolist = (0,resee__WEBPACK_IMPORTED_MODULE_0__.reactive)({
          list: ['test' + count++]
        });

        var addTodo = function addTodo() {
          // use array.push/splice/shift/unshift to mutate
          todolist.list.push('new todo' + count++);
        };

        return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
          onClick: addTodo
        }, "ADD TODO"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.$map)(todolist.list, // array
        function (item) {
          // map
          // item.value mean item
          // item.index mean index
          return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "[", item.index, "] ", item.value, (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
            onClick: function onClick() {
              return todolist.list.splice(item.index, 1);
            }
          }, "REMOVE"));
        }, function (item) {
          // key map, alternative to <li key> in React
          // must be string or number, and keep unique in list
          return item.value;
        }));
      };
    })(mod);

    var component = mod.exports;
    return (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)(_home_runner_work_resee_resee_packages_resee_site_helper_code_box__WEBPACK_IMPORTED_MODULE_1__.default, {
      component: component,
      code: decodeURIComponent("let%20count%20%3D%200%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20todolist%20%3D%20reactive(%7B%0A%20%20%20%20%20%20list%3A%20%5B%26%23039%3Btest%26%23039%3B%20%2B%20count%20%2B%2B%20%5D%2C%0A%20%20%7D)%3B%0A%0A%20%20const%20addTodo%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%2F%2F%20use%20array.push%2Fsplice%2Fshift%2Funshift%20to%20mutate%0A%20%20%20%20%20%20todolist.list.push(%26%23039%3Bnew%20todo%26%23039%3B%20%2B%20count%20%2B%2B)%3B%0A%20%20%7D%0A%0A%20%20return%20%26lt%3Bul%26gt%3B%0A%20%20%20%20%26lt%3Bbutton%20onClick%3D%7BaddTodo%7D%26gt%3BADD%20TODO%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%7B%24map(%0A%20%20%20%20%20%20%20%20todolist.list%2C%20%20%2F%2F%20array%0A%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20map%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.value%20mean%20item%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20item.index%20mean%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7Bitem.index%7D%5D%20%7Bitem.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7B()%20%3D%26gt%3B%20todolist.list.splice(item.index%2C%201)%7D%26gt%3BREMOVE%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20(item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20key%20map%2C%20alternative%20to%20%26lt%3Bli%20key%26gt%3B%20in%20React%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20must%20be%20string%20or%20number%2C%20and%20keep%20unique%20in%20list%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20item.value%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20)%7D%0A%20%20%26lt%3B%2Ful%26gt%3B%3B%0A%7D%0A%0A")
    });
  }());
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vaGVscGVyL2NvZGUtYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9iYXRjaGVyLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3JlYWN0aXZlLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9oLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi9zcmMvZG9jL2dldC1zdGFydGVkLm1kIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uL2hlbHBlci9jb2RlLWJveC9pbmRleC5sZXNzPzk1NTEiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uL3NyYy9pbmRleC5sZXNzPzk2YzUiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiaHRtbERlY29kZSIsImlucHV0IiwiZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVmFsdWUiLCJjb2RlIiwiY29tcG9uZW50IiwiaGFuZGxlQ29kZVJlZiIsImRvbSIsInNldFRpbWVvdXQiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJDb21wb25lbnQiLCJfX2h0bWwiLCJMb2dvIiwiSGVhZGVyIiwiQXBwIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXNrcyIsInRpbWVyIiwic2NoZWR1bGUiLCJ0YXNrIiwidGFza0l0ZW1zIiwiQXJyYXkiLCJ0YXNrSXRlbSIsImluc2VydCIsImFycmF5IiwiaW5kZXgiLCJpdGVtIiwiRnJhZ21lbnQiLCJjb25zdHJ1Y3RvciIsIm9iaiIsImFwcGVuZENoaWxkIiwibm9kZSIsImFwcGVuZFRvQ29udGFpbmVyIiwiY29udGFpbmVyIiwicmVwbGFjZVdpdGgiLCJmcmFnbWVudCIsInJhbmdlIiwiY3JlYXRlRW1wdHkiLCJpbnNlcnRCZWZvcmVUb0NvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwicGFyZW50Iiwic3RhcnRQb3MiLCJnZXRGaXJzdE5vZGUiLCJGcmFnbWVudExpc3QiLCJhcHBlbmRGcmFnbWVudCIsImNoaWxkIiwicmVtb3ZlV2l0aEtleXMiLCJrZXlzIiwibW92ZSIsImluc2VydEJlZm9yZSIsImluc2VydEJlZm9yZU5vZGUiLCJ0YXJnZXQiLCJkZWxldGVJbmRleCIsInRvSW5kZXgiLCJSZWZTeW1ib2wiLCJTeW1ib2wiLCJpc1JlZiIsInIiLCJoaWRlUmVmTW9kZSIsIndyYXBGbkhpZGVSZWZNb2RlIiwiZm4iLCJwcm94eU9iak1hcCIsIkRlcHNNYW5hZ2VyIiwiX2FkZERlcCIsIl9nZXREZXBzIiwiYmVnaW5Db2xsZWN0IiwiZW5kQ29sbGVjdCIsInRyYWNrIiwidHJpZ2dlciIsImRlcHMiLCJkZXAiLCJkZXBzTWFuYWdlciIsIkF1dG9ydW5SZWZJbXBsIiwiX3J1biIsImF1dG9ydW4iLCJSZWZJbXBsIiwidmFsIiwiQ29tcHV0ZWRSZWZJbXBsIiwiX3JlY29tcHV0ZSIsIlByb3h5UmVmU3ltYm9sIiwicHJveHlNYXAiLCJyZWFjdGl2ZSIsInJlZiIsIlByb3h5UmVmSW1wbCIsIl9pbml0UHJveHkiLCJ0aGF0IiwicmVmTWFwIiwicHJveHkiLCJnZXQiLCJrZXkiLCJjYiIsImxlbiIsImNvdW50IiwiaSIsImdldFJlZiIsImlzUHJveHlSZWYiLCJzZXQiLCJnZXR0ZXIiLCJPYmplY3QiLCJ2YWx1ZSIsInJlc3VsdCIsIm5ld1ZhbCIsInJ1biIsImRpcmVjdGl2ZSIsImZ1bmMiLCJpc0RpcmVjdGl2ZSIsIiRpZiIsImNvbmQiLCJ5ZXMiLCJubyIsImluaXRlZCIsIm5ld1Jlc3VsdCIsImxhc3RSZXN1bHQiLCJsYXN0RnJhZ21lbnQiLCJuZXdGcmFnbWVudCIsIiRtYXAiLCJyYXdMaXN0IiwibWFwRnVuYyIsImtleUZ1bmMiLCJsaXN0IiwibGlzdERhdGEiLCJsYXN0UmVhY3RpdmVJdGVtcyIsImNyZWF0ZVJlYWN0aXZlSXRlbSIsImZyYWdtZW50TGlzdCIsIm1hcEZ1bmNXcmFwIiwia2V5RnVuY1dyYXAiLCJjb25zb2xlIiwibGFzdEZyYWdtZW50cyIsImxhc3RLZXlzIiwibmV3TGlzdCIsIm5vdHJhY2siLCJuZXdLZXlzIiwibGFzdEluZGV4IiwicmVhY3RpdmVJdGVtIiwiZnJvbUluZGV4IiwicmVtb3ZlZCIsInByb3BzIiwiY29tcCIsImh0bWwiLCJsYXN0VmFsdWUiLCJpc0V2ZW50IiwiZXZlbnROYW1lIiwibGFzdFZhbHVlRXZlbnRIYW5kbGVyIiwic2V0QXR0ciIsIm5ld1ZhbHVlIiwiaCIsInR5cGUiLCJjaGlsZHJlbiIsInRhZyIsImJpbmRBdHRyIiwicmVhY3RpdmVWYWwiLCJ0ZXh0Tm9kZSIsImJ1aWxkQ29tcG9uZW50IiwibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsIkhlbGxvIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiQ291bnRlckFwcCIsImNvdW50ZXIiLCJpbmMiLCJkb3VibGVDb3VudCIsIkRpc3BsYXkiLCJ0b2RvbGlzdCIsImFkZFRvZG8iLCJwdXNoIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQ3RCLE1BQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVI7QUFDQUYsR0FBQyxDQUFDRyxTQUFGLEdBQWNKLEtBQWQsQ0FGc0IsQ0FHdEI7O0FBQ0EsU0FBT0MsQ0FBQyxDQUFDSSxVQUFGLENBQWFDLE1BQWIsS0FBd0IsQ0FBeEIsR0FBNEIsRUFBNUIsR0FBaUNMLENBQUMsQ0FBQ0ksVUFBRixDQUFhLENBQWIsRUFBZ0JFLFNBQXhEO0FBQ0Q7O0FBRUgsaUVBQWUsZ0JBTVQ7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxTQUlFLFFBSkZBLFNBSUU7O0FBRUYsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxHQUFELEVBQXNCO0FBQ3RDQyxjQUFVLENBQUMsWUFBTTtBQUNiO0FBQ0FELFNBQUcsQ0FBQ1AsU0FBSixHQUFnQlMsS0FBSyxDQUFDQyxTQUFOLENBQWdCZixVQUFVLENBQUNZLEdBQUcsQ0FBQ1AsU0FBTCxDQUExQixFQUEyQ1MsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxVQUEzRCxDQUFoQjtBQUNILEtBSFMsQ0FBVjtBQUlILEdBTEQ7O0FBT0EsTUFBTUMsU0FBUyxHQUFHUixTQUFsQjtBQUVBLFNBQU87QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNILHNEQUNJLHNEQUFLO0FBQU0sT0FBRyxFQUFFQyxhQUFYO0FBQTBCLDJCQUF1QixFQUFFO0FBQUNRLFlBQU0sRUFBRVY7QUFBVDtB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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgaCB9IGZyb20gXCJyZXNlZVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuZnVuY3Rpb24gaHRtbERlY29kZShpbnB1dCl7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGUuaW5uZXJIVE1MID0gaW5wdXQ7XG4gICAgLy8gaGFuZGxlIGNhc2Ugb2YgZW1wdHkgaW5wdXRcbiAgICByZXR1cm4gZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gICAgY29kZSxcbiAgICBjb21wb25lbnQsXG59OiB7XG4gICAgY29kZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudDogRnVuY3Rpb24sXG59KSA9PiB7XG5cbiAgICBsZXQgaGFuZGxlQ29kZVJlZiA9IChkb206IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodChodG1sRGVjb2RlKGRvbS5pbm5lckhUTUwpLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2RlYm94XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlPjxjb2RlIHJlZj17aGFuZGxlQ29kZVJlZn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvZGV9fT48L2NvZGU+PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtb1wiPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG59XG4iLCJpbXBvcnQge1xuICAgIGgsXG59IGZyb20gJ3Jlc2VlJztcblxuY29uc3QgTG9nbyA9ICgpID0+IDxpbWdcbiAgICBjbGFzc05hbWU9XCJsb2dvXCIgXG4gICAgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFiQUFBQUJzQ0FNQUFBQThHeGY0QUFBQUFYTlNSMElCMmNrc2Z3QUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQWNKUVRGUkZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE4NFFHNGdBQUFKWjBVazVUQU9uL01XQnRvQ1h5T21wNEFhb3VKNSthQjNaUEJwa29UVWtSUEFyTmlSaG5HMzFRUVE5TEtuUmNpRnAzRXhBVWpBa0lsYklFQXRHQWZ0VTBNbUhLQTN0aldCYmRhMmFwUnRsSVBTK2RsMTNqVWhjZUVsVjh4SkdsdXJDS3duQlhVWk9jaGw1VUxCMVRwME1GZzRkeUZXVU51TDBPdnhsQU9FVGtycXpsR3V1M2I3WU1Ubm1XTlNSb2VoOHR4N1NPY1lJTGoyUXpBL3BweFFBQUJ0cEpSRUZVZUp6dG5mdDNGRFVVeDlOSWNTbXZwVnBwcGRqU1dvVkN0UmJhU3NXdGdBSkZ4ZnFpS2lMaUMwV2tLRnF0TDN5QktPRGIvOWU1NFhqTzdEVDVablpJT0xlOStmNld2Wk9iN1AzTWRtZVRtVytWU2twS1NrcEtTa3BLU21wSmJScnBqb3BaVjhHc1VPMlZKd3NGc3E2dW5oWFU1ODRvYzFXcUJydXVnWDNkNnFnKzI3V1ZKd3UxenAxMWZmV3NvRDRicW1kdHlyT3hYdC9VV2JvR3BZSGRWYS9mbld1eUJ0WjFUNzIrT1pjMUVMRHVlajAvOTFEQWVySVg3czIxdC9RZzlaWUZ0bFhyKzNMTlBwUzB2d05GdDRGUjBHUzdCd1pCOVA1Y2xxR3NCQS9rMmcraTZXemZnYUw1K2d4cnZUWFg3RUw5ZHU1Q1VRZ3NrQXJBV0tzSUxKQUt3RUlwQVV2QVNBbFlBaFpOQ1poS3dGUUNGazhpZ0kwOGhPTVJnWTA4SERpaEJHRFpleHg5QkIwUURkallicTJId3FhVUFHeGIxbXZQT0RnZ0ZyQ0o5ZUgvaEVzQXBpYXpibytDZUN4Z2U3Tnhwd0xuRkFITUxMOC81bzVIQXJhUGhuMDhjRklSd01abzNiVXg3WXpIQVRaTkgrd2EvUEtzSUJIQTFCTjBydTkzaHVNQU8wQ0RvdVg3U3BJQjdDRFZydWJzR1FWWTE1TTBhT2lyZWlIQTFDWXEzbE91YUJSZ2gyakl3OEhUQ2dGMmhLbzM0OXE0alFKc2lvWThHanl0RUdCalpqUDBhVWMwQnJCbmFNQTI5T3V2bW9RQXU3bVQvcXdqR0FQWU1BMTRMSFJXT2NDZU15ZThJeGdEMkN3TitIem9ySEtBdldEK0pyNW9EMFlBMW1mR2V5bHdWaVVIR0VIUittVm5MRFF3bXFtZURaeVVKQWFZK1JJYnRjY2lBRHRPdzgwRlRrb1NBK3dWcXVDcjlsZ0VZSFV3M0MxSkRMQzFWTUhYN0xFSXdFN1FjSzhIVGtvU0E4eXMyRS9hWXhHQW5hVGgzZ2ljbENRRzJGRndYUjhCbUZubk9CVTRLVWtNc0NPM0Y5Z01EZmRtNEtRa01jRE1MK2NaZXl3Q3NEa2E3bERncENReHdNeEZ4MGw3TE5aRng5N0FTVWxpZ0oybUNwNnd4eUlBZXl2U1VxSWNZT2FVUDIyUFJRRDJOamcvYmtsaWdKbWxxWGVjc2REQTNxWGhZcFJBQ3JCeHN4ajduajBZQWRnWk01N25qdU1xa2dKc2pTbWdZejh4MnZiSys2R3p5Z0UyUVBYN3dCR01BY3dzSnRaRFo1VURyRUgxNjNFRVl3QTdTd1BXMGkwQ0ZZRnROdVg3MEJHTkFXekMzT1ZXMVhuQ0xTSEF6bEgxUG5KRm85dzFkWjZHSEE2ZVZnYXdjZU5DTSs4S1J3RTJiejdVcGEwbnlrb0dzRUVxM25Gbk9NNnQydVlqZGlGMFZobkE2SktqOXJFekhBZFlGNjNZejB3RXppb0NtTGxpTytDT1IzcmM2Q3k2TXEwcUVjQSswZmd1OTFnUDlORUs4TVhBT1NVQW8vYzRoUjQxamdXc2x4WXdENGJOdWJ5QmxmTkwvRlRyeVRNb2JRRVk5a3RzWlFsKy9qT3RGMXFickU5RllOZ3ZFZmszTnFrQXpPT1hXRGJyRW1BbDdmYys3eG1EYVF2QXNQMmU0ODRyaDc1WWJIV3lIaFdCWWZ1OTBzOFRGb0I1N1BlQWYyT3pMbVFIOStYYWdmd1N2OVQ2cTF3ekpMRGdrNldmZC8yNWRpQmdYMnY5VGE0WkNsaDdkdkMzdVhZZ3Y4UkxXbitYYTBLL3hKNE5aYk1XRldheTlKREE5N2syOUV1RS9vMU4ra0hyUzdrbTlFdHM4bS9FU3RaRnkveWlvNFIrTEhIcUptQjhnQTNvMmsvZWd4SXdOc0I2c3c1dFhyZW5CSXdOc0hHNk5MdnNPeW9CWXdQTWJJUjU5emdTTUQ3QUZuVGhkNHROcklCNXpCMVhPakIxSmVzeTY3bTFnaE13bjduamlnZG1Wc1VjenpiL0wwN0FmT2FPS3g2WU9wejFtY1JyS1p5QStjd2RWejZ3bitranRnZ1BZUVhNWSs2NDhvR3BpOXEzamNnS21NZmNVUUN3Ulh6S0ttYkFQT2FPQW9DdG8yOEY2SVBIQ3hnMmR4UUFUSjJpQ2x3RkIvQUNoczBkSlFBYnB5ZEpyb0FEbUFHRDVvNFNnS2xmcUFJTDdqZ3pZTkRjVVFTd1hycndPdWVPTXdNR3pSMUZBRk8vMHRlNGU1ZUZHekJrN2lnRDJBaFY0THd6ekEwWU1uZVVBVXlOMGluYjZZcHlBNGJNSFlVQXUwWVZXT1dLc2dNR3pCMkZBRE9QSE0rNDFudllBUVBtamxLQVhhY1N1RzdIWVFjTW1EdEtBYWIyWkYxdk9HTHNnQUZ6UnpIQXRvQWZvK3lBQVhOSE1jRFVqYXp2Yi9ZUU8yREEzRkVPc0c0cXduVnJpQjB3WU80b0I5ZzBQWEs4MmhwaUJ3eVlPOG9CZHZPYi9Kb3R3ZzRZTUhjVUJLeVRIb0g4M1JaaEJ3eVlPd29DcHY2Z01veFlBdXlBQVhOSFNjQ0dhSmZGWnEvQ0RSZ3lkNVFFVFAxSnV5eC9MWDJkR3pCazdpZ0ttTG5Sdm1QcDY5eUFEZEE4SGVhT29vQ3AzVm4vMmFVM1MzQURoc3dkWlFHN2FyL3NZQVlNbWp2S0FrYnU1TE5MTjFtWUFZUG1qc0tBOWJiL2JiRnQ0QVVNbXpzS0EyWVhMMkRZM0RFQlU5eUFZWFBIQkV3eEErWXhkMHpBRkROZ0huUEhCRXp4QXVZemQwekFWSXQraVpGVTF0eXhOYi9FVWtPU1d2TkxSR3FhN2UwQmh1MzNJcW1zdVdOcmZvbmxobFN0K2lVaU5jMVdBakNQbGhld2ZZM0dYSERyZnFXT05Sci81SnJRTDdHL0F3UzM3MERCUVpTMzdOc2FtMnMwL3MyMW9WOGluRS9Ua1BzYmpmei9FNFIraVR0M29XaGxDa2xKU1NYMEh6SWRKak1Wbjl2UkFBQUFBRWxGVGtTdVFtQ0NcIlxuPlxuPC9pbWc+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgIDwvaGVhZGVyPlxufVxuIiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHJlbmRlciwgIGgsIHJlYWN0aXZlIH0gZnJvbSAncmVzZWUnO1xuXG5pbXBvcnQgRG9jR2V0U3RhcnRlZCBmcm9tICcuL2RvYy9nZXQtc3RhcnRlZC5tZCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPERvY0dldFN0YXJ0ZWQvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICA8L2Rpdj47XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiY29uc3QgdGFza3M6IFNldDxGdW5jdGlvbj4gPSBuZXcgU2V0KCk7XG5sZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZSh0YXNrOiBGdW5jdGlvbikge1xuICB0YXNrcy5hZGQodGFzayk7XG4gIGlmICghdGltZXIpIHtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgY29uc3QgdGFza0l0ZW1zID0gQXJyYXkuZnJvbSh0YXNrcy52YWx1ZXMoKSk7XG4gICAgICB0YXNrcy5jbGVhcigpO1xuICAgICAgdGFza0l0ZW1zLmZvckVhY2godGFza0l0ZW0gPT4ge1xuICAgICAgICB0YXNrSXRlbSgpO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpbnNlcnQ8VD4oYXJyYXk6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyLCBpdGVtOiBUKSB7XG4gIGFycmF5LnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5nZUZyb21Ob2Rlcyhub2RlczogTm9kZVtdKSB7XG4gIGNvbnN0IHBhcmVudCA9IG5vZGVzWzBdLnBhcmVudE5vZGU7XG4gIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudD8uY2hpbGROb2Rlcywgbm9kZXNbMF0pO1xuICByYW5nZS5zZXRTdGFydChwYXJlbnQhLCBzdGFydFBvcyk7XG4gIHJhbmdlLnNldEVuZChwYXJlbnQhLCBzdGFydFBvcyArIG5vZGVzLmxlbmd0aCk7XG4gIHJldHVybiByYW5nZTtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IFJlYWN0aXZlSXRlbSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IGluc2VydCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnQge1xuICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29udGFpbmVyPzogTm9kZTtcbiAgY2hpbGROb2RlczogTm9kZVtdID0gW107XG4gIGtleT86IG51bWJlciB8IHN0cmluZztcbiAgcmVhY3RpdmVJdGVtPzogUmVhY3RpdmVJdGVtPGFueT47XG5cbiAgc3RhdGljIGlzRnJhZ21lbnQob2JqOiB1bmtub3duKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSAob2JqIGFzIE9iamVjdCkuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yID09PSBGcmFnbWVudCB8fCBjb25zdHJ1Y3RvciA9PT0gRnJhZ21lbnRMaXN0O1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQ6IE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gY2hpbGQgYXMgTm9kZTtcbiAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKG5vZGUpO1xuICB9XG5cbiAgYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jcmVhdGVFbXB0eSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcbiAgfVxuXG4gIHJlcGxhY2VXaXRoKGZyYWdtZW50OiBGcmFnbWVudCkge1xuICAgIGZyYWdtZW50LmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgcmFuZ2UuaW5zZXJ0Tm9kZShmcmFnbWVudC5mcmFnbWVudCk7XG4gICAgcmFuZ2UuZGV0YWNoKCk7XG4gIH1cblxuICBjcmVhdGVFbXB0eSgpIHtcbiAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbXB0eScpKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRCZWZvcmVUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUsIGJlZm9yZU5vZGU6IE5vZGUgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAvLyBoYXMgYSBjb250YWluZXIgYWxyZWFkeVxuICAgICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBjdXJyZW50IGNvbnRhaW5lciBmaXJzdFxuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lciEucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jcmVhdGVFbXB0eSgpO1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5mcmFnbWVudCwgYmVmb3JlTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmNoaWxkTm9kZXNbMF0ucGFyZW50Tm9kZSE7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgIHBhcmVudD8uY2hpbGROb2RlcyxcbiAgICAgIHRoaXMuY2hpbGROb2Rlc1swXVxuICAgICk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQocGFyZW50LCBzdGFydFBvcyk7XG4gICAgcmFuZ2Uuc2V0RW5kKHBhcmVudCwgc3RhcnRQb3MgKyB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBnZXRGaXJzdE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnJhZ21lbnRMaXN0IGV4dGVuZHMgRnJhZ21lbnQge1xuICBjaGlsZEZyYWdtZW50czogRnJhZ21lbnRbXSA9IFtdO1xuXG4gIGFwcGVuZEZyYWdtZW50KGNoaWxkOiBGcmFnbWVudCwga2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjaGlsZC5hcHBlbmRUb0NvbnRhaW5lcih0aGlzLmZyYWdtZW50KTtcbiAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnB1c2goY2hpbGQpO1xuICAgIGNoaWxkLmtleSA9IGtleTtcbiAgfVxuXG4gIGluc2VydChpbmRleDogbnVtYmVyLCBmcmFnbWVudDogRnJhZ21lbnQsIG5ld0tleTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgZnJhZ21lbnQua2V5ID0gbmV3S2V5O1xuICAgIGZyYWdtZW50Lmluc2VydEJlZm9yZVRvQ29udGFpbmVyKFxuICAgICAgdGhpcy5jb250YWluZXIhLFxuICAgICAgdGhpcy5jaGlsZEZyYWdtZW50c1tpbmRleF0/LmdldEZpcnN0Tm9kZSgpIHx8IG51bGxcbiAgICApO1xuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCBpbmRleCwgZnJhZ21lbnQpO1xuICB9XG5cbiAgcmVtb3ZlV2l0aEtleXMoa2V5czogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGNoaWxkLmtleSEpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGNoaWxkO1xuICAgICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5nZSA9IGZyYWdtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICAgIHJhbmdlLmRldGFjaCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBpbnNlcnRCZWZvcmUgPSB0aGlzLmNoaWxkRnJhZ21lbnRzW3RvSW5kZXhdO1xuXG4gICAgbGV0IGluc2VydEJlZm9yZU5vZGU6IE5vZGUgfCBudWxsID0gaW5zZXJ0QmVmb3JlPy5nZXRGaXJzdE5vZGUoKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2hpbGRGcmFnbWVudHNbZnJvbUluZGV4XSE7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZVRvQ29udGFpbmVyKHRoaXMuY29udGFpbmVyISwgaW5zZXJ0QmVmb3JlTm9kZSk7XG5cbiAgICBpbnNlcnQodGhpcy5jaGlsZEZyYWdtZW50cywgdG9JbmRleCwgdGFyZ2V0KTtcbiAgICBsZXQgZGVsZXRlSW5kZXggPSBmcm9tSW5kZXg7XG4gICAgaWYgKHRvSW5kZXggPCBmcm9tSW5kZXgpIHtcbiAgICAgIGRlbGV0ZUluZGV4ICs9IDE7XG4gICAgfVxuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcbiAgfVxufVxuIiwiY29uc3QgUmVmU3ltYm9sID0gU3ltYm9sKCdyZWYnKTtcbmNvbnN0IEludGVybmFsUmF3U3ltYm9sID0gU3ltYm9sKCdpbnRlcm5hbF9yYXcnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmPFQ+KHI6IFJlZjxUPiB8IHVua25vd24pOiByIGlzIFJlZjxUPjtcbmV4cG9ydCBmdW5jdGlvbiBpc1JlZihyOiBhbnkpOiByIGlzIFJlZiB7XG4gIHJldHVybiByICYmIChyIGFzIFJlZilbUmVmU3ltYm9sXSA9PT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVmPFQ+KHJlZjogVCk6IFQgZXh0ZW5kcyBSZWY8aW5mZXIgVj4gPyBWIDogVCB7XG4gIHJldHVybiBpc1JlZihyZWYpID8gKHJlZi52YWx1ZSBhcyBhbnkpIDogcmVmO1xufVxuXG50eXBlIEtleSA9IHN0cmluZyB8IHN5bWJvbCB8IG51bWJlcjtcblxubGV0IGhpZGVSZWZNb2RlID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwRm5IaWRlUmVmTW9kZTxUIGV4dGVuZHMgRnVuY3Rpb24+KGZuOiBUKSB7XG4gIHJldHVybiAoZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICBoaWRlUmVmTW9kZSA9IHRydWU7XG4gICAgY29uc3QgciA9IGZuKC4uLmFyZ3MpO1xuICAgIGhpZGVSZWZNb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIHI7XG4gIH0gYXMgdW5rbm93bikgYXMgVDtcbn1cblxuY29uc3QgcHJveHlPYmpNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE9iamVjdD4oKTtcblxuY2xhc3MgRGVwc01hbmFnZXIge1xuICBwcml2YXRlIF9jb2xsZWN0aW5nOiBUcmlnZ2VyYWJsZVJlZltdID0gW107XG4gIHByaXZhdGUgX2RlcHMgPSBuZXcgV2Vha01hcDxSZWYsIFNldDxUcmlnZ2VyYWJsZVJlZj4+KCk7XG5cbiAgcHJpdmF0ZSBfYWRkRGVwKHRhcmdldDogUmVmLCB0cmlnZ2VyOiBUcmlnZ2VyYWJsZVJlZikge1xuICAgIGlmICghdGhpcy5fZGVwcy5oYXModGFyZ2V0KSkge1xuICAgICAgdGhpcy5fZGVwcy5zZXQodGFyZ2V0LCBuZXcgU2V0KCkpO1xuICAgIH1cbiAgICB0aGlzLl9kZXBzLmdldCh0YXJnZXQpIS5hZGQodHJpZ2dlcik7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXBzKHRhcmdldDogUmVmKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fZGVwcy5nZXQodGFyZ2V0KT8udmFsdWVzKCkgfHwgW10pO1xuICB9XG5cbiAgYmVnaW5Db2xsZWN0KHJlZjogVHJpZ2dlcmFibGVSZWYpIHtcbiAgICB0aGlzLl9jb2xsZWN0aW5nLnB1c2gocmVmKTtcbiAgfVxuXG4gIGVuZENvbGxlY3QoKSB7XG4gICAgdGhpcy5fY29sbGVjdGluZy5wb3AoKTtcbiAgfVxuXG4gIHRyYWNrKHRhcmdldDogUmVmKSB7XG4gICAgaWYgKHRoaXMuX2NvbGxlY3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYWRkRGVwKHRhcmdldCwgdGhpcy5fY29sbGVjdGluZ1t0aGlzLl9jb2xsZWN0aW5nLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyKHRhcmdldDogUmVmKSB7XG4gICAgY29uc3QgZGVwcyA9IHRoaXMuX2dldERlcHModGFyZ2V0KTtcbiAgICBkZXBzLmZvckVhY2goZGVwID0+IGRlcC50cmlnZ2VyKCkpO1xuICB9XG59XG5cbmNvbnN0IGRlcHNNYW5hZ2VyID0gbmV3IERlcHNNYW5hZ2VyKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVmPFQgPSBhbnk+IHtcbiAgW1JlZlN5bWJvbF06IGJvb2xlYW47XG4gIHZhbHVlOiBUO1xufVxuXG5pbnRlcmZhY2UgVHJpZ2dlcmFibGVSZWY8VCA9IGFueT4ge1xuICBbUmVmU3ltYm9sXTogYm9vbGVhbjtcbiAgdmFsdWU6IFQ7XG4gIHRyaWdnZXI6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYXcocmVmOiBSZWYpIHtcbiAgaWYgKGlzUHJveHlSZWYocmVmKSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gcmVmW0ludGVybmFsUmF3U3ltYm9sXTtcbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZWYuX3ZhbHVlO1xufVxuXG5leHBvcnQgdHlwZSBOb1RyYWNrRm4gPSAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQ7XG5cbmNsYXNzIEF1dG9ydW5SZWZJbXBsIHtcbiAgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICB2YWx1ZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm46IChub3RyYWNrRm46IE5vVHJhY2tGbikgPT4gdm9pZCkge1xuICAgIHRoaXMuX3J1bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcnVuKCkge1xuICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcEZuSGlkZVJlZk1vZGUodGhpcy5fZm4pLmNhbGwodGhpcywgKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAvLyBubyB0cmFjayBmblxuICAgICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICAgICAgZm4oKTtcbiAgICAgIGRlcHNNYW5hZ2VyLmJlZ2luQ29sbGVjdCh0aGlzKTtcbiAgICB9KTtcbiAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuX3J1bigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvcnVuKGZuOiAobm90cmFja0ZuOiBOb1RyYWNrRm4pID0+IHZvaWQpIHtcbiAgcmV0dXJuIG5ldyBBdXRvcnVuUmVmSW1wbChmbik7XG59XG5cbmNsYXNzIFJlZkltcGw8VCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZhbHVlOiBUKSB7fVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsOiBUKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQ29tcHV0ZWRSZWZJbXBsPFQgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWUhOiBUO1xuICBwcml2YXRlIF9jb21wdXRlOiAoKSA9PiBUO1xuXG4gIGNvbnN0cnVjdG9yKGdldHRlcjogKCkgPT4gVCkge1xuICAgIHRoaXMuX2NvbXB1dGUgPSBnZXR0ZXI7XG4gIH1cblxuICBwcml2YXRlIF9yZWNvbXB1dGUoKSB7XG4gICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fY29tcHV0ZSgpO1xuICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLl9yZWNvbXB1dGUoKTtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICB0aGlzLl9yZWNvbXB1dGUoKTtcbiAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IFByb3h5UmVmU3ltYm9sID0gU3ltYm9sKCdwcm94eS1yZWYnKTtcblxuZnVuY3Rpb24gaXNQcm94eVJlZih0YXJnZXQ6IHVua25vd24pIHtcbiAgcmV0dXJuIHRhcmdldCAmJiAodGFyZ2V0IGFzIFByb3h5UmVmSW1wbDxhbnk+KVtQcm94eVJlZlN5bWJvbF0gPT09IHRydWU7XG59XG5cbmNvbnN0IHByb3h5TWFwID0gbmV3IFdlYWtNYXA8T2JqZWN0LCBPYmplY3Q+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4ob2JqOiBUKTogVCB7XG4gIGNvbnN0IHJlZiA9IG5ldyBQcm94eVJlZkltcGwob2JqKTtcbiAgcmV0dXJuIHJlZi52YWx1ZTtcbn1cblxuY2xhc3MgUHJveHlSZWZJbXBsPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+IHtcbiAgcHVibGljIFtSZWZTeW1ib2xdID0gdHJ1ZTtcbiAgcHVibGljIFtQcm94eVJlZlN5bWJvbF0gPSB0cnVlO1xuXG4gIHByaXZhdGUgX3Byb3h5OiBUO1xuXG4gIGNvbnN0cnVjdG9yKG9iajogVCkge1xuICAgIHRoaXMuX3Byb3h5ID0gdGhpcy5faW5pdFByb3h5KG9iaik7XG4gIH1cblxuICBwcml2YXRlIF9pbml0UHJveHkob2JqOiBUKTogVCB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHByb3h5TWFwLmhhcyhvYmopKSB7XG4gICAgICByZXR1cm4gcHJveHlNYXAuZ2V0KG9iaikgYXMgVDtcbiAgICB9XG5cbiAgICBjb25zdCByZWZNYXAgPSBuZXcgTWFwPEtleSwgUmVmPigpO1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQoXywga2V5KSB7XG4gICAgICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoYXQpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnbGVuZ3RoJykgcmV0dXJuIG9iai5sZW5ndGg7XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ21hcCcpXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gbWFwKFxuICAgICAgICAgICAgICBjYjogKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4gYW55LFxuICAgICAgICAgICAgICB0aGlzQXJnPzogYW55XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9iai5tYXAoKF9pdGVtOiBhbnksIF9pbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKChwcm94eSBhcyBhbnkpW19pbmRleF0sIF9pbmRleCk7XG4gICAgICAgICAgICAgIH0sIHRoaXNBcmcpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFsncHVzaCcsICdwb3AnLCAnc2hpZnQnLCAndW5zaGlmdCcsICdzcGxpY2UnXS5pbmRleE9mKFxuICAgICAgICAgICAgICBrZXkgYXMgc3RyaW5nXG4gICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgICBpZiAoa2V5ID09PSAncG9wJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IG9iai5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmVmTWFwLmRlbGV0ZShsZW4gLSAxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzcGxpY2UnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvYmoubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gaW5kZXggJiYgaSA8IGluZGV4ICsgY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTWFwLmRlbGV0ZSgnJyArIGkpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID49IGluZGV4ICsgY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTWFwLnNldCgnJyArIChpIC0gY291bnQpLCByZWZNYXAuZ2V0KCcnICsgaSkhKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmTWFwLmRlbGV0ZSgnJyArIGkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvYmpba2V5IGFzIGFueV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhhdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gU3ltYm9sLnNwZWNpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWYgPSBnZXRSZWYoa2V5KTtcbiAgICAgICAgaWYgKGlzUHJveHlSZWYocmVmKSkge1xuICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpZGVSZWZNb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0UmVmKGtleSk7XG4gICAgICB9LFxuICAgICAgc2V0KF8sIGtleSwgdmFsdWUpIHtcbiAgICAgICAgZGVwc01hbmFnZXIudHJpZ2dlcih0aGF0KTtcbiAgICAgICAgZ2V0UmVmKGtleSkhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFJlZihrZXk6IEtleSk6IFJlZiB7XG4gICAgICBpZiAocmVmTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiByZWZNYXAuZ2V0KGtleSkhO1xuICAgICAgfVxuICAgICAgY29uc3QgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk/LmdldDtcbiAgICAgIGNvbnN0IHZhbHVlID0gKCkgPT4gKG9iaiBhcyBhbnkpW2tleV07XG5cbiAgICAgIGxldCByZXN1bHQ6IFJlZjtcbiAgICAgIGlmIChnZXR0ZXIpIHtcbiAgICAgICAgLy8gY29tcHV0ZWRcbiAgICAgICAgcmVzdWx0ID0gbmV3IENvbXB1dGVkUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZShnZXR0ZXIpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNSZWYodmFsdWUoKSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUoKSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUoKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gcmVhY3RpdmUgb2JqZWN0XG4gICAgICAgIHJlc3VsdCA9IG5ldyBQcm94eVJlZkltcGwocmVhY3RpdmUodmFsdWUoKSkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSgpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBSZWZJbXBsKHdyYXBGbkhpZGVSZWZNb2RlKHZhbHVlKCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlZlxuICAgICAgICByZXN1bHQgPSBuZXcgUmVmSW1wbCh2YWx1ZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmVmTWFwLnNldChrZXksIHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJveHlNYXAuc2V0KG9iaiwgcHJveHkpO1xuICAgIHByb3h5T2JqTWFwLnNldChwcm94eSwgb2JqKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgZGVwc01hbmFnZXIudHJhY2sodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5O1xuICB9XG5cbiAgc2V0IHZhbHVlKG5ld1ZhbCkge1xuICAgIE9iamVjdC5rZXlzKG5ld1ZhbCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgKHRoaXMuX3Byb3h5IGFzIGFueSlba2V5XSA9IChuZXdWYWwgYXMgYW55KVtrZXldO1xuICAgIH0pO1xuICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihmbjogKCkgPT4gdm9pZCkge1xuICB3cmFwRm5IaWRlUmVmTW9kZShmbikoKTtcbn1cbiIsImltcG9ydCB7IHNjaGVkdWxlIH0gZnJvbSAnLi9iYXRjaGVyJztcbmltcG9ydCB7IEZyYWdtZW50LCBGcmFnbWVudExpc3QgfSBmcm9tICcuL2ZyYWdtZW50JztcbmltcG9ydCB7IGF1dG9ydW4sIHJlYWN0aXZlLCBSZWYsIHdyYXBGbkhpZGVSZWZNb2RlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmU8VCBleHRlbmRzICgpID0+IEZyYWdtZW50PihmdW5jOiBUKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgZnVuYy5fX2lzZGlyZWN0aXZlX18gPSB0cnVlO1xuICByZXR1cm4gZnVuYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0aXZlKHZhbDogYW55KSB7XG4gIHJldHVybiB2YWw/Ll9faXNkaXJlY3RpdmVfXyA9PT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRpZihcbiAgY29uZDogKCkgPT4gYm9vbGVhbixcbiAgeWVzOiAoKSA9PiBGcmFnbWVudCxcbiAgbm86ICgpID0+IEZyYWdtZW50XG4pIHtcbiAgcmV0dXJuIGRpcmVjdGl2ZSgoKSA9PiB7XG4gICAgbGV0IGxhc3RSZXN1bHQ6IGJvb2xlYW47XG4gICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0RnJhZ21lbnQ6IEZyYWdtZW50O1xuXG4gICAgYXV0b3J1bigoKSA9PiB7XG4gICAgICBjb25zdCBuZXdSZXN1bHQgPSBjb25kKCk7XG4gICAgICBpZiAoIWluaXRlZCkge1xuICAgICAgICBsYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgICAgICBsYXN0RnJhZ21lbnQgPSBsYXN0UmVzdWx0ISA/IHllcygpIDogbm8oKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdGcmFnbWVudCA9IG5ld1Jlc3VsdCA/IHllcygpIDogbm8oKTtcbiAgICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgbGFzdEZyYWdtZW50LnJlcGxhY2VXaXRoKG5ld0ZyYWdtZW50KTtcbiAgICAgICAgbGFzdEZyYWdtZW50ID0gbmV3RnJhZ21lbnQ7XG4gICAgICB9KTtcbiAgICAgIGxhc3RSZXN1bHQgPSBuZXdSZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdEZyYWdtZW50ITtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlSXRlbTxUPih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikge1xuICByZXR1cm4gcmVhY3RpdmUoe1xuICAgIHZhbHVlLFxuICAgIGluZGV4LFxuICB9KTtcbn1cblxuZXhwb3J0IHR5cGUgUmVhY3RpdmVJdGVtPFQ+ID0ge1xuICB2YWx1ZTogVDtcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiAkbWFwPFQ+KFxuICByYXdMaXN0OiBUW10sXG4gIG1hcEZ1bmM6IChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IEZyYWdtZW50LFxuICBrZXlGdW5jOiAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiBzdHJpbmcgfCBudW1iZXJcbikge1xuICBjb25zdCBsaXN0ID0gKHJhd0xpc3QgYXMgYW55KSBhcyBSZWY7XG4gIGNvbnN0IGxpc3REYXRhID0gKGxpc3QgYXMgYW55KSBhcyBUW107XG5cbiAgbGV0IGxhc3RSZWFjdGl2ZUl0ZW1zID0gbGlzdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZUl0ZW0oaXRlbSwgaW5kZXgpO1xuICB9KTtcblxuICBjb25zdCBmcmFnbWVudExpc3QgPSBuZXcgRnJhZ21lbnRMaXN0KCk7XG5cbiAgY29uc3QgbWFwRnVuY1dyYXAgPSB3cmFwRm5IaWRlUmVmTW9kZSgoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBtYXBGdW5jKGl0ZW0pO1xuICAgIGZyYWdtZW50LnJlYWN0aXZlSXRlbSA9IGl0ZW07XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9KTtcblxuICBjb25zdCBrZXlGdW5jV3JhcCA9IHdyYXBGbkhpZGVSZWZNb2RlKChpdGVtOiBSZWFjdGl2ZUl0ZW08VD4pID0+IHtcbiAgICBjb25zdCByID0ga2V5RnVuYyhpdGVtKTtcbiAgICBpZiAodHlwZW9mIHIgIT09ICdzdHJpbmcnICYmIHR5cGVvZiByICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS50cmFjZShcbiAgICAgICAgJ2tleSBvZiAkbWFwIHNob3VsZCByZXR1cm4gc3RyaW5nIG9yIG51bWJlciwgYnV0IGdvdCAnICsgcixcbiAgICAgICAga2V5RnVuYy50b1N0cmluZygpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfSk7XG5cbiAgbGV0IGxhc3RGcmFnbWVudHMgPSBsaXN0RGF0YS5tYXAoKF8sIGluZGV4KSA9PlxuICAgIG1hcEZ1bmNXcmFwKGxhc3RSZWFjdGl2ZUl0ZW1zW2luZGV4XSlcbiAgKTtcbiAgbGV0IGxhc3RLZXlzID0gbGlzdERhdGEubWFwKChfLCBpbmRleCkgPT5cbiAgICBrZXlGdW5jV3JhcChsYXN0UmVhY3RpdmVJdGVtc1tpbmRleF0pXG4gICk7XG5cbiAgbGFzdEZyYWdtZW50cy5mb3JFYWNoKChmcmFnLCBpbmRleCkgPT4ge1xuICAgIGZyYWdtZW50TGlzdC5hcHBlbmRGcmFnbWVudChmcmFnLCBsYXN0S2V5c1tpbmRleF0pO1xuICB9KTtcblxuICBsZXQgaW5pdGVkID0gZmFsc2U7XG5cbiAgYXV0b3J1bihub3RyYWNrID0+IHtcbiAgICBpZiAoIWluaXRlZCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdGVkID0gbGlzdC5sZW5ndGg7XG4gICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3QgPSAobGlzdCBhcyB1bmtub3duKSBhcyBhbnlbXTtcblxuICAgIG5vdHJhY2soKCkgPT4ge1xuICAgICAgY29uc3QgbmV3S2V5cyA9IG5ld0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAga2V5RnVuY1dyYXAoY3JlYXRlUmVhY3RpdmVJdGVtKGl0ZW0sIGluZGV4KSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxhc3RLZXlzID0gZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLm1hcChpdGVtID0+IGl0ZW0ua2V5ISk7XG5cbiAgICAgIC8vIGRpZmYgYW5kIHBhdGNoIGZyb20ga2V5c1xuICAgICAgbmV3S2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXlzID0gZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLm1hcChpdGVtID0+IGl0ZW0ua2V5ISk7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxhc3RLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBpbnNlcnRcbiAgICAgICAgICAvLyBjYW4gbm90IGZpbmQgaW4gb2xkIGxpc3QsIG1lYW4gaW5zZXJ0XG4gICAgICAgICAgLy8gaW5zZXJ0IHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICBjb25zdCByZWFjdGl2ZUl0ZW0gPSBjcmVhdGVSZWFjdGl2ZUl0ZW0obmV3TGlzdFtpbmRleF0sIGluZGV4KTtcblxuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gbWFwRnVuY1dyYXAocmVhY3RpdmVJdGVtKTtcblxuICAgICAgICAgIGZyYWdtZW50TGlzdC5pbnNlcnQoaW5kZXgsIGZyYWdtZW50LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAvLyBtb3ZlXG5cbiAgICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgZnJhZ21lbnRMaXN0Lm1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlbW92ZWQgPSBsYXN0S2V5cy5maWx0ZXIoa2V5ID0+IG5ld0tleXMuaW5kZXhPZihrZXkpID09PSAtMSk7XG4gICAgICBmcmFnbWVudExpc3QucmVtb3ZlV2l0aEtleXMocmVtb3ZlZCk7XG5cbiAgICAgIC8vIGFwcGx5IG5ldyByZWFjdGl2ZUluZGV4XG4gICAgICBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMuZm9yRWFjaChcbiAgICAgICAgKGNoaWxkLCBpbmRleCkgPT4gKGNoaWxkIS5yZWFjdGl2ZUl0ZW0hLmluZGV4ID0gaW5kZXgpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnRMaXN0O1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBhdXRvcnVuLCBpc1JlZiwgUmVmLCB3cmFwRm5IaWRlUmVmTW9kZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50JztcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoXG4gIGNvbXA6IChwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IEZyYWdtZW50LFxuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG4pIHtcbiAgbGV0IGZyYWdtZW50OiBGcmFnbWVudDtcbiAgZnJhZ21lbnQgPSBjb21wKHByb3BzKTtcbiAgcmV0dXJuIGZyYWdtZW50ITtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3Nob3VsZCBiZSBjbGFzc05hbWUsIGJ1dCBnb3QgY2xhc3MnKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJykge1xuICAgIGtleSA9ICdjbGFzcyc7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbHVlLl9faHRtbDtcbiAgICBub2RlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlZicpIHtcbiAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYSAocmVmKSA9PiB2b2lkXG4gICAgdmFsdWUobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBiaW5kQXR0cihub2RlOiBIVE1MRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBSZWY8YW55Pikge1xuICBsZXQgbGFzdFZhbHVlID0gdmFsdWUudmFsdWU7XG5cbiAgY29uc3QgaXNFdmVudCA9IC9eb25bQS1aXS8udGVzdChrZXkpO1xuICBjb25zdCBldmVudE5hbWUgPSBpc0V2ZW50ID8ga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpIDogJyc7XG4gIGxldCBsYXN0VmFsdWVFdmVudEhhbmRsZXIgPSBpc0V2ZW50ID8gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlKSA6ICgpID0+IHt9O1xuXG4gIHNjaGVkdWxlKCgpID0+IHtcbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QXR0cihub2RlLCBrZXksIGxhc3RWYWx1ZSk7XG4gIH0pO1xuXG4gIGF1dG9ydW4oKCkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbGFzdFZhbHVlRXZlbnRIYW5kbGVyID0gd3JhcEZuSGlkZVJlZk1vZGUobGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGFzdFZhbHVlRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0QXR0cihub2RlLCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9KTtcbiAgICBsYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoKFxuICB0eXBlOiBzdHJpbmcgfCBGdW5jdGlvbixcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gIC4uLmNoaWxkcmVuOiBzdHJpbmdbXVxuKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50KCk7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChwcm9wcykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIC9eb25bQS1aXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICBiaW5kQXR0cih0YWcsIGtleSwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlVmFsID0gY2hpbGQgYXMgUmVmPGFueT47XG4gICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyArIHJlYWN0aXZlVmFsLnZhbHVlKTtcbiAgICAgICAgICBhdXRvcnVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVhY3RpdmVWYWwudmFsdWU7XG4gICAgICAgICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGlyZWN0aXZlKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGNoaWxkIGFzICgpID0+IEZyYWdtZW50O1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZGlyZWN0aXZlKCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIodGFnKTtcbiAgICAgICAgfSBlbHNlIGlmIChGcmFnbWVudC5pc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICAgIChjaGlsZCBhcyBGcmFnbWVudCkuYXBwZW5kVG9Db250YWluZXIodGFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGNvbXBvbmVudFxuXG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihmcmFnbWVudDogRnJhZ21lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBuYW1lc3BhY2UgSlNYIHtcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xuICAgICAgW25hbWU6IHN0cmluZ106IGFueTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuICAgIGltcG9ydCB7IGgsIHJlYWN0aXZlLCBhdXRvcnVuLCAkaWYsICRtYXAgfSBmcm9tICdyZXNlZSc7XG4gICAgaW1wb3J0IENvZGVCb3ggZnJvbSAnL2hvbWUvcnVubmVyL3dvcmsvcmVzZWUvcmVzZWUvcGFja2FnZXMvcmVzZWUtc2l0ZS9oZWxwZXIvY29kZS1ib3gnXG4gICAgZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGRpdj48aDEgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuPGgyIGlkPVwiaGVsbG8td29ybGRcIj5IZWxsbyB3b3JsZDwvaDI+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBIZWxsbygpIHtcbiAgICByZXR1cm4gPGRpdj5IZWxsbyBXb3JsZDwvZGl2Pjtcbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMEhlbGxvKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCSGVsbG8lMjBXb3JsZCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwic3RhdGVcIj5TdGF0ZTwvaDI+XG48cD5XZSBjYW4gdXNlIDxjb2RlPnJlYWN0aXZlKG9iamVjdCk8L2NvZGU+IHRvIGNyZWF0ZSBzdGF0ZSBtb2RlbC48L3A+XG48dWw+XG48bGk+VXNlIGluIDxjb2RlPkpTWDwvY29kZT48L2xpPlxuPGxpPk11dGF0ZSBpdCB0byB1cGRhdGUgaW4gY2FsbGJhY2tzPC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb3VudGVyQXBwKCkge1xuICAgIGNvbnN0IGNvdW50ZXIgPSByZWFjdGl2ZSh7XG4gICAgICAgIGNvdW50OiAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGluYyA9ICgpID0+IGNvdW50ZXIuY291bnQgKys7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIENvdW50ZXI6IHtjb3VudGVyLmNvdW50fVxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2Pjtcbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMENvdW50ZXJBcHAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwY291bnRlciUyMCUzRCUyMHJlYWN0aXZlKCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvdW50JTNBJTIwMCUyQyUwQSUyMCUyMCUyMCUyMCU3RCklM0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMGluYyUyMCUzRCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjBjb3VudGVyLmNvdW50JTIwJTJCJTJCJTNCJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0Jjb3VudGVyLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0JpbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcHV0ZWRcIj5Db21wdXRlZDwvaDI+XG48dWw+XG48bGk+PGNvZGU+Z2V0IHgoKTwvY29kZT4gaW4gPGNvZGU+cmVhY3RpdmUob2JqZWN0KTwvY29kZT4gdG8gY3JlYXRlIGNvbXB1dGVkPC9saT5cbjxsaT5jb21wdXRlZCByZXN1bHQgaXMgc2FtZSB3aXRoIHJlYWN0aXZlIGJ1dCByZWFkb25seTwvbGk+XG48L3VsPlxuPGgzIGlkPVwiZXhhbXBsZVwiPkV4YW1wbGU8L2gzPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ291bnRlckFwcCgpIHtcbiAgICBjb25zdCBjb3VudGVyID0gcmVhY3RpdmUoe1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgLy8gZ2V0IG1lYW5zIGNvbXB1dGVkXG4gICAgICAgIGdldCBkb3VibGVDb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyLmNvdW50ICogMjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGluYyA9ICgpID0+IGNvdW50ZXIuY291bnQgKys7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxwPiBDb3VudGVyOiB7Y291bnRlci5jb3VudH0gPC9wPlxuICAgICAgICA8cD4gRG91YmxlOiB7Y291bnRlci5kb3VibGVDb3VudH0gPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2Pjtcbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMENvdW50ZXJBcHAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwY291bnRlciUyMCUzRCUyMHJlYWN0aXZlKCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvdW50JTNBJTIwMCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGdldCUyMG1lYW5zJTIwY29tcHV0ZWQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBnZXQlMjBkb3VibGVDb3VudCgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwY291bnRlci5jb3VudCUyMColMjAyJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTdEKSUzQiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwaW5jJTIwJTNEJTIwKCklMjAlM0QlMjZndCUzQiUyMGNvdW50ZXIuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMjBDb3VudGVyJTNBJTIwJTdCY291bnRlci5jb3VudCU3RCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMjBEb3VibGUlM0ElMjAlN0Jjb3VudGVyLmRvdWJsZUNvdW50JTdEJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wb25lbnRcIj5Db21wb25lbnQ8L2gyPlxuPHVsPlxuPGxpPkZ1bmN0aW9uIGlzIGp1c3QgY29tcG9uZW50PC9saT5cbjxsaT5Qcm9wcyBpcyBhIG9iamVjdCAobWF5YmUgcmVhY3RpdmUpPC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gRGlzcGxheSh7IGNvdW50IH0pIHtcbiAgICByZXR1cm4gPHA+SSB3aWxsIGRpc3BsYXkgY291bnQgZnJvbSB7JzxEaXNwbGF5Lz4nfToge2NvdW50fTwvcD47XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENvdW50ZXJBcHAoKSB7XG4gICAgY29uc3QgY291bnRlciA9IHJlYWN0aXZlKHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgfSk7XG4gICAgY29uc3QgaW5jID0gKCkgPT4gY291bnRlci5jb3VudCArKztcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPERpc3BsYXkgY291bnQ9e2NvdW50ZXIuY291bnR9Lz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj47XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJmdW5jdGlvbiUyMERpc3BsYXkoJTdCJTIwY291bnQlMjAlN0QpJTIwJTdCJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JwJTI2Z3QlM0JJJTIwd2lsbCUyMGRpc3BsYXklMjBjb3VudCUyMGZyb20lMjAlN0IlMjYlMjMwMzklM0IlMjZsdCUzQkRpc3BsYXklMkYlMjZndCUzQiUyNiUyMzAzOSUzQiU3RCUzQSUyMCU3QmNvdW50JTdEJTI2bHQlM0IlMkZwJTI2Z3QlM0IlM0IlMEElN0QlMEFleHBvcnQlMjBkZWZhdWx0JTIwZnVuY3Rpb24lMjBDb3VudGVyQXBwKCklMjAlN0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMGNvdW50ZXIlMjAlM0QlMjByZWFjdGl2ZSglN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb3VudCUzQSUyMDAlMkMlMEElMjAlMjAlMjAlMjAlN0QpJTNCJTBBJTIwJTIwJTIwJTIwY29uc3QlMjBpbmMlMjAlM0QlMjAoKSUyMCUzRCUyNmd0JTNCJTIwY291bnRlci5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQkRpc3BsYXklMjBjb3VudCUzRCU3QmNvdW50ZXIuY291bnQlN0QlMkYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImxvZ2ljXCI+TG9naWM8L2gyPlxuPGgzIGlkPVwiaWZcIj4kaWY8L2gzPlxuPHA+VXNlIDxjb2RlPiRpZjwvY29kZT4gdG8gZG8gYSBzd2l0Y2ggbG9naWMgaW4gPGNvZGU+SlNYPC9jb2RlPi48L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb3VudGVyQXBwKCkge1xuICAgIGNvbnN0IGNvdW50ZXIgPSByZWFjdGl2ZSh7XG4gICAgICAgIGNvdW50OiAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGluYyA9ICgpID0+IGNvdW50ZXIuY291bnQgKys7XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgQ291bnRlcjoge2NvdW50ZXIuY291bnR9XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+Y291bnQgPj0gMyA6IFxuICAgICAgICB7JGlmKFxuICAgICAgICAgICAgLy8gY29uZFxuICAgICAgICAgICAgKCkgPT4gY291bnRlci5jb3VudCA+PSAzLFxuICAgICAgICAgICAgLy8geWVzXG4gICAgICAgICAgICAoKSA9PiA8ZGl2PllFUyB7Y291bnRlci5jb3VudH08L2Rpdj4sXG4gICAgICAgICAgICAvLyBOT1xuICAgICAgICAgICAgKCkgPT4gPGRpdj5OTyB7Y291bnRlci5jb3VudH08L2Rpdj4sXG4gICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj47XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwZnVuY3Rpb24lMjBDb3VudGVyQXBwKCklMjAlN0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMGNvdW50ZXIlMjAlM0QlMjByZWFjdGl2ZSglN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb3VudCUzQSUyMDAlMkMlMEElMjAlMjAlMjAlMjAlN0QpJTNCJTBBJTIwJTIwJTIwJTIwY29uc3QlMjBpbmMlMjAlM0QlMjAoKSUyMCUzRCUyNmd0JTNCJTIwY291bnRlci5jb3VudCUyMCUyQiUyQiUzQiUwQSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCY291bnRlci5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQmNvdW50JTIwJTI2Z3QlM0IlM0QlMjAzJTIwJTNBJTIwJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0aWYoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwY29uZCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjBjb3VudGVyLmNvdW50JTIwJTI2Z3QlM0IlM0QlMjAzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIweWVzJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JZRVMlMjAlN0Jjb3VudGVyLmNvdW50JTdEJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyME5PJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JOTyUyMCU3QmNvdW50ZXIuY291bnQlN0QlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDMgaWQ9XCJtYXBcIj4kbWFwPC9oMz5cbjxwPlVzZSA8Y29kZT4kbWFwPC9jb2RlPiBmb3IgYSBsaXN0IG1hcDwvcD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdG9kb2xpc3QgPSByZWFjdGl2ZSh7XG4gICAgICBsaXN0OiBbJ3Rlc3QnICsgY291bnQgKysgXSxcbiAgfSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICAgIC8vIHVzZSBhcnJheS5wdXNoL3NwbGljZS9zaGlmdC91bnNoaWZ0IHRvIG11dGF0ZVxuICAgICAgdG9kb2xpc3QubGlzdC5wdXNoKCduZXcgdG9kbycgKyBjb3VudCArKyk7XG4gIH1cblxuICByZXR1cm4gPHVsPlxuICAgIDxidXR0b24gb25DbGljaz17YWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICB7JG1hcChcbiAgICAgICAgdG9kb2xpc3QubGlzdCwgIC8vIGFycmF5XG4gICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAvLyBpdGVtLmluZGV4IG1lYW4gaW5kZXhcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9kb2xpc3QubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9LFxuICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgIC8vIG11c3QgYmUgc3RyaW5nIG9yIG51bWJlciwgYW5kIGtlZXAgdW5pcXVlIGluIGxpc3RcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICB9XG4gICAgKX1cbiAgPC91bD47XG59XG5cblxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwibGV0JTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGZ1bmN0aW9uJTIwQXBwKCklMjAlN0IlMEElMjAlMjBjb25zdCUyMHRvZG9saXN0JTIwJTNEJTIwcmVhY3RpdmUoJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwbGlzdCUzQSUyMCU1QiUyNiUyMzAzOSUzQnRlc3QlMjYlMjMwMzklM0IlMjAlMkIlMjBjb3VudCUyMCUyQiUyQiUyMCU1RCUyQyUwQSUyMCUyMCU3RCklM0IlMEElMEElMjAlMjBjb25zdCUyMGFkZFRvZG8lMjAlM0QlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwYXJyYXkucHVzaCUyRnNwbGljZSUyRnNoaWZ0JTJGdW5zaGlmdCUyMHRvJTIwbXV0YXRlJTBBJTIwJTIwJTIwJTIwJTIwJTIwdG9kb2xpc3QubGlzdC5wdXNoKCUyNiUyMzAzOSUzQm5ldyUyMHRvZG8lMjYlMjMwMzklM0IlMjAlMkIlMjBjb3VudCUyMCUyQiUyQiklM0IlMEElMjAlMjAlN0QlMEElMEElMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0JhZGRUb2RvJTdEJTI2Z3QlM0JBREQlMjBUT0RPJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCU3QiUyNG1hcCglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0b2RvbGlzdC5saXN0JTJDJTIwJTIwJTJGJTJGJTIwYXJyYXklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG1hcCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0udmFsdWUlMjBtZWFuJTIwaXRlbSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0uaW5kZXglMjBtZWFuJTIwaW5kZXglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVCJTdCaXRlbS5pbmRleCU3RCU1RCUyMCU3Qml0ZW0udmFsdWUlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0IoKSUyMCUzRCUyNmd0JTNCJTIwdG9kb2xpc3QubGlzdC5zcGxpY2UoaXRlbS5pbmRleCUyQyUyMDEpJTdEJTI2Z3QlM0JSRU1PVkUlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwa2V5JTIwbWFwJTJDJTIwYWx0ZXJuYXRpdmUlMjB0byUyMCUyNmx0JTNCbGklMjBrZXklMjZndCUzQiUyMGluJTIwUmVhY3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtdXN0JTIwYmUlMjBzdHJpbmclMjBvciUyMG51bWJlciUyQyUyMGFuZCUyMGtlZXAlMjB1bmlxdWUlMjBpbiUyMGxpc3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBpdGVtLnZhbHVlJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyNmx0JTNCJTJGdWwlMjZndCUzQiUzQiUwQSU3RCUwQSUwQVwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==