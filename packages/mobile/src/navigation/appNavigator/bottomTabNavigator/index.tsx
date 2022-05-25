import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import lang from '@happy/common/src/assets/languages/en.json';
import {HomeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/HomeStackNavigator';
import {LikeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/LikeStackNavigator';
import {ChatStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/ChatStackNavigator';
import {Icon, icons} from '@happy/common/src/components';
import {ResponsiveSize} from '@happy/mobile/src/utils/responsiveUtils';

const BottomTab = createBottomTabNavigator();

const tabOptions = (tabLabel: string, iconName: string) => ({
  tabBarLabel: tabLabel,
  tabBarIcon: ({color}: {color: string}) => (
    <Icon name={iconName} color={color} size={ResponsiveSize(15)} />
  ),
});

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: ResponsiveSize(15),
        },
      }}>
      <BottomTab.Screen
        name={NavigationKeys.stacks.homeStack}
        component={HomeStackNavigator}
        options={tabOptions(lang.tab.home, icons.lightning)}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.likeStack}
        component={LikeStackNavigator}
        options={tabOptions(lang.tab.like, icons.heart)}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.chatStack}
        component={ChatStackNavigator}
        options={tabOptions(lang.tab.chat, icons.chat)}
      />
    </BottomTab.Navigator>
  );
}
