import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontWeightType,
  IFontConfig,
} from "@happy/common/src/styles/interfaces";
import { StyleProp, TextStyle } from "react-native";

interface ISubHeadingProps {
  fontWeight?: FontWeightType;
  textColor?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  customFont?: IFontConfig;
}

export const Paragraph: FC<ISubHeadingProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor, style, numberOfLines, customFont } =
    porps;

  return (
    <Text
      font="primaryFont"
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
