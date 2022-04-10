import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationKeys} from '../../constants';
import {HomeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/HomeStackNavigator';

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={NavigationKeys.stacks.homeStack}
        component={HomeStackNavigator}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.homeStack}
        component={HomeStackNavigator}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.homeStack}
        component={HomeStackNavigator}
      />
    </BottomTab.Navigator>
  );
}
