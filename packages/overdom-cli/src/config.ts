import webpack from 'webpack';
import fs from 'fs-extra-promise';
import path from 'path';

interface overdomConfig {
  getWebpackConfig?: (config: webpack.Configuration) => webpack.Configuration;
}

export function getoverdomConfig() {
  // read overdom.config.js
  const CONFIG_PATH = path.join(process.cwd(), 'overdom.config.js');

  if (!fs.existsSync(CONFIG_PATH)) {
    return {} as overdomConfig;
  }
  const config = require(CONFIG_PATH) as overdomConfig;
  return config;
}
