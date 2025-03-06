const path = require("path");

module.exports = {
  entry: {
    index: "./src/main.tsx",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],

    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
};
