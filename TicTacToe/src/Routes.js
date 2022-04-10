import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import pages
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown:false,
            }}
          >
            <Stack.Screen name='Home' component={HomePage}/>
            <Stack.Screen name='Game' component={GamePage}/>

          </Stack.Navigator>
        </NavigationContainer>
    )
}




export default Routes;