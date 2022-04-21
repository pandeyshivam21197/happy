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
import {I18nextProvider} from 'react-i18next';
import RootNavigator from '@happy/mobile/src/navigation';
import {MultiLingualService} from '@happy/common/src/services/locale/MultiLingualService';

const App = (): any => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={'dark-content'} />
      <I18nextProvider i18n={MultiLingualService.i18next}>
        <RootNavigator />
      </I18nextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
