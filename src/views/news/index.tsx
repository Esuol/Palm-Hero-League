import React from "react";
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from '~/components/header';


const tabs = [
    { title: '推荐', type: 'recommend' },
    { title: '云顶', type: 'cloud' },
    { title: '总决赛', type: 'finalMatch' },
    { title: '新游', type: 'newGame' },
    { title: '赛事', type: 'matches' },
    { title: '攻略', type: 'raiders' },
    { title: '活动', type: 'activity' },
    { title: '视频', type: 'video' },
    { title: '官方', type: 'official' },
];

const NewsScreen: React.SFC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header tabs={tabs} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewsScreen;
