import React from "react";
import { connect } from 'react-redux';
import {View, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Header from '~/components/header';
import {tabs} from './const';
import {TabPrame} from '~/store/action/common';
// tabs => 组件
import RecommendPage from './tabPage/recommend';

interface Props {
    tabsState: TabPrame;
}

const mapStateToProps = (state: any) => {
    return {
        tabsState: state.commonReducers
    };
};

const files = require.context('./tabPage', false, /\.tsx$/);

const NewsScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState } = props;
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header tabs={tabs} />
                    {tabsState.key === 'recommend' && <RecommendPage />}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default connect(mapStateToProps)(NewsScreen);
