![coverage](https://codecov.io/gh/xcodebuild/resee/branch/master/graphs/badge.svg?branch=master)
![CI](https://github.com/xcodebuild/resee/workflows/CI/badge.svg)
# RESEE
```
 _  __ __ __ __
|_)|_ (_ |_ |_ 
| \|____)|__|__
```

A tiny library for building reactive view without virtual-dom.

### Install

```shell
npm install --save resee
```

Change your `jsxFactory` to `h` in your `tsconfig.json` or `babelrc`.

### Get Start
[Sandbox DEMO](https://codesandbox.io/s/loving-vaughan-29d2w?file=/src/index.tsx)

```js
import { h, render } from "resee";

const App = () => <div>Hello World</div>;

render(<App />, document.getElementById("app"));
```

### Reactive & Logic
[Sandbox DEMO](https://codesandbox.io/s/naughty-hill-ugkgj?file=/src/index.tsx:0-669)

```js
import { h, reactive, $if, render } from "resee";

const App = () => {
  const count = reactive(1);

  // count() return count reactive value
  // count(val) set count reactive value to val
  const inc = () => count(count() + 1);

  return (
    <div>
      <button onClick={inc}>CLICK</button>
      Hello World {count}
      <div>
        Count more than 2:
        {$if(
          // cond
          () => count() > 2,
          // yes
          () => (
            <span>YES</span>
          ),
          // no
          () => (
            <span>NO</span>
          )
        )}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
```

### Why RESEE

See [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead), and `Svelte` is cool but another language.

So I want to write `JSX/TSX` without virtual-dom or too many build tools.

### Other Example

- [List Todo](https://codesandbox.io/s/naughty-hill-ugkgj?file=/src/index.tsx)

### Status

RESEE is still in early stage, do not use it in production.

### LICENSE
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fxcodebuild%2Fresee.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fxcodebuild%2Fresee?ref=badge_large)
