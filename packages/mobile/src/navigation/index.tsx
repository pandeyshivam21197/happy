import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from '@happy/mobile/src/navigation/appNavigator';
import {GuestStackNavigator} from '@happy/mobile/src/navigation/guestNavigator';

export default function App() {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackNavigator /> : <GuestStackNavigator />}
    </NavigationContainer>
  );
}
