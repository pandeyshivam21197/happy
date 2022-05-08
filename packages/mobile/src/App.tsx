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
// import '@happy/common/src/services/locale/MultiLingualService';

const App = (): any => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.appContainer}>
        <StatusBar barStyle={'dark-content'} />
        <RootNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
