import React from "react";
import { connect } from 'react-redux';
import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import { Provider, Toast } from '@ant-design/react-native';
import Header from '../components/header';
import {components, pages} from './const';
import {TabPrame, PullRefresh} from '../store/action/common';

// tabs
import { tabs } from './news/const';
import { allyTabs } from './ally/const';
import { tvTabs } from './tv/const';

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
    const {name} = navigation.state.params;

    const pickTabs: (name: string) => any = (tabname: string) => {
        return name === 'news' ? tabs : name === 'ally' ? allyTabs : tvTabs;
    };

    const pickTabsColor: (name: string) => any = (tabname: string) => {
        return name === 'news' ? '#a97937' : '#569E9D';
    };

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
                        <Header
                            tabs={name === 'news' || name === 'ally' || name === 'tv' ? pickTabs(name) : null}
                            tabActiveColor={name === 'news' || name === 'ally' || name === 'tv' ? pickTabsColor(name) : null}
                            name={name}
                            width={name === 'news' || name === 'shop' || name === 'record' ? 70 : name === 'ally' ? 50: 40 }
                        />
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
