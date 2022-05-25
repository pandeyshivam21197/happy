import React, { FC } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import theme from "@happy/common/src/styles/theme";
import {
  FontWeightType,
  FontTypes,
  IFontConfig,
  FWeightsTypes,
} from "@happy/common/src/styles/interfaces";
import Animated from "react-native-reanimated";

interface ITextProps {
  isAnimated?: boolean;
  fontWeight: FontWeightType;
  font: FontTypes;
  textColor?: string;
}

export type TextTypes =
  | "heading"
  | "label"
  | "paragraph"
  | "subHeading"
  | "title";

export const Text: FC<ITextProps> = (porps) => {
  const {
    typography,
    palette: { textColors },
  } = theme;

  const {
    children,
    font,
    fontWeight = "normal",
    textColor = textColors.titleTextColor,
    isAnimated = true,
  } = porps;

  const styles = getStyles(
    typography.fontFamily[fontWeight],
    typography.font[font],
    typography.fontWeight[fontWeight],
    textColor
  );

  const Container = isAnimated ? Animated.Text : RNText;

  return <Container style={styles.text}>{children}</Container>;
};

const getStyles = (
  fontFamily: string,
  font: IFontConfig,
  fontWeight: FWeightsTypes,
  textColor: string
) =>
  StyleSheet.create({
    text: {
      fontFamily: fontFamily,
      fontSize: font.fontSize,
      lineHeight: font.lineHeight,
      fontWeight: fontWeight,
      color: textColor,
    },
  });
