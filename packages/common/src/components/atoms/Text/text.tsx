import React, { ReactElement, FC } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import theme from "@happy/common/src/styles/theme";
import {
  FontFamilyType,
  FontWeightType,
  FontTypes,
  IFontConfig,
  FWeightsTypes,
} from "@happy/common/src/styles/interfaces";

interface ITextProps {
  fontFamily?: FontFamilyType;
  fontWeight: FontWeightType;
  font: FontTypes;
  textColor?: string;
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
    textColor || textColors.titleTextColor
  );

  return <RNText style={styles.text}>{children}</RNText>;
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
