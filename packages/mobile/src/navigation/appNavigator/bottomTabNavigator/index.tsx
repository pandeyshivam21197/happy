import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import lang from '@happy/common/src/assets/languages/en.json';
import {HomeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/HomeStackNavigator';
import {LikeStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/LikeStackNavigator';
import {ChatStackNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator/ChatStackNavigator';
import {Icon, icons} from '@happy/common/src/components';
import {ResponsiveSize} from '@happy/mobile/src/utils/responsiveUtils';
import {StyleSheet} from 'react-native';
import theme from '@happy/common/src/styles/theme';

export type BottomTabNavigatorParamList = {
  [NavigationKeys.homeStack]: undefined;
  [NavigationKeys.likeStack]: undefined;
  [NavigationKeys.chatStack]: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const tabOptions = (tabLabel: string, iconName: string) => ({
  tabBarIcon: ({color}: {color: string}) => (
    <Icon name={iconName} color={color} size={ResponsiveSize(25)} />
  ),
  tabBarShowLabel: false,
});

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <BottomTab.Screen
        name={NavigationKeys.homeStack}
        component={HomeStackNavigator}
        options={tabOptions(lang.tab.home, icons.lightning)}
      />
      <BottomTab.Screen
        name={NavigationKeys.likeStack}
        component={LikeStackNavigator}
        options={tabOptions(lang.tab.like, icons.heart)}
      />
      <BottomTab.Screen
        name={NavigationKeys.chatStack}
        component={ChatStackNavigator}
        options={tabOptions(lang.tab.chat, icons.chat)}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.palette.statusBar,
  },
});
