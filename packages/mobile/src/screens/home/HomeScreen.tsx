import React, {FC} from 'react';
import {Title, ScreenContainer} from '@happy/common/src/components';
import {Carousel} from '@happy/common/src/components/molecules/Carousel';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  return (
    <ScreenContainer>
      <Title fontWeight="bold">Home Screen</Title>
      <Carousel />
    </ScreenContainer>
  );
};

export default HomeScreen;
