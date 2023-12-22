import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AuthScreen from './screens/AuthScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen name="Products" component={HomeStack} />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            initialParams={{ products: cartItems }}
          />
          {/* Agrega más pestañas según sea necesario */}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth">
            {(props) => <AuthScreen {...props} setUser={setUser} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

