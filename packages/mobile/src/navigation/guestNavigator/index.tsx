import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../constants';
import {AuthStackNavigator} from '@happy/mobile/src/navigation/guestNavigator/AuthStackNavigator';
import {OnBoardingScreen} from '@happy/mobile/src/screens';

export type GuestNavigatorParamList = {
  [NavigationKeys.authStack]: undefined;
};

const GuestStack = createNativeStackNavigator<GuestNavigatorParamList>();

// show landing screen / login screen
export const GuestStackNavigator = () => {
  return (
    <GuestStack.Navigator>
      <GuestStack.Screen
        name={NavigationKeys.authStack}
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
      {/* <GuestStack.Screen
        name={NavigationKeys.}
        component={OnBoardingScreen}
        options={{headerShown: false}}
      /> */}
    </GuestStack.Navigator>
  );
};
