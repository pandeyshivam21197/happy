import React, { ReactElement, FC } from "react";
import { Text } from "@happy/common/src/components/atoms/Text/text";
import { FontWeightType } from "@happy/common/src/styles/interfaces";

interface IHeadingProps {
  fontWeight: FontWeightType;
  textColor?: string;
}

export const Heading: FC<IHeadingProps> = (porps): ReactElement => {
  const { children, fontWeight, textColor } = porps;

  return (
    <Text font={"headingFont"} fontWeight={fontWeight} textColor={textColor}>
      {children}
    </Text>
  );
};
