import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from '@happy/mobile/src/navigation/appNavigator';
import {GuestStackNavigator} from '@happy/mobile/src/navigation/guestNavigator';
import {StatusAndKeyBoardLayout} from '../components/atoms/StatusAndKeyboardLayout';
import {useAppSelector} from '@happy/common/src/redux/store';
import {NavigationService} from '@happy/mobile/src/services/navigationService';

export default function RootNavigator() {
  const {
    appReducer: {isLoggedIn},
    appReducer,
  } = useAppSelector(state => state);

  return (
    <NavigationContainer ref={NavigationService.navigation}>
      {true ? (
        <StatusAndKeyBoardLayout>
          <AppStackNavigator />
        </StatusAndKeyBoardLayout>
      ) : (
        <StatusAndKeyBoardLayout>
          <GuestStackNavigator />
        </StatusAndKeyBoardLayout>
      )}
    </NavigationContainer>
  );
}
