import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { WingBlank, Icon } from '@ant-design/react-native';
import Tabs from './tab';

const S = StyleSheet.create({
    wrap: {
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

interface Props {
    tabs: { title: string; key: string }[];
    name: string;
    width: number;
}

const Header: React.SFC<Props> = (props: Props) => {
    const { tabs, name, width } = props;
    return (
        <View>
            <WingBlank size="md" style={S.wrap}>
                <View style={{width: `${(100 - width)/2}%`}}>
                    <Image
                        style={S.image}
                        source={{uri: 'https://img2.woyaogexing.com/2019/10/31/9ff4fd9097c64e8097c5e63f8b3ca1c3!400x400.jpeg'}}
                    />
                </View>
                <View style={{width: `${width}%`}}>
                    <Tabs tabs={tabs} />
                </View>
                <View style={{width: `${(100 - width)/2}%`, alignItems: "flex-end",}}>
                    <Icon style={S.icon} name="wechat" size="lg" color="#a97937" />
                </View>
            </WingBlank>
        </View>
    );
};

export default Header;
