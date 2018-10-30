module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard', // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'plugin:vue/recommended' //https://github.com/vuejs/eslint-plugin-vue
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10, // For Vuetify support
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // Default value is not working
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],

    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    /*
    * vue-eslint-parser 有 bug，max-len会检测 script 标签的内容
    * https://github.com/mysticatea/vue-eslint-parser
    */
    'max-len': 0,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'prefer-promise-reject-errors': 0,
    'object-curly-newline': 0,
    'no-use-before-define': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }]
  },
  globals: {}
}
