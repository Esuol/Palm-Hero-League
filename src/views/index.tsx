import React from "react";
import { connect } from 'react-redux';
import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import { Provider, Toast } from '@ant-design/react-native';
import Header from '../components/header';
import {components, pages} from './const';
import { tabs } from './news/const';
import {TabPrame, PullRefresh} from '../store/action/common';

interface Props {
    tabsState: TabPrame;
    refreshState: {
        refreshState: boolean;
    };
    pullRefresh: (refreshState: boolean) => boolean;
    navigation: any;
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


function wait(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const NewsScreen: React.SFC<Props> = (props: Props) => {
    const { refreshState, pullRefresh, navigation } = props;

    const onRefresh = () => {
        pullRefresh(true);

        wait(1000).then(() => {
            pullRefresh(false);
            Toast.success('刷新成功', 1);
        });
    };


    return (
        <Provider>
            <SafeAreaView>
                <ScrollView
                    style={{height: '100%'}}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshState.refreshState}
                            tintColor='#a97937'
                            title= {refreshState.refreshState? '刷新中....':'下拉刷新'}
                            onRefresh={onRefresh} />
                    }>
                    <View>
                        <Header tabs={tabs} />
                        {
                            pages.map(item => {
                                if(navigation.state.params.name === item.page) {
                                    const CurrentPage: React.FC = components[item.page as keyof typeof components];
                                    return (
                                        <CurrentPage />
                                    );
                                }
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Provider>
    );
};

export default connect(mapStateToProps, mapDispatchProps)(NewsScreen);
