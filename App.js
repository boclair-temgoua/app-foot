import React from "react";

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer'

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Home'}
                >
                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App