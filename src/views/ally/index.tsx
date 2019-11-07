import React from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';
import { allyTabs } from './const';
import { TabPrame } from '~/store/action/common';
// tabs => 组件
import AttentionPage from './tabPages/attention';
import AllyRecommendPage from './tabPages/allyRecommend';
import InterestingPlayPage from './tabPages/interestingPlay';

const components = {
    attention: AttentionPage,
    allyRecommend: AllyRecommendPage,
    interestingPlay: InterestingPlayPage,
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

const AllyScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState } = props;

    return (
        <View>
            {allyTabs.map(item => {
                if(item.key === tabsState.key) {
                    const CurrentPage: React.FC = components[item.key as keyof typeof components];
                    return (
                        <CurrentPage />
                    );
                }
            })}
        </View>
    );
};

export default connect(mapStateToProps)(AllyScreen);
