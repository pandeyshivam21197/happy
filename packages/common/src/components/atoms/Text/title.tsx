import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import { FontWeightType } from "@happy/common/src/styles/interfaces";

interface ITitleProps {
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Title: FC<ITitleProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor } = porps;

  return (
    <Text font={"titleFont"} fontWeight={fontWeight} textColor={textColor}>
      {children}
    </Text>
  );
};
