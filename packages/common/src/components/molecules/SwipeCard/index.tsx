import { DimensionUtils } from "@happy/common/src/utils/DimensionUtils";
import React, { useEffect, useState } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import chroma from "chroma-js";
import theme from "@happy/common/src/styles/theme";

interface IProps<T> {
  style?: StyleProp<ViewStyle>;
  onTouchBegin?: () => void;
  onTouchEnd?: () => void;
  data: T[];
  renderItem: (item: T, i: number) => React.ReactNode;
  activeOffsetX?: number;
}

type GestureContext = {
  startX: number;
};

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

  const x = useSharedValue(0);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const bgColor = useSharedValue<string>("#ffff");

  const state = useSharedValue<IState>({
    currentIndex: 0,
    swipedIndexes: [],
  });

  const { currentIndex, swipedIndexes } = state.value;

  const [cards, setCards] = useState(data);

  useEffect(() => {
    setCards(data);
  }, [data]);

  const panGestureEventHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >(
    {
      onStart: (e, ctx) => {
        ctx.startX = x.value;
        positionX.value = e.translationX;
        positionY.value = e.translationY;
      },
      onActive: (e, ctx) => {
        positionX.value = e.translationX;
        positionY.value = e.translationY;
      },
      onEnd: (e) => {
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
      },
    },
    []
  );

  const getBgColor = () => {
    const rightSwipe = positionX.value > 0;

    const scale = chroma
      .scale([
        "#ffff",
        rightSwipe ? "rgba(51, 255, 170, 0.25)" : "rgba(199, 0, 57 , 0.25)",
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
          {renderItem(item, i)}
        </Animated.View>
      );
    },
    [renderItem, data, currentIndex]
  );

  return (
    <Animated.View style={[styles.container, styles.contentHorizontal, style]}>
      <PanGestureHandler
        activeOffsetX={[-activeOffsetX, activeOffsetX]}
        enabled={true}
        onGestureEvent={panGestureEventHandler}
      >
        <Animated.View
          style={[
            styles.cardList,
            {
              width: "100%",
              height: "100%",
            },
            style,
            styles.itemsHorizontal,
          ]}
        >
          {cards.map(renderLayout)}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const getStyle = (index: number) => {
  return StyleSheet.create({
    card: {
      position: "absolute",
      zIndex: 100 - index,
    },
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    flex: 1,
  },
  contentHorizontal: {
    flexDirection: "row",
  },
  itemsHorizontal: {
    flexDirection: "row",
  },
  swipedCard: {
    transform: [{ translateX: DimensionUtils.width + 40 }],
  },
});
