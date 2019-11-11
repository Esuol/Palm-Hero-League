import React, {useState} from "react";
import { connect } from 'react-redux';
import {
    View,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    Text,
    Animated,
    StyleSheet,
    Platform
} from 'react-native';
import { Provider, Toast } from '@ant-design/react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Header from '../components/header';
import {components, pages} from './const';
import {TabPrame, PullRefresh} from '../store/action/common';

// tabs
import { tabs } from './news/const';
import { allyTabs } from './ally/const';
import { tvTabs } from './tv/const';

const S = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 10,
    },
});

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
    const { refreshState, pullRefresh, navigation, tabsState} = props;
    const {name} = navigation.state.params;
    let drawer: any;


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

    // 侧边栏

    const renderParallaxDrawer = (progressValue: any) => {
        const parallax = progressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
        });
        const animatedStyles = {
            transform: [{ translateX: parallax }],
        };
        return (
            <Animated.View style={[S.drawerContainer, animatedStyles]}>
                <Text>I am in the drawer!</Text>
                <Text>
                    Watch parallax animation while you pull the drawer!
                </Text>
            </Animated.View>
        );
    };

    return (
        <Provider>
            <SafeAreaView>
                <DrawerLayout
                    ref={(dra: DrawerLayout) => {
                        drawer = dra;
                    }}
                    drawerWidth={200}
                    keyboardDismissMode="on-drag"
                    drawerPosition={DrawerLayout.positions.Left}
                    drawerType={'back'}
                    drawerBackgroundColor="#ddd"
                    overlayColor={'#00000000'}
                    renderNavigationView={renderParallaxDrawer}
                    contentContainerStyle={
                        Platform.select({
                            ios: {
                                shadowColor: '#000',
                                shadowOpacity: 0.5,
                                shadowOffset: { width: 0, height: 2 },
                                shadowRadius: 60,
                            },
                            android: {
                                elevation: 100,
                                backgroundColor: '#000',
                            },
                        })
                    }>
                    <View style={{marginBottom: 50}}>
                        <Header
                            tabs={name === 'news' || name === 'ally' || name === 'tv' ? pickTabs(name) : null}
                            tabActiveColor={name === 'news' || name === 'ally' || name === 'tv' ? pickTabsColor(name) : null}
                            name={name}
                            width={name === 'news' || name === 'shop' || name === 'record' ? 70 : name === 'ally' ? 50: 40 }
                            openDrawer={() => drawer.openDrawer()}
                        />
                    </View>
                    <ScrollView
                        style={{height: '100%'}}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshState.refreshState}
                                tintColor='#a97937'
                                title= {refreshState.refreshState? '刷新中....':'下拉刷新'}
                                onRefresh={onRefresh} />
                        }>
                        <View style={{ marginBottom: 60}}>
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
                            <Text style={{
                                fontSize: 14,
                                color: '#a97937',
                                lineHeight: 30,
                                justifyContent: "center",
                                textAlign: 'center'
                            }}>已经到底部啦</Text>
                        </View>
                    </ScrollView>
                </DrawerLayout>
            </SafeAreaView>
        </Provider>
    );
};

export default connect(mapStateToProps, mapDispatchProps)(NewsScreen);
