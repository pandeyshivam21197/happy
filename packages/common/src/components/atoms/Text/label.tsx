import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontWeightType,
  IFontConfig,
} from "@happy/common/src/styles/interfaces";
import { StyleProp, TextStyle } from "react-native";

interface ILabelProps {
  fontWeight?: FontWeightType;
  textColor?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  customFont?: IFontConfig;
}

export const Label: FC<ILabelProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor, style, numberOfLines, customFont } =
    porps;

  return (
    <Text
      font="secondaryFont"
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
