import React, {FC} from 'react';
import {View} from 'react-native';
import {
  Heading,
  Title,
  SubHeading,
  Paragraph,
  Label,
  ScreenContainer,
} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';
import Carousel from '@happy/common/src/components/molecules/Carousel';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Home Screen</Title>
      <Carousel />
    </ScreenContainer>
  );
};

export default withTranslation()(HomeScreen);
