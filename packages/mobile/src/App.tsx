/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {
  Heading,
  Title,
  SubHeading,
  Paragraph,
  Label,
} from '@happy/common/src/components';

const App = (): any => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Title fontWeight="bold" textColor="titleTextColor">
        This is a Title
      </Title>
      <Heading fontWeight="bold" textColor="titleTextColor">
        This is a Heading
      </Heading>
      <SubHeading fontWeight="bold" textColor="titleTextColor">
        This is a SubHeading
      </SubHeading>
      <Paragraph fontWeight="bold" textColor="titleTextColor">
        This is a Paragraph
      </Paragraph>
      <Label fontWeight="bold" textColor="titleTextColor">
        This is a Label
      </Label>
    </SafeAreaView>
  );
};

export default App;
