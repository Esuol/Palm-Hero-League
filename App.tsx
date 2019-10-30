// @ts-nocheck
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import Router from '~/route/index';

// import {SafeAreaView, View, StatusBar, Text} from 'react-native';
// const App: React.SFC = () => {
//     return (
//         <>
//             <StatusBar barStyle="dark-content" />
//             <SafeAreaView>
//                 <View>
//                     <Text>首页Page</Text>
//                 </View>
//             </SafeAreaView>
//         </>
//     );
// };

const App =  () => <Router />;
export default App;
