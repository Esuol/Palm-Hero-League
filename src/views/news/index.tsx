import React from "react";
import {View, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Header from '~/components/header';
import {tabs} from './const';

const NewsScreen: React.SFC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header tabs={tabs} />
                    <Text>tab-page</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewsScreen;
