import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { SetTabAction, TabPrame } from '~/store/action/common';

interface Props {
    tabs: TabPrame[];
    setTabAction: (tab: TabPrame) => TabPrame;
}

interface State {
    commonReducers: TabPrame;
}

const mapDispatchToProps = (dispatch: any) => ({
    setTabAction: (obj: TabPrame) => dispatch(SetTabAction(obj))
});

const mapStateToProps = (state: State) => {
    return {
        tabsState: state.commonReducers
    };
};

const Tab: React.SFC<Props> = (props: Props) => {
    const { tabs, setTabAction } = props;

    const tabClick = (tab: TabPrame, index: number) => {setTabAction(tab)};

    return (
        <View style={{ flex: 2 }}>
            <Tabs
                tabs={tabs} initialPage={0}
                tabBarPosition="top"
                tabBarActiveTextColor="#a97937"
                tabBarUnderlineStyle={ {backgroundColor: '#a97937', height: 2, } }
                onTabClick={tabClick} />
        </View>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Tab);
