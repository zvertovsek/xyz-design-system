module.exports = {
  env: {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    // enable parsing latest ECMAScript
    sourceType: 'module' // allow use of imports

  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:jest/recommended", "prettier", "plugin:prettier/recommended", "plugin:storybook/recommended", "plugin:mdx/recommended"],
  overrides: [{
    files: ["*.ts", "*.tsx"],
    parserOptions: {
      project: "./tsconfig.json"
    }
  },
  {
    files: '*.mdx',
    parser: "plugin:mdx/recommended"
  }],
  "settings": {
    "mdx/code-blocks": true,
  },
  rules: {
    // here add any ESlint rules to overwrite those
    // from the recommended extensions
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off"
  }
};