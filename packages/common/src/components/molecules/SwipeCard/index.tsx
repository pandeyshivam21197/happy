import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import chroma from "chroma-js";
import theme from "@happy/common/src/styles/theme";
import { View } from "../../atoms/View";

interface IProps<T> {
  style?: StyleProp<ViewStyle>;
  onTouchBegin?: () => void;
  onTouchEnd?: () => void;
  data: T[];
  renderItem: (item: T, i: number) => React.ReactNode;
  activeOffsetX?: number;
}

interface IState {
  currentIndex: number;
  swipedIndexes: number[];
}

export const SwipeCard: React.FC<IProps<any>> = (props) => {
  const {
    style,
    data,
    renderItem,
    activeOffsetX = DimensionUtils.width / 8,
  } = props;

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const bgColor = useSharedValue<string>(theme.palette.component.swipeCardBg);

  const panRef = useRef(undefined);
  const gestureHandlerRef = useRef(undefined);

  const state = useSharedValue<IState>({
    currentIndex: 0,
    swipedIndexes: [],
  });

  const { currentIndex } = state.value;

  const [cards, setCards] = useState(data);

  useEffect(() => {
    setCards(data);
  }, [data]);

  const nativeGesture = useMemo(
    () => Gesture.Native().withRef(gestureHandlerRef),
    []
  );

  const panPressGesture = useMemo(
    () =>
      Gesture.Pan()
        .onStart((e) => {
          positionX.value = e.translationX;
          positionY.value = e.translationY;
        })
        .onUpdate((e) => {
          positionX.value = e.translationX;
          positionY.value = e.translationY;
        })
        .onEnd(() => {
          //did not swipe the threshold
          if (Math.abs(positionX.value) < activeOffsetX) {
            positionX.value = withSpring(0, { damping: 15 });

            return;
          }

          // swiped right
          if (positionX.value > 0) {
            positionX.value = withSpring(
              DimensionUtils.width + 40,
              {
                mass: 0.2,
              },
              () => {
                positionX.value = 0;

                state.value = {
                  swipedIndexes: [
                    ...state.value.swipedIndexes,
                    state.value.currentIndex,
                  ],
                  currentIndex: state.value.currentIndex + 1,
                };
              }
            );
          } else {
            //swipe left
            positionX.value = withSpring(
              -DimensionUtils.width - 40,
              {
                mass: 0.2,
              },
              () => {
                positionX.value = 0;

                state.value = {
                  swipedIndexes: [
                    ...state.value.swipedIndexes,
                    state.value.currentIndex,
                  ],
                  currentIndex: state.value.currentIndex + 1,
                };
              }
            );
          }
        })
        .withRef(panRef)
        .simultaneousWithExternalGesture(nativeGesture),

    []
  );

  const getBgColor = () => {
    const rightSwipe = positionX.value > 0;

    const scale = chroma
      .scale([
        theme.palette.component.swipeCardBg,
        rightSwipe
          ? theme.palette.component.swipeCardRightBg
          : theme.palette.component.swipeCardLeftBg,
      ])
      .mode("lch")
      .domain([0, rightSwipe ? activeOffsetX : -activeOffsetX]);

    bgColor.value = scale(positionX.value).hex("auto");
  };

  const renderLayout = React.useCallback(
    (item: any, i: number) => {
      const animatedStyle = useAnimatedStyle(() => {
        const isCurrentCard = state.value.currentIndex === i;

        runOnJS(getBgColor)();

        return {
          ...(isCurrentCard
            ? {
                transform: [
                  {
                    translateX: positionX.value,
                  },
                ],
              }
            : {}),
          opacity: i < state.value.currentIndex ? 0 : 1,
          backgroundColor: theme.palette.neutral.white,
          ...(isCurrentCard ? { backgroundColor: bgColor.value } : {}),
        };
      }, [state]);

      const style = getStyle(i);

      return (
        <Animated.View style={[style.card, animatedStyle]} key={i}>
          <ScrollView bounces={false} scrollEventThrottle={1}>
            <View
              onStartShouldSetResponder={() => true}
              onStartShouldSetResponderCapture={() => true}
              onMoveShouldSetResponderCapture={() => true}
              onMoveShouldSetResponder={() => true}
            >
              {renderItem(item, i)}
            </View>
          </ScrollView>
        </Animated.View>
      );
    },
    [renderItem, data, currentIndex]
  );

  return (
    <Animated.View style={[styles.container, style]}>
      <GestureDetector gesture={panPressGesture}>
        <Animated.View style={[styles.contentContainer, style]}>
          {cards.map(renderLayout)}
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

const getStyle = (index: number) => {
  return StyleSheet.create({
    card: {
      position: "absolute",
      zIndex: 100 - index,
      flex: 1,
    },
  });
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
});
