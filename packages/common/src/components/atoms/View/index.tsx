import React, { FC } from "react";
import Animated from "react-native-reanimated";
import { View as RNView, ViewProps } from "react-native";

interface IProps extends ViewProps {
  isAnimated?: boolean;
}

const View: FC<IProps> = (props) => {
  const { isAnimated = true, children, ...rest } = props;

  const Container = isAnimated ? Animated.View : RNView;

  return <Container {...rest}>{children}</Container>;
};

const view = React.memo(View);

export { view as View };
