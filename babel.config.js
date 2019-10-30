module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    // 跟路径引入
    plugins: [
        [
            'babel-plugin-root-import',
            {
                rootPathSuffix: 'src',
                rootPathPrefix: '~',
            },
        ],
    ],
};
