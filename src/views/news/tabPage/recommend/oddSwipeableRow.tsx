import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse'
    },
    actionIcon: {
        width: 30,
        marginHorizontal: 10
    },
    rightAction: {
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        backgroundColor: '#dd2c00',
        flex: 1,
        justifyContent: 'flex-end'
    }
});

interface Props {
    children: React.ReactChild;
}

const LeftSwipeableRow: React.FC<Props>= (props: Props) => {
    const { children } = props;

    let _swipeableRow: Swipeable | null;

    const close = () => {
        (_swipeableRow as Swipeable).close();
    };

    const renderLeftActions = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
        const scale = dragX.interpolate({
            inputRange: [0, 80],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <RectButton style={styles.leftAction} onPress={close}>
                <AnimatedIcon
                    name="archive"
                    size={30}
                    color="#fff"
                    style={[styles.actionIcon, { transform: [{ scale }] }]}
                />
            </RectButton>
        );
    };

    const renderRightActions = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <RectButton style={styles.rightAction} onPress={close}>
                <AnimatedIcon
                    name="delete-forever"
                    size={30}
                    color="#fff"
                    style={[styles.actionIcon, { transform: [{ scale }] }]}
                />
            </RectButton>
        );
    };

    return (
        <Swipeable
            ref={node => {_swipeableRow = node}}
            friction={2}
            leftThreshold={80}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}>
            {children}
        </Swipeable>
    );
};

export default LeftSwipeableRow;
