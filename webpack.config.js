
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm

// Configs
const srcDir = './theme/components/src'
const distDir = path.resolve(__dirname, 'theme', 'components', 'dist')

module.exports = env => {
  return {
    entry: `${srcDir}/main.js`,
    output: {
      path: distDir,
      filename: 'bundle.js'
    },
    module: {
      rules: [ // Babel Loader vai aqui
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
      ]
    },
    devServer: {
      contentBase: distDir
    },
    plugins: [
      new CleanWebpackPlugin(distDir),
      new HtmlWebpackPlugin({
        template: `${srcDir}/index.html`,
        title: 'Development'
      }),
      new webpack.DefinePlugin({
        "APOSTILA": JSON.stringify(env.APOSTILA.toLowerCase())
      }),
    ]
  }

}
