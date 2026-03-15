/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  // 小程序全局变量
  globals: {
    uni: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    getApp: true,
    UniApp: true,
    UniHelper: true,
    App: true,
    Page: true,
    Component: true,
    AnyObject: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'vue/multi-word-component-names': ['off'],
    'vue/no-setup-props-destructure': ['off'],
    'vue/no-deprecated-html-element-is': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    // 允许JSON文件中的注释
    'jsonc/comments': 'off',
    'no-unused-expressions': 'off',
  },
   // 覆盖特定文件的规则
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      rules: {
        'jsonc/comments': 'off',
        'jsonc/quote-props': 'off',
        'jsonc/quotes': 'off',
        'jsonc/comma-dangle': 'off',
        'jsonc/comma-style': 'off',
        'jsonc/indent': 'off',
        'jsonc/key-spacing': 'off',
        'jsonc/object-curly-spacing': 'off',
        'jsonc/array-bracket-spacing': 'off',
      },
    },
  ],
}
