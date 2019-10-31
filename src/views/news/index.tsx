import React from "react";
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from '~/components/header';

const NewsScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewsScreen;
