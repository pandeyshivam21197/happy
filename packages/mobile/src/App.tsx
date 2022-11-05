/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import {StatusBar, StyleSheet} from 'react-native';
import RootNavigator from '@happy/mobile/src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import theme from '@happy/common/src/styles/theme';
import {MultiLingualService} from '@happy/common/src/services/locale/MultiLingualService';
import {persistor} from '@happy/common/src/redux/store';

const App = (): any => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={persistor as any}>
        <I18nextProvider i18n={MultiLingualService.i18next}>
          <StatusBar barStyle={'dark-content'} />
          <RootNavigator />
        </I18nextProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  headContainer: {flex: 0, backgroundColor: theme.palette.statusBar},
  mainContainer: {flex: 1, backgroundColor: theme.palette.statusBar},
});

export default App;
