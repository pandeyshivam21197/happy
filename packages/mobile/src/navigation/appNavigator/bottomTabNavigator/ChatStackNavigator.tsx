import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '@happy/mobile/src/navigation/constants';
import {ChatScreen} from '@happy/mobile/src/screens/chat/ChatScreen';

const ChatStack = createNativeStackNavigator();

export const HomeStackNavigator: FC = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name={NavigationKeys.screen.chatScreen}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </ChatStack.Navigator>
  );
};
