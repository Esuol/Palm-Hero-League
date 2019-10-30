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

const tabbarFunc: (props: Props, name: string) => React.ReactNode  = (props: Props, name: string) => <Icon name={name} color={props.tintColor} />;

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "home")
        }
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) => tabbarFunc(props, "search")
        }
    },
    FavoritesScreen: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (props: Props) =>  tabbarFunc(props, "favorites")
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
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

