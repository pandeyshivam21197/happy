import React, { FC } from "react";
import Animated from "react-native-reanimated";
import { View as RNView } from "react-native";

interface IProps {
  isAnimated?: boolean;
}

const View: FC<IProps> = (props) => {
  const { isAnimated = true, children } = props;

  const Container = isAnimated ? Animated.View : RNView;

  return (
    <Container>
      <>{children}</>
    </Container>
  );
};

const view = React.memo(View);

export { view as View };
