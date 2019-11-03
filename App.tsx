// @ts-nocheck
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import Router from '~/route/index';
import store from '~/store';

const App =  () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};
export default App;
