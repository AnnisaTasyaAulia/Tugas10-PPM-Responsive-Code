import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screns/HomeScreen';
import DetailScreen from '../screns/DetailScreen';
import OrderScreen from '../screns/OrderScreen';
import Started from '../screns/Started';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Started'>
                <Stack.Screen name= 'Started' component={Started} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name='DetailScreen' component={DetailScreen} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name='OrderScreen' component={OrderScreen} options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
