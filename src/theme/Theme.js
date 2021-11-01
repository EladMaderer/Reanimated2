import React, {useState} from 'react';
import {Dimensions, StyleSheet, Switch} from 'react-native';
import Animated, {
    useDerivedValue,
    interpolateColor,
    useAnimatedStyle,
    withTiming,
    Easing
} from 'react-native-reanimated';

const Theme = () => {
    const [theme, setTheme] = useState('light');
    const SIZE = Dimensions.get('window').width * 0.7;
    const THEME = {
        light: {
            background: '#fff',
            circle: '#fff',
            text: '#161616',
        },
        dark: {
            background: '#000',
            circle: '#181818',
            text: '#e3e3e3',
        }
    }

    const progress = useDerivedValue(() => {
        return theme === 'dark' ?
            withTiming(1, {duration: 400, easing: Easing.in}) :
            withTiming(0, {duration: 400, easing: Easing.in});
    }, [theme]);

    const rBgStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [THEME.light.background, THEME.dark.background]
        );

        return {
            backgroundColor,
        }
    });

    const rCircleStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [THEME.light.circle, THEME.dark.circle]
        );

        return {
            backgroundColor,
        }
    });

    const rTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(
            progress.value,
            [0, 1],
            [THEME.light.text, THEME.dark.text]
        );

        return {
            color,
        }
    });

    return (
        <Animated.View style={[styles.container, rBgStyle]}>
            <Animated.Text style={[styles.text, rTextStyle]}>THEME</Animated.Text>
            <Animated.View style={[styles.circle, {width: SIZE, height: SIZE, borderRadius: SIZE / 2}, rCircleStyle]}>
                <Switch
                    onValueChange={toggled => setTheme(toggled ? 'dark' : 'light')}
                    value={theme === 'dark'}
                    trackColor={{true: 'rgba(256, 0, 256, 0.2)', false: 'rgba(0, 0, 0, 1)'}}
                    thumbColor={'violet'}
                />
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 8,
        shadowOpacity: 0.4,
        elevation: 8,
    },
    text: {
        marginBottom: 25,
        fontSize: 45,
        fontWeight: '500',
        letterSpacing: 10,
    }
})

export default Theme;
