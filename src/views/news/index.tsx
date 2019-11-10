import React from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { tabs } from './const';
import { TabPrame, SetTabAction } from '~/store/action/common';
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
    setTabAction: any;
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

const mapDispatchToProps = (dispatch: any) => ({
    setTabAction: (obj: TabPrame) => dispatch(SetTabAction(obj))
});

// const files = require.context('./tabPage', false, /\.tsx$/);
const NewsScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState, setTabAction } = props;

    let _swipeableRow: Swipeable | null;

    const renderRightActions = () => {
        // setTimeout(() => {
        //     setTabAction({title: '总决赛', key: 'finalMatch' });
        // }, 100);
        console.warn(1);
    };

    return (
        <Swipeable
            ref={node => {_swipeableRow = node}}
            friction={2}
            leftThreshold={80}
            rightThreshold={40}
            renderRightActions={renderRightActions}>
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
        </Swipeable>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
