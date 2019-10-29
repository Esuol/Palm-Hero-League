// @ts-nocheck
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, StatusBar, Text} from 'react-native';

const App: React.SFC = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text>首页</Text>
                </View>
            </SafeAreaView>
        </>
    );
};


export default App;
