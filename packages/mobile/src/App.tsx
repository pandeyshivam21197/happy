/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Heading} from '@happy/common/src/components/atoms/Text/heading';
import {Title} from '@happy/common/src/components/atoms/Text/title';

const App = (): any => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Heading
        font="primaryFont"
        fontWeight="bold"
        textColor="titleTextColor"
        fontFamily="regular">
        This is a Heading
      </Heading>
      <Title
        font="primaryFont"
        fontWeight="bold"
        textColor="titleTextColor"
        fontFamily="regular">
        This is a Heading
      </Title>
    </SafeAreaView>
  );
};

export default App;
