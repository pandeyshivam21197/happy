import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontFamilyType,
  FontWeightType,
  FontTypes,
  TextColorTypes,
} from "@happy/common/src/styles/interfaces";

interface ISubHeadingProps {
  fontFamily?: FontFamilyType;
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Paragraph: FC<ISubHeadingProps> = (porps): ReactElement => {
  const { children, fontFamily, fontWeight, textColor } = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={"primaryFont"}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {children}
    </Text>
  );
};
