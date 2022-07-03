import React, {FC} from 'react';
import {Title, ScreenContainer, Card} from '@happy/common/src/components';
import {Carousel} from '@happy/common/src/components/molecules/Carousel';
import Animated from 'react-native-reanimated';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  const renderCard = ({
    index,
    animationValue,
  }: {
    index: number;
    animationValue: Animated.SharedValue<number>;
  }) => {
    return <Card animationValue={animationValue} key={index} index={index} />;
  };

  return (
    <ScreenContainer>
      <Title fontWeight="bold">Home Screen</Title>
      <Carousel data={[1, 2, 3]} renderItem={renderCard} />
    </ScreenContainer>
  );
};

export default HomeScreen;
