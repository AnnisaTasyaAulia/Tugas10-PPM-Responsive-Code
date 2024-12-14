import React from 'react';
import { View, Text } from 'react-native';
import { CartProvider } from './src/cart/CartContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
    return (
        <CartProvider>
          <AppNavigator/>
        </CartProvider>
    );
};

export default App;
