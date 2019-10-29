module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended', 'eslint-config-alloy/typescript'],
    plugins: ['@typescript-eslint', 'react', 'react-native'],
    rules: {
        indent: [
            2,
            4,
            {
                SwitchCase: 2,
            },
        ],
        semi: [
            2,
            'always',
            {
                omitLastInOneLineBlock: true,
            },
        ],
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore',
            },
        ],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'react-native/no-single-element-style-arrays': 0,
        'no-console': 2,
        'no-undef': 2,
        'no-useless-constructor': 2,
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', 'ts', 'tsx']}],
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
