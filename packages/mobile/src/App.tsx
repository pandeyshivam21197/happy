/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import RootNavigator from '@happy/mobile/src/navigation';

const App = (): any => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
