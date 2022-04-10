import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {LikeScreen} from '@happy/mobile/src/screens';

const LikeStack = createNativeStackNavigator();

export const LikeStackNavigator: FC = () => {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen
        name={NavigationKeys.screen.likeScreen}
        component={LikeScreen}
        options={{headerShown: false}}
      />
    </LikeStack.Navigator>
  );
};
