import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@happy/mobile/src/screens';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';

export type AuthNavigatorParamList = {
  [NavigationKeys.loginScreen]: undefined;
  [NavigationKeys.mobileNumber]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();

//login, signing and sign up
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationKeys.loginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NavigationKeys.mobileNumber}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
