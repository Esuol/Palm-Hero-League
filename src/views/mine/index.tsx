import React, {useState} from "react";
import {
    View,
    Text,
    Dimensions,
    Platform,
    SafeAreaView
} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

const Drawerwrap = () => {
    const {width} = Dimensions.get('window');
    const [drawerState, setDrawerState] = useState<boolean>(false);
    let drawer: any;

    const renderDrawer = () => {
        return (
            <View>
                <Text>I am in the drawer!</Text>
            </View>
        );
    };

    const openDrawer = () => {
        drawer.openDrawer();
    };

    return (
        <View style={{flex: 1}}>
            <DrawerLayout
                ref={drawerNode => {
                    drawer = drawerNode;
                }}
                drawerWidth={width * 0.7}
                keyboardDismissMode="on-drag"
                drawerPosition={DrawerLayout.positions.Left}
                drawerType='slide'
                drawerBackgroundColor="#697581"
                overlayColor={'transparent'}
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
                }
                renderNavigationView={renderDrawer}>
                <SafeAreaView>
                    <View>
                        <Text onPress={openDrawer}>
                            Hello,it is me
                        </Text>
                    </View>
                </SafeAreaView>
            </DrawerLayout>
        </View>
    );
};

export default Drawerwrap;
