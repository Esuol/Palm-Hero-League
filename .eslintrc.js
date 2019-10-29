module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended",  'eslint-config-alloy/typescript'],
  plugins: ["@typescript-eslint", "react"],
  rules: {
        'indent': [
          2,
          4,
          {
              "SwitchCase": 2
          }
        ]
  },
  // 跟路径引入
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    },
  },
};
