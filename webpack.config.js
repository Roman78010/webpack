var WebpackObfuscator = require('webpack-obfuscator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   exclude: [ 
      //       path.resolve(__dirname, 'excluded_file_name.js') 
      //   ],
      //   enforce: 'post',
      //   use: { 
      //       loader: WebpackObfuscator.loader, 
      //       options: {
      //           rotateStringArray: true
      //       }
      //   }
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Create `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Complies Sass to CSS
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/styles/vars.scss',
                'src/styles/mixins.scss',
              ]
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  //   new WebpackObfuscator ({
  //     rotateStringArray: true
  // }, ['excluded_bundle_name.js'])
  ],
  optimization: {
    minimize: true,
  },
  devServer: {
    compress: true,
    port: 3000,
  },
};