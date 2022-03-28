import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator} from '@happy/mobile/src/navigation/appNavigator/bottomTabNavigator';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';

const AppStack = createNativeStackNavigator();

// logged in user flow
export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={NavigationKeys.tab.bottomTab}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};
