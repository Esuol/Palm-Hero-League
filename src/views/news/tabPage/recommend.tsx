import React, { Component } from 'react';
import { StyleSheet, Text, View, I18nManager } from 'react-native';

import { FlatList, RectButton } from 'react-native-gesture-handler';
import {DATA} from './const/recommed';

//  To toggle LTR/RTL uncomment the next line
// I18nManager.allowRTL(true);

import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';
import GmailStyleSwipeableRow from './GmailStyleSwipeableRow';

const styles = StyleSheet.create({
    rectButton: {
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    separator: {
        backgroundColor: 'rgb(200, 199, 204)',
        height: StyleSheet.hairlineWidth,
    },
    fromText: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    messageText: {
        color: '#999',
        backgroundColor: 'transparent',
    },
    dateText: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#999',
        fontWeight: 'bold',
    },
});


const Row = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
        <Text style={styles.fromText}>{item.from}</Text>
        <Text numberOfLines={2} style={styles.messageText}>
            {item.message}
        </Text>
        <Text style={styles.dateText}>
            {item.when} {'❭'}
      </Text>
    </RectButton>
);

const SwipeableRow = ({ item, index }) => {
    if (index % 2 === 0) {
        return (
            <AppleStyleSwipeableRow>
                <Row item={item} />
            </AppleStyleSwipeableRow>
        );
    } else {
        return (
            <GmailStyleSwipeableRow>
                <Row item={item} />
            </GmailStyleSwipeableRow>
        );
    }
};

const RecommendList: React.FC = () => {
    return (
        <FlatList
            data={DATA}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item, index }) => (
                <SwipeableRow item={item} index={index} />
            )}
            keyExtractor={(item, index) => `message ${index}`}
        />
    );
};

export default RecommendList;

