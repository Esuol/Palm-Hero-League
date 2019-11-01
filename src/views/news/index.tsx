import React from "react";
import { connect } from 'react-redux';
import {View, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Header from '~/components/header';
import {tabs} from './const';
import {TabPrame} from '~/store/action/common';
// tabs => 组件
import RecommendPage from './tabPage/recommend';
import CloudPage from './tabPage/cloud';
import FinalMatchPage from './tabPage/finalMacth';
import NewPage from './tabPage/newGame';
import MatchesPage from './tabPage/matches';
import RaidersPage from './tabPage/raiders';
import ActivityPage from './tabPage/activity';
import VideoPage from './tabPage/video';
import OfficialPage from './tabPage/official';

const components = {
    recommend: RecommendPage,
    cloud: CloudPage,
    finalMatch: FinalMatchPage,
    newGame: NewPage,
    matches: MatchesPage,
    raiders: RaidersPage,
    activity: ActivityPage,
    video: VideoPage,
    official: OfficialPage,
};

interface Props {
    tabsState: TabPrame;
}

const mapStateToProps = (state: any) => {
    return {
        tabsState: state.commonReducers
    };
};

// const files = require.context('./tabPage', false, /\.tsx$/);

const NewsScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState } = props;
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header tabs={tabs} />
                    {tabs.map(item => {
                        if(item.key === tabsState.key) {
                            const CurrentPage: React.FC = components[item.key as keyof typeof components];
                            return (
                                <CurrentPage />
                            );
                        }
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default connect(mapStateToProps)(NewsScreen);
