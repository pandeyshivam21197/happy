/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {SemiBold1840} from '@happy/common/src/components/atoms/Text';
import Carousel from 'react-native-snap-carousel';

const App = (): any => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
