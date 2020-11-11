'use strict'
const {fusebox} = require('fuse-box');

fusebox({
  target: 'browser',
  entry: 'index.tsx',
  webIndex: {
    template: 'index.html',
  },
  debug: true,
  devServer: true,
  watcher: {
    enabled: true,
    include: '../'
  }
}).runDev();
