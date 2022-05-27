import * as React from "react";
import RNCarousel from "react-native-reanimated-carousel";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";
import { Card } from "@happy/common/src/components/molecules/Card";

function Carousel() {
  const baseOptions = {
    vertical: false,
    width: DimensionUtils.width,
    height: DimensionUtils.height,
  } as const;

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
    <RNCarousel
      {...baseOptions}
      loop={false}
      autoPlay={false}
      style={styles.container}
      withAnimation={{
        type: "spring",
        config: {
          damping: 15,
        },
      }}
      enabled
      data={[1, 2, 3]}
      renderItem={renderCard}
      onSnapToItem={() => {
        //TODO: Shivam write api logic
      }}
      enableSnap
      scrollAnimationDuration={200}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const carousel = React.memo(Carousel);

export { carousel as Carousel };
