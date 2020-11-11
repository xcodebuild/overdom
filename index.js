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

var refExtractCountMap = /*#__PURE__*/new WeakMap();

function detectSingleRef(ref) {
  if (true) {
    var stack = new Error().stack;
    setTimeout(function () {
      var count = refExtractCountMap.get(ref);

      if (count && count > 0) {
        console.warn("detect single ref out-of-JSX, it would lose reactive: ", ref, '\n', stack == null ? void 0 : stack.split('\n').slice(3).join('\n'));
      }
    });
    refExtractCountMap.set(ref, (refExtractCountMap.get(ref) || 0) + 1);
  }
}

function markRefUsed(ref) {
  if (true) {
    var count = refExtractCountMap.get(ref);

    if (count) {
      refExtractCountMap.set(ref, count - 1);
    }
  }
}

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
          if (['push', 'pop', 'shift', 'unshift', 'splice', 'forEach'].indexOf(key) !== -1) return function () {
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

        var r = getRef(key);
        detectSingleRef(r);
        return r;
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
  var lastKeyUnique = [];
  var keyFuncWrap = wrapFnHideRefMode(function (item) {
    var r = keyFunc(item);

    if (typeof r !== 'string' && typeof r !== 'number') {
      throw new Error("key of $map should return string or number, but got " + r + " \n" + keyFunc.toString());
    }

    if (lastKeyUnique.includes(r)) {
      throw new Error("key of $map should be unique, but got " + r + " in " + lastKeyUnique.join(', ') + "\n" + keyFunc.toString());
    }

    lastKeyUnique.push(r);
    return r;
  });
  var lastFragments = listData.map(function (_, index) {
    return mapFuncWrap(lastReactiveItems[index]);
  });
  var lastKeys = listData.map(function (_, index) {
    return keyFuncWrap(lastReactiveItems[index]);
  });
  lastKeyUnique = [];
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
      lastKeyUnique = [];
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
  fragment = comp(reactive(props));
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
          markRefUsed(value);
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
          markRefUsed(child);
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
  }(), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
    id: "playground"
  }, "PlayGround"), (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Play online with ", (0,resee__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
    href: "https://codesandbox.io/s/naughty-hill-ugkgj?file=/src/index.tsx"
  }, "CodeSandbox")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vaGVscGVyL2NvZGUtYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9iYXRjaGVyLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2ZyYWdtZW50LnRzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi4vc3JjL2Rldi50cyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9yZWFjdGl2ZS50cyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL3NyYy9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS8uLi9zcmMvaC50cyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4vc3JjL2RvYy9nZXQtc3RhcnRlZC5tZCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi9oZWxwZXIvY29kZS1ib3gvaW5kZXgubGVzcz85NTUxIiwid2VicGFjazovL3Jlc2VlLXNpdGUvLi9zcmMvaW5kZXgubGVzcz85NmM1Iiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXNlZS1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzZWUtc2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc2VlLXNpdGUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImh0bWxEZWNvZGUiLCJpbnB1dCIsImUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwibm9kZVZhbHVlIiwiY29kZSIsImNvbXBvbmVudCIsImhhbmRsZUNvZGVSZWYiLCJkb20iLCJzZXRUaW1lb3V0IiwiUHJpc20iLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiQ29tcG9uZW50IiwiX19odG1sIiwiTG9nbyIsIkhlYWRlciIsIkFwcCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwidGFza3MiLCJ0aW1lciIsInNjaGVkdWxlIiwidGFzayIsInRhc2tJdGVtcyIsIkFycmF5IiwidGFza0l0ZW0iLCJpbnNlcnQiLCJhcnJheSIsImluZGV4IiwiaXRlbSIsIkZyYWdtZW50IiwiY29uc3RydWN0b3IiLCJvYmoiLCJhcHBlbmRDaGlsZCIsIm5vZGUiLCJhcHBlbmRUb0NvbnRhaW5lciIsImNvbnRhaW5lciIsInJlcGxhY2VXaXRoIiwiZnJhZ21lbnQiLCJyYW5nZSIsImNyZWF0ZUVtcHR5IiwiaW5zZXJ0QmVmb3JlVG9Db250YWluZXIiLCJjcmVhdGVSYW5nZSIsInBhcmVudCIsInN0YXJ0UG9zIiwiZ2V0Rmlyc3ROb2RlIiwiRnJhZ21lbnRMaXN0IiwiYXBwZW5kRnJhZ21lbnQiLCJjaGlsZCIsInJlbW92ZVdpdGhLZXlzIiwia2V5cyIsIm1vdmUiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnRCZWZvcmVOb2RlIiwidGFyZ2V0IiwiZGVsZXRlSW5kZXgiLCJ0b0luZGV4IiwicmVmRXh0cmFjdENvdW50TWFwIiwiZGV0ZWN0U2luZ2xlUmVmIiwicmVmIiwicHJvY2VzcyIsInN0YWNrIiwiY291bnQiLCJjb25zb2xlIiwibWFya1JlZlVzZWQiLCJSZWZTeW1ib2wiLCJTeW1ib2wiLCJpc1JlZiIsInIiLCJoaWRlUmVmTW9kZSIsIndyYXBGbkhpZGVSZWZNb2RlIiwiZm4iLCJwcm94eU9iak1hcCIsIkRlcHNNYW5hZ2VyIiwiX2FkZERlcCIsIl9nZXREZXBzIiwiYmVnaW5Db2xsZWN0IiwiZW5kQ29sbGVjdCIsInRyYWNrIiwidHJpZ2dlciIsImRlcHMiLCJkZXAiLCJkZXBzTWFuYWdlciIsIkF1dG9ydW5SZWZJbXBsIiwiX3J1biIsImF1dG9ydW4iLCJSZWZJbXBsIiwidmFsIiwiQ29tcHV0ZWRSZWZJbXBsIiwiX3JlY29tcHV0ZSIsIlByb3h5UmVmU3ltYm9sIiwicHJveHlNYXAiLCJyZWFjdGl2ZSIsIlByb3h5UmVmSW1wbCIsIl9pbml0UHJveHkiLCJ0aGF0IiwicmVmTWFwIiwicHJveHkiLCJnZXQiLCJrZXkiLCJjYiIsImxlbiIsImkiLCJnZXRSZWYiLCJpc1Byb3h5UmVmIiwic2V0IiwiZ2V0dGVyIiwiT2JqZWN0IiwidmFsdWUiLCJyZXN1bHQiLCJuZXdWYWwiLCJydW4iLCJkaXJlY3RpdmUiLCJmdW5jIiwiaXNEaXJlY3RpdmUiLCIkaWYiLCJjb25kIiwieWVzIiwibm8iLCJpbml0ZWQiLCJuZXdSZXN1bHQiLCJsYXN0UmVzdWx0IiwibGFzdEZyYWdtZW50IiwibmV3RnJhZ21lbnQiLCIkbWFwIiwicmF3TGlzdCIsIm1hcEZ1bmMiLCJrZXlGdW5jIiwibGlzdCIsImxpc3REYXRhIiwibGFzdFJlYWN0aXZlSXRlbXMiLCJjcmVhdGVSZWFjdGl2ZUl0ZW0iLCJmcmFnbWVudExpc3QiLCJtYXBGdW5jV3JhcCIsImxhc3RLZXlVbmlxdWUiLCJrZXlGdW5jV3JhcCIsImxhc3RGcmFnbWVudHMiLCJsYXN0S2V5cyIsIm5ld0xpc3QiLCJub3RyYWNrIiwibmV3S2V5cyIsImxhc3RJbmRleCIsInJlYWN0aXZlSXRlbSIsImZyb21JbmRleCIsInJlbW92ZWQiLCJwcm9wcyIsImNvbXAiLCJodG1sIiwibGFzdFZhbHVlIiwiaXNFdmVudCIsImV2ZW50TmFtZSIsImxhc3RWYWx1ZUV2ZW50SGFuZGxlciIsInNldEF0dHIiLCJuZXdWYWx1ZSIsImgiLCJ0eXBlIiwiY2hpbGRyZW4iLCJ0YWciLCJiaW5kQXR0ciIsInJlYWN0aXZlVmFsIiwidGV4dE5vZGUiLCJidWlsZENvbXBvbmVudCIsIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJIZWxsbyIsImRlY29kZVVSSUNvbXBvbmVudCIsIkNvdW50ZXJBcHAiLCJjb3VudGVyIiwiaW5jIiwiZG91YmxlQ291bnQiLCJEaXNwbGF5IiwidG9kb2xpc3QiLCJhZGRUb2RvIiwicHVzaCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUN0QixNQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFSO0FBQ0FGLEdBQUMsQ0FBQ0csU0FBRixHQUFjSixLQUFkLENBRnNCLENBR3RCOztBQUNBLFNBQU9DLENBQUMsQ0FBQ0ksVUFBRixDQUFhQyxNQUFiLEtBQXdCLENBQXhCLEdBQTRCLEVBQTVCLEdBQWlDTCxDQUFDLENBQUNJLFVBQUYsQ0FBYSxDQUFiLEVBQWdCRSxTQUF4RDtBQUNEOztBQUVILGlFQUFlLGdCQU1UO0FBQUEsTUFMRkMsSUFLRSxRQUxGQSxJQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFOztBQUVGLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsR0FBRCxFQUFzQjtBQUN0Q0MsY0FBVSxDQUFDLFlBQU07QUFDYjtBQUNBRCxTQUFHLENBQUNQLFNBQUosR0FBZ0JTLEtBQUssQ0FBQ0MsU0FBTixDQUFnQmYsVUFBVSxDQUFDWSxHQUFHLENBQUNQLFNBQUwsQ0FBMUIsRUFBMkNTLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsVUFBM0QsQ0FBaEI7QUFDSCxLQUhTLENBQVY7QUFJSCxHQUxEOztBQU9BLE1BQU1DLFNB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QSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgaCB9IGZyb20gXCJyZXNlZVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuZnVuY3Rpb24gaHRtbERlY29kZShpbnB1dCl7XG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGUuaW5uZXJIVE1MID0gaW5wdXQ7XG4gICAgLy8gaGFuZGxlIGNhc2Ugb2YgZW1wdHkgaW5wdXRcbiAgICByZXR1cm4gZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gICAgY29kZSxcbiAgICBjb21wb25lbnQsXG59OiB7XG4gICAgY29kZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudDogRnVuY3Rpb24sXG59KSA9PiB7XG5cbiAgICBsZXQgaGFuZGxlQ29kZVJlZiA9IChkb206IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodChodG1sRGVjb2RlKGRvbS5pbm5lckhUTUwpLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2RlYm94XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlPjxjb2RlIHJlZj17aGFuZGxlQ29kZVJlZn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvZGV9fT48L2NvZGU+PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtb1wiPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG59XG4iLCJpbXBvcnQge1xuICAgIGgsXG59IGZyb20gJ3Jlc2VlJztcblxuY29uc3QgTG9nbyA9ICgpID0+IDxpbWdcbiAgICBjbGFzc05hbWU9XCJsb2dvXCIgXG4gICAgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFiQUFBQUJzQ0FNQUFBQThHeGY0QUFBQUFYTlNSMElCMmNrc2Z3QUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQWNKUVRGUkZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE4NFFHNGdBQUFKWjBVazVUQU9uL01XQnRvQ1h5T21wNEFhb3VKNSthQjNaUEJwa29UVWtSUEFyTmlSaG5HMzFRUVE5TEtuUmNpRnAzRXhBVWpBa0lsYklFQXRHQWZ0VTBNbUhLQTN0aldCYmRhMmFwUnRsSVBTK2RsMTNqVWhjZUVsVjh4SkdsdXJDS3duQlhVWk9jaGw1VUxCMVRwME1GZzRkeUZXVU51TDBPdnhsQU9FVGtycXpsR3V1M2I3WU1Ubm1XTlNSb2VoOHR4N1NPY1lJTGoyUXpBL3BweFFBQUJ0cEpSRUZVZUp6dG5mdDNGRFVVeDlOSWNTbXZwVnBwcGRqU1dvVkN0UmJhU3NXdGdBSkZ4ZnFpS2lMaUMwV2tLRnF0TDN5QktPRGIvOWU1NFhqTzdEVDVablpJT0xlOStmNld2Wk9iN1AzTWRtZVRtVytWU2twS1NrcEtTa3BLU21wSmJScnBqb3BaVjhHc1VPMlZKd3NGc3E2dW5oWFU1ODRvYzFXcUJydXVnWDNkNnFnKzI3V1ZKd3UxenAxMWZmV3NvRDRicW1kdHlyT3hYdC9VV2JvR3BZSGRWYS9mbld1eUJ0WjFUNzIrT1pjMUVMRHVlajAvOTFEQWVySVg3czIxdC9RZzlaWUZ0bFhyKzNMTlBwUzB2d05GdDRGUjBHUzdCd1pCOVA1Y2xxR3NCQS9rMmcraTZXemZnYUw1K2d4cnZUWFg3RUw5ZHU1Q1VRZ3NrQXJBV0tzSUxKQUt3RUlwQVV2QVNBbFlBaFpOQ1poS3dGUUNGazhpZ0kwOGhPTVJnWTA4SERpaEJHRFpleHg5QkIwUURkallicTJId3FhVUFHeGIxbXZQT0RnZ0ZyQ0o5ZUgvaEVzQXBpYXpibytDZUN4Z2U3Tnhwd0xuRkFITUxMOC81bzVIQXJhUGhuMDhjRklSd01abzNiVXg3WXpIQVRaTkgrd2EvUEtzSUJIQTFCTjBydTkzaHVNQU8wQ0RvdVg3U3BJQjdDRFZydWJzR1FWWTE1TTBhT2lyZWlIQTFDWXEzbE91YUJSZ2gyakl3OEhUQ2dGMmhLbzM0OXE0alFKc2lvWThHanl0RUdCalpqUDBhVWMwQnJCbmFNQTI5T3V2bW9RQXU3bVQvcXdqR0FQWU1BMTRMSFJXT2NDZU15ZThJeGdEMkN3TitIem9ySEtBdldEK0pyNW9EMFlBMW1mR2V5bHdWaVVIR0VIUittVm5MRFF3bXFtZURaeVVKQWFZK1JJYnRjY2lBRHRPdzgwRlRrb1NBK3dWcXVDcjlsZ0VZSFV3M0MxSkRMQzFWTUhYN0xFSXdFN1FjSzhIVGtvU0E4eXMyRS9hWXhHQW5hVGgzZ2ljbENRRzJGRndYUjhCbUZubk9CVTRLVWtNc0NPM0Y5Z01EZmRtNEtRa01jRE1MK2NaZXl3Q3NEa2E3bERncENReHdNeEZ4MGw3TE5aRng5N0FTVWxpZ0oybUNwNnd4eUlBZXl2U1VxSWNZT2FVUDIyUFJRRDJOamcvYmtsaWdKbWxxWGVjc2REQTNxWGhZcFJBQ3JCeHN4ajduajBZQWRnWk01N25qdU1xa2dKc2pTbWdZejh4MnZiSys2R3p5Z0UyUVBYN3dCR01BY3dzSnRaRFo1VURyRUgxNjNFRVl3QTdTd1BXMGkwQ0ZZRnROdVg3MEJHTkFXekMzT1ZXMVhuQ0xTSEF6bEgxUG5KRm85dzFkWjZHSEE2ZVZnYXdjZU5DTSs4S1J3RTJiejdVcGEwbnlrb0dzRUVxM25Gbk9NNnQydVlqZGlGMFZobkE2SktqOXJFekhBZFlGNjNZejB3RXppb0NtTGxpTytDT1IzcmM2Q3k2TXEwcUVjQSswZmd1OTFnUDlORUs4TVhBT1NVQW8vYzRoUjQxamdXc2x4WXdENGJOdWJ5QmxmTkwvRlRyeVRNb2JRRVk5a3RzWlFsKy9qT3RGMXFickU5RllOZ3ZFZmszTnFrQXpPT1hXRGJyRW1BbDdmYys3eG1EYVF2QXNQMmU0ODRyaDc1WWJIV3lIaFdCWWZ1OTBzOFRGb0I1N1BlQWYyT3pMbVFIOStYYWdmd1N2OVQ2cTF3ekpMRGdrNldmZC8yNWRpQmdYMnY5VGE0WkNsaDdkdkMzdVhZZ3Y4UkxXbitYYTBLL3hKNE5aYk1XRldheTlKREE5N2syOUV1RS9vMU4ra0hyUzdrbTlFdHM4bS9FU3RaRnkveWlvNFIrTEhIcUptQjhnQTNvMmsvZWd4SXdOc0I2c3c1dFhyZW5CSXdOc0hHNk5MdnNPeW9CWXdQTWJJUjU5emdTTUQ3QUZuVGhkNHROcklCNXpCMVhPakIxSmVzeTY3bTFnaE13bjduamlnZG1Wc1VjenpiL0wwN0FmT2FPS3g2WU9wejFtY1JyS1p5QStjd2RWejZ3bitranRnZ1BZUVhNWSs2NDhvR3BpOXEzamNnS21NZmNVUUN3Ulh6S0ttYkFQT2FPQW9DdG8yOEY2SVBIQ3hnMmR4UUFUSjJpQ2x3RkIvQUNoczBkSlFBYnB5ZEpyb0FEbUFHRDVvNFNnS2xmcUFJTDdqZ3pZTkRjVVFTd1hycndPdWVPTXdNR3pSMUZBRk8vMHRlNGU1ZUZHekJrN2lnRDJBaFY0THd6ekEwWU1uZVVBVXlOMGluYjZZcHlBNGJNSFlVQXUwWVZXT1dLc2dNR3pCMkZBRE9QSE0rNDFudllBUVBtamxLQVhhY1N1RzdIWVFjTW1EdEtBYWIyWkYxdk9HTHNnQUZ6UnpIQXRvQWZvK3lBQVhOSE1jRFVqYXp2Yi9ZUU8yREEzRkVPc0c0cXduVnJpQjB3WU80b0I5ZzBQWEs4MmhwaUJ3eVlPOG9CZHZPYi9Kb3R3ZzRZTUhjVUJLeVRIb0g4M1JaaEJ3eVlPd29DcHY2Z01veFlBdXlBQVhOSFNjQ0dhSmZGWnEvQ0RSZ3lkNVFFVFAxSnV5eC9MWDJkR3pCazdpZ0ttTG5Sdm1QcDY5eUFEZEE4SGVhT29vQ3AzVm4vMmFVM1MzQURoc3dkWlFHN2FyL3NZQVlNbWp2S0FrYnU1TE5MTjFtWUFZUG1qc0tBOWJiL2JiRnQ0QVVNbXpzS0EyWVhMMkRZM0RFQlU5eUFZWFBIQkV3eEErWXhkMHpBRkROZ0huUEhCRXp4QXVZemQwekFWSXQraVpGVTF0eXhOYi9FVWtPU1d2TkxSR3FhN2UwQmh1MzNJcW1zdVdOcmZvbmxobFN0K2lVaU5jMVdBakNQbGhld2ZZM0dYSERyZnFXT05Sci81SnJRTDdHL0F3UzM3MERCUVpTMzdOc2FtMnMwL3MyMW9WOGluRS9Ua1BzYmpmei9FNFIraVR0M29XaGxDa2xKU1NYMEh6SWRKak1Wbjl2UkFBQUFBRWxGVGtTdVFtQ0NcIlxuPlxuPC9pbWc+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgIDwvaGVhZGVyPlxufVxuIiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHJlbmRlciwgIGgsIHJlYWN0aXZlIH0gZnJvbSAncmVzZWUnO1xuXG5pbXBvcnQgRG9jR2V0U3RhcnRlZCBmcm9tICcuL2RvYy9nZXQtc3RhcnRlZC5tZCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8RG9jR2V0U3RhcnRlZC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvZGl2Pjtcbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJjb25zdCB0YXNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcbmxldCB0aW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlKHRhc2s6IEZ1bmN0aW9uKSB7XG4gIHRhc2tzLmFkZCh0YXNrKTtcbiAgaWYgKCF0aW1lcikge1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBjb25zdCB0YXNrSXRlbXMgPSBBcnJheS5mcm9tKHRhc2tzLnZhbHVlcygpKTtcbiAgICAgIHRhc2tzLmNsZWFyKCk7XG4gICAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrSXRlbSA9PiB7XG4gICAgICAgIHRhc2tJdGVtKCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluc2VydDxUPihhcnJheTogQXJyYXk8VD4sIGluZGV4OiBudW1iZXIsIGl0ZW06IFQpIHtcbiAgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGVzKG5vZGVzOiBOb2RlW10pIHtcbiAgY29uc3QgcGFyZW50ID0gbm9kZXNbMF0ucGFyZW50Tm9kZTtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBjb25zdCBzdGFydFBvcyA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50Py5jaGlsZE5vZGVzLCBub2Rlc1swXSk7XG4gIHJhbmdlLnNldFN0YXJ0KHBhcmVudCEsIHN0YXJ0UG9zKTtcbiAgcmFuZ2Uuc2V0RW5kKHBhcmVudCEsIHN0YXJ0UG9zICsgbm9kZXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVJdGVtIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaW5zZXJ0IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudCB7XG4gIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb250YWluZXI/OiBOb2RlO1xuICBjaGlsZE5vZGVzOiBOb2RlW10gPSBbXTtcbiAga2V5PzogbnVtYmVyIHwgc3RyaW5nO1xuICByZWFjdGl2ZUl0ZW0/OiBSZWFjdGl2ZUl0ZW08YW55PjtcblxuICBzdGF0aWMgaXNGcmFnbWVudChvYmo6IHVua25vd24pIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IChvYmogYXMgT2JqZWN0KS5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT09IEZyYWdtZW50IHx8IGNvbnN0cnVjdG9yID09PSBGcmFnbWVudExpc3Q7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZDogTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZCBhcyBOb2RlO1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICBhcHBlbmRUb0NvbnRhaW5lcihjb250YWluZXI6IE5vZGUpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZnJhZ21lbnQpO1xuICB9XG5cbiAgcmVwbGFjZVdpdGgoZnJhZ21lbnQ6IEZyYWdtZW50KSB7XG4gICAgZnJhZ21lbnQuY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICByYW5nZS5pbnNlcnROb2RlKGZyYWdtZW50LmZyYWdtZW50KTtcbiAgICByYW5nZS5kZXRhY2goKTtcbiAgfVxuXG4gIGNyZWF0ZUVtcHR5KCkge1xuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VtcHR5JykpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZVRvQ29udGFpbmVyKGNvbnRhaW5lcjogTm9kZSwgYmVmb3JlTm9kZTogTm9kZSB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIC8vIGhhcyBhIGNvbnRhaW5lciBhbHJlYWR5XG4gICAgICAvLyByZW1vdmUgc2VsZiBmcm9tIGN1cnJlbnQgY29udGFpbmVyIGZpcnN0XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5KCk7XG4gICAgc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmZyYWdtZW50LCBiZWZvcmVOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJhbmdlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuY2hpbGROb2Rlc1swXS5wYXJlbnROb2RlITtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgY29uc3Qgc3RhcnRQb3MgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKFxuICAgICAgcGFyZW50Py5jaGlsZE5vZGVzLFxuICAgICAgdGhpcy5jaGlsZE5vZGVzWzBdXG4gICAgKTtcbiAgICByYW5nZS5zZXRTdGFydChwYXJlbnQsIHN0YXJ0UG9zKTtcbiAgICByYW5nZS5zZXRFbmQocGFyZW50LCBzdGFydFBvcyArIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfVxuXG4gIGdldEZpcnN0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGcmFnbWVudExpc3QgZXh0ZW5kcyBGcmFnbWVudCB7XG4gIGNoaWxkRnJhZ21lbnRzOiBGcmFnbWVudFtdID0gW107XG5cbiAgYXBwZW5kRnJhZ21lbnQoY2hpbGQ6IEZyYWdtZW50LCBrZXk6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNoaWxkLmFwcGVuZFRvQ29udGFpbmVyKHRoaXMuZnJhZ21lbnQpO1xuICAgIHRoaXMuY2hpbGRGcmFnbWVudHMucHVzaChjaGlsZCk7XG4gICAgY2hpbGQua2V5ID0ga2V5O1xuICB9XG5cbiAgaW5zZXJ0KGluZGV4OiBudW1iZXIsIGZyYWdtZW50OiBGcmFnbWVudCwgbmV3S2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBmcmFnbWVudC5rZXkgPSBuZXdLZXk7XG4gICAgZnJhZ21lbnQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIoXG4gICAgICB0aGlzLmNvbnRhaW5lciEsXG4gICAgICB0aGlzLmNoaWxkRnJhZ21lbnRzW2luZGV4XT8uZ2V0Rmlyc3ROb2RlKCkgfHwgbnVsbFxuICAgICk7XG4gICAgaW5zZXJ0KHRoaXMuY2hpbGRGcmFnbWVudHMsIGluZGV4LCBmcmFnbWVudCk7XG4gIH1cblxuICByZW1vdmVXaXRoS2V5cyhrZXlzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoY2hpbGQua2V5ISkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gY2hpbGQ7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gZnJhZ21lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcbiAgICAgICAgcmFuZ2UuZGV0YWNoKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hpbGRGcmFnbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGluc2VydEJlZm9yZSA9IHRoaXMuY2hpbGRGcmFnbWVudHNbdG9JbmRleF07XG5cbiAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTogTm9kZSB8IG51bGwgPSBpbnNlcnRCZWZvcmU/LmdldEZpcnN0Tm9kZSgpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jaGlsZEZyYWdtZW50c1tmcm9tSW5kZXhdITtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlVG9Db250YWluZXIodGhpcy5jb250YWluZXIhLCBpbnNlcnRCZWZvcmVOb2RlKTtcblxuICAgIGluc2VydCh0aGlzLmNoaWxkRnJhZ21lbnRzLCB0b0luZGV4LCB0YXJnZXQpO1xuICAgIGxldCBkZWxldGVJbmRleCA9IGZyb21JbmRleDtcbiAgICBpZiAodG9JbmRleCA8IGZyb21JbmRleCkge1xuICAgICAgZGVsZXRlSW5kZXggKz0gMTtcbiAgICB9XG4gICAgdGhpcy5jaGlsZEZyYWdtZW50cy5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tICcuL3JlYWN0aXZlJztcblxuY29uc3QgcmVmRXh0cmFjdENvdW50TWFwID0gbmV3IFdlYWtNYXA8UmVmLCBudW1iZXI+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTaW5nbGVSZWYocmVmOiBSZWYpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcmVmRXh0cmFjdENvdW50TWFwLmdldChyZWYpO1xuICAgICAgICAgICAgaWYgKGNvdW50ICYmIGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgYGRldGVjdCBzaW5nbGUgcmVmIG91dC1vZi1KU1gsIGl0IHdvdWxkIGxvc2UgcmVhY3RpdmU6IGAsXG4gICAgICAgICAgICAgICAgICAgIHJlZiwgXG4gICAgICAgICAgICAgICAgICAgICdcXG4nLFxuICAgICAgICAgICAgICAgICAgICBzdGFjaz8uc3BsaXQoJ1xcbicpLnNsaWNlKDMpLmpvaW4oJ1xcbicpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlZkV4dHJhY3RDb3VudE1hcC5zZXQocmVmLCAocmVmRXh0cmFjdENvdW50TWFwLmdldChyZWYpIHx8IDApKyAxKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrUmVmVXNlZChyZWY6IFJlZikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gcmVmRXh0cmFjdENvdW50TWFwLmdldChyZWYpO1xuICAgICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICAgIHJlZkV4dHJhY3RDb3VudE1hcC5zZXQocmVmLCBjb3VudCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGV0ZWN0U2luZ2xlUmVmIH0gZnJvbSAnLi9kZXYnO1xuXG5jb25zdCBSZWZTeW1ib2wgPSBTeW1ib2woJ3JlZicpO1xuY29uc3QgSW50ZXJuYWxSYXdTeW1ib2wgPSBTeW1ib2woJ2ludGVybmFsX3JhdycpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWY8VD4ocjogUmVmPFQ+IHwgdW5rbm93bik6IHIgaXMgUmVmPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmKHI6IGFueSk6IHIgaXMgUmVmIHtcbiAgcmV0dXJuIHIgJiYgKHIgYXMgUmVmKVtSZWZTeW1ib2xdID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWY8VD4ocmVmOiBUKTogVCBleHRlbmRzIFJlZjxpbmZlciBWPiA/IFYgOiBUIHtcbiAgcmV0dXJuIGlzUmVmKHJlZikgPyAocmVmLnZhbHVlIGFzIGFueSkgOiByZWY7XG59XG5cbnR5cGUgS2V5ID0gc3RyaW5nIHwgc3ltYm9sIHwgbnVtYmVyO1xuXG5sZXQgaGlkZVJlZk1vZGUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBGbkhpZGVSZWZNb2RlPFQgZXh0ZW5kcyBGdW5jdGlvbj4oZm46IFQpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSkge1xuICAgIGhpZGVSZWZNb2RlID0gdHJ1ZTtcbiAgICBjb25zdCByID0gZm4oLi4uYXJncyk7XG4gICAgaGlkZVJlZk1vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4gcjtcbiAgfSBhcyB1bmtub3duKSBhcyBUO1xufVxuXG5jb25zdCBwcm94eU9iak1hcCA9IG5ldyBXZWFrTWFwPE9iamVjdCwgT2JqZWN0PigpO1xuXG5jbGFzcyBEZXBzTWFuYWdlciB7XG4gIHByaXZhdGUgX2NvbGxlY3Rpbmc6IFRyaWdnZXJhYmxlUmVmW10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVwcyA9IG5ldyBXZWFrTWFwPFJlZiwgU2V0PFRyaWdnZXJhYmxlUmVmPj4oKTtcblxuICBwcml2YXRlIF9hZGREZXAodGFyZ2V0OiBSZWYsIHRyaWdnZXI6IFRyaWdnZXJhYmxlUmVmKSB7XG4gICAgaWYgKCF0aGlzLl9kZXBzLmhhcyh0YXJnZXQpKSB7XG4gICAgICB0aGlzLl9kZXBzLnNldCh0YXJnZXQsIG5ldyBTZXQoKSk7XG4gICAgfVxuICAgIHRoaXMuX2RlcHMuZ2V0KHRhcmdldCkhLmFkZCh0cmlnZ2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlcHModGFyZ2V0OiBSZWYpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9kZXBzLmdldCh0YXJnZXQpPy52YWx1ZXMoKSB8fCBbXSk7XG4gIH1cblxuICBiZWdpbkNvbGxlY3QocmVmOiBUcmlnZ2VyYWJsZVJlZikge1xuICAgIHRoaXMuX2NvbGxlY3RpbmcucHVzaChyZWYpO1xuICB9XG5cbiAgZW5kQ29sbGVjdCgpIHtcbiAgICB0aGlzLl9jb2xsZWN0aW5nLnBvcCgpO1xuICB9XG5cbiAgdHJhY2sodGFyZ2V0OiBSZWYpIHtcbiAgICBpZiAodGhpcy5fY29sbGVjdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hZGREZXAodGFyZ2V0LCB0aGlzLl9jb2xsZWN0aW5nW3RoaXMuX2NvbGxlY3RpbmcubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXIodGFyZ2V0OiBSZWYpIHtcbiAgICBjb25zdCBkZXBzID0gdGhpcy5fZ2V0RGVwcyh0YXJnZXQpO1xuICAgIGRlcHMuZm9yRWFjaChkZXAgPT4gZGVwLnRyaWdnZXIoKSk7XG4gIH1cbn1cblxuY29uc3QgZGVwc01hbmFnZXIgPSBuZXcgRGVwc01hbmFnZXIoKTtcblxuZXhwb3J0IGludGVyZmFjZSBSZWY8VCA9IGFueT4ge1xuICBbUmVmU3ltYm9sXTogYm9vbGVhbjtcbiAgdmFsdWU6IFQ7XG59XG5cbmludGVyZmFjZSBUcmlnZ2VyYWJsZVJlZjxUID0gYW55PiB7XG4gIFtSZWZTeW1ib2xdOiBib29sZWFuO1xuICB2YWx1ZTogVDtcbiAgdHJpZ2dlcjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhdyhyZWY6IFJlZikge1xuICBpZiAoaXNQcm94eVJlZihyZWYpKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiByZWZbSW50ZXJuYWxSYXdTeW1ib2xdO1xuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJlZi5fdmFsdWU7XG59XG5cbmV4cG9ydCB0eXBlIE5vVHJhY2tGbiA9IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZDtcblxuY2xhc3MgQXV0b3J1blJlZkltcGwge1xuICBbUmVmU3ltYm9sXSA9IHRydWU7XG4gIHZhbHVlID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mbjogKG5vdHJhY2tGbjogTm9UcmFja0ZuKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fcnVuKCk7XG4gIH1cblxuICBwcml2YXRlIF9ydW4oKSB7XG4gICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwRm5IaWRlUmVmTW9kZSh0aGlzLl9mbikuY2FsbCh0aGlzLCAoZm46ICgpID0+IHZvaWQpID0+IHtcbiAgICAgIC8vIG5vIHRyYWNrIGZuXG4gICAgICBkZXBzTWFuYWdlci5lbmRDb2xsZWN0KCk7XG4gICAgICBmbigpO1xuICAgICAgZGVwc01hbmFnZXIuYmVnaW5Db2xsZWN0KHRoaXMpO1xuICAgIH0pO1xuICAgIGRlcHNNYW5hZ2VyLmVuZENvbGxlY3QoKTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5fcnVuKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9ydW4oZm46IChub3RyYWNrRm46IE5vVHJhY2tGbikgPT4gdm9pZCkge1xuICByZXR1cm4gbmV3IEF1dG9ydW5SZWZJbXBsKGZuKTtcbn1cblxuY2xhc3MgUmVmSW1wbDxUID0gYW55PiB7XG4gIHB1YmxpYyBbUmVmU3ltYm9sXSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmFsdWU6IFQpIHt9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWw6IFQpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBDb21wdXRlZFJlZkltcGw8VCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWx1ZSE6IFQ7XG4gIHByaXZhdGUgX2NvbXB1dGU6ICgpID0+IFQ7XG5cbiAgY29uc3RydWN0b3IoZ2V0dGVyOiAoKSA9PiBUKSB7XG4gICAgdGhpcy5fY29tcHV0ZSA9IGdldHRlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3JlY29tcHV0ZSgpIHtcbiAgICBkZXBzTWFuYWdlci5iZWdpbkNvbGxlY3QodGhpcyk7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9jb21wdXRlKCk7XG4gICAgZGVwc01hbmFnZXIuZW5kQ29sbGVjdCgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuX3JlY29tcHV0ZSgpO1xuICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkZXBzTWFuYWdlci50cmFjayh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuX3JlY29tcHV0ZSgpO1xuICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhpcyk7XG4gIH1cbn1cblxuY29uc3QgUHJveHlSZWZTeW1ib2wgPSBTeW1ib2woJ3Byb3h5LXJlZicpO1xuXG5mdW5jdGlvbiBpc1Byb3h5UmVmKHRhcmdldDogdW5rbm93bikge1xuICByZXR1cm4gdGFyZ2V0ICYmICh0YXJnZXQgYXMgUHJveHlSZWZJbXBsPGFueT4pW1Byb3h5UmVmU3ltYm9sXSA9PT0gdHJ1ZTtcbn1cblxuY29uc3QgcHJveHlNYXAgPSBuZXcgV2Vha01hcDxPYmplY3QsIE9iamVjdD4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWN0aXZlPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihvYmo6IFQpOiBUIHtcbiAgY29uc3QgcmVmID0gbmV3IFByb3h5UmVmSW1wbChvYmopO1xuICByZXR1cm4gcmVmLnZhbHVlO1xufVxuXG5jbGFzcyBQcm94eVJlZkltcGw8VCBleHRlbmRzIG9iamVjdCA9IGFueT4ge1xuICBwdWJsaWMgW1JlZlN5bWJvbF0gPSB0cnVlO1xuICBwdWJsaWMgW1Byb3h5UmVmU3ltYm9sXSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfcHJveHk6IFQ7XG5cbiAgY29uc3RydWN0b3Iob2JqOiBUKSB7XG4gICAgdGhpcy5fcHJveHkgPSB0aGlzLl9pbml0UHJveHkob2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRQcm94eShvYmo6IFQpOiBUIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAocHJveHlNYXAuaGFzKG9iaikpIHtcbiAgICAgIHJldHVybiBwcm94eU1hcC5nZXQob2JqKSBhcyBUO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZk1hcCA9IG5ldyBNYXA8S2V5LCBSZWY+KCk7XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldChfLCBrZXkpIHtcbiAgICAgICAgZGVwc01hbmFnZXIudHJhY2sodGhhdCk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdsZW5ndGgnKSByZXR1cm4gb2JqLmxlbmd0aDtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnbWFwJylcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBtYXAoXG4gICAgICAgICAgICAgIGNiOiAoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiBhbnksXG4gICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqLm1hcCgoX2l0ZW06IGFueSwgX2luZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoKHByb3h5IGFzIGFueSlbX2luZGV4XSwgX2luZGV4KTtcbiAgICAgICAgICAgICAgfSwgdGhpc0FyZyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3NwbGljZScsICdmb3JFYWNoJ10uaW5kZXhPZihcbiAgICAgICAgICAgICAga2V5IGFzIHN0cmluZ1xuICAgICAgICAgICAgKSAhPT0gLTFcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3BvcCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvYmoubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUobGVuIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3BsaWNlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gb2JqLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpID49IGluZGV4ICYmIGkgPCBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+PSBpbmRleCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5zZXQoJycgKyAoaSAtIGNvdW50KSwgcmVmTWFwLmdldCgnJyArIGkpISk7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1hcC5kZWxldGUoJycgKyBpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb2JqW2tleSBhcyBhbnldKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoYXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IFN5bWJvbC5zcGVjaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVmID0gZ2V0UmVmKGtleSk7XG4gICAgICAgIGlmIChpc1Byb3h5UmVmKHJlZikpIHtcbiAgICAgICAgICByZXR1cm4gcmVmLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaWRlUmVmTW9kZSkge1xuICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IGdldFJlZihrZXkpO1xuICAgICAgICBkZXRlY3RTaW5nbGVSZWYocik7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSxcbiAgICAgIHNldChfLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGRlcHNNYW5hZ2VyLnRyaWdnZXIodGhhdCk7XG4gICAgICAgIGdldFJlZihrZXkpIS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZXRSZWYoa2V5OiBLZXkpOiBSZWYge1xuICAgICAgaWYgKHJlZk1hcC5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gcmVmTWFwLmdldChrZXkpITtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpPy5nZXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9ICgpID0+IChvYmogYXMgYW55KVtrZXldO1xuXG4gICAgICBsZXQgcmVzdWx0OiBSZWY7XG4gICAgICBpZiAoZ2V0dGVyKSB7XG4gICAgICAgIC8vIGNvbXB1dGVkXG4gICAgICAgIHJlc3VsdCA9IG5ldyBDb21wdXRlZFJlZkltcGwod3JhcEZuSGlkZVJlZk1vZGUoZ2V0dGVyKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzUmVmKHZhbHVlKCkpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlKCk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKCkgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlKCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIHJlYWN0aXZlIG9iamVjdFxuICAgICAgICByZXN1bHQgPSBuZXcgUHJveHlSZWZJbXBsKHJlYWN0aXZlKHZhbHVlKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQgPSBuZXcgUmVmSW1wbCh3cmFwRm5IaWRlUmVmTW9kZSh2YWx1ZSgpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZWZcbiAgICAgICAgcmVzdWx0ID0gbmV3IFJlZkltcGwodmFsdWUoKSk7XG4gICAgICB9XG5cbiAgICAgIHJlZk1hcC5zZXQoa2V5LCByZXN1bHQpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByb3h5TWFwLnNldChvYmosIHByb3h5KTtcbiAgICBwcm94eU9iak1hcC5zZXQocHJveHksIG9iaik7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGRlcHNNYW5hZ2VyLnRyYWNrKHRoaXMpO1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICBPYmplY3Qua2V5cyhuZXdWYWwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICh0aGlzLl9wcm94eSBhcyBhbnkpW2tleV0gPSAobmV3VmFsIGFzIGFueSlba2V5XTtcbiAgICB9KTtcbiAgICBkZXBzTWFuYWdlci50cmlnZ2VyKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm46ICgpID0+IHZvaWQpIHtcbiAgd3JhcEZuSGlkZVJlZk1vZGUoZm4pKCk7XG59XG4iLCJpbXBvcnQgeyBzY2hlZHVsZSB9IGZyb20gJy4vYmF0Y2hlcic7XG5pbXBvcnQgeyBGcmFnbWVudCwgRnJhZ21lbnRMaXN0IH0gZnJvbSAnLi9mcmFnbWVudCc7XG5pbXBvcnQgeyBhdXRvcnVuLCByZWFjdGl2ZSwgUmVmLCB3cmFwRm5IaWRlUmVmTW9kZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlPFQgZXh0ZW5kcyAoKSA9PiBGcmFnbWVudD4oZnVuYzogVCkge1xuICAvLyBAdHMtaWdub3JlXG4gIGZ1bmMuX19pc2RpcmVjdGl2ZV9fID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdGl2ZSh2YWw6IGFueSkge1xuICByZXR1cm4gdmFsPy5fX2lzZGlyZWN0aXZlX18gPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkaWYoXG4gIGNvbmQ6ICgpID0+IGJvb2xlYW4sXG4gIHllczogKCkgPT4gRnJhZ21lbnQsXG4gIG5vOiAoKSA9PiBGcmFnbWVudFxuKSB7XG4gIHJldHVybiBkaXJlY3RpdmUoKCkgPT4ge1xuICAgIGxldCBsYXN0UmVzdWx0OiBib29sZWFuO1xuICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdEZyYWdtZW50OiBGcmFnbWVudDtcblxuICAgIGF1dG9ydW4oKCkgPT4ge1xuICAgICAgY29uc3QgbmV3UmVzdWx0ID0gY29uZCgpO1xuICAgICAgaWYgKCFpbml0ZWQpIHtcbiAgICAgICAgbGFzdFJlc3VsdCA9IG5ld1Jlc3VsdDtcbiAgICAgICAgbGFzdEZyYWdtZW50ID0gbGFzdFJlc3VsdCEgPyB5ZXMoKSA6IG5vKCk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RnJhZ21lbnQgPSBuZXdSZXN1bHQgPyB5ZXMoKSA6IG5vKCk7XG4gICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGxhc3RGcmFnbWVudC5yZXBsYWNlV2l0aChuZXdGcmFnbWVudCk7XG4gICAgICAgIGxhc3RGcmFnbWVudCA9IG5ld0ZyYWdtZW50O1xuICAgICAgfSk7XG4gICAgICBsYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RGcmFnbWVudCE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZUl0ZW08VD4odmFsdWU6IFQsIGluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIHJlYWN0aXZlKHtcbiAgICB2YWx1ZSxcbiAgICBpbmRleCxcbiAgfSk7XG59XG5cbmV4cG9ydCB0eXBlIFJlYWN0aXZlSXRlbTxUPiA9IHtcbiAgdmFsdWU6IFQ7XG4gIGluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gJG1hcDxUPihcbiAgcmF3TGlzdDogVFtdLFxuICBtYXBGdW5jOiAoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiBGcmFnbWVudCxcbiAga2V5RnVuYzogKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4gc3RyaW5nIHwgbnVtYmVyXG4pIHtcbiAgY29uc3QgbGlzdCA9IChyYXdMaXN0IGFzIGFueSkgYXMgUmVmO1xuICBjb25zdCBsaXN0RGF0YSA9IChsaXN0IGFzIGFueSkgYXMgVFtdO1xuXG4gIGxldCBsYXN0UmVhY3RpdmVJdGVtcyA9IGxpc3REYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVJdGVtKGl0ZW0sIGluZGV4KTtcbiAgfSk7XG5cbiAgY29uc3QgZnJhZ21lbnRMaXN0ID0gbmV3IEZyYWdtZW50TGlzdCgpO1xuXG4gIGNvbnN0IG1hcEZ1bmNXcmFwID0gd3JhcEZuSGlkZVJlZk1vZGUoKGl0ZW06IFJlYWN0aXZlSXRlbTxUPikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbWFwRnVuYyhpdGVtKTtcbiAgICBmcmFnbWVudC5yZWFjdGl2ZUl0ZW0gPSBpdGVtO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSk7XG5cbiAgbGV0IGxhc3RLZXlVbmlxdWU6IChzdHJpbmcgfCBudW1iZXIpW10gPSBbXTtcbiAgY29uc3Qga2V5RnVuY1dyYXAgPSB3cmFwRm5IaWRlUmVmTW9kZSgoaXRlbTogUmVhY3RpdmVJdGVtPFQ+KSA9PiB7XG4gICAgY29uc3QgciA9IGtleUZ1bmMoaXRlbSk7XG4gICAgaWYgKHR5cGVvZiByICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgciAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGtleSBvZiAkbWFwIHNob3VsZCByZXR1cm4gc3RyaW5nIG9yIG51bWJlciwgYnV0IGdvdCAke3J9IFxcbiR7a2V5RnVuYy50b1N0cmluZygpfWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsYXN0S2V5VW5pcXVlLmluY2x1ZGVzKHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBrZXkgb2YgJG1hcCBzaG91bGQgYmUgdW5pcXVlLCBidXQgZ290ICR7cn0gaW4gJHtsYXN0S2V5VW5pcXVlLmpvaW4oJywgJyl9XFxuJHtrZXlGdW5jLnRvU3RyaW5nKCl9YFxuICAgICAgKVxuICAgIH1cbiAgICBsYXN0S2V5VW5pcXVlLnB1c2gocik7XG4gICAgcmV0dXJuIHI7XG4gIH0pO1xuXG4gIGxldCBsYXN0RnJhZ21lbnRzID0gbGlzdERhdGEubWFwKChfLCBpbmRleCkgPT5cbiAgICBtYXBGdW5jV3JhcChsYXN0UmVhY3RpdmVJdGVtc1tpbmRleF0pXG4gICk7XG4gIGxldCBsYXN0S2V5cyA9IGxpc3REYXRhLm1hcCgoXywgaW5kZXgpID0+XG4gICAga2V5RnVuY1dyYXAobGFzdFJlYWN0aXZlSXRlbXNbaW5kZXhdKVxuICApO1xuICBsYXN0S2V5VW5pcXVlID0gW107XG5cbiAgbGFzdEZyYWdtZW50cy5mb3JFYWNoKChmcmFnLCBpbmRleCkgPT4ge1xuICAgIGZyYWdtZW50TGlzdC5hcHBlbmRGcmFnbWVudChmcmFnLCBsYXN0S2V5c1tpbmRleF0pO1xuICB9KTtcblxuICBsZXQgaW5pdGVkID0gZmFsc2U7XG5cbiAgYXV0b3J1bihub3RyYWNrID0+IHtcbiAgICBpZiAoIWluaXRlZCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdGVkID0gbGlzdC5sZW5ndGg7XG4gICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3QgPSAobGlzdCBhcyB1bmtub3duKSBhcyBhbnlbXTtcblxuICAgIG5vdHJhY2soKCkgPT4ge1xuICAgICAgY29uc3QgbmV3S2V5cyA9IG5ld0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAga2V5RnVuY1dyYXAoY3JlYXRlUmVhY3RpdmVJdGVtKGl0ZW0sIGluZGV4KSlcbiAgICAgICk7XG4gICAgICBsYXN0S2V5VW5pcXVlID0gW107XG4gICAgICBcbiAgICAgIGNvbnN0IGxhc3RLZXlzID0gZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLm1hcChpdGVtID0+IGl0ZW0ua2V5ISk7XG5cbiAgICAgIC8vIGRpZmYgYW5kIHBhdGNoIGZyb20ga2V5c1xuICAgICAgbmV3S2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXlzID0gZnJhZ21lbnRMaXN0LmNoaWxkRnJhZ21lbnRzLm1hcChpdGVtID0+IGl0ZW0ua2V5ISk7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxhc3RLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBpbnNlcnRcbiAgICAgICAgICAvLyBjYW4gbm90IGZpbmQgaW4gb2xkIGxpc3QsIG1lYW4gaW5zZXJ0XG4gICAgICAgICAgLy8gaW5zZXJ0IHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICBjb25zdCByZWFjdGl2ZUl0ZW0gPSBjcmVhdGVSZWFjdGl2ZUl0ZW0obmV3TGlzdFtpbmRleF0sIGluZGV4KTtcblxuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gbWFwRnVuY1dyYXAocmVhY3RpdmVJdGVtKTtcblxuICAgICAgICAgIGZyYWdtZW50TGlzdC5pbnNlcnQoaW5kZXgsIGZyYWdtZW50LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAvLyBtb3ZlXG5cbiAgICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgZnJhZ21lbnRMaXN0Lm1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlbW92ZWQgPSBsYXN0S2V5cy5maWx0ZXIoa2V5ID0+IG5ld0tleXMuaW5kZXhPZihrZXkpID09PSAtMSk7XG4gICAgICBmcmFnbWVudExpc3QucmVtb3ZlV2l0aEtleXMocmVtb3ZlZCk7XG5cbiAgICAgIC8vIGFwcGx5IG5ldyByZWFjdGl2ZUluZGV4XG4gICAgICBmcmFnbWVudExpc3QuY2hpbGRGcmFnbWVudHMuZm9yRWFjaChcbiAgICAgICAgKGNoaWxkLCBpbmRleCkgPT4gKGNoaWxkIS5yZWFjdGl2ZUl0ZW0hLmluZGV4ID0gaW5kZXgpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnRMaXN0O1xufVxuIiwiaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tICcuL2JhdGNoZXInO1xuaW1wb3J0IHsgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBhdXRvcnVuLCBpc1JlZiwgcmVhY3RpdmUsIFJlZiwgd3JhcEZuSGlkZVJlZk1vZGUgfSBmcm9tICcuL3JlYWN0aXZlJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudCc7XG5pbXBvcnQgeyBtYXJrUmVmVXNlZCB9IGZyb20gJy4vZGV2JztcblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnQoXG4gIGNvbXA6IChwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IEZyYWdtZW50LFxuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG4pIHtcbiAgbGV0IGZyYWdtZW50OiBGcmFnbWVudDtcbiAgZnJhZ21lbnQgPSBjb21wKHJlYWN0aXZlKHByb3BzKSk7XG4gIHJldHVybiBmcmFnbWVudCE7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHIobm9kZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICBjb25zb2xlLmVycm9yKCdzaG91bGQgYmUgY2xhc3NOYW1lLCBidXQgZ290IGNsYXNzJyk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBrZXkgPSAnY2xhc3MnO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuICAgIGNvbnN0IGh0bWwgPSB2YWx1ZS5fX2h0bWw7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdyZWYnKSB7XG4gICAgLy8gdmFsdWUgc2hvdWxkIGJlIGEgKHJlZikgPT4gdm9pZFxuICAgIHZhbHVlKG5vZGUpO1xuICAgIHJldHVybjtcbiAgfVxuICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gYmluZEF0dHIobm9kZTogSFRNTEVsZW1lbnQsIGtleTogc3RyaW5nLCB2YWx1ZTogUmVmPGFueT4pIHtcbiAgbGV0IGxhc3RWYWx1ZSA9IHZhbHVlLnZhbHVlO1xuXG4gIGNvbnN0IGlzRXZlbnQgPSAvXm9uW0EtWl0vLnRlc3Qoa2V5KTtcbiAgY29uc3QgZXZlbnROYW1lID0gaXNFdmVudCA/IGtleS5yZXBsYWNlKC9eb24vLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKSA6ICcnO1xuICBsZXQgbGFzdFZhbHVlRXZlbnRIYW5kbGVyID0gaXNFdmVudCA/IHdyYXBGbkhpZGVSZWZNb2RlKGxhc3RWYWx1ZSkgOiAoKSA9PiB7fTtcblxuICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEF0dHIobm9kZSwga2V5LCBsYXN0VmFsdWUpO1xuICB9KTtcblxuICBhdXRvcnVuKCgpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIHNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgIGxhc3RWYWx1ZUV2ZW50SGFuZGxlciA9IHdyYXBGbkhpZGVSZWZNb2RlKGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxhc3RWYWx1ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldEF0dHIobm9kZSwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSk7XG4gICAgbGFzdFZhbHVlID0gbmV3VmFsdWU7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaChcbiAgdHlwZTogc3RyaW5nIHwgRnVuY3Rpb24sXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAuLi5jaGlsZHJlbjogc3RyaW5nW11cbikge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBGcmFnbWVudCgpO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAvXm9uW0EtWl0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgd3JhcEZuSGlkZVJlZk1vZGUodmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWYodmFsdWUpKSB7XG4gICAgICAgICAgbWFya1JlZlVzZWQodmFsdWUpO1xuICAgICAgICAgIGJpbmRBdHRyKHRhZywga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dHIodGFnLCBrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWYoY2hpbGQpKSB7XG4gICAgICAgICAgbWFya1JlZlVzZWQoY2hpbGQpO1xuICAgICAgICAgIGNvbnN0IHJlYWN0aXZlVmFsID0gY2hpbGQgYXMgUmVmPGFueT47XG4gICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyArIHJlYWN0aXZlVmFsLnZhbHVlKTtcbiAgICAgICAgICBhdXRvcnVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVhY3RpdmVWYWwudmFsdWU7XG4gICAgICAgICAgICBzY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGlyZWN0aXZlKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGNoaWxkIGFzICgpID0+IEZyYWdtZW50O1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZGlyZWN0aXZlKCk7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIodGFnKTtcbiAgICAgICAgfSBlbHNlIGlmIChGcmFnbWVudC5pc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICAgIChjaGlsZCBhcyBGcmFnbWVudCkuYXBwZW5kVG9Db250YWluZXIodGFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWcuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGNvbXBvbmVudFxuXG4gICAgcmV0dXJuIGJ1aWxkQ29tcG9uZW50KHR5cGUgYXMgKCkgPT4gRnJhZ21lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihmcmFnbWVudDogRnJhZ21lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgZnJhZ21lbnQuYXBwZW5kVG9Db250YWluZXIoY29udGFpbmVyKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBuYW1lc3BhY2UgSlNYIHtcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xuICAgICAgW25hbWU6IHN0cmluZ106IGFueTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuICAgIGltcG9ydCB7IGgsIHJlYWN0aXZlLCBhdXRvcnVuLCAkaWYsICRtYXAgfSBmcm9tICdyZXNlZSc7XG4gICAgaW1wb3J0IENvZGVCb3ggZnJvbSAnL2hvbWUvcnVubmVyL3dvcmsvcmVzZWUvcmVzZWUvcGFja2FnZXMvcmVzZWUtc2l0ZS9oZWxwZXIvY29kZS1ib3gnXG4gICAgZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGRpdj48aDEgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gxPlxuPGgyIGlkPVwiaGVsbG8td29ybGRcIj5IZWxsbyB3b3JsZDwvaDI+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBIZWxsbygpIHtcbiAgICByZXR1cm4gPGRpdj5IZWxsbyBXb3JsZDwvZGl2Pjtcbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMEhlbGxvKCklMjAlN0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCSGVsbG8lMjBXb3JsZCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwic3RhdGVcIj5TdGF0ZTwvaDI+XG48cD5XZSBjYW4gdXNlIDxjb2RlPnJlYWN0aXZlKG9iamVjdCk8L2NvZGU+IHRvIGNyZWF0ZSBzdGF0ZSBtb2RlbC48L3A+XG48dWw+XG48bGk+VXNlIGluIDxjb2RlPkpTWDwvY29kZT48L2xpPlxuPGxpPk11dGF0ZSBpdCB0byB1cGRhdGUgaW4gY2FsbGJhY2tzPC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb3VudGVyQXBwKCkge1xuICAgIGNvbnN0IGNvdW50ZXIgPSByZWFjdGl2ZSh7XG4gICAgICAgIGNvdW50OiAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGluYyA9ICgpID0+IGNvdW50ZXIuY291bnQgKys7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIENvdW50ZXI6IHtjb3VudGVyLmNvdW50fVxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2Pjtcbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMENvdW50ZXJBcHAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwY291bnRlciUyMCUzRCUyMHJlYWN0aXZlKCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvdW50JTNBJTIwMCUyQyUwQSUyMCUyMCUyMCUyMCU3RCklM0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMGluYyUyMCUzRCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjBjb3VudGVyLmNvdW50JTIwJTJCJTJCJTNCJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JkaXYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMENvdW50ZXIlM0ElMjAlN0Jjb3VudGVyLmNvdW50JTdEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0JpbmMlN0QlMjZndCUzQkFERCUyNmx0JTNCJTJGYnV0dG9uJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQiUyRnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGZGl2JTI2Z3QlM0IlM0IlMEElN0RcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwiY29tcHV0ZWRcIj5Db21wdXRlZDwvaDI+XG48dWw+XG48bGk+PGNvZGU+Z2V0IHgoKTwvY29kZT4gaW4gPGNvZGU+cmVhY3RpdmUob2JqZWN0KTwvY29kZT4gdG8gY3JlYXRlIGNvbXB1dGVkPC9saT5cbjxsaT5jb21wdXRlZCByZXN1bHQgaXMgc2FtZSB3aXRoIHJlYWN0aXZlIGJ1dCByZWFkb25seTwvbGk+XG48L3VsPlxuPGgzIGlkPVwiZXhhbXBsZVwiPkV4YW1wbGU8L2gzPlxueyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ291bnRlckFwcCgpIHtcbiAgICBjb25zdCBjb3VudGVyID0gcmVhY3RpdmUoe1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgLy8gZ2V0IG1lYW5zIGNvbXB1dGVkXG4gICAgICAgIGdldCBkb3VibGVDb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyLmNvdW50ICogMjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGluYyA9ICgpID0+IGNvdW50ZXIuY291bnQgKys7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxwPiBDb3VudGVyOiB7Y291bnRlci5jb3VudH0gPC9wPlxuICAgICAgICA8cD4gRG91YmxlOiB7Y291bnRlci5kb3VibGVDb3VudH0gPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jfT5BREQ8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2Pjtcbn1cbiAgICAgICAgICAgICAgICAgICAgfSkobW9kKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBtb2QuZXhwb3J0cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb2RlQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU9e2RlY29kZVVSSUNvbXBvbmVudChcImV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMENvdW50ZXJBcHAoKSUyMCU3QiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwY291bnRlciUyMCUzRCUyMHJlYWN0aXZlKCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvdW50JTNBJTIwMCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGdldCUyMG1lYW5zJTIwY29tcHV0ZWQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBnZXQlMjBkb3VibGVDb3VudCgpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwY291bnRlci5jb3VudCUyMColMjAyJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwJTdEKSUzQiUwQSUyMCUyMCUyMCUyMGNvbnN0JTIwaW5jJTIwJTNEJTIwKCklMjAlM0QlMjZndCUzQiUyMGNvdW50ZXIuY291bnQlMjAlMkIlMkIlM0IlMEElMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMjBDb3VudGVyJTNBJTIwJTdCY291bnRlci5jb3VudCU3RCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JwJTI2Z3QlM0IlMjBEb3VibGUlM0ElMjAlN0Jjb3VudGVyLmRvdWJsZUNvdW50JTdEJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCYnV0dG9uJTIwb25DbGljayUzRCU3QmluYyU3RCUyNmd0JTNCQUREJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjb21wb25lbnRcIj5Db21wb25lbnQ8L2gyPlxuPHVsPlxuPGxpPkZ1bmN0aW9uIGlzIGp1c3QgY29tcG9uZW50PC9saT5cbjxsaT5Qcm9wcyBpcyBhIG9iamVjdCAobWF5YmUgcmVhY3RpdmUpPC9saT5cbjwvdWw+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gRGlzcGxheSh7IGNvdW50IH0pIHtcbiAgICByZXR1cm4gPHA+SSB3aWxsIGRpc3BsYXkgY291bnQgZnJvbSB7JzxEaXNwbGF5Lz4nfToge2NvdW50fTwvcD47XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIENvdW50ZXJBcHAoKSB7XG4gICAgY29uc3QgY291bnRlciA9IHJlYWN0aXZlKHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgfSk7XG4gICAgY29uc3QgaW5jID0gKCkgPT4gY291bnRlci5jb3VudCArKztcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPERpc3BsYXkgY291bnQ9e2NvdW50ZXIuY291bnR9Lz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY30+QUREPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj47XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJmdW5jdGlvbiUyMERpc3BsYXkoJTdCJTIwY291bnQlMjAlN0QpJTIwJTdCJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTI2bHQlM0JwJTI2Z3QlM0JJJTIwd2lsbCUyMGRpc3BsYXklMjBjb3VudCUyMGZyb20lMjAlN0IlMjYlMjMwMzklM0IlMjZsdCUzQkRpc3BsYXklMkYlMjZndCUzQiUyNiUyMzAzOSUzQiU3RCUzQSUyMCU3QmNvdW50JTdEJTI2bHQlM0IlMkZwJTI2Z3QlM0IlM0IlMEElN0QlMEFleHBvcnQlMjBkZWZhdWx0JTIwZnVuY3Rpb24lMjBDb3VudGVyQXBwKCklMjAlN0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMGNvdW50ZXIlMjAlM0QlMjByZWFjdGl2ZSglN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb3VudCUzQSUyMDAlMkMlMEElMjAlMjAlMjAlMjAlN0QpJTNCJTBBJTIwJTIwJTIwJTIwY29uc3QlMjBpbmMlMjAlM0QlMjAoKSUyMCUzRCUyNmd0JTNCJTIwY291bnRlci5jb3VudCUyMCUyQiUyQiUzQiUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQkRpc3BsYXklMjBjb3VudCUzRCU3QmNvdW50ZXIuY291bnQlN0QlMkYlMjZndCUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTNCJTBBJTdEXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImxvZ2ljXCI+TG9naWM8L2gyPlxuPGgzIGlkPVwiaWZcIj4kaWY8L2gzPlxuPHA+VXNlIDxjb2RlPiRpZjwvY29kZT4gdG8gZG8gYSBzd2l0Y2ggbG9naWMgaW4gPGNvZGU+SlNYPC9jb2RlPi48L3A+XG57KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDb3VudGVyQXBwKCkge1xuICAgIGNvbnN0IGNvdW50ZXIgPSByZWFjdGl2ZSh7XG4gICAgICAgIGNvdW50OiAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGluYyA9ICgpID0+IGNvdW50ZXIuY291bnQgKys7XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgQ291bnRlcjoge2NvdW50ZXIuY291bnR9XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmN9PkFERDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+Y291bnQgPj0gMyA6IFxuICAgICAgICB7JGlmKFxuICAgICAgICAgICAgLy8gY29uZFxuICAgICAgICAgICAgKCkgPT4gY291bnRlci5jb3VudCA+PSAzLFxuICAgICAgICAgICAgLy8geWVzXG4gICAgICAgICAgICAoKSA9PiA8ZGl2PllFUyB7Y291bnRlci5jb3VudH08L2Rpdj4sXG4gICAgICAgICAgICAvLyBOT1xuICAgICAgICAgICAgKCkgPT4gPGRpdj5OTyB7Y291bnRlci5jb3VudH08L2Rpdj4sXG4gICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj47XG59XG4gICAgICAgICAgICAgICAgICAgIH0pKG1vZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbW9kLmV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29kZUJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlPXtkZWNvZGVVUklDb21wb25lbnQoXCJleHBvcnQlMjBkZWZhdWx0JTIwZnVuY3Rpb24lMjBDb3VudGVyQXBwKCklMjAlN0IlMEElMjAlMjAlMjAlMjBjb25zdCUyMGNvdW50ZXIlMjAlM0QlMjByZWFjdGl2ZSglN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb3VudCUzQSUyMDAlMkMlMEElMjAlMjAlMjAlMjAlN0QpJTNCJTBBJTIwJTIwJTIwJTIwY29uc3QlMjBpbmMlMjAlM0QlMjAoKSUyMCUzRCUyNmd0JTNCJTIwY291bnRlci5jb3VudCUyMCUyQiUyQiUzQiUwQSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb3VudGVyJTNBJTIwJTdCY291bnRlci5jb3VudCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0JidXR0b24lMjBvbkNsaWNrJTNEJTdCaW5jJTdEJTI2Z3QlM0JBREQlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQnAlMjZndCUzQmNvdW50JTIwJTI2Z3QlM0IlM0QlMjAzJTIwJTNBJTIwJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTI0aWYoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwY29uZCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCgpJTIwJTNEJTI2Z3QlM0IlMjBjb3VudGVyLmNvdW50JTIwJTI2Z3QlM0IlM0QlMjAzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIweWVzJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JZRVMlMjAlN0Jjb3VudGVyLmNvdW50JTdEJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyME5PJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKCklMjAlM0QlMjZndCUzQiUyMCUyNmx0JTNCZGl2JTI2Z3QlM0JOTyUyMCU3QmNvdW50ZXIuY291bnQlN0QlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyNmx0JTNCJTJGcCUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSU3RFwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDMgaWQ9XCJtYXBcIj4kbWFwPC9oMz5cbjxwPlVzZSA8Y29kZT4kbWFwPC9jb2RlPiBmb3IgYSBsaXN0IG1hcDwvcD5cbnsoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdG9kb2xpc3QgPSByZWFjdGl2ZSh7XG4gICAgICBsaXN0OiBbJ3Rlc3QnICsgY291bnQgKysgXSxcbiAgfSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICAgIC8vIHVzZSBhcnJheS5wdXNoL3NwbGljZS9zaGlmdC91bnNoaWZ0IHRvIG11dGF0ZVxuICAgICAgdG9kb2xpc3QubGlzdC5wdXNoKCduZXcgdG9kbycgKyBjb3VudCArKyk7XG4gIH1cblxuICByZXR1cm4gPHVsPlxuICAgIDxidXR0b24gb25DbGljaz17YWRkVG9kb30+QUREIFRPRE88L2J1dHRvbj5cbiAgICB7JG1hcChcbiAgICAgICAgdG9kb2xpc3QubGlzdCwgIC8vIGFycmF5XG4gICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgICAgIC8vIGl0ZW0udmFsdWUgbWVhbiBpdGVtXG4gICAgICAgICAgICAvLyBpdGVtLmluZGV4IG1lYW4gaW5kZXhcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgIFt7aXRlbS5pbmRleH1dIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9kb2xpc3QubGlzdC5zcGxpY2UoaXRlbS5pbmRleCwgMSl9PlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9LFxuICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgLy8ga2V5IG1hcCwgYWx0ZXJuYXRpdmUgdG8gPGxpIGtleT4gaW4gUmVhY3RcbiAgICAgICAgICAgIC8vIG11c3QgYmUgc3RyaW5nIG9yIG51bWJlciwgYW5kIGtlZXAgdW5pcXVlIGluIGxpc3RcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICB9XG4gICAgKX1cbiAgPC91bD47XG59XG5cblxuICAgICAgICAgICAgICAgICAgICB9KShtb2QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG1vZC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvZGVCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZGVjb2RlVVJJQ29tcG9uZW50KFwibGV0JTIwY291bnQlMjAlM0QlMjAwJTNCJTBBJTBBZXhwb3J0JTIwZGVmYXVsdCUyMGZ1bmN0aW9uJTIwQXBwKCklMjAlN0IlMEElMjAlMjBjb25zdCUyMHRvZG9saXN0JTIwJTNEJTIwcmVhY3RpdmUoJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwbGlzdCUzQSUyMCU1QiUyNiUyMzAzOSUzQnRlc3QlMjYlMjMwMzklM0IlMjAlMkIlMjBjb3VudCUyMCUyQiUyQiUyMCU1RCUyQyUwQSUyMCUyMCU3RCklM0IlMEElMEElMjAlMjBjb25zdCUyMGFkZFRvZG8lMjAlM0QlMjAoKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwdXNlJTIwYXJyYXkucHVzaCUyRnNwbGljZSUyRnNoaWZ0JTJGdW5zaGlmdCUyMHRvJTIwbXV0YXRlJTBBJTIwJTIwJTIwJTIwJTIwJTIwdG9kb2xpc3QubGlzdC5wdXNoKCUyNiUyMzAzOSUzQm5ldyUyMHRvZG8lMjYlMjMwMzklM0IlMjAlMkIlMjBjb3VudCUyMCUyQiUyQiklM0IlMEElMjAlMjAlN0QlMEElMEElMjAlMjByZXR1cm4lMjAlMjZsdCUzQnVsJTI2Z3QlM0IlMEElMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0JhZGRUb2RvJTdEJTI2Z3QlM0JBREQlMjBUT0RPJTI2bHQlM0IlMkZidXR0b24lMjZndCUzQiUwQSUyMCUyMCUyMCUyMCU3QiUyNG1hcCglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0b2RvbGlzdC5saXN0JTJDJTIwJTIwJTJGJTJGJTIwYXJyYXklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAoaXRlbSklMjAlM0QlMjZndCUzQiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMG1hcCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0udmFsdWUlMjBtZWFuJTIwaXRlbSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGl0ZW0uaW5kZXglMjBtZWFuJTIwaW5kZXglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlMjZsdCUzQmRpdiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVCJTdCaXRlbS5pbmRleCU3RCU1RCUyMCU3Qml0ZW0udmFsdWUlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjZsdCUzQmJ1dHRvbiUyMG9uQ2xpY2slM0QlN0IoKSUyMCUzRCUyNmd0JTNCJTIwdG9kb2xpc3QubGlzdC5zcGxpY2UoaXRlbS5pbmRleCUyQyUyMDEpJTdEJTI2Z3QlM0JSRU1PVkUlMjZsdCUzQiUyRmJ1dHRvbiUyNmd0JTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUzQiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMChpdGVtKSUyMCUzRCUyNmd0JTNCJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwa2V5JTIwbWFwJTJDJTIwYWx0ZXJuYXRpdmUlMjB0byUyMCUyNmx0JTNCbGklMjBrZXklMjZndCUzQiUyMGluJTIwUmVhY3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjBtdXN0JTIwYmUlMjBzdHJpbmclMjBvciUyMG51bWJlciUyQyUyMGFuZCUyMGtlZXAlMjB1bmlxdWUlMjBpbiUyMGxpc3QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBpdGVtLnZhbHVlJTNCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTIwJTIwKSU3RCUwQSUyMCUyMCUyNmx0JTNCJTJGdWwlMjZndCUzQiUzQiUwQSU3RCUwQSUwQVwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJwbGF5Z3JvdW5kXCI+UGxheUdyb3VuZDwvaDI+XG48cD5QbGF5IG9ubGluZSB3aXRoIDxhIGhyZWY9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbmF1Z2h0eS1oaWxsLXVna2dqP2ZpbGU9L3NyYy9pbmRleC50c3hcIj5Db2RlU2FuZGJveDwvYT48L3A+XG48L2Rpdj4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==