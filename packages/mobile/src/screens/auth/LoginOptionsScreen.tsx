import React, {FC} from 'react';
import {ScreenContainer, Title} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';

const LoginScreen: FC = () => {
  return (
    <ScreenContainer enableBack={false} showHeader={false}>
      <Title fontWeight="bold">Login Screen</Title>
    </ScreenContainer>
  );
};

export default withTranslation()(LoginScreen);
