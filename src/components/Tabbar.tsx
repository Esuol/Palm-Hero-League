import React from "react";
import posed from "react-native-pose";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, SafeAreaView } from "react-native";

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

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 }
});

const S = StyleSheet.create({
    container: { flexDirection: "row", height: 52, elevation: 2 },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
    spotLight: {
        width: tabWidth,
        height: "100%",
        backgroundColor: "rgba(128,128,255,0.2)",
        borderRadius: 8
    }
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
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <View style={S.container}>
                        <View style={StyleSheet.absoluteFillObject}>
                            <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`} />
                        </View>
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
                </View>
            </SafeAreaView>
        </>

    );
};

export default TabBar;
