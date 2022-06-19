import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@happy/mobile/src/screens';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';

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
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NavigationKeys.mobileNumberScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
