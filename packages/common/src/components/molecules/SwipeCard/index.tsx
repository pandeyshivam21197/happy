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
  Layout,
} from "react-native-reanimated";

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
    children,
    style,
    onTouchBegin,
    onTouchEnd,
    data,
    renderItem,
    activeOffsetX = DimensionUtils.width / 5,
  } = props;

  const x = useSharedValue(0);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

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

  const renderLayout = React.useCallback(
    (item: any, i: number) => {
      const animatedStyle = useAnimatedStyle(() => {
        // const isSwiped = state.value.swipedIndexes.includes(i);
        const isCurrentCard = state.value.currentIndex === i;

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
    <Animated.View
      style={[styles.container, styles.contentHorizontal, style]}
      //   onTouchStart={onTouchBegin}
      //   onTouchEnd={onTouchEnd}
    >
      <PanGestureHandler
        activeOffsetX={[-activeOffsetX, activeOffsetX]}
        enabled={true}
        onGestureEvent={panGestureEventHandler}
      >
        <Animated.View
          key={"mode"}
          layout={Layout.springify()}
          style={[
            styles.container,
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
    // overflow: "hidden",
    backgroundColor: "blue",
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
