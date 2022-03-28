import React, {FC} from 'react';
import {
  Heading,
  Title,
  SubHeading,
  Paragraph,
  Label,
} from '@happy/common/src/components';
import {SafeAreaView} from 'react-native';

export const HomeScreen: FC<any> = (): React.ReactElement => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Title fontWeight="bold">Home Screen</Title>
      <Title fontWeight="bold">This is a Title</Title>
      <Heading fontWeight="bold">This is a Heading</Heading>
      <SubHeading fontWeight="bold">This is a SubHeading</SubHeading>
      <Paragraph fontWeight="bold">This is a Paragraph</Paragraph>
      <Label fontWeight="bold">This is a Label</Label>
    </SafeAreaView>
  );
};