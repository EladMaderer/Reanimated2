import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Welcome = ({navigation}) => {
    React.useEffect(() => {
        console.log(navigation);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.text}>Welcome</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DragAndDrop')}>
                    <Text style={styles.text}>Drag & Drop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Theme')}>
                    <Text style={styles.text}>Theme</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsContainer: {
        marginTop: 70,
    },
    button: {
        width: 200,
        marginTop: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'rgba(38, 38, 38, 0.8)',
    }
});

export default Welcome;
