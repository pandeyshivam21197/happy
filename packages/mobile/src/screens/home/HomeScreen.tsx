import React, {FC} from 'react';
import {Title, ScreenContainer, Card} from '@happy/common/src/components';
import {Carousel} from '@happy/common/src/components/molecules/Carousel';
import Animated, {useValue} from 'react-native-reanimated';
import {DimensionUtils} from '@happy/common/src/utils/DimensionUtils';
import {SwipeCard} from '@happy/common/src/components/molecules/SwipeCard';

const HomeScreen: FC<any> = (props): React.ReactElement => {
  const renderCard = ({
    index,
    animationValue,
  }: {
    index: number;
    animationValue: Animated.SharedValue<number>;
  }) => {
    return <Card key={index} index={index} />;
  };

  return (
    <ScreenContainer>
      <>
        <Title fontWeight="bold">Home Screen</Title>
        {/* <Carousel
          data={[1, 2, 3]}
          renderItem={renderCard}
          panGestureHandlerProps={{
            activeOffsetX: [
              -DimensionUtils.width / 4,
              DimensionUtils.width / 4,
            ],
          }}
        /> */}
        <SwipeCard
          data={[1, 2, 3]}
          renderItem={(item, i) => <Card itemId={item} index={item} />}
        />
      </>
    </ScreenContainer>
  );
};

export default HomeScreen;
