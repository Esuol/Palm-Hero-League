module.exports = {
  root: true,
  extends: '@react-native-community',
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
