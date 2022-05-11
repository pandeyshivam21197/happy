import React, { FC } from "react";
import {
  Image as RNImage,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import Animated from "react-native-reanimated";

interface IProps {
  isAnimated?: boolean;
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
}

const Image: FC<IProps> = (props) => {
  const {
    isAnimated = true,
    source,
    resizeMode = "contain",
    style = {},
  } = props;

  const Container = isAnimated ? Animated.Image : RNImage;

  return <Container style={style} source={source} resizeMode={resizeMode} />;
};

const image = React.memo(Image);

export { image as Image };
