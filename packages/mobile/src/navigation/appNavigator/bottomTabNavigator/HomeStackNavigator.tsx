import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {HomeScreen} from '@happy/mobile/src/screens';

export type HomeStackNavigatorParamList = {
  [NavigationKeys.homeScreen]: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

// logged in user flow
export const HomeStackNavigator: FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={NavigationKeys.homeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
