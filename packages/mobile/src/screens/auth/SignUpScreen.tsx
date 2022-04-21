import React, {FC} from 'react';
import {ScreenContainer, Title} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';

const SignUpScreen: FC = () => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Sign up Screen</Title>
      <Title fontWeight="bold">This is a Title</Title>
    </ScreenContainer>
  );
};

export default withTranslation()(SignUpScreen);
