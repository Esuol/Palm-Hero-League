import React from "react";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from "~/components/Icons";
import Tabbar from "~/components/Tabbar";
import store from '~/store';
import { SetTabAction } from '~/store/action/common';

// => 对于模块
import NewsScreen from './news';
import AllyScreen from './ally';
import TVScreen from './tv';
import ShopScreen from './shop';
import RecordScreen from './record';


interface Props {
    tintColor: string;
}

const tabbarFunc: (props: Props, name: string, label: string) => React.ReactNode  =
(props: Props, name: string, label: string) => <Icon name={name} label={label} color={props.tintColor} />;

const TabNavigator = createBottomTabNavigator({
    NewsScreen: {
        ...NewsScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "home", "资讯"),
            tabBarOnPress: (route) => {
                store.dispatch(SetTabAction({ title: '推荐', key: 'recommend' }));
                route.navigation.navigate('NewsScreen');
            }
        }
    },
    AllyScreen: {
        ...AllyScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "search", "盟友圈"),
            tabBarOnPress: (route) => {
                store.dispatch(SetTabAction({ title: '关注', key: 'attention' }));
                route.navigation.navigate('AllyScreen');
            }
        }
    },
    TVScreen: {
        ...TVScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) =>  tabbarFunc(props, "favorites", "电视台"),
            tabBarOnPress: (route) => {
                store.dispatch(SetTabAction({ title: '推荐', key: 'tvRecommend' }));
                route.navigation.navigate('TVScreen');
            }
        }
    },
    ShopScreen: {
        ...ShopScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "profile", "商城")
        }
    },
    RecordScreen: {
        ...RecordScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "record", "战绩")
        }
    }
},
{
    tabBarComponent: Tabbar,
    tabBarOptions: {
        activeTintColor: "#A97937",
        inactiveTintColor: "#83847E"
    }
});

export default createAppContainer(TabNavigator);

