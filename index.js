module.exports = {
  extends: ["./lib/shared.js"].map(require.resolve),
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
