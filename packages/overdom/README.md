![coverage](https://codecov.io/gh/xcodebuild/overdom/branch/master/graphs/badge.svg?branch=master)
![CI](https://github.com/xcodebuild/overdom/workflows/CI/badge.svg)
![size](https://img.shields.io/bundlephobia/minzip/overdom)

# overdom
```
 _____               ______ ________  ___
|  _  |              |  _  \  _  |  \/  |
| | | |_   _____ _ __| | | | | | | .  . |
| | | \ \ / / _ \ '__| | | | | | | |\/| |
\ \_/ /\ V /  __/ |  | |/ /\ \_/ / |  | |
 \___/  \_/ \___|_|  |___/  \___/\_|  |_/
                                                                     
```

A tiny view library with JSX, mutate(data) = mutate(DOM).

### Install

```shell
npm install --save overdom
```

Change your `jsxFactory` to `h` in your `tsconfig.json` or `babelrc`.

### Get Started

Get started from here: [https://xcodebuild.github.io/overdom/](https://xcodebuild.github.io/overdom/)

### Why overdom

See [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead), and `Svelte` is cool but another language.

So I build this tiny library for:

- Build view with declarative JavaScript/TypeScript
- Mutate data to mutate real DOM

### Status

`overdom` is still in early stage, do not use it in production.
