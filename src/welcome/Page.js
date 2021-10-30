import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {useAnimatedStyle, interpolate, Extrapolate} from 'react-native-reanimated';

const Page = ({title, index, translateX}) => {
    const {width, height} = Dimensions.get('window');
    const SIZE = width * 0.7;
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const rStyle = useAnimatedStyle(() => {
            const scale = interpolate(
                translateX.value,
                inputRange,
                [0, 1, 0],
                Extrapolate.CLAMP,
            );
            const borderRadius = interpolate(
                translateX.value,
                inputRange,
                [0, SIZE / 2, 0],
                Extrapolate.CLAMP,
            );

            return {
                transform: [{scale}],
                borderRadius,
            }
        }
    );

    const rTextStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            translateX.value,
            inputRange,
            [height / 2, 0, -height / 2],
            Extrapolate.CLAMP,
        );
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [-1.5, 1, -1.5],
            Extrapolate.CLAMP,
        )

        return {
            transform: [
                {
                    translateY,
                }
            ],
            opacity
        }
    });

    return (
        <View style={[styles.container, {height, width, backgroundColor: `rgba(0, 0, 190, 0.${index + 2})`}]}>
            <Animated.View style={[styles.square, {width: SIZE, height: SIZE}, rStyle]}/>
            <Animated.View style={[styles.textView, rTextStyle]}>
            <Text style={[styles.text]}>{title}</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
      position: 'absolute',
    },
    text: {
        fontSize: 32,
        color: 'white',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    square: {
        backgroundColor: 'rgba(0, 0, 256, 0.4)'
    }
});

export default Page;
