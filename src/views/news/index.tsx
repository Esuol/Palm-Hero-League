import React from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';
import { tabs } from './const';
import { TabPrame } from '~/store/action/common';
// tabs => 组件
import RecommendPage from './tabPage/recommend/recommend';
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

// const files = require.context('./tabPage', false, /\.tsx$/);
const NewsScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState } = props;

    return (
        <View>
            {tabs.map(item => {
                if(item.key === tabsState.key) {
                    const CurrentPage = components[item.key as keyof typeof components];
                    return (
                        <CurrentPage />
                    );
                }
            })}
        </View>
    );
};

export default connect(mapStateToProps)(NewsScreen);
