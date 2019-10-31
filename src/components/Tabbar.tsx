import React from "react";
import posed from "react-native-pose";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, SafeAreaView } from "react-native";

interface RouteItem {
    routeName: string;
    key: string;
    params: {};
}

interface Props {
    renderIcon:  (route: any) => React.ReactNode;
    getLabelText: (route: any) => React.ReactNode;
    activeTintColor: string;
    inactiveTintColor: string;
    onTabPress: (route: any) => React.ReactNode;
    onTabLongPress: (route: any) => React.ReactNode;
    getAccessibilityLabel: (route: any) => string | undefined;
    navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 5;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 },
    route4: { x: tabWidth * 4 },
});
const Scaler = posed.View({
    active: { scale: 1.25 },
    inactive: { scale: 1 }
});

const S = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 52,
        elevation: 2,
        alignItems: "center"
    },
    tabButton: { flex: 1 },
    spotLight: {
        width: tabWidth,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    spotLightInner: {
        width: 48,
        height: 48,
        backgroundColor: "#ee0000",
        borderRadius: 24
    },
    scaler: { flex: 1, alignItems: "center", justifyContent: "center" }
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
                            <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`}>
                                <View style={S.spotLightInner} />
                            </SpotLight>
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
                                    <Scaler style={S.scaler} pose={isRouteActive ? "active" : "inactive"}>
                                        {renderIcon({ route, focused: isRouteActive, tintColor })}
                                    </Scaler>
                                    {/* <Text>{getLabelText({route})}</Text> */}
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
