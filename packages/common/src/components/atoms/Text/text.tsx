import React, { ReactElement, FC } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import theme from "@happy/common/src/styles/theme";
import {
  fontFamily,
  fontWeight,
  font,
  textColor,
  IFontConfig,
  fWeights,
} from "@happy/common/src/styles/interfaces";

interface ITextProps {
  fontFamily: fontFamily;
  fontWeight: fontWeight;
  font: font;
  textColor: textColor;
}

export const Text: FC<ITextProps> = (porps): ReactElement => {
  const {
    children,
    fontFamily = "regular",
    font,
    fontWeight = "normal",
    textColor = "primaryTextColor",
  } = porps;

  const {
    typography,
    palette: { textColors },
  } = theme;

  const styles = getStyles(
    typography.fontFamily[fontFamily],
    typography.font[font],
    typography.fontWeight[fontWeight],
    textColors[textColor]
  );

  return <RNText style={styles.text}>{children}</RNText>;
};

const getStyles = (
  fontFamily: string,
  font: IFontConfig,
  fontWeight: fWeights,
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
