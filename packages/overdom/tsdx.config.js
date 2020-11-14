'use strict';
const analyze = require('rollup-plugin-visualizer');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  rollup(config, options) {
    config.plugins = config.plugins.map(plugin => {
          if (plugin.name === 'terser') {
              return new terser({
                mangle: {
                    properties: {
                      reserved: [],
                    },
                },
              });
          } else {
              return plugin;
          }
      })
    config.plugins.push(analyze());
    return config;
  },
}
