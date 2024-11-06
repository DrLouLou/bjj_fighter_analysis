/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks", "jsx-a11y", "simple-import-sort"],
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/consistent-type-imports": "warn",

    // Show warning for unused variables
    "@typescript-eslint/no-unused-vars": "warn",

    // Import sorting
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    // Warn when using `any`
    "@typescript-eslint/no-explicit-any": "warn",

    // Warn when using `console.log` and allow `console.warn` and `console.error`
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              // `react` first, `next` second, then packages starting with a character
              ["^react$"],

              // Other packages starting with a character
              ["^@?\\w"],
              // Packages starting with `@`
              ["^@"],
              // Packages starting with `~`
              ["^~"],
              // Imports starting with `../`
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Imports starting with `./`
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports
              ["^.+\\.s?css$"],
              // Side effect imports
              ["^\\u0000"],
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    ".vscode",
    "node_modules",
    "build",
    "dist",
    ".github",
    ".idea",
  ],
};
