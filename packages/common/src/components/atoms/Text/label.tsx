import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import {
  FontFamilyType,
  FontWeightType,
} from "@happy/common/src/styles/interfaces";

interface ILabelProps {
  fontFamily?: FontFamilyType;
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Label: FC<ILabelProps> = (porps): ReactElement => {
  const { children, fontFamily, fontWeight, textColor } = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={"secondaryFont"}
      fontWeight={fontWeight}
      textColor={textColor}
    >
      {children}
    </Text>
  );
};
