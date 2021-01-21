const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

/**
 * Base webpack configuration
 *
 * @param env -> env parameters
 * @param argv -> CLI arguments, 'argv.mode' is the current webpack mode (development | production)
 * @returns object
 */
module.exports = (env, argv) => {
  let isProd = (argv.mode === 'production');
  let postCssLoader = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          isProd && ["@fullhuman/postcss-purgecss", {
            content: ['./**/*.ejs'],
            safelist: {
              standard: [ /^active/,/^tooltip-inner/, /^tooltip-arrow/ ],
            }   
          }],
          ["autoprefixer", {}],
          ["postcss-preset-env", {}]
        ],
      },
    },
  };

  let config = {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      host: '127.0.0.1',
      port: 8080
    },
    entry: {
      vendor: path.resolve(__dirname, './src/vendor.js'),
      main: path.resolve(__dirname, './src/main.js'),
    },
    optimization: {},
    externals: {
      jquery: 'jQuery'
    },  
    output: {
      filename: 'js/[name].bundle' + (isProd ? '.[contenthash]' : '') + '.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '../'
    },
    module: {
      rules: [
        {
          test: /\.(c|le)ss$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader', postCssLoader, 'less-loader' ],
        },
        {
          test: /\.(gif|svg)$/i,
          loader: 'file-loader',
          options: { name: '[name].[ext]', outputPath: 'img', esModule: false }
        },
        {
          test: /\.(jpe?g|png|webp)$/i,
           use: [
            {
              loader: "responsive-loader",
              options: {
                adapter: require("responsive-loader/sharp"),
                placeholder: true,
                placeholderSize: 114,
                sizes: [1423],
                format: 'webp',
                name: '[name]-[width].[ext]',
                outputPath: 'img'
              },
            },
          ],
        },
        {
          test: /\.woff(2)?$|\.ttf$|\.eot$/,
          loader: 'file-loader',
          options: { name: '[name].[ext]', outputPath: 'fonts' }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        favicon: 'favicon.png',
        template: path.resolve(__dirname, './templates/index.html.ejs'),
        title: 'Marlon B. Buella',
        meta: {
          charset: { charset: 'utf-8' },
          viewport: 'width=device-width, initial-scale=1'
        }
      }),
      new MiniCssExtractPlugin({ filename: 'css/[name].bundle' + (isProd ? '.[contenthash]' : '') + '.css' }),
      new webpack.ProvidePlugin({
        // inject ES5 modules as global vars
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      }),
    ],
  };

  /* Production-specific config */
  if(!isProd) {
    config.devServer.writeToDisk = true;
    config.plugins.push(new webpack.SourceMapDevToolPlugin({}));
  } else {
    config.devServer.compress = true;
    config.devServer.https = true;

    config.optimization = {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', {
              discardComments: { removeAll: true },
            }],
          },
        }),
        new TerserPlugin({ parallel: true })
      ],
      splitChunks: { chunks: 'all' }
    };

    config.plugins.push(
      new HtmlCriticalWebpackPlugin({
        base: path.resolve(__dirname, 'dist'),
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
        extract: true,
        width: 375,
        height: 565,
        penthouse: {
          blockJSRequests: false,
        }
      }),
    );
  }

  return config;
}
