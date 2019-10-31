import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { WingBlank, Icon } from '@ant-design/react-native';

const S = StyleSheet.create({
    container: {

    },
    wrap: {
        flex: 1,
        flexDirection: "row",
    },
    right: {
        width: '15%'
    },
    center: {
        width: '70%'
    },
    left: {
        width: '15%'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


const Header = () => {
    return (
        <View style={S.container}>
            <WingBlank size="md" style={S.wrap}>
                <View style={S.left}>
                    <Image
                        style={S.image}
                        source={{uri: 'https://img2.woyaogexing.com/2019/10/31/9ff4fd9097c64e8097c5e63f8b3ca1c3!400x400.jpeg'}}
                    />
                </View>
                <View style={S.center}>
                    <Text>custom</Text>
                </View>
                <View style={S.right}>
                    <Icon style={S.icon} name="wechat" size="lg" color="#a97937" />
                </View>
            </WingBlank>
        </View>

    );
};



export default Header;
