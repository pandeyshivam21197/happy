import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../constants';
import {AuthStackNavigator} from '@happy/mobile/src/navigation/guestNavigator/AuthStackNavigator';
import {OnBoardingScreen} from '@happy/mobile/src/screens';

const GuestStack = createNativeStackNavigator();

// show landing screen / login screen
export const GuestStackNavigator = () => {
  return (
    <GuestStack.Navigator>
      <GuestStack.Screen
        name={NavigationKeys.screen.onBoardingScreen}
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <GuestStack.Screen
        name={NavigationKeys.stacks.authStack}
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    </GuestStack.Navigator>
  );
};
