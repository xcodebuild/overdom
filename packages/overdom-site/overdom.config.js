'use strict';
const path = require('path');

module.exports = {
    getWebpackConfig(config) {
        const jsxRule = config.module.rules.filter(item => item.test.test('.jsx'))[0];
        config.module.rules.push({
            test: /\.md$/,
            use: [
                jsxRule.use,
                {loader: path.join(__dirname, './helper/markdown-loader.js')}
            ],
        });
        return config;
    }
}
