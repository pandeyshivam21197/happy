import React, {FC} from 'react';
import {ScreenContainer, Title} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';

const ChatScreen: FC = () => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Chat Screen</Title>
    </ScreenContainer>
  );
};

export default withTranslation()(ChatScreen);
