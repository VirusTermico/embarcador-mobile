import React from 'react';
import {BOTTOM_TAB_SCREENS} from '../constants/res/values';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {BOTTOM_TAB_SCREENS.map(item => (
        <Tab.Screen
        options={{title:item.alias}}
          name={item.name}
          component={item.component}
          key={item.name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
