/* eslint-disable */
//eslint-disable-next-line @typescript-eslint/no-var-requires

const path = require("path");

/** @type {import("eslint").Linter.Config} */

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: [],
  extends: ["next/core-web-vitals"],
  rules: {},
  overrides: [],
};

module.exports = config;

/* const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};

module.exports = config; */

/* rules: {
  "@typescript-eslint/consistent-type-imports": "off",
  "@typescript-eslint/no-unused-vars": "off",
  // add any other specific rules you want to turn off
}, */
