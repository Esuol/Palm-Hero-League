import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface RouteItem {
    routeName: string;
    key: string;
    params: {};
}

interface Props {
    renderIcon: any;
    getLabelText: (route: any) => React.ReactNode;
    activeTintColor: string;
    inactiveTintColor: string;
    onTabPress: (route: any) => React.ReactNode;
    onTabLongPress: (route: any) => React.ReactNode;
    getAccessibilityLabel: (route: any) => string | undefined;
    navigation: any;
}

const S = StyleSheet.create({
    container: { flexDirection: "row", height: 52, elevation: 2 },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center" }
});

const TabBar: React.SFC<Props> = (props: Props) => {
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={S.container}>
            {routes.map((route: RouteItem, routeIndex: number) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                return (
                    <TouchableOpacity
                        key={routeIndex}
                        style={S.tabButton}
                        onPress={() => {
                            onTabPress({ route });
                        }}
                        onLongPress={() => {
                            onTabLongPress({ route });
                        }}
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                        {renderIcon({ route, focused: isRouteActive, tintColor })}

                        <Text>{getLabelText({route})}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;
