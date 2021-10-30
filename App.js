import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNav from './src/navigation/MainNav';

const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <MainNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(144, 144, 144)',
    },
});

export default App;
