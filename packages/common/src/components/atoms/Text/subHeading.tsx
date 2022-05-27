import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import { FontWeightType } from "@happy/common/src/styles/interfaces";
import { StyleProp, TextStyle } from "react-native";

interface ISubHeadingProps {
  fontWeight?: FontWeightType;
  textColor?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

export const SubHeading: FC<ISubHeadingProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor, numberOfLines, style } = porps;

  return (
    <Text
      font={"subHeadingFont"}
      fontWeight={fontWeight}
      style={style}
      textColor={textColor}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};
