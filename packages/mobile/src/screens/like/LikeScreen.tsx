import React, {FC} from 'react';
import {ScreenContainer, Title} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';

const LikeScreen: FC = () => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Like Screen</Title>
    </ScreenContainer>
  );
};

export default withTranslation()(LikeScreen);
