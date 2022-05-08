import * as React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";

import fruit_0 from "./fruit-0.png";
import fruit_1 from "./fruit-1.png";
import fruit_2 from "./fruit-2.png";

const fruits = [fruit_0, fruit_2, fruit_1];
const colors = ["#fda282", "#fdba4e", "#800015"];

interface IProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
}

const Card: React.FC<IProps> = ({ index, animationValue }) => {
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

  const styles = getStyles(index);

  return (
    <Animated.View style={styles.container}>
      <Animated.Image
        source={fruits[index % 3]}
        style={[
          {
            width: DimensionUtils.width * 0.8,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
          },
          blockStyle,
        ]}
        resizeMode={"contain"}
      />
    </Animated.View>
  );
};

const getStyles = (index: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors[index],
      width: DimensionUtils.width,
      height: DimensionUtils.height,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },
  });

const card = React.memo(Card);

export { card as Card };
