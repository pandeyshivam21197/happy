import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontWeightType,
  IFontConfig,
} from "@happy/common/src/styles/interfaces";
import { StyleProp, TextStyle } from "react-native";

interface ITitleProps {
  fontWeight?: FontWeightType;
  textColor?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  customFont?: IFontConfig;
}

export const Title: FC<ITitleProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor, style, numberOfLines, customFont } =
    porps;

  return (
    <Text
      font="titleFont"
      fontWeight={fontWeight}
      style={style}
      textColor={textColor}
      numberOfLines={numberOfLines}
      customFont={customFont}
    >
      {children}
    </Text>
  );
};
