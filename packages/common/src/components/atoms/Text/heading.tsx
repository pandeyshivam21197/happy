import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontFamilyType,
  FontWeightType,
} from "@happy/common/src/styles/interfaces";

interface IHeadingProps {
  fontFamily?: FontFamilyType;
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Heading: FC<IHeadingProps> = (porps): ReactElement => {
  const { children, fontFamily, fontWeight, textColor } = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={"headingFont"}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {children}
    </Text>
  );
};
