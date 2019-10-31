import React from "react";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from "~/components/Icons";
import Tabbar from "~/components/Tabbar";

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
            tabBarIcon: (props: Props) => tabbarFunc(props, "home", "资讯")
        }
    },
    AllyScreen: {
        ...AllyScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "search", "盟友圈")
        }
    },
    TVScreen: {
        ...TVScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) =>  tabbarFunc(props, "favorites", "电视台")
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
            tabBarIcon: (props: Props) => tabbarFunc(props, "profile", "战绩")
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

