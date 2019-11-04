import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { WingBlank } from '@ant-design/react-native';
import {TabPrame} from '~/store/action/common';

interface Props {
    tabsState: TabPrame;
}

const mapStateToProps = (state: any) => {
    return {
        tabsState: state.tabReducer
    };
};

const recommendPage: React.FC<Props> = (props: Props) => {
    const { tabsState } = props;
    return (
        <WingBlank style={{marginTop: 15}}>
            <View>
                <Text>{tabsState.title}</Text>
            </View>
        </WingBlank>
    );
};

export default connect(mapStateToProps)(recommendPage);
