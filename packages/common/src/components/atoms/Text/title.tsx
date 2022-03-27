import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontFamilyType,
  FontWeightType,
} from "@happy/common/src/styles/interfaces";

interface ITitleProps {
  fontFamily?: FontFamilyType;
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Title: FC<ITitleProps> = (porps): ReactElement => {
  const { children, fontFamily, fontWeight, textColor } = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={"titleFont"}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {children}
    </Text>
  );
};
