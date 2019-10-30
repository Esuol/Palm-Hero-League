/* /src/screens/Screen.js */

import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
    name: string;
}

const S = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bbbbbb",
        justifyContent: "center",
        alignItems: "center"
    },
    text: { fontSize: 28, color: "#222222", textAlign: "center" }
});

const Screen: React.SFC<Props>  = (props: Props) => (
    <View style={S.container}>
        <Text style={S.text}>This is the {props.name} screen</Text>
    </View>
);

export default Screen;
