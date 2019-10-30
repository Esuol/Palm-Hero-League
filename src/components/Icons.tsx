import React from "react";
import { Text } from "react-native";

interface Props {
    name: string;
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
    const { color, style } = props;

    const name: keyof typeof iconMap  = props.name as keyof typeof iconMap;

    const icon: string = iconMap[name];

    return <Text style={[{ fontSize: 26, color }, style]}>{icon}</Text>;
};

export default Icon;
