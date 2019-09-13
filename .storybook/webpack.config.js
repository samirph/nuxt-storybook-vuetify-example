const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                indentedSyntax: true // optional
              }
            }
          }
        ]
      },
      { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ] },
    ]
  },
  resolve: {
    alias: {
      "@": path.dirname(path.resolve(__dirname))
    },
    extensions: ['.vue', '.css', '.less', '.scss', '.sass', '.html']
  }
};
