import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@happy/mobile/src/screens';
import {NavigationKeys} from '../constants';

const AuthStack = createNativeStackNavigator();

//login, signing and sign up
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationKeys.screen.loginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
