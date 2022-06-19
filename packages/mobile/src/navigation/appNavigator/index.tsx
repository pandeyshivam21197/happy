import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';

export type AppNavigatorParamList = {
  [NavigationKeys.bottomTab]: undefined;
};

const AppStack = createNativeStackNavigator<AppNavigatorParamList>();

// logged in user flow
export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={NavigationKeys.bottomTab}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};
