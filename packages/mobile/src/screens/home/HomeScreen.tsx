import React, {FC} from 'react';
import {
  Heading,
  Title,
  SubHeading,
  Paragraph,
  Label,
  ScreenContainer,
} from '@happy/common/src/components';
import {withTranslation} from 'react-i18next';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Home Screen</Title>
      <Title fontWeight="bold">This is a Title</Title>
      <Heading fontWeight="bold">This is a Heading</Heading>
      <SubHeading fontWeight="bold">This is a SubHeading</SubHeading>
      <Paragraph fontWeight="bold">This is a Paragraph</Paragraph>
      <Label fontWeight="bold">This is a Label</Label>
    </ScreenContainer>
  );
};

export default withTranslation()(HomeScreen);
