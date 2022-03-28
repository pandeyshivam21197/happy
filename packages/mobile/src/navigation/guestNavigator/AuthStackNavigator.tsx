import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@happy/mobile/src/screens';
import {NavigationKeys} from '../constants';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationKeys.screen.onBoardingScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
