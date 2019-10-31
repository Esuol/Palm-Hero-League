import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Tabs } from '@ant-design/react-native';

interface Props {
    tabs: { title: string; type: string }[];
}

const S = StyleSheet.create({
    wrap: {
        width: '120%',
        flex: 1,
        marginTop: 15,
    }
});

const Tab: React.SFC<Props> = (props: Props) => {
    const { tabs } = props;
    return (
        <View style={{ flex: 1 }}>
            <Tabs tabs={tabs} initialPage={1} tabBarPosition="top">
                <ScrollView>
                    <View style={S.wrap}>
                        <Text>tab</Text>
                    </View>
                </ScrollView>
            </Tabs>
        </View>
    );
};

export default Tab;
