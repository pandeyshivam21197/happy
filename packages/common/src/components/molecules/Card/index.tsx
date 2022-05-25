import * as React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Image, View, TextWithIcon } from "@happy/common/src/components/index";
import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";

import fruit_0 from "./fruit-0.png";
import fruit_1 from "./fruit-1.png";
import fruit_2 from "./fruit-2.png";
import { icons } from "../../atoms/Icon";

const fruits = [fruit_0, fruit_2, fruit_1];

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
    <Animated.View>
      <Image
        source={fruits[index % 3]}
        style={[
          {
            width: 200,
            borderRadius: 16,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          },
          blockStyle,
        ]}
        resizeMode={"contain"}
        showShadow
      />
      <View>
        <TextWithIcon
          fontWeight="bold"
          text={"User Name, 24"}
          textType="heading"
          iconName={icons.heart}
        />
        <TextWithIcon
          fontWeight="bold"
          text={"User Name, 24"}
          textType="paragraph"
          iconName={icons.heart}
        />
      </View>
    </Animated.View>
  );
};

const getStyles = (index: number) =>
  StyleSheet.create({
    container: {
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
