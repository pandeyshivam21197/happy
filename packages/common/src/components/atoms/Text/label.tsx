import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import { FontWeightType } from "@happy/common/src/styles/interfaces";

interface ILabelProps {
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Label: FC<ILabelProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor } = porps;

  return (
    <Text font={"secondaryFont"} fontWeight={fontWeight} textColor={textColor}>
      {children}
    </Text>
  );
};
