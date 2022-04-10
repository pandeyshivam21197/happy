import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationKeys} from '../../constants';
import {HomeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/HomeStackNavigator';
import {LikeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/LikeStackNavigator';
import {ChatStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/ChatStackNavigator';

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  console.log('bottom stack');
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={NavigationKeys.stacks.homeStack}
        component={HomeStackNavigator}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.likeStack}
        component={LikeStackNavigator}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.chatStack}
        component={ChatStackNavigator}
      />
    </BottomTab.Navigator>
  );
}
