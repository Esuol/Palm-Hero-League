import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Tabs } from '@ant-design/react-native';

interface Props {
    tabs: { title: string; type: string }[];
}


const Tab: React.SFC<Props> = (props: Props) => {
    const { tabs } = props;

    const tabClick = (tab: any, index: number) => {
        // console.log(tab);
        // console.log(index);
    };

    return (
        <View style={{ flex: 1 }}>
            <Tabs tabs={tabs} initialPage={1} tabBarPosition="top" tabBarActiveTextColor="#a97937"
                tabBarUnderlineStyle={ {backgroundColor: '#a97937', height: 2, } } onTabClick={tabClick} />
        </View>
    );
};

export default Tab;
