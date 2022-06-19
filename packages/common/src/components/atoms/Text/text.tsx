import React, { FC } from "react";
import {
  Text as RNText,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextProps,
} from "react-native";
import theme from "@happy/common/src/styles/theme";
import {
  FontWeightType,
  FontTypes,
  IFontConfig,
  FWeightsTypes,
} from "@happy/common/src/styles/interfaces";
import Animated from "react-native-reanimated";

interface ITextProps extends TextProps {
  isAnimated?: boolean;
  fontWeight?: FontWeightType;
  font?: FontTypes;
  customFont?: IFontConfig;
  textColor?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
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
    palette: {
      textColors: { titleTextColor },
    },
  } = theme;

  const {
    isAnimated = true,
    children,
    font,
    customFont,
    fontWeight = "normal",
    numberOfLines,
    textColor = titleTextColor,
    style,
    ...rest
  } = porps;

  const styles = getStyles(
    typography.fontFamily[fontWeight],
    customFont || typography.font[font as FontTypes],
    typography.fontWeight[fontWeight],
    textColor
  );

  const Container = isAnimated ? Animated.Text : RNText;

  return (
    <Container
      ellipsizeMode="tail"
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      {...rest}
    >
      {children}
    </Container>
  );
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
