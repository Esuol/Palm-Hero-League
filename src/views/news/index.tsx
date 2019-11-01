import React from "react";
import {View, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Header from '~/components/header';


const tabs = [
    { title: '推荐', key: 'recommend' },
    { title: '云顶', key: 'cloud' },
    { title: '总决赛', key: 'finalMatch' },
    { title: '新游', key: 'newGame' },
    { title: '赛事', key: 'matches' },
    { title: '攻略', key: 'raiders' },
    { title: '活动', key: 'activity' },
    { title: '视频', key: 'video' },
    { title: '官方', key: 'official' },
];

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
