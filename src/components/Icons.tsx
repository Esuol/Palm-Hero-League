import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    name: string;
    label: string;
    color: string;
    style?: any;
}

enum iconMap  {
    home = "♡",
    search = "♢",
    favorites = "♧",
    profile = "♤"
}


const Icon: React.SFC<Props> = (props: Props) => {
    const { color, style, label } = props;

    const name: keyof typeof iconMap  = props.name as keyof typeof iconMap;

    const icon: string = iconMap[name];

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[{ fontSize: 26, color,  }, style]}>{icon}</Text>
            <Text style={[{ fontSize: 12, color }, style]}>{label}</Text>
        </View>
    );
};

export default Icon;
