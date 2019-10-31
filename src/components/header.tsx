import React from 'react';
import {View, Text} from 'react-native';
import { Button } from '@ant-design/react-native';

const Header = () => {
    return (
        <View>
            <Text>header</Text>
            <Button type="ghost">Start</Button>
        </View>
    );
};

export default Header;
