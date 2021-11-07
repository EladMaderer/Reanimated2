import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const DragAndDrop = () => {
    const SQUARE = 100;
    const CIRCLE_RADIUS = SQUARE * 2;

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: (event, context) => {
            const distance = Math.sqrt(Math.pow(translateX.value, 2) + Math.pow(translateY.value, 2));
            if(distance < CIRCLE_RADIUS + SQUARE / 2) {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        }
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                }
            ]
        }
    })

    return (
        <View style={styles.container}>
            <View style={[styles.circle, {height: CIRCLE_RADIUS * 2, width: CIRCLE_RADIUS * 2, borderRadius: CIRCLE_RADIUS}]}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.square, {height: SQUARE, width: SQUARE}, rStyle]}/>
                </PanGestureHandler>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        borderColor: 'rgba(0, 0, 256, 0.5)',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 256, 0.5)',
    }
});

export default DragAndDrop;
