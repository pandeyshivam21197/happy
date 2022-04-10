import React, {FC} from 'react';
import {View} from 'react-native';
import {ScreenContainer, Title} from '@happy/common/src/components';

export const SignUpScreen: FC = () => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Sign up Screen</Title>
      <Title fontWeight="bold">This is a Title</Title>
    </ScreenContainer>
  );
};
