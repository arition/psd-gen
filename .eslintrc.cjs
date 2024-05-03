module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "alloy",
    "alloy/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: "./tsconfig.json",
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "import/no-duplicates": "off",
    "no-await-in-loop": "off",
    "no-plusplus": "off",
    "no-void": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/order": "off",
    "import/no-mutable-exports": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "prefer-template": "error",
    complexity: "off",
    "max-params": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^(_|unused)",
        varsIgnorePattern: "^(_|unused|React)",
      },
    ],
  },
};
