import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {ChatScreen} from '@happy/mobile/src/screens';

export type ChatStackNavigatorParamList = {
  [NavigationKeys.chatScreen]: undefined;
};

const ChatStack = createNativeStackNavigator<ChatStackNavigatorParamList>();

export const ChatStackNavigator: FC = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name={NavigationKeys.chatScreen}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </ChatStack.Navigator>
  );
};
