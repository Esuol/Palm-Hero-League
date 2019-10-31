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

const tabbarFunc: (props: Props, name: string) => React.ReactNode  = (props: Props, name: string) => <Icon name={name} color={props.tintColor} />;

const TabNavigator = createBottomTabNavigator({
    NewsScreen: {
        ...NewsScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "home")
        }
    },
    AllyScreen: {
        ...AllyScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "search")
        }
    },
    TVScreen: {
        ...TVScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) =>  tabbarFunc(props, "favorites")
        }
    },
    ShopScreen: {
        ...ShopScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "profile")
        }
    },
    RecordScreen: {
        ...RecordScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "profile")
        }
    }
},
{
    tabBarComponent: Tabbar,
    tabBarOptions: {
        activeTintColor: "#4F4F4F",
        inactiveTintColor: "#ddd"
    }
});

export default createAppContainer(TabNavigator);

