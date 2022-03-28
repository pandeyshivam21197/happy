/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import RootNavigator from '@happy/mobile/src/navigation';

const App = (): any => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
