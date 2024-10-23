import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AUTH_SCREENS} from '../constants/res/values';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {AUTH_SCREENS.map(item => (
        <Stack.Screen name={item.name} component={item.component} key={item.name}/>
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
