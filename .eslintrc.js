module.exports = {
  extends: ["estidlore/react", "estidlore/jest"],
  globals: {
    module: true,
    window: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname
  }
};
