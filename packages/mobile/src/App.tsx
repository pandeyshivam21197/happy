/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RootNavigator from '@happy/mobile/src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import theme from '@happy/common/src/styles/theme';
import {StatusAndKeyBoardLayout} from './components/atoms/StatusAndKeyboardLayout';

const App = (): any => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  headContainer: {flex: 0, backgroundColor: theme.palette.statusBar},
  mainContainer: {flex: 1, backgroundColor: theme.palette.statusBar},
});

export default App;
