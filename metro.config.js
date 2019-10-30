/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    // 支持jsx开发
    resolver: {
        sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs'],
    },
};
