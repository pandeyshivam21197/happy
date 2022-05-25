import React, { FC } from "react";
import {
  Image as RNImage,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import Animated from "react-native-reanimated";
import { ShadowCard } from "../ShadowCard";

interface IProps {
  isAnimated?: boolean;
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
  showShadow?: boolean;
}

const Image: FC<IProps> = (props) => {
  const {
    isAnimated = true,
    source,
    resizeMode = "contain",
    style = {},
    showShadow = false,
  } = props;

  const Content: React.ReactNode = isAnimated ? Animated.Image : RNImage;
  const Container = showShadow ? (
    <ShadowCard>
      <Content style={style} source={source} resizeMode={resizeMode} />
    </ShadowCard>
  ) : (
    <Content style={style} source={source} resizeMode={resizeMode} />
  );

  return Container;
};

const image = React.memo(Image);

export { image as Image };
