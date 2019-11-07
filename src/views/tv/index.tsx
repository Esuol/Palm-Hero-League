import React from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';
import { tvTabs } from './const';
import { TabPrame } from '~/store/action/common';
// tabs => 组件
import TvRecommendPage from './tabpages/tvRecommend';
import MinePage from './tabpages/mine';

const components = {
    tvRecommend: TvRecommendPage,
    mine: MinePage
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

const TvScreen: React.SFC<Props> = (props: Props) => {
    const { tabsState } = props;

    return (
        <View>
            {tvTabs.map(item => {
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

export default connect(mapStateToProps)(TvScreen);
