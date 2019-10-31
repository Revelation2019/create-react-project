module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'babel'
  ],
  rules: {
    // "react/jsx-no-bind": ["error", {
    //   "ignoreDOMComponents": false,
    //   "ignoreRefs": false,
    //   "allowArrowFunctions": false,
    //   "allowFunctions": false,
    //   "allowBind": false
    // }],
    // "react/jsx-uses-react": 1, // 处理组件中React未被使用
    // "react/jsx-uses-vars": 1 // 使用组件App未被使用
  },
  settings: {
    react: {
      // 修复警告：React version not specified in eslint-plugin-react settings
      version: require('./package.json').devDependencies.react
    }
  }
}
