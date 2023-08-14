const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const prod = process.env.NODE_ENV === "production";

function src(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  devServer: {
    headers: {
      "Cache-Control": "public, max-age=604800"
    }
  },
  devtool: prod ? undefined : "source-map",
  entry: "./src/index.tsx",
  mode: prod ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"]
        },
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                precision: 3
              }
            }
          }
        ]
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  output: {
    filename: "[name].[contenthash].js",
    path: __dirname + "/build"
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "src/assets/imgs/favicon.ico",
      template: "src/index.html"
    })
  ],
  resolve: {
    alias: {
      assets: src("assets"),
      components: src("components"),
      styles: src("styles"),
      types: src("types"),
      utils: src("utils"),
      views: src("views")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
