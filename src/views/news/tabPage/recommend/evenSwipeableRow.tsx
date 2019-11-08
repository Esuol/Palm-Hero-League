import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager, Alert } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

interface Props {
    children: React.ReactChild;
}

const RightSwipeableRow: React.FC<Props> = (props: Props) => {
    const { children } = props;
    let _swipeableRow: Swipeable | null;

    const close = () => {
        (_swipeableRow as Swipeable).close();
    };

    const renderLeftActions = (progress: any, dragX: any) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
        return (
            <RectButton style={styles.leftAction} onPress={close}>
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
            Archive
                </Animated.Text>
            </RectButton>
        );
    };

    const renderRightAction = (text: string, color: string, x: number, progress: Animated.AnimatedInterpolation) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const pressHandler = () => {
            close();
            Alert.alert(text);
        };
        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    const  renderRightActions = (progress: any) => (
        <View style={{ width: 192, flexDirection: I18nManager.isRTL? 'row-reverse' : 'row' }}>
            {renderRightAction('More', '#C8C7CD', 192, progress)}
            {renderRightAction('Flag', '#ffab00', 128, progress)}
            {renderRightAction('More', '#dd2c00', 64, progress)}
        </View>
    );

    return (
        <Swipeable
            ref={node => {_swipeableRow = node}}
            friction={2}
            leftThreshold={30}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}>
            {children}
        </Swipeable>
    );
};

export default RightSwipeableRow;
