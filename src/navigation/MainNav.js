import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Welcome from '../welcome/Welcome';
import DragAndDrop from '../dragAndDrop/DragAndDrop';

import React from 'react';

const MainNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ title: 'Animations' }} name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="DragAndDrop" component={DragAndDrop} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNav;

