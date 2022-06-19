import { isAndroid } from "@happy/common/src/utils/PlatformUtils";
import {
  FontFamilyType,
  FontTypes,
  FontWeightType,
  IFontConfig,
} from "@happy/common/src/styles/interfaces";
import React, { useState } from "react";
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextStyle,
} from "react-native";
import theme from "../../../styles/theme";

interface IFonts<T> {
  fontFamily?: FontFamilyType;
  font?: T;
  fontWeight?: FontWeightType;
}

interface IStyles {
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  multiline?: boolean;
  height?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  textColor?: string;
}

interface IProps extends IStyles, IFonts<FontTypes> {
  onChangeText: (value: string) => void;
  onSubmitEditing?: () => void;
  value: string;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  centerAligned?: boolean;
  isShadow?: boolean;
  onTextBlur?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardType;
  customFont?: IFontConfig;
}

export const TextInput = (props: IProps) => {
  const {
    borderRadius,
    borderColor,
    onChangeText,
    placeholder,
    onSubmitEditing,
    value,
    style = {},
    secureTextEntry = false,
    centerAligned = false,
    multiline,
    isShadow,
    onTextBlur = () => {},
    placeholderTextColor,
    keyboardType,
    customFont,
    borderWidth,
    fontWeight = "normal",
    font = "primaryFont",
    height,
    paddingHorizontal = 4,
    paddingVertical = 4,
    textColor,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const styles = getStyles({
    borderRadius,
    borderColor,
    borderWidth,
    fontFamily: theme.typography.fontFamily[fontWeight] as FontFamilyType,
    font: customFont || theme.typography.font[font],
    fontWeight: theme.typography.fontWeight[fontWeight] as FontWeightType,
    multiline,
    height,
    paddingHorizontal,
    paddingVertical,
    textColor,
  });

  const textProps = centerAligned
    ? {
        onFocus: () => setIsFocused(true),
        onBlur: () => {
          setIsFocused(false);
          onTextBlur();
        },
      }
    : {};

  const shadow = isShadow ? styles.shadow : {};

  return (
    <RNTextInput
      style={[
        styles.textInput,
        isFocused || !centerAligned ? styles.focusedStyle : {},
        shadow,
        style,
      ]}
      onChangeText={(text) => {
        onChangeText(text);
      }}
      autoFocus={true}
      placeholder={!isFocused ? placeholder : ""}
      value={value}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      placeholderTextColor={
        placeholderTextColor || theme.palette.borderColors.border01
      }
      {...textProps}
      multiline={multiline}
      keyboardType={keyboardType}
      textAlignVertical="center"
      allowFontScaling
    />
  );
};

interface IStyleConfig extends IStyles, IFonts<IFontConfig> {}

const getStyles = (config: IStyleConfig) => {
  const {
    borderRadius,
    borderColor,
    borderWidth = 1,
    fontFamily,
    font,
    fontWeight,
    multiline,
    height,
    paddingHorizontal,
    paddingVertical,
    textColor,
  } = config;
  return StyleSheet.create({
    textInput: {
      maxHeight: 100,
      borderRadius: borderRadius,
      borderWidth: borderColor ? borderWidth : 0,
      backgroundColor: theme.palette.neutral.white,
      borderColor: borderColor || theme.palette.borderColors.border01,
      textAlign: "center",
      color: textColor || theme.palette.textColors.titleTextColor,
      fontSize: (font as IFontConfig).fontSize,
      ...(isAndroid() || multiline
        ? { lineHeight: (font as IFontConfig).lineHeight }
        : {}),
      fontWeight: fontWeight,
      fontFamily,
      paddingTop: 32,
      paddingBottom: 32,
      minHeight: height,
      ...(paddingHorizontal ? { paddingHorizontal: paddingHorizontal } : {}),
      ...(paddingVertical
        ? {
            paddingTop: paddingVertical,
            paddingBottom: paddingVertical,
          }
        : {}),
    },
    focusedStyle: {
      textAlign: "left",
    },
    shadow: {
      shadowColor: theme.palette.neutral.black,
      shadowOffset: {
        width: 1.5,
        height: 1.5,
      },
      shadowOpacity: 0.05,
      shadowRadius: 1.0,
      elevation: 1,
      borderWidth: 0.5,
    },
  });
};
