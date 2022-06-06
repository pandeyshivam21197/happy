import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from '@happy/mobile/src/navigation/appNavigator';
import {GuestStackNavigator} from '@happy/mobile/src/navigation/guestNavigator';
import {StatusAndKeyBoardLayout} from '../components/atoms/StatusAndKeyboardLayout';

export default function RootNavigator() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <StatusAndKeyBoardLayout>
          <AppStackNavigator />
        </StatusAndKeyBoardLayout>
      ) : (
        <StatusAndKeyBoardLayout backgroundColor="red">
          <GuestStackNavigator />
        </StatusAndKeyBoardLayout>
      )}
    </NavigationContainer>
  );
}
