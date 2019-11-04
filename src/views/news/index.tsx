import React from "react";
import { connect } from 'react-redux';
import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import Header from '~/components/header';
import {tabs} from './const';
import {TabPrame, PullRefresh} from '~/store/action/common';
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
    refreshState: {
        refreshState: boolean;
    };
    pullRefresh: (refreshState: boolean) => boolean;
}

interface State {
    tabReducer: TabPrame;
    refreshReducer: {
        refreshState: boolean;
    };
}

const mapStateToProps = (state: State) => {
    return {
        tabsState: state.tabReducer,
        refreshState: state.refreshReducer,
    };
};

const mapDispatchProps = (dispatch: any) => {
    return {
        pullRefresh: (refreshState: boolean) => dispatch(PullRefresh(refreshState))
    };
};

// const files = require.context('./tabPage', false, /\.tsx$/);

function wait(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const NewsScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState, refreshState, pullRefresh } = props;

    const onRefresh = () => {
        pullRefresh(true);

        wait(2000).then(() => pullRefresh(false));
    };


    return (
        <SafeAreaView>
            <ScrollView
                style={{height: '100%'}}
                refreshControl={
                    <RefreshControl refreshing={refreshState.refreshState} onRefresh={onRefresh} />
                }>
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

export default connect(mapStateToProps, mapDispatchProps)(NewsScreen);
