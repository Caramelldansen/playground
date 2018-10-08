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
    "vue/max-attributes-per-line": [2, {
      "singleline": 10, // For Vuetify support
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    // Default value is not working
    "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "always"
    }]
  },
  globals: {}
}
