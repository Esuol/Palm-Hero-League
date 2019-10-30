import React from "react";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from "~/components/Icons";
import Tabbar from "~/components/Tabbar";


import {
    HomeScreen,
    SearchScreen,
    FavoritesScreen,
    ProfileScreen
} from "~/views/screen";

interface Props {
    tintColor: string;
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => <Icon name="home" color={props.tintColor} />
        }
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => <Icon name="search" color={props.tintColor} />
        }
    },
    FavoritesScreen: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => <Icon name="favorites" color={props.tintColor} />
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => <Icon name="profile" color={props.tintColor} />
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

