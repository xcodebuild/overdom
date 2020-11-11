import webpack from 'webpack';
import fs from 'fs-extra-promise';
import path from 'path';

interface ReseeConfig {
  getWebpackConfig?: (config: webpack.Configuration) => webpack.Configuration;
}

export function getReseeConfig() {
  // read resee.config.js
  const CONFIG_PATH = path.join(process.cwd(), 'resee.config.js');

  if (!fs.existsSync(CONFIG_PATH)) {
    return {} as ReseeConfig;
  }
  const config = require(CONFIG_PATH) as ReseeConfig;
  return config;
}
