import React, {FC} from 'react';
import {ScreenContainer, Title} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';

const OnBoardingScreen: FC = () => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">OnBoarding Screen</Title>
    </ScreenContainer>
  );
};

export default withTranslation()(OnBoardingScreen);
