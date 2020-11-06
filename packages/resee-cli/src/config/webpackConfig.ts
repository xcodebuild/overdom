import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import fs from 'fs-extra-promise';

function findEntry() {
    const srcDir = path.join(process.cwd(), './src/');
    const files = fs.readdirSync(srcDir);

    let index = '';

    [
        'index.tsx',
        'index.ts',
        'index.jsx',
        'index.js',
    ].forEach(file => {
        if (files.indexOf(file) !== -1) {
            index = file;
        }
    });

    return path.join(srcDir, index);
}
export function getWebpackConfig() {
    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: findEntry(),
        output: {
          filename: 'index.js'
        },
        resolve: {
          extensions: ['.ts', '.tsx', '.js']
        },
        plugins: [new HtmlWebpackPlugin()],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 7799
        },
        module: {
          rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env', 
                        ['@babel/preset-react', {
                            'pragma': 'h',
                            'throwIfNamespace': false,
                            'runtime': 'classic'
                        }], 
                        ['@babel/preset-typescript', {
                            jsxPragma: 'h',
                            onlyRemoveTypeImports: true,
                        }]
                    ]
                  }
                }
            }
          ]
        }
    } as webpack.Configuration;
}

