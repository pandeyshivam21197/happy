import * as React from "react";
import RNCarousel from "react-native-reanimated-carousel";
import {
  Dimensions,
  ScaledSize,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { withAnchorPoint } from "./anchor-point";

import fruit_0 from "./fruit-0.png";
import fruit_1 from "./fruit-1.png";
import fruit_2 from "./fruit-2.png";

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export const window: ScaledSize = Dimensions.get("window");

const fruits = [fruit_0, fruit_2, fruit_1];

const colors = ["#fda282", "#fdba4e", "#800015"];

const PAGE_WIDTH = window.width;
const PAGE_HEIGHT = window.width * 1.2;

function Carousel() {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  } as const;

  return (
    <View style={{ flex: 1 }}>
      <RNCarousel
        {...baseOptions}
        loop
        autoPlay={isAutoPlay}
        withAnimation={{
          type: "spring",
          config: {
            damping: 13,
          },
        }}
        autoPlayInterval={1500}
        data={colors}
        renderItem={({ index, animationValue }) => (
          <Card animationValue={animationValue} key={index} index={index} />
        )}
      />
      <TouchableOpacity
        onPress={() => {
          setIsAutoPlay(!isAutoPlay);
        }}
      >
        <Text>
          {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Card: React.FC<{
  index: number;
  animationValue: Animated.SharedValue<number>;
}> = ({ index, animationValue }) => {
  const WIDTH = PAGE_WIDTH / 1.5;
  const HEIGHT = PAGE_HEIGHT / 1.5;

  const cardStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-0.1, 0, 1],
      [0.95, 1, 1],
      Extrapolate.CLAMP
    );

    const translateX = interpolate(
      animationValue.value,
      [-1, -0.2, 0, 1],
      [0, WIDTH * 0.3, 0, 0]
    );

    const transform = {
      transform: [
        { scale },
        { translateX },
        { perspective: 200 },
        {
          rotateY: `${interpolate(
            animationValue.value,
            [-1, 0, 0.4, 1],
            [30, 0, -25, -25],
            Extrapolate.CLAMP
          )}deg`,
        },
      ],
    };

    return {
      ...withAnchorPoint(
        transform,
        { x: 0.5, y: 0.5 },
        { width: WIDTH, height: HEIGHT }
      ),
    };
  }, [index]);

  const blockStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, 60, 60]
    );

    const translateY = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, -40, -40]
    );

    const rotateZ = interpolate(animationValue.value, [-1, 0, 1], [0, 0, -25]);

    return {
      transform: [{ translateX }, { translateY }, { rotateZ: `${rotateZ}deg` }],
    };
  }, [index]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: colors[index],
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            width: WIDTH,
            height: HEIGHT,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,
          },
          cardStyle,
        ]}
      />

      <Animated.Image
        source={fruits[index % 3]}
        style={[
          {
            width: WIDTH * 0.8,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 999,
          },
          blockStyle,
        ]}
        resizeMode={"contain"}
      />
    </Animated.View>
  );
};

export default Carousel;
