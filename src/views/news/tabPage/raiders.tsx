import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {TabPrame} from '~/store/action/common';

interface Props {
    tabsState: TabPrame;
}

const mapStateToProps = (state: any) => {
    return {
        tabsState: state.commonReducers
    };
};

const raidersPage: React.FC<Props> = (props: Props) => {
    const { tabsState } = props;
    return (
        <View>
            <Text>{tabsState.title}</Text>
        </View>
    );
};

export default connect(mapStateToProps)(raidersPage);
