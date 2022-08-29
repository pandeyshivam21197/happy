import React from "react";
import RNCarousel from "react-native-reanimated-carousel";
import { StyleSheet } from "react-native";
import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";
import { CarouselRenderItem } from "react-native-reanimated-carousel/lib/typescript/types";
import { PanGestureHandlerProps } from "react-native-gesture-handler";

interface IBaseOption {
  vertical: boolean;
  width: number;
  height: number;
}

const defaultBaseOption = {
  vertical: false,
  width: DimensionUtils.width,
  height: DimensionUtils.height,
};

interface IProps {
  baseOption?: IBaseOption;
  enableSnap?: boolean;
  enableAnimation?: boolean;
  onSnapToItem?: (index: number) => void;
  data: any[];
  renderItem: CarouselRenderItem<any>;
  animationType: "spring" | "timing";
  panGestureHandlerProps?: PanGestureHandlerProps;
}

const Carousel = React.forwardRef(function carousel(props: IProps, ref) {
  const {
    baseOption = defaultBaseOption,
    enableSnap = true,
    onSnapToItem,
    enableAnimation = true,
    data,
    renderItem,
    animationType = "spring",
    panGestureHandlerProps,
  } = props;

  const animationProp = enableAnimation
    ? {
        withAnimation: {
          type: animationType,
          config: {
            damping: 15,
          },
        },
      }
    : {};

  const refProps = ref ? { ref: ref } : {};

  return (
    <RNCarousel
      {...baseOption}
      {...animationProp}
      {...refProps}
      loop={false}
      autoPlay={false}
      style={styles.container}
      enabled={enableSnap}
      data={data}
      renderItem={renderItem}
      onSnapToItem={onSnapToItem}
      scrollAnimationDuration={200}
      panGestureHandlerProps={panGestureHandlerProps}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const carousel = React.memo(Carousel);

export { carousel as Carousel };
