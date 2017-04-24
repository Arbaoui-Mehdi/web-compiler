
/*
*
* Config
*
*/
const webpack           = require("webpack");
const path              = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin    = require("uglifyjs-webpack-plugin");
const extractSass       = new ExtractTextPlugin({
    filename: "main.css"
});
/*
*
*
*/
module.exports = {
  entry: [
    "./src/client/client.js"
  ],
  output: {
    path: path.resolve('build/js/'),
    filename: 'bundle.client.js'
  },
  devtool: "source-map",
  /*
  *
  * Modules
  *
  */
  module: {
    rules: [
      //
      //
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?-babelrc,+cacheDirectory,presets[]=es2015",
      },
      //
      //
      // SCSS
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
              {
                loader: "css-loader",
                options: {
                  // minimize: true,
                  importLoaders: 1,
                  sourceMap: true
                }
              },
              {
                loader: "postcss-loader?parser=sugarss",
                options: {
                  plugins: function () {
                    return [
                      require("precss"),
                      require("autoprefixer"),
                      require("postcss-apply"),
                      require("postcss-calc"),
                      require("postcss-font-magician")
                    ];
                  }
                }
              },
              {
                loader: "sass-loader",
                options: {
                    includePaths: [
                      "node_modules/bootstrap-sass/assets/stylesheets/"
                    ],
                    sourceMap: true
                }
              }
           ]
        })
      },
      //
      //
      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          "file-loader?hash=md5&&name=../../build/images/[hash].[ext]",
        	"image-webpack-loader"
        ]
      },
      //
      //
      //Fonts
      {
        test: /\.(woff(2)?)$/i,
        loaders: [
          "file-loader?hash=md5&&name=../../build/fonts/[[hash].[ext]",
        	"image-webpack-loader"
        ]
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loaders: [
          "url-loader?limit=10000",
          "file-loader?hash=md5&&name=../../build/fonts/[hash].[ext]",
        ],
      }
    ]
  },
  /*
  *
  * Plugins
  *
  */
  plugins: [
      //
      //
      // CSS
      new ExtractTextPlugin("./../../build/css/main.css")

  ]
}
