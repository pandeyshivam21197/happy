import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginOptionsScreen} from '@happy/mobile/src/screens';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import MobileNumberScreen from '@happy/mobile/src/screens/auth/MobileNumberScreen';
import OtpScreen from '@happy/mobile/src/screens/auth/OtpScreen';
import PrivacyPolicyScreen from '../../screens/auth/PrivacyPolicyScreen';
import UserInfoWalkthroughScreen from '../../screens/auth/UserInfoWalkthroughScreen';

export type AuthNavigatorParamList = {
  [NavigationKeys.loginOptionsScreen]: undefined;
  [NavigationKeys.mobileNumberScreen]: undefined;
  [NavigationKeys.otpScreen]: undefined;
  [NavigationKeys.privacyPolicyScreen]: undefined;
  [NavigationKeys.userInfoWalkthroughScreen]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();

//login, signing and sign up
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
    // initialRouteName={NavigationKeys.userInfoWalkthroughScreen}
    >
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
      <AuthStack.Screen
        name={NavigationKeys.otpScreen}
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NavigationKeys.privacyPolicyScreen}
        component={PrivacyPolicyScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NavigationKeys.userInfoWalkthroughScreen}
        component={UserInfoWalkthroughScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
