import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import Page from './Page';

const Welcome = () => {
    const words = ['Welcome', 'To', 'Reanimated2', 'I am', 'Elad Maderer'];

    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });

    return (
        <Animated.ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            horizontal
            style={styles.container}
        >
            {words.map((title, index) => (
                <Page key={index.toString()} title={title} index={index} translateX={translateX} />
            ))}
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default Welcome;
