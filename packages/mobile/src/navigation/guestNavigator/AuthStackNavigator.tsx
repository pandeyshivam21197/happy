import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginOptionsScreen} from '@happy/mobile/src/screens';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import MobileNumberScreen from '../../screens/auth/MobileNumberScreen';

export type AuthNavigatorParamList = {
  [NavigationKeys.loginOptionsScreen]: undefined;
  [NavigationKeys.mobileNumberScreen]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();

//login, signing and sign up
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationKeys.loginOptionsScreen}
        component={LoginOptionsScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NavigationKeys.mobileNumberScreen}
        component={MobileNumberScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
