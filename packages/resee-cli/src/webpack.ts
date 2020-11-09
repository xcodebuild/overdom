import { getWebpackConfig } from './config/webpackConfig';
import webpack from 'webpack';
import color from 'ansi-colors';
import middleware from 'webpack-dev-middleware';
import express from 'express';
import { getReseeConfig } from './config';

function getCompiler() {
    const webpackConfig = getWebpackConfig();

    const cfg = getReseeConfig();
    const finalConfig = (cfg.getWebpackConfig && cfg.getWebpackConfig(webpackConfig)) || webpackConfig;
    const compiler = webpack(finalConfig as webpack.Configuration);
    return compiler;
}
export function build() {
    const compiler = getCompiler();
    compiler.run((err, stats) => { // [Stats Object](#stats-object)
        if (err || stats?.hasErrors()) {
            console.error(stats?.toString({
                colors: true,
            }));
            process.exit(1);
        } else {
            console.log(stats?.toString({
                colors: true,
            }));
        }
        // Done processing
        console.log(color.green('Build success'));
    });
}

export function watch() {
    const compiler = getCompiler();
    const app = express();
    app.use(
        middleware(compiler, {
            // webpack-dev-middleware options
        })
    );
    app.listen(7799, () => console.log(color.green('App listening on port 7799!, open http://127.0.0.1:7799 in browser')));
}