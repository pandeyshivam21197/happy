import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {LikeScreen} from '@happy/mobile/src/screens';

export type LikeStackNavigatorParamList = {
  [NavigationKeys.likeScreen]: undefined;
};

const LikeStack = createNativeStackNavigator<LikeStackNavigatorParamList>();

export const LikeStackNavigator: FC = () => {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen
        name={NavigationKeys.likeScreen}
        component={LikeScreen}
        options={{headerShown: false}}
      />
    </LikeStack.Navigator>
  );
};
